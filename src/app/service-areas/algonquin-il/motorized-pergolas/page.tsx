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
  title: 'Motorized Pergolas in Algonquin, IL | Louvered Roofs | EDG',
  description:
    'Custom motorized pergolas and louvered roof systems for Algonquin, IL patios. Built for Fox River Valley weather, permits, privacy, bugs, and outdoor entertaining.',
  alternates: {
    canonical: '/service-areas/algonquin-il/motorized-pergolas',
  },
  keywords: [
    'motorized pergola Algonquin IL',
    'louvered pergola Algonquin',
    'pergola builder Algonquin IL',
    'pergola installer Algonquin IL',
  ],
};

const features = [
  {
    title: 'Adjustable shade and rain control',
    description:
      'Open the louvers for airflow, close them for shade or light rain, and stop relying on a fixed cover that only works in one season.',
    icon: CloudRain,
  },
  {
    title: 'Screens for bugs and privacy',
    description:
      'Algonquin patios near the Fox River, mature trees, and close side yards often need side protection as much as overhead shade.',
    icon: Wind,
  },
  {
    title: 'Built for Midwest snow and wind',
    description:
      'Extruded aluminum, engineered posts, drainage planning, and proper footings matter more here than catalog pergola photos.',
    icon: Snowflake,
  },
  {
    title: 'Lighting, heaters, and controls',
    description:
      'Make the space usable after dinner, in shoulder seasons, and when the weather shifts without warning.',
    icon: Lightbulb,
  },
];

const planningSteps = [
  'Measure the patio, house wall, doors, windows, rooflines, and drainage path.',
  'Check property lines, easements, rear-yard placement, and likely permit requirements.',
  'Choose freestanding or attached structure, column locations, louver direction, and finish.',
  'Plan screens, heaters, lighting, switches, app control, sensors, and electrical access together.',
  'Prepare the proposal, drawings, permit support, fabrication order, and installation schedule.',
];

const faqs = [
  {
    question: 'Is a motorized pergola overkill for Algonquin?',
    answer:
      'Not if you want the patio to work in more than perfect weather. A basic pergola gives partial shade. A motorized louvered roof can manage sun, rain, lighting, bugs, privacy, and shoulder-season comfort when planned as a full system.',
  },
  {
    question: 'Can a louvered pergola be attached to my house?',
    answer:
      'Often, but the right answer depends on the house structure, siding, roofline, drainage, doors, windows, utilities, and local permit review. Freestanding designs can be smarter when attachment would create water, structural, or code complications.',
  },
  {
    question: 'Can you help with Algonquin permits?',
    answer:
      'Yes. Algonquin asks for a building permit application, plat of survey, plans, rear-yard placement, setbacks from property lines, easement review, adequate foundation or piers, and inspections for many permanent pergolas. We help build the design package around those realities.',
  },
  {
    question: 'What should I send before a first call?',
    answer:
      'Send wide photos of the patio and back of the house, rough dimensions, your address, any HOA rules, and a short note on what problem matters most: shade, rain, bugs, privacy, lighting, heat, or a full outdoor room.',
  },
];

export default function AlgonquinMotorizedPergolasPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Motorized Pergolas in Algonquin IL',
            description:
              'Custom motorized louvered pergola design and installation for Algonquin, IL homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            serviceType: 'Motorized louvered pergola design and installation',
            areaServed: {
              '@type': 'City',
              name: 'Algonquin',
              addressRegion: 'IL',
            },
            url: 'https://www.edgpatioshade.com/service-areas/algonquin-il/motorized-pergolas',
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
              { label: 'Algonquin, IL', href: '/service-areas/algonquin-il' },
              { label: 'Motorized Pergolas' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/algonquin-il"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Algonquin
          </Link>

          <div className="max-w-3xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Algonquin pergola installer
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Motorized Pergolas in Algonquin, IL
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-300">
              Louvered roof systems for Algonquin patios that need real shade,
              rain control, privacy, bug protection, lighting, heaters, and a
              cleaner architectural fit than a basic wood pergola.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?area=algonquin&source=algonquin_pergola_page">
                <Button size="lg" className="px-8">
                  Request a System Fit Review
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
              Why louvered roofs fit Algonquin
            </div>
            <h2 className="section-title mb-4">
              Built for the way Fox River Valley patios are used
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Algonquin outdoor spaces are not one-problem patios. A west-facing
              Randall Road backyard may need late-day shade. A Fox River area
              lot may need bug control and wind protection. A newer subdivision
              patio may need privacy and a finish package that passes HOA
              review. A motorized pergola works because the roof, screens,
              heaters, lights, drainage, and controls can be planned as one
              system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} variant="muted" padding="lg">
                <feature.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={images.systems.pergolas.whiteLedStrip}
                alt="White motorized pergola with integrated LED lighting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                Pergola system design
              </div>
              <h2 className="section-title mb-6">
                A full outdoor room, not a single product
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  The strongest Algonquin pergola projects start by defining the
                  job the patio needs to do. A simple shade frame may look good
                  in a photo, but it will not solve bugs, sideways rain, low
                  evening sun, chilly fall nights, or privacy from a second
                  story next door.
                </p>
                <p>
                  EDG plans the structure as an outdoor room. That means louver
                  direction, gutters, downspout locations, post placement,
                  screens, heaters, lighting, switches, remotes, sensors, and
                  service access all get considered before the project is
                  ordered.
                </p>
                <p>
                  This is also how we protect the look of the home. Finish
                  choices can match window trim, siding, fascia, or other
                  exterior elements so the pergola looks intentional rather than
                  like a kit dropped on the patio.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <div className="label-editorial-brand mb-4">Planning process</div>
              <h2 className="section-title mb-6">
                How we scope an Algonquin pergola
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Before we talk about exact price, we need to know what the site
                allows and what the space needs to do. That keeps the proposal
                practical and prevents a pretty rendering from turning into a
                permit or installation problem later.
              </p>
              <Link href="/service-areas/algonquin-il/zoning-guide">
                <Button variant="secondary">
                  Review the local permit guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {planningSteps.map((step, index) => (
                <Card key={step} variant="muted" padding="lg">
                  <div className="flex gap-4">
                    <div className="bg-edg-brand text-edg-dark flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {step}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Specs and options</div>
            <h2 className="section-title">What can be included</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              'Freestanding or attached louvered roof configurations',
              'Custom dimensions, post locations, finish colors, and trim coordination',
              'Integrated drainage with planned downspout locations',
              'Motorized side screens for bugs, privacy, wind, and low sun',
              'LED lighting, heaters, fan planning, sensors, remotes, and app controls',
              'Permit drawings, HOA-friendly visuals, and installation coordination',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                <p className="text-text-secondary text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/service-areas/algonquin-il/retractable-screens"
              className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              Need side protection first? Review Algonquin motorized screens.
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Algonquin pergola FAQ
              </div>
              <h2 className="section-title">Questions before you price it</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Sun className="text-edg-brand mx-auto mb-5 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Price the pergola that actually fits your Algonquin patio
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              We will help you decide whether the first move is a budget range,
              site visit, permit review, or full design proposal.
            </p>
            <Link href="/guides/pergola-system-fit-review?area=algonquin&source=algonquin_pergola_bottom">
              <Button size="lg">
                Start the System Fit Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
