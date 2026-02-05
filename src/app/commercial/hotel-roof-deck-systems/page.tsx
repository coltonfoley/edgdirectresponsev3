import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Hotel,
  Waves,
  Wind,
  ShieldCheck,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Patio Shading & Roof Deck Systems | Chicago Hospitality',
  description:
    'Activate your hotel rooftop or terrace. Commercial outdoor shades and heavy-duty pergolas designed for high-wind hotel environments.',
  alternates: {
    canonical: '/commercial/hotel-roof-deck-systems',
  },
  openGraph: {
    title: 'Hotel Patio Shading | EDG Commercial',
    description:
      'Chicago hotel outdoor amenities. Wind-rated protection for guests.',
  },
};

export default function HotelPage() {
  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* ========== HERO ========== */}
      <Section className="relative overflow-hidden pt-32 pb-24 md:pt-48">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/frameless-sliding-glass-walls.jpg"
            alt="Hotel Rooftop Glass Enclosure"
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
              Hotel & Resort Solutions
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Premium{' '}
              <span className="text-edg-brand">Hotel Patio Shading</span> &
              Rooftop Systems.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              Create memorable guest experiences on rooftops, terraces, and pool
              decks. Wind-rated systems built for the Chicago skyline.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=commercial&product=hotel">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Hotel Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FEATURES ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 dark:bg-zinc-800">
              <Wind className="text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">High Wind Ratings</h3>
              <p className="text-muted-foreground">
                Rooftops in Chicago face extreme wind loads. Our{' '}
                <strong>Commercial Outdoor Shades</strong> and pergolas are
                engineered to withstand these forces without consistent noise or
                damage.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 dark:bg-zinc-800">
              <Waves className="text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Pool Deck Comfort</h3>
              <p className="text-muted-foreground">
                Offer guests refuge from the sun. Automated systems can track
                the sun or be controlled by staff to optimize comfort throughout
                the day.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 dark:bg-zinc-800">
              <ShieldCheck className="text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Commercial Durability</h3>
              <p className="text-muted-foreground">
                Low maintenance aluminum construction means no rust, no
                painting, and minimal downtime for your engineering team.
              </p>
            </div>
          </div>

          <div className="relative mt-16 h-[500px] overflow-hidden rounded-3xl">
            <img
              src="/images/shades/shade-deployed-screens-01.jpg"
              alt="Hotel Terrace Amenities"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div className="max-w-2xl">
                <h3 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                  Activate Every Square Foot
                </h3>
                <p className="text-xl text-gray-200">
                  Turn your hotel terrace into a premium revenue generator, day
                  or night, rain or shine.
                </p>
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
              Upgrade Your Guest Experience
            </h2>
            <TrackedLink href="/contact?type=commercial&product=hotel">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
