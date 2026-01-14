import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, CheckCircle2, Waves, Bug, Wind, Sun } from "lucide-react";
import type { Metadata } from "next";
import { SEO_COPY_BANK } from "@/data/seo-copy-bank";

const copy = SEO_COPY_BANK.WATERFRONT;

export const metadata: Metadata = {
    title: "Lake Geneva WI Pergolas & Luxury Outdoor Living | EDG Patio",
    description: "Custom motorized pergolas and retractable screens for Lake Geneva waterfront homes. Protect your view from bugs and wind. Local experts in lakefront installations.",
    openGraph: {
        title: "Lake Geneva | Waterfront Pergolas & Screens | EDG",
        description: "Transform your Lake Geneva patio into a bug-free, wind-protected oasis without losing the view.",
    },
};

const communities = [
    { name: "Geneva Lake Front", highlight: true },
    { name: "Fontana-on-Geneva-Lake", highlight: true },
    { name: "Williams Bay", highlight: true },
    { name: "Lake Geneva City", highlight: true },
    { name: "Linn Township" },
    { name: "Delavan Lake", highlight: true },
];

const painPoints = [
    {
        icon: <Bug className="h-6 w-6 text-edg-brand" />,
        title: "The Mosquito Problem",
        description: "Lake living is perfect until dusk. Our MagnaTrack screens provide a sealed bug barrier so you can stay outside all evening.",
    },
    {
        icon: <Wind className="h-6 w-6 text-edg-brand" />,
        title: "Lake Winds",
        description: "Sudden gusts off the water can ruin a dinner party. Our structures and screens are wind-rated for exposed lakefront conditions.",
    },
    {
        icon: <Sun className="h-6 w-6 text-edg-brand" />,
        title: "Water Reflection Heat",
        description: "Direct sun combined with glare off the lake can make your patio unbearable. Our louvered roofs provide instant, adjustable relief.",
    },
];

export default function LakeGenevaPage() {
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
                            <Waves className="h-4 w-4 text-edg-brand" />
                            <span className="text-edg-brand font-semibold text-sm uppercase tracking-wider">Waterfront Specialist</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            {copy.heroHeadline} <span className="text-edg-brand">Lake Geneva, WI</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            {copy.heroSub}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?area=lake-geneva">
                                <Button size="lg" className="rounded-full">
                                    Get Your Lakefront Proposal <ArrowRight className="ml-2 h-5 w-5" />
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

            {/* Problem/Solution Section */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {copy.problemTitle}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {copy.problemDescription}
                            </p>
                            <div className="space-y-8">
                                {painPoints.map((point) => (
                                    <div key={point.title} className="flex gap-4">
                                        <div className="mt-1">{point.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                                            <p className="text-muted-foreground">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{copy.solutionTitle}</h3>
                                    <p className="text-muted-foreground">
                                        {copy.solutionDescription}
                                    </p>
                                </div>
                            </div>
                            {/* Placeholder for an actual image in a real implementation */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-edg-brand/90 text-white backdrop-blur-sm">
                                <p className="font-bold">{copy.featuredFeature}</p>
                                <p className="text-sm opacity-90">{copy.featuredBenefit}</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Neighborhoods */}
            <Section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Serving the Entire Geneva Lake Area
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {communities.map((community) => (
                            <div
                                key={community.name}
                                className={`flex items-center gap-3 p-4 rounded-xl border ${community.highlight
                                    ? 'bg-white dark:bg-black border-edg-brand shadow-sm'
                                    : 'bg-white/50 dark:bg-black/50 border-black/5 dark:border-white/5'
                                    }`}
                            >
                                <MapPin className={`h-5 w-5 ${community.highlight ? 'text-edg-brand' : 'text-gray-400'}`} />
                                <span className="font-medium">{community.name}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Testimonial */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
                            "Before EDG, we couldn't use our deck after 6 PM because of the bugs. Now, we close our MagnaTrack screens and enjoy the sunset in total comfort. It's the best investment we've made in our lake house."
                        </blockquote>
                        <div>
                            <div className="font-bold text-lg text-edg-brand">Williams Bay Homeowner</div>
                            <div className="text-muted-foreground">Waterfront Pergola + Retractable Screens</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-edg-brand text-edg-dark">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Protect Your Lake View
                        </h2>
                        <p className="text-xl mb-8 font-medium">
                            Ready to transform your Lake Geneva property? Get a free design consultation and quote tailored for the water's edge.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?area=lake-geneva">
                                <Button size="lg" variant="secondary" className="rounded-full bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
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
