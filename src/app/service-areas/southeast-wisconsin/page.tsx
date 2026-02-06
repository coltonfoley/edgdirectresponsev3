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
  Waves,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Southeast Wisconsin Pergolas & Outdoor Living | Lake Geneva, Kenosha, Racine',
  description:
    'Motorized pergolas, exterior shades, and glass enclosures in Southeast Wisconsin. Serving Lake Geneva, Kenosha, Racine, Burlington, Delavan & Elkhorn. Professional design and installation.',
  alternates: {
    canonical: '/service-areas/southeast-wisconsin',
  },
  openGraph: {
    title: 'Southeast Wisconsin | Pergolas & Outdoor Living | EDG',
    description:
      'Premium outdoor living systems for Southeast Wisconsin homeowners. Lake Geneva area specialists.',
  },
};

const communities = [
  { name: 'Lake Geneva', highlight: true },
  { name: 'Kenosha' },
  { name: 'Racine' },
  { name: 'Burlington' },
  { name: 'Delavan', highlight: true },
  { name: 'Elkhorn' },
  { name: 'Williams Bay', highlight: true },
  { name: 'Fontana', highlight: true },
  { name: 'Twin Lakes' },
  { name: 'Pleasant Prairie' },
  { name: 'Somers' },
  { name: 'Union Grove' },
  { name: 'Waterford' },
  { name: 'East Troy' },
  { name: 'Mukwonago' },
  { name: 'Walworth' },
];

const localConsiderations = [
  {
    title: 'Lake Properties',
    description:
      'Geneva Lake, Delavan Lake, and the smaller lakes throughout the region have unique siting considerations. We design systems that maximize views and handle lakefront conditions.',
  },
  {
    title: 'Wisconsin Permitting',
    description:
      "Wisconsin municipalities have different requirements than Illinois. We're familiar with local building departments and know what's needed for approvals.",
  },
  {
    title: 'Resort & Second Homes',
    description:
      'Many Lake Geneva area properties are second homes. We coordinate schedules around your visits and can work with property managers when needed.',
  },
  {
    title: 'Heavier Snow Loads',
    description:
      "Southeast Wisconsin typically sees more snow than Chicago's North Shore. We engineer systems for actual Wisconsin snow load requirements.",
  },
];

export default function SoutheastWisconsinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Southeast Wisconsin',
            description:
              'Motorized pergolas, exterior shades, and glass enclosures in Southeast Wisconsin. Serving Lake Geneva, Kenosha, Racine, and resort communities.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: [
              { '@type': 'AdministrativeArea', name: 'Walworth County' },
              { '@type': 'AdministrativeArea', name: 'Kenosha County' },
              { '@type': 'AdministrativeArea', name: 'Racine County' },
            ],
            url: 'https://www.edgpatioshade.com/service-areas/southeast-wisconsin',
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
                  Wisconsin Service Area
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Southeast Wisconsin Outdoor Living Systems
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                Lake Geneva to Kenosha, Racine to Burlington. Southeast
                Wisconsin's lakefront properties and resort communities deserve
                outdoor living systems that extend the all-too-short summer
                season—and beyond.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?area=southeast-wisconsin">
                  <Button size="lg" className="rounded-full">
                    Get a Wisconsin Quote{' '}
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
              Southeast Wisconsin Communities We Serve
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              From the Geneva Lake communities to Kenosha and Racine—we serve
              all of Southeast Wisconsin.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className={`flex items-center gap-3 rounded-xl border p-4 ${
                    community.highlight
                      ? 'bg-edg-brand/10 border-edg-brand/20'
                      : 'border-black/5 bg-zinc-50 dark:border-white/5 dark:bg-zinc-900'
                  }`}
                >
                  <Waves className="text-edg-brand h-5 w-5 shrink-0" />
                  <span className="font-medium">{community.name}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-center text-sm">
              <span className="bg-edg-brand/20 mr-2 inline-block h-3 w-3 rounded" />
              Lake communities highlighted
            </p>
          </Container>
        </Section>

        {/* Lake Geneva Focus */}
        <Section className="bg-edg-brand text-edg-dark py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <Waves className="h-12 w-12" />
                <h2 className="text-3xl font-bold md:text-4xl">
                  Lake Geneva Area Specialists
                </h2>
              </div>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Geneva Lake, Delavan Lake, Fontana—the lake communities are
                where outdoor living matters most. We've completed numerous
                lakefront projects and understand the unique demands of these
                properties.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  'Maximize lake views from covered spaces',
                  'Handle lakefront wind and weather exposure',
                  'Work around boat house and dock areas',
                  'Coordinate with second-home schedules',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-edg-dark/10 flex items-center gap-3 rounded-lg px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{item}</span>
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
              Southeast Wisconsin Considerations
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {localConsiderations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-8 dark:bg-zinc-800"
                >
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Systems */}
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Popular Systems in Southeast Wisconsin
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              Systems that extend your Wisconsin outdoor season and protect
              against the elements.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Louvered Pergolas',
                  description:
                    'Full weather control for lakefront entertaining. Open for sun, close for rain, adjust for everything in between.',
                  href: '/systems/pergolas',
                  why: 'The #1 choice for lake properties',
                },
                {
                  name: 'Motorized Shades',
                  description:
                    'Wind and sun protection that retracts to preserve your view. Essential for exposed lakefront locations.',
                  href: '/systems/shades',
                  why: 'Perfect for lakefront wind protection',
                },
                {
                  name: 'Glass Enclosures',
                  description:
                    "Turn your three-season space into a four-season room. Enjoy lake views even in Wisconsin's colder months.",
                  href: '/systems/enclosures',
                  why: "Maximize your property's usable months",
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
                "Our Lake Geneva property needed a system that could handle the
                weather off the lake. EDG engineered a pergola that's held up
                through two Wisconsin winters without any issues."
              </blockquote>
              <div>
                <div className="text-lg font-bold">Homeowner</div>
                <div className="text-muted-foreground">
                  Lake Geneva, WI • Louvered Pergola + Shades
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
                Ready to Transform Your Wisconsin Property?
              </h2>
              <p className="mb-8 text-xl text-gray-300">
                Schedule a consultation. We'll visit your property and show you
                how to extend your outdoor season and protect against Wisconsin
                weather.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=southeast-wisconsin">
                  <Button size="lg" className="rounded-full">
                    Schedule Consultation{' '}
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
      </main>
    </>
  );
}
