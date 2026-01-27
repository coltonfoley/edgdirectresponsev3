import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, GlassWater, Trophy, Users, Sun
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Country Club Patio Covers & Outdoor Spaces | Chicago Commercial Shades",
    description: "Upgrade your country club amenities with premium patio covers. Create deeper member engagement with shaded dining, pool decks, and event spaces.",
    alternates: {
        canonical: "/commercial/country-club-outdoor-spaces",
    },
    openGraph: {
        title: "Country Club Outdoor Spaces | EDG Commercial",
        description: "Premium shade and shelter for discerning members. Country club patio covers.",
    },
};

export default function CountryClubPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="relative pb-24 pt-32 md:pt-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/pergolas/pergola-lifestyle.jpg"
                        alt="Country Club Outdoor Dining"
                        className="w-full h-full object-cover opacity-20 dark:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-edg-light dark:from-black dark:via-black/80 dark:to-black" />
                </div>
                <Container className="relative z-10">
                    <Link href="/commercial/chicago-hospitality-outdoor-living" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hospitality Overview
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">Club & Member Amenities</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Elevate Member Experience with <span className="text-edg-brand">Country Club Patio Covers</span>.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            From the 19th hole to the pool deck, provide the premium comfort your members expect. Shade, shelter, and style.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <TrackedLink href="/contact?type=commercial&product=club">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Discuss Club Needs <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== AMENITY AREAS ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The 19th Hole & Dining Terrace</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Members want to linger after a round, but not if they're baking in the sun. Our <strong>Commercial Patio Enclosures</strong> allow you to host events and dining in any weather.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-edg-brand" />
                                    <span>Expand event capacity without new construction</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-edg-brand" />
                                    <span>Protect wedding bookings from rain</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Pool Deck & Cabanas</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Upgrade your poolside experience with motorized commercial outdoor shades that give members control over their environment.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-edg-brand" />
                                    <span>UV protection for families</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-edg-brand" />
                                    <span>Premium cabana aesthetic</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2 mt-12 rounded-3xl overflow-hidden h-[400px] relative">
                            <img
                                src="/images/pergolas/pergola-pool-spa.jpg"
                                alt="Country Club Pool Deck Pergola"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest mb-2">Member Amenities</p>
                                <h3 className="text-3xl font-bold">Resort-Style Pool Decks</h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="bg-edg-dark text-white py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Plan Your 2026 Club Improvements
                        </h2>
                        <TrackedLink href="/contact?type=commercial&product=club">
                            <Button size="lg" className="rounded-full text-lg px-8">
                                Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </TrackedLink>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
