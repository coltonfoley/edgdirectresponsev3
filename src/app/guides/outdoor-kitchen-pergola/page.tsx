import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChefHat,
  CloudRain,
  Fan,
  Lightbulb,
  Move,
  PanelTop,
  Ruler,
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
  title: 'Pergolas over outdoor kitchens | EDG Patio & Shade',
  description:
    'Plan an outdoor kitchen under a pergola with the right cooking, dining, circulation, roof, ventilation, clearance, utility, drainage, and screen decisions.',
  alternates: {
    canonical: '/guides/outdoor-kitchen-pergola',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Pergolas over outdoor kitchens | EDG Patio & Shade',
    description:
      'A practical guide to coordinating an outdoor kitchen, louvered pergola, utilities, ventilation, and dining layout.',
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
      'Start with the grill, side burner, pizza oven, sink, refrigeration, landing space, and the direction each lid or door opens. Keep the cook’s working area connected without putting a pergola post, screen housing, or dining chair in the operating path.',
    icon: ChefHat,
  },
  {
    title: 'Dining and serving zone',
    description:
      'Place the table, bar, or counter seating where guests can see the cooking without standing in the cook’s path. Leave room to pull chairs out, carry food, and move between the kitchen, house, and yard.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Circulation and edge zone',
    description:
      'Protect the main walking route, doors, stairs, pool edge, and service access. Posts and screen drops belong at the edges of the room only after the opening, drainage, and furniture plan are clear.',
    icon: Move,
  },
];

const roofChecks = [
  {
    title: 'Roof and appliance pairing',
    description:
      'A louvered pergola can change shade, airflow, and rain exposure, but it does not automatically make every grill or oven suitable beneath it. Select the appliance and roof as a pair, then compare both manufacturers’ current instructions.',
    icon: PanelTop,
  },
  {
    title: 'Clearance and lid movement',
    description:
      'Review the exact model’s clearances to combustible construction, glass, siding, other appliances, and the roof above. Account for the lid, rotisserie, pizza-oven door, service access, lighting, heaters, and the roof’s moving parts—not just the countertop cutout.',
    icon: Ruler,
  },
  {
    title: 'Ventilation and smoke path',
    description:
      'Plan for open-air airflow and the appliance’s required ventilation. Screens can make dining more comfortable, but closing a screen wall around an active grill changes the air path. A fixed roof may call for a listed vent hood or a different appliance strategy.',
    icon: Wind,
  },
  {
    title: 'Fuel and service access',
    description:
      'Natural gas, propane, electric, and wood-fired equipment create different routing and service questions. Built-in appliances also need access panels, cavity ventilation, shutoffs, and a noncombustible enclosure where their manual requires one.',
    icon: Wrench,
  },
];

const utilityChecks = [
  {
    title: 'Lighting',
    description:
      'Use task light at the counters and softer light over dining. Coordinate LED strips, spots, switches, and controls with the roof frame so the cook is not working in glare or standing beneath a service conflict.',
    icon: Lightbulb,
  },
  {
    title: 'Power and controls',
    description:
      'Identify appliance circuits, receptacles, GFCI protection, roof motors, lights, heaters, fans, sensors, and smart controls before finishes are selected. Keep controls reachable without crossing the cooking path.',
    icon: Zap,
  },
  {
    title: 'Drainage',
    description:
      'A louvered roof still needs a deliberate water path. Map gutters, downspouts, patio pitch, trench drains, doors, steps, and the kitchen base so roof water does not discharge into a work area or against the house.',
    icon: CloudRain,
  },
  {
    title: 'Screens and airflow',
    description:
      'Screens usually work best on the sun, bug, wind, or privacy sides of the room—not automatically on every side. Leave the cooking side and required openings open unless the selected appliance and local requirements support another approach.',
    icon: Fan,
  },
];

