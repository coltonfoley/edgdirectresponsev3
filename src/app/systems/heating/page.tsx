import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
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
