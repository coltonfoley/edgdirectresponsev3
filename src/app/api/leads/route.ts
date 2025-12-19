import { NextRequest, NextResponse } from "next/server";

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

// In-memory storage for development (replace with database in production)
const leads: LeadRecord[] = [];

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

    // Store the lead (in-memory for now)
    leads.push(lead);

    // Log the submission for development
    console.log("=== NEW LEAD CAPTURED ===");
    console.log(JSON.stringify(lead, null, 2));
    console.log(`Total leads: ${leads.length}`);
    console.log("========================");

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

  return NextResponse.json({
    total: leads.length,
    leads: leads.slice(-50), // Return last 50 leads
  });
}

