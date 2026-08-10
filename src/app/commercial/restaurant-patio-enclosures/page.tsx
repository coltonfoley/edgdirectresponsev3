import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Phone,
  ShieldCheck,
  Sun,
  Thermometer,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button, LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Restaurant Patio Enclosures Chicago | EDG',
  description:
    'Plan a Chicago restaurant patio enclosure for seasonal dining. Compare retractable glass, motorized screens, pergolas, heating, and weather protection.',
  alternates: {
    canonical: '/commercial/restaurant-patio-enclosures',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Commercial Restaurant Patio Enclosures Chicago | EDG',
    description:
      'Restaurant patio enclosure planning for seasonal dining with retractable glass, motorized screens, pergolas, heating, and weather protection.',
  },
};

const heroContactHref = buildContactHref({
  type: 'commercial',
  product: 'restaurant-patio-enclosure',
  location: 'chicago',
  source: 'restaurant_enclosures_hero',
});

const bottomContactHref = buildContactHref({
  type: 'commercial',
  product: 'restaurant-patio-enclosure',
  location: 'chicago',
  source: 'restaurant_enclosures_bottom',
});

const faqs = [
  {
    question: 'How quickly can a louvered roof close during unexpected rain?',
    answer:
      'Motorized louvered systems can be specified with rain sensors and staff controls so the roof closes quickly when weather changes. Exact timing and water-management performance depend on the selected system, size, drainage plan, and controls package.',
  },
  {
    question: 'Can EDG help with Chicago restaurant patio permitting?',
    answer:
      'Yes. Restaurant patio work usually needs careful review of structure, egress, electrical, fire-safety, right-of-way, and local code requirements. EDG helps organize system specifications, drawings, engineering inputs, and permit coordination for the project team.',
  },
  {
    question: 'What business-case inputs should a restaurant review?',
    answer:
      'The business case depends on seat count, ticket average, weather exposure, staffing, hours, and how the patio is operated. EDG can help model the assumptions from a specific patio layout instead of promising a generic financial outcome.',
  },
  {
    question: "Can these systems handle Chicago's wind and winter conditions?",
    answer:
      'Commercial systems can be engineered around Chicago wind, snow, drainage, and seasonal shutdown requirements. The right answer depends on the structure, exposure, mounting conditions, and selected product, so engineering review happens before final specification.',
  },
];

const planningSteps = [
  {
    icon: ClipboardCheck,
    title: 'Site and operations review',
    description:
      'We review dining layout, service paths, staff controls, guest comfort, power, drainage, and the weather problems that actually interrupt service.',
  },
  {
    icon: Building2,
    title: 'System and code coordination',
    description:
      'Pergolas, screens, glass, heaters, and controls are planned with structural, permit, and inspection requirements in mind before the proposal is finalized.',
  },
  {
    icon: ShieldCheck,
    title: 'Install and handoff planning',
    description:
      'Commercial projects need phasing, training, maintenance expectations, and clear handoff so staff can operate the system confidently.',
  },
];

const systemOptions = [
  {
    icon: Sun,
    title: 'Motorized louvered roofs',
    description:
      'Adjustable roof systems for rain protection, shade control, ventilation, and a more permanent architectural patio structure.',
  },
  {
    icon: Wind,
    title: 'Retractable screens',
    description:
      'Commercial screen planning for wind, insects, privacy, sun control, and guest comfort without closing off the entire patio visually.',
  },
  {
    icon: Thermometer,
    title: 'Heat, light, and controls',
    description:
      'Infrared heat, integrated lighting, sensors, remotes, app control, and staff-only operation can be planned as one restaurant system.',
  },
];

const seasonalModes = [
  {
    title: 'Open-air service',
    description:
      'Retract glass or screens and open adjustable louvers when conditions are comfortable. The layout should preserve server paths and avoid creating storage problems for movable elements.',
  },
  {
    title: 'Shoulder-season protection',
    description:
      'Use side protection to reduce drafts and wind-driven rain, then coordinate heaters with the roof, enclosure material, clearances, power or fuel source, and staff controls.',
  },
  {
    title: 'Severe weather and shutdown',
    description:
      'Define when the patio closes, who operates each component, how drainage is checked, and what the manufacturer requires for wind, snow, ice, cleaning, and seasonal storage.',
  },
];

