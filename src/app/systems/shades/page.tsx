import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import Link from "next/link";
import {
    ArrowRight, CheckCircle2, Sun, Wind, Eye, Thermometer,
    Wifi, Shield, Phone, ChevronRight
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Motorized Exterior Shades | Wind-Rated Outdoor Screens",
    description: "Premium motorized exterior shades and outdoor screens. Wind-rated up to 35+ mph, UV protection, and smart home integration. Block heat while preserving your view.",
    openGraph: {
        title: "Motorized Exterior Shades | EDG Outdoor Living",
        description: "Wind-rated exterior screens that block heat and glare while preserving your view.",
    },
};


const galleryImages = [
    {
        type: "image" as const,
        src: "/images/shades/shade-deployed-screens-01.jpg",
        alt: "Motorized mesh screens deployed on white pergola",
    },
    {
        type: "image" as const,
        src: "/images/shades/shade-patio-close-01.jpg",
        alt: "Exterior screen shades providing sun protection on patio",
    },
    {
        type: "image" as const,
        src: "/images/shades/commercial-white-r-blade-screens-lake.jpg",
        alt: "Commercial pergola with retractable shade screens overlooking lake",
    },
    {
        type: "image" as const,
        src: "/images/shades/shades-hero.jpg",
        alt: "Pergola with solid shade panel closed for privacy",
    },
];

const features = [
    {
        icon: Thermometer,
        title: "The Heat Block",
        description: "Solar fabrics dramatically reduce heat gain while keeping the breeze—so you can enjoy the shade without losing the outdoors.",
    },
    {
        icon: Wind,
        title: "Wind-Rated Design",
        description: "Side tracks or cables keep the fabric secure in real conditions—not just calm days.",
    },
    {
        icon: Eye,
        title: "View-Through Technology",
        description: "Solar mesh blocks glare and UV while letting you see out clearly. Protection without feeling boxed in.",
    },
    {
        icon: Sun,
        title: "Full UV Defense",
        description: "Protect your furniture, flooring, and family from harmful rays—even on bright days.",
    },
    {
        icon: Wifi,
        title: "One-Touch Control",
        description: "Wall switch, remote, phone app, or voice assistant. Choose how you want to operate your system.",
    },
    {
        icon: Shield,
        title: "Multi-Year Warranty",
        description: "Motors, fabric, and components covered. We stand behind what we install.",
    },
];

const specs = [
    { label: "Maximum Width", value: "Up to 20' single span" },
    { label: "Maximum Drop", value: "Up to 16'" },
    { label: "Wind Rating", value: "35+ mph (track-guided)" },
    { label: "UV Blockage", value: "Up to 97%" },
    { label: "Visibility", value: "1-14% openness factor" },
    { label: "Warranty", value: "5-year comprehensive" },
];

const fabricOptions = [
    { name: "5% Openness", desc: "Maximum view, moderate heat reduction", opacity: "bg-gray-300" },
    { name: "3% Openness", desc: "Balanced view and solar control", opacity: "bg-gray-500" },
    { name: "1% Openness", desc: "Maximum heat/glare reduction", opacity: "bg-gray-700" },
    { name: "Blackout", desc: "Complete light blockage", opacity: "bg-gray-900" },
];

