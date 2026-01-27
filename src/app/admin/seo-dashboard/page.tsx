"use client";

import { useEffect, useState } from "react";

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
  { path: "/service-areas/lake-geneva-wi", name: "Lake Geneva, WI", archetype: "Waterfront" },
  { path: "/service-areas/hinsdale-il", name: "Hinsdale, IL", archetype: "Suburban Retreat" },
  { path: "/service-areas/barrington-il", name: "Barrington, IL", archetype: "Estate" },
  { path: "/service-areas/naperville-il", name: "Naperville, IL", archetype: "Suburban Retreat" },
  { path: "/service-areas/oak-brook-il", name: "Oak Brook, IL", archetype: "Estate" },
  { path: "/service-areas/north-shore-chicago", name: "North Shore Chicago", archetype: "Estate" },
  { path: "/service-areas/lake-county-il", name: "Lake County, IL", archetype: "Mixed" },
  { path: "/service-areas/mchenry-county-il", name: "McHenry County, IL", archetype: "Mixed" },
  { path: "/service-areas/southeast-wisconsin", name: "Southeast Wisconsin", archetype: "Waterfront" },
];

export default function SEODashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState("30d");
  const [adminKey, setAdminKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchData = async (key: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/analytics?period=${period}`, {
        headers: { "x-admin-key": key },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setIsAuthenticated(false);
          throw new Error("Invalid admin key");
        }
        throw new Error("Failed to fetch analytics");
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
    const stored = localStorage.getItem("edg-admin-key");
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
    localStorage.setItem("edg-admin-key", adminKey);
    fetchData(adminKey);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getSourceLabel = (source: string) => {
    const labels: Record<string, string> = {
      contact_page: "Contact Form",
      "guide-landing-page": "Guide Download",
      unknown: "Unknown",
    };
    return labels[source] || source;
  };

  // Simple bar chart component
  const BarChart = ({ data, maxValue }: { data: { label: string; value: number }[]; maxValue: number }) => (
    <div className="space-y-2">
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="w-32 text-sm text-zinc-400 truncate">{item.label}</div>
          <div className="flex-1 h-6 bg-zinc-800 rounded overflow-hidden">
            <div
              className="h-full bg-emerald-500/80 rounded"
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
          <div className="w-8 text-sm text-zinc-300 text-right">{item.value}</div>
        </div>
      ))}
    </div>
  );

  if (!isAuthenticated && !loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-zinc-900 p-8 rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-6">SEO Dashboard</h1>
          <p className="text-zinc-400 mb-4">Enter your admin key to access the dashboard.</p>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            placeholder="Admin Key"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 mb-4"
          />
          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">EDG SEO Dashboard</h1>
            <p className="text-sm text-zinc-400">Track rankings, traffic, and conversions</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button
              onClick={() => fetchData(adminKey)}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition"
            >
              Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin h-8 w-8 border-2 border-emerald-500 border-t-transparent rounded-full" />
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
            {error}
          </div>
        ) : data ? (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-sm text-zinc-400 mb-1">Leads (This Period)</p>
                <p className="text-3xl font-bold">{data.totalLeads}</p>
                <p className={`text-sm mt-2 ${data.trendPercentage >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                  {data.trendPercentage >= 0 ? "+" : ""}{data.trendPercentage}% vs previous
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-sm text-zinc-400 mb-1">Previous Period</p>
                <p className="text-3xl font-bold">{data.previousPeriodLeads}</p>
                <p className="text-sm text-zinc-500 mt-2">comparison baseline</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-sm text-zinc-400 mb-1">All Time Leads</p>
                <p className="text-3xl font-bold">{data.allTimeLeads}</p>
                <p className="text-sm text-zinc-500 mt-2">total captured</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-sm text-zinc-400 mb-1">Conversion Sources</p>
                <p className="text-3xl font-bold">{data.bySource.length}</p>
                <p className="text-sm text-zinc-500 mt-2">unique sources</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Leads by Source */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Leads by Source</h3>
                {data.bySource.length > 0 ? (
                  <BarChart
                    data={data.bySource.map((s) => ({ label: getSourceLabel(s.source), value: s.count }))}
                    maxValue={Math.max(...data.bySource.map((s) => s.count))}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>

              {/* Leads by Customer Type */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Leads by Customer Type</h3>
                {data.byCustomerType.length > 0 ? (
                  <BarChart
                    data={data.byCustomerType.map((t) => ({ label: t.type, value: t.count }))}
                    maxValue={Math.max(...data.byCustomerType.map((t) => t.count))}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>
            </div>

            {/* Project Types & Locations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Leads by Project Type</h3>
                {data.byProjectType.length > 0 ? (
                  <BarChart
                    data={data.byProjectType.map((p) => ({ label: p.type, value: p.count }))}
                    maxValue={Math.max(...data.byProjectType.map((p) => p.count))}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Leads by Location</h3>
                {data.byLocation.length > 0 ? (
                  <BarChart
                    data={data.byLocation.slice(0, 8).map((l) => ({ label: l.location, value: l.count }))}
                    maxValue={Math.max(...data.byLocation.map((l) => l.count))}
                  />
                ) : (
                  <p className="text-zinc-500">No data yet</p>
                )}
              </div>
            </div>

            {/* Recent Leads Table */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-zinc-800">
                <h3 className="font-semibold">Recent Leads</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800/50">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase">Name</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase">Source</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase">Location</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase">Project</th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {data.recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-zinc-800/30">
                        <td className="px-6 py-4">
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-zinc-500">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4 text-sm">{getSourceLabel(lead.source)}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{lead.location || "-"}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{lead.projectType || "-"}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{formatDate(lead.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SEO Pages Tracking Section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Service Area Pages to Track</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Connect these to Google Search Console to see ranking data for each page.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {SERVICE_AREA_PAGES.map((page) => (
                  <div key={page.path} className="bg-zinc-800/50 rounded-lg p-3">
                    <div className="font-medium text-sm">{page.name}</div>
                    <div className="text-xs text-zinc-500 mt-1">{page.path}</div>
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">
                      {page.archetype}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* External Tools Section */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Connect External Tools for Full SEO Tracking</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-800 hover:bg-zinc-700 rounded-lg p-4 transition"
                >
                  <div className="font-medium mb-1">Google Search Console</div>
                  <p className="text-sm text-zinc-400">View keyword rankings, impressions, and CTR</p>
                </a>
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-800 hover:bg-zinc-700 rounded-lg p-4 transition"
                >
                  <div className="font-medium mb-1">Google Analytics 4</div>
                  <p className="text-sm text-zinc-400">Track organic traffic and user behavior</p>
                </a>
                <a
                  href="https://lookerstudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-800 hover:bg-zinc-700 rounded-lg p-4 transition"
                >
                  <div className="font-medium mb-1">Looker Studio</div>
                  <p className="text-sm text-zinc-400">Build custom reports combining all data</p>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-zinc-500">
          EDG SEO Dashboard - Internal Use Only
        </div>
      </footer>
    </div>
  );
}