const enclosureChoices = [
  {
    title: 'Retractable or sliding glass',
    description:
      'Clear panels can provide a stronger windbreak while preserving views. The header, tracks, panel stacking location, drainage, ventilation, door and egress plan all need project-specific review.',
    href: '/systems/enclosures',
    linkLabel: 'Explore glass enclosures',
  },
  {
    title: 'Motorized exterior screens',
    description:
      'Screens can address sun, insects, privacy, and some wind exposure while retaining a lighter open-air feel. Fabric, side retention, opening size, mounting, and operating limits vary by system.',
    href: '/systems/shades',
    linkLabel: 'Explore motorized screens',
  },
];

const commercialExamples = [
  {
    title: "Carmine's · Chicago",
    description:
      'A documented multi-bay motorized louvered pergola planned around an angled, cantilevered patio. Steel beams and reinforced columns helped reduce unnecessary posts in the dining layout.',
    href: '/projects/carmines',
  },
  {
    title: 'Chicago Winery · Chicago',
    description:
      'EDG project records document motorized screen coverage for an urban hospitality outdoor area, with downtown access, staging, and coordination included in the planning context. No measured seating or revenue result is claimed.',
  },
  {
    title: "Lou Malnati's · Naperville",
    description:
      'EDG project records document a renovation concept combining a motorized pergola, motorized vinyl screens, and heaters for more seasonal use. The available record does not support a claimed performance or business outcome.',
  },
];

