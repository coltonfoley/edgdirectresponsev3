"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, ArrowRight, CloudSun, Palette, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const reasons = [
    {
        icon: CloudSun,
        title: "Lake Michigan Weather",
        description: "Wilmette sits right on the lake. That means sudden temperature drops and strong winds. A static wooden pergola doesn't help you when the wind shifts off the water. A louvered roof lets you seal the space instantly.",
    },
    {
        icon: Palette,
        title: "Architectural Matching",
        description: "Whether you have a classic red brick colonial near the lake or a stucco home, our systems can be powder coated to match your trim or window mullions perfectly. It looks like it was built with the house, not tacked on.",
    },
    {
        icon: TrendingUp,
        title: "Property Value",
        description: "In high-value markets like Wilmette, \"usable square footage\" is king. By creating a true four-season outdoor room, you are effectively adding living space that appraises higher than a standard deck.",
    },
];

export default function WilmetteProductPage() {
    return (
        <div className="min-h-screen">
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
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
                                <MapPin className="h-3 w-3" /> Wilmette, IL
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Why Wilmette Homeowners Choose Louvered Roofs
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
                                See a Project Near You
                            </h2>
                            <p className="text-edg-dark/80 mb-6">
                                We have installed systems throughout the North Shore. Ask to see our portfolio of Wilmette projects during your consultation.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Schedule Design Consult <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}
