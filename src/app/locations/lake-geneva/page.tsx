import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Check, Anchor } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lake Geneva WI Pergolas | Lakefront Outdoor Living',
    description:
        "Premium motorized pergolas for Lake Geneva vacation homes. Extend your patio season at the lake with heated louvered roof systems.",
};

export default function LakeGenevaPergolaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'Lake Geneva Lakefront Pergola',
                        image:
                            'https://www.edgpatioshade.com/images/pergolas/pergola-hero.jpg',
                        description:
                            "Motorized pergola systems with heaters and screens, perfect for extending the season at Lake Geneva homes.",
                        brand: {
                            '@type': 'Brand',
                            name: 'EDG Outdoor Living',
                        },
                        areaServed: {
                            '@type': 'City',
                            name: 'Lake Geneva',
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
                        alt="Lakefront Pergola in Lake Geneva"
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
                            Lake Geneva Outdoor Living
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
                            Maximize your time at the lake. Our systems let you enjoy your patio rain or shine, from early spring to late fall.
                        </p>
                        <Link href="/contact?source=lake_geneva_product">
                            <Button
                                size="lg"
                                className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90"
                            >
                                Request a Lake House Consult
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
                                    Extend Your Lake Season
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    You want to squeeze every possible hour out of your weekends at the lake. A standard patio umbrella doesn't cut it when the storms roll in or the temperature drops.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edg-brand/20">
                                            <Anchor className="h-4 w-4 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Rain Protection</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Don't let a pop-up storm ruin dinner. Close the louvers and keep the party going.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-edg-brand/20">
                                            <Check className="h-4 w-4 text-edg-brand-text dark:text-edg-brand" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Integrated Heating</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Infrared heaters let you use your outdoor space comfortably well into October and November.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-black/5 bg-zinc-100 p-8 dark:bg-zinc-800">
                                <h3 className="mb-6 text-xl font-bold">
                                    Serving Walworth County
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    We are based just over the border in Spring Grove, IL, making us your local choice for Lake Geneva, Fontana, and Williams Bay projects.
                                </p>
                                <Link href="/showroom">
                                    <Button variant="secondary" className="w-full">
                                        Visit Spring Grove Showroom
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
