
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lake Geneva WI Pergolas & Outdoor Living | EDG Patio",
    description: "Custom motorized pergolas, retractable shades, and glass enclosures for Lake Geneva, WI. Enhancing Victorian Mansion and Modern Lakefront Estate properties with premium outdoor living systems.",
    openGraph: {
        title: "Lake Geneva WI | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for Lake Geneva homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    { name: "Lake Geneva", type: "city" },
    { name: "Fontana-on-Geneva Lake", type: "village" },
    { name: "Williams Bay", type: "village" },
    { name: "Walworth", type: "village" },
    { name: "Linn", type: "town" },
    { name: "Genoa City", type: "village" },
];

const localConsiderations = [
    {
        title: "Local Weather Patterns",
        description: "We factor local wind off Geneva Lake and snow loads into every design.",
    },
    {
        title: "Permitting Expertise",
        description: "We work directly with the City of Lake Geneva Building & Zoning Department to ensure your project meets all local setbacks and design guidelines.",
    },
    {
        title: "Architectural Harmony",
        description: "Our systems are designed to complement Victorian Mansion and Modern Lakefront Estate architecture common in Lake Geneva, not clash with it.",
    },
];

export default function ServiceAreaPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="relative pt-32 pb-24 min-h-[60vh] flex items-center bg-black overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/images/shades/commercial-white-r-blade-screens-lake.jpg"
                        alt="Premium outdoor living design"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                </div>

                <Container className="relative z-10 text-white">
                    <Link href="/service-areas" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/20 border border-edg-brand/30 mb-6 backdrop-blur-sm">
                            <MapPin className="h-4 w-4 text-edg-brand" />
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving Lake Geneva</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Lake Geneva, WI
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
                            Premium motorized pergolas and glass systems designed for Lake Geneva's specific climate and Victorian Mansion and Modern Lakefront Estate architecture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=lake-geneva-wi">
                                <Button size="lg" className="rounded-full">
                                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                                    <Phone className="mr-2 h-5 w-5" /> Call Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Communities Grid */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Neighborhoods We Serve
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5"
                            >
                                <Home className="h-5 w-5 text-edg-brand shrink-0" />
                                <span className="font-medium">{community.name}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Project Showcase (Mini Gallery) */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Why Lake Geneva Homeowners Choose EDG
                            </h2>
                            <div className="space-y-6">
                                {localConsiderations.map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <CheckCircle2 className="h-6 w-6 text-edg-brand shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
                                alt="Luxury outdoor living project by EDG"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-8">Featured Design Styles</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg"
                                alt="Pergola design inspiration"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/pergolas/residential-gray-bronze-r-blade-pool-chairs.jpg"
                                alt="Outdoor living system example"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Upgrade Your Outdoor Space?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Start Project <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
