import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Areas | Pergolas & Outdoor Living | Chicago to Milwaukee",
    description: "EDG Outdoor Living serves Lake County IL, McHenry County, the North Shore, and Southeast Wisconsin. Motorized pergolas, shades, and glass enclosures installed by local experts.",
    alternates: {
        canonical: "/service-areas",
    },
    openGraph: {
        title: "Service Areas | EDG Outdoor Living",
        description: "Serving the greater Chicago to Milwaukee corridor. Local expertise, professional installation.",
    },
};

const serviceAreas = [
    {
        name: "Lake County, Illinois",
        slug: "lake-county-il",
        description: "From Libertyville to Lake Forest, Gurnee to Highland Park. Our home base and most active market.",
        communities: ["Libertyville", "Lake Forest", "Highland Park", "Gurnee", "Vernon Hills", "Lincolnshire"],
        featured: true,
    },
    {
        name: "North Shore Chicago",
        slug: "north-shore-chicago",
        description: "Wilmette to Winnetka, Glencoe to Kenilworth. Premium outdoor living for the North Shore's finest properties.",
        communities: ["Wilmette", "Winnetka", "Glencoe", "Kenilworth", "Northbrook", "Northfield"],
        featured: true,
    },
    {
        name: "McHenry County, Illinois",
        slug: "mchenry-county-il",
        description: "Crystal Lake to Algonquin, Woodstock to Huntley. Bringing refined outdoor spaces to the northwest suburbs.",
        communities: ["Crystal Lake", "Algonquin", "Woodstock", "Huntley", "McHenry", "Cary"],
        featured: false,
    },
    {
        name: "Southeast Wisconsin",
        slug: "southeast-wisconsin",
        description: "Lake Geneva to Kenosha, Racine to Burlington. Wisconsin's lakefront and beyond.",
        communities: ["Lake Geneva", "Kenosha", "Racine", "Burlington", "Delavan", "Elkhorn"],
        featured: false,
    },
    {
        name: "Naperville & West Suburbs",
        slug: "naperville-il",
        description: "From Downers Grove to Plainfield, Aurora to Wheaton. Bringing premium shade solutions to the busy western corridor.",
        communities: ["Naperville", "Lisle", "Bolingbrook", "Aurora", "Warrenville", "Woodridge"],
        featured: false,
    },
    {
        name: "Barrington Area",
        slug: "barrington-il",
        description: "Classic estate living meets modern outdoor technology. Serving North, South, and Lake Barrington.",
        communities: ["Barrington", "South Barrington", "Inverness", "Lake Barrington", "Deer Park", "Kildeer"],
        featured: false,
    },
    {
        name: "Oak Brook & Hinsdale",
        slug: "oak-brook-il",
        description: "Estate-style outdoor living for the western suburbs. Serving Oak Brook, Hinsdale, and Burr Ridge.",
        communities: ["Oak Brook", "Hinsdale", "Burr Ridge", "Clarendon Hills", "Elmhurst"],
        featured: false,
    },
    {
        name: "Lake Geneva, WI",
        slug: "lake-geneva-wi",
        description: "Exclusive lakeside living. Motorized pergolas and glass enclosures for Geneva Lake estates.",
        communities: ["Lake Geneva", "Fontana", "Williams Bay", "Walworth", "Linn", "Genoa City"],
        featured: false,
    },
    {
        name: "Hinsdale",
        slug: "hinsdale-il",
        description: "Premium pergolas and shade systems for Hinsdale's premier estates.",
        communities: ["Southeast Hinsdale", "The Woodlands", "Fullersburg", "Downtown Hinsdale"],
        featured: false,
    },
];

export default function ServiceAreasPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="pt-24 md:pt-32 pb-16 bg-edg-dark text-white">
                <Container>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/20 border border-edg-brand/30 mb-6">
                            <MapPin className="h-4 w-4 text-edg-brand" />
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Local Service</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Serving the Chicago to Milwaukee Corridor
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            We design and install premium outdoor living systems within 60 miles of Spring Grove, IL.
                            Local expertise means we understand your climate, your municipalities, and your neighborhoods.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Why Local Matters */}
            <Section className="py-16 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "We Know Your Climate",
                                desc: "Midwest weather is demanding. We engineer every system for local wind loads, snow loads, and temperature swings."
                            },
                            {
                                title: "We Know Your Permits",
                                desc: "Every municipality is different. We've worked with building departments across the region and know what each requires."
                            },
                            {
                                title: "We're Here When You Need Us",
                                desc: "Local means responsive. Service calls, adjustments, and questions handled by people who are nearby."
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <CheckCircle2 className="h-10 w-10 text-edg-brand mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Service Areas Grid */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Areas We Serve
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Click your area to learn about local projects, considerations, and how we can help.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {serviceAreas.map((area) => (
                            <Link
                                key={area.slug}
                                href={`/service-areas/${area.slug}`}
                                className="group"
                            >
                                <div className={`p-8 rounded-2xl border transition-all duration-300 h-full ${area.featured
                                    ? 'bg-edg-dark text-white border-edg-dark hover:border-edg-brand'
                                    : 'bg-zinc-50 dark:bg-zinc-900 border-black/10 dark:border-white/10 hover:border-edg-brand'
                                    }`}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                                            <p className={area.featured ? 'text-gray-300' : 'text-muted-foreground'}>
                                                {area.description}
                                            </p>
                                        </div>
                                        <ArrowRight className={`h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 ${area.featured ? 'text-edg-brand' : 'text-edg-brand'
                                            }`} />
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {area.communities.slice(0, 4).map((community) => (
                                            <span
                                                key={community}
                                                className={`text-xs px-3 py-1 rounded-full ${area.featured
                                                    ? 'bg-white/10 text-white/80'
                                                    : 'bg-black/5 dark:bg-white/10 text-muted-foreground'
                                                    }`}
                                            >
                                                {community}
                                            </span>
                                        ))}
                                        {area.communities.length > 4 && (
                                            <span className={`text-xs px-3 py-1 rounded-full ${area.featured
                                                ? 'bg-white/10 text-white/80'
                                                : 'bg-black/5 dark:bg-white/10 text-muted-foreground'
                                                }`}>
                                                +{area.communities.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Map Section */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Based in Spring Grove, IL
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Our central location in Spring Grove puts us within easy reach of Lake County,
                                McHenry County, the North Shore, and Southeast Wisconsin. We're positioned to
                                serve the entire Chicago-to-Milwaukee corridor efficiently.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Design and installation within 60 miles",
                                    "Same-day consultations often available",
                                    "Responsive service and support",
                                    "Local crews—not traveling subcontractors",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full">
                                        Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <a href="tel:+18155810138">
                                    <Button size="lg" variant="secondary" className="rounded-full">
                                        <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="bg-edg-dark rounded-2xl aspect-square flex items-center justify-center">

                            <div className="text-center text-white p-8">
                                <MapPin className="h-16 w-16 mx-auto mb-4 text-edg-brand" />
                                <p className="text-xl font-bold mb-2">Spring Grove, IL</p>
                                <p className="text-gray-400">Serving a 60-mile radius</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Not in Our Area? */}
            <Section className="py-16 bg-white dark:bg-black">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Outside our service area?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            If you're beyond our 60-mile radius, we may still be able to help. For larger projects
                            or special circumstances, reach out and we'll discuss options—including design consulting
                            with installation by qualified local partners.
                        </p>
                        <Link href="/contact">
                            <Button variant="secondary" className="rounded-full">
                                Contact Us to Discuss
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

