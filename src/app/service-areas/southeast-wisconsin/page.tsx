import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Waves } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Southeast Wisconsin Pergolas & Outdoor Living | Lake Geneva, Kenosha, Racine",
    description: "Motorized pergolas, exterior shades, and glass enclosures in Southeast Wisconsin. Serving Lake Geneva, Kenosha, Racine, Burlington, Delavan & Elkhorn. Professional design and installation.",
    alternates: {
        canonical: "/service-areas/southeast-wisconsin",
    },
    openGraph: {
        title: "Southeast Wisconsin | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for Southeast Wisconsin homeowners. Lake Geneva area specialists.",
    },
};

const communities = [
    { name: "Lake Geneva", highlight: true },
    { name: "Kenosha" },
    { name: "Racine" },
    { name: "Burlington" },
    { name: "Delavan", highlight: true },
    { name: "Elkhorn" },
    { name: "Williams Bay", highlight: true },
    { name: "Fontana", highlight: true },
    { name: "Twin Lakes" },
    { name: "Pleasant Prairie" },
    { name: "Somers" },
    { name: "Union Grove" },
    { name: "Waterford" },
    { name: "East Troy" },
    { name: "Mukwonago" },
    { name: "Walworth" },
];

const localConsiderations = [
    {
        title: "Lake Properties",
        description: "Geneva Lake, Delavan Lake, and the smaller lakes throughout the region have unique siting considerations. We design systems that maximize views and handle lakefront conditions.",
    },
    {
        title: "Wisconsin Permitting",
        description: "Wisconsin municipalities have different requirements than Illinois. We're familiar with local building departments and know what's needed for approvals.",
    },
    {
        title: "Resort & Second Homes",
        description: "Many Lake Geneva area properties are second homes. We coordinate schedules around your visits and can work with property managers when needed.",
    },
    {
        title: "Heavier Snow Loads",
        description: "Southeast Wisconsin typically sees more snow than Chicago's North Shore. We engineer systems for actual Wisconsin snow load requirements.",
    },
];

export default function SoutheastWisconsinPage() {
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Wisconsin Service Area</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Southeast Wisconsin Outdoor Living Systems
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Lake Geneva to Kenosha, Racine to Burlington. Southeast Wisconsin's lakefront
                            properties and resort communities deserve outdoor living systems that extend
                            the all-too-short summer season—and beyond.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=southeast-wisconsin">
                                <Button size="lg" className="rounded-full">
                                    Get a Wisconsin Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                        Southeast Wisconsin Communities We Serve
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        From the Geneva Lake communities to Kenosha and Racine—we serve all of Southeast Wisconsin.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className={`flex items-center gap-3 p-4 rounded-xl border ${community.highlight
                                    ? 'bg-edg-brand/10 border-edg-brand/20'
                                    : 'bg-zinc-50 dark:bg-zinc-900 border-black/5 dark:border-white/5'
                                    }`}
                            >
                                <Waves className="h-5 w-5 text-edg-brand shrink-0" />
                                <span className="font-medium">{community.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">
                        <span className="inline-block w-3 h-3 bg-edg-brand/20 rounded mr-2" />
                        Lake communities highlighted
                    </p>
                </Container>
            </Section>

            {/* Lake Geneva Focus */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <Waves className="h-12 w-12" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Lake Geneva Area Specialists
                            </h2>
                        </div>
                        <p className="text-xl mb-8 text-edg-dark/80">
                            Geneva Lake, Delavan Lake, Fontana—the lake communities are where outdoor living
                            matters most. We've completed numerous lakefront projects and understand the
                            unique demands of these properties.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Maximize lake views from covered spaces",
                                "Handle lakefront wind and weather exposure",
                                "Work around boat house and dock areas",
                                "Coordinate with second-home schedules",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-edg-dark/10 rounded-lg px-4 py-3">
                                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                                    <span>{item}</span>
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
                        Southeast Wisconsin Considerations
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {localConsiderations.map((item) => (
                            <div key={item.title} className="bg-white dark:bg-zinc-800 rounded-2xl p-8">
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Systems */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Popular Systems in Southeast Wisconsin
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Systems that extend your Wisconsin outdoor season and protect against the elements.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Louvered Pergolas",
                                description: "Full weather control for lakefront entertaining. Open for sun, close for rain, adjust for everything in between.",
                                href: "/systems/pergolas",
                                why: "The #1 choice for lake properties",
                            },
                            {
                                name: "Motorized Shades",
                                description: "Wind and sun protection that retracts to preserve your view. Essential for exposed lakefront locations.",
                                href: "/systems/shades",
                                why: "Perfect for lakefront wind protection",
                            },
                            {
                                name: "Glass Enclosures",
                                description: "Turn your three-season space into a four-season room. Enjoy lake views even in Wisconsin's colder months.",
                                href: "/systems/enclosures",
                                why: "Maximize your property's usable months",
                            },
                        ].map((system) => (
                            <div key={system.name} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-black/5 dark:border-white/5">
                                <h3 className="text-xl font-bold mb-3">{system.name}</h3>
                                <p className="text-muted-foreground mb-4">{system.description}</p>
                                <p className="text-sm text-edg-brand font-medium mb-6">→ {system.why}</p>
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
                            "Our Lake Geneva property needed a system that could handle the weather off
                            the lake. EDG engineered a pergola that's held up through two Wisconsin winters
                            without any issues."
                        </blockquote>
                        <div>
                            <div className="font-bold text-lg">Homeowner</div>
                            <div className="text-muted-foreground">Lake Geneva, WI • Louvered Pergola + Shades</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Wisconsin Property?
                        </h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Schedule a consultation. We'll visit your property and show you how to
                            extend your outdoor season and protect against Wisconsin weather.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=southeast-wisconsin">
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

