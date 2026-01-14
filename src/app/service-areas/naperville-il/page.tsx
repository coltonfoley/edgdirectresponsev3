
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Naperville IL Pergolas & Outdoor Living | EDG Patio",
    description: "Custom motorized pergolas, retractable shades, and glass enclosures for Naperville, IL. Enhance your patio with EDG's premium outdoor living systems. Local experts.",
    openGraph: {
        title: "Naperville IL | Pergolas & Outdoor Living | EDG",
        description: "Premium outdoor living systems for Naperville homeowners. Local expertise, professional installation.",
    },
};

const communities = [
    { name: "Naperville", type: "residential" },
    { name: "Lisle", type: "residential" },
    { name: "Woodridge", type: "residential" },
    { name: "Bolingbrook", type: "residential" },
    { name: "Warrenville", type: "residential" },
    { name: "Aurora", type: "mixed" },
];

const localConsiderations = [
    {
        title: "Wind & Snow Load",
        description: "Naperville winters can be harsh. Our systems are engineered to withstand heavy snow loads and high winds common in DuPage County.",
    },
    {
        title: "HOA Compliance",
        description: "Many Naperville neighborhoods have strict HOA guidelines. We provide detailed renderings and specs to help you get approval quickly.",
    },
    {
        title: "Suburban Privacy",
        description: "Maximize your backyard privacy from neighbors with our motorized screens and louvered walls.",
    },
];

export default function NapervillePage() {
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
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Serving DuPage & Will Counties</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Naperville, Illinois
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Transform your backyard into a year-round retreat. Premium motorized pergolas and glass systems designed for Naperville homes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=naperville">
                                <Button size="lg" className="rounded-full">
                                    Get a Naperville Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                        From Downtown Naperville to Ashbury and beyond.
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
                                Why Choose EDG in Naperville?
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
                            Ready to Upgrade Your Naperville Outdoor Space?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=naperville">
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
