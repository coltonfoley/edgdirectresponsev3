import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  Check,
  Hotel,
  CloudRain,
  GlassWater,
  ArrowRight,
  Star,
  TrendingUp,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hotel Rooftop Pergolas | Transform Weather-Dependent Revenue',
  description:
    'Unlock year-round revenue for hotel rooftops, pool decks, and event spaces with motorized louvered pergolas. ROI-focused solutions for Chicago hospitality.',
  alternates: {
    canonical: '/commercial/hotel-pergolas',
  },
};

const benefits = [
  {
    title: 'Revenue Per Seat',
    desc: 'Turn seasonal patios into year-round profit centers.',
  },
  {
    title: 'Event Reliability',
    desc: 'Never refund a wedding deposit due to rain again.',
  },
  {
    title: 'Guest Experience',
    desc: 'Luxury aesthetic that matches 5-star brand standards.',
  },
  {
    title: 'Zero Maintenance',
    desc: 'Commercial-grade powder coating requires no annual painting.',
  },
];

const stats = [
  { value: '40%', label: 'Lost Season', desc: 'to weather in Chicago' },
  {
    value: '$240k',
    label: 'Potential Loss',
    desc: 'per year in cancellations',
  },
  { value: '1 Season', label: 'Payback', desc: 'on system investment' },
];

export default function HotelPergolasPage() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <Building2 className="h-4 w-4" /> Hospitality Solutions
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Unlock Your Rooftop's
                <span className="text-edg-brand block">Revenue Potential</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Transform weather-dependent outdoor areas into reliable,
                year-round event spaces with motorized louvered pergolas.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Schedule Commercial Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-12">
        <Container>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="text-edg-brand mb-1 text-4xl font-bold md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="font-bold text-white">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== ROI SECTION ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-edg-brand-text dark:text-edg-brand mb-2 block text-sm font-bold tracking-wider uppercase">
                  The Problem We Solve
                </span>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  The "Rain-Out" Problem is{' '}
                  <span className="text-edg-brand-text dark:text-edg-brand">
                    Solved
                  </span>
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  In Chicago, you lose 30-40% of your prime patio season to
                  rain, wind, or excessive heat. A louvered roof system gives
                  you control. Close it to keep guests dry, open it to let the
                  stars in.
                </p>
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                        <Check className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{b.title}</h4>
                        <p className="text-muted-foreground">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ROI Calculator */}
              <div className="bg-edg-dark rounded-3xl p-8 text-white md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-edg-brand/20 flex h-10 w-10 items-center justify-center rounded-full">
                    <TrendingUp className="text-edg-brand h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">
                    ROI Calculator: Wedding Venue
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Avg. Wedding Booking</span>
                    <span className="text-lg font-bold">$30,000</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Rainy Weekends / Year</span>
                    <span className="text-lg font-bold">8</span>
                  </div>
                  <div className="flex justify-between border-b border-red-500/20 pb-3 text-red-400">
                    <span>Potential Lost Revenue</span>
                    <span className="text-lg font-bold">-$240,000</span>
                  </div>
                  <div className="bg-edg-brand/10 border-edg-brand/20 mt-4 rounded-xl border p-4">
                    <p className="text-edg-brand text-center font-medium">
                      <Star className="mr-1 inline h-4 w-4 fill-current" />A
                      single season of saved events pays for the entire system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== USE CASES ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Designed for Hospitality
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Hotel className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Rooftop Bars</h3>
                <p className="text-muted-foreground">
                  Manage wind loads on high-rises while keeping the view open
                  and the experience premium.
                </p>
              </div>
              <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <CloudRain className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Event Spaces</h3>
                <p className="text-muted-foreground">
                  Integrated gutters manage heavy downpours effortlessly. Never
                  cancel an event again.
                </p>
              </div>
              <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <GlassWater className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Pool Decks</h3>
                <p className="text-muted-foreground">
                  Create premium cabanas with automated louvers for perfect sun
                  control.
                </p>
              </div>
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
                Ready to Maximize Your Outdoor Revenue?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a commercial consultation and ROI analysis for your
                property.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                  >
                    Schedule Consultation{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/commercial/restaurant-patio-solutions">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-edg-dark hover:bg-edg-dark/10 rounded-full px-8 text-lg"
                  >
                    Restaurant Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
