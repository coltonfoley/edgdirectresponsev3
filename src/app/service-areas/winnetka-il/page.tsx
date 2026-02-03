"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, ArrowRight, Home, ScrollText, CheckCircle2, Crown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const localBenefits = [
    "Estate-scale installation experience",
    "Historic district compliance",
    "Architectural review board expertise",
    "Licensed for New Trier Township",
];

export default function WinnetkaHubPage() {
    return (
        <div className="min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-edg-dark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full mb-6">
                                <MapPin className="h-4 w-4" /> Service Area: Winnetka, IL
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Estate-Class Outdoor Living
                                <span className="text-edg-brand block">for Winnetka</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                                We understand that in Winnetka, "outdoor living" means more than a patio. It's an extension of a historic estate. Our systems are engineered to match your grandeur.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Request Estate Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== LOCAL EXPERTISE ========== */}
            <section className="bg-edg-dark border-t border-white/5 py-8">
                <Container>
                    <FadeIn>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {localBenefits.map((benefit, i) => (
                                <span key={i} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="h-4 w-4 text-edg-brand" /> {benefit}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== CLUSTER LINKS (SPOKES) ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Winnetka Homeowner Resources
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                            {/* SPOKE 1: ZONING GUIDE */}
                            <Link
                                href="/service-areas/winnetka-il/zoning-guide"
                                className="group relative bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/50 hover:shadow-lg transition-all"
                            >
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-4">
                                    <ScrollText className="w-6 h-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                                    Winnetka Permitting & Zoning
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Navigating the Village of Winnetka's strict architectural review board and ravine protection ordinances.
                                </p>
                                <span className="text-edg-brand-text dark:text-edg-brand font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read the Guide <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>

                            {/* SPOKE 2: LOUVERED PERGOLAS */}
                            <Link
                                href="/service-areas/winnetka-il/louvered-pergolas"
                                className="group relative bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/50 hover:shadow-lg transition-all"
                            >
                                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                                    <Crown className="w-6 h-6 text-amber-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                                    Louvered Roofs for Estates
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Large-span engineering capabilities that allow us to cover expansive bluestone patios without cluttering columns.
                                </p>
                                <span className="text-edg-brand-text dark:text-edg-brand font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>

                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="py-20 bg-edg-brand">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-edg-dark mb-6 tracking-tight">
                                Ready to Elevate Your Winnetka Estate?
                            </h2>
                            <p className="text-xl text-edg-dark/80 mb-8">
                                Schedule a consultation with our estate design specialists.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Schedule Estate Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}
