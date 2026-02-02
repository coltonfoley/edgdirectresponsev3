import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Check, Wind, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Motorized Louvered Pergolas Northbrook, IL | Hurricane Rated",
    description: "The only pergola engineered for Northbrook's 30psf snow loads and 115mph winds. Explore our luxury louvered roof systems for 60062.",
};

export default function NorthbrookPergolaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Northbrook-Engineered Motorized Pergola",
                        "image": "https://www.edgpatioshade.com/images/pergolas/pergola-hero.jpg",
                        "description": "The only pergola engineered for Northbrook's 30psf snow loads and 115mph winds. Custom designed for 60062 zoning codes.",
                        "brand": {
                            "@type": "Brand",
                            "name": "EDG Outdoor Living"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://www.edgpatioshade.com/service-areas/northbrook-il/motorized-pergolas",
                            "priceCurrency": "USD",
                            "price": "15000",
                            "itemCondition": "https://schema.org/NewCondition",
                            "availability": "https://schema.org/InStock"
                        }
                    })
                }}
            />
            <main className="min-h-screen bg-white dark:bg-black">
                {/* Hero */}
                <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="/images/pergolas/pergola-hero.jpg"
                        alt="Luxury Motorized Pergola in Northbrook"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 text-center max-w-4xl px-6">
                        <Link href="/service-areas/northbrook-il" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Northbrook Hub
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            The Only "Northbrook-Ready" Pergola
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Engineered to withstand 115mph winds and heavy Chicagoland snow loads without sacrificing elegance.
                        </p>
                        <Link href="/contact?source=northbrook_product">
                            <Button size="lg" className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90">
                                Get a Design Proposal
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Why Northbrook Needs This */}
                <Section className="py-20">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Why Standard Pergolas Fail in 60062
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Northbrook isn't Florida. We get ice storms, heavy wet snow, and severe thunderstorm gusts. Most "Click-and-Ship" pergolas will buckle under a Northbrook winter.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                                            <Wind className="h-4 w-4 text-red-600 dark:text-red-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">The 115mph Wind Problem</h3>
                                            <p className="text-sm text-muted-foreground">Standard aluminum kits are rated for 60-80mph. Our system is extruded aluminum rated for 115mph+ gusts.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">The 30psf Snow Load</h3>
                                            <p className="text-sm text-muted-foreground">Our louvers have integrated sensors. When it snows, they open automatically to let snow pass through, preventing collapse.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-8 border border-black/5">
                                <h3 className="font-bold text-xl mb-6">Designed for Northbrook Architecture</h3>
                                <p className="mb-6 text-muted-foreground">
                                    Whether you live in a classic Brick Georgian in Techny or a modern build near the village center, we match your trim color and architectural lines.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-edg-brand" /> <span>Custom Color Matching (RAL)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-edg-brand" /> <span>Hidden Fasteners (No ugly bolts)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-edg-brand" /> <span>Integrated LED Lighting</span>
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
