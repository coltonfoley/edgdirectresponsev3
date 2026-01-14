import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    // Create lead record
    const lead: LeadRecord = {
      id: generateId(),
      email: email.trim().toLowerCase(),
      firstName: firstName.trim(),
      lastName: lastName?.trim(),
      phone: phone?.trim(),
      location: location?.trim(),
      projectType: projectType,
      message: message?.trim(),
      source: source || "guide-landing-page",
      customerType: customerType,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || undefined,
    };

    // Store the lead (Local fallback)
    await saveLead(lead);

    // Log the submission for development


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
            <p><small>Source: ${source} | Time: ${lead.timestamp}</small></p>
          `;
        } else {
          htmlContent = `
            <h1>New Guide Download Lead</h1>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Time:</strong> ${lead.timestamp}</p>
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