const designInputs = [
  'Project city or ZIP code, plus whether the site is residential, commercial, roof deck, or poolside',
  'Photos, a survey, architectural plan, or a marked-up overhead sketch showing the house and existing patio',
  'Overall available footprint and height, including doors, windows, stairs, eaves, gutters, and property-line constraints',
  'Exact appliance models or a short list of intended grills, ovens, burners, refrigeration, sinks, and fuel types',
  'Cooking, dining, serving, and circulation goals, including chair count and the route between the house and kitchen',
  'Power, gas, water, drainage, lighting, heater, fan, screen, and control requirements already known',
  'Budget range, timing, HOA or permit concerns, and any builder, architect, landscape, or kitchen partner already involved',
];

const faqs = [
  {
    question: 'Can an outdoor kitchen go under a pergola?',
    answer:
      'Sometimes. The answer depends on the selected roof, appliance, fuel, ventilation, clearances, materials, local requirements, and how the roof and screens operate. EDG reviews the exact appliance and pergola documentation together instead of treating “outdoor-rated” as blanket approval.',
  },
  {
    question: 'Can I close the pergola louvers while grilling?',
    answer:
      'Do not assume that you can. Active cooking changes heat and smoke conditions, and the correct roof position is model-specific. Follow the appliance and pergola instructions, keep the required air path open, and plan a listed hood or another approved strategy where the selected system requires it.',
  },
  {
    question: 'Do outdoor kitchen pergolas need a vent hood?',
    answer:
      'Not every project has the same answer. A fixed cover, wood-fired appliance, enclosed screen layout, or local code requirement can change the ventilation plan. The exact appliance manual and the roof manufacturer’s instructions should be reviewed before the roof, hood, and kitchen locations are finalized.',
  },
  {
    question: 'What should I send for an outdoor kitchen pergola quote?',
    answer:
      'Photos, exact appliance models, and dimensions are helpful but optional for an initial inquiry. Send whatever you have, such as the site location, a rough description of the cooking and dining arrangement, known utility locations, drainage concerns, desired screens or lighting, timing, and budget range. Those inputs help EDG identify the right system direction before specifying a manufacturer.',
  },
];

