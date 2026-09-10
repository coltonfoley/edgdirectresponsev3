import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Home,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Are Louvered Pergolas Waterproof? Rain, Drainage & Limits | EDG',
  description:
    'Are louvered pergolas waterproof? Learn how closed louvers, gutters, rain sensors, wind-driven rain, screens, and model limits affect rain protection before you buy.',
  alternates: {
    canonical: '/guides/are-louvered-pergolas-waterproof',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Are Louvered Pergolas Waterproof? | EDG Patio & Shade',
    description:
      'A practical guide to closed louvers, drainage, sensors, wind-driven rain, and the level of dryness different outdoor roof approaches can provide.',
  },
};

const faqs = [
  {
    question: 'Are louvered pergolas waterproof?',
    answer:
      'A louvered pergola can provide meaningful rain protection when its louvers, seals, gutters, posts, drainage route, and installation are specified for the site. It is not automatically or universally waterproof, and wind-driven rain can still enter around open sides or before a roof closes.',
  },
  {
    question: 'Does closing the louvers stop all rain?',
    answer:
      'Closing the louvers manages overhead rain on systems designed for that purpose, but the result depends on the model, roof condition, gutter capacity, debris, and exposure. Rain can still reach the patio from the perimeter, adjacent roof runoff, splash, or a delay while the roof is closing.',
  },
  {
    question: 'Do rain sensors make a pergola waterproof?',
    answer:
      'No. A rain sensor can help close the roof when precipitation is detected, but it does not eliminate the short response window or replace a properly designed roof and drainage path. Sensor behavior and priority rules are model-specific.',
  },
  {
    question: 'Can screens stop wind-driven rain?',
    answer:
      'Retractable screens can reduce wind, spray, glare, bugs, and some wind-driven rain, but screen fabric is not the same as a sealed wall. Clear vinyl or glass may provide more side protection, depending on the enclosure design and the ventilation the space needs.',
  },
  {
    question: 'What is the driest option for an outdoor room?',
    answer:
      'A solid roof or a louvered roof paired with well-designed side protection can provide more consistent shelter than an open-sided pergola. If the goal is a more room-like space, compare a louvered roof with retractable screens, glass, or a fixed roof based on the required dryness, airflow, daylight, and drainage plan.',
  },
];

const modelNotes = [
  {
    name: 'Brustor B200 (XL)',
    feature:
      'Brustor describes integrated water evacuation through a gutter system toward the posts, with integrated ZIP screens available for wind, sun, rain, and insects.',
    limit:
      'The manufacturer warranty guidance says an optional rain sensor can close the louvers, but some rain may enter before the roof finishes closing and the sensor is not an absolute operating guarantee. Gutter cleaning and the selected winter protocol matter.',
  },
  {
    name: 'Azenco R-BLADE',
    feature:
      'Azenco describes dual-walled louvers that capture rain and route it to a hidden internal gutter. Weather sensors can be specified to close for rain and respond to strong winds.',
    limit:
      'The manufacturer’s rain-management language describes the roof design, not a universal promise for every layout. EDG still needs to verify the selected model, edge exposure, discharge route, and adjacent construction.',
  },
  {
    name: 'Sundance All Season Pergola',
    feature:
      'Sundance publishes a bumper-seal gasket, a gutter that drains through the posts, and a standard rain sensor for its current All Season Pergola.',
    limit:
      'Sundance also publishes 150 mph wind resistance and 60 lb/sq. ft. snow load for the product. Those are published product values, not a substitute for project-specific engineering, mounting review, or local approval.',
  },
];

const waterPath = [
  {
    title: '1. The louvers close',
    description:
      'The roof moves from open or angled operation toward its rain-management position. The exact seal, overlap, gasket, and closing behavior depend on the selected system.',
    icon: SlidersHorizontal,
  },
  {
    title: '2. The roof collects water',
    description:
      'Closed louvers and roof channels direct water toward perimeter gutters or internal troughs. That collection detail is what separates a rain-managing roof from a simple open pergola.',
    icon: CloudRain,
  },
  {
    title: '3. The structure discharges it',
    description:
      'Gutters and posts move water down and away. The patio, hardscape, downspout outlet, adjacent wall, and nearby doors still need a workable place to receive that flow.',
    icon: Home,
  },
];

const fitRows = [
  {
    need: 'Shade plus protection from ordinary showers',
    fit: 'Louvered pergola with a planned drainage route',
    why: 'Close the louvers when rain arrives, while keeping the roof open for light and airflow when conditions allow.',
  },
  {
    need: 'More comfort in wind-driven rain',
    fit: 'Louvered pergola plus retractable screens',
    why: 'Screens can reduce side exposure, wind, bugs, and spray, but they do not create a watertight wall.',
  },
  {
    need: 'A more room-like, season-extending patio',
    fit: 'Louvered roof plus glass or a designed enclosure',
    why: 'Side protection becomes part of the weather strategy instead of relying on the roof alone.',
  },
  {
    need: 'Fixed overhead coverage with no louver operation',
    fit: 'Solid patio cover or fixed roof',
    why: 'A fixed roof may be the cleaner comparison when adjustable daylight and open-sky operation are not priorities.',
  },
];

