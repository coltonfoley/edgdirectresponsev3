import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home, Building, TreePine } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lake County IL Pergolas & Outdoor Living | Libertyville, Lake Forest, Gurnee",
    description: "Motorized pergolas, exterior shades, and glass enclosures in Lake County Illinois. Serving Libertyville, Lake Forest, Highland Park, Gurnee, Vernon Hills & more. Local experts, professional installation.",
    alternates: {
        canonical: "/service-areas/lake-county-il",
    },
    openGraph: {
        title: "Lake County IL | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for Lake County homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    { name: "Libertyville", type: "residential" },
    { name: "Lake Forest", type: "residential" },
    { name: "Highland Park", type: "residential" },
    { name: "Gurnee", type: "mixed" },
    { name: "Vernon Hills", type: "mixed" },
    { name: "Lincolnshire", type: "residential" },
    { name: "Lake Bluff", type: "residential" },
    { name: "Deerfield", type: "residential" },
    { name: "Buffalo Grove", type: "residential" },
    { name: "Mundelein", type: "mixed" },
    { name: "Wauconda", type: "residential" },
    { name: "Grayslake", type: "mixed" },
    { name: "Round Lake", type: "residential" },
    { name: "Antioch", type: "residential" },
    { name: "Fox Lake", type: "residential" },
    { name: "Lake Zurich", type: "residential" },
];

const localConsiderations = [
    {
        title: "Lake Effect Weather",
        description: "Properties near Lake Michigan experience different wind and moisture conditions. We factor lake proximity into every design, from wind load calculations to material selection.",
    },
    {
        title: "Local Building Codes",
        description: "Communities like Lake Forest and Highland Park have specific building requirements. We're experienced with their standards and can navigate the permit process efficiently.",
    },
    {
        title: "Wooded Lots",
        description: "Many Lake County properties are heavily wooded. We assess tree coverage, sun patterns, and potential conflicts before recommending systems.",
    },
    {
        title: "Varied Lot Sizes",
        description: "From expansive Lake Forest estates to more modest Vernon Hills lots, we design systems that fit your property—not a one-size-fits-all approach.",
    },
];

export default function LakeCountyPage() {
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Our Home Market</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Lake County, Illinois Outdoor Living
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            From Libertyville to Lake Forest, Gurnee to Highland Park—Lake County is our home base.
                            We know the neighborhoods, the building departments, and the weather patterns that affect
                            how outdoor systems perform here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=lake-county">
                                <Button size="lg" className="rounded-full">
                                    Get a Lake County Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                        Communities We Serve in Lake County
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        We've completed projects across Lake County. If your community isn't listed,
                        we likely still serve it—just ask.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5"
                            >
                                {community.type === 'residential' ? (
                                    <Home className="h-5 w-5 text-edg-brand shrink-0" />
                                ) : (
                                    <Building className="h-5 w-5 text-edg-brand shrink-0" />
                                )}
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
                                Lake County-Specific Considerations
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Every region has its quirks. Here's what we account for when designing
                                outdoor systems in Lake County.
                            </p>
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
                        <div className="bg-edg-dark text-white rounded-2xl p-8">
                            <TreePine className="h-12 w-12 text-edg-brand mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Local Knowledge Matters</h3>
                            <p className="text-gray-300 mb-6">
                                We've worked with building departments in Libertyville, Lake Forest, Highland Park,
                                Gurnee, and throughout Lake County. We know what they require, what they look for,
                                and how to get approvals efficiently.
                            </p>
                            <p className="text-gray-300">
                                That local experience saves you time and prevents costly permit delays or redesigns.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Systems for Lake County */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Popular Systems in Lake County
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        The systems Lake County homeowners choose most—each engineered for local conditions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Louvered Pergolas",
                                description: "The most popular choice for Lake County patios. Full weather control—sun, shade, and rain protection with the touch of a button.",
                                href: "/systems/pergolas",
                                why: "Perfect for unpredictable Midwest weather",
                            },
                            {
                                name: "Motorized Shades",
                                description: "Ideal for screened porches, open patios, and pergola sides. Block sun and wind without losing your view.",
                                href: "/systems/shades",
                                why: "Great for lake-adjacent properties with wind exposure",
                            },
                            {
                                name: "Glass Enclosures",
                                description: "Add protected square footage that's usable year-round. Popular for extending the season on lakefront and wooded properties.",
                                href: "/systems/enclosures",
                                why: "Maximize your outdoor investment through all seasons",
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

            {/* Local Testimonial */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                            "EDG understood exactly what we needed for our Lake Forest property. They navigated
                            the permitting process smoothly and the installation was flawless."
                        </blockquote>
                        <div>
                            <div className="font-bold text-lg">Homeowner</div>
                            <div className="text-muted-foreground">Lake Forest, IL • Louvered Pergola</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Lake County Outdoor Space?
                        </h2>
                        <p className="text-xl mb-8 text-edg-dark/80">
                            Schedule a free consultation. We'll visit your property, discuss your vision,
                            and show you what's possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=lake-county">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
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

