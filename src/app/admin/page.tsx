"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Loader2, Download, Table, Lock, RefreshCcw } from "lucide-react";

interface Lead {
    id: string;
    firstName: string;
    email: string;
    source: string;
    timestamp: string;
}

export default function AdminPage() {
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchLeads = async (pass: string) => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("/api/leads", {
                headers: {
                    "x-admin-key": pass,
                },
            });

            if (!response.ok) {
                throw new Error("Invalid password or unauthorized");
            }

            const data = await response.json();
            setLeads(data.leads.reverse());
            setIsAuthorized(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch leads");
            setIsAuthorized(false);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        fetchLeads(password);
    };

    const exportCSV = () => {
        const headers = ["ID", "Name", "Email", "Source", "Timestamp"];
        const rows = leads.map(l => [l.id, l.firstName, l.email, l.source, l.timestamp]);

        const csvContent = [
            headers.join(","),
            ...rows.map(r => r.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `edg_leads_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!isAuthorized) {
        return (
            <main className="min-h-screen bg-edg-dark flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mx-auto mb-4">
                            <Lock className="h-6 w-6 text-edg-brand" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Admin Access</h1>
                        <p className="text-gray-400 text-sm">Enter password to view leads</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Admin Password"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-edg-brand/50"
                        />
                        <Button type="submit" className="w-full rounded-xl" disabled={loading}>
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Unlock Dashboard"}
                        </Button>
                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Lead Dashboard</h1>
                        <p className="text-muted-foreground">Manage and export your captured leads.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" onClick={() => fetchLeads(password)} disabled={loading}>
                            <RefreshCcw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                            Refresh
                        </Button>
                        <Button size="sm" onClick={exportCSV} disabled={leads.length === 0}>
                            <Download className="h-4 w-4 mr-2" />
                            Export CSV
                        </Button>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-100 dark:bg-zinc-800 text-muted-foreground font-medium">
                                <tr>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Source</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5 dark:divide-white/5">
                                {leads.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                                            No leads captured yet.
                                        </td>
                                    </tr>
                                ) : (
                                    leads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {new Date(lead.timestamp).toLocaleDateString()} {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </td>
                                            <td className="px-6 py-4 font-medium">{lead.firstName}</td>
                                            <td className="px-6 py-4">
                                                <a href={`mailto:${lead.email}`} className="text-edg-brand-text dark:text-edg-brand hover:underline">
                                                    {lead.email}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-edg-brand/10 text-edg-brand-text dark:text-edg-brand">
                                                    {lead.source}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </main>
    );
}
