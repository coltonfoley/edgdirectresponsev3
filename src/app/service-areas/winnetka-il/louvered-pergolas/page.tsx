"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, ArrowRight, Eye, Palette, Wind, Crown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const reasons = [
    {
        icon: Eye,
        title: "Unobstructed Views",
        description: "Standard pergola kits require posts every 10-12 feet. On a large Winnetka patio, that creates a \"forest of columns.\" Our commercial-grade engineered beams can span 20-24 feet, keeping your sightlines to the garden or lake completely open.",
    },
    {
        icon: Palette,
        title: "Historical Accuracy",
        description: "We don't do \"shiny white plastic\" looks. Our systems can be matte powder-coated to match limestone, dark bronze window frames, or slate roofing. We can add cornice details and columns that mimic classical architecture.",
    },
    {
        icon: Wind,
        title: "Lakefront Wind Ratings",
        description: "Wind off Lake Michigan can be fierce. Lightweight awnings rip. Our systems are Miami-Dade hurricane rated. When the storm comes, the louvers lock together to form a solid, structured roof that withstands the gale.",
    },
];

export default function WinnetkaProductPage() {
    return (
        <div className="min-h-screen">
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
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-3 py-1 rounded-full mb-4">
                                <Crown className="h-3 w-3" /> Estate-Grade
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Estate-Grade Louvered Systems
                            </h1>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== REASONS ========== */}
            <Section className="py-16 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto space-y-8">
                            {reasons.map((reason, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                    <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                        <reason.icon className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">{i + 1}. {reason.title}</h2>
                                        <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
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
                                Design Consultation
                            </h2>
                            <p className="text-edg-dark/80 mb-6">
                                We respect the privacy of our Winnetka clients. We are happy to arrange a private site walk to discuss your estate's needs.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Request Private Consult <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}
