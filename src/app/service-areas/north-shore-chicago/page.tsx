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
  Landmark,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'North Shore Chicago Pergolas & Outdoor Living | Wilmette, Winnetka, Glencoe',
  description:
    "Premium motorized pergolas, exterior shades, and glass enclosures for Chicago's North Shore. Serving Wilmette, Winnetka, Glencoe, Kenilworth, Northbrook & Northfield.",
  alternates: {
    canonical: '/service-areas/north-shore-chicago',
  },
  openGraph: {
    title: 'North Shore Chicago | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for North Shore properties. Expert planning and professional installation.',
  },
};

const communities = [
  { name: 'Wilmette', note: '' },
  { name: 'Winnetka', note: '' },
  { name: 'Glencoe', note: '' },
  { name: 'Kenilworth', note: '' },
  { name: 'Northbrook', note: '' },
  { name: 'Northfield', note: '' },
  { name: 'Glenview', note: '' },
  { name: 'Skokie', note: '' },
  { name: 'Evanston', note: 'Historic districts' },
  { name: 'Morton Grove', note: '' },
  { name: 'Niles', note: '' },
  { name: 'Park Ridge', note: '' },
];

const localConsiderations = [
  {
    title: 'Permit Management',
    description:
      'Winnetka, Wilmette, Glencoe, and Kenilworth have specific zoning and permit requirements. We handle the entire application process, ensuring all documentation meets local village standards for a smooth approval.',
  },
  {
    title: 'Historic Properties',
    description:
      'Many North Shore homes have historic significance. We design systems that complement period architecture—not fight against it.',
  },
  {
    title: 'Premium Finishes',
    description:
      'North Shore properties demand attention to detail. We offer upgraded finishes, custom colors, and design elements that match the quality of your home.',
  },
  {
    title: 'Lake Michigan Proximity',
    description:
      'Properties close to the lake face salt air, higher winds, and humidity. We specify materials and coatings engineered for these conditions.',
  },
];

