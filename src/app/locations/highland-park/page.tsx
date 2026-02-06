import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Highland Park Motorized Pergolas | Modern Outdoor Living',
    description:
        "Contemporary louvered pergolas for Highland Park homes. Minimalist designs perfect for ravine settings and modern architecture.",
};

export default function HighlandParkPergolaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'Highland Park Modern Pergola',
                        image:
                            'https://www.edgpatioshade.com/images/pergolas/pergola-hero.jpg',
                        description:
                            "Modern motorized pergola systems designed for Highland Park's unique ravine and lakefront topography.",
                        brand: {
                            '@type': 'Brand',
                            name: 'EDG Outdoor Living',
                        },
                        areaServed: {
                            '@type': 'City',
                            name: 'Highland Park',
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
                        alt="Modern Pergola in Highland Park"
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
                            Modern Shade for Highland Park
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
                            Minimalist motorized pergolas that complement contemporary architecture and ravine settings.
                        </p>
                        <Link href="/contact?source=highland_park_product">
                            <Button
                                size="lg"
                                className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90"
                            >
                                Get a Design Proposal
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
                                    Designed for the Ravines & Lakefront
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Highland Park offers unique topography and views. Our systems are often installed on elevated decks overlooking ravines or the lake, requiring specialized engineering for wind loads and exposure.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edg-brand/20">
                                            <Check className="h-4 w-4 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Modern Aesthetic</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Clean lines and hidden fasteners perfectly match mid-century modern and contemporary homes.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edg-brand/20">
                                            <Check className="h-4 w-4 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Privacy Solutions</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Integrated retractable screens provide privacy from neighbors without blocking your ravine views.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-black/5 bg-zinc-100 p-8 dark:bg-zinc-800">
                                <h3 className="mb-6 text-xl font-bold">
                                    See It In Person
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Visit our showroom to operate the louvers and screens yourself. We're just a short drive up Route 12.
                                </p>
                                <Link href="/showroom">
                                    <Button variant="secondary" className="w-full">
                                        Plan Your Visit
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
