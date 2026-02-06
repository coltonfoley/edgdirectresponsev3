'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  MapPin,
  ArrowRight,
  Home,
  ShieldCheck,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const localBenefits = [
  'Familiar with Village of Wilmette zoning codes',
  'Historic district experience',
  'North Shore-appropriate designs',
  'Licensed & insured for Cook County',
];

export default function WilmetteHubPage() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/images/pergolas/residential-white-r-blade-led-strip.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Wilmette, IL
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Upgrade Your Wilmette Home with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                From the brick streets of the Cage to the shores of Lake
                Michigan, we design engineered shade systems that respect
                Wilmette's architectural heritage.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Request Wilmette Site Visit{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL EXPERTISE ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== CLUSTER LINKS (SPOKES) ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Local Resources for Wilmette Homeowners
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {/* SPOKE 1: ZONING GUIDE */}
              <Link
                href="/service-areas/wilmette-il/zoning-guide"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <ShieldCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">
                  Wilmette Building & Zoning Guide
                </h3>
                <p className="text-muted-foreground mb-6">
                  Before you build, understand the "Impermeable Surface" limits
                  and setbacks specific to Wilmette village codes.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  Read the Guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* SPOKE 2: LOUVERED PERGOLAS */}
              <Link
                href="/service-areas/wilmette-il/louvered-pergolas"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <Home className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">
                  Louvered Pergolas in Wilmette
                </h3>
                <p className="text-muted-foreground mb-6">
                  Why aluminum louvered roofs are the preferred choice for North
                  Shore winters over traditional wood structures.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Start Your Wilmette Project?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation with our local design team.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                >
                  Schedule Free Consultation{' '}
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
