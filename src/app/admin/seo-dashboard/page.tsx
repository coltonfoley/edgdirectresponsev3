'use client';

import { useEffect, useState } from 'react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface AnalyticsData {
  period: string;
  totalLeads: number;
  previousPeriodLeads: number;
  trendPercentage: number;
  allTimeLeads: number;
  bySource: { source: string; count: number }[];
  byCustomerType: { type: string; count: number }[];
  byProjectType: { type: string; count: number }[];
  byLocation: { location: string; count: number }[];
  dailyBreakdown: { date: string; count: number }[];
  recentLeads: {
    id: string;
    name: string;
    email: string;
    source: string;
    location: string;
    projectType: string;
    customerType: string;
    createdAt: string;
  }[];
}

const SERVICE_AREA_PAGES = [
  {
    path: '/service-areas/wilmette-il',
    name: 'Wilmette, IL',
    archetype: 'North Shore',
  },
  {
    path: '/service-areas/winnetka-il',
    name: 'Winnetka, IL',
    archetype: 'North Shore',
  },
  {
    path: '/service-areas/northbrook-il',
    name: 'Northbrook, IL',
    archetype: 'North Shore',
  },
  {
    path: '/service-areas/barrington-il',
    name: 'Barrington, IL',
    archetype: 'Estate',
  },
  {
    path: '/service-areas/naperville-il',
    name: 'Naperville, IL',
    archetype: 'Suburban',
  },
  {
    path: '/service-areas/hinsdale-il',
    name: 'Hinsdale, IL',
    archetype: 'Estate',
  },
  {
    path: '/service-areas/oak-brook-il',
    name: 'Oak Brook, IL',
    archetype: 'Suburban',
  },
  {
    path: '/service-areas/lake-geneva-wi',
    name: 'Lake Geneva, WI',
    archetype: 'Waterfront',
  },
  {
    path: '/service-areas/sanibel-outdoor-living',
    name: 'Sanibel, FL',
    archetype: 'Waterfront',
  },
];