const rainChecklist = [
  'Where will the gutter or post discharge water?',
  'Does the outlet stay away from doors, stairs, walls, and outdoor kitchens?',
  'Can the patio and surrounding hardscape receive that flow without pooling?',
  'What happens when leaves or debris reduce gutter capacity?',
  'Which edges face the prevailing wind, neighboring roofs, or open exposure?',
  'Do screens, clear panels, or glass need to be part of the first design?',
];

export default function AreLouveredPergolasWaterproofPage() {
  const articleSchema = generateArticleSchema({
    title: 'Are Louvered Pergolas Waterproof? Rain, Drainage, and Limits',
    description:
      'A buyer guide to how louvered pergolas manage rain, where water goes, how sensors and side protection affect performance, and which roof approach fits the required dryness.',
    url: 'https://www.edgpatioshade.com/guides/are-louvered-pergolas-waterproof',
    image: `https://www.edgpatioshade.com${images.pages.guides.louveredPergolasHero}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Pergola Weather Performance',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Are Louvered Pergolas Waterproof?' },
  ]);

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
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
              { label: 'Are Louvered Pergolas Waterproof?' },
            ]}
            className="mb-8"
          />

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5">
              Weather Performance Guide
            </div>
            <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              Are louvered pergolas waterproof?
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              Closed louvers can provide meaningful rain protection, but a
              louvered pergola is not automatically a sealed roof. The model,
              gutters, posts, patio, exposure, sensors, and side protection all
              decide how dry the space feels.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?source=louvered_pergolas_waterproof_hero">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/systems/pergolas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  View Pergola Systems
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Direct answer</div>
            <h2 className="section-title mb-6">
              A waterproof pergola is a system-and-site question
            </h2>
            <div className="border-edg-brand bg-surface-muted mb-10 border-l-4 p-6 md:p-8">
              <p className="text-xl leading-relaxed font-medium md:text-2xl">
                A properly specified louvered roof can keep much of the rain
                overhead from reaching the patio when the louvers are closed.
                That makes it a strong rain-management option—not a universal
                guarantee of a dry, enclosed room.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">What the roof can do</h3>
                <p className="text-text-secondary leading-relaxed">
                  Closed louvers, seals, and integrated gutters can route
                  overhead water away from the covered area. Several current
                  systems also offer rain sensors that help close the roof when
                  precipitation begins.
                </p>
              </Card>
              <Card variant="outline" padding="lg">
                <Wind className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">
                  What the roof cannot promise
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Open sides, wind-driven rain, splash, adjacent roof runoff,
                  debris, and the sensor response window still matter. A
                  rainproof pergola is not automatically a watertight outdoor
                  room.
                </p>
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
                Model-specific limits
              </div>
              <h2 className="section-title mb-4">
                The word “waterproof” is not the specification
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
                Brustor, Azenco, and Sundance all describe rain-management
                features, but the details are not interchangeable. Compare the
                actual model, controls, drainage path, and installation
                conditions before treating a product as a fit.
              </p>
            </div>

            <div className="space-y-5">
              {modelNotes.map((model) => (
                <Card key={model.name} variant="outline" padding="lg">
                  <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr_1fr]">
                    <h3 className="text-2xl font-bold">{model.name}</h3>
                    <div>
                      <div className="text-edg-brand-text mb-2 text-xs font-bold tracking-widest uppercase">
                        Documented feature
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {model.feature}
                      </p>
                    </div>
                    <div>
                      <div className="text-edg-brand-text mb-2 text-xs font-bold tracking-widest uppercase">
                        Buyer limit
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {model.limit}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <p className="text-text-secondary mt-6 text-sm leading-relaxed">
              Manufacturer features and ratings can change by model, option,
              market, and revision. EDG confirms the current product
              documentation and project-specific engineering before a final
              recommendation.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">Water path</div>
              <h2 className="section-title mb-4">
                Where the rain goes matters as much as the roof
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A closed roof only performs as well as the path beneath it. A
                gutter that discharges beside a door or a post that drops water
                onto a low patio can create a wet-space problem even when the
                louvers are doing their job.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {waterPath.map((step) => (
                <Card key={step.title} variant="outline" padding="lg">
                  <step.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <div>
                <h3 className="mb-5 text-2xl font-bold">
                  Drainage questions to answer before pricing
                </h3>
                <div className="space-y-4">
                  {rainChecklist.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-text-secondary leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 text-2xl font-bold">The practical test</h3>
                <p className="text-text-secondary leading-relaxed">
                  Trace one drop of water from the top of the roof to its final
                  discharge point. If that route is unclear, the rain question
                  is not finished—regardless of how strong the product brochure
                  sounds.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial text-edg-brand mb-4">
                Rain, wind, and controls
              </div>
              <h2 className="section-title mb-4 text-white">
                Heavy rain is only part of the exposure
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                A buyer asking “is a waterproof louvered pergola possible?” is
                usually asking about the whole patio, not only the aluminum
                blades. Wind changes the path of rain, and controls change how
                quickly the roof responds.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="border border-white/10 p-6">
                <Wind className="text-edg-brand mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">Wind-driven rain</h3>
                <p className="leading-relaxed text-zinc-300">
                  Closed louvers address overhead water, but crosswinds can
                  carry rain beneath the edges. Orientation, nearby buildings,
                  lake or coastal exposure, and side screens all influence the
                  result.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <CloudRain className="text-edg-brand mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">Heavy rain</h3>
                <p className="leading-relaxed text-zinc-300">
                  Larger water volume makes gutter capacity, outlet routing,
                  debris, patio pitch, and adjacent roof runoff more important.
                  A system should be checked as an installed assembly, not only
                  as a roof sample.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <SlidersHorizontal className="text-edg-brand mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">Sensors and response</h3>
                <p className="leading-relaxed text-zinc-300">
                  Rain sensors help, but they detect weather after it arrives. A
                  short closing window can allow some drops inside, and wind,
                  snow, or freeze protection may change which command takes
                  priority on the selected system.
                </p>
              </div>
            </div>

            <div className="mt-10 border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="mb-3 text-2xl font-bold">
                Side protection changes the experience
              </h3>
              <p className="mb-5 leading-relaxed text-zinc-300">
                Integrated ZIP screens can make a louvered patio more
                comfortable by reducing wind, spray, bugs, and glare. Clear
                vinyl or glass can provide a different level of enclosure. None
                of those choices should be treated as interchangeable: the right
                option depends on ventilation, views, privacy, heat, doors,
                egress, and how dry the room needs to be.
              </p>
              <div className="flex flex-wrap gap-5 text-sm font-bold">
                <Link
                  href="/systems/shades"
                  className="text-edg-brand inline-flex items-center gap-2"
                >
                  Compare retractable screens <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/systems/enclosures"
                  className="text-edg-brand inline-flex items-center gap-2"
                >
                  Explore glass enclosures <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Choose by required dryness
              </div>
              <h2 className="section-title mb-4">
                Which roof or enclosure approach fits?
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
                Start with the weather experience you need, then compare the
                system details that can deliver it. This keeps the purchase
                conversation focused on the space instead of on a single
                “waterproof” label.
              </p>
            </div>

            <div className="overflow-x-auto border border-black/10 bg-white">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-edg-dark text-white">
                  <tr>
                    <th className="p-5 font-bold">The space needs</th>
                    <th className="text-edg-brand p-5 font-bold">Likely fit</th>
                    <th className="p-5 font-bold text-zinc-300">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {fitRows.map((row) => (
                    <tr key={row.need}>
                      <td className="p-5 font-bold">{row.need}</td>
                      <td className="text-edg-brand-dark p-5 font-medium">
                        {row.fit}
                      </td>
                      <td className="text-text-secondary p-5 leading-relaxed">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link
                href="/guides/louvered-pergolas"
                className="text-edg-brand-dark inline-flex items-center gap-2 font-bold"
              >
                Read the complete louvered pergola guide{' '}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guides/pergola-vs-patio-cover"
                className="text-edg-brand-dark inline-flex items-center gap-2 font-bold"
              >
                Compare pergolas and patio covers{' '}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/outdoor-rooms/pergola-glass-outdoor-room"
                className="text-edg-brand-dark inline-flex items-center gap-2 font-bold"
              >
                See a pergola plus glass outdoor room{' '}
                <ArrowRight className="h-4 w-4" />
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
              Louvered pergola rain questions
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
            <div className="label-editorial text-edg-brand mb-4">
              Start with the water path
            </div>
            <h2 className="text-text-inverse mb-6 text-3xl font-bold md:text-4xl">
              Tell EDG how dry the space needs to be
            </h2>
            <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
              Share the location, rough dimensions, attachment condition, wind
              exposure, drainage constraints, and whether screens or glass are
              part of the plan. EDG can then compare a louvered pergola with the
              enclosure approach that fits the actual job.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?source=louvered_pergolas_waterproof_bottom">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/guides/louvered-pergola-brands-compared">
                <Button size="lg" variant="outline">
                  Compare System Options
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
