import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Wind,
  ShieldCheck,
  Sun,
  Layers,
  Phone,
  MapPin,
  CheckCircle2,
  Thermometer,
} from 'lucide-react';
import type { Metadata } from 'next';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Pergolas Barrington IL | Snow Load Rated Systems | EDG',
  description:
    'Custom motorized louvered roof systems for Barrington estates. Engineered for heavy snow loads, high winds, and architectural integration.',
  alternates: {
    canonical: '/service-areas/barrington-il/motorized-pergolas',
  },
};

const features = [
  {
    title: 'Heavy Snow Load Rated',
    description:
      'Engineered to withstand heavy Chicagoland winters. Closed louvers support significant snow accumulation without bowing.',
    icon: Layers,
  },
  {
    title: 'Estate Wind Resistance',
    description:
      'Built to handle the high wind shear often found on open estate properties in Barrington Hills.',
    icon: Wind,
  },
  {
    title: 'Architectural Color Match',
    description:
      "Custom powder coating to match your estate's trim, siding, or window mullions for a seamless addition.",
    icon: ShieldCheck,
  },
  {
    title: '4-Season Comfort',
    description:
      'optional heaters and motorized screens turn your pergola into a warm, protected haven even in late autumn.',
    icon: Thermometer,
  },
];

export default function BarringtonPergolaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <Section className="bg-edg-dark relative overflow-hidden pt-24 pb-16 text-white md:pt-32">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-30">
          <div className="from-edg-dark to-edg-dark absolute inset-0 z-10 bg-gradient-to-l via-transparent" />
          <Image
            src={images.pages.serviceAreas.barringtonPergola1}
            alt="Barrington Estate Pergola"
            fill
            className="object-cover"
          />
        </div>

        <Container className="relative z-20">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Barrington, IL', href: '/service-areas/barrington-il' },
              { label: 'Motorized Pergolas' },
            ]}
            className="mb-6"
          />

          <Link
            href="/service-areas/barrington-il"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Barrington
          </Link>

          <div className="max-w-2xl">
            <div className="bg-edg-brand/10 border-edg-brand/20 text-edg-brand-dark mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3 w-3" /> Estate-Grade Systems
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              The Only Pergola <br />
              <span className="text-edg-brand">Built for Chicago Winters.</span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Our louvered roof systems aren't just for shade—they are
              engineered to handle heavy snow loads and high winds, making them
              a true year-round addition to your estate.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact?area=barrington&product=pergola&source=leads-barrington-pergolas">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-10 font-bold"
                >
                  Request a Design Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/pergolas/configure">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/20 px-10 text-white hover:bg-white/10"
                >
                  Design in 3D <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/20 px-10 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> 815-581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Grid */}
      <Section className="bg-zinc-50 py-24 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Engineered for the Midwest
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't use light-gauge aluminum. Every component is selected to
              withstand the specific challenges of Barrington's climate, from
              heavy snow to summer storms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <feature.icon className="text-edg-brand-dark mb-6 h-10 w-10" />
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product Highlight / Visual */}
      <Section className="overflow-hidden border-b border-zinc-100 bg-white py-24 dark:border-zinc-900 dark:bg-black">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={images.pages.serviceAreas.barringtonPergola4}
                alt="Black R-Blade motorized louvered roof engineered for snow"
                fill
                className="object-cover"
              />
              <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">
                <h4 className="mb-1 font-bold italic">"Estate Integrated"</h4>
                <p className="text-sm opacity-80">
                  Designed to look like it was part of the original
                  architectural plan.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl leading-tight font-bold md:text-5xl">
                Motorized Luxury, <br />
                Year-Round Utility.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Why Choose a Louvered Roof? Because your outdoor season
                shouldn't end in September. With integrated heaters and screens,
                you can host Thanksgiving dinner on your patio.
              </p>

              <ul className="space-y-4">
                {[
                  'Custom Color Matching to Estate Architecture',
                  'Integrated Bromic or Infratech Heaters',
                  'Motorized Screens for Insect & Wind Control',
                  'Smart Home Integration (Lutron/Control4)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/contact?area=barrington&product=pergola&source=leads-barrington-pergolas">
                  <Button className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-10 py-6 text-lg font-bold">
                    Request a Design Proposal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Zoning Cross-Link */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white p-8 md:flex-row md:p-12 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold">
                Building in Barrington?
              </h3>
              <p className="text-muted-foreground mb-0">
                Ensure your pergola complies with the 50% impermeable coverage
                limit and accessory structure setbacks. Read our local guide.
              </p>
            </div>
            <Link href="/service-areas/barrington-il#zoning">
              <Button
                variant="secondary"
                className="border-edg-brand-dark text-edg-brand-dark hover:bg-edg-brand-dark rounded-full px-8 py-6 font-bold hover:text-white"
              >
                View Zoning Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Testimonial / Trust */}
      <Section className="bg-zinc-900 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="mb-8 text-2xl leading-relaxed font-light italic md:text-3xl">
              "The team understood exactly how to navigate our HOA and the
              Village permits. The result looks like it's always been part of
              the house."
            </blockquote>
            <div className="text-edg-brand-dark text-lg font-bold">
              — Barrington Hills Homeowner
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
