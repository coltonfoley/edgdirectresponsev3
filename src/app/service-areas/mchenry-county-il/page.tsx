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
  TreeDeciduous,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'McHenry County IL Pergolas & Outdoor Living | Crystal Lake, Algonquin, Woodstock',
  description:
    'Motorized pergolas, exterior shades, and glass enclosures in McHenry County Illinois. Serving Crystal Lake, Algonquin, Woodstock, Huntley, McHenry & Cary. Professional design and installation.',
  alternates: {
    canonical: '/service-areas/mchenry-county-il',
  },
  openGraph: {
    title: 'McHenry County IL | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for McHenry County homeowners. Local expertise, professional installation.',
  },
};

const communities = [
  { name: 'Crystal Lake' },
  { name: 'Algonquin' },
  { name: 'Woodstock' },
  { name: 'Huntley' },
  { name: 'McHenry' },
  { name: 'Cary' },
  { name: 'Lake in the Hills' },
  { name: 'Marengo' },
  { name: 'Harvard' },
  { name: 'Richmond' },
  { name: 'Spring Grove' },
  { name: 'Fox River Grove' },
  { name: 'Island Lake' },
  { name: 'Lakemoor' },
  { name: 'Johnsburg' },
  { name: 'Bull Valley' },
];

const localConsiderations = [
  {
    title: 'Larger Properties',
    description:
      'McHenry County lots tend to be bigger than closer-in suburbs. We design systems scaled appropriately—not undersized installations that look out of place.',
  },
  {
    title: 'Rural & Semi-Rural Settings',
    description:
      'Many properties have agricultural neighbors or open views. We position systems to maximize enjoyment while respecting the character of your setting.',
  },
  {
    title: 'Varied Municipal Requirements',
    description:
      'From Crystal Lake to Bull Valley, each municipality has different permit processes. We know the local requirements and handle submissions accordingly.',
  },
  {
    title: 'Weather Exposure',
    description:
      'Without the density of closer-in suburbs, McHenry County properties often face more wind exposure. We engineer systems for real conditions.',
  },
];

export default function McHenryCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - McHenry County',
            description:
              'Motorized pergolas, exterior shades, and glass enclosures in McHenry County Illinois. Serving Crystal Lake, Algonquin, Woodstock, and our home town of Spring Grove.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'McHenry County',
            },
            url: 'https://www.edgpatioshade.com/service-areas/mchenry-county-il',
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
                  Northwest Suburbs
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                McHenry County, Illinois
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Crystal Lake to Algonquin, Woodstock to Huntley. McHenry
                County's larger lots and more open settings create opportunities
                for outdoor living spaces that aren't possible in denser
                suburbs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=mchenry-county">
                  <Button size="lg" className="rounded-full">
                    Get a McHenry County Quote{' '}
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
              McHenry County Communities We Serve
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              From the Chain O'Lakes to the Woodstock square—we serve all of
              McHenry County.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-zinc-50 p-4 dark:border-white/5 dark:bg-zinc-900"
                >
                  <TreeDeciduous className="text-edg-brand h-5 w-5 shrink-0" />
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
                  McHenry County Considerations
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  McHenry County is different from Lake County or the North
                  Shore. We adjust our approach accordingly.
                </p>
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
              <div className="bg-edg-dark rounded-2xl p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Our Spring Grove Location
                </h3>
                <p className="mb-6 text-gray-300">
                  We're based in Spring Grove—right in McHenry County. That
                  means shorter travel times, faster response, and genuine
                  familiarity with the area.
                </p>
                <p className="text-gray-300">
                  We're not driving an hour to reach you. We're neighbors.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Systems */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Popular Systems in McHenry County
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              Systems that make the most of McHenry County's outdoor lifestyle.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Louvered Pergolas',
                  description:
                    'Create defined outdoor rooms on larger properties. Full weather control lets you use your space regardless of conditions.',
                  href: '/systems/pergolas',
                  why: "Scale to fit McHenry County's larger lots",
                },
                {
                  name: 'Motorized Shades',
                  description:
                    'Wind protection for exposed properties. Retract fully when you want open views of your acreage.',
                  href: '/systems/shades',
                  why: 'Essential for wind-exposed properties',
                },
                {
                  name: 'Glass Enclosures',
                  description:
                    'Extend your season dramatically. Perfect for properties where you want to enjoy views year-round.',
                  href: '/systems/enclosures',
                  why: 'Maximize your investment through all seasons',
                },
              ].map((system) => (
                <div
                  key={system.name}
                  className="rounded-2xl border border-black/5 bg-zinc-50 p-8 dark:border-white/5 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-xl font-bold">{system.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {system.description}
                  </p>
                  <p className="text-edg-brand mb-6 text-sm font-medium">
                    → {system.why}
                  </p>
                  <Link href={system.href}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full rounded-lg"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Testimonial */}
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="mb-8 text-2xl leading-relaxed font-medium md:text-3xl">
                "We have five acres and wanted an outdoor space that felt
                proportional. EDG designed a pergola system that actually fits
                our property—not a suburban cookie-cutter solution."
              </blockquote>
              <div>
                <div className="text-lg font-bold">Homeowner</div>
                <div className="text-muted-foreground">
                  Bull Valley, IL • Louvered Pergola
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
                Ready to Transform Your McHenry County Property?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Schedule a consultation. We'll visit your property and show you
                what's possible for your outdoor space.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=mchenry-county">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Schedule Consultation{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
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
