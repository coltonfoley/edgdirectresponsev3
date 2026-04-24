import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Simple in-memory rate limiter
// For production with high traffic, use Redis instead
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP
const DEFAULT_NOTIFICATION_EMAIL = 'cfoley@edgpatioshade.com';

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

// Initialize Supabase Admin Client (lazy singleton to avoid crash if env vars missing at import time)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _supabase: any = null;

function getSupabase() {
  if (!_supabase) {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error(
        'Missing Supabase credentials: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY'
      );
    }
    _supabase = createClient(supabaseUrl, supabaseServiceKey);
  }
  return _supabase;
}

function hasSupabaseConfig(): boolean {
  return !!(
    (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL) &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function getRainmakerLeadIntakeUrl(): string | null {
  if (process.env.RAINMAKER_LEAD_INTAKE_URL) {
    return process.env.RAINMAKER_LEAD_INTAKE_URL;
  }

  if (!process.env.RAINMAKER_BASE_URL) {
    return null;
  }

  return `${process.env.RAINMAKER_BASE_URL.replace(/\/$/, '')}/api/leads/intake`;
}

function hasRainmakerConfig(): boolean {
  return !!(getRainmakerLeadIntakeUrl() && process.env.RAINMAKER_API_KEY);
}

function allowsSupabaseLeadFallback(): boolean {
  return process.env.ALLOW_SUPABASE_LEAD_FALLBACK === 'true';
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
  fax?: string; // Honeypot
}

interface LeadRecord {
  id: string;
  created_at: string;
  storage: 'rainmaker' | 'supabase';
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getNotificationRecipients(): string[] {
  const configuredRecipients = (process.env.NOTIFICATION_EMAIL || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
  const seen = new Set<string>();

  return [...configuredRecipients, DEFAULT_NOTIFICATION_EMAIL].filter((email) => {
    const key = email.toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

async function createRainmakerLead(lead: Omit<LeadSubmission, 'fax'>): Promise<LeadRecord> {
  const intakeUrl = getRainmakerLeadIntakeUrl();
  const apiKey = process.env.RAINMAKER_API_KEY;

  if (!intakeUrl || !apiKey) {
    throw new Error('Rainmaker lead intake is not configured');
  }

  const response = await fetch(intakeUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
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
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || `Rainmaker lead intake failed with ${response.status}`);
  }

  const rainmakerId = result.leadId || result.accountId || result.quoteId;
  if (!rainmakerId) {
    throw new Error('Rainmaker lead intake succeeded without a lead ID');
  }

  return {
    id: `rainmaker:${rainmakerId}`,
    created_at: new Date().toISOString(),
    storage: 'rainmaker',
  };
}

async function createSupabaseLead(lead: Omit<LeadSubmission, 'fax'>): Promise<LeadRecord> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('leads')
    .insert([
      {
        email: lead.email.trim().toLowerCase(),
        first_name: lead.firstName.trim(),
        last_name: lead.lastName?.trim(),
        phone: lead.phone?.trim(),
        location: lead.location?.trim(),
        project_type: lead.projectType,
        message: lead.message?.trim(),
        source: lead.source || 'guide-landing-page',
        customer_type: lead.customerType,
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return {
    id: data.id,
    created_at: data.created_at,
    storage: 'supabase',
  };
}

async function createLeadRecord(lead: Omit<LeadSubmission, 'fax'>): Promise<LeadRecord> {
  if (hasRainmakerConfig()) {
    try {
      return await createRainmakerLead(lead);
    } catch (error) {
      console.error('Rainmaker lead intake failed:', error);

      if (allowsSupabaseLeadFallback() && hasSupabaseConfig()) {
        console.warn('Using explicit Supabase lead fallback after Rainmaker intake failure');
        return createSupabaseLead(lead);
      }

      throw error;
    }
  }

  if (allowsSupabaseLeadFallback() && hasSupabaseConfig()) {
    console.warn('Using explicit Supabase lead fallback because Rainmaker intake is not configured');
    return createSupabaseLead(lead);
  }

  if (process.env.NODE_ENV !== 'production' && hasSupabaseConfig()) {
    console.warn('Using local Supabase lead storage because Rainmaker intake is not configured');
    return createSupabaseLead(lead);
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
    const firstName = lead.firstName || 'there';
    const projectType = lead.projectType || 'outdoor living project';

    const subject = `Following up on your ${projectType} inquiry`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #008a5c;">Hi ${firstName},</h2>
        
        <p>It's been a week since you reached out about your ${projectType.toLowerCase()}. 
        I wanted to follow up and see if you have any questions or if you're ready to take the next step.</p>
        
        <p>At <strong>EDG Patio & Shade</strong>, we've helped hundreds of homeowners transform their outdoor spaces 
        into year-round living areas with our premium louvered pergolas, motorized screens, and glass enclosures.</p>
        
        <h3 style="color: #008a5c;">What's the next step?</h3>
        <ul>
          <li><strong>Free Design Consultation</strong> – We'll visit your property and discuss your vision</li>
          <li><strong>Custom 3D Renderings</strong> – See your project before we build it</li>
          <li><strong>Detailed Quote</strong> – Transparent pricing with no surprises</li>
        </ul>
        
        <p>Ready to get started? Email us at <a href="mailto:sales@edgpatioshade.com">sales@edgpatioshade.com</a> or give us a call at <strong>815-581-0138</strong>.</p>
        
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

    const response = await fetch('https://api.resend.com/emails', {
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
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend scheduled email error:', errorData);
      return;
    }

    const data = await response.json();
    console.log(`Follow-up email scheduled for ${lead.email} on ${scheduledAt}:`, data.id);
  } catch (error) {
    console.error('Failed to schedule follow-up email:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip.split(',')[0].trim())) {
      return NextResponse.json(
        {
          success: false,
          errors: ['Too many requests. Please try again later.'],
        },
        { status: 429 }
      );
    }
    
    const body = await request.json();
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
      fax, // Honeypot
    } = body as LeadSubmission;

    // SPAM PROTECTION: Honeypot Check
    // If the hidden 'fax' field is filled, it's likely a bot.
    // Return a fake success to fool the bot, but do NOT save or send anything.
    if (fax && fax.length > 0) {
      console.log(`Spam detected (honeypot): ${email}`);
      // Simulate network delay to seem more real
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! We have received your information.',
          leadId: 'spam-blocked',
        },
        { status: 201 }
      );
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
    });

    const leadId = leadRecord.id;
    const timestamp = leadRecord.created_at;

    // Email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationRecipients = getNotificationRecipients();

    const emailLogs: any = {};

    if (resendApiKey) {
      // 1. Admin Notification (immediate)
      try {
        const isContactForm = source === 'contact_page';
        const isConfigurator = source === 'pergola-configurator';
        const adminSubject = isContactForm
          ? `New Contact Inquiry: ${firstName} ${lastName || ''} (${customerType || 'General'})`
          : isConfigurator
          ? `New Pergola Configurator Lead: ${firstName} ${lastName || ''}`
          : `New Lead: ${firstName} (${source})`;

        let adminHtmlContent = '';
        if (isContactForm || isConfigurator) {
          const emailTitle = isConfigurator
            ? 'New Pergola Configurator Lead'
            : 'New Contact Inquiry';
          const messageLabel = isConfigurator ? 'Configuration Details' : 'Message';

          adminHtmlContent = `
            <h1>${emailTitle}</h1>
            <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>ZIP / Location:</strong> ${location || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Stored In:</strong> ${leadRecord.storage}</p>
            ${!isConfigurator ? `<p><strong>Customer Type:</strong> ${customerType || 'Homeowner'}</p>` : ''}
            <hr />
            <h3>${messageLabel}:</h3>
            <pre style="background:#f5f5f5;padding:12px;font-size:13px;line-height:1.6;white-space:pre-wrap;">${message || 'No details provided.'}</pre>
            <hr />
            <p><small>Source: ${source} | Time: ${timestamp}</small></p>
          `;
        } else {
          const sourceLabel = source === 'pergola-configurator'
            ? 'Pergola Configurator'
            : source || 'Website';

          adminHtmlContent = `
            <h1>New Lead: ${sourceLabel}</h1>
            <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>ZIP / Location:</strong> ${location || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Stored In:</strong> ${leadRecord.storage}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
            ${message ? `<hr /><h3>Details / Configuration:</h3><pre style="background:#f5f5f5;padding:12px;font-size:13px;line-height:1.6;white-space:pre-wrap;">${message}</pre>` : ''}
          `;
        }

        const adminFromEmail =
          process.env.FROM_EMAIL ||
          'EDG Leads <notifications@email.edgpatioshade.com>';

        const adminRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: adminFromEmail,
            to: notificationRecipients,
            subject: adminSubject,
            html: adminHtmlContent,
          }),
        });

        const adminData = await adminRes.json();
        if (!adminRes.ok) {
          console.error(
            'Resend Admin Email Failed:',
            JSON.stringify(adminData)
          );
          emailLogs.admin = { success: false, error: adminData };
        } else {
          console.log('Admin notification sent successfully.');
          emailLogs.admin = { success: true, id: adminData.id };
        }
      } catch (adminErr: any) {
        console.error('Failed to send admin notification:', adminErr);
        emailLogs.admin = { success: false, error: adminErr.message };
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
          console.error('Follow-up email scheduling error (non-blocking):', err);
        });
      } else {
        emailLogs.followUp = { skipped: true, reason: 'disabled' };
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We have received your information.',
        leadId: leadId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      {
        success: false,
        errors: ['Something went wrong. Please try again.'],
        // Only include error details in development
        ...(process.env.NODE_ENV === 'development' && { details: error.message }),
      },
      { status: 500 }
    );
  }
}

// GET endpoint (Secured)
export async function GET(request: NextRequest) {
  // Admin Key Auth - no fallback in production for security
  const authHeader = request.headers.get('x-admin-key');
  const adminKey = process.env.ADMIN_API_KEY;

  // In development, allow a fallback key for testing
  const effectiveKey =
    process.env.NODE_ENV === 'development'
      ? adminKey || 'dev-secret-key'
      : adminKey;

  if (!effectiveKey) {
    return NextResponse.json(
      { error: 'Endpoint not configured' },
      { status: 501 }
    );
  }

  if (authHeader !== effectiveKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    total: data.length,
    leads: data,
  });
}
