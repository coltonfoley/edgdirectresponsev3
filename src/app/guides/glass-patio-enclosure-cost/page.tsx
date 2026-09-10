import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  PanelTop,
  Ruler,
  ShieldCheck,
  Wrench,
  XCircle,
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

const quoteHref = buildContactHref({
  type: 'price',
  product: 'enclosure',
  source: 'glass_patio_enclosure_cost',
});

export const metadata: Metadata = {
  title: 'Glass Patio Enclosure Cost: 2026 Planning Guide | EDG',
  description:
    'See how EDG plans glass patio enclosures, what a broad glass-wall planning band covers, and how roof, structure, operation, and installation shape the project.',
  keywords: [
    'glass patio enclosure cost',
    'cost to enclose patio with glass',
    'glass porch enclosure cost',
    'sliding glass patio walls cost',
    'retractable glass enclosure cost',
  ],
  alternates: {
    canonical: '/guides/glass-patio-enclosure-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Glass Patio Enclosure Cost: 2026 Planning Guide | EDG',
    description:
      'A homeowner guide to EDG glass enclosure planning, including a broad glass-wall planning band and the work required for a complete outdoor room.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const faqs = [
  {
    question: 'How much does a glass patio enclosure cost?',
    answer:
      'EDG uses a broad planning band of about $25k-$50k+ for glass walls added to an existing or planned cover. That starting scope covers the glass-wall system, freight, and installation allowance; roof or pergola work, structural preparation, permits, drainage, electrical, tax, and site-specific work are scoped separately. A new roof-plus-glass outdoor room needs its own design and proposal.',
  },
  {
    question: 'Is it cheaper to add glass to an existing covered patio?',
    answer:
      'An existing cover can reduce the amount of new roof work, but EDG still checks the beam or header, posts, deck or slab, drainage, attachment surfaces, panel parking, and finished clear opening before recommending the enclosure path.',
  },
  {
    question: 'What is the difference between sliding and folding glass walls?',
    answer:
      'Sliding panels move along a track, while folding panels slide and stack to the side. EDG reviews the opening, parking area, furniture and traffic, hardware, clear opening, and support path before choosing the operating layout.',
  },
  {
    question: 'What is usually excluded from a glass enclosure quote?',
    answer:
      'EDG identifies structural preparation, footings, permits, electrical, drainage, deck or slab work, finish details, tax, and unusual access in the project scope so you know what the enclosure requires before installation begins.',
  },
];

const articleSchema = generateArticleSchema({
  title: 'Glass Patio Enclosure Cost: 2026 Planning Guide',
  description:
    'A homeowner guide to how EDG plans glass patio enclosures, from opening measurements and roof structure through installation and care.',
  url: 'https://www.edgpatioshade.com/guides/glass-patio-enclosure-cost',
  image: `https://www.edgpatioshade.com${images.systems.enclosures.lumonPatio}`,
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  category: 'Glass Enclosure Cost',
});

const faqSchema = generateFAQSchema(faqs);

const costDrivers = [
  {
    icon: Ruler,
    title: 'Opening width and height',
    description:
      'EDG measures each opening around width, height, panel count, and movement. Tall or wide openings can change the support, track, hardware, and installation plan.',
  },
  {
    icon: PanelTop,
    title: 'Roof and wall scope',
    description:
      'Glass below an existing roof is a different project from a new pergola or roof with glass walls. EDG coordinates the roof, glass, freight, installation, and site work as one plan.',
  },
  {
    icon: Layers3,
    title: 'Panel layout and parking',
    description:
      'Sliding and folding layouts need a clear place for panels to stack or park. EDG plans opening direction, posts, handles, seals, locks, and furniture clearances together.',
  },
  {
    icon: ShieldCheck,
    title: 'Structure and exposure',
    description:
      "The beam, header, posts, deck or slab, attachment points, exposure, and existing structure condition guide EDG's engineering and preparation plan.",
  },
  {
    icon: Wrench,
    title: 'Installation and access',
    description:
      'EDG plans staging, delivery, lifting, floor protection, trim, gable work, wiring, and service access before the installation schedule is set.',
  },
  {
    icon: CheckCircle2,
    title: 'Finish and comfort choices',
    description:
      'Clear or tinted glass, handles, locks, screens, shades, heaters, lighting, and controls shape how the finished room feels and operates. EDG coordinates those choices with the enclosure.',
  },
];

const fitChecks = [
  'EDG measures every opening at the top, middle, and bottom, then confirms height, width, and square condition.',
  'EDG reviews what carries the upper track: an existing beam, new header, pergola beam, deck structure, or another support.',
  'EDG reserves the panel parking or folding stack area before furniture, grills, doors, and traffic paths are finalized.',
  'EDG coordinates drainage, electrical, trim, gable, finish, and comfort details so the enclosure works as part of the room.',
  'EDG identifies structural preparation, permits, site access, tax, and other project responsibilities in the proposal.',
];

export default function GlassPatioEnclosureCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white md:pt-40">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Glass Patio Enclosure Cost' },
            ]}
            className="mb-8"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                2026 cost and scope guide
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
                Glass patio enclosure cost: what changes the installed price
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
                Start with how you want the patio to work. EDG measures the
                opening, reviews the roof and structure, and designs the glass,
                operation, comfort features, and installation plan around the
                way you use the space.
              </p>
              <div className="flex flex-wrap gap-4">
                <TrackedLink
                  href={quoteHref}
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <LinkButton
                  href="#price-examples"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                >
                  See the example
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.enclosures.lumonPatio}
                alt="Frameless sliding glass walls enclosing a patio"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short answer</div>
            <h2 className="section-title mb-6">
              What is the cost to enclose a patio with glass?
            </h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                EDG uses a broad planning band of about{' '}
                <strong className="text-text-primary">$25k-$50k+</strong> for
                glass walls added to an existing or planned cover. That starting
                scope covers the glass-wall system, freight, and installation
                allowance. A new roof-plus-glass outdoor room needs its own
                design and proposal because the roof, structure, drainage,
                electrical, access, finishes, tax, and glass-wall scope must be
                coordinated.
              </p>
              <p>
                The final plan depends on the opening schedule, panel layout,
                roof and support structure, freight, installation, and site
                conditions. EDG separates those responsibilities so the finished
                project is clear before work begins.
              </p>
              <p>
                An existing covered patio may avoid a new roof system, while an
                aging beam, deck, drainage path, difficult access, or custom
                panel layout can add work. EDG reviews those details before
                recommending the enclosure path.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="price-examples" className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              Glass-wall planning and room scope
            </div>
            <h2 className="section-title mb-4">
              Compare the glass scope before comparing the band
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The glass-wall band applies to adding a system below an existing
              or planned cover. If EDG is designing the roof and glass together,
              the roof, structure, drainage, electrical, and finish work are
              planned as part of the complete outdoor room.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card
              variant="default"
              padding="lg"
              className="border-edg-brand/40"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-edg-brand-text mb-2 text-xs font-bold tracking-widest uppercase">
                    Planning band: covered or planned structure
                  </div>
                  <h3 className="text-2xl font-bold">
                    Multi-opening glass-wall project
                  </h3>
                </div>
                <div className="text-text-secondary text-right text-sm">
                  <div>EDG planning range</div>
                  <div>Glass-wall scope</div>
                </div>
              </div>
              <div className="mb-6 rounded-sm bg-zinc-950 p-5 text-white">
                <div className="text-edg-brand mb-1 text-sm font-bold tracking-widest uppercase">
                  Glass-wall planning band
                </div>
                <div className="text-4xl font-bold">$25k-$50k+</div>
                <div className="mt-2 text-sm text-zinc-400">
                  Glass-wall system, freight, and installation allowance; roof,
                  structure, tax, and site-specific additions are separate
                </div>
              </div>
              <dl className="divide-y divide-black/10 text-sm dark:divide-white/10">
                <div className="grid gap-2 py-3 sm:grid-cols-[150px_1fr]">
                  <dt className="font-bold">Opening scope</dt>
                  <dd className="text-text-secondary">
                    Several openings; EDG measures width, height, panel count,
                    and parking layout before specifying the system.
                  </dd>
                </div>
                <div className="grid gap-2 py-3 sm:grid-cols-[150px_1fr]">
                  <dt className="font-bold">Included scope</dt>
                  <dd className="text-text-secondary">
                    Product selection, freight, installation, and project
                    coordination.
                  </dd>
                </div>
                <div className="grid gap-2 py-3 sm:grid-cols-[150px_1fr]">
                  <dt className="font-bold">Structure</dt>
                  <dd className="text-text-secondary">
                    Existing or planned cover; EDG confirms the beam, header,
                    attachment path, and finished opening.
                  </dd>
                </div>
                <div className="grid gap-2 py-3 sm:grid-cols-[150px_1fr]">
                  <dt className="font-bold">Boundary</dt>
                  <dd className="text-text-secondary">
                    Footings, structural repair, permits, electrical, drainage,
                    tax, access, and finish work are identified in the proposal.
                  </dd>
                </div>
              </dl>
            </Card>

            <Card variant="muted" padding="lg">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-text-secondary mb-2 text-xs font-bold tracking-widest uppercase">
                    Roof-plus-glass scope
                  </div>
                  <h3 className="text-2xl font-bold">
                    Roof-plus-glass outdoor room
                  </h3>
                </div>
                <div className="text-text-secondary text-right text-sm">
                  <div>Complete outdoor room</div>
                  <div>Project-specific</div>
                </div>
              </div>
              <div className="mb-6 rounded-sm border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
                <div className="text-text-secondary mb-1 text-sm font-bold tracking-widest uppercase">
                  Design and coordinate the complete scope
                </div>
                <div className="text-2xl font-bold">Roof + glass together</div>
                <div className="text-text-secondary mt-2 text-sm">
                  EDG plans the cover, glass, structure, drainage, electrical,
                  access, finishes, tax, and glass-wall work together.
                </div>
              </div>
              <ul className="text-text-secondary space-y-3 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  New roof or pergola cover plus glass-wall openings
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  Columns, beams, drainage, freight, and installation must be
                  coordinated
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  Electrical, finish, comfort accessories, and site access are
                  part of the complete project plan
                </li>
                <li className="flex gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
                  Final proposal required before ordering or committing to a
                  project total
                </li>
              </ul>
              <p className="text-text-secondary mt-6 text-sm leading-relaxed">
                An existing roof may reduce the amount of new roof work, but EDG
                still reviews the roof, beam, panel parking, gables, and site
                work before recommending the enclosure path.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Two project paths</div>
            <h2 className="section-title mb-4">
              Existing covered patio vs. roof plus glass
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The same glass wall can live in two very different projects. The
              roof and support structure determine how much of the installed
              scope has already been solved.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                If the covered patio already exists
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                The project may focus on glass walls, tracks, handles, seals,
                trim, and installation. EDG still needs to verify the existing
                beam or header, posts, floor level, drainage, and the space
                where panels will stack or fold.
              </p>
              <ul className="text-text-secondary space-y-3 text-sm">
                {[
                  'Existing roof and beam capacity or engineering path',
                  'Opening size, square condition, and attachment surface',
                  'Panel parking, doors, furniture, and traffic clearance',
                  'Deck, slab, floor transition, drainage, and finish details',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                If the roof and glass are new
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                A roof-plus-glass outdoor room brings the pergola or cover into
                the same decision: columns, beams, drainage, glass openings,
                electrical routing, and comfort accessories have to fit together
                before ordering.
              </p>
              <ul className="text-text-secondary space-y-3 text-sm">
                {[
                  'Roof footprint, column placement, and wall opening schedule',
                  'Roof drainage and the finished patio water path',
                  'Glass-wall freight, staging, lifting, and installation access',
                  'Permits, engineering, electrical, screens, heat, and lighting',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Configuration</div>
            <h2 className="section-title mb-4">
              Sliding vs. folding glass walls
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Sliding and folding glass walls use different opening paths. EDG
              plans the movement, hardware, support, and clear opening around
              the structure and the way you want to use the patio.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="muted" padding="lg">
              <h3 className="mb-3 text-2xl font-bold">Sliding layout</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Panels move along the track. This can work well when the opening
                has a predictable travel path and a clear end point, but the
                track length, panel quantity, handles, seals, and parking area
                still need to be coordinated.
              </p>
              <div className="border-edg-brand border-l-2 pl-4 text-sm leading-relaxed">
                EDG confirms panel count, opening size, end point, support, and
                track finish before the system is specified.
              </div>
            </Card>
            <Card variant="muted" padding="lg">
              <h3 className="mb-3 text-2xl font-bold">
                Folding or retractable layout
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Panels slide and stack to the side of the opening. That can
                create a wider clear opening, but it makes the parking location,
                opening direction, hinges, handles, and adjacent walls or posts
                important design decisions.
              </p>
              <div className="border-edg-brand border-l-2 pl-4 text-sm leading-relaxed">
                EDG confirms where the stack parks, how the opening direction
                affects traffic, and whether the panels should split directions.
              </div>
            </Card>
          </div>
          <p className="text-text-secondary mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed">
            EDG compares the opening schedule, glass selection, hardware,
            freight, installation, and structural assumptions before the final
            system is selected.
          </p>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              What moves the budget
            </div>
            <h2 className="section-title mb-4">
              The glass is only one line item
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A useful glass porch enclosure cost comparison shows the full path
              from opening measurement to installed, working system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((driver) => (
              <Card key={driver.title} variant="default" padding="lg">
                <driver.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{driver.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {driver.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                Before planning the enclosure
              </div>
              <h2 className="section-title mb-4">
                Structural prep, installation, and exclusions
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A useful plan starts with what the glass system needs from the
                patio. EDG verifies the opening, support, drainage, access, and
                project responsibilities before design and installation are set.
              </p>
            </div>
            <div className="grid gap-4">
              {fitChecks.map((check, index) => (
                <div
                  key={check}
                  className="flex gap-4 border-b border-black/10 pb-4 dark:border-white/10"
                >
                  <div className="bg-edg-brand text-edg-dark flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-text-secondary leading-relaxed">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-edg-brand mb-4 text-sm font-bold tracking-widest uppercase">
              Ready for a project-specific number?
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Tell EDG what is already built and what you want to enclose.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Opening sizes and photos help, but they are optional. EDG can
              start with the project location, what is already built, and the
              comfort goal.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
              EDG can review the existing cover or plan the roof and glass
              together, then separate product, freight, installation, structural
              prep, and exclusions in the quote.
            </p>
            <TrackedLink
              href={quoteHref}
              className={buttonClassName({ size: 'lg' })}
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <Link href="/systems/enclosures" className="hover:text-white">
                Explore glass enclosures
              </Link>
              <Link
                href="/outdoor-rooms/pergola-glass-outdoor-room"
                className="hover:text-white"
              >
                See the pergola + glass plan
              </Link>
              <Link
                href="/guides/motorized-pergola-permits-hoa-engineering"
                className="hover:text-white"
              >
                Review permits and engineering
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">FAQ</div>
            <h2 className="section-title mb-8">
              Glass enclosure cost questions
            </h2>
            <div className="space-y-4">
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
    </div>
  );
}
