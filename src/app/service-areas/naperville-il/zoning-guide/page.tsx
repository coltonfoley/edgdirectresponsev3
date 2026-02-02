import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Naperville IL Pergola Permit & Zoning Guide 2025 | EDG",
    description: "Planning a pergola in Naperville? Read our 2025 guide on setbacks, lot coverage, and permit requirements for Naperville homeowners.",
    alternates: {
        canonical: "/service-areas/naperville-il/zoning-guide",
    },
};

export default function NapervilleZoningGuide() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Naperville, IL Pergola Permit & Zoning Guide 2025",
                        "image": "https://www.edgpatioshade.com/images/hero/pergola-hero.jpg",
                        "author": {
                            "@type": "Organization",
                            "name": "EDG Outdoor Living"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "EDG Outdoor Living",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.edgpatioshade.com/images/logo.png"
                            }
                        },
                        "datePublished": "2025-02-02",
                        "description": "A comprehensive guide to zoning requirements, setbacks, and height restrictions for building pergolas in Naperville, IL."
                    })
                }}
            />
            <main className="min-h-screen bg-white dark:bg-black">
                <Section className="pt-32 pb-12 bg-zinc-50 dark:bg-zinc-900 border-b border-black/5 dark:border-white/10">
                    <Container>
                        <div className="max-w-3xl">
                            <Link href="/service-areas/naperville-il" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Naperville Overview
                            </Link>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">
                                Naperville Zoning & Permit Guide: 2025 Requirements
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Thinking of adding a motorized pergola to your Naperville property? Here is the essential guide to local codes and city requirements.
                            </p>
                        </div>
                    </Container>
                </Section>

                <Section className="py-16">
                    <Container>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-12">
                                {/* Critical Rules */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <AlertTriangle className="h-6 w-6 text-amber-500" />
                                        Naperville-Specific Regulations
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                            <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">1. The Subdivision/PUD Factor</h3>
                                            <p className="text-amber-800 dark:text-amber-200/80">
                                                Many Naperville homes are part of Planned Unit Developments (PUDs) or have strict HOA covenants. While the City has its own rules, your subdivision may have more restrictive lot coverage or architectural standards that must be met first.
                                            </p>
                                        </div>
                                        <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                            <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">2. Standard Setbacks</h3>
                                            <p className="text-amber-800 dark:text-amber-200/80">
                                                Generally, detached accessory structures must maintain a minimum 5-10 foot setback from side and rear property lines. Front yard installations are typically prohibited or require a significant variance.
                                            </p>
                                        </div>
                                        <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                                            <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">3. Impervious Surface Limits</h3>
                                            <p className="text-amber-800 dark:text-amber-200/80">
                                                If your pergola is built over a new patio or deck, it contributes to your lot's impervious surface ratio. Naperville monitors this closely to manage stormwater runoff in DuPage and Will counties.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* The Process */}
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <FileText className="h-6 w-6 text-edg-brand" />
                                        Getting Your Naperville Permit
                                    </h2>
                                    <p className="mb-6 text-muted-foreground">
                                        At EDG, we handle the entire T.E.D. (Transportation, Engineering, & Development) permitting process for you. Our typical submission package for Naperville includes:
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "A recent Plat of Survey showing the property boundaries",
                                            "Digital drawings of the proposed structure location",
                                            "Structural engineering specifications for snow and wind loads",
                                            "Electrical permit application (for motorized systems and lighting)",
                                            "HOA Architectural Review Committee (ARC) approval letter"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl sticky top-32 border border-black/5 dark:border-white/10">
                                    <h3 className="font-bold text-xl mb-4">Don't Get Stuck in Red Tape.</h3>
                                    <p className="text-muted-foreground mb-6 text-sm">
                                        Naperville's code enforcement is professional but thorough. We ensure your project is built to code and fully permitted at 400 S. Eagle Street.
                                    </p>
                                    <div className="space-y-4">
                                        <Link href="/contact?source=naperville_guide" className="block w-full">
                                            <Button className="w-full rounded-full">Request Site Evaluation</Button>
                                        </Link>
                                        <a href="tel:+18155810138" className="block text-center text-sm font-semibold hover:text-edg-brand transition-colors">
                                            (815) 581-0138
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>
        </>
    );
}
