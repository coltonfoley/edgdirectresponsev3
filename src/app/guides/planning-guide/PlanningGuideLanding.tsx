"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LeadCaptureForm } from "@/components/features/contact/LeadCaptureForm";
import {
    CheckCircle2,
    Sun,
    Thermometer,
    Shield,
    DollarSign,
    Ruler,
    FileCheck,
    BookOpen,
    ArrowRight,
    Star,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function PlanningGuideLanding() {
    return (
        <main className="min-h-screen">
            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-edg-dark pt-20">
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
                    style={{
                        backgroundImage: "url('/images/pergolas/pergola-hero.jpg')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10" />

                <Container className="relative z-20 py-20">
                    <Link
                        href="/guides"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-edg-brand font-medium text-sm mb-12 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Copy */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full">
                                <BookOpen className="h-4 w-4" />
                                Free Planning Guide
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                                The Complete Guide to <br />
                                <span className="text-edg-brand">Four-Season Outdoor Living</span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                                Planning a pergola, shade system, or outdoor enclosure? This guide helps you
                                avoid expensive mistakes and make confident decisions—before you talk to a single contractor.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Understand your options (and which one fits your needs)",
                                    "Get real budget ranges—no surprises",
                                    "Learn what questions to ask contractors",
                                    "Avoid the 7 most common planning mistakes",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-200">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Form + Mockup */}
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-edg-brand/20 rounded-3xl blur-2xl opacity-50" />
                                <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-white/10 shadow-2xl">
                                    <div className="aspect-[3/4] max-w-[280px] mx-auto bg-gradient-to-br from-edg-brand/20 via-edg-brand/10 to-transparent rounded-lg border border-edg-brand/30 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="text-xs font-bold text-edg-brand uppercase tracking-wider mb-2">EDG Guide</div>
                                            <h3 className="text-lg font-bold text-white leading-tight">
                                                Four-Season Outdoor Living
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-2">Planning Guide 2026</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Sun className="h-5 w-5 text-edg-brand" />
                                            <Thermometer className="h-5 w-5 text-edg-brand" />
                                            <Shield className="h-5 w-5 text-edg-brand" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <LeadCaptureForm
                                source="planning-guide-hero"
                                ctaText="Read the Free Guide"
                                redirectUrl="/guides/planning-guide/read"
                                autoDownload={false}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========== SOCIAL PROOF BAR ========== */}
            <section className="bg-edg-dark border-t border-white/5 py-6">
                <Container>
                    <div className="flex flex-wrap justify-center items-center gap-8 text-center text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">75+</span> projects delivered
                        </div>
                        <div className="w-px h-4 bg-white/20 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">10+</span> years experience
                        </div>
                        <div className="w-px h-4 bg-white/20 hidden sm:block" />
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-bold">5.0</span> Google rating
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========== WHAT YOU'LL LEARN ========== */}
            <Section className="py-24 bg-white dark:bg-zinc-950">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            What You'll Learn
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            This isn't fluff. It's the same information we share with clients who
                            invest $30k–$150k+ in outdoor living systems.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: DollarSign, title: "Know Real Costs", description: "Budget ranges for every system type so you're never caught off guard." },
                            { icon: Ruler, title: "Site Assessment Guide", description: "A checklist for evaluating your space before getting quotes." },
                            { icon: Shield, title: "Avoid Costly Mistakes", description: "Learn the 7 pitfalls that derail outdoor living projects." },
                            { icon: FileCheck, title: "Ask the Right Questions", description: "What to ask contractors to ensure you get quality work." }
                        ].map((benefit) => (
                            <div key={benefit.title} className="text-center p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
                                <div className="h-14 w-14 rounded-2xl bg-edg-brand/10 flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="h-7 w-7 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-edg-gray-text dark:text-gray-400 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
