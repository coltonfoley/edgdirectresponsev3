import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  CloudRain,
  BarChart3,
  ShieldCheck,
  Zap,
  Phone,
  Utensils,
  ChefHat,
  GlassWater,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Patio Enclosures Chicago | Commercial Covers & Shades',
  description:
    'Increase table covers by 30% with custom restaurant patio enclosures. Heavy-duty motorized pergolas and commercial patio covers for Chicago dining.',
  alternates: {
    canonical: '/commercial/restaurant-patio-enclosures',
  },
  openGraph: {
    title: 'Restaurant Patio Enclosures | EDG Commercial',
    description:
      'Turn your patio into a year-round profit center. Wind-rated commercial enclosures.',
  },
};

export default function RestaurantPatioPage() {
  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* ========== HERO ========== */}
      <Section className="relative overflow-hidden pt-32 pb-24 md:pt-48">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luxury-restaurant-patio-enclosure.jpg"
            alt="Commercial Restaurant Patio Enclosure"
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
              Restaurant Solutions
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              The ROI of a{' '}
              <span className="text-edg-brand">Commercial Patio Enclosure</span>{' '}
              is Measured in Weeks.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              Stop losing reservations to rain and wind. Our{' '}
              <strong>Restaurant Patio Covers</strong> and motorized shades turn
              your seasonal outdoor space into a 365-day revenue engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=commercial&product=restaurant">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-input hover:bg-accent hover:text-accent-foreground rounded-full px-8 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== PROBLEM / SOLUTION ========== */}
      <Section className="bg-zinc-950 py-20 text-white">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                "We used to close the patio when it looked like rain."
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Chicago weather is unpredictable. If you rely on umbrellas or
                simple awnings, you're losing money every time the forecast is
                "iffy."
              </p>
              <h3 className="mb-4 text-xl font-bold text-white">
                The EDG Commercial System:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      Motorized Louvered Roof:
                    </span>
                    <p className="text-sm text-gray-400">
                      Closes in 60 seconds to become completely waterproof.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      Integrated Heating:
                    </span>
                    <p className="text-sm text-gray-400">
                      Keep guests comfortable for 8-9 months of the year.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      Wind-Rated Screens:
                    </span>
                    <p className="text-sm text-gray-400">
                      Block the wind without blocking the view. Rated for
                      commercial use.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">
              <img
                src="/images/motorized-retractable-screens-patio.jpg"
                alt="Restaurant Patio Shades"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-8 bottom-8 left-8 rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-sm">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <BarChart3 className="text-edg-brand" /> Revenue Impact
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 uppercase">
                      Average Ticket (4-top)
                    </div>
                    <div className="text-2xl font-semibold">$200 - $400</div>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">
                      Lost Revenue (Fri/Sat Rainout)
                    </div>
                    <div className="text-2xl font-semibold text-red-500">
                      -$5,000 to -$15,000
                    </div>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">
                      EDG Solution
                    </div>
                    <div className="text-edg-brand text-3xl font-bold">
                      $0 Lost Revenue
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Pay for the system in one season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== KEYWORD RICH FEATURE BLOCK ========== */}
      <Section className="bg-white py-24 dark:bg-black">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Commercial Patio Enclosure Options
            </h2>
            <p className="text-muted-foreground text-lg">
              We design heavy-duty systems specifically for the demands of the
              restaurant industry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
              <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                <Utensils className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Restaurant Patio Covers
              </h3>
              <p className="text-muted-foreground mb-4">
                Fixed or motorized options. Our louvered covers provide
                ventilation on hot days and full rain protection on wet ones.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
              <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                <DollarSign className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Commercial Outdoor Shades
              </h3>
              <p className="text-muted-foreground mb-4">
                Heavy-duty zipper screens that hold up to commercial use. Reduce
                glare for diners and block wind for comfort.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
              <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                <ShieldCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Permitting & Compliance
              </h3>
              <p className="text-muted-foreground mb-4">
                We handle all Chicago permitting. We know the codes for
                "Restaurant Patio Design" and ensure full compliance.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Upgrade Your Patio?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Schedule a site visit. We'll give you a clear proposal with ROI
              projections for your specific cover count.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=commercial&product=restaurant">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Request Proposal <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
