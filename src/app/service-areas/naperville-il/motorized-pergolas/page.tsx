import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Zap, Settings, Sun } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Motorized Pergolas Naperville IL | Luxury Louvered Roofs | EDG",
    description: "Upgrade your Naperville patio with a custom motorized pergola. Remote-controlled louvered roofs, integrated lighting, and weather sensors. 100% turnkey installation.",
    alternates: {
        canonical: "/service-areas/naperville-il/motorized-pergolas",
    },
};

const features = [
    {
        title: "Smart Louver Control",
        description: "Adjust from 0° to 150° using your smartphone or remote to track the sun or block rain instantly.",
        icon: Settings
    },
    {
        title: "Integrated Weather Sensors",
        description: "Automatically closes the roof when it detects rain and opens in high winds to prevent damage.",
        icon: Shield
    },
    {
        title: "All-Season Utility",
        description: "Equipped with integrated heaters and LED lighting to make your Naperville patio usable year-round.",
        icon: Zap
    },
    {
        title: "Frameless Design",
        description: "Sleek, modern aluminum construction that provides maximum shade without blocking your garden views.",
        icon: Sun
    }
];

export default function NapervilleMotorizedPergolas() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Luxury Motorized Pergola System - Naperville",
                        "image": "https://www.edgpatioshade.com/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg",
                        "description": "Premium motorized louvered roof systems for Naperville estates, featuring integrated lighting and heating.",
                        "brand": {
                            "@type": "Brand",
                            "name": "EDG Outdoor Living"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://www.edgpatioshade.com/service-areas/naperville-il/motorized-pergolas",
                            "priceCurrency": "USD",
                            "availability": "https://schema.org/InStock"
                        }
                    })
                }}
            />
            <main className="min-h-screen bg-white dark:bg-black">
                {/* Hero */}
                <Section className="pt-32 pb-20 bg-edg-dark text-white">
                    <Container>
                        <Link href="/service-areas/naperville-il" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Naperville
                        </Link>
                        <div className="max-w-4xl">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Motorized Pergolas <br /> for Naperville Living
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                Why wait for perfect weather? Our smart louvered roof systems give you 100% control over your outdoor environment in Naperville.
                            </p>
                            <Link href="/contact?area=naperville&product=motorized_pergola">
                                <Button size="lg" className="rounded-full">
                                    Get Pricing & Proposal <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </Section>

                {/* Features */}
                <Section className="py-24 bg-white dark:bg-zinc-950">
                    <Container>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5">
                                    <feature.icon className="h-10 w-10 text-edg-brand mb-6" />
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* Local Social Proof Alternative */}
                <Section className="py-24 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Naperville's Premier Turnkey Provider
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                                    From the Ashbury subdivision to the heart of the Riverwalk, we provide complete, engineered solutions. We don't just sell pergolas; we design and install systems that increase the value and utility of your Naperville home.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Miami-Dade Hurricane Rated engineering",
                                        "Powder-coated aircraft-grade aluminum",
                                        "Seamless integration with existing architecture",
                                        "Licensed and insured Naperville installation crews"
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3 items-center font-medium">
                                            <Shield className="h-5 w-5 text-edg-brand" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact?area=naperville">
                                    <Button variant="secondary" size="lg" className="rounded-full">
                                        Schedule Site Survey
                                    </Button>
                                </Link>
                            </div>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
                                    alt="Motorized pergola installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>
        </>
    );
}
