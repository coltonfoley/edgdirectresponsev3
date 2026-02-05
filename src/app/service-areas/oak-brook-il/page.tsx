import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  Home,
  Building2,
  TreePine,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oak Brook IL Pergolas & Estate Outdoor Living | EDG Patio',
  description:
    'Custom motorized pergolas, retractable shades, and glass enclosures for Oak Brook estates. Harmonizing with Tudor, Georgian, and Contemporary architecture.',
  alternates: {
    canonical: '/service-areas/oak-brook-il',
  },
  openGraph: {
    title: 'Oak Brook IL | Luxury Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for Oak Brook homeowners. Local expertise, professional installation.',
  },
};

const communities = [
  { name: 'Oak Brook', type: 'residential' },
  { name: 'Hinsdale', type: 'residential' },
  { name: 'Burr Ridge', type: 'residential' },
  { name: 'Clarendon Hills', type: 'residential' },
  { name: 'Elmhurst', type: 'residential' },
  { name: 'Villa Park', type: 'residential' },
];

const localConsiderations = [
  {
    title: 'Estate Architecture',
    description:
      'From Tudor Revival to Contemporary, we design systems that respect the architectural integrity of your Oak Brook estate.',
  },
  {
    title: 'Zoning Expertise',
    description:
      'We work directly with the Village of Oak Brook Development Services Department to navigate setbacks and impervious surface requirements.',
  },
  {
    title: 'Natural Settings',
    description:
      'Whether you overlook Salt Creek or the fairways, our glass systems protect your view while keeping the elements at bay.',
  },
];

export default function OakBrookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Oak Brook',
            description:
              'Customized motorized pergolas, retractable shades, and glass enclosures for Oak Brook estates.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Oak Brook',
            },
            url: 'https://www.edgpatioshade.com/service-areas/oak-brook-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg',
          }),
        }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        {/* Hero */}
        <Section className="relative flex min-h-[60vh] items-center overflow-hidden bg-black pt-32 pb-24">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0 opacity-60">
            <Image
              src="/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg"
              alt="Luxury estate pergola design"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>

          <Container className="relative z-10 text-white">
            <Link
              href="/service-areas"
              className="hover:text-edg-brand mb-8 inline-flex items-center text-sm text-gray-400 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
            </Link>
            <div className="max-w-4xl">
              <div className="bg-edg-brand/20 border-edg-brand/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
                <MapPin className="text-edg-brand h-4 w-4" />
                <span className="text-edg-brand text-sm font-semibold tracking-wider uppercase">
                  Serving Oak Brook & Hinsdale
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
                Oak Brook, Illinois Outdoor Living Environments
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-200">
                Refined outdoor living for the western suburbs. Motorized
                pergolas and glass systems that extend the season for Oak
                Brook's finest homes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=oak-brook">
                  <Button size="lg" className="rounded-full">
                    Get a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full border-white/30 text-white backdrop-blur-sm hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
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

        {/* Project Showcase (Mini Gallery) */}
        <Section className="overflow-hidden bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="mb-16 grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Enhance Your Estate
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
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png"
                  alt="Luxury outdoor dining setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="mb-8 text-2xl font-bold">Featured Design Styles</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative h-[300px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/pergolas/residential-white-pergola-pool-glass-doors-02.jpg"
                  alt="Poolside pergola installation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative h-[300px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/enclosures/glass-system-04.jpg"
                  alt="Glass enclosure sunroom project"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                Ready to Transform Your Oak Brook Home?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=oak-brook">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