const operationalChecks = [
  'Seat count, server path, host stand flow, and ADA clearances',
  'Drainage route, roof pitch, electrical location, and control zones',
  'Wind exposure, snow plan, seasonal operation, and emergency procedures',
  'Permit drawings, product specifications, finish direction, and owner approvals',
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Patio Enclosure Installation',
  description:
    'Chicago restaurant patio enclosure planning and installation with motorized pergolas, retractable screens, glass, heat, lighting, and controls.',
  serviceType: 'Restaurant patio enclosure design and installation',
  url: 'https://www.edgpatioshade.com/commercial/restaurant-patio-enclosures',
  image: images.featuredProjects.carmines.hero,
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

export default function RestaurantPatioEnclosuresPage() {
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
            alt="Commercial restaurant patio enclosure with dining tables and glass walls at night"
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
              { label: 'Restaurant Enclosures' },
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
              Restaurant Patio Enclosures
            </div>
            <h1 className="hero-title mb-6 max-w-4xl">
              Chicago Restaurant Patio Enclosures
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
              Plan weather protection around seating, staff flow, guest comfort,
              permitting, controls, and the way your Chicago-area patio actually
              runs during service.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={heroContactHref}>
                <Button size="lg">
                  Request a Quote
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
                A restaurant patio is an operations project, not a shade add-on
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                A useful enclosure plan starts with service reality. The system
                has to support how many guests can be seated, how staff move,
                where controls live, how rain drains, how wind is handled, and
                which inspections or approvals may be required.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                EDG is system-agnostic, so the recommendation can combine
                louvered roofs, screens, glass, heat, lighting, and controls
                only where they make sense for the restaurant. The result should
                be easier to operate, easier to review, and easier to maintain.
              </p>
              <div className="grid gap-3">
                {operationalChecks.map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium text-zinc-800">
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.enclosures.commercialPergolaDay}
                alt="Commercial pergola and glass enclosure over a restaurant dining patio"
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
              Components that can work together as one patio system
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The right commercial enclosure may be a simple screen plan, a
              louvered roof, a glass enclosure, or a layered system. The goal is
              to make the product choice after the restaurant, site, and
              operations are understood.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
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
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold tracking-wider uppercase">
            <Link
              href="/systems/pergolas"
              className="hover:text-edg-brand-text"
            >
              Motorized Pergolas
            </Link>
            <Link href="/systems/shades" className="hover:text-edg-brand-text">
              Motorized Screens
            </Link>
            <Link
              href="/systems/enclosures"
              className="hover:text-edg-brand-text"
            >
              Glass Enclosures
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">Seasonal Operation</div>
            <h2 className="section-title mb-5 text-white">
              Plan how the restaurant patio changes with the weather
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              A seasonal patio enclosure is not one fixed condition. The useful
              plan explains how staff move between open-air dining, wind or rain
              protection, added heat, and a full shutdown without improvising
              during service.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {seasonalModes.map((mode, index) => (
              <div key={mode.title} className="border border-white/10 p-6">
                <div className="text-edg-brand mb-4 text-xs font-bold tracking-[0.18em] uppercase">
                  Operating mode {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold">{mode.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Glass or Screen Enclosure
            </div>
            <h2 className="section-title mb-4">
              Choose side protection around the exposure and operating goal
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Glass and screens are not interchangeable. Some restaurants need a
              clearer windbreak; others need flexible shade and insect control.
              Site conditions and the selected product determine what each
              system can safely do.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {enclosureChoices.map((choice) => (
              <Card key={choice.title} variant="outline" padding="lg">
                <h3 className="mb-3 text-2xl font-bold">{choice.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {choice.description}
                </p>
                <Link
                  href={choice.href}
                  className="hover:text-edg-brand-text inline-flex items-center text-sm font-bold tracking-wider uppercase"
                >
                  {choice.linkLabel}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="bg-surface mt-6 border border-black/10 p-6">
            <h3 className="mb-3 text-xl font-bold">
              Heating compatibility is part of the enclosure plan
            </h3>
            <p className="text-text-secondary leading-relaxed">
              A heater should not be treated as a universal add-on. Heater type,
              mounting height, clearances, ventilation, enclosure material,
              electrical or gas service, controls, and manufacturer instructions
              must be coordinated for the specific patio. EDG can organize those
              inputs with the restaurant and project team before equipment is
              specified.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.featuredProjects.carmines.hero}
                alt="Carmine's Chicago restaurant patio with a custom multi-bay motorized pergola"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                Chicago Restaurant Project
              </div>
              <h2 className="section-title mb-6">
                Carmine&apos;s: a patio system designed around real seating
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                Carmine&apos;s needed a multi-bay motorized pergola for an
                angled, cantilevered Chicago patio. Custom steel beams and
                reinforced columns reduced the number of posts so the covered
                dining area could keep a more open layout.
              </p>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                That is the planning standard EDG brings to restaurant work:
                start with the site and service layout, then engineer the roof,
                drainage, structure, screens, heat, and controls around it.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <LinkButton href="/projects/carmines">
                  View Carmine&apos;s Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LinkButton>
                <Link
                  href="/systems/pergolas"
                  className="hover:text-edg-brand-text inline-flex items-center text-sm font-bold tracking-wider uppercase"
                >
                  Explore Motorized Pergolas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="/systems/steel-pergolas"
                  className="hover:text-edg-brand-text inline-flex items-center text-sm font-bold tracking-wider uppercase"
                >
                  Explore Steel Pergolas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">Proof Standard</div>
              <h2 className="section-title mb-6 text-white">
                Model the business case from the actual patio
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                A useful review does not start with a generic financial promise.
                It starts with the patio, the operating model, and the
                assumptions behind the business case: covers, hours, ticket
                averages, weather exposure, staffing, and service flow.
              </p>
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [
                  'Inputs',
                  'Seat count, ticket average, hours, staffing, and weather exposure',
                ],
                [
                  'System',
                  'Roof, screen, glass, heat, lighting, drainage, and controls',
                ],
                [
                  'Output',
                  'A qualified plan instead of a generic financial claim',
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

      <Section className="section-md bg-surface">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Commercial Project Examples
            </div>
            <h2 className="section-title mb-5">
              Restaurant work grounded in documented EDG project records
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These examples show different planning conditions. They do not
              imply that every patio uses the same system or produces the same
              operating result.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {commercialExamples.map((project) => (
              <Card key={project.title} variant="outline" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="hover:text-edg-brand-text mt-6 inline-flex items-center text-sm font-bold tracking-wider uppercase"
                  >
                    View documented project
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                ) : null}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              Restaurant Patio Enclosure Questions
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
                href="/commercial/restaurant-patio-solutions"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Restaurant Solutions
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/hotel-pergolas"
                className="hover:text-edg-brand-text inline-flex items-center gap-2 text-sm font-bold tracking-wider text-zinc-700 uppercase transition-colors"
              >
                Hotel Pergolas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-text-inverse mb-6 text-3xl font-bold md:text-4xl">
              Plan the patio before choosing the system
            </h2>
            <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
              EDG can review the restaurant, operating goals, and site
              constraints before recommending the enclosure package.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={bottomContactHref}>
                <Button size="lg">
                  Request a Quote
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
