
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Barrington IL Pergolas & Luxury Outdoor Living | EDG Patio",
    description: "Custom motorized pergolas, retractable shades, and glass enclosures for the greater Barrington area. Enhancing luxury estates with premium outdoor living systems. Local experts.",
    openGraph: {
        title: "Barrington IL | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for Barrington homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    { name: "Barrington", type: "residential" },
    { name: "South Barrington", type: "residential" },
    { name: "North Barrington", type: "residential" },
    { name: "Lake Barrington", type: "residential" },
    { name: "Inverness", type: "residential" },
    { name: "Deer Park", type: "residential" },
];

const localConsiderations = [
    {
        title: "Estate Scale Projects",
        description: "We specialize in large-scale installations that complement the expansive grounds common in Barrington's estate properties.",
    },
    {
        title: "Poolside Integration",
        description: "Our louvered pergolas are the perfect companion for luxury pool decks, providing adjustable shade and rain protection for your lounge area.",
    },
    {
        title: "Architectural Harmony",
        description: "From traditional Georgian estates to modern farmhouses, we design systems that respect and enhance your home's unique architecture.",
    },
];

export default function BarringtonPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="pt-24 md:pt-32 pb-16 bg-edg-dark text-white">
                <Container>
                    <Link href="/service-areas" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/20 border border-edg-brand/30 mb-6">
                            <MapPin className="h-4 w-4 text-edg-brand" />
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving The Barrington Area</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Barrington, Illinois
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Experience the pinnacle of outdoor luxury. Custom motorized pergolas and glass systems designed for Barrington's finest estates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=barrington">
                                <Button size="lg" className="rounded-full">
                                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10">
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
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Serving the entire 60010 zip code and surrounding villages.
                    </p>
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

            {/* Local Considerations */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Why Barrington Homeowners Choose EDG
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
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Enhance Your Estate?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=barrington">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Start Project <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10">
                                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
