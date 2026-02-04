import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, ChefHat, Leaf, Building2, Snowflake, ArrowRight, Star, Utensils, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Restaurant Patio Solutions | Four-Season Outdoor Dining",
    description: "Turn weather-dependent patios into year-round profit centers. Add 30% more capacity with fully enclosed, heated outdoor dining spaces for Chicago restaurants.",
    alternates: {
        canonical: "/commercial/restaurant-patio-solutions",
    },
};

const features = [
    { icon: Snowflake, label: "Snow Load Rated", color: "text-blue-500" },
    { icon: Building2, label: "City Permit Ready", color: "text-gray-500" },
    { icon: Leaf, label: "Energy Efficient", color: "text-green-500" },
    { icon: ChefHat, label: "Happy Staff", color: "text-edg-brand-text dark:text-edg-brand" },
];

export default function RestaurantPatioPage() {
    return (
        <div className="min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-edg-dark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: "url('/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full mb-6">
                                <Utensils className="h-4 w-4" /> Restaurant Solutions
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Four-Season
                                <span className="text-edg-brand block">Dining Revenue</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Don't let Chicago weather dictate your profits. Add 30% more capacity with fully enclosed, heated outdoor dining spaces.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Get a Commercial Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== PAIN POINTS ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-edg-brand-text dark:text-edg-brand font-bold text-sm uppercase tracking-wider mb-2 block">
                                    The Problem We Solve
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                                    From "Weather Permitting" to <span className="text-edg-brand-text dark:text-edg-brand">"Always Open"</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Every rainy Friday night costs you thousands in lost covers. Our systems aren't just umbrellas; they are engineered structures that seal out rain, wind, and snow, keeping your guests (and their food) warm.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((f, i) => (
                                        <div key={i} className="flex gap-3 items-center bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl">
                                            <div className="h-10 w-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
                                                <f.icon className={`w-5 h-5 ${f.color}`} />
                                            </div>
                                            <span className="font-medium">{f.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study */}
                            <div className="bg-edg-dark text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-edg-brand text-edg-dark text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-current" /> Case Study
                                </div>
                                <Quote className="h-8 w-8 text-edg-brand/30 mb-4" />
                                <h3 className="text-2xl font-bold mb-4">West Loop Italian Concept</h3>
                                <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">
                                    "We added 40 seats with the EDG system. It paid for itself in 4 months during the winter season alone. Guests actually request the 'outdoor' tables now."
                                </p>
                                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                                    <div>
                                        <span className="block text-4xl font-bold text-edg-brand">40</span>
                                        <span className="text-sm text-gray-400">New Seats Added</span>
                                    </div>
                                    <div>
                                        <span className="block text-4xl font-bold text-edg-brand">4mo</span>
                                        <span className="text-sm text-gray-400">ROI Payback</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== SOLUTIONS GRID ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Tailored for Restaurants
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We know the hospitality industry. Fast installs, durable materials, and designs that impress.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/30 transition-all hover:shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Retractable Roofs</h3>
                                <p className="text-muted-foreground mb-6">
                                    Best for maximizing "al fresco" vibes. The roof completely retracts to open the sky on perfect days.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center text-sm">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        100% Sky visibility
                                    </li>
                                    <li className="flex gap-3 items-center text-sm">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        Integrated water drainage
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/30 transition-all hover:shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Louvered Systems</h3>
                                <p className="text-muted-foreground mb-6">
                                    Best for precise control. Tilt louvers to block blinding sunset glare while keeping airflow moving.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 items-center text-sm">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        Bioclimatic cooling
                                    </li>
                                    <li className="flex gap-3 items-center text-sm">
                                        <div className="h-6 w-6 rounded-full bg-edg-brand/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        Heavy snow load capacity
                                    </li>
                                </ul>
                            </div>
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
                                Let's Calculate Your ROI
                            </h2>
                            <p className="text-xl text-edg-dark/80 mb-8">
                                See how quickly a four-season patio pays for itself.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                        Request Site Visit <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/commercial/hotel-pergolas">
                                    <Button size="lg" variant="ghost" className="rounded-full text-lg px-8 text-edg-dark hover:bg-edg-dark/10">
                                        Hotel Solutions
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </div>
    );
}
