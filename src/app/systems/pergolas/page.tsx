import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import Link from "next/link";
import {
    ArrowRight, CheckCircle2, Sun, CloudRain, Snowflake, Thermometer,
    Lightbulb, Wifi, Shield, Ruler, Phone, ChevronRight
} from "lucide-react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { TrackedPhoneLink } from "@/components/ui/TrackedPhoneLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Louvered Pergolas | Motorized Aluminum Pergola Systems",
    description: "Premium louvered pergola systems with rotating aluminum louvers for complete sun, shade, and rain control. Smart home ready with integrated lighting and heating options.",
    openGraph: {
        title: "Louvered Pergolas | EDG Outdoor Living",
        description: "Motorized aluminum pergolas with rotating louvers. The ultimate four-season outdoor room.",
    },
};


const galleryImages = [
    {
        type: "image" as const,
        src: "/images/pergolas/residential-black-r-blade-01.jpg",
        alt: "Modern black R-Blade pergola installation",
    },
    {
        type: "image" as const,
        src: "/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg",
        alt: "Gray bronze R-Blade with white louvers",
    },
    {
        type: "image" as const,
        src: "/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg",
        alt: "Gray and white R-Shade over outdoor kitchen",
    },
    {
        type: "image" as const,
        src: "/images/pergolas/residential-white-r-blade-led-strip.jpg",
        alt: "White R-Blade with integrated LED lighting",
    },
    {
        type: "image" as const,
        src: "/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg",
        alt: "Dark gray R-Blade with recessed lights",
    },
];

const features = [
    {
        icon: Sun,
        title: "Precision Sun Control",
        description: "Louvers rotate 0-135° at the touch of a button—so you can dial in exactly the light you want, any time of day.",
    },
    {
        icon: CloudRain,
        title: "The Weather Shield",
        description: "Louvers close for a watertight seal. Integrated gutters channel rain away—no dripping, no pooling.",
    },
    {
        icon: Snowflake,
        title: "Midwest-Engineered Frame",
        description: "Built for our winters. Structural calculations factor in real snow loads for your specific location.",
    },
    {
        icon: Thermometer,
        title: "Season Extender Package",
        description: "Optional infrared heaters let you enjoy your space from early spring through late fall—and beyond.",
    },
    {
        icon: Lightbulb,
        title: "Integrated Ambient Lighting",
        description: "Dimmable LEDs built into the louvers. Set the mood without wires or hanging fixtures.",
    },
    {
        icon: Wifi,
        title: "Smart Home Integration",
        description: "Control from your phone, voice assistant, or tie into your existing home automation setup.",
    },
];

const specs = [
    { label: "Maximum Span", value: "Up to 23' single span" },
    { label: "Louver Rotation", value: "0° - 135°" },
    { label: "Wind Rating", value: "Up to 100 mph" },
    { label: "Snow Load", value: "Up to 60 psf" },
    { label: "Frame Material", value: "Powder-coated aluminum" },
    { label: "Warranty", value: "10-year structural" },
];

const colorOptions = [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#1a1a1a" },
    { name: "Bronze", hex: "#4a3728" },
    { name: "Graphite", hex: "#4a4a4a" },
    { name: "Sand", hex: "#c2b280" },
    { name: "Custom RAL", hex: "linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)" },
];

