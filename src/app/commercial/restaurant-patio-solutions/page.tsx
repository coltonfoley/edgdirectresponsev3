import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChefHat,
  ChevronRight,
  ClipboardCheck,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Utensils,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Restaurant Patio Solutions | Commercial Outdoor Dining | EDG',
  description:
    'Commercial patio, pergola, screen, glass, heat, and control planning for Chicago restaurants that need outdoor dining to work with operations.',
  alternates: {
    canonical: '/commercial/restaurant-patio-solutions',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Restaurant Patio Solutions | EDG Commercial',
    description:
      'Commercial outdoor dining planning for Chicago restaurants, including pergolas, screens, glass, heat, controls, and permit coordination.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'restaurant-patio-solutions',
  location: 'chicago',
  source: 'restaurant_patio_solutions_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'restaurant-patio-solutions',
  location: 'chicago',
  source: 'restaurant_patio_solutions_bottom',
});

const faqs = [
  {
    question: 'How quickly can a restaurant patio system be installed?',
    answer:
      'Timing depends on the system mix, structure, permits, utilities, and operating schedule. EDG helps restaurants sequence design, documentation, procurement, and installation around service hours so the plan is realistic before work begins.',
  },
  {
    question: 'Do restaurant patio systems require a lot of maintenance?',
    answer:
      'Powder-coated aluminum pergolas, exterior screens, and glass systems are built for commercial use, but they still need periodic cleaning, inspection, and service checks. EDG reviews care expectations by system so ownership and staff know what to expect.',
  },
  {
    question: 'Can guests operate the roof or screen controls?',
    answer:
      'Controls can be configured for staff-only use, guest zones, or a hybrid model. The right plan depends on staffing, seating layout, weather exposure, and how much control the restaurant wants guests to have during service.',
  },
  {
    question: 'What happens in heavy wind or snow?',
    answer:
      'Wind and snow requirements vary by product, exposure, mounting condition, and local code review. EDG helps coordinate product documentation, structural inputs, sensors, and operating guidance instead of treating every patio like the same package.',
  },
];

const planningSteps = [
  {
    icon: ChefHat,
    title: 'Service model first',
    description:
      'Covers, server paths, host stand flow, heaters, music, lighting, and closing procedures should shape the system before products are selected.',
  },
  {
    icon: Building2,
    title: 'Structure and permit review',
    description:
      'Mounting, drainage, power, egress, fire safety, wind exposure, and municipal review all affect whether a patio plan can be built cleanly.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controls and handoff',
    description:
      'Staff should know how to operate louvers, screens, heaters, lighting, and sensors without turning service into a technical support call.',
  },
];

const systemOptions = [
  {
    icon: Utensils,
    title: 'Dining terrace package',
    description:
      'A mixed pergola, screen, heat, lighting, and control plan for patios where service consistency matters more than a single product feature.',
  },
  {
    icon: Wind,
    title: 'Wind and glare control',
    description:
      'Exterior screens and side protection can help with crosswind, sun, privacy, and guest comfort when openings and controls are planned together.',
  },
  {
    icon: ShieldCheck,
    title: 'Weather-aware enclosure',
    description:
      'Glass, pergola, and heat combinations can support shoulder-season dining when structure, drainage, ventilation, and code are reviewed early.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operations documentation',
    description:
      'A useful commercial plan includes staff controls, weather procedures, care notes, and service expectations after installation.',
  },
];

const operationsChecklist = [
  'Table layout, host flow, server paths, bar access, and ADA clearances',
  'Wind, sun, rain, drainage, power, heaters, lighting, and sensor behavior',
  'Permit needs, landlord approvals, mounting conditions, and structural inputs',
  'Staff operating rules, closing procedures, maintenance, and service access',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Patio Solutions',
  description:
    'Commercial patio, pergola, screen, glass, heat, and control planning for restaurant outdoor dining',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
  },
};

export default function RestaurantPatioSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-edg-dark relative flex min-h-[68vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.systems.enclosures.commercialNightDining}
            alt="Commercial glass and patio dining system at night"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Commercial', href: '/commercial' },
              { label: 'Restaurant Patio Solutions' },
            ]}
            className="mb-6 text-zinc-300"
          />
          <Link
            href="/commercial"
            className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to commercial
          </Link>

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-6">
              Restaurant Patio Solutions
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              Restaurant Patio Planning for Weather-Ready Service
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              Commercial pergola, screen, glass, heat, lighting, and control
              planning for patios where outdoor dining has to work with real
              restaurant operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Schedule a Patio Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {planningSteps.map((step) => (
              <div key={step.title} className="border border-white/10 p-6">
                <IconWrapper
                  icon={step.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h2 className="mb-3 text-xl font-bold">{step.title}</h2>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial text-edg-brand mb-4">
                Commercial Planning Standard
              </div>
              <h2 className="section-title mb-6">
                A restaurant patio should be planned around service, not just
                weather
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Good outdoor dining design is not just about closing a roof when
                it rains. The system has to support staff movement, guest
                comfort, heat, light, cleaning, access, controls, and the way
                the restaurant actually runs.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                EDG is system-agnostic, so the recommendation can combine
                louvered pergolas, exterior screens, glass walls, heaters,
                lighting, and controls only where they support the patio.
              </p>
              <div className="grid gap-3">
                {operationsChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.enclosures.commercialPergolaDay}
                alt="Commercial pergola and glass patio dining area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">System Options</div>
            <h2 className="section-title mb-4">
              Select the package that fits the patio and the staff model
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A restaurant may need shade, wind control, glass, heat, or a full
              weather-aware package. EDG compares the patio conditions before
              recommending a product mix.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {systemOptions.map((option) => (
              <Card key={option.title} variant="outline" padding="lg">
                <IconWrapper
                  icon={option.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{option.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {option.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">Proof Standard</div>
              <h2 className="section-title mb-6 text-white">
                Review the business case with the actual patio assumptions
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                EDG can help restaurants evaluate the variables that affect a
                patio investment: seats, hours, weather interruptions, staffing,
                service model, permit path, and maintenance. The recommendation
                should be tied to the restaurant, not a generic outcome claim.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Restaurant Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [
                  'Inputs',
                  'Seats, flow, exposure, landlord rules, code, and service hours',
                ],
                [
                  'System',
                  'Pergola, screens, glass, heat, lighting, sensors, and controls',
                ],
                [
                  'Output',
                  'A qualified patio plan the restaurant team can operate',
                ],
              ].map(([label, description]) => (
                <div key={label} className="border border-white/10 p-6">
                  <div className="text-edg-brand mb-3 text-xs font-bold tracking-[0.18em] uppercase">
                    {label}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              Restaurant Patio Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="outline" padding="lg">
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

      <Section className="bg-surface border-t border-black/10 py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link
              href="/commercial"
              className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Commercial Pages
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/commercial/restaurant-patio-enclosures"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Chicago Restaurant Patio Enclosures
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/chicago-hospitality-outdoor-living"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Chicago Hospitality
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Start with the patio conditions
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-zinc-300">
              Send EDG the seating plan, current patio constraints, and service
              goals. We will help narrow the system and planning path.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Start Restaurant Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call EDG
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
