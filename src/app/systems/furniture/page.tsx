import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Luxury Outdoor Furniture | EDG Patio & Shade',
    description:
        'Curated collections of premium outdoor furniture. Weather-resistant materials, modern design, and exceptional comfort.',
    alternates: {
        canonical: '/systems/furniture',
    },
};

export default function FurniturePage() {
    return (
        <main className="min-h-screen">
            <Section className="pt-32 pb-20">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                            Premium Outdoor Furniture
                        </h1>
                        <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                            Complete your outdoor room with furniture designed for durability and style.
                            We curate collections that perfectly complement our pergola and shade systems.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-8 py-6 text-lg font-bold uppercase tracking-wider">
                                    Request Catalog
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
