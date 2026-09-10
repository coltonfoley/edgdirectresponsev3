import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  CloudRain,
  Fan,
  Lightbulb,
  Move,
  PanelTop,
  UtensilsCrossed,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton, buttonClassName } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { buildContactHref } from '@/lib/contact-links';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergolas over Outdoor Kitchens | EDG Patio & Shade',
  description:
    'Plan an outdoor kitchen under a pergola with EDG. We coordinate the roof, appliances, ventilation, utilities, screens, lighting, drainage, and local installation.',
  alternates: {
    canonical: '/guides/outdoor-kitchen-pergola',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Pergolas over Outdoor Kitchens | EDG Patio & Shade',
    description:
      'EDG designs outdoor kitchens and motorized pergolas as one comfortable, serviceable room.',
  },
};

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'pergola',
  source: 'outdoor_kitchen_pergola_hero',
});

const layoutZones = [
  {
    title: 'Cooking zone',
    description:
      'EDG starts with the grill, burners, oven, sink, refrigeration, prep space, and the way each door or lid opens. The cook should have a clear working path without a post, screen, or chair in the way.',
    icon: ChefHat,
  },
  {
    title: 'Dining and serving zone',
    description:
      'We place the table, bar, or counter seating where guests can connect without crowding the cook. That keeps food, conversation, and the route to the house moving naturally.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Circulation and edge zone',
    description:
      'Posts, screens, doors, stairs, pool edges, and service access all shape the room. EDG protects those paths before the roof and finish locations are finalized.',
    icon: Move,
  },
];

const roofChecks = [
  {
    title: 'Roof and appliance fit',
    description:
      'EDG chooses the roof and cooking equipment as a pair, accounting for the appliance type, fuel, roof construction, surrounding materials, and how the room will be used.',
    icon: PanelTop,
  },
  {
    title: 'Heat and working room',
    description:
      'We plan space for open lids, doors, rotisseries, prep, serving, maintenance, and the clearances required by the selected equipment and local requirements.',
    icon: ChefHat,
  },
  {
    title: 'Airflow and ventilation',
    description:
      'EDG keeps the cooking side and required openings working as intended. Screens can improve comfort, but the cooking and ventilation plan comes first.',
    icon: Wind,
  },
  {
    title: 'Utilities and service access',
    description:
      'Gas, propane, electric, water, shutoffs, access panels, and future service all need a place in the layout before the finishes go in.',
    icon: Wrench,
  },
];

const utilityChecks = [
  {
    title: 'Lighting',
    description:
      'Task lighting at counters and softer light over dining make the room easier to use. EDG coordinates fixtures, controls, and roof framing so the cook is not working in glare.',
    icon: Lightbulb,
  },
  {
    title: 'Power, gas, and water',
    description:
      'We plan appliance circuits, receptacles, gas or propane routing, water, controls, heaters, and fans before the kitchen base and roof posts are fixed.',
    icon: Zap,
  },
  {
    title: 'Drainage',
    description:
      'Gutters, downspouts, patio pitch, steps, doors, and the kitchen base need a clear water path so rain does not discharge into the work area or against the house.',
    icon: CloudRain,
  },
  {
    title: 'Screens and comfort',
    description:
      'Retractable screens can manage sun, bugs, wind, and privacy on the right sides of the room while preserving airflow where cooking needs it.',
    icon: Fan,
  },
];

const startItems = [
  'Where the project is located and how you want to use the space',
  'What you want to cook and whether you already have appliance preferences',
  'A rough footprint or photo if you have one; neither is required to start',
  'Your goals for dining, screens, lighting, heat, timing, or a local installation',
];

const faqs = [
  {
    question: 'Can an outdoor kitchen go under a pergola?',
    answer:
      'Yes, when the roof and kitchen are designed as one plan. EDG coordinates the appliance type, fuel, ventilation, clearances, posts, screens, utilities, drainage, and local requirements before the layout is finalized.',
  },
  {
    question: 'Can I close the pergola louvers while cooking?',
    answer:
      'Follow the selected appliance and roof instructions. Active cooking needs the required airflow, and screens or louvers should not be operated in a way that conflicts with those instructions. EDG explains the operating details at handoff.',
  },
  {
    question: 'Does an outdoor kitchen pergola need ventilation?',
    answer:
      'Yes. Cooking needs ventilation. Whether that means a hood or another provision depends on the appliances, fuel, roof, materials, local requirements, and how enclosed the room will be. EDG reviews the selected appliance and roof instructions together and explains the plan at handoff.',
  },
  {
    question: 'What should I send for an outdoor kitchen pergola quote?',
    answer:
      'Start with your contact information, project location, and the kind of cooking and dining space you want. Photos, appliance models, and dimensions are helpful but optional for an initial inquiry.',
  },
];

