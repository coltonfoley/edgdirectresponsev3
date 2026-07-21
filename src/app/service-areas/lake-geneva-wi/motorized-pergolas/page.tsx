import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CloudRain,
  Eye,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Waves,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Motorized Pergolas in Lake Geneva, WI | Louvered Roofs | EDG',
  description:
    'Motorized louvered pergolas for Lake Geneva, Fontana, and Williams Bay patios. Plan shade, rain control, lake wind, views, screens, and permit review.',
  alternates: {
    canonical: '/service-areas/lake-geneva-wi/motorized-pergolas',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Lake Geneva Motorized Pergolas & Louvered Roofs | EDG',
    description:
      'Louvered roof planning for Lake Geneva area homes, lakefront patios, pool decks, and outdoor entertaining spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized pergolas Lake Geneva WI',
    'louvered roof Lake Geneva',
    'Lake Geneva patio covers',
    'pergola contractor Lake Geneva WI',
    'Fontana louvered pergola',
    'Williams Bay pergola installer',
  ],
};

const localFits = [
  {
    icon: Waves,
    title: 'Lakefront view protection',
    description:
      'The structure should improve comfort without blocking the water, pool, lawn, or dock view that makes the property valuable.',
  },
  {
    icon: Wind,
    title: 'Open-water wind planning',
    description:
      'Lake exposure can change the right louver direction, post layout, screen strategy, drainage path, and control package.',
  },
  {
    icon: CloudRain,
    title: 'Shade and light rain control',
    description:
      'Adjustable louvers help a patio handle bright sun, quick weather shifts, and dinner plans that should not end after the first drizzle.',
  },
  {
    icon: Snowflake,
    title: 'Wisconsin winter reality',
    description:
      'Snow, freeze-thaw cycles, electrical access, drainage, and off-season maintenance need to be planned before the pergola is ordered.',
  },
];

const planningSteps = [
  'Start with the address, survey, photos, and whether the property is in Lake Geneva, Fontana, Williams Bay, or unincorporated Walworth County.',
  'Map the patio, house wall, doors, windows, lake view, pool or dock relationship, and guest flow before choosing a structure size.',
  'Decide whether the better fit is attached, freestanding, poolside, deck-mounted, or phased with screens and heaters later.',
  'Plan louver direction, drainage, post placement, screen pockets, lighting, heaters, power, switches, remotes, sensors, and service access together.',
  'Prepare a permit-aware package with drawings, product information, finish notes, and the right local review path for the address.',
];

const localScenarios = [
  {
    title: 'Geneva Lake and lakefront properties',
    description:
      'Large patios, lake views, pool decks, and guest weekends need a pergola that feels polished from the house and calm enough to use when wind shifts across the water.',
  },
  {
    title: 'Fontana entertaining spaces',
    description:
      'Fontana homes often need a structure that protects outdoor dining while staying light on the view. We plan posts, louvers, and optional screens around sightlines first.',
  },
  {
    title: 'Williams Bay and bay-facing patios',
    description:
      'A covered outdoor room can help with glare, bugs, and shoulder-season comfort, but the design should still feel open to the yard, trees, and bay.',
  },
  {
    title: 'Delavan, Como, and Walworth County homes',
    description:
      'Not every Lake Geneva area project is a shoreline estate. Inland lake homes, subdivisions, and rural lots can need more privacy, wind protection, or a defined gathering zone.',
  },
];

const faqs = [
  {
    question: 'Is a louvered pergola a better fit than a fixed patio cover?',
    answer:
      'Usually, if the Lake Geneva patio needs flexibility. A fixed patio cover is always covered. A motorized louvered roof can open for sun and airflow, close for shade or light rain, and pair with screens, heaters, lighting, and controls when the space needs to work more often.',
  },
  {
    question: 'Can a motorized pergola handle Lake Geneva wind?',
    answer:
      'The answer depends on the exact exposure, mounting conditions, structure size, product selection, and whether screens are part of the design. We review open-water wind, house protection, post placement, louver direction, and controls before recommending a system.',
  },
  {
    question: 'Do Lake Geneva pergolas need permits?',
    answer:
      'Permanent structures commonly need local review, but the path can change by address, municipality, attachment method, lake proximity, HOA, and project scope. Lake Geneva, Fontana, Williams Bay, and Walworth County should be checked before the design is treated as final.',
  },
  {
    question: 'What should I send before a first review?',
    answer:
      'Send wide photos of the patio and house, rough dimensions, the project address, survey or plat if you have it, and notes on the main comfort problem: shade, rain, bugs, wind, privacy, view protection, or guest entertaining.',
  },
  {
    question: 'Can screens be added to the pergola later?',
    answer:
      'Sometimes, but the cleanest result comes from planning screens early. Track locations, side clearances, electrical routing, headbox visibility, and wind behavior can all affect whether screens integrate neatly later.',
  },
];

const heroContactHref = buildContactHref({
  type: 'price',
  product: 'pergola',
  location: 'Lake Geneva, WI',
  source: 'lake_geneva_pergola_hero',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'pergola',
  location: 'Lake Geneva, WI',
  source: 'lake_geneva_pergola_bottom',
});

export default function LakeGenevaMotorizedPergolasPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Motorized Pergolas in Lake Geneva, WI',
            description:
              'Custom motorized louvered pergola planning and installation for Lake Geneva, Fontana, Williams Bay, and nearby Walworth County homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            serviceType: 'Motorized louvered pergola design and installation',
            areaServed: [
              { '@type': 'City', name: 'Lake Geneva', addressRegion: 'WI' },
              {
                '@type': 'City',
                name: 'Fontana-on-Geneva Lake',
                addressRegion: 'WI',
              },
              { '@type': 'City', name: 'Williams Bay', addressRegion: 'WI' },
              { '@type': 'AdministrativeArea', name: 'Walworth County' },
            ],
            url: 'https://www.edgpatioshade.com/service-areas/lake-geneva-wi/motorized-pergolas',
            image: `https://www.edgpatioshade.com${images.systems.pergolas.whiteLedStrip}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[62vh] items-center overflow-hidden pt-24 pb-16 text-white md:pt-32">
        <div className="absolute inset-0">
          <Image
            src={images.systems.pergolas.whiteLedStrip}
            alt="White motorized louvered pergola with integrated LED lighting"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              {
                label: 'Lake Geneva, WI',
                href: '/service-areas/lake-geneva-wi',
              },
              { label: 'Motorized Pergolas' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/lake-geneva-wi"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lake Geneva
          </Link>

          <div className="max-w-4xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Lake Geneva louvered roof planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Motorized Pergolas in Lake Geneva, WI
            </h1>
            <p className="text-text-inverse-muted mb-10 max-w-3xl text-xl leading-relaxed md:text-2xl">
              Louvered roof systems for Lake Geneva patios that need adjustable
              shade, light rain control, lake-wind planning, view protection,
              and a polished outdoor-room feel for weekends on the water.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button size="lg" variant="outline" className="px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  815-581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Why louvered roofs fit Lake Geneva
            </div>
            <h2 className="section-title mb-4">
              The patio needs to work when the lake changes the weather
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Lake Geneva outdoor rooms are often asked to do a lot at once:
              host guests, protect a dining table, stay open to the view, handle
              quick weather changes, and look appropriate on a lake home. A
              motorized pergola is strongest when the roof, screens, drainage,
              lighting, heaters, and controls are planned as one system instead
              of a catalog structure dropped onto the patio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {localFits.map((fit) => (
              <Card key={fit.title} variant="muted" padding="lg">
                <fit.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{fit.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {fit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="border-border relative aspect-[4/3] overflow-hidden border">
              <Image
                src={images.systems.pergolas.blackBladePool}
                alt="Motorized louvered pergola over a poolside outdoor dining space"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                Lake-home system design
              </div>
              <h2 className="section-title mb-6">
                Start with the view, then solve the comfort problems
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  A covered outdoor room can make a Lake Geneva home better, or
                  it can accidentally make the patio feel boxed in. The first
                  design question is not the pergola size. It is what the space
                  needs to preserve: the lake view, the pool connection, the
                  walking path to the grill, the doors from the house, or the
                  way guests move between the patio and yard.
                </p>
                <p>
                  After that, the system can be planned honestly. Louvers solve
                  overhead sun and light rain. Screens solve bugs, privacy,
                  glare, and side wind. Heaters and lighting extend dinner into
                  cooler evenings. The structure only works if those decisions
                  are coordinated before the quote is treated as final.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Local project types
              </div>
              <h2 className="section-title mb-6">
                Different Lake Geneva addresses need different pergola plans
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A Geneva Lake estate, a Fontana entertaining patio, a Williams
                Bay porch, and a rural Walworth County backyard can all search
                for the same product. They should not receive the same layout.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {localScenarios.map((scenario) => (
                <Card key={scenario.title} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{scenario.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {scenario.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Pergola planning sequence
              </div>
              <h2 className="section-title mb-6">
                What EDG reviews before a Lake Geneva quote
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                The goal is to avoid a pretty pergola that fails the real
                project: blocked views, awkward posts, messy power, weak wind
                comfort, permit surprises, or screens that cannot be added
                cleanly later.
              </p>
              <Link href="/service-areas/lake-geneva-wi/zoning-guide">
                <Button variant="secondary">
                  Review Permit Planning Notes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {planningSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 border border-zinc-200 bg-white p-5"
                >
                  <div className="bg-edg-brand text-edg-dark flex h-9 w-9 shrink-0 items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-text-secondary leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Lake Geneva Pergola Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-surface-dark text-text-inverse py-24">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to review a Lake Geneva pergola layout?
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                Send photos, rough dimensions, the project address, and what
                needs to improve first: shade, rain, bugs, wind, privacy, or
                guest entertaining.
              </p>
              <Link href={bottomContactHref}>
                <Button size="lg">Request a Quote</Button>
              </Link>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="text-text-inverse-muted space-y-4">
                <h4 className="text-lg font-bold tracking-wide uppercase">
                  Keep exploring
                </h4>
                <Link
                  href="/service-areas/lake-geneva-wi"
                  className="flex items-center gap-3"
                >
                  <MapPin className="text-edg-brand h-4 w-4" />
                  Back to Lake Geneva service area
                </Link>
                <Link
                  href="/service-areas/lake-geneva-wi/retractable-screens"
                  className="flex items-center gap-3"
                >
                  <Eye className="text-edg-brand h-4 w-4" />
                  Lake Geneva motorized screens
                </Link>
                <Link
                  href="/service-areas/lake-geneva-wi/zoning-guide"
                  className="flex items-center gap-3"
                >
                  <FileText className="text-edg-brand h-4 w-4" />
                  Lake Geneva permit planning guide
                </Link>
                <Link
                  href="/systems/pergolas"
                  className="flex items-center gap-3"
                >
                  <ShieldCheck className="text-edg-brand h-4 w-4" />
                  Full louvered pergola system details
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
