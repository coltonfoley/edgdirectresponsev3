import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, CloudRain, Sun, Wind } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outdoor Living Systems | Pergolas, Shades & Enclosures",
    description: "Explore our premium outdoor living systems. Motorized pergolas, exterior shades, and glass enclosures designed for the Midwest climate.",
};

export default function SystemsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Hero */}
            <Section className="pt-24 md:pt-32 pb-16 bg-edg-dark text-white">
                <Container>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Our Systems
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                            Engineered for performance, designed for style. Choose the system that fits your lifestyle.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Systems Grid */}
            <Section className="py-20 bg-white dark:bg-black">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pergolas */}
                        <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden group hover:border-edg-brand transition-colors">
                            <div className="aspect-[4/3] relative bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src="/images/pergolas/residential-black-r-blade-01.jpg"
                                    alt="Louvered pergola system"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3">Louvered Pergolas</h3>
                                <p className="text-muted-foreground mb-6">
                                    Motorized aluminum structures with rotating louvers for complete climate control.
                                </p>
                                <Link href="/systems/pergolas">
                                    <Button className="w-full">Explore Pergolas</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Shades */}
                        <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden group hover:border-edg-brand transition-colors">
                            <div className="aspect-[4/3] relative bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src="/images/shades/shades-hero.jpg"
                                    alt="Motorized exterior shades"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3">Motorized Shades</h3>
                                <p className="text-muted-foreground mb-6">
                                    Wind-rated exterior screens that block heat and glare while preserving your view.
                                </p>
                                <Link href="/systems/shades">
                                    <Button className="w-full">Explore Shades</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Enclosures */}
                        <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden group hover:border-edg-brand transition-colors">
                            <div className="aspect-[4/3] relative bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src="/images/enclosures/glass-system-03.jpg"
                                    alt="Glass enclosure system"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3">Glass Enclosures</h3>
                                <p className="text-muted-foreground mb-6">
                                    Frameless retractable glass walls that add weatherproof square footage.
                                </p>
                                <Link href="/systems/enclosures">
                                    <Button className="w-full">Explore Enclosures</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

