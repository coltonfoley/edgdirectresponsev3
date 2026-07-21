import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { getRainmakerLeadIntakeUrl } from '@/lib/rainmaker-api';

// Simple in-memory rate limiter
// For production with high traffic, use Redis instead
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP
const DEFAULT_NOTIFICATION_EMAIL = 'cfoley@edgpatioshade.com';
const MAX_LEAD_REQUEST_BYTES = 4.25 * 1024 * 1024;
const MAX_ATTACHMENT_COUNT = 4;
const MAX_ATTACHMENT_BYTES = 1 * 1024 * 1024;
const MAX_TOTAL_ATTACHMENT_BYTES = 3.5 * 1024 * 1024;
const RAINMAKER_FETCH_TIMEOUT_MS = 10_000;
const RAINMAKER_ATTACHMENT_TIMEOUT_MS = 20_000;
const RESEND_FETCH_TIMEOUT_MS = 10_000;
const ALLOWED_ATTACHMENT_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
]);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    // Reset window
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function hasRainmakerConfig(): boolean {
  return !!(getRainmakerLeadIntakeUrl() && process.env.RAINMAKER_API_KEY);
}

function allowsLeadFollowUpEmails(): boolean {
  return process.env.ENABLE_LEAD_FOLLOW_UP_EMAILS === 'true';
}

interface LeadSubmission {
  email: string;
  firstName: string;
  lastName?: string;
  phone?: string;
  location?: string;
  projectType?: string;
  message?: string;
  source?: string;
  customerType?: string;
  metadata?: Record<string, unknown> | null;
  fax?: string; // Honeypot
}

interface LeadAttachment {
  filename: string;
  content: string;
  contentType: string;
  size: number;
}

interface ParsedLeadRequest {
  lead: LeadSubmission;
  attachments: LeadAttachment[];
}

interface LeadRecord {
  id: string;
  created_at: string;
  storage: 'rainmaker';
  submission_id: string;
}

function getSubmissionId(
  metadata: LeadSubmission['metadata']
): string | undefined {
  const submissionId = metadata?.submission_id;

  return typeof submissionId === 'string' && submissionId.length <= 160
    ? submissionId
    : undefined;
}

type AttachmentUploadStatus = 'none' | 'uploaded' | 'failed';

interface AttachmentUploadState {
  status: AttachmentUploadStatus;
  error?: string;
}

interface EmailLogs {
  admin?: {
    success: boolean;
    id?: unknown;
    error?: unknown;
  };
  followUp?: {
    skipped: true;
    reason: string;
  };
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function normalizeLeadText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function escapeHtml(value: unknown): string {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function cleanEmailHeader(value: unknown, fallback = ''): string {
  const cleaned = normalizeLeadText(value)
    .replace(/[\r\n]+/g, ' ')
    .slice(0, 160);
  return cleaned || fallback;
}

function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message;
  }

  return fallback;
}

function operationalErrorCode(error: unknown): string {
  if (error instanceof Error && error.name) {
    return error.name.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 80) || 'Error';
  }
  if (typeof error === 'object' && error !== null) {
    const status = 'status' in error ? error.status : undefined;
    if (typeof status === 'number' || typeof status === 'string') {
      return `status_${String(status)
        .replace(/[^a-zA-Z0-9_-]/g, '')
        .slice(0, 20)}`;
    }
  }
  return 'operation_failed';
}

async function fetchWithTimeout(
  input: string | URL | Request,
  init: RequestInit,
  timeoutMs: number
): Promise<Response> {
  return fetch(input, {
    ...init,
    signal: AbortSignal.timeout(timeoutMs),
  });
}

function getFormString(formData: FormData, key: string): string | undefined {
  const value = formData.get(key);
  return typeof value === 'string' ? value : undefined;
}

