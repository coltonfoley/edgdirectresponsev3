import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  GlassWater,
  Trophy,
  Users,
  Sun,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Country Club Patio Covers & Outdoor Spaces | Chicago Commercial Shades',
  description:
    'Upgrade your country club amenities with premium patio covers. Create deeper member engagement with shaded dining, pool decks, and event spaces.',
  alternates: {
    canonical: '/commercial/country-club-outdoor-spaces',
  },
  openGraph: {
    title: 'Country Club Outdoor Spaces | EDG Commercial',
    description:
      'Premium shade and shelter for discerning members. Country club patio covers.',
  },
};

export default function CountryClubPage() {
  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* ========== HERO ========== */}
      <Section className="relative overflow-hidden pt-32 pb-24 md:pt-48">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pergolas/pergola-lifestyle.jpg"
            alt="Country Club Outdoor Dining"
            className="h-full w-full object-cover opacity-20 dark:opacity-40"
          />
          <div className="to-edg-light absolute inset-0 bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 dark:to-black" />
        </div>
        <Container className="relative z-10">
          <Link
            href="/commercial/chicago-hospitality-outdoor-living"
            className="text-edg-gray-text hover:text-edg-brand-text mb-8 inline-flex items-center text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hospitality Overview
          </Link>
          <div className="max-w-4xl">
            <p className="text-edg-brand-text mb-4 text-sm font-semibold tracking-wider uppercase">
              Club & Member Amenities
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Elevate Member Experience with{' '}
              <span className="text-edg-brand">Country Club Patio Covers</span>.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              From the 19th hole to the pool deck, provide the premium comfort
              your members expect. Shade, shelter, and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=commercial&product=club">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Discuss Club Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== AMENITY AREAS ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                The 19th Hole & Dining Terrace
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Members want to linger after a round, but not if they're baking
                in the sun. Our <strong>Commercial Patio Enclosures</strong>{' '}
                allow you to host events and dining in any weather.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-edg-brand h-5 w-5" />
                  <span>Expand event capacity without new construction</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-edg-brand h-5 w-5" />
                  <span>Protect wedding bookings from rain</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Pool Deck & Cabanas</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Upgrade your poolside experience with motorized commercial
                outdoor shades that give members control over their environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-edg-brand h-5 w-5" />
                  <span>UV protection for families</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-edg-brand h-5 w-5" />
                  <span>Premium cabana aesthetic</span>
                </li>
              </ul>
            </div>
            <div className="relative mt-12 h-[400px] overflow-hidden rounded-3xl md:col-span-2">
              <img
                src="/images/pergolas/pergola-pool-spa.jpg"
                alt="Country Club Pool Deck Pergola"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-8 bottom-8 left-8 text-white">
                <p className="mb-2 text-sm font-bold tracking-widest uppercase">
                  Member Amenities
                </p>
                <h3 className="text-3xl font-bold">Resort-Style Pool Decks</h3>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Plan Your 2026 Club Improvements
            </h2>
            <TrackedLink href="/contact?type=commercial&product=club">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
