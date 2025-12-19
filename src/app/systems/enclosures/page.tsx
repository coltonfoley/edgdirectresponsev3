import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import Link from "next/link";
import {
    ArrowRight, CheckCircle2, Wind, Thermometer, Eye, Maximize2,
    Shield, Phone, ChevronRight, Droplets
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Glass Enclosures | Retractable Glass Wall Systems",
    description: "Frameless retractable glass wall systems that stack, fold, and disappear. Add weatherproof square footage without heavy construction. Year-round outdoor living.",
    openGraph: {
        title: "Glass Enclosures | EDG Outdoor Living",
        description: "Retractable glass walls that add weatherproof square footage to your outdoor space.",
    },
};

// TODO: Replace with your actual product images
const galleryImages = [
    {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        alt: "Glass enclosure on modern patio",
    },
    {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
        alt: "Retractable glass panels open",
    },
    {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
        alt: "Glass wall system stacked open",
    },
    {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        alt: "Interior view through glass enclosure",
    },
];

const features = [
    {
        icon: Maximize2,
        title: "The Disappearing Wall",
        description: "Glass panels stack, fold, or slide away completely—transforming enclosed space into open-air living in seconds.",
    },
    {
        icon: Droplets,
        title: "Weather-Seal Technology",
        description: "Advanced sealing keeps rain, wind, and cold out when closed—so your space is usable regardless of conditions.",
    },
    {
        icon: Eye,
        title: "Full-View Design",
        description: "Frameless or minimal-frame options maximize your sightlines and natural light. Glass, not bars.",
    },
    {
        icon: Wind,
        title: "Wind Barrier",
        description: "Enjoy evenings outside even when it's breezy—without losing the open-air feel when you want it.",
    },
    {
        icon: Thermometer,
        title: "Year-Round Comfort",
        description: "Add heating and use your space through the seasons—even Midwest winters.",
    },
    {
        icon: Shield,
        title: "Full Engineering Support",
        description: "Structural calculations and permitting handled—these aren't DIY installations.",
    },
];

const specs = [
    { label: "Panel Height", value: "Up to 12'" },
    { label: "Panel Width", value: "Up to 4' per panel" },
    { label: "Glass Type", value: "Tempered safety glass" },
    { label: "Frame Options", value: "Frameless, minimal, or standard" },
    { label: "Opening Types", value: "Bi-fold, stacking, sliding" },
    { label: "Warranty", value: "10-year manufacturer" },
];

const systemTypes = [
    {
        name: "Bi-Fold",
        desc: "Panels fold accordion-style to one or both sides. Best for large openings.",
        image: "https://image.pollinations.ai/prompt/bifold%20glass%20door%20system%20diagram%20architectural%20detail%20modern?width=800&height=450&nologo=true",
    },
    {
        name: "Stacking",
        desc: "Individual panels slide and stack. Great for partial openings.",
        image: "https://image.pollinations.ai/prompt/stacking%20glass%20door%20system%20diagram%20architectural%20detail%20modern?width=800&height=450&nologo=true",
    },
    {
        name: "Sliding",
        desc: "Panels slide on tracks. Ideal for narrow spaces or straight runs.",
        image: "https://image.pollinations.ai/prompt/sliding%20glass%20door%20system%20diagram%20architectural%20detail%20modern?width=800&height=450&nologo=true",
    },
];

export default function EnclosuresPage() {
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
                                <p className="text-edg-brand font-semibold uppercase tracking-wider text-sm mb-2">
                                    Year-Round Living
                                </p>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                    Glass Enclosures
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Frameless glass wall systems that stack, fold, and disappear. Add 
                                    weatherproof square footage to your home without heavy construction.
                                </p>
                            </div>

                            {/* Quick Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Panels stack & disappear",
                                    "Weatherproof seals",
                                    "Year-round use",
                                    "Adds home value",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-edg-brand shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <Link href="/contact?type=price&product=enclosure" className="flex-1">
                                    <Button size="lg" className="w-full rounded-lg">
                                        Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <a href="tel:+18475551234" className="flex-1">
                                    <Button size="lg" variant="secondary" className="w-full rounded-lg">
                                        <Phone className="mr-2 h-5 w-5" /> Call Us
                                    </Button>
                                </a>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Free consultation • Engineering included • Professional installation
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ========== SYSTEM TYPES ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Opening Configurations
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose how your space opens based on your layout and preferences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {systemTypes.map((type) => (
                            <div key={type.name} className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
                                <div className="aspect-video relative">
                                    <img 
                                        src={type.image}
                                        alt={type.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">{type.name}</h3>
                                    <p className="text-muted-foreground">{type.desc}</p>
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
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Expand Your Living Space
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                That covered patio you can only use 5 months a year? Transform it into 
                                usable square footage year-round—without the cost of a traditional addition.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Use your outdoor space 365 days a year",
                                    "Adds significant value to your home",
                                    "No heavy construction required",
                                    "Open completely for the outdoor feel",
                                    "Close for protection and climate control",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <BeforeAfter
                            beforeImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                            beforeLabel="Open Patio"
                            afterLabel="Enclosed"
                        />
                    </div>
                </Container>
            </Section>

            {/* ========== FEATURES ========== */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Glass Enclosures?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            The benefits of indoor comfort with the feel of being outside.
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

            {/* ========== IDEAL FOR ========== */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ideal Applications
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop", label: "Covered Patios" },
                            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop", label: "Pergolas" },
                            { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop", label: "Pool Houses" },
                            { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", label: "Restaurants" },
                        ].map((item) => (
                            <div key={item.label} className="group relative aspect-square rounded-xl overflow-hidden">
                                <img 
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <p className="absolute bottom-4 left-4 text-white font-semibold">{item.label}</p>
                            </div>
                        ))}
                    </div>
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
                                    className={`flex justify-between items-center p-6 ${
                                        index !== specs.length - 1 ? "border-b border-black/5 dark:border-white/5" : ""
                                    }`}
                                >
                                    <span className="text-muted-foreground">{spec.label}</span>
                                    <span className="font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Specifications vary by manufacturer and configuration.
                            <Link href="/contact" className="text-edg-brand hover:underline ml-1">
                                Contact us for detailed specs
                            </Link>
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ========== CTA ========== */}
            <Section className="py-20 bg-edg-brand">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-edg-dark mb-6">
                            Ready for Year-Round Outdoor Living?
                        </h2>
                        <p className="text-xl text-edg-dark/80 mb-8">
                            Get a custom quote for a glass enclosure system. We'll assess your space 
                            and recommend the right configuration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?type=price&product=enclosure">
                                <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 bg-edg-dark text-white hover:bg-edg-dark/90">
                                    Get Your Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/projects">
                                <Button size="lg" variant="ghost" className="rounded-full text-lg px-8 text-edg-dark hover:bg-edg-dark/10">
                                    See Projects <ChevronRight className="ml-1 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

