'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowLeft, ArrowRight, Eye, Palette, Wind, Crown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const reasons = [
  {
    icon: Eye,
    title: 'Unobstructed Views',
    description:
      'Standard pergola kits require posts every 10-12 feet. On a large Winnetka patio, that creates a "forest of columns." Our commercial-grade engineered beams can span 20-24 feet, keeping your sightlines to the garden or lake completely open.',
  },
  {
    icon: Palette,
    title: 'Historical Accuracy',
    description:
      'We don\'t do "shiny white plastic" looks. Our systems can be matte powder-coated to match limestone, dark bronze window frames, or slate roofing. We can add cornice details and columns that mimic classical architecture.',
  },
  {
    icon: Wind,
    title: 'Lakefront Wind Ratings',
    description:
      'Wind off Lake Michigan can be fierce. Lightweight awnings rip. Our systems are Miami-Dade hurricane rated. When the storm comes, the louvers lock together to form a solid, structured roof that withstands the gale.',
  },
];

export default function WinnetkaProductPage() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/service-areas/winnetka-il"
                className="text-edg-brand mb-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Winnetka
              </Link>
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold tracking-wider uppercase">
                <Crown className="h-3 w-3" /> Estate-Grade
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Estate-Grade Louvered Systems
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== REASONS ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl space-y-8">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="bg-edg-brand/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <reason.icon className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-xl font-bold">
                      {i + 1}. {reason.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-edg-dark mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                Design Consultation
              </h2>
              <p className="text-edg-dark/80 mb-6">
                We respect the privacy of our Winnetka clients. We are happy to
                arrange a private site walk to discuss your estate's needs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                >
                  Request Private Consult{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
