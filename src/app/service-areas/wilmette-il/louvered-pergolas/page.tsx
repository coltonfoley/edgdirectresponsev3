'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowLeft,
  ArrowRight,
  CloudSun,
  Palette,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const reasons = [
  {
    icon: CloudSun,
    title: 'Lake Michigan Weather',
    description:
      "Wilmette sits right on the lake. That means sudden temperature drops and strong winds. A static wooden pergola doesn't help you when the wind shifts off the water. A louvered roof lets you seal the space instantly.",
  },
  {
    icon: Palette,
    title: 'Architectural Matching',
    description:
      'Whether you have a classic red brick colonial near the lake or a stucco home, our systems can be powder coated to match your trim or window mullions perfectly. It looks like it was built with the house, not tacked on.',
  },
  {
    icon: TrendingUp,
    title: 'Property Value',
    description:
      'In high-value markets like Wilmette, "usable square footage" is king. By creating a true four-season outdoor room, you are effectively adding living space that appraises higher than a standard deck.',
  },
];

export default function WilmetteProductPage() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/service-areas/wilmette-il"
                className="text-edg-brand mb-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Wilmette
              </Link>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold tracking-wider text-white uppercase">
                <MapPin className="h-3 w-3" /> Wilmette, IL
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Why Wilmette Homeowners Choose Louvered Roofs
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
                See a Project Near You
              </h2>
              <p className="text-edg-dark/80 mb-6">
                We have installed systems throughout the North Shore. Ask to see
                our portfolio of Wilmette projects during your consultation.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                >
                  Schedule Design Consult{' '}
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
