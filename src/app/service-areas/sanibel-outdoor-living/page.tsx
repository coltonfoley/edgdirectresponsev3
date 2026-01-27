import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Phone, Home, Wind, ShieldCheck, Umbrella } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sanibel Outdoor Living: Sanctuary-Approved Pergolas & Lanais | EDG",
    description: "Premium louvered roof systems and motorized screens designed for Sanibel Island's strict zoning and coastal climate. Hurricane-rated protection for stilt homes and lanais.",
    alternates: {
        canonical: "/service-areas/sanibel-outdoor-living",
    },
    openGraph: {
        title: "Sanibel Outdoor Living | Sanctuary-Compliant Design | EDG",
        description: "Enhance your Sanibel sanctuary with Miami-Dade rated outdoor living systems. Engineered for elevated decks and coastal preservation.",
    },
};

const communities = [
    { name: "Sanibel Island", type: "residential" },
    { name: "Captiva Island", type: "residential" },
    { name: "Wulfert", type: "residential" },
    { name: "The Dunes", type: "residential" },
    { name: "Gumbo Limbo", type: "residential" },
    { name: "Blind Pass", type: "residential" },
];

const localConsiderations = [
    {
        title: "Sanctuary Compliant",
        description: "We navigate Sanibel's strict impermeable coverage and vegetation codes, offering accessory structures that respect the island's conservation ethos.",
        icon: ShieldCheck
    },
    {
        title: "Hurricane Engineered",
        description: "Our systems are Miami-Dade Hurricane Rated to withstand Gulf storms, giving you peace of mind when the weather turns.",
        icon: Wind
    },
    {
        title: "Stilt Home Integration",
        description: "Lightweight aluminum construction allows for safe installation on elevated decks where heavy traditional materials might exceed load limits.",
        icon: Home
    },
    {
        title: "The Modern Lanai",
        description: "Replace fixed cages with motorized screens that vanish at the touch of a button, restoring your unobstructed view of the Gulf.",
        icon: Umbrella
    },
];

export default function SanibelPage() {
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving Sanibel & Captiva</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Sanctuary-Approved <br className="hidden md:block" /> Outdoor Living
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Premium, hurricane-rated pergolas and motorized screens designed to respect Sanibel&apos;s unique ecology while expanding your living space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=sanibel&source=growth-engine-sanibel-outdoor">
                                <Button size="lg" className="rounded-full bg-edg-brand text-edg-dark hover:bg-edg-brand/90">
                                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10">
                                    <Phone className="mr-2 h-5 w-5" /> 815-581-0138
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Value Props / Local Considerations */}
            <Section className="py-20 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Designed for the Island Lifestyle
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Building on Sanibel requires a deep understanding of local codes and environmental respect. Our systems are designed to enhance your &quot;Sanibel Stoop&quot; lifestyle without compromising the sanctuary.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {localConsiderations.map((item) => (
                                    <div key={item.title} className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                        <item.icon className="h-8 w-8 text-edg-brand mb-4" />
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] w-full bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden hidden lg:block">
                            <Image
                                src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
                                alt="Luxury white motorized pergola for a Sanibel coastal estate"
                                fill
                                className="object-cover"
                                sizes="50vw"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Communities Grid */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                        Neighborhoods We Serve
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-center group hover:border-edg-brand/50 transition-colors"
                            >
                                <Home className="h-5 w-5 text-gray-400 group-hover:text-edg-brand mb-2 transition-colors" />
                                <span className="font-medium text-sm">{community.name}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Content Cluster Links */}
            <Section className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-center">
                <Container>
                    <h2 className="text-3xl font-bold mb-12">Building on Sanibel</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link href="/service-areas/sanibel-outdoor-living/zoning-guide" className="group p-8 rounded-3xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand transition-all text-left">
                            <ShieldCheck className="h-10 w-10 text-edg-brand mb-6" />
                            <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand transition-colors">Sanibel Zoning Guide</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Everything you need to know about impermeable coverage, post-Ian rebuild codes, and accessory structures.
                            </p>
                            <span className="text-sm font-bold flex items-center gap-2">
                                Read the Guide <ArrowRight className="h-4 w-4" />
                            </span>
                        </Link>

                        <Link href="/service-areas/sanibel-outdoor-living/louvered-pergolas" className="group p-8 rounded-3xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand transition-all text-left">
                            <Wind className="h-10 w-10 text-edg-brand mb-6" />
                            <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand transition-colors">Hurricane Rated Pergolas</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Explore our Miami-Dade rated louvered roof systems engineered specifically for the Gulf Coast.
                            </p>
                            <span className="text-sm font-bold flex items-center gap-2">
                                Explore Systems <ArrowRight className="h-4 w-4" />
                            </span>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Upgrade Your Island Retreat?
                        </h2>
                        <p className="text-lg font-medium opacity-90 mb-8">
                            Get a custom proposal that respects your view, your zoning, and your budget.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=sanibel&source=growth-engine-sanibel-outdoor">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Start Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10">
                                    <Phone className="mr-2 h-5 w-5" /> 815-581-0138
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
