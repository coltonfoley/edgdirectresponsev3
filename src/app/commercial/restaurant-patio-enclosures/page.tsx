import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, DollarSign, CloudRain,
    BarChart3, ShieldCheck, Zap, Phone, Utensils, ChefHat, GlassWater
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant Patio Enclosures Chicago | Commercial Covers & Shades",
    description: "Increase table covers by 30% with custom restaurant patio enclosures. Heavy-duty motorized pergolas and commercial patio covers for Chicago dining.",
    alternates: {
        canonical: "/commercial/restaurant-patio-enclosures",
    },
    openGraph: {
        title: "Restaurant Patio Enclosures | EDG Commercial",
        description: "Turn your patio into a year-round profit center. Wind-rated commercial enclosures.",
    },
};

export default function RestaurantPatioPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="relative pb-24 pt-32 md:pt-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/luxury-restaurant-patio-enclosure.jpg"
                        alt="Commercial Restaurant Patio Enclosure"
                        className="w-full h-full object-cover opacity-20 dark:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-edg-light dark:from-black dark:via-black/80 dark:to-black" />
                </div>
                <Container className="relative z-10">
                    <Link href="/commercial/chicago-hospitality-outdoor-living" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hospitality Overview
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">Restaurant Solutions</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            The ROI of a <span className="text-edg-brand">Commercial Patio Enclosure</span> is Measured in Weeks.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            Stop losing reservations to rain and wind. Our <strong>Restaurant Patio Covers</strong> and motorized shades turn your seasonal outdoor space into a 365-day revenue engine.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <TrackedLink href="/contact?type=commercial&product=restaurant">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                            <TrackedPhoneLink href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 border-input hover:bg-accent hover:text-accent-foreground">
                                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                                </Button>
                            </TrackedPhoneLink>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== PROBLEM / SOLUTION ========== */}
            <Section className="bg-zinc-950 text-white py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                "We used to close the patio when it looked like rain."
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Chicago weather is unpredictable. If you rely on umbrellas or simple awnings, you're losing money every time the forecast is "iffy."
                            </p>
                            <h3 className="text-xl font-bold mb-4 text-white">The EDG Commercial System:</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-edg-brand shrink-0" />
                                    <div>
                                        <span className="font-bold text-white">Motorized Louvered Roof:</span>
                                        <p className="text-sm text-gray-400">Closes in 60 seconds to become completely waterproof.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-edg-brand shrink-0" />
                                    <div>
                                        <span className="font-bold text-white">Integrated Heating:</span>
                                        <p className="text-sm text-gray-400">Keep guests comfortable for 8-9 months of the year.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-edg-brand shrink-0" />
                                    <div>
                                        <span className="font-bold text-white">Wind-Rated Screens:</span>
                                        <p className="text-sm text-gray-400">Block the wind without blocking the view. Rated for commercial use.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
                            <img
                                src="/images/motorized-retractable-screens-patio.jpg"
                                alt="Restaurant Patio Shades"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <BarChart3 className="text-edg-brand" /> Revenue Impact
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase">Average Ticket (4-top)</div>
                                        <div className="text-2xl font-semibold">$200 - $400</div>
                                    </div>
                                    <div className="h-px bg-white/10"></div>
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase">Lost Revenue (Fri/Sat Rainout)</div>
                                        <div className="text-2xl font-semibold text-red-500">-$5,000 to -$15,000</div>
                                    </div>
                                    <div className="h-px bg-white/10"></div>
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase">EDG Solution</div>
                                        <div className="text-3xl font-bold text-edg-brand">$0 Lost Revenue</div>
                                        <p className="text-xs text-gray-500 mt-1">Pay for the system in one season.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== KEYWORD RICH FEATURE BLOCK ========== */}
            <Section className="py-24 bg-white dark:bg-black">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Commercial Patio Enclosure Options
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We design heavy-duty systems specifically for the demands of the restaurant industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
                            <div className="h-12 w-12 bg-edg-brand/10 rounded-full flex items-center justify-center mb-6">
                                <Utensils className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Restaurant Patio Covers</h3>
                            <p className="text-muted-foreground mb-4">
                                Fixed or motorized options. Our louvered covers provide ventilation on hot days and full rain protection on wet ones.
                            </p>
                        </div>
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
                            <div className="h-12 w-12 bg-edg-brand/10 rounded-full flex items-center justify-center mb-6">
                                <DollarSign className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Commercial Outdoor Shades</h3>
                            <p className="text-muted-foreground mb-4">
                                Heavy-duty zipper screens that hold up to commercial use. Reduce glare for diners and block wind for comfort.
                            </p>
                        </div>
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
                            <div className="h-12 w-12 bg-edg-brand/10 rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Permitting & Compliance</h3>
                            <p className="text-muted-foreground mb-4">
                                We handle all Chicago permitting. We know the codes for "Restaurant Patio Design" and ensure full compliance.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="bg-edg-dark text-white py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Upgrade Your Patio?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Schedule a site visit. We'll give you a clear proposal with ROI projections for your specific cover count.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/contact?type=commercial&product=restaurant">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Request Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
