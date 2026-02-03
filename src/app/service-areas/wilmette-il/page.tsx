"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, ArrowRight, Home, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const localBenefits = [
    "Familiar with Village of Wilmette zoning codes",
    "Historic district experience",
    "North Shore-appropriate designs",
    "Licensed & insured for Cook County",
];

export default function WilmetteHubPage() {
    return (
        <div className="min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-edg-dark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/pergolas/residential-white-r-blade-led-strip.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full mb-6">
                                <MapPin className="h-4 w-4" /> Service Area: Wilmette, IL
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Upgrade Your Wilmette Home with
                                <span className="text-edg-brand block">Four-Season Outdoor Living</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                                From the brick streets of the Cage to the shores of Lake Michigan, we design engineered shade systems that respect Wilmette's architectural heritage.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Request Wilmette Site Visit <ArrowRight className="ml-2 h-5 w-5" />
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
                                Local Resources for Wilmette Homeowners
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                            {/* SPOKE 1: ZONING GUIDE */}
                            <Link
                                href="/service-areas/wilmette-il/zoning-guide"
                                className="group relative bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/50 hover:shadow-lg transition-all"
                            >
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                                    Wilmette Building & Zoning Guide
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Before you build, understand the "Impermeable Surface" limits and setbacks specific to Wilmette village codes.
                                </p>
                                <span className="text-edg-brand-text dark:text-edg-brand font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read the Guide <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>

                            {/* SPOKE 2: LOUVERED PERGOLAS */}
                            <Link
                                href="/service-areas/wilmette-il/louvered-pergolas"
                                className="group relative bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/50 hover:shadow-lg transition-all"
                            >
                                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                    <Home className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                                    Louvered Pergolas in Wilmette
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Why aluminum louvered roofs are the preferred choice for North Shore winters over traditional wood structures.
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
                                Ready to Start Your Wilmette Project?
                            </h2>
                            <p className="text-xl text-edg-dark/80 mb-8">
                                Get a free consultation with our local design team.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}
