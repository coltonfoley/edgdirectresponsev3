import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, DollarSign, CloudRain,
    BarChart3, ShieldCheck, Zap, Phone, Utensils, Hotel, GlassWater, Umbrella
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chicago Hospitality Outdoor Living | Restaurant & Hotel Pergolas",
    description: "Maximize your Chicago hospitality revenue with all-weather outdoor living systems. Custom pergolas and enclosures for restaurants, hotels, and clubs.",
    alternates: {
        canonical: "/commercial/chicago-hospitality-outdoor-living",
    },
    openGraph: {
        title: "Chicago Hospitality Outdoor Living | EDG",
        description: "Turn your Chicago patio into a year-round profit center. Commercial pergolas and enclosures.",
    },
};

export default function ChicagoHospitalityPage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="relative pb-24 pt-32 md:pt-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/luxury-restaurant-patio-enclosure.jpg"
                        alt="Luxury Restaurant Patio Enclosure Chicago"
                        className="w-full h-full object-cover opacity-20 dark:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-edg-light dark:from-black dark:via-black/80 dark:to-black" />
                </div>
                <Container className="relative z-10">
                    <Link href="/commercial" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Commercial
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Chicago's Premier <span className="text-edg-brand">Hospitality Outdoor Design</span> Experts.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            From the West Loop to the North Shore, we specialize in <strong>Restaurant Patio Design</strong> and high-ROI outdoor spaces for Chicago's top hotels and country clubs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <TrackedLink href="/contact?type=commercial">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
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

            {/* ========== INDUSTRY SOLUIONS (SPOKES) ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Tailored Solutions for Your Venue
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Every hospitality space has unique needs. Explore our specialized solutions designed for your specific business model.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Restaurant Only */}
                        <div className="group relative bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 transition-all hover:-translate-y-1">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/luxury-restaurant-patio-enclosure.jpg')" }}></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-8">
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-6">
                                    <Utensils className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Restaurant Patios</h3>
                                <p className="text-muted-foreground mb-6">
                                    Maximize cover counts and eliminate reservation cancellations. See how leading Chicago restaurants protect their revenue.
                                </p>
                                <Link href="/commercial/restaurant-patio-enclosures" className="inline-flex items-center text-edg-brand-text dark:text-edg-brand font-bold hover:underline">
                                    Restaurant Solutions <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Country Clubs */}
                        <div className="group relative bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 transition-all hover:-translate-y-1">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/pergolas/pergola-hero.jpg')" }}></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-8">
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-6">
                                    <GlassWater className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Country Clubs</h3>
                                <p className="text-muted-foreground mb-6">
                                    Enhance member amenities with premium outdoor dining and event spaces. Create the perfect 19th hole environment.
                                </p>
                                <Link href="/commercial/country-club-outdoor-spaces" className="inline-flex items-center text-edg-brand-text dark:text-edg-brand font-bold hover:underline">
                                    Club Solutions <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Hotels */}
                        <div className="group relative bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 transition-all hover:-translate-y-1">
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/frameless-sliding-glass-walls.jpg')" }}></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-8">
                                <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-6">
                                    <Hotel className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Hotels & Rooftops</h3>
                                <p className="text-muted-foreground mb-6">
                                    Transform underutilized rooftops and terraces into year-round event venues and bars.
                                </p>
                                <Link href="/commercial/hotel-roof-deck-systems" className="inline-flex items-center text-edg-brand-text dark:text-edg-brand font-bold hover:underline">
                                    Hotel Solutions <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== LOCAL AUTHORITY ========== */}
            <Section className="py-24 bg-white dark:bg-black">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                We Understand Chicago Hospitality.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Operating a hospitality venue in Chicago is unique. We know the challenges of the "patio season" scramble, the unpredictable lake effect weather, and the strict City of Chicago and suburban building codes.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Local Code Expertise</h4>
                                        <p className="text-muted-foreground">We handle permitting for City of Chicago, North Shore, and suburbs. We know what gets approved.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Midwest Weather Rated</h4>
                                        <p className="text-muted-foreground">Our systems are engineered for Chicago winters (heavy snow load) and severe storms (high wind rating).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Rapid, Low-Disruption Install</h4>
                                        <p className="text-muted-foreground">We work around your service hours to get your new revenue-generating space up and running fast.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 min-h-[500px]">
                            {/* Placeholder for a map or local imagery */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/luxury-restaurant-patio-enclosure.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Serving the Greater Chicago Area</h3>
                                <p className="text-gray-300">Downtown • West Loop • North Shore • Lake Geneva</p>
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
                            Start Planning Your 4-Season Space
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Don't let another season of revenue wash away. Schedule a consultation with our commercial design team today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/contact?type=commercial">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Book Site Assessment <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
