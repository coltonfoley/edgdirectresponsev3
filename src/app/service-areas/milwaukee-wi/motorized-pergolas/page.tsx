import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CloudRain,
  Lightbulb,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
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
  title: 'Milwaukee Pergola Installer | Motorized Louvered Roofs | EDG',
  description:
    'Motorized pergolas and louvered roof systems for Milwaukee, WI patios and outdoor spaces. Plan for shade, rain, wind, screens, lighting, and permits.',
  alternates: {
    canonical: '/service-areas/milwaukee-wi/motorized-pergolas',
  },
  keywords: [
    'motorized pergola Milwaukee WI',
    'louvered pergola Milwaukee',
    'Milwaukee pergola builder',
    'Milwaukee pergola installer',
    'louvered roof Milwaukee WI',
  ],
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Pergolas in Milwaukee, WI | EDG Patio & Shade',
    description:
      'Louvered roof planning for Milwaukee patios, yards, and roof-adjacent outdoor spaces.',
  },
};

const features = [
  {
    title: 'Adjustable shade and airflow',
    description:
      'Open the louvers for daylight and ventilation, then adjust them as the sun angle changes. This is a stronger fit than a fixed shade structure when the patio needs flexibility through the day.',
    icon: Sun,
  },
  {
    title: 'Rain planning, not just a roof',
    description:
      'A louvered roof should be designed with gutters, downspout locations, adjacent doors and windows, patio slope, and the path water takes after it leaves the system.',
    icon: CloudRain,
  },
  {
    title: 'Wind, privacy, and insect control',
    description:
      'Retractable screens can improve comfort, but they need a clean headbox, track path, power plan, and operating clearance. Plan them with the pergola instead of making them a late add-on.',
    icon: Wind,
  },
  {
    title: 'Lighting, heat, and controls',
    description:
      'Integrated lighting and heat can extend how a patio is used. The electrical package, switches, remotes, sensors, and future service access belong in the early design decisions.',
    icon: Lightbulb,
  },
];

const planningSteps = [
  {
    title: 'Start with the patio and property',
    description:
      'We review the layout, rough dimensions, exposure, doors, windows, utilities, drainage, and the outcome that matters most. The goal may be shade, rain protection, privacy, bug control, evening use, or a full outdoor room.',
  },
  {
    title: 'Choose the right structural approach',
    description:
      'Freestanding and attached pergolas solve different problems. Attachment can affect the house, roof line, siding, drainage, and review path. A freestanding plan can be smarter when it preserves flexibility or avoids structural complications.',
  },
  {
    title: 'Coordinate the complete system',
    description:
      'Louver direction, post locations, gutters, screens, lights, heaters, controls, and finish selections are coordinated before the system is ordered so the completed space feels deliberate and usable.',
  },
  {
    title: 'Verify the local review path',
    description:
      'For Milwaukee city addresses, confirm the project’s current zoning and permit questions with the City before construction. The exact address, structure, coverage, attachment, and electrical work can change what needs review.',
  },
];

const faqs = [
  {
    question: 'How much does a motorized pergola cost in Milwaukee?',
    answer:
      'The price depends on size, configuration, site conditions, finish, screens, lighting, heaters, controls, engineering, electrical work, and the review path. Request a quote to start establishing a useful range before a detailed design is finalized.',
  },
  {
    question: 'Can a louvered pergola handle Milwaukee weather?',
    answer:
      'A system should be selected and engineered around its actual installation conditions, including span, mounting, wind exposure, drainage, snow considerations, and the property itself. The right answer is a site-specific recommendation, not a generic claim that every system fits every location.',
  },
  {
    question: 'Should I attach the pergola to my house?',
    answer:
      'Sometimes, but not automatically. House attachment can affect water management, siding, roof lines, doors, windows, structure, and permit review. A freestanding design may be preferable when it creates a cleaner, lower-risk layout.',
  },
  {
    question: 'Can motorized screens be added to a Milwaukee pergola?',
    answer:
      'Yes, when the system is designed for them. The review should cover the opening sizes, track and headbox space, power, control locations, wind management, view priorities, and how the screens will be used alongside the louvers.',
  },
  {
    question: 'Do I need to check Milwaukee permits before requesting a quote?',
    answer:
      'You do not need every answer before the first conversation, but do share the address and any condo, HOA, or building requirements early. EDG can help identify the questions to bring to the City; the City remains the final authority on the applicable requirements.',
  },
];

const topContactHref = buildContactHref({
  type: 'fit-review',
  product: 'pergola',
  location: 'Milwaukee, WI',
  source: 'milwaukee_pergola_top',
});