export default function SEODashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState('30d');
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchData = async (key: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/analytics?period=${period}`, {
        headers: { 'x-admin-key': key },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setIsAuthenticated(false);
          throw new Error('Invalid admin key');
        }
        throw new Error('Failed to fetch analytics');
      }
      const json = await res.json();
      setData(json);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('edg-admin-key');
    if (stored) {
      setAdminKey(stored);
      fetchData(stored);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && adminKey) {
      fetchData(adminKey);
    }
  }, [period]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('edg-admin-key', adminKey);
    fetchData(adminKey);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getSourceLabel = (source: string) => {
    const labels: Record<string, string> = {
      contact_page: 'Contact Form',
      'guide-landing-page': 'Guide Download',
      unknown: 'Unknown',
    };
    return labels[source] || source;
  };

  // Simple bar chart component
  const BarChart = ({
    data,
    maxValue,
  }: {
    data: { label: string; value: number }[];
    maxValue: number;
  }) => (
    <div className="space-y-2">
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="w-32 truncate text-sm text-zinc-400">
            {item.label}
          </div>
          <div className="h-6 flex-1 overflow-hidden rounded bg-zinc-800">
            <div
              className="h-full rounded bg-emerald-500/80"
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
          <div className="w-8 text-right text-sm text-zinc-300">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );

  if (!isAuthenticated && !loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-lg bg-zinc-900 p-8"
        >
          <h1 className="mb-6 text-2xl font-bold text-white">SEO Dashboard</h1>
          <p className="mb-4 text-zinc-400">
            Enter your admin key to access the dashboard.
          </p>
          {error && <p className="mb-4 text-red-400">{error}</p>}
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            placeholder="Admin Key"
            className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-3 font-medium text-white transition hover:bg-emerald-500"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: 'Admin', href: '/admin' },
              { label: 'SEO Dashboard' },
            ]}
          />
        </div>
      </div>
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-xl font-bold">EDG SEO Dashboard</h1>
            <p className="text-sm text-zinc-400">
              Track rankings, traffic, and conversions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button
              onClick={() => fetchData(adminKey)}
              className="rounded-lg bg-zinc-800 px-4 py-2 text-sm transition hover:bg-zinc-700"
            >
              Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        ) : data ? (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <p className="mb-1 text-sm text-zinc-400">
                  Leads (This Period)
                </p>
                <p className="text-3xl font-bold">{data.totalLeads}</p>
                <p
                  className={`mt-2 text-sm ${data.trendPercentage >= 0 ? 'text-emerald-400' : 'text-red-400'}`}
                >
                  {data.trendPercentage >= 0 ? '+' : ''}
                  {data.trendPercentage}% vs previous
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <p className="mb-1 text-sm text-zinc-400">Previous Period</p>
                <p className="text-3xl font-bold">{data.previousPeriodLeads}</p>
                <p className="mt-2 text-sm text-zinc-500">
                  comparison baseline
                </p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <p className="mb-1 text-sm text-zinc-400">All Time Leads</p>
                <p className="text-3xl font-bold">{data.allTimeLeads}</p>
                <p className="mt-2 text-sm text-zinc-500">total captured</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <p className="mb-1 text-sm text-zinc-400">Conversion Sources</p>
                <p className="text-3xl font-bold">{data.bySource.length}</p>
                <p className="mt-2 text-sm text-zinc-500">unique sources</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Leads by Source */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="mb-4 font-semibold">Leads by Source</h3>
                {data.bySource.length > 0 ? (
                  <BarChart
                    data={data.bySource.map((s) => ({
                      label: getSourceLabel(s.source),
                      value: s.count,
                    }))}
                    maxValue={Math.max(...data.bySource.map((s) => s.count))}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>

              {/* Leads by Customer Type */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="mb-4 font-semibold">Leads by Customer Type</h3>
                {data.byCustomerType.length > 0 ? (
                  <BarChart
                    data={data.byCustomerType.map((t) => ({
                      label: t.type,
                      value: t.count,
                    }))}
                    maxValue={Math.max(
                      ...data.byCustomerType.map((t) => t.count)
                    )}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>
            </div>

            {/* Project Types & Locations */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="mb-4 font-semibold">Leads by Project Type</h3>
                {data.byProjectType.length > 0 ? (
                  <BarChart
                    data={data.byProjectType.map((p) => ({
                      label: p.type,
                      value: p.count,
                    }))}
                    maxValue={Math.max(
                      ...data.byProjectType.map((p) => p.count)
                    )}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="mb-4 font-semibold">Leads by Location</h3>
                {data.byLocation.length > 0 ? (
                  <BarChart
                    data={data.byLocation
                      .slice(0, 8)
                      .map((l) => ({ label: l.location, value: l.count }))}
                    maxValue={Math.max(...data.byLocation.map((l) => l.count))}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>
            </div>

            {/* Recent Leads Table */}
            <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
              <div className="border-b border-zinc-800 p-6">
                <h3 className="font-semibold">Recent Leads</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                        Source
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                        Project
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {data.recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-zinc-800/30">
                        <td className="px-6 py-4">
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-zinc-500">
                            {lead.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {getSourceLabel(lead.source)}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-400">
                          {lead.location || '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-400">
                          {lead.projectType || '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-400">
                          {formatDate(lead.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SEO Pages Tracking Section */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold">
                Service Area Pages to Track
              </h3>
              <p className="mb-4 text-sm text-zinc-400">
                Connect these to Google Search Console to see ranking data for
                each page.
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {SERVICE_AREA_PAGES.map((page) => (
                  <div
                    key={page.path}
                    className="rounded-lg bg-zinc-800/50 p-3"
                  >
                    <div className="text-sm font-medium">{page.name}</div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {page.path}
                    </div>
                    <span className="mt-2 inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                      {page.archetype}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* External Tools Section */}
            <div className="rounded-lg border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 p-6">
              <h3 className="mb-4 font-semibold">
                Connect External Tools for Full SEO Tracking
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-zinc-800 p-4 transition hover:bg-zinc-700"
                >
                  <div className="mb-1 font-medium">Google Search Console</div>
                  <p className="text-sm text-zinc-400">
                    View keyword rankings, impressions, and CTR
                  </p>
                </a>
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-zinc-800 p-4 transition hover:bg-zinc-700"
                >
                  <div className="mb-1 font-medium">Google Analytics 4</div>
                  <p className="text-sm text-zinc-400">
                    Track organic traffic and user behavior
                  </p>
                </a>
                <a
                  href="https://lookerstudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-zinc-800 p-4 transition hover:bg-zinc-700"
                >
                  <div className="mb-1 font-medium">Looker Studio</div>
                  <p className="text-sm text-zinc-400">
                    Build custom reports combining all data
                  </p>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-zinc-500">
          EDG SEO Dashboard - Internal Use Only
        </div>
      </footer>
    </div>
  );
}
