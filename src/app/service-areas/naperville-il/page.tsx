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
  Shield,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naperville IL Pergolas & Outdoor Living | EDG Patio',
  description:
    "Custom motorized pergolas, retractable shades, and glass enclosures for Naperville, IL. Enhance your patio with EDG's premium outdoor living systems. Local experts.",
  alternates: {
    canonical: '/service-areas/naperville-il',
  },
  openGraph: {
    title: 'Naperville IL | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for Naperville homeowners. Local expertise, professional installation.',
  },
};

const communities = [
  { name: 'Naperville', type: 'residential' },
  { name: 'Lisle', type: 'residential' },
  { name: 'Woodridge', type: 'residential' },
  { name: 'Bolingbrook', type: 'residential' },
  { name: 'Warrenville', type: 'residential' },
  { name: 'Aurora', type: 'mixed' },
];

const localConsiderations = [
  {
    title: 'Wind & Snow Load',
    description:
      'Naperville winters can be harsh. Our systems are engineered to withstand heavy snow loads and high winds common in DuPage County.',
  },
  {
    title: 'HOA Compliance',
    description:
      'Many Naperville neighborhoods have strict HOA guidelines. We provide detailed renderings and specs to help you get approval quickly.',
  },
  {
    title: 'Suburban Privacy',
    description:
      'Maximize your backyard privacy from neighbors with our motorized screens and louvered walls.',
  },
];

export default function NapervillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Systems - Naperville',
            description:
              'Customized motorized pergolas, retractable shades, and glass enclosures. Professional installation in Naperville and DuPage County.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Naperville',
            },
            url: 'https://www.edgpatioshade.com/service-areas/naperville-il',
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
                  Serving DuPage & Will Counties
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Naperville, Illinois Pergolas & Outdoor Living
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Transform your backyard into a year-round retreat. Premium
                motorized pergolas and glass systems designed for Naperville
                homes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=naperville">
                  <Button size="lg" className="rounded-full">
                    Get a Naperville Quote{' '}
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

        {/* Communities Grid */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Neighborhoods We Serve
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              From Downtown Naperville to Ashbury and beyond.
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
                  Why Choose EDG in Naperville?
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

        {/* Content Cluster Links */}
        <Section className="border-t border-zinc-200 bg-zinc-50 py-20 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-3xl font-bold">Building in Naperville</h2>
            <div className="mx-auto grid max-w-4xl gap-8 text-left md:grid-cols-2">
              <Link
                href="/service-areas/naperville-il/zoning-guide"
                className="group hover:border-edg-brand rounded-3xl border border-zinc-200 bg-white p-8 transition-all dark:border-zinc-800 dark:bg-black"
              >
                <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Shield className="text-edg-brand h-6 w-6" />
                </div>
                <h3 className="group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Naperville Zoning Guide
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Everything you need to know about setbacks, lot coverage, and
                  permit requirements for Naperville accessory structures.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold">
                  Read Global Guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/service-areas/naperville-il/motorized-pergolas"
                className="group hover:border-edg-brand rounded-3xl border border-zinc-200 bg-white p-8 transition-all dark:border-zinc-800 dark:bg-black"
              >
                <div className="bg-edg-brand/10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Home className="text-edg-brand h-6 w-6" />
                </div>
                <h3 className="group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Motorized Pergolas
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Explore louvered roof systems engineered for Naperville's
                  specific suburban climate and aesthetics.
                </p>
                <span className="flex items-center gap-2 text-sm font-bold">
                  View Systems <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Upgrade Your Naperville Outdoor Space?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=naperville">
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