export default function ShadesPage() {
    return (
        <main className="min-h-screen">
            {/* ========== HERO WITH GALLERY ========== */}
            <section className="pt-8 pb-16 bg-white dark:bg-black">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Gallery */}
                        <ProductGallery items={galleryImages} />

                        {/* Product Info */}
                        <div className="lg:sticky lg:top-40 space-y-6">
                            <div>
                                <p className="text-edg-brand-text dark:text-edg-brand font-bold uppercase tracking-wider text-xs mb-2">
                                    Solar & Wind Protection
                                </p>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                    Motorized Shades
                                </h1>
                                <p className="text-xl text-edg-gray-text dark:text-gray-400 leading-relaxed">
                                    Wind-rated exterior screens that block 80%+ of heat and glare while
                                    preserving your view. Retract completely when you don't need them.
                                </p>
                            </div>

                            {/* Quick Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Block 80%+ solar heat",
                                    "Wind rated to 35+ mph",
                                    "Preserve outward view",
                                    "Smart home ready",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-sm font-medium">
                                        <CheckCircle2 className="h-4 w-4 text-edg-brand-text dark:text-edg-brand shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <TrackedLink href="/contact?type=price&product=shades" className="flex-1">
                                    <Button size="lg" className="w-full rounded-lg">
                                        Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </TrackedLink>
                                <TrackedPhoneLink href="tel:+18155810138" className="flex-1">
                                    <Button size="lg" variant="secondary" className="w-full rounded-lg">
                                        <Phone className="mr-2 h-5 w-5" /> Call Us
                                    </Button>
                                </TrackedPhoneLink>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Free consultation • Custom sizing • Professional installation
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========== USE CASES ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Perfect For Every Application
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Pergola Enclosure",
                                desc: "Add privacy and wind protection to your pergola with side-mount shade drops.",
                                image: "/images/shades/shade-deployed-screens-01.jpg",
                            },
                            {
                                title: "Window & Door Screens",
                                desc: "Block solar heat before it enters your home. Reduce AC costs significantly.",
                                image: "/images/shades/shade-patio-close-01.jpg",
                            },
                            {
                                title: "Patio & Deck",
                                desc: "Create a comfortable outdoor space even in the heat of summer.",
                                image: "/images/shades/commercial-white-r-blade-screens-lake.jpg",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
                                <div className="aspect-video relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-edg-gray-text dark:text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== BEFORE/AFTER ========== */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <BeforeAfter
                            beforeImage="/images/shades/shade-before-no-screens.jpg"
                            afterImage="/images/shades/shade-after-screens-deployed.jpg"
                            beforeLabel="Without Shades"
                            afterLabel="With Shades"
                        />
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Feel the Difference
                            </h2>
                            <p className="text-lg text-edg-gray-text dark:text-gray-400 mb-6 font-medium">
                                That unbearable hot spot on your patio? The glare that makes your TV unwatchable?
                                The faded furniture? Motorized shades solve all of it—without blocking your view.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Reduce surface temperatures by 20-30°F",
                                    "Cut glare while maintaining visibility",
                                    "Protect furniture from UV fading",
                                    "Lower cooling costs",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-edg-gray-text dark:text-gray-400 font-medium">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== FEATURES ========== */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Engineered for Performance
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Not just any shade—purpose-built exterior screens designed for the elements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex gap-4">
                                <div className="h-12 w-12 rounded-xl bg-edg-brand/20 flex items-center justify-center shrink-0">
                                    <feature.icon className="h-6 w-6 text-edg-brand" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ========== FABRIC OPTIONS ========== */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Fabric Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose the right balance of view, light control, and heat reduction for your space.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {fabricOptions.map((fabric) => (
                            <div key={fabric.name} className="text-center p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
                                <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${fabric.opacity}`} />
                                <h3 className="font-bold">{fabric.name}</h3>
                                <p className="text-sm text-edg-gray-text dark:text-gray-400 mt-1 font-medium">{fabric.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-edg-gray-text dark:text-gray-400 mt-8 font-medium">
                        50+ colors available. See fabric samples at our showroom or request swatches.
                    </p>
                </Container>
            </Section>

            {/* ========== SPECIFICATIONS ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Technical Specifications
                            </h2>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
                            {specs.map((spec, index) => (
                                <div
                                    key={spec.label}
                                    className={`flex justify-between items-center p-6 ${index !== specs.length - 1 ? "border-b border-black/5 dark:border-white/5" : ""
                                        }`}
                                >
                                    <span className="text-muted-foreground">{spec.label}</span>
                                    <span className="font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="py-20 bg-edg-brand">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-edg-dark mb-6">
                            Ready to Beat the Heat?
                        </h2>
                        <p className="text-xl text-edg-dark/80 mb-8">
                            Get a custom quote for motorized shades. We'll help you choose the right
                            fabric and configuration for your space.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/contact?type=price&product=shades">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Get Your Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </TrackedLink>
                            <Link href="/gallery">
                                <Button size="lg" variant="ghost" className="rounded-full text-lg px-8 text-edg-dark hover:bg-edg-dark/10">
                                    See Gallery <ChevronRight className="ml-1 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

