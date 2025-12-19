import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, TreeDeciduous } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "McHenry County IL Pergolas & Outdoor Living | Crystal Lake, Algonquin, Woodstock",
    description: "Motorized pergolas, exterior shades, and glass enclosures in McHenry County Illinois. Serving Crystal Lake, Algonquin, Woodstock, Huntley, McHenry & Cary. Professional design and installation.",
    openGraph: {
        title: "McHenry County IL | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for McHenry County homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    { name: "Crystal Lake" },
    { name: "Algonquin" },
    { name: "Woodstock" },
    { name: "Huntley" },
    { name: "McHenry" },
    { name: "Cary" },
    { name: "Lake in the Hills" },
    { name: "Marengo" },
    { name: "Harvard" },
    { name: "Richmond" },
    { name: "Spring Grove" },
    { name: "Fox River Grove" },
    { name: "Island Lake" },
    { name: "Lakemoor" },
    { name: "Johnsburg" },
    { name: "Bull Valley" },
];

const localConsiderations = [
    {
        title: "Larger Properties",
        description: "McHenry County lots tend to be bigger than closer-in suburbs. We design systems scaled appropriately—not undersized installations that look out of place.",
    },
    {
        title: "Rural & Semi-Rural Settings",
        description: "Many properties have agricultural neighbors or open views. We position systems to maximize enjoyment while respecting the character of your setting.",
    },
    {
        title: "Varied Municipal Requirements",
        description: "From Crystal Lake to Bull Valley, each municipality has different permit processes. We know the local requirements and handle submissions accordingly.",
    },
    {
        title: "Weather Exposure",
        description: "Without the density of closer-in suburbs, McHenry County properties often face more wind exposure. We engineer systems for real conditions.",
    },
];

export default function McHenryCountyPage() {
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Northwest Suburbs</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            McHenry County, Illinois
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Crystal Lake to Algonquin, Woodstock to Huntley. McHenry County's larger lots 
                            and more open settings create opportunities for outdoor living spaces that 
                            aren't possible in denser suburbs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=mchenry-county">
                                <Button size="lg" className="rounded-full">
                                    Get a McHenry County Quote <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18475551234">
                                <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10">
                                    <Phone className="mr-2 h-5 w-5" /> (847) 555-1234
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
                        McHenry County Communities We Serve
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        From the Chain O'Lakes to the Woodstock square—we serve all of McHenry County.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {communities.map((community) => (
                            <div 
                                key={community.name}
                                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5"
                            >
                                <TreeDeciduous className="h-5 w-5 text-edg-brand shrink-0" />
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
                                McHenry County Considerations
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                McHenry County is different from Lake County or the North Shore. 
                                We adjust our approach accordingly.
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
                            <h3 className="text-2xl font-bold mb-4">Our Spring Grove Location</h3>
                            <p className="text-gray-300 mb-6">
                                We're based in Spring Grove—right in McHenry County. That means shorter 
                                travel times, faster response, and genuine familiarity with the area.
                            </p>
                            <p className="text-gray-300">
                                We're not driving an hour to reach you. We're neighbors.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Systems */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Popular Systems in McHenry County
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Systems that make the most of McHenry County's outdoor lifestyle.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Louvered Pergolas",
                                description: "Create defined outdoor rooms on larger properties. Full weather control lets you use your space regardless of conditions.",
                                href: "/systems/pergolas",
                                why: "Scale to fit McHenry County's larger lots",
                            },
                            {
                                name: "Motorized Shades",
                                description: "Wind protection for exposed properties. Retract fully when you want open views of your acreage.",
                                href: "/systems/shades",
                                why: "Essential for wind-exposed properties",
                            },
                            {
                                name: "Glass Enclosures",
                                description: "Extend your season dramatically. Perfect for properties where you want to enjoy views year-round.",
                                href: "/systems/enclosures",
                                why: "Maximize your investment through all seasons",
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
                            "We have five acres and wanted an outdoor space that felt proportional. 
                            EDG designed a pergola system that actually fits our property—not a 
                            suburban cookie-cutter solution."
                        </blockquote>
                        <div>
                            <div className="font-bold text-lg">Homeowner</div>
                            <div className="text-muted-foreground">Bull Valley, IL • Louvered Pergola</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your McHenry County Property?
                        </h2>
                        <p className="text-xl mb-8 text-edg-dark/80">
                            Schedule a consultation. We'll visit your property and show you what's possible 
                            for your outdoor space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=mchenry-county">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18475551234">
                                <Button size="lg" variant="secondary" className="rounded-full border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10">
                                    <Phone className="mr-2 h-5 w-5" /> (847) 555-1234
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

