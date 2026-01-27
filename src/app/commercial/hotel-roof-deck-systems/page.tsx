import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, Hotel, Waves, Wind, ShieldCheck
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hotel Patio Shading & Roof Deck Systems | Chicago Hospitality",
    description: "Activate your hotel rooftop or terrace. Commercial outdoor shades and heavy-duty pergolas designed for high-wind hotel environments.",
    alternates: {
        canonical: "/commercial/hotel-roof-deck-systems",
    },
    openGraph: {
        title: "Hotel Patio Shading | EDG Commercial",
        description: "Chicago hotel outdoor amenities. Wind-rated protection for guests.",
    },
};

export default function HotelPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="relative pb-24 pt-32 md:pt-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/frameless-sliding-glass-walls.jpg"
                        alt="Hotel Rooftop Glass Enclosure"
                        className="w-full h-full object-cover opacity-20 dark:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-edg-light dark:from-black dark:via-black/80 dark:to-black" />
                </div>
                <Container className="relative z-10">
                    <Link href="/commercial/chicago-hospitality-outdoor-living" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hospitality Overview
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">Hotel & Resort Solutions</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Premium <span className="text-edg-brand">Hotel Patio Shading</span> & Rooftop Systems.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            Create memorable guest experiences on rooftops, terraces, and pool decks. Wind-rated systems built for the Chicago skyline.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <TrackedLink href="/contact?type=commercial&product=hotel">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Hotel Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== FEATURES ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                            <Wind className="h-10 w-10 text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">High Wind Ratings</h3>
                            <p className="text-muted-foreground">
                                Rooftops in Chicago face extreme wind loads. Our <strong>Commercial Outdoor Shades</strong> and pergolas are engineered to withstand these forces without consistent noise or damage.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                            <Waves className="h-10 w-10 text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Pool Deck Comfort</h3>
                            <p className="text-muted-foreground">
                                Offer guests refuge from the sun. Automated systems can track the sun or be controlled by staff to optimize comfort throughout the day.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl">
                            <ShieldCheck className="h-10 w-10 text-edg-brand mb-4" />
                            <h3 className="text-xl font-bold mb-3">Commercial Durability</h3>
                            <p className="text-muted-foreground">
                                Low maintenance aluminum construction means no rust, no painting, and minimal downtime for your engineering team.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 rounded-3xl overflow-hidden h-[500px] relative">
                        <img
                            src="/images/shades/shade-deployed-screens-01.jpg"
                            alt="Hotel Terrace Amenities"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                            <div className="max-w-2xl">
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Activate Every Square Foot</h3>
                                <p className="text-xl text-gray-200">Turn your hotel terrace into a premium revenue generator, day or night, rain or shine.</p>
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
                            Upgrade Your Guest Experience
                        </h2>
                        <TrackedLink href="/contact?type=commercial&product=hotel">
                            <Button size="lg" className="rounded-full text-lg px-8">
                                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </TrackedLink>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
