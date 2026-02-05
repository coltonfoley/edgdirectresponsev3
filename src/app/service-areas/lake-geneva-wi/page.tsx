import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  Home,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lake Geneva WI Pergolas & Luxury Outdoor Living | EDG Patio',
  description:
    'Custom motorized pergolas, retractable shades, and glass enclosures for Lake Geneva, Williams Bay, and Fontana. Enhancing lakefront living with premium outdoor systems. Local experts.',
  alternates: {
    canonical: '/service-areas/lake-geneva-wi',
  },
  openGraph: {
    title: 'Lake Geneva WI | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for Lake Geneva area homeowners. Local expertise, professional installation.',
  },
};

const communities = [
  { name: 'Lake Geneva', type: 'residential' },
  { name: 'Williams Bay', type: 'residential' },
  { name: 'Fontana', type: 'residential' },
  { name: 'Walworth', type: 'residential' },
  { name: 'Linn', type: 'residential' },
  { name: 'Delavan', type: 'residential' },
];

const localConsiderations = [
  {
    title: 'Lakefront Protection',
    description:
      'We design systems specifically to handle the wind loads and bugs common to lakefront properties, ensuring your view remains unobstructed.',
  },
  {
    title: 'Seasonal Versatility',
    description:
      'Our motorized pergolas allow you to enjoy the summer breeze while providing instant protection from sudden lake showers.',
  },
  {
    title: 'Estate Integration',
    description:
      "Whether it's a historic lake home or a modern new build, our systems are designed to blend seamlessly with your architecture.",
  },
];

export default function LakeGenevaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Lake Geneva',
            description:
              'Custom motorized pergolas, retractable shades, and glass enclosures for Lake Geneva, Williams Bay, and Fontana.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Lake Geneva',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-geneva-wi',
            image: 'https://www.edgpatioshade.com/images/hero/pergola-hero.jpg',
          }),
        }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Hero */}
        <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
          <Container>
            <Link
              href="/service-areas"
              className="hover:text-edg-brand mb-8 inline-flex items-center text-sm text-gray-400 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
            </Link>
            <div className="max-w-4xl">
              <div className="bg-edg-brand/20 border-edg-brand/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <MapPin className="text-edg-brand h-4 w-4" />
                <span className="text-edg-brand text-sm font-semibold tracking-wider uppercase">
                  Serving The Lake Geneva Area
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Lake Geneva, Wisconsin Luxury Outdoor Living
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Experience the pinnacle of lakefront luxury. Custom motorized
                pergolas and glass systems designed for Lake Geneva's finest
                estates.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink href="/contact?area=lake-geneva">
                  <Button size="lg" className="rounded-full">
                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>
          </Container>
        </Section>

        {/* Communities Grid */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Neighborhoods We Serve
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              Serving Lake Geneva and surrounding lake communities.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-zinc-50 p-4 dark:border-white/5 dark:bg-zinc-900"
                >
                  <Home className="text-edg-brand h-5 w-5 shrink-0" />
                  <span className="font-medium">{community.name}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Local Considerations */}
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Why Lake Geneva Homeowners Choose EDG
                </h2>
                <div className="space-y-6">
                  {localConsiderations.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <CheckCircle2 className="text-edg-brand mt-1 h-6 w-6 shrink-0" />
                      <div>
                        <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Investment Guide */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Lake Geneva Project Investments
                </h2>
                <p className="text-muted-foreground text-lg">
                  Typical project ranges for lakefront properties, including
                  high-wind engineering and installation.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-900">
                  <h3 className="mb-2 text-xl font-bold">Lakeside Pergolas</h3>
                  <div className="text-edg-brand mb-4 text-3xl font-bold">
                    $45k - $100k+
                  </div>
                  <p className="text-edg-gray-text mb-4 text-sm dark:text-gray-400">
                    Includes heavy-duty engineering for open lake exposure.
                    Often includes heaters and multiple wind screens.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-900">
                  <h3 className="mb-2 text-xl font-bold">
                    Retractable Glass Walls
                  </h3>
                  <div className="text-edg-brand mb-4 text-3xl font-bold">
                    $1,500 - $3,000
                  </div>
                  <p className="text-edg-gray-text mb-4 text-sm dark:text-gray-400">
                    Per linear foot. Creates true 4-season utility for porches
                    and balconies.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Enhance Your Lake Home?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <TrackedLink href="/contact?area=lake-geneva">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Start Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10 rounded-full"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
