import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft, CheckCircle2, ArrowRight,
    Phone, Calculator, Clock, FileText
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pergola & Shade Pricing | Get a Custom Quote",
    description: "Get a custom quote for motorized pergolas, exterior shades, and glass enclosures in Chicago & Milwaukee. Transparent pricing, no hidden fees. Serving Lake County IL and Southeast Wisconsin.",
    openGraph: {
        title: "Get a Custom Quote | EDG Outdoor Living",
        description: "Transparent pricing for premium outdoor living systems. Request your custom proposal.",
    },
};

export default function PricePage() {
    return (
        <main className="min-h-screen bg-edg-light dark:bg-black">
            {/* ========== HERO ========== */}
            <Section className="pb-16 pt-24 md:pt-32 bg-white dark:bg-black">
                <Container>
                    <Link href="/" className="inline-flex items-center text-sm text-edg-gray-text hover:text-edg-brand-text mb-8 transition-colors font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
                    </Link>
                    <div className="max-w-4xl">
                        <p className="text-edg-brand-text font-semibold mb-4 uppercase tracking-wider text-sm">For Budget-Conscious Homeowners</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Get a real quote.<br />
                            <span className="text-muted-foreground">Not a bait-and-switch estimate.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-4">
                            We know you've been burned by contractors who quote low and invoice high.
                            That's why we take the time to understand your project before giving you numbers.
                        </p>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            Every project is different. We'll give you an accurate quote based on <strong>your site, your goals, and your timeline</strong>—not a generic price list.
                        </p>
                        <Link href="/contact?type=price">
                            <Button size="lg" className="rounded-full text-lg px-8">
                                Request Your Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-4">Usually delivered within 48 hours of site visit.</p>
                    </div>
                </Container>
            </Section>

            {/* ========== WHAT YOU'LL GET ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What you'll receive</h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Not a vague estimate—a detailed proposal you can actually plan around.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "Itemized Scope",
                                desc: "Every component, feature, and installation detail spelled out. No hidden line items."
                            },
                            {
                                icon: Calculator,
                                title: "Fixed Price",
                                desc: "The number we quote is the number you pay. We don't do 'surprise' change orders."
                            },
                            {
                                icon: Clock,
                                title: "Realistic Timeline",
                                desc: "Permit estimates, lead times, and installation dates. Know when you'll be enjoying your space."
                            }
                        ].map((item) => (
                            <div key={item.title} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl text-center shadow-sm border border-zinc-200/50 dark:border-zinc-700">
                                <div className="h-14 w-14 rounded-full bg-edg-brand/10 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="h-7 w-7 text-edg-brand-text dark:text-edg-brand" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-edg-gray-text dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== SYSTEMS OVERVIEW (NO PRICES) ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Systems we quote</h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Tell us what you're interested in and we'll provide a custom proposal.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Shades */}
                        <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/shades/shades-hero.jpg"
                                    alt="Motorized exterior shades"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Motorized Shades</h3>
                                <p className="text-muted-foreground text-sm">Custom-fit exterior shades for heat and glare control.</p>
                            </div>
                        </div>

                        {/* Pergolas */}
                        <div className="border-2 border-edg-brand rounded-2xl overflow-hidden relative">
                            <div className="absolute top-4 left-4 z-10 bg-edg-brand text-edg-dark text-xs font-bold px-3 py-1 rounded-full">
                                MOST POPULAR
                            </div>
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg"
                                    alt="Louvered pergola system"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Louvered Pergolas</h3>
                                <p className="text-muted-foreground text-sm">All-weather motorized louver systems for four-season use.</p>
                            </div>
                        </div>

                        {/* Enclosures */}
                        <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/enclosures/glass-hero.jpg"
                                    alt="Glass enclosure system"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Glass Enclosures</h3>
                                <p className="text-muted-foreground text-sm">Panoramic sliding or folding glass systems for maximum views.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== WHAT AFFECTS YOUR QUOTE ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What affects your quote</h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Every project is unique. Here's what we consider when pricing yours.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Size & Layout", desc: "Square footage, shape complexity, and number of openings all factor in." },
                            { title: "Site Conditions", desc: "Attachment method, concrete work, electrical access, and equipment access." },
                            { title: "Options & Finish", desc: "Heating, lighting, automation level, fabric/color selections, and powder coat." },
                            { title: "Permitting", desc: "Some municipalities require more engineering than others. We'll know after research." }
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <Calculator className="h-10 w-10 text-edg-brand-text dark:text-edg-brand mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-edg-gray-text dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== SERVICES ========== */}
            <Section className="bg-white dark:bg-black py-20">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What's typically included</h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Every project is unique. We tailor our services to meet the specific requirements of your site and goals.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Project Planning", desc: "Comprehensive site assessment and tailored system recommendations." },
                            { title: "Administrative Support", desc: "Management of documentation and municipal requirements when applicable." },
                            { title: "Technical Oversight", desc: "Engineering and structural considerations based on your project's scope." },
                            { title: "Professional Execution", desc: "Precision installation and site management by our specialized teams." },
                            { title: "System Integration", desc: "Configuration of automation, lighting, and performance features as needed." },
                            { title: "Project Completion", desc: "A final walkthrough and orientation to ensure your space is ready." }
                        ].map((item) => (
                            <div key={item.title} className="flex items-start gap-4">
                                <CheckCircle2 className="h-6 w-6 text-edg-brand-text dark:text-edg-brand shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-semibold">{item.title}</div>
                                    <div className="text-sm text-edg-gray-text dark:text-gray-400">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FAQ ========== */}
            <Section className="bg-zinc-100 dark:bg-zinc-900 py-20">
                <Container>
                    <h2 className="text-3xl font-bold text-center mb-12">Pricing Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "Why don't you publish prices online?",
                                a: "Because every project is different. Size, site conditions, options, and permitting requirements all affect the price significantly. We'd rather give you an accurate quote than a misleading range."
                            },
                            {
                                q: "How quickly can I get a quote?",
                                a: "After a site visit (usually scheduled within a week), we'll have your detailed proposal within 48 hours. For simple projects, sometimes sooner."
                            },
                            {
                                q: "Is there a cost for the quote?",
                                a: "The initial consultation and site visit are free. If we proceed to detailed design work beyond the standard scope, we'll discuss any design fees upfront."
                            },
                            {
                                q: "What's the deposit / payment schedule?",
                                a: "Typically 50% at contract signing, 40% when materials arrive, 10% at completion. For larger projects, we can discuss milestone-based payments."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-700 shadow-sm">
                                <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                                <p className="text-edg-gray-text dark:text-gray-400">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FINAL CTA ========== */}
            <Section className="bg-edg-dark text-white py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to get real numbers for your project?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Tell us about your space and goals. We'll schedule a site visit and provide a detailed proposal—no obligation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=price">
                                <Button size="lg" className="rounded-full text-lg px-8">
                                    Request Your Quote <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="tel:+18155810138">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 border-white/30 text-white hover:bg-white/10">
                                    <Phone className="mr-2 h-5 w-5" /> Call Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
