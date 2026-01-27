import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Phone, Home, Wind, ShieldCheck, Umbrella, Trees } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Barrington Outdoor Living: Estate Pergolas & Zoning Experts | EDG",
    description: "Custom motorized pergolas and louvered roofs designed for Barrington & Barrington Hills estates. Navigating 5-acre zoning and 50% coverage limits.",
    alternates: {
        canonical: "/service-areas/barrington-il",
    },
    openGraph: {
        title: "Barrington Outdoor Living | Estate-Grade Design | EDG",
        description: "Enhance your Barrington estate with luxury outdoor living systems. Expert navigation of Village and Hills zoning codes.",
    },
};

const communities = [
    { name: "Barrington Hills", type: "estate" },
    { name: "South Barrington", type: "estate" },
    { name: "North Barrington", type: "estate" },
    { name: "Lake Barrington", type: "residential" },
    { name: "Inverness", type: "estate" },
    { name: "Wynstone", type: "gated" },
    { name: "Deer Park", type: "residential" },
];

const localConsiderations = [
    {
        title: "Estate Zoning Expert",
        description: "We navigate strict setbacks (5' accessory separation) and impermeable coverage limits (50%) in the Village and Hills.",
        icon: ShieldCheck
    },
    {
        title: "Snow Load Engineered",
        description: "Our systems are engineered to withstand heavy Chicagoland snow loads, ensuring year-round durability for your estate.",
        icon: Wind
    },
    {
        title: "Architectural Harmony",
        description: "From Queen Anne conventions to Modernist estates, our designs integrate seamlessly with Barrington's diverse architectural styles.",
        icon: Home
    },
    {
        title: "The 3-Season Room",
        description: "Extend your outdoor season with motorized screens and heaters, perfect for chilly spring evenings and crisp autumn nights.",
        icon: Umbrella
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving Barrington & The Hills</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Barrington Estate-Grade <br className="hidden md:block" /> Outdoor Living
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Premium, snow-load rated pergolas and motorized screens designed to respect Barrington's estate zoning while expanding your living space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=barrington&source=growth-engine-barrington-outdoor">
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
                                Designed for the Estate Lifestyle
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Building in Barrington requires a deep understanding of village codes and architectural respect. Our systems are designed to enhance your property without compromising its character or violating coverage limits.
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
                                src="/images/pergolas/residential-black-r-blade-01.jpg"
                                alt="Luxury motorized pergola with black frame for a Barrington estate"
                                fill
                                className="object-cover"
                                sizes="50vw"
                            />
                            {/* Note: Using a placeholder image path that exists in the system or should exist. 
                                Ideally, we'd use a Barrington specific image if available, but for now using a high-end project image.
                                I'll double check image paths later if needed. */}
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
                    <h2 className="text-3xl font-bold mb-12">Building in Barrington</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link href="/service-areas/barrington-il/zoning-guide" className="group p-8 rounded-3xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand transition-all text-left">
                            <ShieldCheck className="h-10 w-10 text-edg-brand mb-6" />
                            <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand transition-colors">Barrington Zoning Guide</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Navigate the 50% impermeable coverage limit, 5-foot accessory separation, and estate setback rules.
                            </p>
                            <span className="text-sm font-bold flex items-center gap-2">
                                Read the Guide <ArrowRight className="h-4 w-4" />
                            </span>
                        </Link>

                        <Link href="/service-areas/barrington-il/motorized-pergolas" className="group p-8 rounded-3xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-edg-brand transition-all text-left">
                            <Wind className="h-10 w-10 text-edg-brand mb-6" />
                            <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand transition-colors">Snow-Load Rated Pergolas</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Explore our heavy-duty louvered roof systems engineered specifically for Chicagoland winters and wind.
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
                            Ready to Enhance Your Estate?
                        </h2>
                        <p className="text-lg font-medium opacity-90 mb-8">
                            Get a custom proposal that respects your architecture, your zoning, and your vision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=barrington&source=growth-engine-barrington-outdoor">
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