export default function PergolasPage() {
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
                                    Most Popular System
                                </p>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                    Louvered Pergolas
                                </h1 >
                                <p className="text-xl text-edg-gray-text dark:text-gray-400 leading-relaxed">
                                    Motorized aluminum louvers that rotate from full sun to full shade—and close
                                    completely for rain protection. The ultimate year-round outdoor room.
                                </p>
                            </div>

                            {/* Quick Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Rotating louvers (0-135°)",
                                    "Rain & snow protection",
                                    "Integrated LED lighting",
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
                                <TrackedLink href="/contact?type=price&product=pergola" className="flex-1">
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

            {/* ========== HOW IT WORKS ========== */}
            <Section className="py-20 bg-zinc-100 dark:bg-zinc-900">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            See How It Works
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From blazing sun to sudden rainstorm—adapt your outdoor space in seconds.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Louvers Open */}
                        <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
                            <div className="aspect-video relative">
                                <img
                                    src="/images/pergolas/pergola-lifestyle.jpg"
                                    alt="Louvers fully open"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Full Sun</p>
                                    <p className="text-white/80 text-sm">Louvers open at 135°</p>
                                </div>
                            </div>
                        </div>

                        {/* Louvers Angled */}
                        <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
                            <div className="aspect-video relative">
                                <img
                                    src="/images/pergolas/residential-gray-bronze-r-blade-white-louvers-03.jpg"
                                    alt="Louvers partially closed"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Filtered Light</p>
                                    <p className="text-white/80 text-sm">Louvers angled at 45°</p>
                                </div>
                            </div>
                        </div>

                        {/* Louvers Closed */}
                        <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
                            <div className="aspect-video relative">
                                <img
                                    src="/images/pergolas/pergola-closed-louvers.jpg"
                                    alt="Louvers fully closed"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Full Shade / Rain</p>
                                    <p className="text-white/80 text-sm">Louvers closed at 0°</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ========== BEFORE/AFTER ========== */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Transform Your Outdoor Space
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                See the difference a louvered pergola makes. What was once an unusable
                                hot patio becomes a year-round outdoor living room.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Adds usable square footage to your home",
                                    "Increases property value",
                                    "Creates a defined outdoor room",
                                    "Protection from sun, rain, and light snow",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-edg-gray-text dark:text-gray-400 font-medium">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <BeforeAfter
                            beforeImage="/images/pergolas/before-pergola-install.jpg"
                            afterImage="/images/pergolas/after-pergola-install.jpg"
                            beforeLabel="Before"
                            afterLabel="After"
                        />
                    </div>
                </Container>
            </Section>

            {/* ========== FEATURES ========== */}
            <Section className="py-20 bg-edg-dark text-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Built for Year-Round Performance
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Every feature designed for the Midwest climate—and the way you actually live.
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

            {/* ========== OPTIONS & CONFIGURATIONS ========== */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Options & Configurations
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Every system is custom-built to your specifications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Colors */}
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-6">Frame Colors</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {colorOptions.map((color) => (
                                    <div key={color.name} className="text-center">
                                        <div
                                            className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-black/10 dark:border-white/10"
                                            style={{ background: color.hex }}
                                        />
                                        <p className="text-sm font-medium">{color.name}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                Custom RAL colors available for an additional lead time.
                            </p>
                        </div>

                        {/* Add-ons */}
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800">
                            <h3 className="text-xl font-bold mb-6">Popular Add-Ons</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Integrated LED Lighting", desc: "Dimmable strips in louvers" },
                                    { name: "Infrared Heaters", desc: "Extend your season" },
                                    { name: "Motorized Shades", desc: "Side screens for privacy/wind" },
                                    { name: "Smart Controls", desc: "App, voice, or automation" },
                                    { name: "Rain Sensors", desc: "Auto-close when rain detected" },
                                    { name: "Fan Integration", desc: "Built-in ceiling fan mount" },
                                ].map((addon) => (
                                    <li key={addon.name} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-sm md:text-base">{addon.name}</span>
                                            <span className="text-edg-gray-text dark:text-gray-400 text-xs md:text-sm"> — {addon.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                                    className={`flex justify-between items-center p-6 ${index !== specs.length - 1 ? "border-b border-black/5 dark:border-white/5" : ""
                                        }`}
                                >
                                    <span className="text-muted-foreground">{spec.label}</span>
                                    <span className="font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-sm text-edg-gray-text dark:text-gray-400 mt-6 font-medium">
                            Specifications vary by manufacturer and configuration.
                            <Link href="/contact" className="text-edg-brand-text dark:text-edg-brand hover:underline ml-1 font-bold">
                                Contact us for detailed specs
                            </Link>
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ========== LIFESTYLE GALLERY ========== */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            How People Use Their Pergolas
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { src: "/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png", label: "Outdoor Dining" },
                            { src: "/images/pergolas/residential-black-r-blade-04.jpg", label: "Entertainment" },
                            { src: "/images/pergolas/pergola-pool-spa.jpg", label: "Pool & Spa" },
                            { src: "/images/pergolas/residential-black-r-blade-privacy-walls-pool.jpg", label: "Relaxation" },
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

            {/* ========== CTA ========== */}
            <Section className="py-20 bg-edg-brand">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-edg-dark mb-6">
                            Ready to Create Your Outdoor Room?
                        </h2>
                        <p className="text-xl text-edg-dark/80 mb-8">
                            Get a custom quote for your space. We'll help you choose the right configuration
                            and options for how you actually want to use it.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <TrackedLink href="/contact?type=price&product=pergola">
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

