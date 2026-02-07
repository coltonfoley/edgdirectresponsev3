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
  Hotel,
  GlassWater,
  Umbrella,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Hospitality Outdoor Living | Restaurant & Hotel Pergolas',
  description:
    'Maximize your Chicago hospitality revenue with all-weather outdoor living systems. Custom pergolas and enclosures for restaurants, hotels, and clubs.',
  alternates: {
    canonical: '/commercial/chicago-hospitality-outdoor-living',
  },
  openGraph: {
    title: 'Chicago Hospitality Outdoor Living | EDG',
    description:
      'Turn your Chicago patio into a year-round profit center. Commercial pergolas and enclosures.',
  },
};

export default function ChicagoHospitalityPage() {
  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      {/* ========== HERO ========== */}
      <Section className="relative overflow-hidden pt-32 pb-24 md:pt-48">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luxury-restaurant-patio-enclosure.jpg"
            alt="Luxury Restaurant Patio Enclosure Chicago"
            className="h-full w-full object-cover opacity-20 dark:opacity-40"
          />
          <div className="to-edg-light absolute inset-0 bg-gradient-to-b from-white via-white/80 dark:from-black dark:via-black/80 dark:to-black" />
        </div>
        <Container className="relative z-10">
          <Link
            href="/commercial"
            className="text-edg-gray-text hover:text-edg-brand-text mb-8 inline-flex items-center text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Commercial
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Chicago&apos;s Premier{' '}
              <span className="text-edg-brand">Hospitality Outdoor Design</span>{' '}
              Experts.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              From the West Loop to the North Shore, we specialize in{' '}
              <strong>Restaurant Patio Design</strong> and high-ROI outdoor
              spaces for Chicago's top hotels and country clubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=commercial">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* ========== INDUSTRY SOLUIONS (SPOKES) ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Tailored Solutions for Your Venue
            </h2>
            <p className="text-muted-foreground text-lg">
              Every hospitality space has unique needs. Explore our specialized
              solutions designed for your specific business model.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Restaurant Only */}
            <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg transition-all hover:-translate-y-1 dark:border-white/5 dark:bg-zinc-800">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/luxury-restaurant-patio-enclosure.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10"></div>
              </div>
              <div className="p-8">
                <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                  <Utensils className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Restaurant Patios</h3>
                <p className="text-muted-foreground mb-6">
                  Maximize cover counts and eliminate reservation cancellations.
                  See how leading Chicago restaurants protect their revenue.
                </p>
                <Link
                  href="/commercial/restaurant-patio-enclosures"
                  className="text-edg-brand-text dark:text-edg-brand inline-flex items-center font-bold hover:underline"
                >
                  Restaurant Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Country Clubs */}
            <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg transition-all hover:-translate-y-1 dark:border-white/5 dark:bg-zinc-800">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/pergolas/pergola-hero.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10"></div>
              </div>
              <div className="p-8">
                <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                  <GlassWater className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Country Clubs</h3>
                <p className="text-muted-foreground mb-6">
                  Enhance member amenities with premium outdoor dining and event
                  spaces. Create the perfect 19th hole environment.
                </p>
                <Link
                  href="/commercial/country-club-outdoor-spaces"
                  className="text-edg-brand-text dark:text-edg-brand inline-flex items-center font-bold hover:underline"
                >
                  Club Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hotels */}
            <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg transition-all hover:-translate-y-1 dark:border-white/5 dark:bg-zinc-800">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/frameless-sliding-glass-walls.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10"></div>
              </div>
              <div className="p-8">
                <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                  <Hotel className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Hotels & Rooftops</h3>
                <p className="text-muted-foreground mb-6">
                  Transform underutilized rooftops and terraces into year-round
                  event venues and bars.
                </p>
                <Link
                  href="/commercial/hotel-roof-deck-systems"
                  className="text-edg-brand-text dark:text-edg-brand inline-flex items-center font-bold hover:underline"
                >
                  Hotel Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== LOCAL AUTHORITY ========== */}
      <Section className="bg-white py-24 dark:bg-black">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                We Understand Chicago Hospitality.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Operating a hospitality venue in Chicago is unique. We know the
                challenges of the &quot;patio season&quot; scramble, the unpredictable
                lake effect weather, and the strict City of Chicago and suburban
                building codes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">
                      Local Code Expertise
                    </h4>
                    <p className="text-muted-foreground">
                      We handle permitting for City of Chicago, North Shore, and
                      suburbs. We know what gets approved.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">
                      Midwest Weather Rated
                    </h4>
                    <p className="text-muted-foreground">
                      Our systems are engineered for Chicago winters (heavy snow
                      load) and severe storms (high wind rating).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">
                      Rapid, Low-Disruption Install
                    </h4>
                    <p className="text-muted-foreground">
                      We work around your service hours to get your new
                      revenue-generating space up and running fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
              {/* Placeholder for a map or local imagery */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/luxury-restaurant-patio-enclosure.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute right-0 bottom-0 left-0 p-10">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Serving the Greater Chicago Area
                </h3>
                <p className="text-gray-300">
                  Downtown • West Loop • North Shore • Lake Geneva
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
              Start Planning Your 4-Season Space
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Don&apos;t let another season of revenue wash away. Schedule a
              consultation with our commercial design team today.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=commercial">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Book Site Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
