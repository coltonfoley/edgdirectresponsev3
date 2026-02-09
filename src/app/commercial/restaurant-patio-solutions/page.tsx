import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  Check,
  ChefHat,
  Leaf,
  Building2,
  Snowflake,
  ArrowRight,
  Star,
  Utensils,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Patio Solutions | Four-Season Outdoor Dining',
  description:
    'Turn weather-dependent patios into year-round profit centers. Add 30% more capacity with fully enclosed, heated outdoor dining spaces for Chicago restaurants.',
  alternates: {
    canonical: '/commercial/restaurant-patio-solutions',
  },
};

const features = [
  { icon: Snowflake, label: 'Snow Load Rated', color: 'text-blue-500' },
  { icon: Building2, label: 'City Permit Ready', color: 'text-gray-500' },
  { icon: Leaf, label: 'Energy Efficient', color: 'text-green-500' },
  {
    icon: ChefHat,
    label: 'Happy Staff',
    color: 'text-edg-brand-dark dark:text-edg-brand',
  },
];

export default function RestaurantPatioPage() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <Utensils className="h-4 w-4" /> Restaurant Solutions
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Four-Season
                <span className="text-edg-brand-dark block">Dining Revenue</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Don't let Chicago weather dictate your profits. Add 30% more
                capacity with fully enclosed, heated outdoor dining spaces.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Get a Commercial Proposal{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span className="text-edg-brand-dark dark:text-edg-brand mb-2 block text-sm font-bold tracking-wider uppercase">
                  The Problem We Solve
                </span>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  From "Weather Permitting" to{' '}
                  <span className="text-edg-brand-dark dark:text-edg-brand">
                    "Always Open"
                  </span>
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Every rainy Friday night costs you thousands in lost covers.
                  Our systems aren't just umbrellas; they are engineered
                  structures that seal out rain, wind, and snow, keeping your
                  guests (and their food) warm.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-800">
                        <f.icon className={`h-5 w-5 ${f.color}`} />
                      </div>
                      <span className="font-medium">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-edg-dark relative overflow-hidden rounded-3xl p-8 text-white md:p-10">
                <div className="bg-edg-brand text-edg-dark absolute top-0 right-0 flex items-center gap-1 rounded-bl-lg px-3 py-1 text-xs font-bold">
                  <Star className="h-3 w-3 fill-current" /> Case Study
                </div>
                <Quote className="text-edg-brand/30 mb-4 h-8 w-8" />
                <h3 className="mb-4 text-2xl font-bold">
                  West Loop Italian Concept
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-300 italic">
                  "We added 40 seats with the EDG system. It paid for itself in
                  4 months during the winter season alone. Guests actually
                  request the 'outdoor' tables now."
                </p>
                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <span className="text-edg-brand block text-4xl font-bold">
                      40
                    </span>
                    <span className="text-sm text-gray-400">
                      New Seats Added
                    </span>
                  </div>
                  <div>
                    <span className="text-edg-brand block text-4xl font-bold">
                      4mo
                    </span>
                    <span className="text-sm text-gray-400">ROI Payback</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== SOLUTIONS GRID ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Tailored for Restaurants
              </h2>
              <p className="text-muted-foreground text-lg">
                We know the hospitality industry. Fast installs, durable
                materials, and designs that impress.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="mb-4 text-2xl font-bold">Retractable Roofs</h3>
                <p className="text-muted-foreground mb-6">
                  Best for maximizing "al fresco" vibes. The roof completely
                  retracts to open the sky on perfect days.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="bg-edg-brand/10 flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="text-edg-brand-dark dark:text-edg-brand h-3 w-3" />
                    </div>
                    100% Sky visibility
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="bg-edg-brand/10 flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="text-edg-brand-dark dark:text-edg-brand h-3 w-3" />
                    </div>
                    Integrated water drainage
                  </li>
                </ul>
              </div>

              <div className="hover:border-edg-brand/30 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="mb-4 text-2xl font-bold">Louvered Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Best for precise control. Tilt louvers to block blinding
                  sunset glare while keeping airflow moving.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="bg-edg-brand/10 flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="text-edg-brand-dark dark:text-edg-brand h-3 w-3" />
                    </div>
                    Bioclimatic cooling
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="bg-edg-brand/10 flex h-6 w-6 items-center justify-center rounded-full">
                      <Check className="text-edg-brand-dark dark:text-edg-brand h-3 w-3" />
                    </div>
                    Heavy snow load capacity
                  </li>
                </ul>
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
                Let's Calculate Your ROI
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                See how quickly a four-season patio pays for itself.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                  >
                    Request Site Visit <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/commercial/hotel-pergolas">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-edg-dark hover:bg-edg-dark/10 rounded-full px-8 text-lg"
                  >
                    Hotel Solutions
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
