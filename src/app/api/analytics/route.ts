import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

interface Lead {
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
  phone?: string;
  location?: string;
  project_type?: string;
  message?: string;
  source?: string;
  customer_type?: string;
  created_at: string;
}

function getDateRange(period: string): Date {
  const now = new Date();
  switch (period) {
    case "7d":
      return new Date(now.setDate(now.getDate() - 7));
    case "30d":
      return new Date(now.setDate(now.getDate() - 30));
    case "90d":
      return new Date(now.setDate(now.getDate() - 90));
    case "1y":
      return new Date(now.setFullYear(now.getFullYear() - 1));
    default:
      return new Date(now.setDate(now.getDate() - 30));
  }
}

export async function GET(request: NextRequest) {
  // Auth check
  const authHeader = request.headers.get("x-admin-key");
  const adminKey = process.env.ADMIN_API_KEY || "dev-secret-key";

  if (process.env.NODE_ENV === "production" && authHeader !== adminKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") || "30d";
  const startDate = getDateRange(period);

  try {
    // Fetch all leads
    const { data: allLeads, error: allError } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (allError) throw allError;

    // Fetch leads within period
    const { data: periodLeads, error: periodError } = await supabase
      .from("leads")
      .select("*")
      .gte("created_at", startDate.toISOString())
      .order("created_at", { ascending: false });

    if (periodError) throw periodError;

    const leads = periodLeads as Lead[];
    const allLeadsTyped = allLeads as Lead[];

    // Aggregate by source
    const bySource: Record<string, number> = {};
    leads.forEach((lead) => {
      const source = lead.source || "unknown";
      bySource[source] = (bySource[source] || 0) + 1;
    });

    // Aggregate by customer type
    const byCustomerType: Record<string, number> = {};
    leads.forEach((lead) => {
      const type = lead.customer_type || "unknown";
      byCustomerType[type] = (byCustomerType[type] || 0) + 1;
    });

    // Aggregate by project type
    const byProjectType: Record<string, number> = {};
    leads.forEach((lead) => {
      const type = lead.project_type || "unknown";
      byProjectType[type] = (byProjectType[type] || 0) + 1;
    });

    // Aggregate by location (for service area insights)
    const byLocation: Record<string, number> = {};
    leads.forEach((lead) => {
      const location = lead.location || "unknown";
      byLocation[location] = (byLocation[location] || 0) + 1;
    });

    // Daily breakdown for chart
    const dailyBreakdown: Record<string, number> = {};
    leads.forEach((lead) => {
      const date = lead.created_at.split("T")[0];
      dailyBreakdown[date] = (dailyBreakdown[date] || 0) + 1;
    });

    // Sort daily breakdown by date
    const sortedDaily = Object.entries(dailyBreakdown)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, count }));

    // Calculate trends (compare to previous period)
    const previousPeriodStart = new Date(startDate);
    const periodLength = Date.now() - startDate.getTime();
    previousPeriodStart.setTime(previousPeriodStart.getTime() - periodLength);

    const previousPeriodLeads = allLeadsTyped.filter((lead) => {
      const created = new Date(lead.created_at);
      return created >= previousPeriodStart && created < startDate;
    });

    const currentCount = leads.length;
    const previousCount = previousPeriodLeads.length;
    const trend = previousCount > 0
      ? ((currentCount - previousCount) / previousCount) * 100
      : currentCount > 0 ? 100 : 0;

    return NextResponse.json({
      period,
      totalLeads: currentCount,
      previousPeriodLeads: previousCount,
      trendPercentage: Math.round(trend),
      allTimeLeads: allLeadsTyped.length,
      bySource: Object.entries(bySource)
        .map(([source, count]) => ({ source, count }))
        .sort((a, b) => b.count - a.count),
      byCustomerType: Object.entries(byCustomerType)
        .map(([type, count]) => ({ type, count }))
        .sort((a, b) => b.count - a.count),
      byProjectType: Object.entries(byProjectType)
        .map(([type, count]) => ({ type, count }))
        .sort((a, b) => b.count - a.count),
      byLocation: Object.entries(byLocation)
        .map(([location, count]) => ({ location, count }))
        .sort((a, b) => b.count - a.count),
      dailyBreakdown: sortedDaily,
      recentLeads: leads.slice(0, 10).map((lead) => ({
        id: lead.id,
        name: `${lead.first_name} ${lead.last_name || ""}`.trim(),
        email: lead.email,
        source: lead.source,
        location: lead.location,
        projectType: lead.project_type,
        customerType: lead.customer_type,
        createdAt: lead.created_at,
      })),
    });
  } catch (error: any) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
