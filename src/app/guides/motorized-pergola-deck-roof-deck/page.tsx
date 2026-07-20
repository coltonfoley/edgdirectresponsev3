import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Ruler,
  ShieldCheck,
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
  title: 'Motorized Pergola on a Deck or Roof Deck | Feasibility Guide',
  description:
    'Can a motorized pergola go on a deck or roof deck? EDG explains structure, wind, access, drainage, electrical, permits, and when a site review is needed.',
  alternates: {
    canonical: '/guides/motorized-pergola-deck-roof-deck',
  },
};

const feasibilityChecks = [
  {
    title: 'Structure below the surface',
    description:
      'The pergola load has to move into framing, beams, columns, footings, or the building structure. Deck boards alone are not the support system.',
    icon: ShieldCheck,
  },
  {
    title: 'Wind exposure',
    description:
      'Elevated spaces feel different loads than sheltered patios. Roof decks, corner lots, lakefront sites, and restaurants need extra wind review.',
    icon: Wind,
  },
  {
    title: 'Drainage path',
    description:
      'Closed louvers move water into gutters and posts. On decks and roof decks, the water path has to protect the building envelope and surrounding finishes.',
    icon: CloudRain,
  },
  {
    title: 'Access and installation',
    description:
      'Staging, lifting, carrying path, stair access, roof access, street access, and crane needs can change both feasibility and budget.',
    icon: Ruler,
  },
];

const comparisonRows = [
  {
    condition: 'Existing deck',
    likelyIssue: 'Framing, footings, railing conflicts, post locations',
    whatToSend:
      'Deck photos, underside access photos, rough dimensions, age of deck',
  },
  {
    condition: 'Garage roof deck',
    likelyIssue: 'Attachment, roof membrane, water management, wind, access',
    whatToSend:
      'Wide photos, roof edge details, drawings if available, access path',
  },
  {
    condition: 'Restaurant roof deck',
    likelyIssue:
      'Commercial review, wind, structural loads, schedule, guest flow',
    whatToSend:
      'Plans, occupancy goals, photos, hours of operation, desired coverage',
  },
  {
    condition: 'Patio on grade',
    likelyIssue:
      'Footings, drainage, hardscape coordination, electrical routing',
    whatToSend: 'Patio photos, dimensions, house wall photos, drainage notes',
  },
];

const faqs = [
  {
    question: 'Can EDG install a motorized pergola on an existing deck?',
    answer:
      'Sometimes. The deck has to be reviewed as a structure, not just a surface. The framing, footings, beam layout, age, condition, railing, and post locations can all affect whether the pergola can be supported safely.',
  },
  {
    question: 'Can a roof deck pergola be freestanding?',
    answer:
      'A roof deck pergola may look freestanding above the deck surface, but the load still has to be resolved through the roof and building structure. Wind uplift, waterproofing, attachment, and drainage are usually the main issues.',
  },
  {
    question: 'What makes roof deck projects more expensive?',
    answer:
      'Roof deck projects often require more engineering, more careful attachment, harder access, added waterproofing coordination, and more labor planning. The pergola itself is only one part of the scope.',
  },
];

export default function MotorizedPergolaDeckRoofDeckPage() {
  const articleSchema = generateArticleSchema({
    title: 'Motorized Pergola on a Deck or Roof Deck',
    description:
      'Feasibility guide for motorized pergolas on existing decks, garage roof decks, commercial roof decks, and elevated terraces.',
    url: 'https://www.edgpatioshade.com/guides/motorized-pergola-deck-roof-deck',
    image: `https://www.edgpatioshade.com${images.projects.carmines.hero}`,
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    category: 'Pergola Feasibility',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Motorized Pergola on a Deck or Roof Deck' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Deck and Roof Deck Pergolas' },
            ]}
            className="mb-8"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                Feasibility Guide
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
                Can you put a motorized pergola on a deck or roof deck?
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-zinc-300">
                Yes in some cases, but the answer depends on structure, wind,
                drainage, access, waterproofing, electrical routing, and review
                requirements. The surface is only the beginning.
              </p>
              <Link href="/guides/pergola-system-fit-review">
                <Button size="lg">
                  Review My Deck or Roof Deck
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.projects.carmines.hero}
                alt="Commercial rooftop pergola project in Chicago"
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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Four questions before pricing
            </div>
            <h2 className="section-title mb-4">
              A deck pergola is a structural question first
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A premium motorized pergola can look simple once it is installed.
              The planning work is what keeps the system from becoming a wind,
              water, or attachment problem later.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {feasibilityChecks.map((check) => (
              <Card key={check.title} variant="default" padding="lg">
                <check.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{check.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {check.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              What changes by site type
            </div>
            <h2 className="section-title mb-4">
              The same pergola footprint can mean very different projects
            </h2>
          </div>
          <div className="overflow-hidden border border-black/10">
            <div className="bg-edg-dark grid text-sm font-bold tracking-widest text-white uppercase md:grid-cols-3">
              <div className="p-4">Condition</div>
              <div className="p-4">Likely issue</div>
              <div className="p-4">Useful first intake</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.condition}
                className="grid border-t border-black/10 md:grid-cols-3"
              >
                <div className="p-4 font-bold">{row.condition}</div>
                <div className="text-text-secondary p-4">{row.likelyIssue}</div>
                <div className="text-text-secondary p-4">{row.whatToSend}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.projects.greco.hero}
                alt="Motorized pergola integrated with a complex sunken seating area"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">Project proof</div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Complex sites need a system-fit review, not a catalog answer.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                EDG has planned pergolas around rooftop hospitality spaces,
                sunken seating areas, poolside outdoor rooms, landscape
                renovations, and existing structures. Those jobs succeed when
                structure, drainage, and controls are handled before the product
                order.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                If the project may need a custom structural frame, review the{' '}
                <Link
                  href="/guides/steel-vs-aluminum-pergolas"
                  className="text-edg-brand-text font-bold underline underline-offset-4"
                >
                  steel-versus-aluminum comparison
                </Link>{' '}
                before assuming every rooftop pergola should use the same
                material or roof assembly.
              </p>
              <div className="space-y-3">
                {[
                  'Send wide photos before close-up detail shots.',
                  'Include the underside of a deck if accessible.',
                  'Share drawings, surveys, or HOA notes if you have them.',
                  'Tell us whether screens, heat, lighting, or privacy are part of the same scope.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Not sure if your deck can support a pergola?
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Send EDG photos, rough dimensions, and the site context. We will
                help identify whether the project deserves a deeper design
                review.
              </p>
            </div>
            <Link href="/guides/pergola-system-fit-review">
              <Button size="lg" className="w-full justify-between">
                Start System Fit Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
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
    </div>
  );
}
