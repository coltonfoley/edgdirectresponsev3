"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formType, setFormType] = useState<"homeowner" | "pro" | "commercial">("homeowner");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        projectType: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    customerType: formType,
                    source: "contact_page"
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.errors?.[0] || "Something went wrong");
            }

            // Track conversion
            if (typeof window !== 'undefined' && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                    event: "generate_lead",
                    source: "contact_page",
                    customer_type: formType,
                    value: 0,
                    currency: "USD"
                });
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-edg-light dark:bg-black">
                <Section className="pt-24 md:pt-32">
                    <Container>
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="h-16 w-16 rounded-full bg-edg-brand/10 flex items-center justify-center mx-auto mb-6">
                                <Mail className="h-8 w-8 text-edg-brand-text" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank you!</h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                We've received your message and will get back to you within 1 business day.
                            </p>
                            <Link href="/">
                                <Button variant="secondary">Return Home</Button>
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            <Section className="pb-12 pt-24 md:pt-32 bg-white dark:bg-black">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                            Let's start the right conversation.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Tell us about yourself and your project. We'll respond within 1 business day with next steps tailored to your needs.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section className="bg-edg-light/50 dark:bg-edg-dark/50 py-16">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-black/5 dark:border-white/10">
                                {/* Form Type Selector */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {[
                                        { id: "homeowner", label: "Homeowner" },
                                        { id: "pro", label: "Builder / Pro" },
                                        { id: "commercial", label: "Commercial" },
                                    ].map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setFormType(type.id as typeof formType)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${formType === type.id
                                                ? "bg-edg-brand text-edg-dark"
                                                : "bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                                }`}
                                        >
                                            {type.label}
                                        </button>
                                    ))}
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                disabled={loading}
                                                className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand disabled:opacity-50"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                disabled={loading}
                                                className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand disabled:opacity-50"
                                                placeholder="Smith"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                disabled={loading}
                                                className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand disabled:opacity-50"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                disabled={loading}
                                                className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand disabled:opacity-50"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Project Location (City/Zip)</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand disabled:opacity-50"
                                            placeholder="Lake Forest, IL 60045"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                                        <select
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand disabled:opacity-50"
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="pergola">Louvered Pergola</option>
                                            <option value="shades">Motorized Shades</option>
                                            <option value="enclosure">Glass Enclosure</option>
                                            <option value="multiple">Multiple Systems</option>
                                            <option value="unsure">Not Sure Yet</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Tell us about your project</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={loading}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-edg-brand resize-none disabled:opacity-50"
                                            placeholder="Describe your outdoor space, goals, timeline, or any questions you have..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="p-3 rounded-lg bg-red-100 text-red-600 border border-red-200 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <Button type="submit" size="lg" disabled={loading} className="w-full rounded-lg">
                                        {loading ? "Sending..." : "Submit Request"}
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* What Happens Next */}
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-black/5 dark:border-white/10">
                                <h3 className="font-bold text-lg mb-4">What happens next?</h3>
                                <ol className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand text-edg-dark text-sm font-bold flex items-center justify-center shrink-0">1</div>
                                        <div>
                                            <div className="font-medium">We review your request</div>
                                            <div className="text-sm text-muted-foreground">Within 1 business day</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand text-edg-dark text-sm font-bold flex items-center justify-center shrink-0">2</div>
                                        <div>
                                            <div className="font-medium">Discovery call (15 min)</div>
                                            <div className="text-sm text-muted-foreground">Understand your goals</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand text-edg-dark text-sm font-bold flex items-center justify-center shrink-0">3</div>
                                        <div>
                                            <div className="font-medium">Site visit (if applicable)</div>
                                            <div className="text-sm text-muted-foreground">Measure & assess</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand text-edg-dark text-sm font-bold flex items-center justify-center shrink-0">4</div>
                                        <div>
                                            <div className="font-medium">Custom proposal</div>
                                            <div className="text-sm text-muted-foreground">Clear pricing & timeline</div>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-black/5 dark:border-white/10">
                                <h3 className="font-bold text-lg mb-4">Prefer to call?</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                                        <a href="tel:+18155810138" className="text-edg-brand-text dark:text-edg-brand hover:underline font-bold transition-colors" onClick={() => (window as any).dataLayer?.push({ event: 'conversion_event', conversion_name: 'phone_click', value: 0 })}>
                                            (815) 581-0138
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                                        <span className="text-edg-gray-text dark:text-gray-400 font-medium">Mon-Fri, 8am-5pm CT</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0 mt-0.5" />
                                        <div className="text-edg-gray-text dark:text-gray-400 font-medium">
                                            <div>Spring Grove Showroom</div>
                                            <div>1802 Holian Drive</div>
                                            <div>Spring Grove, IL 60081</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