const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'pergola',
  location: 'Milwaukee, WI',
  source: 'milwaukee_pergola_bottom',
});

export default function MilwaukeeMotorizedPergolasPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Motorized Pergolas in Milwaukee, WI',
            description:
              'Motorized louvered pergola design and installation for Milwaukee, Wisconsin homes.',
            provider: { '@id': 'https://www.edgpatioshade.com/#organization' },
            serviceType: 'Motorized louvered pergola design and installation',
            areaServed: {
              '@type': 'City',
              name: 'Milwaukee',
              addressRegion: 'WI',
            },
            url: 'https://www.edgpatioshade.com/service-areas/milwaukee-wi/motorized-pergolas',
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
            alt="Black motorized louvered pergola over a patio dining area"
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
              { label: 'Milwaukee, WI', href: '/service-areas/milwaukee-wi' },
              { label: 'Motorized Pergolas' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/milwaukee-wi"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Milwaukee
          </Link>
          <div className="max-w-3xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" /> Milwaukee pergola installer
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Motorized Pergolas in Milwaukee, WI
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-300">
              Louvered roof systems for Milwaukee patios and outdoor spaces that
              need adaptable shade, rain control, privacy, bug protection,
              lighting, heat, and a stronger architectural fit than a basic wood
              pergola.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={topContactHref}>
                <Button size="lg" className="px-8">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white/40 bg-white/10 px-8 text-white hover:bg-white/20"
                >
                  <Phone className="mr-2 h-5 w-5" /> 815-581-0138
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
              Why louvered roofs fit Milwaukee
            </div>
            <h2 className="section-title mb-4">
              A better response to changing patio conditions
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A fixed cover can create welcome shade, but it cannot adapt to a
              cooler morning, direct afternoon sun, a light rain, or a patio
              that wants more air. A motorized louvered roof gives the space
              more control when the product, structure, drainage, screens, and
              accessories are designed as one outdoor-room system.
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
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.pergolas.whiteScreen}
                alt="Motorized pergola with a side screen over an outdoor space"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                A complete patio plan
              </div>
              <h2 className="section-title mb-6">
                Do not solve one problem and create three more
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  A good Milwaukee pergola plan asks what happens when the
                  louvers are closed, where water goes, how side screens
                  operate, whether the patio still has a clear path to the yard,
                  and how the structure relates to the house. Those questions
                  are why a premium outdoor space should be planned before it is
                  ordered.
                </p>
                <p>
                  The project should also work after sunset and through changing
                  seasons. Integrated lighting, heat, switches, remote controls,
                  and electrical routing are easier to coordinate when they are
                  part of the design. Adding them later can constrain the clean
                  look and useful operation of the system.
                </p>
                <p>
                  EDG is system-agnostic: the recommendation should be based on
                  the site, desired performance, aesthetic, and long-term
                  service needs—not on forcing every property into one brand or
                  configuration.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Planning process</div>
            <h2 className="section-title mb-4">
              How a Milwaukee pergola project gets clearer
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Clear early decisions keep the layout, product choice, review
              path, and installation scope aligned. This is the work that turns
              a pergola quote into an outdoor-room plan.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {planningSteps.map((step, index) => (
              <Card key={step.title} variant="default" padding="lg">
                <span className="text-edg-brand-text mb-4 block text-xs font-bold tracking-[0.2em] uppercase">
                  Step {index + 1}
                </span>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
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
                Milwaukee permit planning
              </div>
              <h2 className="section-title mb-6">
                Bring the City into the process before permanent work begins
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Public zoning guidance distinguishes between types of accessory
                structures, and a project can be affected by its coverage,
                structure, electrical scope, and location. We do not promise a
                permit result from a website page. Instead, we help make the
                design questions clear enough to take to the correct City
                resource.
              </p>
            </div>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-4 text-xl font-bold">
                Use the official City resources
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Review the exact address and scope with Milwaukee’s Development
                Center and zoning resources. Our guide includes official links,
                current contact information, a practical checklist, and the
                questions to resolve before a final system is ordered.
              </p>
              <Link href="/service-areas/milwaukee-wi/zoning-guide">
                <Button variant="secondary">
                  Open Milwaukee Permit Guide{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Milwaukee motorized-pergola questions
              </h2>
            </div>
            <div className="space-y-5">
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Get the Milwaukee patio plan right before the order.
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              Share photos, rough dimensions, and the address. EDG can help
              assess the structure, shade, screen, drainage, electrical, and
              planning questions that lead to a more useful motorized pergola.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={bottomContactHref}>
                <Button size="lg">Request a Quote</Button>
              </Link>
              <Link href="/service-areas/milwaukee-wi">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Back to Milwaukee Planning
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