function getFormMetadata(
  formData: FormData
): Record<string, unknown> | undefined {
  const value = getFormString(formData, 'metadata');
  if (!value) return undefined;

  try {
    const parsed = JSON.parse(value);
    return typeof parsed === 'object' &&
      parsed !== null &&
      !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : undefined;
  } catch {
    return undefined;
  }
}

function sanitizeAttachmentFilename(filename: string): string {
  const cleaned = filename
    .trim()
    .replace(/[/\\?%*:|"<>]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 120);

  return cleaned || 'edg-site-photo.jpg';
}

function getAttachmentSummaryHtml(
  attachments: LeadAttachment[],
  uploadState: AttachmentUploadState
): string {
  if (!attachments.length) return '';

  const items = attachments
    .map(
      (attachment) =>
        `<li>${escapeHtml(attachment.filename)} (${formatBytes(attachment.size)})</li>`
    )
    .join('');

  return `
    <hr />
    <h3>Uploaded Photos:</h3>
    <p>${getAttachmentStatusMessage(attachments.length, uploadState)}</p>
    <ul>${items}</ul>
  `;
}

function getAttachmentStatusMessage(
  count: number,
  uploadState: AttachmentUploadState
): string {
  const photoLabel = `${count} photo${count === 1 ? '' : 's'}`;

  if (uploadState.status === 'uploaded') {
    return `${photoLabel} stored on the Rainmaker lead and attached to this notification email.`;
  }

  if (uploadState.status === 'failed') {
    return `${photoLabel} attached to this notification email. Rainmaker photo storage failed after the lead was captured; check logs before asking the customer to resubmit.`;
  }

  return `${photoLabel} attached to this notification email.`;
}

async function fileToLeadAttachment(file: File): Promise<LeadAttachment> {
  if (!ALLOWED_ATTACHMENT_TYPES.has(file.type)) {
    throw new Error(`${file.name} must be a JPG, PNG, or WebP image.`);
  }

  if (file.size > MAX_ATTACHMENT_BYTES) {
    throw new Error(
      `${file.name} is larger than ${formatBytes(MAX_ATTACHMENT_BYTES)} after compression.`
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  return {
    filename: sanitizeAttachmentFilename(file.name),
    content: buffer.toString('base64'),
    contentType: file.type,
    size: file.size,
  };
}

async function parseLeadRequest(
  request: NextRequest
): Promise<ParsedLeadRequest> {
  const contentLength = Number(request.headers.get('content-length') || 0);

  if (
    Number.isFinite(contentLength) &&
    contentLength > MAX_LEAD_REQUEST_BYTES
  ) {
    throw new Error(
      `Photo uploads are limited to ${formatBytes(MAX_TOTAL_ATTACHMENT_BYTES)} total.`
    );
  }

  const contentType = request.headers.get('content-type') || '';

  if (!contentType.includes('multipart/form-data')) {
    const body = (await request.json()) as LeadSubmission;
    return { lead: body, attachments: [] };
  }

  const formData = await request.formData();
  const uploadedFiles = formData
    .getAll('attachments')
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (uploadedFiles.length > MAX_ATTACHMENT_COUNT) {
    throw new Error(`Upload up to ${MAX_ATTACHMENT_COUNT} photos.`);
  }

  const totalBytes = uploadedFiles.reduce(
    (total, file) => total + file.size,
    0
  );

  if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
    throw new Error(
      `Photo uploads are limited to ${formatBytes(MAX_TOTAL_ATTACHMENT_BYTES)} total.`
    );
  }

  const attachments = await Promise.all(
    uploadedFiles.map(fileToLeadAttachment)
  );

  return {
    lead: {
      email: getFormString(formData, 'email') || '',
      firstName: getFormString(formData, 'firstName') || '',
      lastName: getFormString(formData, 'lastName'),
      phone: getFormString(formData, 'phone'),
      location: getFormString(formData, 'location'),
      projectType: getFormString(formData, 'projectType'),
      message: getFormString(formData, 'message'),
      source: getFormString(formData, 'source'),
      customerType: getFormString(formData, 'customerType'),
      metadata: getFormMetadata(formData),
      fax: getFormString(formData, 'fax'),
    },
    attachments,
  };
}

function looksLikeRandomText(value: unknown): boolean {
  const text = normalizeLeadText(value);
  if (text.length < 10) return false;

  const compact = text.replace(/[^a-zA-Z0-9]/g, '');
  if (compact.length < 10) return false;

  const letters = compact.replace(/[^a-zA-Z]/g, '');
  const vowels = letters.match(/[aeiou]/gi)?.length || 0;
  const vowelRatio = letters.length > 0 ? vowels / letters.length : 0;
  const hasMixedCase = /[a-z]/.test(letters) && /[A-Z]/.test(letters);
  const hasUppercaseAndDigits = /[A-Z]/.test(compact) && /\d/.test(compact);
  const hasLongUnbrokenToken = text
    .split(/\s+/)
    .some((token) => token.replace(/[^a-zA-Z0-9]/g, '').length >= 14);
  const hasMostlyUniqueCharacters =
    new Set(compact.toLowerCase()).size / compact.length > 0.6;

  return (
    hasLongUnbrokenToken &&
    hasMostlyUniqueCharacters &&
    (hasMixedCase || hasUppercaseAndDigits) &&
    vowelRatio < 0.35
  );
}

function hasSpamContentSignals(lead: LeadSubmission): boolean {
  const signals = [
    looksLikeRandomText(lead.firstName),
    looksLikeRandomText(lead.lastName),
    looksLikeRandomText(lead.location),
    looksLikeRandomText(lead.message),
  ].filter(Boolean).length;

  const message = normalizeLeadText(lead.message);
  const shortRandomMessage =
    message.length > 0 && message.length <= 40 && looksLikeRandomText(message);

  return signals >= 2 || (signals >= 1 && shortRandomMessage);
}

async function fakeAcceptedSpamResponse(reason: string) {
  console.log(`Spam detected (${reason}); customer fields were not logged.`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(
    {
      success: true,
      accepted: false,
      message: 'Thank you! We have received your information.',
      leadId: 'spam-blocked',
    },
    { status: 201 }
  );
}

function getNotificationRecipients(): string[] {
  const configuredRecipients = (process.env.NOTIFICATION_EMAIL || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
  const seen = new Set<string>();

  return [...configuredRecipients, DEFAULT_NOTIFICATION_EMAIL].filter(
    (email) => {
      const key = email.toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    }
  );
}

async function createRainmakerLead(
  lead: Omit<LeadSubmission, 'fax'>
): Promise<LeadRecord> {
  const intakeUrl = getRainmakerLeadIntakeUrl();
  const apiKey = process.env.RAINMAKER_API_KEY;

  if (!intakeUrl || !apiKey) {
    throw new Error('Rainmaker lead intake is not configured');
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const submissionId = getSubmissionId(lead.metadata);
  if (submissionId) {
    headers['Idempotency-Key'] = submissionId;
  }

  if (process.env.RAINMAKER_VERCEL_BYPASS) {
    headers['x-vercel-protection-bypass'] = process.env.RAINMAKER_VERCEL_BYPASS;
  }

  const response = await fetchWithTimeout(
    intakeUrl,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: lead.email.trim().toLowerCase(),
        firstName: lead.firstName.trim(),
        lastName: lead.lastName?.trim(),
        phone: lead.phone?.trim(),
        location: lead.location?.trim(),
        projectType: lead.projectType,
        message: lead.message?.trim(),
        source: lead.source || 'website',
        customerType: lead.customerType,
        metadata: lead.metadata,
        idempotencyKey: submissionId,
      }),
    },
    RAINMAKER_FETCH_TIMEOUT_MS
  );

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message || `Rainmaker lead intake failed with ${response.status}`
    );
  }

  const rainmakerId = result.leadId || result.accountId || result.quoteId;
  if (!rainmakerId) {
    throw new Error('Rainmaker lead intake succeeded without a lead ID');
  }

  const confirmedSubmissionId = result.submissionId;
  if (
    !submissionId ||
    typeof confirmedSubmissionId !== 'string' ||
    confirmedSubmissionId !== submissionId
  ) {
    throw new Error('Rainmaker lead intake did not confirm the submission ID');
  }

  return {
    id: `rainmaker:${rainmakerId}`,
    created_at: new Date().toISOString(),
    storage: 'rainmaker',
    submission_id: confirmedSubmissionId,
  };
}

function getRainmakerLeadId(leadRecord: LeadRecord): string | null {
  return leadRecord.id.startsWith('rainmaker:')
    ? leadRecord.id.slice('rainmaker:'.length)
    : null;
}

function getRainmakerAttachmentUploadUrl(leadId: string): string | null {
  if (process.env.RAINMAKER_BASE_URL) {
    return `${process.env.RAINMAKER_BASE_URL.replace(/\/$/, '')}/api/leads/${leadId}/attachments`;
  }

  const intakeUrl = getRainmakerLeadIntakeUrl();
  if (!intakeUrl?.endsWith('/api/leads/intake')) {
    return null;
  }

  return `${intakeUrl.slice(0, -'/api/leads/intake'.length)}/api/leads/${leadId}/attachments`;
}

async function uploadRainmakerLeadAttachments({
  leadRecord,
  attachments,
  source,
  submissionId,
}: {
  leadRecord: LeadRecord;
  attachments: LeadAttachment[];
  source?: string;
  submissionId?: string;
}) {
  if (attachments.length === 0) return null;

  const leadId = getRainmakerLeadId(leadRecord);
  const apiKey = process.env.RAINMAKER_API_KEY;

  if (!leadId || !apiKey) {
    throw new Error('Rainmaker lead attachment upload is not configured');
  }

  const uploadUrl = getRainmakerAttachmentUploadUrl(leadId);
  if (!uploadUrl) {
    throw new Error('Rainmaker lead attachment endpoint could not be resolved');
  }

  const formData = new FormData();
  formData.append('source', source || 'website');
  formData.append('submissionId', submissionId || `${leadId}-${Date.now()}`);

  attachments.forEach((attachment) => {
    const buffer = Buffer.from(attachment.content, 'base64');
    const blob = new Blob([new Uint8Array(buffer)], {
      type: attachment.contentType,
    });
    formData.append('attachments', blob, attachment.filename);
  });

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
  };

  if (process.env.RAINMAKER_VERCEL_BYPASS) {
    headers['x-vercel-protection-bypass'] = process.env.RAINMAKER_VERCEL_BYPASS;
  }

  const response = await fetchWithTimeout(
    uploadUrl,
    {
      method: 'POST',
      headers,
      body: formData,
    },
    RAINMAKER_ATTACHMENT_TIMEOUT_MS
  );

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message ||
        `Rainmaker lead attachment upload failed with ${response.status}`
    );
  }

  return result;
}

