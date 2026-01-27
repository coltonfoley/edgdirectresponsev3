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

    const emailLogs: any = {};

    if (resendApiKey) {
      // 1. Admin Notification
      try {
        const isContactForm = source === "contact_page";
        const adminSubject = isContactForm
          ? `New Contact Inquiry: ${firstName} ${lastName || ""} (${customerType || "General"})`
          : `New Guide Lead: ${firstName} (${source})`;

        let adminHtmlContent = "";
        if (isContactForm) {
          adminHtmlContent = `
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
          adminHtmlContent = `
            <h1>New Guide Download Lead</h1>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
          `;
        }

        const adminFromEmail = process.env.FROM_EMAIL || "EDG Leads <onboarding@resend.dev>";

        const adminRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
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
          console.error("Resend Admin Email Failed:", JSON.stringify(adminData));
          emailLogs.admin = { success: false, error: adminData };
        } else {
          console.log("Admin notification sent successfully.");
          emailLogs.admin = { success: true, id: adminData.id };
        }
      } catch (adminErr: any) {
        console.error("Failed to send admin notification:", adminErr);
        emailLogs.admin = { success: false, error: adminErr.message };
      }

      // 2. User Auto-Response
      try {
        const isGuideRequest = source === "guide-landing-page" || source?.includes("guide");

        if (isGuideRequest) {
          const fromEmail = process.env.FROM_EMAIL || "EDG Outdoor Living <info@edgoutdoorliving.com>";

          const userSubject = "Your EDG Outdoor Living Guide";
          const userHtmlContent = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Hi ${firstName},</h2>
              <p>Thanks for requesting our guide to outdoor living! We're excited to help you transform your outdoor space.</p>
              <p>I've attached the brochure to this email so you have it handy.</p>
              <p>Typically, homeowners come to us because they want to use their patio more than just 2-3 months a year. Our systems let you control the sun, wind, rain, and bugs so you can enjoy the outdoors 3-4 seasons a year.</p>
              <p><strong>How can we help?</strong></p>
              <ul>
                <li>Are you in the early planning stages?</li>
                <li>Do you have a specific project in mind?</li>
                <li>Just browsing for ideas?</li>
              </ul>
              <p><strong>Ready to take the next step?</strong></p>
              <p>Simply reply to this email to ask a question or to set up a quick discovery call to discuss your project. We'd love to help you bring your vision to life.</p>
              <br>
              <p>Best regards,</p>
              <p><strong>The EDG Team</strong><br>
              <a href="https://edgpatioshade.com">www.edgpatioshade.com</a></p>
            </div>
          `;

          let attachments: any[] = [];

          try {
            const fs = await import('fs');
            const path = await import('path');
            const brochurePath = path.join(process.cwd(), 'public', 'brochures', 'EDG-BROCHURE.pdf');

            if (fs.existsSync(brochurePath)) {
              const fileBuffer = fs.readFileSync(brochurePath);
              const base64File = fileBuffer.toString('base64');
              attachments.push({
                content: base64File,
                filename: 'EDG_Outdoor_Living_Guide.pdf',
                type: 'application/pdf',
                disposition: 'attachment',
              });
            }
          } catch (err) {
            console.error("Attachment error:", err);
          }

          const userRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fromEmail,
              to: email,
              reply_to: process.env.REPLY_TO_EMAIL || "jeverly@edgpatioshade.com",
              subject: userSubject,
              html: userHtmlContent,
              attachments: attachments.length > 0 ? attachments : undefined
            }),
          });

          const userData = await userRes.json();
          if (!userRes.ok) {
            console.error("Resend Lead Email Failed:", JSON.stringify(userData));
            emailLogs.user = { success: false, error: userData };
          } else {
            console.log("Lead auto-response sent successfully.");
            emailLogs.user = { success: true, id: userData.id };
          }
        }
      } catch (userErr: any) {
        console.error("Failed to send lead auto-response:", userErr);
        emailLogs.user = { success: false, error: userErr.message };
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


