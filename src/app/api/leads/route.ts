import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface LeadSubmission {
  email: string;
  firstName: string;
  source?: string;
}

interface LeadRecord extends LeadSubmission {
  id: string;
  timestamp: string;
  ip?: string;
}

// Storage configuration
const LEADS_FILE = path.join(process.cwd(), "leads.json");

// Helper to get leads from storage
async function getLeads(): Promise<LeadRecord[]> {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading leads file:", error);
  }
  return [];
}

// Helper to save leads to storage
async function saveLead(lead: LeadRecord) {
  try {
    const leads = await getLeads();
    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error("Error saving lead:", error);
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, source } = body as LeadSubmission;

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

    // Create lead record
    const lead: LeadRecord = {
      id: generateId(),
      email: email.trim().toLowerCase(),
      firstName: firstName.trim(),
      source: source || "guide-landing-page",
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || undefined,
    };

    // Store the lead
    await saveLead(lead);

    // Log the submission for development
    console.log("=== NEW LEAD CAPTURED ===");
    console.log(JSON.stringify(lead, null, 2));
    console.log("========================");

    // Email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@edgoutdoorliving.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "EDG Leads <leads@edgoutdoorliving.com>",
            to: notificationEmail,
            subject: `New Lead: ${firstName} (${source})`,
            html: `
              <h1>New Lead Captured</h1>
              <p><strong>Name:</strong> ${firstName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Source:</strong> ${source}</p>
              <p><strong>Time:</strong> ${lead.timestamp}</p>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send lead notification email:", emailError);
      }
    }

    // TODO: Email service integration
    // Uncomment and configure one of these when ready:
    //
    // Mailchimp:
    // await fetch(`https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email_address: lead.email,
    //     status: "subscribed",
    //     merge_fields: { FNAME: lead.firstName },
    //     tags: [lead.source],
    //   }),
    // });
    //
    // ConvertKit:
    // await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     api_key: CONVERTKIT_API_KEY,
    //     email: lead.email,
    //     first_name: lead.firstName,
    //   }),
    // });
    //
    // Resend (for direct email):
    // await resend.emails.send({
    //   from: "EDG <guides@edgoutdoorliving.com>",
    //   to: lead.email,
    //   subject: "Your Four-Season Outdoor Living Guide",
    //   html: guideEmailTemplate(lead.firstName),
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Check your email for the guide.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["Something went wrong. Please try again."],
      },
      { status: 500 }
    );
  }
}

// GET endpoint to view captured leads (development only)
export async function GET(request: NextRequest) {
  // Check for authentication even in development
  const authHeader = request.headers.get("x-admin-key");
  const adminKey = process.env.ADMIN_API_KEY || "dev-secret-key"; // Fallback for dev only

  if (process.env.NODE_ENV === "production" && !process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: "Endpoint disabled" }, { status: 403 });
  }

  if (authHeader !== adminKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getLeads();

  return NextResponse.json({
    total: leads.length,
    leads: leads.slice(-100), // Return last 100 leads
  });
}

