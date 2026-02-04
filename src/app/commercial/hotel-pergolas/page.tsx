import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, Hotel, CloudRain, GlassWater, ArrowRight, Star, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Hotel Rooftop Pergolas | Transform Weather-Dependent Revenue",
    description: "Unlock year-round revenue for hotel rooftops, pool decks, and event spaces with motorized louvered pergolas. ROI-focused solutions for Chicago hospitality.",
    alternates: {
        canonical: "/commercial/hotel-pergolas",
    },
};

const benefits = [
    { title: "Revenue Per Seat", desc: "Turn seasonal patios into year-round profit centers." },
    { title: "Event Reliability", desc: "Never refund a wedding deposit due to rain again." },
    { title: "Guest Experience", desc: "Luxury aesthetic that matches 5-star brand standards." },
    { title: "Zero Maintenance", desc: "Commercial-grade powder coating requires no annual painting." },
];

const stats = [
    { value: "40%", label: "Lost Season", desc: "to weather in Chicago" },
    { value: "$240k", label: "Potential Loss", desc: "per year in cancellations" },
    { value: "1 Season", label: "Payback", desc: "on system investment" },
];

export default function HotelPergolasPage() {
    return (
        <div className="min-h-screen">

            {/* ========== HERO ========== */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-edg-dark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full mb-6">
                                <Building2 className="h-4 w-4" /> Hospitality Solutions
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Unlock Your Rooftop's
                                <span className="text-edg-brand block">Revenue Potential</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Transform weather-dependent outdoor areas into reliable, year-round event spaces with motorized louvered pergolas.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Schedule Commercial Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== STATS BAR ========== */}
            <section className="bg-edg-dark border-t border-white/5 py-12">
                <Container>
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
                                    <div className="text-4xl md:text-5xl font-bold text-edg-brand mb-1">{stat.value}</div>
                                    <div className="text-white font-bold">{stat.label}</div>
                                    <div className="text-sm text-gray-400">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== ROI SECTION ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-edg-brand-text dark:text-edg-brand font-bold text-sm uppercase tracking-wider mb-2 block">
                                    The Problem We Solve
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                                    The "Rain-Out" Problem is <span className="text-edg-brand-text dark:text-edg-brand">Solved</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    In Chicago, you lose 30-40% of your prime patio season to rain, wind, or excessive heat. A louvered roof system gives you control. Close it to keep guests dry, open it to let the stars in.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((b, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                                <Check className="w-5 h-5 text-edg-brand-text dark:text-edg-brand" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">{b.title}</h4>
                                                <p className="text-muted-foreground">{b.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ROI Calculator */}
                            <div className="bg-edg-dark text-white rounded-3xl p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 rounded-full bg-edg-brand/20 flex items-center justify-center">
                                        <TrendingUp className="h-5 w-5 text-edg-brand" />
                                    </div>
                                    <h3 className="font-bold text-xl">ROI Calculator: Wedding Venue</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-white/10 pb-3">
                                        <span className="text-gray-400">Avg. Wedding Booking</span>
                                        <span className="font-bold text-lg">$30,000</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-3">
                                        <span className="text-gray-400">Rainy Weekends / Year</span>
                                        <span className="font-bold text-lg">8</span>
                                    </div>
                                    <div className="flex justify-between border-b border-red-500/20 pb-3 text-red-400">
                                        <span>Potential Lost Revenue</span>
                                        <span className="font-bold text-lg">-$240,000</span>
                                    </div>
                                    <div className="bg-edg-brand/10 border border-edg-brand/20 p-4 rounded-xl mt-4">
                                        <p className="text-center font-medium text-edg-brand">
                                            <Star className="inline h-4 w-4 fill-current mr-1" />
                                            A single season of saved events pays for the entire system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== USE CASES ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Designed for Hospitality
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/30 transition-all hover:shadow-lg">
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-4">
                                    <Hotel className="w-6 h-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Rooftop Bars</h3>
                                <p className="text-muted-foreground">Manage wind loads on high-rises while keeping the view open and the experience premium.</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/30 transition-all hover:shadow-lg">
                                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                    <CloudRain className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Event Spaces</h3>
                                <p className="text-muted-foreground">Integrated gutters manage heavy downpours effortlessly. Never cancel an event again.</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand/30 transition-all hover:shadow-lg">
                                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                                    <GlassWater className="w-6 h-6 text-purple-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Pool Decks</h3>
                                <p className="text-muted-foreground">Create premium cabanas with automated louvers for perfect sun control.</p>
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
                                Ready to Maximize Your Outdoor Revenue?
                            </h2>
                            <p className="text-xl text-edg-dark/80 mb-8">
                                Get a commercial consultation and ROI analysis for your property.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                        Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/commercial/restaurant-patio-solutions">
                                    <Button size="lg" variant="ghost" className="rounded-full text-lg px-8 text-edg-dark hover:bg-edg-dark/10">
                                        Restaurant Solutions
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
