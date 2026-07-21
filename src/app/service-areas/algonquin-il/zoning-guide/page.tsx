import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';

export const metadata: Metadata = {
  title: 'Algonquin Pergola Permit & Zoning Guide | EDG Patio & Shade',
  description:
    'Guide to Algonquin, IL pergola permits, setbacks, survey requirements, plans, piers, inspections, JULIE, and Village contact information.',
  alternates: {
    canonical: '/service-areas/algonquin-il/zoning-guide',
  },
};

const requirements = [
  {
    requirement: 'Permit application',
    details:
      'Village checklist points homeowners to the Building Permit Application.',
  },
  {
    requirement: 'Survey and plans',
    details: 'Plat of survey and project plans are listed as submittals.',
  },
  {
    requirement: 'Location',
    details: 'Pergola must be in the rear yard.',
  },
  {
    requirement: 'Property-line setback',
    details: 'Not less than 5 feet from property lines.',
  },
  {
    requirement: 'Easements',
    details: 'Pergola must be outside any easement.',
  },
  {
    requirement: 'Foundation or piers',
    details:
      'Pergola must be attached to a foundation or piers adequate to support and retain the structure.',
  },
  {
    requirement: 'Permit fee',
    details:
      '$85 for first 150 square feet of area plus $20 for each additional 150 square feet or fraction.',
  },
  {
    requirement: 'Timeline',
    details:
      'Work must be started and completed within 6 months of permit issue date.',
  },
  {
    requirement: 'Inspections',
    details:
      'Inspections are required as construction progresses after the permit is issued.',
  },
  {
    requirement: 'Before digging',
    details: 'Contact JULIE at 811 before pier, footing, or utility work.',
  },
];

const gotchas = [
  'A pretty layout can fail if the posts land inside an easement or too close to the property line.',
  'A temporary kit may be treated differently from a permanent motorized pergola, so do not assume online kit rules apply.',
  'Adding screens, heaters, lighting, or electrical controls can create extra coordination needs beyond the pergola frame.',
  'If the pergola connects to a deck, Algonquin points homeowners to the deck permit checklist too.',
];

const faqs = [
  {
    question: 'Does Algonquin require a permit for every pergola?',
    answer:
      'The Village checklist is written for pergola permits and says temporary pergolas or kits may not require a permit. Permanent structures should be verified with Community Development before purchase or construction.',
  },
  {
    question: 'What is the most important setback rule on the checklist?',
    answer:
      'The published checklist says the pergola must be in the rear yard, at least 5 feet from property lines, and outside any easement.',
  },
  {
    question: 'Who should I contact at the Village of Algonquin?',
    answer:
      'The checklist directs residents to the Community Development Department at 847-658-2700, press 3, or permits@algonquin.org.',
  },
  {
    question: 'Can EDG handle the permit details?',
    answer:
      'EDG can help plan the structure, drawings, foundation approach, and permit support around the Village requirements, but the Village remains the final authority on what is accepted.',
  },
];

const permitGuideContactHref = buildContactHref({
  area: 'algonquin',
  product: 'pergola',
  source: 'algonquin_zoning_guide',
});

export default function AlgonquinZoningGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Algonquin Pergola Permit and Zoning Guide',
            description:
              'Permit, setback, survey, foundation, inspection, and contact guidance for pergola projects in Algonquin, IL.',
            author: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            mainEntityOfPage:
              'https://www.edgpatioshade.com/service-areas/algonquin-il/zoning-guide',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Algonquin, IL', href: '/service-areas/algonquin-il' },
              { label: 'Permit Guide' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/algonquin-il"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Algonquin
          </Link>
          <div className="max-w-4xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Algonquin permit planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Algonquin Pergola Permit & Zoning Guide
            </h1>
            <p className="text-text-inverse-muted max-w-3xl text-xl leading-relaxed">
              What homeowners should know before planning a motorized pergola,
              louvered roof, or permanent shade structure in Algonquin, IL.
              Always verify final requirements with the Village before work
              begins.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Quick reference
              </div>
              <h2 className="section-title mb-6">
                The published checklist items that matter first
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Algonquin has a dedicated pergola permit checklist. The key
                items are survey, plans, rear-yard location, 5-foot property-line
                separation, easement clearance, proper foundation or piers,
                inspections, and JULIE before digging.
              </p>
              <a
                href="https://www.algonquin.org/egov/apps/document/center.egov?id=8655&view=item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  Open Village checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="overflow-hidden border border-zinc-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="border-b border-zinc-200 px-4 py-3 font-bold">
                      Requirement
                    </th>
                    <th className="border-b border-zinc-200 px-4 py-3 font-bold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requirements.map((item) => (
                    <tr key={item.requirement} className="even:bg-zinc-50">
                      <td className="border-b border-zinc-100 px-4 py-3 font-bold">
                        {item.requirement}
                      </td>
                      <td className="border-b border-zinc-100 px-4 py-3 text-text-secondary">
                        {item.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <Ruler className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Setbacks and easements</h3>
              <p className="text-text-secondary leading-relaxed">
                The published rule is simple but important: rear yard, at least
                5 feet from property lines, and outside easements. This is why
                the plat of survey should be reviewed before a pergola size is
                treated as final.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Piers and foundations</h3>
              <p className="text-text-secondary leading-relaxed">
                A permanent pergola is not just patio furniture. Algonquin says
                the structure must be attached to a foundation or piers adequate
                to support and retain it, which affects design, cost, and
                installation sequencing.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <FileText className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Plans and inspections</h3>
              <p className="text-text-secondary leading-relaxed">
                The checklist calls for plans and inspections after permit
                issuance. If the pergola includes electrical work, screens,
                heaters, or controls, plan the package clearly before submittal.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Common mistakes
              </div>
              <h2 className="section-title mb-6">
                The gotchas that slow pergola projects down
              </h2>
              <div className="space-y-4">
                {gotchas.map((item) => (
                  <div key={item} className="flex gap-3">
                    <TriangleAlert className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Card variant="muted" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                Recommended permit path
              </h3>
              <ol className="space-y-4">
                {[
                  'Collect the plat of survey and photos of the patio, house wall, and yard.',
                  'Mark the desired pergola footprint and check property lines, easements, doors, windows, and utilities.',
                  'Decide whether the pergola should be freestanding or attached.',
                  'Confirm screens, heaters, lighting, and electrical needs before plans are prepared.',
                  'Submit permit documents, wait for approval, schedule work, and call JULIE before digging.',
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-edg-brand text-sm font-bold text-edg-dark">
                      {index + 1}
                    </span>
                    <span className="text-text-secondary leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Permit questions
              </div>
              <h2 className="section-title">
                Algonquin pergola permit FAQ
              </h2>
            </div>
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

      <Section className="section-md bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <CheckCircle2 className="text-edg-brand mx-auto mb-5 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want us to plan the pergola around the rules?
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              Send your address, survey if you have it, patio photos, and rough
              dimensions. We will help you decide the next practical step.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={permitGuideContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button size="lg" variant="secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  815-581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
