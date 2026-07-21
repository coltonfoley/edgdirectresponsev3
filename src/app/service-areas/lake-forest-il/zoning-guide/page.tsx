import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
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
  title: 'Lake Forest Pergola Permit & Zoning Guide | EDG Patio & Shade',
  description:
    'Guide to Lake Forest, IL pergola permit planning, building code review, accessory-structure rules, plot plans, City contacts, and outdoor living project questions.',
  alternates: {
    canonical: '/service-areas/lake-forest-il/zoning-guide',
  },
};

const requirements = [
  {
    requirement: 'Permit confirmation',
    details:
      'The City says most home improvement projects require a permit and directs residents to confirm requirements with Community Development.',
  },
  {
    requirement: 'Online application',
    details:
      'The City encourages permit applications and construction documents through its online web portal.',
  },
  {
    requirement: 'Plans and plot plan',
    details:
      'City code calls for architectural plans and plot plans drawn at a scale of at least one-eighth inch to the foot unless the Director accepts a written description.',
  },
  {
    requirement: 'Zoning compliance',
    details:
      'A permit cannot be issued unless the premises complies with zoning and other City ordinances.',
  },
  {
    requirement: 'Accessory-structure rules',
    details:
      'Detached accessory structures in residence or general residence districts have yard, height, and placement rules that can affect a pergola layout.',
  },
  {
    requirement: 'Permit timing',
    details:
      'The code says a permit can be void if work has not started within 90 days and completed within one year of issuance.',
  },
  {
    requirement: 'Cash bond possibility',
    details:
      'The code requires a cash bond of at least $500 on new construction projects and additions to existing buildings.',
  },
  {
    requirement: 'Residential code contact',
    details:
      'The City lists Amias Turman, Residential Plans Examiner, at (847) 810-3513 for residential code questions.',
  },
];

const gotchas = [
  'A freestanding pergola may be reviewed differently than one attached to the house.',
  'A structure closer than 10 feet to the principal building can be treated as part of that principal structure under the accessory-building rule.',
  'Screens, lights, heaters, and controls can add electrical and plan-review questions beyond the roof frame.',
  'Large lots still need survey review because setbacks, required yards, easements, and accessory-structure limits can decide where posts belong.',
];

const officialSources = [
  {
    label: 'City of Lake Forest Building Permits',
    href: 'https://www.cityoflakeforest.com/departments/community_development/building_permits.php',
  },
  {
    label: 'City of Lake Forest Building Code',
    href: 'https://www.cityoflakeforest.com/departments/community_development/building___zoning_codes.php',
  },
  {
    label: 'City Code Section 150.145: Permits and Fees',
    href: 'https://codelibrary.amlegal.com/codes/lakeforest/latest/lakeforest_il/0-0-0-11703',
  },
  {
    label: 'City Code Section 159.009: Accessory Buildings',
    href: 'https://codelibrary.amlegal.com/codes/lakeforest/latest/lakeforest_il/0-0-0-15389',
  },
];

const faqs = [
  {
    question: 'Does every Lake Forest pergola require a permit?',
    answer:
      'Do not assume either way. The City says most home improvement projects require a permit and the code requires a permit before construction, alteration, repair, or removal of a building or structure. Confirm the exact scope with Community Development before buying or building.',
  },
  {
    question: 'What City contact should I start with?',
    answer:
      'The Building Permits page directs permit questions to Carolynn Gaylord at (847) 810-3521. The Building Code page lists Amias Turman, Residential Plans Examiner, at (847) 810-3513 for residential code questions.',
  },
  {
    question: 'What should be reviewed before choosing a pergola size?',
    answer:
      'Review the survey, required yards, easements, house attachment, distance to the principal structure, foundation or pier needs, electrical work, drainage, and whether screens or heaters are part of the project.',
  },
  {
    question: 'Can EDG submit the permit for me?',
    answer:
      'EDG can help assemble and explain the design package, structure notes, and permit-aware details. The homeowner, contractor, and City decide the final submission path, and the City remains the authority on approval.',
  },
];