async function createLeadRecord(
  lead: Omit<LeadSubmission, 'fax'>
): Promise<LeadRecord> {
  if (hasRainmakerConfig()) {
    return createRainmakerLead(lead);
  }

  throw new Error('Rainmaker lead intake is not configured');
}

/**
 * Send a scheduled follow-up email via Resend
 * Schedules the email for 7 days from now
 */
async function scheduleFollowUpEmail(
  apiKey: string,
  lead: {
    email: string;
    firstName: string;
    lastName?: string;
    projectType?: string;
    source?: string;
  }
): Promise<void> {
  try {
    // Calculate 7 days from now in ISO format
    const scheduledDate = new Date();
    scheduledDate.setDate(scheduledDate.getDate() + 7);
    const scheduledAt = scheduledDate.toISOString();

    const fromEmail =
      process.env.FROM_EMAIL ||
      'EDG Patio & Shade <notifications@email.edgpatioshade.com>';

    // Personalize the email
    const firstName = cleanEmailHeader(lead.firstName, 'there');
    const projectType = cleanEmailHeader(
      lead.projectType,
      'outdoor living project'
    );

    const subject = `Following up on your ${projectType} inquiry`;
    const htmlFirstName = escapeHtml(firstName);
    const htmlProjectType = escapeHtml(projectType.toLowerCase());

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #008a5c;">Hi ${htmlFirstName},</h2>
        
        <p>It's been a week since you reached out about your ${htmlProjectType}.
        I wanted to follow up and see if you have any questions or if you're ready to take the next step.</p>
        
        <p>At <strong>EDG Patio & Shade</strong>, we help homeowners plan more useful outdoor spaces with louvered pergolas, motorized screens, and glass enclosures selected around the actual site.</p>
        
        <h3 style="color: #008a5c;">What's the next step?</h3>
        <ul>
          <li><strong>Project Conversation</strong> – We'll learn about your goals and discuss the right next step</li>
          <li><strong>Custom 3D Renderings</strong> – See your project before we build it</li>
          <li><strong>Detailed Quote</strong> – Transparent pricing with no surprises</li>
        </ul>
        
        <p>Ready to talk about your project? Email us at <a href="mailto:sales@edgpatioshade.com">sales@edgpatioshade.com</a> or give us a call at <strong>815-581-0138</strong>.</p>
        
        <p>Best regards,<br>
        <strong>The EDG Patio & Shade Team</strong></p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">
          EDG Patio & Shade<br>
          1802 Holian Drive, Spring Grove, IL 60081<br>
          <a href="https://www.edgpatioshade.com">www.edgpatioshade.com</a> | 815-581-0138
        </p>
      </div>
    `;

    const response = await fetchWithTimeout(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: lead.email,
          subject: subject,
          html: html,
          scheduled_at: scheduledAt,
        }),
      },
      RESEND_FETCH_TIMEOUT_MS
    );

    if (!response.ok) {
      await response.json().catch(() => null);
      console.error(
        'Resend scheduled email failed:',
        `status_${response.status}`
      );
      return;
    }

    const data = await response.json();
    console.log(
      `Follow-up email scheduled for ${scheduledAt}; provider ID received:`,
      Boolean(data?.id)
    );
  } catch (error) {
    console.error(
      'Failed to schedule follow-up email:',
      operationalErrorCode(error)
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';
    if (!checkRateLimit(ip.split(',')[0].trim())) {
      return NextResponse.json(
        {
          success: false,
          errors: ['Too many requests. Please try again later.'],
        },
        { status: 429 }
      );
    }

    let parsedRequest: ParsedLeadRequest;

    try {
      parsedRequest = await parseLeadRequest(request);
    } catch (parseError) {
      const message = getErrorMessage(
        parseError,
        'We could not read that lead submission.'
      );
      const status = message.includes('limited') ? 413 : 400;

      return NextResponse.json(
        {
          success: false,
          errors: [message],
        },
        { status }
      );
    }

    const { lead: body, attachments: leadAttachments } = parsedRequest;
    const {
      email,
      firstName,
      lastName,
      phone,
      location,
      projectType,
      message,
      source,
      customerType,
      metadata,
      fax, // Honeypot
    } = body as LeadSubmission;

    // SPAM PROTECTION: Honeypot Check
    // If the hidden 'fax' field is filled, it's likely a bot.
    // Return a fake success to fool the bot, but do NOT save or send anything.
    if (normalizeLeadText(fax).length > 0) {
      return fakeAcceptedSpamResponse('honeypot');
    }

    // Validation
    const errors: string[] = [];

    if (!email || typeof email !== 'string') {
      errors.push('Email is required');
    } else if (!validateEmail(email.trim())) {
      errors.push('Please enter a valid email address');
    }

    if (
      !firstName ||
      typeof firstName !== 'string' ||
      firstName.trim().length < 1
    ) {
      errors.push('First name is required');
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    if (hasSpamContentSignals(body as LeadSubmission)) {
      return fakeAcceptedSpamResponse('content-signals');
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const submissionId = getSubmissionId(metadata) || randomUUID();
    const normalizedMetadata = {
      ...(metadata || {}),
      submission_id: submissionId,
    };

    const leadRecord = await createLeadRecord({
      email,
      firstName,
      lastName,
      phone,
      location,
      projectType,
      message,
      source,
      customerType,
      metadata: normalizedMetadata,
    });

    const leadId = leadRecord.id;
    const timestamp = leadRecord.created_at;
    const confirmedSubmissionId = leadRecord.submission_id;

    let attachmentUploadState: AttachmentUploadState = {
      status: leadAttachments.length > 0 ? 'failed' : 'none',
    };

    if (leadAttachments.length > 0) {
      try {
        await uploadRainmakerLeadAttachments({
          leadRecord,
          attachments: leadAttachments,
          source,
          submissionId: confirmedSubmissionId,
        });
        attachmentUploadState = { status: 'uploaded' };
      } catch (attachmentError) {
        const attachmentErrorMessage = getErrorMessage(
          attachmentError,
          'Rainmaker attachment upload failed'
        );
        console.error(
          'Lead captured, but Rainmaker attachment upload failed:',
          operationalErrorCode(attachmentError)
        );
        attachmentUploadState = {
          status: 'failed',
          error: attachmentErrorMessage,
        };
      }
    }

    // Email notification via Resend
    const notificationRecipients = getNotificationRecipients();

    const emailLogs: EmailLogs = {};
    const attachmentSummaryHtml = getAttachmentSummaryHtml(
      leadAttachments,
      attachmentUploadState
    );

    if (resendApiKey) {
      // 1. Admin Notification (immediate)
      try {
        const isContactForm = source === 'contact_page';
        const isConfigurator = source === 'pergola-configurator';
        const safeFirstName = escapeHtml(firstName);
        const safeLastName = escapeHtml(lastName || '');
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone || 'Not provided');
        const safeLocation = escapeHtml(location || 'Not provided');
        const safeProjectType = escapeHtml(projectType || 'Not specified');
        const safeCustomerType = escapeHtml(customerType || 'Homeowner');
        const safeSource = escapeHtml(source || 'Website');
        const safeTimestamp = escapeHtml(timestamp);
        const safeStorage = escapeHtml(leadRecord.storage);
        const safeMessage = escapeHtml(message || 'No details provided.');
        const subjectFirstName = cleanEmailHeader(firstName, 'Website lead');
        const subjectLastName = cleanEmailHeader(lastName);
        const subjectCustomerType = cleanEmailHeader(customerType, 'General');
        const subjectSource = cleanEmailHeader(source, 'Website');
        const adminSubject = isContactForm
          ? `New Contact Inquiry: ${subjectFirstName} ${subjectLastName} (${subjectCustomerType})`
          : isConfigurator
            ? `New Pergola Configurator Lead: ${subjectFirstName} ${subjectLastName}`
            : `New Lead: ${subjectFirstName} (${subjectSource})`;

        let adminHtmlContent = '';
        if (isContactForm || isConfigurator) {
          const emailTitle = isConfigurator
            ? 'New Pergola Configurator Lead'
            : 'New Contact Inquiry';
          const messageLabel = isConfigurator
            ? 'Configuration Details'
            : 'Message';

          adminHtmlContent = `
            <h1>${escapeHtml(emailTitle)}</h1>
            <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>ZIP / Location:</strong> ${safeLocation}</p>
            <p><strong>Project Type:</strong> ${safeProjectType}</p>
            <p><strong>Stored In:</strong> ${safeStorage}</p>
            ${!isConfigurator ? `<p><strong>Customer Type:</strong> ${safeCustomerType}</p>` : ''}
            <hr />
            <h3>${escapeHtml(messageLabel)}:</h3>
            <pre style="background:#f5f5f5;padding:12px;font-size:13px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</pre>
            ${attachmentSummaryHtml}
            <hr />
            <p><small>Source: ${safeSource} | Time: ${safeTimestamp}</small></p>
          `;
        } else {
          const sourceLabel =
            source === 'pergola-configurator'
              ? 'Pergola Configurator'
              : source || 'Website';

          adminHtmlContent = `
            <h1>New Lead: ${escapeHtml(sourceLabel)}</h1>
            <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>ZIP / Location:</strong> ${safeLocation}</p>
            <p><strong>Project Type:</strong> ${safeProjectType}</p>
            <p><strong>Source:</strong> ${safeSource}</p>
            <p><strong>Stored In:</strong> ${safeStorage}</p>
            <p><strong>Time:</strong> ${safeTimestamp}</p>
            ${message ? `<hr /><h3>Details / Configuration:</h3><pre style="background:#f5f5f5;padding:12px;font-size:13px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</pre>` : ''}
            ${attachmentSummaryHtml}
          `;
        }

        const adminFromEmail =
          process.env.FROM_EMAIL ||
          'EDG Leads <notifications@email.edgpatioshade.com>';

        const adminEmailPayload: Record<string, unknown> = {
          from: adminFromEmail,
          to: notificationRecipients,
          subject: adminSubject,
          html: adminHtmlContent,
        };

        if (leadAttachments.length > 0) {
          adminEmailPayload.attachments = leadAttachments.map((attachment) => ({
            filename: attachment.filename,
            content: attachment.content,
          }));
        }

        const adminRes = await fetchWithTimeout(
          'https://api.resend.com/emails',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(adminEmailPayload),
          },
          RESEND_FETCH_TIMEOUT_MS
        );

        const adminData = await adminRes.json().catch(() => null);
        if (!adminRes.ok) {
          console.error(
            'Resend Admin Email Failed:',
            `status_${adminRes.status}`
          );
          emailLogs.admin = {
            success: false,
            error: `status_${adminRes.status}`,
          };
        } else {
          console.log('Admin notification sent successfully.');
          emailLogs.admin = { success: true, id: adminData.id };
        }
      } catch (adminErr) {
        console.error(
          'Failed to send admin notification:',
          operationalErrorCode(adminErr)
        );
        emailLogs.admin = {
          success: false,
          error: getErrorMessage(adminErr, 'Admin notification failed'),
        };
      }

      if (allowsLeadFollowUpEmails()) {
        // 2. Schedule 7-day follow-up email to the lead (non-blocking)
        scheduleFollowUpEmail(resendApiKey, {
          email: email.trim().toLowerCase(),
          firstName: firstName.trim(),
          lastName: lastName?.trim(),
          projectType: projectType,
          source: source,
        }).catch((err) => {
          console.error(
            'Follow-up email scheduling error (non-blocking):',
            operationalErrorCode(err)
          );
        });
      } else {
        emailLogs.followUp = { skipped: true, reason: 'disabled' };
      }
    }

    return NextResponse.json(
      {
        success: true,
        accepted: true,
        message: 'Thank you! We have received your information.',
        leadId: leadId,
        submissionId: confirmedSubmissionId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead capture error:', operationalErrorCode(error));
    return NextResponse.json(
      {
        success: false,
        errors: ['Something went wrong. Please try again.'],
        // Only include error details in development
        ...(process.env.NODE_ENV === 'development' && {
          details: getErrorMessage(error, 'Unknown lead capture error'),
        }),
      },
      { status: 500 }
    );
  }
}
