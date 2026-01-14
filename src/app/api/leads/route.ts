import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Admin Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

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
      customerType
    } = body as LeadSubmission;

    // Validation
    const errors: string[] = [];

    if (!email || typeof email !== "string") {
      errors.push("Email is required");
    } else if (!validateEmail(email.trim())) {
      errors.push("Please enter a valid email address");
    }

    if (!firstName || typeof firstName !== "string" || firstName.trim().length < 1) {
      errors.push("First name is required");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Insert into Supabase
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
          source: source || "guide-landing-page",
          customer_type: customerType,
        }
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
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@edgoutdoorliving.com";

    if (resendApiKey) {
      try {
        const isContactForm = source === "contact_page";
        const subject = isContactForm
          ? `New Contact Inquiry: ${firstName} ${lastName || ""} (${customerType || "General"})`
          : `New Guide Lead: ${firstName} (${source})`;

        let htmlContent = "";

        if (isContactForm) {
          htmlContent = `
            <h1>New Contact Inquiry</h1>
            <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Type:</strong> ${customerType || "Homeowner"}</p>
            <p><strong>Location:</strong> ${location || "Not provided"}</p>
            <p><strong>Interested In:</strong> ${projectType || "Not specified"}</p>
            <hr />
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message || "No message provided."}</p>
            <hr />
            <p><small>Source: ${source} | Time: ${timestamp}</small></p>
          `;
        } else {
          htmlContent = `
            <h1>New Guide Download Lead</h1>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
          `;
        }

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "EDG Leads <onboarding@resend.dev>",
            to: notificationEmail,
            subject: subject,
            html: htmlContent,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send lead notification email:", emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We have received your information.",
        leadId: leadId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["Something went wrong. Please try again."],
        details: error.message
      },
      { status: 500 }
    );
  }
}

// GET endpoint (Secured)
export async function GET(request: NextRequest) {
  // Simple Admin Key Auth
  const authHeader = request.headers.get("x-admin-key");
  const adminKey = process.env.ADMIN_API_KEY || "dev-secret-key";

  if (process.env.NODE_ENV === "production" && !process.env.ADMIN_API_KEY) {
    // In production, force a strong key or just rely on Supabase
    // But for this simplified endpoint, we'll stick to the key check
    if (!process.env.ADMIN_API_KEY) return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
  }

  if (authHeader !== adminKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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


