import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, Info, ArrowRight, Sun, CloudRain, Snowflake, Star, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "The Complete Guide to Louvered Pergolas | 2026 Edition",
    description: "Everything Chicago homeowners need to know about motorized louvered pergolas: costs ($120-180/sqft), permits, winter performance, and ROI. Updated for 2026.",
    alternates: {
        canonical: "/guides/louvered-pergolas",
    },
};

const guideData = {
    title: "The Complete Guide to Motorized Louvered Pergolas",
    subtitle: "2026 Edition",
    publishedDate: "2026-02-03",
    author: "Colton Foley",
    intro: "Everything Chicago homeowners need to know about louvered roof systems: costs, permits, brands, and ROI.",
};

const comparisonData = [
    { feature: "Rain Protection", louvered: "100% Waterproof", traditional: "None / Minimal" },
    { feature: "Sun Control", louvered: "Adjustable (0-135°)", traditional: "Fixed Shade Only" },
    { feature: "Snow Load", louvered: "Engineered (60+ lbs/sqft)", traditional: "Varies" },
    { feature: "Integrated Tech", louvered: "Lights, Heaters, Screens", traditional: "Add-on / Difficult" },
    { feature: "Maintenance", louvered: "Low (Powder Coated)", traditional: "High (Staining/Painting)" },
];

const faqs = [
    {
        question: "How much does a louvered pergola cost in Chicago?",
        answer: "For a high-quality system derived from US aluminum (StruXure, Azenco), expect $120-$180 per sq. ft. fully installed. A typical 12x16 project ranges from $25,000 to $40,000 depending on screens, lights, and heaters."
    },
    {
        question: "Do I need a permit for a louvered pergola?",
        answer: "Yes. In almost every municipality from Wilmette to Lake Forest, a louvered pergola is considered a permanent structure. It requires zoning approval (setbacks/coverage) and a building permit. We handle this entire process."
    },
    {
        question: "Can it handle Chicago winters?",
        answer: "Absolutely. Our systems are engineered for heavy snow loads. The louvers seal tight and are designed to support wet heavy snow. We recommend leaving them slightly cracked or fully closed depending on the specific model's winter protocol."
    },
    {
        question: "Does it add value to my home?",
        answer: "Yes. Unlike a fast-depreciating awning, a permanent aluminum structure is appraised similarly to a sunroom or high-end deck. It expands usable square footage, which is a key value driver."
    }
];

export default function LouveredPergolaGuide() {
    const faqSchema = generateFAQSchema(faqs);

    return (
        <article className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-edg-dark">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/images/pergolas/pergola-hero.jpg')" }}
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
                                Pillar Guide
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                                {guideData.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-edg-brand font-medium mb-6">
                                {guideData.subtitle}
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                                {guideData.intro}
                            </p>

                            {/* Author & Meta */}
                            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-2">
                                    <User className="h-4 w-4" /> {guideData.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" /> 12 min read
                                </span>
                                <span className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-400" /> Updated {guideData.publishedDate}
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* ========== WHAT IS IT ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                                What Exactly Is a Louvered Pergola?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                Unlike a traditional wooden pergola with fixed slats that only provide partial shade, a <strong>louvered pergola</strong> features a motorized roof made of aluminum blades. These blades rotate up to 135 degrees, giving you complete control over your outdoor environment.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-edg-brand/30 transition-all">
                                    <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                                        <Sun className="h-6 w-6 text-amber-500" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Open Mode</h3>
                                    <p className="text-sm text-muted-foreground">Let in full winter sun or circulate air on mild days.</p>
                                </div>

                                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-edg-brand/30 transition-all">
                                    <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                        <Info className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Angled Mode</h3>
                                    <p className="text-sm text-muted-foreground">Block direct sun while keeping ventilation flowing.</p>
                                </div>

                                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-edg-brand/30 transition-all">
                                    <div className="h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center mb-4">
                                        <CloudRain className="h-6 w-6 text-edg-brand-text dark:text-edg-brand" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Closed Mode</h3>
                                    <p className="text-sm text-muted-foreground">100% waterproof roof for rain and snow protection.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== COMPARISON TABLE ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center">
                                Louvered System vs. Traditional Wood
                            </h2>
                            <p className="text-lg text-muted-foreground text-center mb-10">
                                See why homeowners are choosing motorized aluminum over fixed wood structures.
                            </p>

                            <div className="bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-edg-dark text-white">
                                        <tr>
                                            <th className="p-5 font-bold">Feature</th>
                                            <th className="p-5 font-bold text-edg-brand">Louvered (Aluminum)</th>
                                            <th className="p-5 font-bold text-gray-400">Traditional (Wood)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                                                <td className="p-5 font-medium">{row.feature}</td>
                                                <td className="p-5 text-edg-brand-text dark:text-edg-brand font-medium">{row.louvered}</td>
                                                <td className="p-5 text-muted-foreground">{row.traditional}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== PRICING SECTION ========== */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="text-edg-brand font-bold text-sm uppercase tracking-wider mb-2 block">Transparent Pricing</span>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    Real World Pricing for Chicago
                                </h2>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                                <p className="text-gray-300 mb-8 text-center">
                                    We believe in transparency. Here are typical ranges for a fully installed system in the Chicago metro area (materials, labor, electrical rough-in).
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <p className="text-sm text-gray-400 mb-2">Small (10' x 10')</p>
                                        <p className="text-3xl font-bold">$18k - $24k</p>
                                    </div>
                                    <div className="text-center p-6 rounded-2xl bg-edg-brand/10 border border-edg-brand/20">
                                        <p className="text-sm text-edg-brand mb-2">Medium (12' x 16')</p>
                                        <p className="text-3xl font-bold">$28k - $38k</p>
                                        <span className="text-xs text-edg-brand mt-1 block">Most Popular</span>
                                    </div>
                                    <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <p className="text-sm text-gray-400 mb-2">Large / Multi-zone</p>
                                        <p className="text-3xl font-bold">$50k+</p>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 text-center mb-6">
                                    *Prices vary based on accessories like motorized screens, heaters, and custom colors.
                                </p>

                                <div className="text-center">
                                    <Link href="/contact">
                                        <Button size="lg" className="rounded-full">
                                            Get an Exact Quote <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>

            {/* ========== FAQ SECTION ========== */}
            <Section className="py-20 bg-white dark:bg-zinc-950">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-muted-foreground text-center mb-12">
                                Get answers to the most common questions about louvered pergolas.
                            </p>

                            <div className="space-y-6">
                                {faqs.map((item, i) => (
                                    <div key={i} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                        <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0 mt-0.5" />
                                            {item.question}
                                        </h3>
                                        <p className="text-muted-foreground pl-8">{item.answer}</p>
                                    </div>
                                ))}
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
                                Ready to Design Yours?
                            </h2>
                            <p className="text-xl text-edg-dark/80 mb-8">
                                Stop guessing and start planning. Schedule a free site assessment with our design team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                        Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/systems/pergolas">
                                    <Button size="lg" variant="ghost" className="rounded-full text-lg px-8 text-edg-dark hover:bg-edg-dark/10">
                                        View Gallery
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
