import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Camera,
  CloudRain,
  FileCheck2,
  Home,
  Ruler,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola Attached to a House: Planning Guide | EDG',
  description:
    'Planning a pergola attached to a house? EDG helps choose and coordinate an attached or freestanding motorized pergola around your home, roofline, drainage, and daily use.',
  alternates: {
    canonical: '/guides/pergola-attached-to-house',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Pergola Attached to a House: Planning Guide | EDG',
    description:
      'See how EDG plans an attached or freestanding louvered pergola around doors, rooflines, gutters, drainage, engineering, and installation.',
  },
};

const comparisonRows = [
  {
    title: 'Attached / wall-mounted',
    description:
      'A good starting direction when the patio is directly outside the house and the wall-side structure, roofline, and water transition can work together.',
    fit: 'Best for a close connection to the home and a compact, aligned footprint.',
    watch:
      'The house-side transition becomes part of the design: wall construction, siding or masonry, eaves, gutters, flashing, doors, and runoff all need to line up.',
    icon: Home,
  },
  {
    title: 'Freestanding beside the house',
    description:
      'Often the cleaner approach when the existing wall, roofline, or drainage path is not a good match—or when you want the structure to stand independently near the house.',
    fit: 'Best for more flexibility around placement, posts, grade changes, and an existing home exterior.',
    watch:
      'The outer frame, posts, foundation or slab, circulation, and drainage get their own plan. Being close to the house does not make it a wall-mounted project.',
    icon: Ruler,
  },
];

const constraintCards = [
  {
    title: 'Door height and trim',
    description:
      'EDG looks at the finished patio elevation, threshold, top of door and window trim, and the height available for a beam, louver cassette, screen housing, or glass track. A roof that feels right on paper can reduce clearance above the doors once trim and operation are accounted for.',
    icon: Ruler,
  },
  {
    title: 'Roofline and siding',
    description:
      'Photos of the eave, soffit, fascia, roof pitch, upper-story windows, siding or masonry, and any offsets help EDG plan the cleanest transition. The lowest line on the house is not always the right line for the pergola.',
    icon: Home,
  },
  {
    title: 'Gutters and water paths',
    description:
      'A louvered roof may collect water into its own gutters and posts when the selected system is specified for that function. EDG still needs to see where that water can discharge, how the existing house gutter behaves, and whether doors, foundations, stairs, or an outdoor kitchen sit in the path.',
    icon: CloudRain,
  },
  {
    title: 'Wind, snow, and approvals',
    description:
      'The selected system, attachment, accessories, local exposure, and property requirements shape the structure. Screens, glass, heaters, lighting, a roof deck, or a permit and HOA review can make engineering part of the first design conversation.',
    icon: ShieldCheck,
  },
];

const approachChanges = [
  {
    title: 'The wall is not the right support condition',
    description:
      'A wall-mounted concept may become a freestanding layout, a project with independent posts, or a design that needs a structural professional to confirm the existing building. EDG helps identify the practical path before the design is finalized.',
  },
  {
    title: 'The water transition is harder than the roof connection',
    description:
      'If the existing gutter, siding, roof runoff, or foundation drainage conflicts with the pergola’s collection path, the solution may involve a different orientation, spacing from the house, or a coordinated drainage plan before the roof is selected.',
  },
  {
    title: 'The accessories change the load or opening plan',
    description:
      'Screens, glass, heaters, lighting, sensors, privacy walls, and outdoor kitchens are not afterthoughts. They can affect the frame, clear openings, power path, wind exposure, and engineering plan.',
  },
  {
    title: 'The jurisdiction or HOA asks for a different path',
    description:
      'A permit, architectural review, property-line constraint, or existing deck or roof condition can change the dimensions, posts, attachment approach, or supporting documents. EDG coordinates the required design and engineering steps with the right project professionals.',
  },
];

const faqs = [
  {
    question: 'Can any pergola be attached to a house?',
    answer:
      'No. The wall condition, roofline, drainage, wind and snow exposure, accessories, and property requirements all matter. EDG reviews the home and site before recommending an attached louvered pergola.',
  },
  {
    question: 'Is an attached pergola better than a freestanding pergola?',
    answer:
      'Neither is automatically better. An attached pergola can make sense beside a patio door when the home-side transition works. A freestanding pergola can be the better answer when the wall, roofline, water path, grade, or review requirements make an independent structure more practical.',
  },
  {
    question:
      'Will a louvered pergola attached to a house keep water away from the wall?',
    answer:
      'That depends on the selected system and the complete water path. Integrated roof gutters and posts can manage rain when they are specified and installed for that function, but the house-side transition, existing gutters, downspouts, patio pitch, and discharge location still need to be coordinated.',
  },
  {
    question: 'Does an attached aluminum pergola need engineering or a permit?',
    answer:
      'It may. Permanent structures, building attachments, electrical work, roof or deck conditions, wind and snow exposure, and local rules can bring engineering or permitting into scope. EDG helps coordinate those steps, while the property and jurisdiction determine the final requirements.',
  },
  {
    question: 'What should I send before requesting a quote?',
    answer:
      'Photos and rough measurements are helpful but optional for an initial Request a Quote. Start with your contact information and project interest; if you have wide and close photos of the house-side patio, roofline, gutters, doors, windows, proposed coverage area, rough width, projection, height, location, or HOA and permit information, include them. Exact construction details can be reviewed after the initial fit check.',
  },
];

