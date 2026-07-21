import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Lightbulb,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Sun,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Motorized Pergolas in Lake Forest, IL | Louvered Roofs | EDG',
  description:
    'Custom motorized pergolas and louvered roof systems for Lake Forest, IL patios, terraces, pools, and outdoor kitchens. Permit-aware planning from EDG.',
  alternates: {
    canonical: '/service-areas/lake-forest-il/motorized-pergolas',
  },
  keywords: [
    'motorized pergola Lake Forest IL',
    'louvered pergola Lake Forest',
    'pergola builder Lake Forest IL',
    'pergola installer Lake Forest IL',
  ],
};

const features = [
  {
    title: 'Architectural shade and rain control',
    description:
      'Open the louvers for sun and airflow, close them for shade or light rain, and avoid the heavy look of a fixed patio cover.',
    icon: CloudRain,
  },
  {
    title: 'Screens for bugs, wind, and privacy',
    description:
      'Lake Forest patios near trees, ravines, and neighboring yards often need side protection as much as overhead shade.',
    icon: Wind,
  },
  {
    title: 'Built for Midwest snow and wind',
    description:
      'Extruded aluminum, drainage, engineered posts, electrical coordination, and proper anchoring matter in a permanent system.',
    icon: Snowflake,
  },
  {
    title: 'Lighting, heaters, and controls',
    description:
      'Plan the full outdoor room before construction so evenings, shoulder seasons, and everyday controls feel intentional.',
    icon: Lightbulb,
  },
];

const planningChecks = [
  'Measure the patio, house wall, doors, windows, rooflines, utilities, and drainage path.',
  'Review the survey, lot constraints, attachment conditions, and whether the system is freestanding or attached.',
  'Choose column locations, louver direction, finish, gutters, screen openings, and heater placement together.',
  'Coordinate electrical needs for motors, lights, heaters, sensors, wall switches, and smart-home controls.',
  'Prepare a proposal and design package that can support City, HOA, architect, or owner review.',
];

const faqs = [
  {
    question: 'Is a motorized pergola a good fit for Lake Forest homes?',
    answer:
      'Yes when the system is planned around the property. Lake Forest patios can have formal architecture, mature landscapes, wind exposure, wooded yards, and review expectations. A motorized pergola is strongest when roof, screens, lights, heaters, controls, and permit questions are solved together.',
  },
  {
    question: 'Can a louvered pergola be attached to my house?',
    answer:
      'Often, but the right answer depends on wall construction, rooflines, drainage, doors, windows, utilities, structure classification, and City review. Freestanding designs may be cleaner when attachment creates water, structure, or code complications.',
  },
  {
    question: 'Can EDG help with Lake Forest permits?',
    answer:
      'EDG can help organize the design details and documentation that affect review. The City of Lake Forest remains the final authority on permit requirements, zoning compliance, inspections, and approval.',
  },
  {
    question: 'What should I send before the first call?',
    answer:
      'Send wide photos of the patio and rear elevation, rough dimensions, address, any HOA or architect notes, and the main problem to solve: shade, rain, bugs, privacy, lighting, heat, or a full outdoor room.',
  },
];

export default function LakeForestMotorizedPergolasPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Motorized Pergolas in Lake Forest IL',
            description:
              'Custom motorized louvered pergola design and installation for Lake Forest, IL homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            serviceType: 'Motorized louvered pergola design and installation',
            areaServed: {
              '@type': 'City',
              name: 'Lake Forest',
              addressRegion: 'IL',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-forest-il/motorized-pergolas',
            image: `https://www.edgpatioshade.com${images.systems.pergolas.blackBladePool}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Section className="bg-edg-dark relative overflow-hidden pt-24 pb-16 text-white md:pt-32">
        <div className="absolute inset-0 opacity-35">
          <Image
            src={images.systems.pergolas.blackBladePool}
            alt="Motorized black louvered pergola over an outdoor dining patio"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              {
                label: 'Lake Forest, IL',
                href: '/service-areas/lake-forest-il',
              },
              { label: 'Motorized Pergolas' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/lake-forest-il"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lake Forest
          </Link>

          <div className="max-w-3xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Lake Forest pergola installer
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Motorized Pergolas in Lake Forest, IL
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-300">
              Louvered roof systems for Lake Forest patios, terraces, pool
              decks, and outdoor kitchens that need real shade, rain control,
              privacy, bug protection, heat, light, and a cleaner architectural
              fit.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?area=lake-forest&source=lake_forest_pergola_page">
                <Button size="lg" className="px-8">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white/40 bg-white/10 px-8 text-white hover:bg-white/20"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  815-581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Why louvered roofs fit Lake Forest
            </div>
            <h2 className="section-title mb-4">
              Built for patios that need to look permanent and perform daily
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A Lake Forest pergola cannot just be a catalog product. The best
              designs respect the home, landscape, review process, and the way
              the patio is actually used. EDG helps decide whether a wall mount,
              freestanding system, integrated screens, heaters, lighting, or a
              staged design is the smarter path.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} variant="muted" padding="lg">
                <feature.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Planning checklist
              </div>
              <h2 className="section-title mb-6">
                What we resolve before a Lake Forest pergola is ordered
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                The expensive mistakes usually happen before installation: wrong
                size, awkward posts, drainage conflicts, underplanned
                electrical, screens added too late, or a layout that does not
                fit the permit and review path. EDG narrows those questions
                before the quote becomes a commitment.
              </p>
              <Link href="/service-areas/lake-forest-il/zoning-guide">
                <Button variant="secondary">
                  Read Lake Forest Permit Notes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {planningChecks.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                  <p className="text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <Sun className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">West-facing terraces</h3>
              <p className="text-text-secondary leading-relaxed">
                Use louver direction, screen drops, and fabric openness to
                control late-day sun without making the patio feel closed in.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <Wind className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Wooded and windy lots</h3>
              <p className="text-text-secondary leading-relaxed">
                Pair the roof with side screens when insects, leaves, privacy,
                and gusts matter more than overhead shade alone.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Review expectations</h3>
              <p className="text-text-secondary leading-relaxed">
                Finish, scale, post placement, and documentation should be easy
                to understand for homeowners, architects, HOAs, and reviewers.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Lake Forest Motorized Pergola Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
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
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                See if a motorized pergola fits your Lake Forest patio.
              </h2>
              <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
                Send photos, dimensions, location, and what the space needs to
                do. EDG will help narrow the recommendation before you compare
                quotes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/guides/pergola-system-fit-review?area=lake-forest&source=lake_forest_pergola_bottom">
                  <Button size="lg">Request a Quote</Button>
                </Link>
                <Link href="/guides/pergola-cost">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Review Cost Guide
                  </Button>
                </Link>
              </div>
            </div>
            <div className="border-border-inverse hidden border-l pl-12 md:block">
              <ul className="text-text-inverse-muted space-y-4">
                {[
                  'Wall-mounted or freestanding layouts',
                  'Integrated screens and weather sensors',
                  'Lighting, heaters, and controls',
                  'Permit-aware planning package',
                  'Spring Grove showroom support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