export default function NorthShorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - North Shore Chicago',
            description:
              "Premium motorized pergolas, exterior shades, and glass enclosures for Chicago's North Shore estates.",
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: [
              { '@type': 'City', name: 'Wilmette' },
              { '@type': 'City', name: 'Winnetka' },
              { '@type': 'City', name: 'Glencoe' },
              { '@type': 'City', name: 'Kenilworth' },
            ],
            url: 'https://www.edgpatioshade.com/service-areas/north-shore-chicago',
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
              className="hover:text-edg-brand-text dark:hover:text-edg-brand mb-8 inline-flex items-center text-sm text-gray-400 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
            </Link>
            <div className="max-w-4xl">
              <div className="bg-edg-brand/20 border-edg-brand/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                <MapPin className="text-edg-brand h-4 w-4" />
                <span className="text-edg-brand text-sm font-semibold tracking-wider uppercase">
                  Premium Market
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Chicago's North Shore Pergolas & Patio Systems
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Wilmette to Winnetka, Glencoe to Kenilworth. The North Shore's
                finest properties deserve outdoor living systems that match—in
                design, quality, and execution. We have the experience to
                deliver.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink href="/contact?area=north-shore">
                  <Button size="lg" className="rounded-full">
                    Get a North Shore Quote{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
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
              North Shore Communities We Serve
            </h2>
            <p className="text-edg-gray-text mx-auto mb-12 max-w-2xl text-center text-lg font-medium dark:text-gray-400">
              From lakefront estates to village neighborhoods, we serve the
              entire North Shore corridor.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="rounded-xl border border-black/5 bg-zinc-50 p-4 dark:border-white/5 dark:bg-zinc-900"
                >
                  <span className="font-medium">{community.name}</span>
                  {community.note && (
                    <span className="text-edg-brand-text dark:text-edg-brand mt-1 block text-xs font-bold">
                      {community.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Local Planning Expertise */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <Landmark className="h-12 w-12" />
                <h2 className="text-3xl font-bold md:text-4xl">
                  Local Planning Expertise
                </h2>
              </div>
              <p className="text-edg-dark/80 mb-8 text-xl">
                North Shore communities are known for their high standards. We
                don't just meet those standards—we handle the entire planning
                and permitting process to ensure your project is approved
                efficiently while protecting your design vision.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  'Full site assessment and feasibility review',
                  'Professional permit application management',
                  'Coordination with village building departments',
                  'Ensuring compliance with local zoning codes',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-edg-dark/10 flex items-center gap-3 rounded-lg px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Local Considerations */}
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              North Shore-Specific Considerations
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {localConsiderations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-edg-gray-text font-medium dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Systems */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Systems for North Shore Properties
            </h2>
            <p className="text-edg-gray-text mx-auto mb-12 max-w-2xl text-center text-lg font-medium dark:text-gray-400">
              Premium systems that complement the caliber of North Shore
              architecture.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Louvered Pergolas',
                  description:
                    'Clean architectural lines that integrate with traditional and contemporary homes. Full weather control without compromising design.',
                  href: '/systems/pergolas',
                  why: 'The most requested system on the North Shore',
                },
                {
                  name: 'Motorized Shades',
                  description:
                    'Solar protection that disappears when not needed. Ideal for porches, pool houses, and pergola enclosures.',
                  href: '/systems/shades',
                  why: 'Preserve lake views while managing sun and wind',
                },
                {
                  name: 'Glass Enclosures',
                  description:
                    "Extend your living space year-round. Frameless designs that don't obstruct your property's sightlines.",
                  href: '/systems/enclosures',
                  why: 'Popular for three-season rooms and pool areas',
                },
              ].map((system) => (
                <div
                  key={system.name}
                  className="rounded-2xl border border-black/5 bg-zinc-50 p-8 shadow-sm dark:border-white/5 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-xl font-bold">{system.name}</h3>
                  <p className="text-edg-gray-text mb-4 font-medium dark:text-gray-400">
                    {system.description}
                  </p>
                  <p className="text-edg-brand-text dark:text-edg-brand mb-6 text-sm font-bold">
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

        {/* Investment Guide */}
        <Section className="bg-zinc-50 py-20 dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Investment Guide
                </h2>
                <p className="text-muted-foreground text-lg">
                  We believe in transparency. Here are typical investment ranges
                  for North Shore projects, including design, engineering, and
                  installation.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-black">
                  <h3 className="mb-2 text-xl font-bold">Louvered Pergolas</h3>
                  <div className="text-edg-brand mb-4 text-3xl font-bold">
                    $35k - $85k+
                  </div>
                  <p className="text-edg-gray-text mb-4 text-sm dark:text-gray-400">
                    Range varies by size (e.g., 12x12 vs 20x20), amenities
                    (heaters, lights, screens), and wind-rating requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Full
                      motorized control
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />{' '}
                      Integrated LED lighting
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-black">
                  <h3 className="mb-2 text-xl font-bold">
                    Motorized Screen Projects
                  </h3>
                  <div className="text-edg-brand mb-4 text-3xl font-bold">
                    $8k - $25k+
                  </div>
                  <p className="text-edg-gray-text mb-4 text-sm dark:text-gray-400">
                    For existing porches or pergolas. Price depends on number of
                    openings, width of spans, and integration complexity.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 10+
                      year fabric warranty
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />{' '}
                      Smart home compatible
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mt-8 text-center text-sm">
                *Every project is unique. These are historical averages for the
                North Shore area.
              </p>
            </div>
          </Container>
        </Section>

        {/* Testimonial */}
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="mb-8 text-2xl leading-relaxed font-medium md:text-3xl">
                "EDG handled everything—the permits, the coordination, and the
                installation. Our pergola was approved and built without us
                having to manage a single detail."
              </blockquote>
              <div>
                <div className="text-lg font-bold">Homeowner</div>
                <div className="text-muted-foreground">
                  Winnetka, IL • Louvered Pergola + Shades
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-edg-dark py-20 text-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Elevate Your North Shore Property?
              </h2>
              <p className="mb-8 text-xl text-gray-300">
                Schedule a consultation. We'll assess your property, handle the
                local requirements, and show you what's possible.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <TrackedLink href="/contact?area=north-shore">
                  <Button size="lg" className="rounded-full">
                    Schedule Consultation{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
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
      </main>
    </>
  );
}
