"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, X, ArrowRight, DollarSign, Star, Lightbulb, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const guideData = {
    title: "Pergola vs. Patio Cover",
    subtitle: "Which Is Right For Your Home?",
    intro: "Confused by the terminology? You're not alone. Here's exactly how to choose between a pergola, a patio cover, and a gazebo for your Chicagoland home.",
};

const comparisonMatrix = [
    { type: "Traditional Pergola", shade: "Partial (Slats)", rain: "None", airflow: "Excellent", cost: "$$ - $$$", recommended: false },
    { type: "Solid Patio Cover", shade: "100% (Fixed)", rain: "100% Protection", airflow: "Poor (Traps Heat)", cost: "$$$ - $$$$", recommended: false },
    { type: "Louvered Pergola", shade: "Adjustable (0-100%)", rain: "100% Protection", airflow: "Excellent (Vented)", cost: "$$$$", recommended: true },
];

const faqs = [
    {
        question: "What is the main difference between a pergola and a patio cover?",
        answer: "A patio cover is an extension of your roofline (solid roof) designed to provide 100% shade and rain protection at all times. A pergola typically has an open lattice roof. A 'Louvered Pergola' is the hybrid that gives you both options."
    },
    {
        question: "Which increases home value more?",
        answer: "Generally, permanent structures like louvered pergolas and solid patio covers add more appraised value than simple aesthetic wooden pergolas because they create functional, usable square footage."
    },
    {
        question: "Can I attach a pergola to my house?",
        answer: "Yes, wall-mounted (attached) systems are very popular. However, they require careful engineering to handle snow loads without stressing your home's existing fascia and framing."
    }
];

import { generateFAQSchema } from "@/lib/schema";

export default function PergolaVsPatioCover() {
    const faqSchema = generateFAQSchema(faqs);

    return (
        <article className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-edg-dark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: "url('/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <Container className="relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <Link
                                href="/guides"
                                className="inline-flex items-center gap-2 text-edg-brand font-medium text-sm mb-8 hover:underline opacity-80 transition-opacity hover:opacity-100"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back to All Guides
                            </Link>

                            <br />
                            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full mb-6">
                                <Lightbulb className="h-4 w-4" /> Comparison Guide
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                                {guideData.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-edg-brand font-medium mb-6">
                                {guideData.subtitle}
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                {guideData.intro}
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== COMPARISON MATRIX ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center">
                                Quick Decision Matrix
                            </h2>
                            <p className="text-lg text-muted-foreground text-center mb-10">
                                Compare the three main options side by side.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {comparisonMatrix.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`relative p-6 rounded-2xl border transition-all ${item.recommended
                                            ? 'bg-edg-brand/5 border-edg-brand shadow-lg scale-105'
                                            : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                                            }`}
                                    >
                                        {item.recommended && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-edg-brand text-edg-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Star className="h-3 w-3 fill-current" /> EDG CHOICE
                                            </div>
                                        )}
                                        <h3 className="text-xl font-bold mb-4 text-center">{item.type}</h3>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Shade</span>
                                                <span className="font-medium">{item.shade}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Rain Protection</span>
                                                <span className="font-medium">{item.rain}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Airflow</span>
                                                <span className="font-medium">{item.airflow}</span>
                                            </div>
                                            <div className="flex justify-between pt-2 border-t border-zinc-200 dark:border-zinc-700">
                                                <span className="text-muted-foreground">Investment</span>
                                                <span className="font-bold">{item.cost}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== DEEP DIVE ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-center">
                                Side-by-Side Breakdown
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Fixed Patio Cover */}
                                <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                    <h3 className="text-2xl font-bold mb-4">Option A: Fixed Patio Cover</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Usually an extension of your home's roofline. It uses shingles or metal roofing to create a permanent shadow.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span>Total rain protection</span>
                                        </div>
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span>Seamless look with house</span>
                                        </div>
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center">
                                                <X className="w-3 h-3 text-red-500" />
                                            </div>
                                            <span>Darkens adjacent interior rooms</span>
                                        </div>
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center">
                                                <X className="w-3 h-3 text-red-500" />
                                            </div>
                                            <span>Traps heat in summer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Louvered Pergola */}
                                <div className="bg-edg-dark text-white p-8 rounded-2xl border border-edg-brand/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-edg-brand text-edg-dark text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-current" /> EDG CHOICE
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Option B: Louvered Pergola</h3>
                                    <p className="text-gray-300 mb-6">
                                        The modern solution. An aluminum structure with automated blades that rotate to follow the sun or close for rain.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-edg-brand/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-edg-brand" />
                                            </div>
                                            <span>Sun when you want it (Winter)</span>
                                        </div>
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-edg-brand/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-edg-brand" />
                                            </div>
                                            <span>Shade when you need it (Summer)</span>
                                        </div>
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-edg-brand/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-edg-brand" />
                                            </div>
                                            <span>Active ventilation cools the space</span>
                                        </div>
                                        <div className="flex gap-3 items-center text-sm">
                                            <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                                                <DollarSign className="w-3 h-3 text-amber-500" />
                                            </div>
                                            <span>Higher initial investment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== RECOMMENDATION ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-edg-brand/5 border-l-4 border-edg-brand p-8 rounded-r-2xl">
                                <h3 className="text-2xl font-bold mb-4">Our Recommendation</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    If you have south-facing windows that you don't want to darken, a <strong>louvered pergola</strong> is the superior choice. It allows you to harvest light in the winter while blocking the hot summer sun. If you want a strictly "dry" room that feels more indoors, consider a full enclosure or sunroom.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== CTA SECTION ========== */}
            <Section className="py-20 bg-edg-brand">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-edg-dark mb-6 tracking-tight">
                                Ready to Learn More?
                            </h2>
                            <p className="text-xl text-edg-dark/80 mb-8">
                                Dive deeper into louvered pergola systems with our complete guide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/guides/louvered-pergolas">
                                    <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                        Read the Full Guide <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="ghost" className="rounded-full text-lg px-8 text-edg-dark hover:bg-edg-dark/10">
                                        Get a Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </article>
    );
}
