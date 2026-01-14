
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home, Wind, Waves, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lake Geneva, WI Outdoor Living | Motorized Pergolas & Screens",
    description: "Extend your summer season on Geneva Lake. Custom motorized pergolas and MagnaTrack screens designed to withstand lake winds and protect against pests without blocking the view.",
    openGraph: {
        title: "Lake Geneva, WI | Premium Outdoor Living | EDG",
        description: "Wind-rated pergolas and screens for Lake Geneva estates. Enjoy the lake view, ignore the bugs and wind.",
    },
};

const communities = [
    { name: "Lake Geneva", type: "city" },
    { name: "Fontana", type: "village" },
    { name: "Williams Bay", type: "village" },
    { name: "Walworth", type: "village" },
    { name: "Linn", type: "town" },
    { name: "Genoa City", type: "village" },
];

const localConsiderations = [
    {
        title: "Built for Lake Winds",
        description: "The breeze off Geneva Lake is refreshing, but storms can be brutal. Our systems are engineered to withstand high wind loads, so you never have to worry when the weather turns.",
    },
    {
        title: "Pest-Free Sunsets",
        description: "Don't let mosquitoes ruin the best part of the day. Our motorized screens seal tight to keep pests out while preserving your view of the water.",
    },
    {
        title: "Historic & Modern Integrity",
        description: "Whether you own a Queen Anne on the lakefront or a modern retreat in the woods, our designs integrate seamlessly with Lake Geneva's diverse architectural heritage.",
    },
];

export default function ServiceAreaPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="relative pt-32 pb-24 min-h-[70vh] flex items-center bg-black overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/images/shades/commercial-white-r-blade-screens-lake.jpg"
                        alt="Lake Geneva home with motorized pergola and screens"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                </div>

                <Container className="relative z-10 text-white">
                    <Link href="/service-areas" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/20 border border-edg-brand/30 mb-6 backdrop-blur-sm">
                            <MapPin className="h-4 w-4 text-edg-brand" />
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving Lake Geneva, WI</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Extend Your <br />
                            <span className="text-edg-brand">Summer Season.</span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
                            You come to the lake to be outside. Don't let rain, wind, or bugs drive you indoors.
                            We install premium motorized pergolas and screens that let you enjoy your Lake Geneva property in any weather.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=lake-geneva-wi">
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
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Serving the Geneva Lake Area
                        </h2>
                        <p className="text-muted-foreground mt-2 md:mt-0">
                            From the Abbey to Big Foot Beach and everywhere in between.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className="flex items-center justify-center p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 hover:border-edg-brand transition-colors cursor-default"
                            >
                                <span className="font-medium">{community.name}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Unique Value Props */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-edg-brand/10 text-edg-brand text-xs font-bold uppercase tracking-wider mb-4">
                                Lake Life Optimized
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                The View is Perfect.<br />The Elements Aren't.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Lake Geneva living is about the outdoors. But localized lake weather—sudden winds, intense afternoon sun, and the evening insect rush—can make your patio unusable for 40% of the season.
                            </p>
                            <div className="space-y-6">
                                {localConsiderations.map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="mt-1">
                                            {item.title.includes("Wind") && <Wind className="h-6 w-6 text-edg-brand" />}
                                            {item.title.includes("Pest") && <Shield className="h-6 w-6 text-edg-brand" />}
                                            {item.title.includes("Historic") && <Home className="h-6 w-6 text-edg-brand" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
                                alt="Modern white pergola by the pool in Lake Geneva"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Caption */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md rounded-xl border border-white/10">
                                <p className="text-white font-medium">
                                    "We wanted to use the pool deck even when the wind picked up off the lake. The glass walls made it a three-season room."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                            <Image
                                src="/images/enclosures/glass-system-04.jpg"
                                alt="Glass enclosure protecting a lake view"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <h4 className="text-white font-bold text-xl">Preserve the View</h4>
                                <p className="text-white/80 text-sm">Frameless glass systems for uninterrupted sightlines.</p>
                            </div>
                        </div>
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                            <Image
                                src="/images/pergolas/residential-gray-bronze-r-blade-pool-chairs.jpg"
                                alt="Louvered roof pergola"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <h4 className="text-white font-bold text-xl">Control the Sun</h4>
                                <p className="text-white/80 text-sm">Adjust louvers to let in light or block the midday heat.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Expert Implementation */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Navigating Lake Geneva Permits
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Building near the water comes with strict zoning rules. We handle it all.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
                            <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand mb-4 font-bold text-xl">1</div>
                            <h3 className="font-bold text-lg mb-2">Shoreland Zoning</h3>
                            <p className="text-sm text-muted-foreground">
                                We understand the specific impervious surface limits and setbacks required for properties within 1,000 feet of the lake.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
                            <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand mb-4 font-bold text-xl">2</div>
                            <h3 className="font-bold text-lg mb-2">Architectural Review</h3>
                            <p className="text-sm text-muted-foreground">
                                From the Geneva Lake Association to municipal boards, we provide the detailed renderings needed for quick board approvals.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
                            <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand mb-4 font-bold text-xl">3</div>
                            <h3 className="font-bold text-lg mb-2">Winterization</h3>
                            <p className="text-sm text-muted-foreground">
                                Our systems are designed to be "set it and forget it" for winter. No complex tarping or dismantling required when the season ends.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-24 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready for a Better Summer?
                        </h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                            Schedule a site consultation at your Lake Geneva property. We'll measure your space, discuss sun angles, and design a system that fits your home perfectly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90 px-8 h-14 text-lg">
                                    Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="ghost" className="rounded-full border border-edg-dark text-edg-dark hover:bg-edg-dark/10 px-8 h-14 text-lg">
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
