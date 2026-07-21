import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  Ruler,
  ShieldCheck,
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
  title: 'Motorized Pergola Permits, HOA, and Engineering | EDG Guide',
  description:
    'Plan permit, HOA, and engineering review for a motorized pergola. EDG explains surveys, drawings, setbacks, electrical, wind, snow, drainage, and review risks.',
  alternates: {
    canonical: '/guides/motorized-pergola-permits-hoa-engineering',
  },
};

const reviewAreas = [
  {
    title: 'Property and placement',
    description:
      'A survey, lot coverage, easements, setbacks, patio location, and attachment method can all affect review.',
    icon: Home,
  },
  {
    title: 'Structure and engineering',
    description:
      'Permanent pergola systems may need drawings, footings, attachment details, wind or snow load information, and product documentation.',
    icon: ShieldCheck,
  },
  {
    title: 'Electrical and controls',
    description:
      'Motors, heaters, lights, fans, switches, sensors, and smart controls can bring electrical review into the scope.',
    icon: ClipboardCheck,
  },
  {
    title: 'HOA or design review',
    description:
      'Finish color, height, sightlines, columns, lighting, privacy panels, and drawings are often more important to reviewers than product names.',
    icon: FileText,
  },
];

const intakeChecklist = [
  'Plat of survey or site plan, if available',
  'Photos of the house wall, patio, roofline, doors, windows, and nearby property lines',
  'Rough dimensions and preferred coverage area',
  'HOA rules, architectural review notes, or neighborhood standards',
  'Any village, city, or county permit notes already received',
  'Electrical panel or nearby power location if heaters, lights, or controls are planned',
];

const commonRisks = [
  {
    risk: 'Designing the pergola before confirming the review path',
    betterMove:
      'Treat permit and HOA expectations as part of early system fit, not an afterthought after the product is selected.',
  },
  {
    risk: 'Assuming all aluminum pergolas are reviewed the same way',
    betterMove:
      'Review the actual structure, attachment, dimensions, loads, and accessories. A pergola with screens and heaters may be treated differently than a simple shade frame.',
  },
  {
    risk: 'Planning features after fabrication',
    betterMove:
      'Decide early whether screens, lighting, heaters, fans, sensors, or privacy walls belong in the first phase or need prep for later.',
  },
  {
    risk: 'Using online setback advice as a final answer',
    betterMove:
      'Use online rules as a starting point only. The property address, zoning district, easements, attachments, and reviewer interpretation matter.',
  },
];

const faqs = [
  {
    question: 'Do motorized pergolas usually need permits?',
    answer:
      'Many permanent outdoor structures require review, especially when they involve footings, attachment to a building, electrical work, roof coverage, or commercial use. The exact answer depends on the property and local authority.',
  },
  {
    question: 'Can EDG help with HOA or architectural review?',
    answer:
      'Yes. EDG can help assemble product information, finish direction, drawings, photos, and project context that make the proposed system easier for an HOA or architectural reviewer to evaluate.',
  },
  {
    question: 'Should I choose the manufacturer before checking permits?',
    answer:
      'Not usually. The permit and review path can affect span, attachment, height, drainage, electrical, and accessories. EDG starts with system fit so the product direction matches the actual constraints.',
  },
];

export default function MotorizedPergolaPermitsHoaEngineeringPage() {
  const articleSchema = generateArticleSchema({
    title: 'Motorized Pergola Permits, HOA, and Engineering',
    description:
      'Planning guide for permanent motorized pergola review, including permits, HOA expectations, engineering, site plans, electrical, and common project risks.',
    url: 'https://www.edgpatioshade.com/guides/motorized-pergola-permits-hoa-engineering',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.grayBronzeWhite}`,
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    category: 'Pergola Planning',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Guides', url: '/guides' },
    { name: 'Motorized Pergola Permits, HOA, and Engineering' },
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
              { label: 'Permits, HOA, and Engineering' },
            ]}
            className="mb-8"
          />
          <div className="max-w-4xl">
            <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
              Planning Guide
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Motorized pergola permits, HOA review, and engineering planning
            </h1>
            <p className="mb-10 max-w-3xl text-xl leading-relaxed text-zinc-300">
              A permanent pergola is not just a shade decision. Placement,
              structure, drainage, electrical, height, finish, and review
              requirements can shape the system before a final quote makes
              sense.
            </p>
            <Link href="/guides/pergola-system-fit-review">
              <Button size="lg">
                Check My Review Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              What can trigger review
            </div>
            <h2 className="section-title mb-4">
              The review path is part of system fit
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG does not invent local requirements. The right first move is to
              collect the details that let the team evaluate likely review
              complexity and ask the right local questions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviewAreas.map((area) => (
              <Card key={area.title} variant="default" padding="lg">
                <area.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{area.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Useful first intake
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Send the documents that reduce guessing.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                You do not need a complete permit package to start. But a few
                early details help EDG see whether the project is likely simple,
                sensitive, or structurally involved.
              </p>
            </div>
            <div className="space-y-4">
              {intakeChecklist.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-black/10 pb-4"
                >
                  <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                  <p className="text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mb-10 max-w-3xl">
            <div className="label-editorial-brand mb-4">Avoid these traps</div>
            <h2 className="section-title mb-4">
              Most review problems start as planning assumptions
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {commonRisks.map((item) => (
              <Card key={item.risk} variant="default" padding="lg">
                <div className="mb-3 flex items-center gap-3">
                  <Ruler className="text-edg-brand-text h-5 w-5" />
                  <h3 className="text-xl font-bold">{item.risk}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {item.betterMove}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Have HOA, permit, or engineering concerns?
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                Request a quote. EDG can help separate normal planning issues
                from scope-changing constraints.
              </p>
            </div>
            <Link href="/guides/pergola-system-fit-review">
              <Button size="lg" className="w-full justify-between">
                Request a Quote
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
