import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Check, Wind, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Motorized Pergolas Lake Forest, IL | Estate & Historic',
    description:
        "Custom motorized pergolas designed for Lake Forest estates. Architecturally compatible with historic homes and engineered for lakefront winds.",
};

export default function LakeForestPergolaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'Lake Forest Estate Pergola System',
                        image:
                            'https://www.edgpatioshade.com/images/pergolas/pergola-hero.jpg',
                        description:
                            "Motorized pergola systems engineered for Lake Forest architecture and weather conditions.",
                        brand: {
                            '@type': 'Brand',
                            name: 'EDG Outdoor Living',
                        },
                        areaServed: {
                            '@type': 'City',
                            name: 'Lake Forest',
                        },
                    }),
                }}
            />
            <main className="min-h-screen bg-white dark:bg-black">
                {/* Hero */}
                <div className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden text-white">
                    <div className="absolute inset-0 z-10 bg-black/60" />
                    <img
                        src="/images/pergolas/pergola-hero.jpg"
                        alt="Estate Pergola in Lake Forest"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="relative z-20 max-w-4xl px-6 text-center">
                        <Link
                            href="/service-areas"
                            className="mb-6 inline-flex items-center text-white/80 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> View All Service Areas
                        </Link>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Motorized Pergolas for Lake Forest Estates
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
                            Architectural shade systems designed to respect the character of historic homes while providing modern comfort.
                        </p>
                        <Link href="/contact?source=lake_forest_product">
                            <Button
                                size="lg"
                                className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90"
                            >
                                Schedule a Site Consultation
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Local Context */}
                <Section className="py-20">
                    <Container>
                        <div className="grid items-center gap-16 md:grid-cols-2">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold md:text-4xl">
                                    Respecting Lake Forest Architecture
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Adding a structure to a home in Lake Forest requires sensitivity to architectural style and zoning. We specialize in systems that blend seamlessly with French Eclectic, Georgian, and Tudor styles common in the 60045 area.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edg-brand/20">
                                            <Check className="h-4 w-4 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Architectural Integration</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Custom colors and cornice details to match existing trim and fascia.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edg-brand/20">
                                            <Check className="h-4 w-4 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Lakefront Engineering</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Rated for the high winds coming off Lake Michigan.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-black/5 bg-zinc-100 p-8 dark:bg-zinc-800">
                                <h3 className="mb-6 text-xl font-bold">
                                    The Local Advantage
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    We are local to the area with a showroom in Spring Grove. We understand the specific micro-climate and building requirements of the North Shore.
                                </p>
                                <Link href="/showroom">
                                    <Button variant="secondary" className="w-full">
                                        Visit Our Showroom
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>
        </>
    );
}
