import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Home,
  Lightbulb,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  Wrench,
  X,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola vs. Gazebo: Which Fits Your Backyard? | EDG',
  description:
    'Compare a pergola and gazebo by roof behavior, openness, layout, maintenance, and project scope. EDG helps plan the motorized pergola path around how you use the patio.',
  alternates: {
    canonical: '/guides/pergola-vs-gazebo',
  },
};

const comparisonRows = [
  {
    feature: 'Roof behavior',
    pergola:
      'Open slats or adjustable louvers. Shade and rain control depend on the roof system.',
    gazebo:
      'Usually a fixed pitched or polygonal roof. The roof coverage stays in place while the sun and daylight change around it.',
  },
  {
    feature: 'Openness',
    pergola:
      'Open on the sides and visually connected to the yard; screens can be added to selected systems.',
    gazebo:
      'Often open-sided, but the roof form reads as a more defined destination in the landscape.',
  },
  {
    feature: 'Layout',
    pergola:
      'Can be freestanding, attached, or configured around an existing patio or outdoor room.',
    gazebo:
      'Usually a standalone focal point with a more fixed footprint and center of use.',
  },
  {
    feature: 'Maintenance',
    pergola:
      'Aluminum and motorized systems need cleaning, gutter care, and system-specific service.',
    gazebo:
      'Maintenance follows the material and roof: paint or stain, roofing, fasteners, drainage, and site work.',
  },
  {
    feature: 'Best control question',
    pergola:
      'Do you want to change the amount of sun, shade, airflow, and rain management during the day?',
    gazebo:
      'Do you want a permanent roofed destination with a predictable look and fixed overhead coverage?',
  },
] as const;

const budgetCategories = [
  {
    icon: Home,
    title: 'Gazebo kit or simple structure',
    description:
      'The scope may be a prefabricated kit or a straightforward build with a prepared base, assembly, and a fixed roof. The comparison is mainly the structure itself; utilities, drainage, and finished outdoor-room features may remain separate decisions.',
  },
  {
    icon: Ruler,
    title: 'Custom-built gazebo',
    description:
      'A custom gazebo can add site work, foundation decisions, roofing, electrical, finish carpentry, access planning, and local review. It should be compared with another custom structure—not with a box-store kit.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Installed motorized pergola',
    description:
      'The scope may include an engineered aluminum structure, motorized louvered roof, electrical, integrated drainage, controls, screens, lighting, heaters, and permitting or engineering coordination. Those additions are why a motorized pergola is a system project, not just a roof kit.',
  },
] as const;

const weatherBenefits: { icon: LucideIcon; label: string }[] = [
  { icon: Sun, label: 'Open the roof when you want more daylight' },
  { icon: CloudRain, label: 'Close or adjust the roof as weather changes' },
  {
    icon: ShieldCheck,
    label: 'Coordinate the roof with screens and accessories',
  },
];

const faqs = [
  {
    question: 'Is a gazebo the same as a pergola?',
    answer:
      'No. A gazebo is typically a freestanding structure with a fixed roof and a defined footprint. A pergola is usually more open, and a motorized louvered pergola can change the roof position to control sun, shade, airflow, and rain management.',
  },
  {
    question: 'Which gives better rain protection: a gazebo or pergola?',
    answer:
      'A fixed gazebo roof provides a consistent roof overhead when the structure, roofing, and site are properly built. A motorized louvered pergola can manage rain when its selected roof, drainage, controls, and installation are designed for that job, but it should not be described as a completely sealed room or universal weather guarantee.',
  },
  {
    question: 'Is a pergola or gazebo cheaper?',
    answer:
      'There is no useful answer without defining the scope. A simple gazebo kit, custom-built gazebo, and installed motorized pergola represent different project categories. Compare foundation, roof, electrical, drainage, accessories, engineering, and labor before comparing totals.',
  },
  {
    question: 'Do I need a permit for a pergola or gazebo?',
    answer:
      'Possibly. Requirements vary by jurisdiction, footprint, height, attachment, foundation, electrical work, setbacks, and local review rules. The building department or other authority having jurisdiction confirms the requirements for a specific property.',
  },
];