export default function PergolaAttachedToHousePage() {
  const pageUrl =
    'https://www.edgpatioshade.com/guides/pergola-attached-to-house';
  const heroImage = `https://www.edgpatioshade.com${images.projects.wade.hero}`;
  const articleSchema = generateArticleSchema({
    title: 'Pergola Attached to a House: Planning Guide',
    description:
      'Planning guide for homeowners comparing attached and freestanding motorized pergolas beside an existing house.',
    url: pageUrl,
    image: heroImage,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Pergola Planning',
  });
  const faqSchema = generateFAQSchema(faqs);

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
              { label: 'Pergola Attached to a House' },
            ]}
            className="mb-8 text-zinc-300"
          />
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Attached Pergola Planning Guide
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
                Pergola attached to a house: start with the connection.
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
                EDG designs an attached pergola around your patio doors,
                roofline, and the way you use the space. We check the connection
                and drainage before recommending the layout.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <LinkButton
                  href="/guides/pergola-system-fit-review"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </LinkButton>
                <LinkButton
                  href="/guides/motorized-pergola-planning"
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Read the Planning Guide
                </LinkButton>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={images.projects.wade.hero}
                alt="Motorized louvered roof and glass outdoor room beside a home"
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
              Attached and freestanding solve different site problems.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A pergola attached to a house is not automatically the most
              efficient or least complicated option. Start with the way the
              patio meets the home, then confirm whether the wall, roofline,
              drainage, and local requirements support that direction.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {comparisonRows.map((row) => (
              <Card key={row.title} variant="default" padding="lg">
                <row.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-2xl font-bold">{row.title}</h3>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  {row.description}
                </p>
                <div className="space-y-4 border-t border-black/10 pt-5 text-sm leading-relaxed">
                  <p>
                    <span className="font-bold">Typical fit: </span>
                    {row.fit}
                  </p>
                  <p className="text-text-secondary">
                    <span className="text-text-primary font-bold">
                      Watch closely:{' '}
                    </span>
                    {row.watch}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              House-side constraints
            </div>
            <h2 className="section-title mb-4">
              The roofline is part of the pergola plan.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Before EDG recommends an attached aluminum pergola, the connection
              has to work visually, structurally, and in the rain. These are the
              details that most often change the first sketch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {constraintCards.map((card) => (
              <Card key={card.title} variant="muted" padding="lg">
                <card.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">Helpful photos</div>
              <h2 className="mb-5 text-3xl font-bold md:text-5xl">
                Show EDG the connection, not just the patio.
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Photos are helpful but optional. A wide shot shows the
                relationship between the proposed roof and the home. Close-ups
                reveal the conditions that can change an attached louvered
                pergola into a freestanding plan.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Full house-side wall and patio',
                  'Door, window, trim, and threshold details',
                  'Eave, soffit, fascia, gutter, and downspout',
                  'Patio edge, steps, grade, and nearby obstacles',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Camera className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card variant="dark" padding="lg" className="text-white">
              <TriangleAlert className="text-edg-brand mb-5 h-8 w-8" />
              <h3 className="mb-4 text-2xl font-bold">How EDG helps</h3>
              <p className="leading-relaxed text-zinc-300">
                EDG evaluates the home, roofline, drainage, and intended use,
                then coordinates system selection, design, engineering,
                permitting, installation, and care where we serve homeowners.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              When the site changes the approach
            </div>
            <h2 className="section-title mb-4">
              Good design starts with the connection.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG connects the product choice to the building, water path,
              accessories, and way the patio will be used. That lets us shape
              the design, engineering, permitting, installation, and care plan
              around the house instead of forcing the house to fit a package.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {approachChanges.map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <div className="mb-4 flex items-start gap-3">
                  <FileCheck2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="border-edg-brand bg-surface-muted mt-10 border-l-4 p-6 md:p-8">
            <p className="text-lg leading-relaxed">
              An attached pergola needs a suitable connection to the house, a
              clear drainage plan, and support for the proposed layout. EDG
              reviews the house and site before recommending an attached or
              freestanding configuration. Explore our{' '}
              <Link
                href="/systems/pergolas"
                className="font-bold underline underline-offset-4"
              >
                pergola options
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Have a wall, roofline, or drainage question?
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Photos and rough measurements are helpful but optional. Share
                them if available, and EDG will help separate a likely attached
                pergola path from a project that needs freestanding structure,
                engineering, or more review before a final system is chosen.
              </p>
            </div>
            <LinkButton
              href="/guides/pergola-system-fit-review"
              size="lg"
              className="w-full justify-between"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="mb-8 text-center">
              <div className="label-editorial-brand mb-4">Common questions</div>
              <h2 className="section-title">Attached pergola planning FAQs</h2>
            </div>
            {faqs.map((faq) => (
              <Card key={faq.question} variant="muted" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="label-editorial-brand mb-4">Keep planning</div>
              <h2 className="section-title mb-4">Related planning guides</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Continue with the broader pergola planning, permit and
                engineering, or elevated-structure guides before finalizing a
                house-side direction.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/guides/motorized-pergola-planning">
                <Card variant="default" padding="md" className="h-full">
                  <h3 className="mb-2 font-bold">Motorized pergola planning</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Review system fit, drainage, controls, accessories, and
                    budget before product selection.
                  </p>
                </Card>
              </Link>
              <Link href="/guides/motorized-pergola-permits-hoa-engineering">
                <Card variant="default" padding="md" className="h-full">
                  <h3 className="mb-2 font-bold">Permits and engineering</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    See how surveys, drawings, structure, electrical, and review
                    expectations shape the project.
                  </p>
                </Card>
              </Link>
              <Link href="/guides/motorized-pergola-deck-roof-deck">
                <Card variant="default" padding="md" className="h-full">
                  <h3 className="mb-2 font-bold">
                    Deck and roof-deck planning
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Check elevated structure, waterproofing, access, drainage,
                    and electrical conditions.
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
