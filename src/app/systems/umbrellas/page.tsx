import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Commercial Grade Umbrellas | Cantilever & Center Pole',
    description:
        'Heavy-duty outdoor umbrellas for residential and commercial applications. Wind-stable, marine-grade materials.',
    alternates: {
        canonical: '/systems/umbrellas',
    },
};

export default function UmbrellasPage() {
    return (
        <main className="min-h-screen">
            <Section className="pt-32 pb-20">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                            Architectural Umbrellas
                        </h1>
                        <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                            Flexible shade solutions for pools, dining areas, and patios.
                            Our marine-grade umbrellas are built to withstand wind and sun without fencing or fading.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-8 py-6 text-lg font-bold uppercase tracking-wider">
                                    Request Information
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