const articleSchema = generateArticleSchema({
  title: 'Pergolas over outdoor kitchens',
  description:
    'A practical guide to planning an outdoor kitchen under a motorized pergola, including layout zones, roof and appliance coordination, utilities, screens, drainage, and design inputs.',
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
                Plan the pergola around the kitchen, not the other way around.
                An outdoor kitchen under a pergola can be a comfortable place to
                cook and host—but only when cooking, dining, circulation, roof
                movement, ventilation, utilities, and drainage are drawn as one
                room.
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
              An outdoor kitchen pergola is a coordination project.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The roof is only one part of the plan. The useful first drawing
              shows where the cook works, where guests sit, how people move,
              where heat and smoke go, and how water and power reach the space.
              A pergola over an outdoor kitchen works best when product
              selection follows that brief.
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
                The grill manual and pergola manual belong on the same table.
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  “Outdoor-rated” does not mean “approved under any roof.”
                  Clearances depend on the appliance model, fuel, combustible
                  materials, glass or siding nearby, the roof construction, and
                  local requirements.
                </p>
                <p>
                  EDG reviews the exact appliance instructions alongside the
                  selected pergola’s technical and installation documents. That
                  is where height, louver operation, gutter routing, accessory
                  placement, anchoring, and ventilation decisions become
                  specific enough to price.
                </p>
              </div>

              <div className="border-edg-brand bg-surface-muted mt-8 border-l-4 p-6">
                <div className="mb-3 flex items-start gap-3">
                  <AlertTriangle className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <h3 className="text-xl font-bold">
                    A model-specific clearance example
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  An official Napoleon Built-In LEX 730 manual lists 16 inches
                  of clearance at the rear and 7 inches at the sides to
                  combustibles, recommends additional clearance near vinyl or
                  glass, and says not to operate the grill under overhead
                  combustible construction. Those numbers belong to that
                  appliance and manual; they are not a universal rule for an
                  outdoor kitchen under a pergola.
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
            <div className="label-editorial-brand mb-4">
              Second-pass coordination
            </div>
            <h2 className="section-title mb-4">
              Lighting, power, drainage, and screens shape the room.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These details are easiest to solve before the kitchen base, roof
              posts, and finish surfaces are fixed. They also determine whether
              the space feels open and workable or crowded and difficult to
              service.
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
                alt="Motorized pergola with a dining zone and poolside outdoor living area"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <Card variant="dark" padding="lg">
              <div className="text-edg-brand mb-4 text-sm font-bold tracking-widest uppercase">
                A practical layout test
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white">
                Trace three paths before you place a post.
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
                <p>
                  1. The cook’s path from refrigerator to grill, prep, sink, and
                  serving counter.
                </p>
                <p>
                  2. The guest path from the house or yard to the dining zone.
                </p>
                <p>
                  3. The service path for gas, electrical access, drainage,
                  appliance maintenance, and screen or louver repairs.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[380px] overflow-hidden bg-zinc-100">
              <Image
                src={images.featuredProjects.winnetkaLakesideRetreat.hero}
                alt="Boden Residence planning concept"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                Documented planning example
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Boden Residence: kitchen, pergola, and landscape in one brief.
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG’s Boden Residence record in Winnetka, Illinois describes a
                  full landscape renovation planned around appliances, a
                  motorized pergola with heaters, outdoor furniture, and a
                  custom pergola finish.
                </p>
                <p>
                  The useful lesson is the scope: the roof was considered with
                  the kitchen and entertaining plan, rather than added after the
                  hardscape and appliances were set. The available record does
                  not publish appliance models, final clearances, or a finished
                  installation case study, so those remain design review
                  inputs—not claims to copy into another project.
                </p>
              </div>
              <Link
                href="/projects/boden-residence"
                className="text-edg-brand-text mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
              >
                View the project record <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">
              Prepare for design review
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              What EDG needs before specifying the roof
            </h2>
            <p className="text-text-secondary mb-8 max-w-3xl text-lg leading-relaxed">
              A short project brief is enough to start. The more precise the
              appliance and site information, the more useful the first system
              recommendation can be.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {designInputs.map((input) => (
                <div
                  key={input}
                  className="border-border flex items-start gap-3 border bg-white p-4"
                >
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{input}</span>
                </div>
              ))}
            </div>

            <div className="bg-edg-dark mt-8 p-8 text-white">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Ready to plan the whole cooking and dining layout?
                  </h3>
                  <p className="text-zinc-300">
                    Send the site context and appliance direction. EDG can help
                    narrow the roof, utility, screen, and accessory plan.
                  </p>
                </div>
                <TrackedLink
                  href={heroContactHref}
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
            <div className="flex items-start gap-4">
              <BookOpen className="text-edg-brand-text mt-1 h-7 w-7 shrink-0" />
              <div>
                <div className="label-editorial-brand mb-4">Reference set</div>
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  Start with the current manufacturer documents.
                </h2>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                  These sources show why clearance, ventilation, roof operation,
                  drainage, and accessory decisions stay model-specific. EDG
                  verifies the current issue for the selected system during
                  design review.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">
                  Napoleon grill manual
                </h3>
                <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                  Model-specific instructions for an official built-in grill
                  example, including clearances and overhead construction.
                </p>
                <a
                  href="https://www.napoleon.com/sites/default/files/products/Built-In-LEX-730-series-manual.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                >
                  Open manual <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
              <Card variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">
                  Sundance pergola resources
                </h3>
                <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                  Current product guidance for louver operation, drainage,
                  installation, and options such as heat, fans, lighting, and
                  screens.
                </p>
                <a
                  href="https://sundanceoutdoorliving.com/resources/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                >
                  Open resources <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
              <Card variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">
                  Azenco covered-kitchen guidance
                </h3>
                <p className="text-text-secondary mb-5 text-sm leading-relaxed">
                  Manufacturer planning guidance that distinguishes the cover,
                  grill, airflow, and ventilation questions instead of giving
                  one universal answer.
                </p>
                <a
                  href="https://azenco-outdoor.com/your-covered-outdoor-kitchen-choosing-the-perfect-covering/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                >
                  Read guidance <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
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
                Start with the site and appliance brief
              </div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Build the roof around the way the kitchen needs to work.
              </h2>
            </div>
            <TrackedLink
              href={heroContactHref}
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
