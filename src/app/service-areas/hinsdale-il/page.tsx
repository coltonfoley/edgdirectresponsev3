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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hinsdale IL Pergolas & Luxury Outdoor Living | EDG Patio',
  description:
    "Custom motorized pergolas, retractable shades, and glass enclosures for Hinsdale's premier estates. Local experts in Village of Hinsdale building codes and architectural standards.",
  alternates: {
    canonical: '/service-areas/hinsdale-il',
  },
  openGraph: {
    title: 'Hinsdale IL | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for Hinsdale homeowners. Dedicated local expertise and professional installation.',
  },
};

const communities = [
  { name: 'Downtown Hinsdale', type: 'residential' },
  { name: 'Southeast Hinsdale', type: 'residential' },
  { name: 'The Woodlands', type: 'residential' },
  { name: 'Fullersburg', type: 'residential' },
  { name: 'Golfview Hills', type: 'residential' },
  { name: 'Oak Brook (Adjacent)', type: 'residential' },
];

const localConsiderations = [
  {
    title: 'Architectural Heritage',
    description:
      "Whether you own a classic Tudor in the Robbins Park district or a modern estate in the Woodlands, we design custom systems that respect Hinsdale's rich architectural history.",
  },
  {
    title: 'Permit Expertise',
    description:
      'We are well-versed in the Village of Hinsdale Building & Zoning Department requirements, ensuring your pergola or glass enclosure meets all local codes and height restrictions.',
  },
  {
    title: 'Private Retreats',
    description:
      'Our motorized shades and glass systems provide the ultimate privacy and wind protection for tight-knit Hinsdale neighborhoods, creating a true outdoor sanctuary.',
  },
];

export default function HinsdalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Hinsdale',
            description:
              "Custom motorized pergolas, retractable shades, and glass enclosures for Hinsdale's premier estates.",
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Hinsdale',
            },
            url: 'https://www.edgpatioshade.com/service-areas/hinsdale-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-03.jpg',
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
                  Serving Hinsdale & The Western Suburbs
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Hinsdale, Illinois
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Engineered for excellence. Custom motorized pergolas and
                frameless glass systems designed to complement Hinsdale's most
                prestigious properties.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=hinsdale">
                  <Button size="lg" className="rounded-full">
                    Request a Design Consultation{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* Neighborhoods Grid */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Neighborhoods We Serve
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              Providing premium outdoor living solutions to the entire 60521 zip
              code and surrounding villages.
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
                  Why Hinsdale Homeowners Choose EDG
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/pergolas/residential-black-r-blade-03.jpg"
                  alt="Luxury motorized pergola in a setting similar to Hinsdale estates"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Hinsdale Backyard?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=hinsdale">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Start Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10 rounded-full"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
