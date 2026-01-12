import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Landmark } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "North Shore Chicago Pergolas & Outdoor Living | Wilmette, Winnetka, Glencoe",
    description: "Premium motorized pergolas, exterior shades, and glass enclosures for Chicago's North Shore. Serving Wilmette, Winnetka, Glencoe, Kenilworth, Northbrook & Northfield.",
    openGraph: {
        title: "North Shore Chicago | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for North Shore properties. Expert planning and professional installation.",
    },
};

const communities = [
    { name: "Wilmette", note: "" },
    { name: "Winnetka", note: "" },
    { name: "Glencoe", note: "" },
    { name: "Kenilworth", note: "" },
    { name: "Northbrook", note: "" },
    { name: "Northfield", note: "" },
    { name: "Glenview", note: "" },
    { name: "Skokie", note: "" },
    { name: "Evanston", note: "Historic districts" },
    { name: "Morton Grove", note: "" },
    { name: "Niles", note: "" },
    { name: "Park Ridge", note: "" },
];

const localConsiderations = [
    {
        title: "Permit Management",
        description: "Winnetka, Wilmette, Glencoe, and Kenilworth have specific zoning and permit requirements. We handle the entire application process, ensuring all documentation meets local village standards for a smooth approval.",
    },
    {
        title: "Historic Properties",
        description: "Many North Shore homes have historic significance. We design systems that complement period architecture—not fight against it.",
    },
    {
        title: "Premium Finishes",
        description: "North Shore properties demand attention to detail. We offer upgraded finishes, custom colors, and design elements that match the quality of your home.",
    },
    {
        title: "Lake Michigan Proximity",
        description: "Properties close to the lake face salt air, higher winds, and humidity. We specify materials and coatings engineered for these conditions.",
    },
];

export default function NorthShorePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="pt-24 md:pt-32 pb-16 bg-edg-dark text-white">
                <Container>
                    <Link href="/service-areas" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand-text dark:hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/20 border border-edg-brand/30 mb-6">
                            <MapPin className="h-4 w-4 text-edg-brand" />
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Premium Market</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Chicago's North Shore
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Wilmette to Winnetka, Glencoe to Kenilworth. The North Shore's finest properties
                            deserve outdoor living systems that match—in design, quality, and execution.
                            We have the experience to deliver.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=north-shore">
                                <Button size="lg" className="rounded-full">
                                    Get a North Shore Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                        North Shore Communities We Serve
                    </h2>
                    <p className="text-lg text-edg-gray-text dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-medium">
                        From lakefront estates to village neighborhoods, we serve the entire North Shore corridor.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5"
                            >
                                <span className="font-medium">{community.name}</span>
                                {community.note && (
                                    <span className="block text-xs text-edg-brand-text dark:text-edg-brand mt-1 font-bold">{community.note}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Local Planning Expertise */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <Landmark className="h-12 w-12" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Local Planning Expertise
                            </h2>
                        </div>
                        <p className="text-xl mb-8 text-edg-dark/80">
                            North Shore communities are known for their high standards. We don't just
                            meet those standards—we handle the entire planning and permitting process
                            to ensure your project is approved efficiently while protecting your design vision.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Full site assessment and feasibility review",
                                "Professional permit application management",
                                "Coordination with village building departments",
                                "Ensuring compliance with local zoning codes",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-edg-dark/10 rounded-lg px-4 py-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Local Considerations */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        North Shore-Specific Considerations
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {localConsiderations.map((item) => (
                            <div key={item.title} className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm border border-zinc-200/50 dark:border-zinc-700">
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-edg-gray-text dark:text-gray-400 font-medium">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Systems */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Systems for North Shore Properties
                    </h2>
                    <p className="text-lg text-edg-gray-text dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto font-medium">
                        Premium systems that complement the caliber of North Shore architecture.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Louvered Pergolas",
                                description: "Clean architectural lines that integrate with traditional and contemporary homes. Full weather control without compromising design.",
                                href: "/systems/pergolas",
                                why: "The most requested system on the North Shore",
                            },
                            {
                                name: "Motorized Shades",
                                description: "Solar protection that disappears when not needed. Ideal for porches, pool houses, and pergola enclosures.",
                                href: "/systems/shades",
                                why: "Preserve lake views while managing sun and wind",
                            },
                            {
                                name: "Glass Enclosures",
                                description: "Extend your living space year-round. Frameless designs that don't obstruct your property's sightlines.",
                                href: "/systems/enclosures",
                                why: "Popular for three-season rooms and pool areas",
                            },
                        ].map((system) => (
                            <div key={system.name} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-black/5 dark:border-white/5 shadow-sm">
                                <h3 className="text-xl font-bold mb-3">{system.name}</h3>
                                <p className="text-edg-gray-text dark:text-gray-400 font-medium mb-4">{system.description}</p>
                                <p className="text-sm text-edg-brand-text dark:text-edg-brand font-bold mb-6">→ {system.why}</p>
                                <Link href={system.href}>
                                    <Button variant="secondary" size="sm" className="w-full rounded-lg">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Testimonial */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                            "EDG handled everything—the
                            permits, the coordination, and the installation. Our pergola was approved
                            and built without us having to manage a single detail."
                        </blockquote>
                        <div>
                            <div className="font-bold text-lg">Homeowner</div>
                            <div className="text-muted-foreground">Winnetka, IL • Louvered Pergola + Shades</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Elevate Your North Shore Property?
                        </h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Schedule a consultation. We'll assess your property, handle the local
                            requirements, and show you what's possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=north-shore">
                                <Button size="lg" className="rounded-full">
                                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
        </main>
    );
}