const permitGuideContactHref = buildContactHref({
  area: 'lake-forest',
  source: 'lake_forest_permit_guide',
});

export default function LakeForestZoningGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Lake Forest Pergola Permit and Zoning Guide',
            description:
              'Permit, building code, accessory-structure, plot plan, and contact guidance for pergola projects in Lake Forest, IL.',
            author: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            mainEntityOfPage:
              'https://www.edgpatioshade.com/service-areas/lake-forest-il/zoning-guide',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              {
                label: 'Lake Forest, IL',
                href: '/service-areas/lake-forest-il',
              },
              { label: 'Permit Guide' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/lake-forest-il"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lake Forest
          </Link>
          <div className="max-w-4xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Lake Forest permit planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Lake Forest Pergola Permit & Zoning Guide
            </h1>
            <p className="text-text-inverse-muted max-w-3xl text-xl leading-relaxed">
              What homeowners should review before planning a motorized pergola,
              louvered roof, screen system, or permanent outdoor shade structure
              in Lake Forest, IL. Always confirm final requirements with the
              City before work begins.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <div className="label-editorial-brand mb-4">Quick reference</div>
              <h2 className="section-title mb-6">
                The City items that matter before design is final
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Lake Forest publishes building permit guidance, adopted code
                information, and City code sections that affect permanent
                structures. The practical takeaway is simple: decide the pergola
                layout after the survey, structure type, attachment, electrical
                scope, and zoning questions are understood.
              </p>
              <a
                href="https://www.cityoflakeforest.com/departments/community_development/building_permits.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  Open City permit page
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
                      <td className="text-text-secondary border-b border-zinc-100 px-4 py-3">
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
              <h3 className="mb-3 text-xl font-bold">Yards and placement</h3>
              <p className="text-text-secondary leading-relaxed">
                Accessory-structure rules can affect required yard coverage,
                height, side-yard placement, corner lots, and where detached
                structures may sit in R-1 and R-2 districts.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Attached vs. detached</h3>
              <p className="text-text-secondary leading-relaxed">
                City code says an accessory building or structure closer than 10
                feet to the principal building is considered part of the
                principal structure and must comply with those requirements.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <FileText className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Plans and review</h3>
              <p className="text-text-secondary leading-relaxed">
                The City reviews plans electronically. A clear package should
                explain structure, layout, plot plan, electrical scope, and
                accessory features before construction begins.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Common Lake Forest surprises
              </div>
              <h2 className="section-title mb-6">
                Design around review before quoting the final structure
              </h2>
              <div className="space-y-4">
                {gotchas.map((item) => (
                  <div key={item} className="flex gap-3">
                    <TriangleAlert className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Card variant="muted" padding="lg">
              <Phone className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-2xl font-bold">
                City contacts to verify
              </h3>
              <p className="text-text-secondary mb-5 leading-relaxed">
                The City permit page lists Carolynn Gaylord at (847) 810-3521
                for permit questions. The building code page lists Amias Turman,
                Residential Plans Examiner, at (847) 810-3513 for residential
                code questions.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                City Hall general contact listed by the City: 220 East Deerpath,
                Lake Forest, IL 60045, (847) 234-2600,
                cityhall@cityoflakeforest.com.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Official sources</div>
            <h2 className="section-title mb-6">
              Sources used for this Lake Forest guide
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {officialSources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-border bg-surface hover:border-edg-brand/40 block border p-5 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold">{source.label}</span>
                    <ArrowRight className="text-edg-brand-text h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Lake Forest Permit Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
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

      <section className="bg-surface-dark text-text-inverse py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Plan the permit questions before the pergola quote.
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              EDG can help review the site, structure, screen, electrical, and
              layout questions that matter before Lake Forest homeowners commit
              to a permanent outdoor living system.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/service-areas/lake-forest-il/motorized-pergolas">
                <Button size="lg">Explore Lake Forest Pergolas</Button>
              </Link>
              <Link href={permitGuideContactHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
