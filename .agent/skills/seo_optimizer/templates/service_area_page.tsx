
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home, Building2, TreePine } from "lucide-react";
import type { Metadata } from "next";

// [TEMPLATE VARIABLES]
// CITY_NAME: e.g. "Barrington"
// STATE: "IL" or "WI"
// PHONE: e.g. "tel:+18155810138"
// COMMUNITIES: List of nearby towns
//
// [HYPER_LOCAL VARIABLES]
// ZONING_BODY: e.g. "Barrington Architectural Review Commission"
// LANDMARK: e.g. "Fox River" or "Lake Michigan"
// HOUSING_STYLE: e.g. "Georgian Estates" or "Modern Farmhouse"
//
// [IMAGE VARIABLES]
// HERO_IMAGE: Path from gallery-images.json
// GALLERY_IMAGE_1: Path
// GALLERY_IMAGE_2: Path
// GALLERY_IMAGE_3: Path

export const metadata: Metadata = {
    title: "[CITY_NAME] [STATE] Pergolas & Outdoor Living | EDG Patio",
    description: "Custom motorized pergolas, retractable shades, and glass enclosures for [CITY_NAME], [STATE]. enhancing [HOUSING_STYLE] properties with premium outdoor living systems.",
    openGraph: {
        title: "[CITY_NAME] [STATE] | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for [CITY_NAME] homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    // [Insert Communities Here]
    { name: "Sample Community", type: "residential" },
];

const localConsiderations = [
    {
        title: "Local Weather Patterns",
        description: "We factor local wind off [LANDMARK] and snow loads into every design.",
    },
    {
        title: "Permitting Expertise",
        description: "We work directly with the [ZONING_BODY] to ensure your project meets all local setbacks and design guidelines.",
    },
    {
        title: "Architectural Harmony",
        description: "Our systems are designed to complement [HOUSING_STYLE] architecture common in [CITY_NAME], not clash with it.",
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
                        src="[HERO_IMAGE]"
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving [CITY_NAME]</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            [CITY_NAME], [STATE]
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
                            Premium motorized pergolas and glass systems designed for [CITY_NAME]'s specific climate and [HOUSING_STYLE] architecture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=[SLUG]">
                                <Button size="lg" className="rounded-full">
                                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:[PHONE]">
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
                                Why [CITY_NAME] Homeowners Choose EDG
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
                                src="[GALLERY_IMAGE_1]"
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
                                src="[GALLERY_IMAGE_2]"
                                alt="Pergola design inspiration"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                            <Image
                                src="[GALLERY_IMAGE_3]"
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
