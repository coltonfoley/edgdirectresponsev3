import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
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
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Hurricane Rated Pergolas Sanibel Island | Louvered Roof Systems | EDG',
  description:
    'Premium motorized louvered roof systems for Sanibel & Captiva. Miami-Dade hurricane rated, coastal-grade aluminum, and sanctuary-compliant designs.',
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living/louvered-pergolas',
  },
};

const features = [
  {
    title: '160 MPH Wind Rated',
    description:
      "Engineered specifically for Southwest Florida's hurricane season with heavy-gauge extruded aluminum.",
    icon: Wind,
  },
  {
    title: 'Salt-Spray Resistant',
    description:
      "Specialized high-gloss powder coating prevents corrosion from the Gulf's harsh saline environment.",
    icon: ShieldCheck,
  },
  {
    title: 'Integrated Gutters',
    description:
      "Hidden drainage system handles Sanibel's heavy tropical downpours without ruining your patio.",
    icon: Layers,
  },
  {
    title: 'Variable Shade',
    description:
      'Louvered roofs that rotate 150°, allowing you to track the sun or block it entirely for cooling.',
    icon: Sun,
  },
];

export default function SanibelPergolaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <Section className="bg-edg-dark relative overflow-hidden pt-24 pb-16 text-white md:pt-32">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-30">
          <div className="from-edg-dark to-edg-dark absolute inset-0 z-10 bg-gradient-to-l via-transparent" />
          <Image
            src="/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg"
            alt="Hurricane-rated white pergola with integrated screens"
            fill
            className="object-cover"
          />
        </div>

        <Container className="relative z-20">
          <Link
            href="/service-areas/sanibel-outdoor-living"
            className="hover:text-edg-brand mb-8 inline-flex items-center text-sm text-gray-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Sanibel Service Area
          </Link>

          <div className="max-w-2xl">
            <div className="bg-edg-brand/10 border-edg-brand/20 text-edg-brand mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3 w-3" /> Premium Sanibel Systems
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              The Only Pergola <br />
              <span className="text-edg-brand">Built for Sanibel.</span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Our louvered roof systems aren't just "coastal-inspired"—they are
              Miami-Dade engineered to survive the Gulf's most intense storms.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact?area=sanibel&product=pergola&source=leads-sanibel-pergolas">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-10 font-bold"
                >
                  Request a Design Quote <ArrowRight className="ml-2 h-5 w-5" />
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
              Island-Ready Engineering
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't use standard residential grade materials. Every component
              is selected to withstand the specific challenges of living on
              Sanibel Island.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <feature.icon className="text-edg-brand mb-6 h-10 w-10" />
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
                src="/images/shades/shade-deployed-screens-01.jpg"
                alt="Motorized screens deployed for hurricane protection and privacy"
                fill
                className="object-cover"
              />
              <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">
                <h4 className="mb-1 font-bold italic">
                  "The Sanctuary Standard"
                </h4>
                <p className="text-sm opacity-80">
                  Our systems are designed to minimize vertical footprint while
                  maximizing shade efficiency.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl leading-tight font-bold md:text-5xl">
                Motorized Comfort, <br />
                Hurricane Protection.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Why Choose a Louvered Roof? Because Sanibel weather changes in
                seconds. Our automated sensors detect wind and rain, closing the
                louvers automatically to protect your furniture—even when you
                aren't home.
              </p>

              <ul className="space-y-4">
                {[
                  'Custom RAL Color Matching for any Sanibel home style',
                  'Optional integrated LED lighting and infrared heating',
                  'Professional installation by manufacturer-certified crews',
                  'Assistance with City of Sanibel permitting and HOAs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand mt-1 h-5 w-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/contact?area=sanibel&product=pergola&source=leads-sanibel-pergolas">
                  <Button className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-full px-10 py-6 text-lg font-bold">
                    Request a Design Quote
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
                Navigating Sanibel Zoning?
              </h3>
              <p className="text-muted-foreground mb-0">
                Before you build, ensure your project complies with Sanibel's
                latest impermeable coverage and hurricane codes. Read our
                comprehensive guide.
              </p>
            </div>
            <Link href="/service-areas/sanibel-outdoor-living#zoning">
              <Button
                variant="secondary"
                className="border-edg-brand text-edg-brand hover:bg-edg-brand rounded-full px-8 py-6 font-bold hover:text-white"
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
              "We were looking for a system that could handle extreme weather
              conditions. EDG walked us through the engineering and the results
              have been perfect through every storm."
            </blockquote>
            <div className="text-edg-brand text-lg font-bold">
              — Residential Client
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
