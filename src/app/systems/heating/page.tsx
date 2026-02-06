import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Outdoor Heating Systems | Infrared Heaters & Fire Features',
    description:
        'Extend your outdoor season with premium infrared heaters and fire features. Integrated heating solutions for pergolas and patios.',
    alternates: {
        canonical: '/systems/heating',
    },
};

export default function HeatingPage() {
    return (
        <main className="min-h-screen">
            <Section className="pt-32 pb-20">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                            Outdoor Heating Systems
                        </h1>
                        <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                            Don't let the cold drive you indoors. Our infrared heating systems
                            and fire features allow you to enjoy your outdoor space from early
                            spring through late fall.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 inline-flex h-12 items-center justify-center rounded-md px-8 text-lg font-medium transition-colors"
                            >
                                Request Information
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
