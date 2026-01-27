
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home, Building2, TreePine } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oak Brook IL Pergolas & Estate Outdoor Living | EDG Patio",
    description: "Custom motorized pergolas, retractable shades, and glass enclosures for Oak Brook estates. Harmonizing with Tudor, Georgian, and Contemporary architecture.",
    alternates: {
        canonical: "/service-areas/oak-brook-il",
    },
    openGraph: {
        title: "Oak Brook IL | Luxury Outdoor Living | EDG",
        description: "Premium outdoor living systems for Oak Brook homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    { name: "Oak Brook", type: "residential" },
    { name: "Hinsdale", type: "residential" },
    { name: "Burr Ridge", type: "residential" },
    { name: "Clarendon Hills", type: "residential" },
    { name: "Elmhurst", type: "residential" },
    { name: "Villa Park", type: "residential" },
];

const localConsiderations = [
    {
        title: "Estate Architecture",
        description: "From Tudor Revival to Contemporary, we design systems that respect the architectural integrity of your Oak Brook estate.",
    },
    {
        title: "Zoning Expertise",
        description: "We work directly with the Village of Oak Brook Development Services Department to navigate setbacks and impervious surface requirements.",
    },
    {
        title: "Natural Settings",
        description: "Whether you overlook Salt Creek or the fairways, our glass systems protect your view while keeping the elements at bay.",
    },
];

export default function OakBrookPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="relative pt-32 pb-24 min-h-[60vh] flex items-center bg-black overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
                        alt="Luxury estate pergola design"
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving Oak Brook & Hinsdale</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Oak Brook, Illinois Outdoor Living Environments
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
                            Refined outdoor living for the western suburbs. Motorized pergolas and glass systems that extend the season for Oak Brook's finest homes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=oak-brook">
                                <Button size="lg" className="rounded-full">
                                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
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
                                Enhance Your Estate
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
                                src="/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png"
                                alt="Luxury outdoor dining setup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-8">Featured Design Styles</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/pergolas/residential-white-pergola-pool-glass-doors-02.jpg"
                                alt="Poolside pergola installation"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/enclosures/glass-system-04.jpg"
                                alt="Glass enclosure sunroom project"
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
                            Ready to Transform Your Oak Brook Home?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=oak-brook">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
