import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Admin Client (lazy to avoid crash if env vars missing at import time)
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      'Missing Supabase credentials: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY'
    );
  }
  return createClient(supabaseUrl, supabaseServiceKey);
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
        details: error.message,
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
