import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ArrowRight,
    Wind,
    ShieldCheck,
    Sun,
    Layers,
    Phone,
    MapPin
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hurricane Rated Pergolas Sanibel Island | Louvered Roof Systems | EDG",
    description: "Premium motorized louvered roof systems for Sanibel & Captiva. Miami-Dade hurricane rated, coastal-grade aluminum, and sanctuary-compliant designs.",
    alternates: {
        canonical: "/service-areas/sanibel-outdoor-living/louvered-pergolas",
    },
};

const features = [
    {
        title: "160 MPH Wind Rated",
        description: "Engineered specifically for Southwest Florida's hurricane season with heavy-gauge extruded aluminum.",
        icon: Wind
    },
    {
        title: "Salt-Spray Resistant",
        description: "Specialized high-gloss powder coating prevents corrosion from the Gulf's harsh saline environment.",
        icon: ShieldCheck
    },
    {
        title: "Integrated Gutters",
        description: "Hidden drainage system handles Sanibel's heavy tropical downpours without ruining your patio.",
        icon: Layers
    },
    {
        title: "Variable Shade",
        description: "Louvered roofs that rotate 150°, allowing you to track the sun or block it entirely for cooling.",
        icon: Sun
    }
];

export default function SanibelPergolaPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <Section className="pt-24 md:pt-32 pb-16 bg-edg-dark text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-edg-dark via-transparent to-edg-dark z-10" />
                    <Image
                        src="/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg"
                        alt="Hurricane-rated white pergola with integrated screens"
                        fill
                        className="object-cover"
                    />
                </div>

                <Container className="relative z-20">
                    <Link href="/service-areas/sanibel-outdoor-living" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Sanibel Service Area
                    </Link>

                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/10 border border-edg-brand/20 mb-6 font-bold text-edg-brand text-xs uppercase tracking-widest">
                            <MapPin className="h-3 w-3" /> Premium Sanibel Systems
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            The Only Pergola <br />
                            <span className="text-edg-brand">Built for Sanibel.</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            Our louvered roof systems aren't just "coastal-inspired"—they are Miami-Dade engineered to survive the Gulf's most intense storms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=sanibel&product=pergola&source=leads-sanibel-pergolas">
                                <Button size="lg" className="rounded-full bg-edg-brand text-edg-dark hover:bg-edg-brand/90 font-bold px-10">
                                    Request a Design Quote <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full border-white/20 text-white hover:bg-white/10 px-10">
                                    <Phone className="mr-2 h-5 w-5" /> 815-581-0138
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Feature Grid */}
            <Section className="py-24 bg-zinc-50 dark:bg-zinc-950">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Island-Ready Engineering</h2>
                        <p className="text-muted-foreground text-lg">
                            We don't use standard residential grade materials. Every component is selected to withstand the specific challenges of living on Sanibel Island.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                                <feature.icon className="h-10 w-10 text-edg-brand mb-6" />
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Product Highlight / Visual */}
            <Section className="py-24 bg-white dark:bg-black overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/shades/shade-deployed-screens-01.jpg"
                                alt="Motorized screens deployed for hurricane protection and privacy"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                <h4 className="font-bold mb-1 italic">"The Sanctuary Standard"</h4>
                                <p className="text-sm opacity-80">Our systems are designed to minimize vertical footprint while maximizing shade efficiency.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Motorized Comfort, <br />
                                Hurricane Protection.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Why Choose a Louvered Roof? Because Sanibel weather changes in seconds. Our automated sensors detect wind and rain, closing the louvers automatically to protect your furniture—even when you aren't home.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Custom RAL Color Matching for any Sanibel home style",
                                    "Optional integrated LED lighting and infrared heating",
                                    "Professional installation by manufacturer-certified crews",
                                    "Assistance with City of Sanibel permitting and HOAs"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0 mt-1" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Link href="/contact?area=sanibel&product=pergola&source=leads-sanibel-pergolas">
                                    <Button className="rounded-full bg-edg-brand text-edg-dark hover:bg-edg-brand/90 font-bold px-10 py-6 text-lg">
                                        Request a Design Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Zoning Cross-Link */}
            <Section className="py-16 bg-zinc-50 dark:bg-zinc-950">
                <Container>
                    <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-4">Navigating Sanibel Zoning?</h3>
                            <p className="text-muted-foreground mb-0">
                                Before you build, ensure your project complies with Sanibel's latest impermeable coverage and hurricane codes. Read our comprehensive guide.
                            </p>
                        </div>
                        <Link href="/service-areas/sanibel-outdoor-living/zoning-guide">
                            <Button variant="secondary" className="rounded-full border-edg-brand text-edg-brand hover:bg-edg-brand hover:text-white font-bold px-8 py-6">
                                View Zoning Guide <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* Testimonial / Trust */}
            <Section className="py-20 bg-zinc-900 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
                            "We were looking for a system that could handle extreme weather conditions. EDG walked us through the engineering and the results have been perfect through every storm."
                        </blockquote>
                        <div className="font-bold text-edg-brand text-lg">— Residential Client</div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
