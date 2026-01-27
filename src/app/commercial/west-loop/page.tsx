import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, ArrowRight, DollarSign, CloudRain,
    BarChart3, ShieldCheck, Zap, Phone, Shield, TrendingUp, Building2, Utensils
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "West Loop Commercial Patio Enclosures | Fulton Market ROI",
    description: "Turn your West Loop restaurant terrace into a year-round profit center. Custom motorized pergolas and glass enclosures for Fulton Market hospitality group. Handles Chicago wind and weather.",
    alternates: {
        canonical: "/commercial/west-loop",
    },
    openGraph: {
        title: "West Loop Commercial ROI | EDG Outdoor Living",
        description: "Year-round seating for West Loop restaurants. Stop canceling terrace reservations and start printing money.",
    },
};

export default function WestLoopCommercialPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="pb-16 pt-24 md:pt-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/staging/commercial-glass-enclosure-night-exterior-01.jpg')] bg-cover bg-center opacity-10 dark:opacity-20" />
                <Container className="relative z-10">
                    <Link href="/commercial" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Commercial Solutions
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">Fulton Market & West Loop Hospitality</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                            The $500k sitting on your <br />
                            <span className="text-edg-brand-text italic">West Loop Terrace.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            In the West Loop, terrace space isn't "extra"—it's where the margin lives. Don't let Chicago's 42 annual rainy days and brutal winter winds kill your covers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <TrackedLink href="/contact?type=commercial&source=growth-engine-west-loop-commercial">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Request ROI Analysis <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                            <TrackedPhoneLink href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8">
                                    <Phone className="mr-2 h-5 w-5" /> Speak with a Specialist
                                </Button>
                            </TrackedPhoneLink>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== THE WEST LOOP OPPORTUNITY ========== */}
            <Section className="bg-zinc-950 text-white py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="lg:pt-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Chicago's Permanent Outdoor Dining Program is here. Are you ready?
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                With the city's shift to permanent expanded outdoor dining in Fulton Market, the race is on. We don't just build "awnings"—we build commercial infrastructure that qualifies for long-term use and handles the unique wind-tunnel effects of the West Loop.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-edg-brand/20 flex items-center justify-center shrink-0">
                                        <Building2 className="h-6 w-6 text-edg-brand" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Industrial Chic Integration</h3>
                                        <p className="text-gray-400">Custom finishes that match the adaptive-reuse aesthetic of Fulton Market warehouses.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-edg-brand/20 flex items-center justify-center shrink-0">
                                        <TrendingUp className="h-6 w-6 text-edg-brand" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Maximized Cover Counts</h3>
                                        <p className="text-gray-400">Add 40-100 seats that are reservable 365 days a year, regardless of the weather.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mt-12 lg:mt-0">
                            <div className="absolute inset-0 bg-[url('/images/staging/commercial-glass-enclosure-night-dining-01.jpg')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-sm">
                                <p className="text-sm font-semibold text-edg-brand uppercase mb-2">Live Example</p>
                                <p className="text-lg font-medium">"Our terrace revenue increased by 312% in the first winter after installing the EDG louvered system."</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== ROI CALCULATOR TEASE ========== */}
            <Section className="py-24 bg-zinc-50 dark:bg-zinc-900">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Math of the Modern Terrace</h2>
                        <p className="text-xl text-muted-foreground">Stop looking at outdoor enclosures as a cost. Look at them as an asset that pays dividends.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl border border-black/5 shadow-sm text-center">
                            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Average Project</div>
                            <div className="text-4xl font-bold mb-4">$75k - $150k</div>
                            <p className="text-muted-foreground">Investment in commercial-grade all-weather infrastructure.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl border border-black/5 shadow-sm text-center">
                            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Revenue Increase</div>
                            <div className="text-4xl font-bold text-emerald-500 mb-4">+$15k - $25k</div>
                            <p className="text-muted-foreground">In additional weekly covers during "off-seasons."</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl border border-black/5 shadow-sm text-center">
                            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Payback Period</div>
                            <div className="text-4xl font-bold text-edg-brand mb-4">4 - 6 Months</div>
                            <p className="text-muted-foreground">Full ROI achieved within the first season of operation.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== PRODUCT VERTICALS ========== */}
            <Section className="py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <Section className="p-0 mb-12">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <Utensils className="text-edg-brand" /> Restaurant & Bar Lounges
                                </h3>
                                <p className="text-muted-foreground mb-6">Eliminate the "Weather Anxiety" of large party bookings. Our systems include integrated heaters, LED lighting, and wind-screens that create a true indoor environment outdoors.</p>
                                <ul className="grid grid-cols-2 gap-4">
                                    {["90mph Wind Rated", "Integrated Drain", "One-Touch Control", "Custom Branding"].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm font-medium">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </Section>
                            <Section className="p-0">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <Building2 className="text-edg-brand" /> Hotel & Condo Amenity Decks
                                </h3>
                                <p className="text-muted-foreground mb-6">Increase the value of your common areas. Whether it's a rooftop pool deck or a co-working terrace, we provide the shade and weather protection that keeps tenants engaged.</p>
                                <ul className="grid grid-cols-2 gap-4">
                                    {["ADA Compliant", "Multi-Zone Control", "Snow Load Rated", "Smart Home Link"].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm font-medium">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </Section>
                        </div>
                        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-6">Permit Hassle? Not Yours.</h3>
                            <p className="text-lg text-muted-foreground mb-8">
                                We handle the 2026 Chicago Building Department codes, public way use permits, and engineering sign-offs.
                                In the West Loop (Ward 27), we know the requirements for expanded outdoor dining like nobody else.
                            </p>
                            <TrackedLink href="/contact?type=commercial&source=growth-engine-west-loop-commercial">
                                <Button className="w-full rounded-xl py-6 text-lg">Start Preliminary Site Assessment</Button>
                            </TrackedLink>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== FINAL CTA ========== */}
            <Section className="bg-edg-brand text-black py-20">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Don't leave your Q4 revenue to chance.</h2>
                            <p className="text-xl font-medium">West Loop installs are filling up for the 2026 season. Get your site assessment booked today.</p>
                        </div>
                        <div className="shrink-0">
                            <TrackedLink href="/contact?type=commercial&source=growth-engine-west-loop-commercial">
                                <Button size="lg" variant="secondary" className="bg-black text-white hover:bg-zinc-800 rounded-full text-xl px-12 py-8 h-auto">
                                    Secure My Date <ArrowRight className="ml-2" />
                                </Button>
                            </TrackedLink>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
