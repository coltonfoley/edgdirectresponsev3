"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, TreeDeciduous, Droplets, FileCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function WinnetkaZoningGuide() {
    return (
        <article className="min-h-screen">
            {/* ========== HERO ========== */}
            <section className="relative py-20 bg-edg-dark">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto">
                            <Link
                                href="/service-areas/winnetka-il"
                                className="inline-flex items-center gap-2 text-edg-brand font-medium text-sm mb-6 hover:underline"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back to Winnetka
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Winnetka Design Guide: Building Beyond the Patio
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Winnetka's beauty comes from strict preservation. Whether you are on the lake, near a ravine, or in a historic district, your project will likely face scrutiny.
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

                            {/* Ravine Protection */}
                            <div className="flex gap-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                    <TreeDeciduous className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-3">1. Ravine Protection Ordinance</h2>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        If your property touches a ravine, construction is heavily regulated.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Setbacks:</strong> Structures often must be set back significantly from the "tableland" edge of the ravine.</li>
                                        <li><strong>Drainage:</strong> You cannot increase runoff into the ravine. Our louvered systems with integrated gutters can be piped into stormwater management systems to comply.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Impervious Surface */}
                            <div className="flex gap-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Droplets className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-3">2. Impervious Surface Limits</h2>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        Like much of the North Shore, Winnetka limits how much of your lot can be covered.
                                    </p>
                                    <div className="bg-edg-brand/5 border-l-4 border-edg-brand p-4 rounded-r-lg">
                                        <Quote className="h-4 w-4 text-edg-brand mb-2" />
                                        <p className="italic text-sm text-muted-foreground">
                                            "A louvered roof is often the only way to get a 'covered' porch feel without triggering the same density penalties as a solid roof addition."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Architectural Review */}
                            <div className="flex gap-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                    <FileCheck className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-3">3. Architectural Review</h2>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        The Village wants to ensure new structures blend with the existing home. We support your application with:
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• 3D renderings matching your home's siding/brick textures</li>
                                        <li>• Color samples (custom powder coating)</li>
                                        <li>• Detailed elevation drawings showing sightlines</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
                                <p className="text-sm text-muted-foreground italic">
                                    Disclaimer: This page is a general guide. EDG manages the specific permit application and architectural review board presentation for our clients.
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
                                Need Help with Winnetka Zoning?
                            </h2>
                            <p className="text-edg-dark/80 mb-6">
                                We've navigated the architectural review board many times. Let us handle your permit process.
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
