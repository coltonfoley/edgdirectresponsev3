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
    MapPin,
    CheckCircle2,
    Thermometer
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Motorized Pergolas Barrington IL | Snow Load Rated Systems | EDG",
    description: "Custom motorized louvered roof systems for Barrington estates. Engineered for heavy snow loads, high winds, and architectural integration.",
    alternates: {
        canonical: "/service-areas/barrington-il/motorized-pergolas",
    },
};

const features = [
    {
        title: "Heavy Snow Load Rated",
        description: "Engineered to withstand heavy Chicagoland winters. Closed louvers support significant snow accumulation without bowing.",
        icon: Layers
    },
    {
        title: "Estate Wind Resistance",
        description: "Built to handle the high wind shear often found on open estate properties in Barrington Hills.",
        icon: Wind
    },
    {
        title: "Architectural Color Match",
        description: "Custom powder coating to match your estate's trim, siding, or window mullions for a seamless addition.",
        icon: ShieldCheck
    },
    {
        title: "4-Season Comfort",
        description: "optional heaters and motorized screens turn your pergola into a warm, protected haven even in late autumn.",
        icon: Thermometer
    }
];

export default function BarringtonPergolaPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <Section className="pt-24 md:pt-32 pb-16 bg-edg-dark text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-edg-dark via-transparent to-edg-dark z-10" />
                    <Image
                        src="/images/pergolas/residential-black-r-blade-01.jpg"
                        alt="Barrington Estate Pergola"
                        fill
                        className="object-cover"
                    />
                </div>

                <Container className="relative z-20">
                    <Link href="/service-areas/barrington-il" className="inline-flex items-center text-sm text-gray-400 hover:text-edg-brand mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Barrington Service Area
                    </Link>

                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edg-brand/10 border border-edg-brand/20 mb-6 font-bold text-edg-brand text-xs uppercase tracking-widest">
                            <MapPin className="h-3 w-3" /> Estate-Grade Systems
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            The Only Pergola <br />
                            <span className="text-edg-brand">Built for Chicago Winters.</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-10">
                            Our louvered roof systems aren't just for shade—they are engineered to handle heavy snow loads and high winds, making them a true year-round addition to your estate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=barrington&product=pergola&source=leads-barrington-pergolas">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for the Midwest</h2>
                        <p className="text-muted-foreground text-lg">
                            We don't use light-gauge aluminum. Every component is selected to withstand the specific challenges of Barrington's climate, from heavy snow to summer storms.
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
                                src="/images/pergolas/residential-black-r-blade-04.jpg"
                                alt="Black R-Blade motorized louvered roof engineered for snow"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                <h4 className="font-bold mb-1 italic">"Estate Integrated"</h4>
                                <p className="text-sm opacity-80">Designed to look like it was part of the original architectural plan.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Motorized Luxury, <br />
                                Year-Round Utility.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Why Choose a Louvered Roof? Because your outdoor season shouldn't end in September. With integrated heaters and screens, you can host Thanksgiving dinner on your patio.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Custom Color Matching to Estate Architecture",
                                    "Integrated Bromic or Infratech Heaters",
                                    "Motorized Screens for Insect & Wind Control",
                                    "Smart Home Integration (Lutron/Control4)"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0 mt-1" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Link href="/contact?area=barrington&product=pergola&source=leads-barrington-pergolas">
                                    <Button className="rounded-full bg-edg-brand text-edg-dark hover:bg-edg-brand/90 font-bold px-10 py-6 text-lg">
                                        Request a Design Proposal
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
                            <h3 className="text-2xl font-bold mb-4">Building in Barrington?</h3>
                            <p className="text-muted-foreground mb-0">
                                Ensure your pergola complies with the 50% impermeable coverage limit and accessory structure setbacks. Read our local guide.
                            </p>
                        </div>
                        <Link href="/service-areas/barrington-il/zoning-guide">
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
                            "The team understood exactly how to navigate our HOA and the Village permits. The result looks like it's always been part of the house."
                        </blockquote>
                        <div className="font-bold text-edg-brand text-lg">— Barrington Hills Homeowner</div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
