import { NextRequest, NextResponse } from 'next/server';
import { fetchRainmakerLeads, toLegacyLead, type LegacyLead } from '@/lib/rainmaker-api';

function getDateRange(period: string): Date {
  const now = new Date();
  switch (period) {
    case '7d':
      return new Date(now.setDate(now.getDate() - 7));
    case '30d':
      return new Date(now.setDate(now.getDate() - 30));
    case '90d':
      return new Date(now.setDate(now.getDate() - 90));
    case '1y':
      return new Date(now.setFullYear(now.getFullYear() - 1));
    default:
      return new Date(now.setDate(now.getDate() - 30));
  }
}

function requireAdmin(request: NextRequest) {
  const authHeader = request.headers.get('x-admin-key');
  const adminKey = process.env.ADMIN_API_KEY || 'dev-secret-key';

  return process.env.NODE_ENV !== 'production' || authHeader === adminKey;
}

function countBy<T extends string>(leads: LegacyLead[], getValue: (lead: LegacyLead) => T | undefined) {
  const counts: Record<string, number> = {};

  leads.forEach((lead) => {
    const key = getValue(lead) || 'unknown';
    counts[key] = (counts[key] || 0) + 1;
  });

  return counts;
}

function toSortedEntries<TLabel extends string>(
  counts: Record<string, number>,
  labelKey: TLabel,
) {
  return Object.entries(counts)
    .map(([label, count]) => ({ [labelKey]: label, count }) as Record<TLabel, string> & { count: number })
    .sort((a, b) => b.count - a.count);
}

export async function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '30d';
  const startDate = getDateRange(period);

  try {
    const allLeads = (await fetchRainmakerLeads({ status: 'all', limit: 200 })).map(toLegacyLead);
    const leads = allLeads.filter((lead) => new Date(lead.created_at) >= startDate);

    const bySource = countBy(leads, (lead) => lead.source);
    const byCustomerType = countBy(leads, (lead) => lead.customer_type);
    const byProjectType = countBy(leads, (lead) => lead.project_type);
    const byLocation = countBy(leads, (lead) => lead.location);

    const dailyBreakdown = countBy(leads, (lead) => lead.created_at.split('T')[0]);
    const sortedDaily = Object.entries(dailyBreakdown)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, count }));

    const previousPeriodStart = new Date(startDate);
    const periodLength = Date.now() - startDate.getTime();
    previousPeriodStart.setTime(previousPeriodStart.getTime() - periodLength);

    const previousPeriodLeads = allLeads.filter((lead) => {
      const created = new Date(lead.created_at);
      return created >= previousPeriodStart && created < startDate;
    });

    const currentCount = leads.length;
    const previousCount = previousPeriodLeads.length;
    const trend =
      previousCount > 0
        ? ((currentCount - previousCount) / previousCount) * 100
        : currentCount > 0
          ? 100
          : 0;

    return NextResponse.json({
      period,
      totalLeads: currentCount,
      previousPeriodLeads: previousCount,
      trendPercentage: Math.round(trend),
      allTimeLeads: allLeads.length,
      bySource: toSortedEntries(bySource, 'source'),
      byCustomerType: toSortedEntries(byCustomerType, 'type'),
      byProjectType: toSortedEntries(byProjectType, 'type'),
      byLocation: toSortedEntries(byLocation, 'location'),
      dailyBreakdown: sortedDaily,
      recentLeads: leads.slice(0, 10).map((lead) => ({
        id: lead.id,
        name: `${lead.first_name} ${lead.last_name || ''}`.trim(),
        email: lead.email,
        source: lead.source,
        location: lead.location,
        projectType: lead.project_type,
        customerType: lead.customer_type,
        createdAt: lead.created_at,
      })),
    });
  } catch (error: any) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch Rainmaker analytics' },
      { status: 500 },
    );
  }
}
