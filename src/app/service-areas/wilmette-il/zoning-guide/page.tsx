"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, AlertTriangle, CheckCircle2, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function WilmetteZoningGuide() {
    return (
        <article className="min-h-screen">
            {/* ========== HERO ========== */}
            <section className="relative py-20 bg-edg-dark">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto">
                            <Link
                                href="/service-areas/wilmette-il"
                                className="inline-flex items-center gap-2 text-edg-brand font-medium text-sm mb-6 hover:underline"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back to Wilmette
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Building a Pergola in Wilmette: The Zoning Guide
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Wilmette has some of the strictest zoning codes on the North Shore, particularly regarding "Impermeable Surface Coverage." Here is what you need to know before you fall in love with a design.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== CONTENT ========== */}
            <Section className="py-16 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto space-y-12">

                            {/* Challenge Section */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                                    1. The "Impermeable Surface" Challenge
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Most lots in Wilmette have a maximum allowable impermeable surface ratio (often 30-40%). If your lot is already maxed out with a driveway, patio, and garage, adding a solid roof structure might be prohibited.
                                </p>
                                <div className="bg-edg-brand/5 border border-edg-brand/20 p-6 rounded-2xl">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2">The Louvered Advantage</h3>
                                            <p className="text-muted-foreground">
                                                In some interpretations, a <strong>louvered pergola</strong> can be argued as a "permeable" structure when open, potentially helping with zoning variances. EDG has experience navigating these specific conversations with the Village of Wilmette.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Setbacks */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                                    2. Setback Requirements
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Detached accessory structures typically must be:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0" />
                                        <span>At least <strong>3 feet</strong> from side property lines.</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0" />
                                        <span>At least <strong>5 feet</strong> from rear property lines.</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl">
                                        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                                        <span>Often cannot be in the required front yard.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Timeline */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                                    3. Permit Process Timeline
                                </h2>
                                <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-xl mb-6">
                                    <Clock className="h-5 w-5 text-amber-600 shrink-0" />
                                    <p className="text-amber-800 dark:text-amber-200 font-medium">
                                        Expect a 4-6 week review cycle in Wilmette.
                                    </p>
                                </div>
                                <p className="text-lg text-muted-foreground mb-4">We handle:</p>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {[
                                        "Plat of survey markup",
                                        "Structural engineering stamps",
                                        "HOA approval packets (if applicable)",
                                        "Village permit application and meetings"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <FileText className="h-4 w-4 text-muted-foreground" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Disclaimer */}
                            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
                                <p className="text-sm text-muted-foreground italic">
                                    Disclaimer: Zoning codes change. This guide is for informational purposes. EDG verifies all current codes during our site assessment.
                                </p>
                            </div>

                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="py-16 bg-edg-brand">
                <Container>
                    <FadeIn>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-edg-dark mb-4 tracking-tight">
                                Need Help Navigating Wilmette Zoning?
                            </h2>
                            <p className="text-edg-dark/80 mb-6">
                                We've handled dozens of Wilmette permits. Let us manage the process for you.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Get Permit Assistance
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </article>
    );
}