export default function PergolaVsGazeboGuide() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.pergolaVsPatioCover}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Pergola vs Gazebo' },
            ]}
            className="mb-8"
          />

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5 inline-flex items-center gap-3">
              <Lightbulb className="h-4 w-4" />
              Comparison Guide
            </div>
            <h1 className="mb-5 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              Pergola vs. Gazebo
            </h1>
            <p className="text-edg-brand mb-4 text-xl font-bold md:text-2xl">
              Choose the structure by how you want the space to work
            </p>
            <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">
              A gazebo and a pergola can both create a more useful backyard, but
              they solve different problems. Start with roof behavior, openness,
              layout, maintenance, and project scope before you request a quote.
            </p>
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">Fast answer</div>
              <h2 className="section-title mb-4">
                Fixed destination or adjustable outdoor room?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                If you want a defined place with a fixed roof, a gazebo may be
                the more direct fit. If you want to change the amount of sun and
                shade—or add motorized screens and other controls—EDG can help
                plan a motorized pergola.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card
                variant="muted"
                padding="lg"
                className="border-l-4 border-l-zinc-400"
              >
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper icon={Home} size="md" />
                  <h3 className="text-2xl font-bold">Choose a gazebo when…</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'You want one permanent roof and fixed overhead coverage.',
                    'The structure should read as a standalone garden or entertaining destination.',
                    'You are comfortable planning seating, lighting, and other features around a fixed footprint.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="text-text-secondary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card
                variant="dark"
                padding="lg"
                className="border-edg-brand/50 border-l-4"
              >
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper
                    icon={SlidersHorizontal}
                    variant="brand"
                    size="md"
                  />
                  <h3 className="text-text-inverse text-2xl font-bold">
                    Choose a motorized pergola when…
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'You want to move between open sky, filtered shade, and a closed roof position.',
                    'Sun, glare, airflow, and changing weather affect how you use the patio.',
                    'You want a coordinated system with screens, lighting, heating, or other controls.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-text-inverse-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Side-by-side comparison
              </div>
              <h2 className="section-title mb-4">
                Pergola vs. gazebo by the decisions that matter
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
                The word “pergola” covers more than one roof type. An open
                decorative pergola and a motorized louvered pergola should not
                be compared as if they provide the same weather control.
              </p>
            </div>

            <p
              id="pergola-gazebo-table-hint"
              className="text-text-muted mb-3 text-sm md:hidden"
            >
              Scroll horizontally to see all three columns. Focus the comparison
              and use the arrow keys with a keyboard.
            </p>

            <div
              aria-describedby="pergola-gazebo-table-hint"
              aria-label="Pergola and gazebo comparison table"
              className="border-border focus-visible:ring-edg-brand-dark overflow-x-auto border bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              role="region"
              tabIndex={0}
            >
              <table className="w-full min-w-[760px] text-left">
                <caption className="sr-only">
                  Comparison of pergolas and gazebos by roof, openness, layout,
                  maintenance, and use
                </caption>
                <thead className="bg-edg-dark text-white">
                  <tr>
                    <th className="w-[18%] p-5 font-bold">Decision</th>
                    <th className="text-edg-brand w-[41%] p-5 font-bold">
                      Pergola
                    </th>
                    <th className="w-[41%] p-5 font-bold text-zinc-300">
                      Gazebo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row" className="p-5 align-top font-bold">
                        {row.feature}
                      </th>
                      <td className="text-text-secondary p-5 align-top leading-relaxed">
                        {row.pergola}
                      </td>
                      <td className="text-text-secondary p-5 align-top leading-relaxed">
                        {row.gazebo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">Roof behavior</div>
              <h2 className="section-title mb-4">
                Fixed shade versus adjustable weather control
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                This is the most important distinction for many buyers. A fixed
                roof gives you a reliable overhead plane. A motorized louvered
                roof adds another layer: the ability to choose how much roof is
                open or closed as the day changes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper icon={Home} size="md" />
                  <h3 className="text-2xl font-bold">
                    A gazebo stays consistent
                  </h3>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  The roof is part of the structure’s identity. That can be a
                  strength when you want a clear focal point and dependable
                  fixed coverage, but it also means the space does not open up
                  when you want more daylight or airflow.
                </p>
                <div className="space-y-3">
                  {[
                    ['Predictable overhead coverage', true],
                    ['Straightforward use once complete', true],
                    ['Roof position changes during the day', false],
                    ['Easy to reconfigure around changing sun', false],
                  ].map(([label, positive]) => (
                    <div
                      key={label as string}
                      className="flex items-center gap-3 text-sm"
                    >
                      {positive ? (
                        <CheckCircle2 className="text-edg-brand-text h-5 w-5 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 shrink-0 text-zinc-400" />
                      )}
                      <span className="text-text-secondary">{label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="dark" padding="lg" className="border-edg-brand/40">
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper
                    icon={SlidersHorizontal}
                    variant="brand"
                    size="md"
                  />
                  <h3 className="text-text-inverse text-2xl font-bold">
                    A motorized pergola can adapt
                  </h3>
                </div>
                <p className="text-text-inverse-muted mb-6 leading-relaxed">
                  Louvered systems can open for light and airflow, angle for
                  filtered shade, or close for rain management when the selected
                  system, drainage, controls, and installation are right for the
                  site.
                </p>
                <div className="space-y-3">
                  {weatherBenefits.map(({ icon: Icon, label }) => {
                    return (
                      <div
                        key={label}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Icon className="text-edg-brand h-5 w-5 shrink-0" />
                        <span className="text-text-inverse-muted">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            <Card
              variant="muted"
              padding="lg"
              className="border-l-edg-brand mt-6 border-l-4"
            >
              <div className="flex items-start gap-4">
                <IconWrapper icon={ShieldCheck} variant="brand" size="md" />
                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    Weather control is not the same as a sealed room
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    A motorized roof should be used according to its operating
                    guidance in rain, wind, snow, and freezing conditions.
                    Drainage needs regular attention, and an automatic rain
                    sensor is a control feature—not a promise that every drop is
                    excluded. EDG plans the roof, drainage, screens, and
                    controls around the way you want to use the patio.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="label-editorial text-edg-brand mb-4">
                Budget categories
              </div>
              <h2 className="section-title mb-4 text-white">
                Compare scopes before you compare prices
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
                “Pergola vs. gazebo cost” is not one apples-to-apples question.
                The roof, base, utilities, controls, engineering, and labor can
                all change the project category. These are planning scopes, not
                quotes or promises.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {budgetCategories.map((category) => (
                <Card
                  key={category.title}
                  variant="dark"
                  padding="lg"
                  className="border-white/10"
                >
                  <IconWrapper
                    icon={category.icon}
                    variant="brand"
                    size="lg"
                    className="mb-6"
                  />
                  <h3 className="mb-4 text-xl font-bold">{category.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {category.description}
                  </p>
                </Card>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-zinc-400">
              If a quote compares only the roof product, ask what is included
              for site preparation, electrical, drainage, engineering, permits,
              delivery, installation, and future service.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Layout and maintenance
              </div>
              <h2 className="section-title mb-4">
                Think about the space after the first season
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                The better structure is the one that still fits how you move
                through the yard, host people, and care for the property months
                after installation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper icon={Ruler} variant="brand" size="md" />
                  <h3 className="text-2xl font-bold">Layout questions</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Is the structure attached to the home, freestanding, or part of a larger outdoor room?',
                    'Do people need to move easily between the patio, yard, pool, and house?',
                    'Will the roof need to work around doors, windows, views, utilities, or an existing deck?',
                    'Does the seating plan need more than one condition: open, shaded, screened, or protected?',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <Ruler className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="outline" padding="lg">
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper icon={Wrench} variant="brand" size="md" />
                  <h3 className="text-2xl font-bold">Maintenance questions</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'A gazebo’s maintenance follows its roof, finish, fasteners, foundation, and surrounding drainage.',
                    'A motorized pergola adds moving parts, controls, louvers, gutters, screens, and electrical components.',
                    'Both options need leaves, standing water, and site drainage addressed before they become larger problems.',
                    'A motorized roof and its moving parts benefit from routine care and clear operating habits.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <Wrench className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">How EDG helps</div>
              <h2 className="section-title mb-4">
                Plan the right roof for the way you use the patio.
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
                EDG specializes in motorized pergolas, retractable screens, and
                glass enclosures. We help homeowners and trade partners connect
                the roof, layout, comfort features, engineering, installation,
                and care plan to the way the space will be used.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card variant="default" padding="lg">
                <IconWrapper icon={Ruler} variant="brand" size="md" />
                <h3 className="mt-5 mb-3 text-2xl font-bold">
                  Start with the space
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Tell EDG how you want to move, host, shade, screen, and use
                  the patio through the seasons.
                </p>
              </Card>
              <Card variant="default" padding="lg">
                <IconWrapper
                  icon={SlidersHorizontal}
                  variant="brand"
                  size="md"
                />
                <h3 className="mt-5 mb-3 text-2xl font-bold">
                  Match the system
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We compare fixed-roof and adjustable paths, then coordinate
                  screens, lighting, heating, drainage, and controls where they
                  belong.
                </p>
              </Card>
              <Card variant="default" padding="lg">
                <IconWrapper icon={Wrench} variant="brand" size="md" />
                <h3 className="mt-5 mb-3 text-2xl font-bold">
                  Carry it through
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  EDG supports design, engineering, procurement, permitting,
                  installation, and care for the project path we recommend.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">Where EDG fits</div>
              <h2 className="section-title mb-4">
                Start with the structure that matches the job
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                EDG specializes in motorized pergolas, retractable screens, and
                glass enclosure systems. If adjustable shade, side protection,
                or a more complete outdoor room is the goal, EDG can help plan
                the system, coordinate the work, and carry the project through
                installation and care in our local markets.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="muted" padding="lg">
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper icon={Home} size="md" />
                  <h3 className="text-2xl font-bold">
                    A gazebo may be the fit if…
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Your priority is a permanent, recognizable destination with
                  one fixed roof and a layout built around it. You do not need
                  to change the overhead condition throughout the day.
                </p>
              </Card>

              <Card variant="dark" padding="lg" className="border-edg-brand/50">
                <div className="mb-5 flex items-center gap-4">
                  <IconWrapper
                    icon={SlidersHorizontal}
                    variant="brand"
                    size="md"
                  />
                  <h3 className="text-text-inverse text-2xl font-bold">
                    Choose a motorized pergola when…
                  </h3>
                </div>
                <p className="text-text-inverse-muted leading-relaxed">
                  You want the patio to change with the weather and the way you
                  use it. EDG will help plan dimensions, structure, drainage,
                  electrical, controls, and the accessories that matter to you.
                </p>
              </Card>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <Link
                className="text-edg-brand-dark font-bold underline"
                href="/guides/pergola-vs-patio-cover"
              >
                Compare pergolas and patio covers
              </Link>
              <span className="text-text-muted">•</span>
              <Link
                className="text-edg-brand-dark font-bold underline"
                href="/guides/louvered-pergolas"
              >
                Read the louvered pergola guide
              </Link>
              <span className="text-text-muted">•</span>
              <Link
                className="text-edg-brand-dark font-bold underline"
                href="/guides/motorized-pergola-planning"
              >
                Review the planning guide
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4 text-center">FAQ</div>
            <h2 className="section-title mb-10 text-center">
              Pergola vs. gazebo questions
            </h2>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="outline" padding="lg">
                  <h3 className="mb-3 flex items-start gap-3 text-lg font-bold">
                    <CheckCircle2 className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary pl-8 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-text-inverse mb-6 text-3xl font-bold md:text-4xl">
              Want to see whether a motorized pergola fits?
            </h2>
            <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
              Share the location, rough dimensions, and what you want the space
              to do. EDG can start with system fit and help coordinate the right
              next step.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/guides/pergola-system-fit-review?source=pergola_vs_gazebo_bottom"
                size="lg"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </LinkButton>
              <LinkButton
                href="/guides/louvered-pergolas"
                size="lg"
                variant="outline"
              >
                Read the Louvered Pergola Guide
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