const articleSchema = generateArticleSchema({
  title: 'Pergolas over outdoor kitchens',
  description:
    'How EDG coordinates an outdoor kitchen, motorized pergola, utilities, ventilation, screens, lighting, drainage, and dining layout.',
  url: 'https://www.edgpatioshade.com/guides/outdoor-kitchen-pergola',
  image: `https://www.edgpatioshade.com${images.systems.appliances.kitchen}`,
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  category: 'Outdoor Kitchen Pergola Planning',
});

const faqSchema = generateFAQSchema(faqs);

export default function OutdoorKitchenPergolaPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Outdoor Kitchen Pergola' },
            ]}
            className="mb-8 text-zinc-300"
          />

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Outdoor kitchen planning
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
                Pergolas over outdoor kitchens
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
                EDG designs the pergola around the kitchen, not the other way
                around. Cooking, dining, circulation, roof movement,
                ventilation, utilities, lighting, and drainage should work as
                one outdoor room.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href={heroContactHref}
                  className={buttonClassName({
                    size: 'lg',
                    className: 'w-full sm:w-auto',
                  })}
                  conversionName="outdoor_kitchen_pergola_quote_click"
                  ctaPosition="outdoor_kitchen_pergola_hero"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <LinkButton
                  href="/guides/motorized-pergola-planning"
                  variant="outline"
                  size="lg"
                  className="w-full border-white/25 text-white hover:bg-white/10 sm:w-auto"
                >
                  General Pergola Planning
                </LinkButton>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={images.systems.appliances.kitchen}
                alt="Outdoor kitchen with built-in grill and counter workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Fast answer</div>
            <h2 className="section-title mb-4">
              An outdoor kitchen pergola is a coordination project
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG starts with how you cook, dine, move, and host. We then lay
              out the roof, appliances, utilities, screens, lighting, and
              drainage around that brief.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {layoutZones.map((zone) => (
              <Card key={zone.title} variant="muted" padding="lg">
                <zone.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-2xl font-bold">{zone.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {zone.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                Roof + appliance fit
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                The roof and the cooking equipment belong on the same plan
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  Outdoor-rated equipment still needs the right relationship to
                  the roof, surrounding materials, airflow, and working space.
                </p>
                <p>
                  EDG coordinates the cooking equipment with the pergola layout
                  so the room is comfortable to use and practical to service.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {roofChecks.map((check) => (
                <Card key={check.title} variant="default" padding="lg">
                  <check.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                  <h3 className="mb-3 text-xl font-bold">{check.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {check.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Complete the room</div>
            <h2 className="section-title mb-4">
              Lighting, utilities, drainage, and screens shape how the kitchen
              works
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These decisions are easiest to solve before the kitchen base, roof
              posts, and finish surfaces are fixed. EDG coordinates them as part
              of the same room.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {utilityChecks.map((check) => (
              <Card key={check.title} variant="default" padding="lg">
                <check.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-xl font-bold">{check.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {check.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden bg-zinc-200">
              <Image
                src={images.systems.pergolas.blackBladePool}
                alt="Motorized pergola with a dining zone and outdoor living area"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <Card variant="dark" padding="lg">
              <div className="text-edg-brand mb-4 text-sm font-bold tracking-widest uppercase">
                EDG design approach
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white">
                Design the room around the way you cook
              </h3>
              <p className="leading-relaxed text-zinc-300">
                EDG brings roof, kitchen, screens, lighting, heating, and
                utilities into one conversation. Local homeowners can continue
                from design through permitting, installation, and care; trade
                partners can use EDG for national design and supply support.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Start simply</div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              A simple first inquiry is enough
            </h2>
            <p className="text-text-secondary mb-8 max-w-3xl text-lg leading-relaxed">
              You do not need a finished kitchen schedule or drawing set to
              start. Tell EDG where the project is and how you want the room to
              work; we can help define the next useful step.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {startItems.map((item) => (
                <div
                  key={item}
                  className="border-border flex items-start gap-3 border bg-white p-4"
                >
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-edg-dark mt-8 p-8 text-white">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Ready to plan the cooking and dining layout?
                  </h3>
                  <p className="text-zinc-300">
                    EDG can help coordinate the roof, kitchen, utilities,
                    screens, and accessories around your project.
                  </p>
                </div>
                <TrackedLink
                  href={buildContactHref({
                    type: 'quote',
                    product: 'pergola',
                    source: 'outdoor_kitchen_pergola_inputs',
                  })}
                  className={buttonClassName({ size: 'lg' })}
                  conversionName="outdoor_kitchen_pergola_quote_click"
                  ctaPosition="outdoor_kitchen_pergola_inputs"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Common questions</div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
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

      <section className="bg-edg-dark py-16 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-edg-brand mb-3 text-sm font-bold tracking-widest uppercase">
                Plan the complete room
              </div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Build the roof around the way the kitchen needs to work.
              </h2>
            </div>
            <TrackedLink
              href={buildContactHref({
                type: 'quote',
                product: 'pergola',
                source: 'outdoor_kitchen_pergola_footer',
              })}
              className={buttonClassName({ size: 'lg' })}
              conversionName="outdoor_kitchen_pergola_quote_click"
              ctaPosition="outdoor_kitchen_pergola_footer"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
