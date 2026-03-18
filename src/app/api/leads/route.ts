import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Apollo.io API Integration
// Docs: https://docs.apollo.io/reference/create-a-contact
const APOLLO_API_BASE = 'https://api.apollo.io/api/v1';

interface ApolloContact {
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
  phone?: string;
  title?: string;
  organization_name?: string;
  location?: string;
}

/**
 * Create a contact in Apollo.io
 * Docs: https://docs.apollo.io/reference/create-a-contact
 */
async function createApolloContact(
  apiKey: string,
  contact: {
    email: string;
    firstName: string;
    lastName?: string;
    phone?: string;
    location?: string;
    projectType?: string;
  }
): Promise<ApolloContact | null> {
  try {
    const response = await fetch(`${APOLLO_API_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify({
        email: contact.email,
        first_name: contact.firstName,
        last_name: contact.lastName || '',
        phone: contact.phone || '',
        // Store additional info in custom fields if needed
        // Apollo has limited standard fields, so we use title/organization for context
        title: `Lead: ${contact.projectType || 'Outdoor Living Project'}`,
        organization_name: contact.location || 'EDG Website Lead',
        // Enable deduplication to avoid creating duplicate contacts
        run_dedupe: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Apollo Create Contact Error:', errorData);
      return null;
    }

    const data = await response.json();
    console.log('Apollo contact created:', data.contact?.id);
    return data.contact;
  } catch (error) {
    console.error('Apollo create contact failed:', error);
    return null;
  }
}

/**
 * Add a contact to a sequence in Apollo.io
 * Docs: https://docs.apollo.io/reference/add-contacts-to-sequence
 * Note: Requires a Master API Key
 */
async function addContactToSequence(
  apiKey: string,
  sequenceId: string,
  contactId: string,
  emailAccountId: string
): Promise<boolean> {
  try {
    const response = await fetch(
      `${APOLLO_API_BASE}/emailer_campaigns/${sequenceId}/add_contact_ids`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
        body: JSON.stringify({
          contact_ids: [contactId],
          email_account_id: emailAccountId,
          // Don't send immediately - let the sequence schedule handle it
          // This respects the sequence's configured delay (e.g., 7 days)
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Apollo Add to Sequence Error:', errorData);
      return false;
    }

    console.log('Apollo contact added to sequence:', sequenceId);
    return true;
  } catch (error) {
    console.error('Apollo add to sequence failed:', error);
    return false;
  }
}

/**
 * Process lead in Apollo.io: create contact and enroll in follow-up sequence
 * This runs asynchronously and doesn't block the form submission
 */
async function processApolloEnrollment(
  apiKey: string,
  sequenceId: string | undefined,
  emailAccountId: string | undefined,
  lead: {
    email: string;
    firstName: string;
    lastName?: string;
    phone?: string;
    location?: string;
    projectType?: string;
    source?: string;
  }
): Promise<void> {
  // Skip if Apollo is not configured
  if (!apiKey || !sequenceId || !emailAccountId) {
    console.log('Apollo not configured, skipping enrollment');
    return;
  }

  // Only enroll certain lead sources (e.g., guide downloads, contact forms)
  // Skip if it's an internal/test lead
  if (lead.source?.includes('test') || lead.email.includes('@test.com')) {
    console.log('Skipping Apollo enrollment for test lead');
    return;
  }

  // Step 1: Create the contact
  const contact = await createApolloContact(apiKey, lead);
  if (!contact) {
    console.error('Failed to create Apollo contact for:', lead.email);
    return;
  }

  // Step 2: Add to sequence (this will schedule the first email based on sequence settings)
  const enrolled = await addContactToSequence(
    apiKey,
    sequenceId,
    contact.id,
    emailAccountId
  );

  if (enrolled) {
    console.log(
      `Lead ${lead.email} enrolled in Apollo sequence ${sequenceId}`
    );
  } else {
    console.error(`Failed to enroll ${lead.email} in sequence`);
  }
}

// Simple in-memory rate limiter
// For production with high traffic, use Redis instead
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

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

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

    // Insert into Supabase
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email: email.trim().toLowerCase(),
          first_name: firstName.trim(),
          last_name: lastName?.trim(),
          phone: phone?.trim(),
          location: location?.trim(),
          project_type: projectType,
          message: message?.trim(),
          source: source || 'guide-landing-page',
          customer_type: customerType,
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    const leadId = data.id;
    const timestamp = data.created_at;

    // Apollo.io: Enroll lead in follow-up sequence (async, non-blocking)
    // This will add the lead to a sequence with a delayed first step (e.g., 7 days)
    const apolloApiKey = process.env.APOLLO_MASTER_API_KEY;
    const apolloSequenceId = process.env.APOLLO_SEQUENCE_ID;
    const apolloEmailAccountId = process.env.APOLLO_EMAIL_ACCOUNT_ID;

    // Fire and forget - don't block the response on Apollo
    processApolloEnrollment(
      apolloApiKey || '',
      apolloSequenceId,
      apolloEmailAccountId,
      {
        email: email.trim().toLowerCase(),
        firstName: firstName.trim(),
        lastName: lastName?.trim(),
        phone: phone?.trim(),
        location: location?.trim(),
        projectType: projectType,
        source: source,
      }
    ).catch((err) => {
      console.error('Apollo enrollment error (non-blocking):', err);
    });

    // Email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || 'cfoley@edgpatioshade.com';

    const emailLogs: any = {};

    if (resendApiKey) {
      // 1. Admin Notification
      try {
        const isContactForm = source === 'contact_page';
        const adminSubject = isContactForm
          ? `New Contact Inquiry: ${firstName} ${lastName || ''} (${customerType || 'General'})`
          : `New Guide Lead: ${firstName} (${source})`;

        let adminHtmlContent = '';
        if (isContactForm) {
          adminHtmlContent = `
            <h1>New Contact Inquiry</h1>
            <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Type:</strong> ${customerType || 'Homeowner'}</p>
            <p><strong>Location:</strong> ${location || 'Not provided'}</p>
            <p><strong>Interested In:</strong> ${projectType || 'Not specified'}</p>
            <hr />
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message || 'No message provided.'}</p>
            <hr />
            <p><small>Source: ${source} | Time: ${timestamp}</small></p>
          `;
        } else {
          adminHtmlContent = `
            <h1>New Guide Download Lead</h1>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
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
            to: notificationEmail,
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
