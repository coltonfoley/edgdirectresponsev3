import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Info,
  MapPin,
  Phone,
  ShieldCheck,
  TriangleAlert,
  Waves,
} from 'lucide-react';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Sanibel Permit Guide for Lanais & Pergolas | EDG',
  description:
    'Sanibel permit guide for lanai replacement, screen enclosure alternatives, louvered pergolas, flood review, product approvals, and the FEMA 50% rule.',
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living/zoning-guide',
  },
};

const requirements = [
  {
    requirement: 'Permit starting point',
    details:
      'Use the City of Sanibel Building Division forms and confirm the right application before ordering a structure.',
  },
  {
    requirement: 'Site plan',
    details:
      'City checklist guidance calls for location, dimensions, property address, boundaries, easements, and setbacks.',
  },
  {
    requirement: 'Flood-zone review',
    details:
      'Sanibel says proposed development is reviewed against FEMA, Florida Building Code, and local floodplain rules.',
  },
  {
    requirement: '50% rule',
    details:
      'Repairs or improvements can be reviewed for substantial damage or substantial improvement at permit time.',
  },
  {
    requirement: 'Separate permits',
    details:
      'Sanibel checklist language says accessory structures must be permitted separately, including screen enclosures.',
  },
  {
    requirement: 'Product documentation',
    details:
      'Ask for Florida Product Approval numbers, Miami-Dade NOA documents where applicable, and project-specific engineering.',
  },
  {
    requirement: 'Vegetation and wildlife',
    details:
      'Sanibel forms include vegetation and wildlife review items, so tree, habitat, and site disturbance questions matter.',
  },
  {
    requirement: 'Final authority',
    details:
      'The City of Sanibel and the local building official decide what is accepted for a specific property.',
  },
];

const gotchas = [
  'Screen enclosures, lanais, pergolas, awnings, and motorized screens may not use the same permit checklist or review path.',
  'A product approval number is not the same as a complete permit. Local installation conditions still matter.',
  'Flood elevation, AE Coastal or VE zones, and existing nonconforming conditions can change the rebuild path.',
  'A clean design can still get delayed if the site plan misses easements, setbacks, vegetation, or drainage context.',
];

const faqs = [
  {
    question: 'Do I need a permit to replace a Sanibel lanai or screen enclosure?',
    answer:
      'Most permanent outdoor structures should be verified with the City of Sanibel before work starts. Sanibel Building Division guidance lists accessory structure and screen enclosure materials, and a City checklist says accessory structures must be permitted separately.',
  },
  {
    question: 'What is the FEMA 50% rule in Sanibel?',
    answer:
      'Sanibel explains that repairs, alterations, improvements, and demolition can be reviewed for substantial damage or substantial improvement at permit time. If the cost exceeds 50% of the market value of a noncompliant building, current floodplain standards may apply.',
  },
  {
    question: 'Can a louvered pergola change the lanai rebuild plan?',
    answer:
      'Sometimes, but it is a design and permit question, not a universal yes. EDG can help compare a louvered roof, motorized screens, or glass against the site, attachment conditions, wind documentation, and local review requirements.',
  },
  {
    question: 'Does Miami-Dade approval guarantee Sanibel permit approval?',
    answer:
      'No. Miami-Dade NOA or Florida Product Approval documentation can support a permit package when it applies to the selected system, but the Sanibel building official still reviews the specific project, installation details, and property conditions.',
  },
];

const permitGuideContactHref = buildContactHref({
  type: 'fit-review',
  product: 'permit-guide',
  area: 'sanibel',
  source: 'sanibel_zoning_guide',
});

export default function SanibelZoningGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Sanibel Permit Guide for Lanais, Pergolas, and Screen Enclosure Alternatives',
            description:
              'Permit planning guidance for Sanibel lanai replacement, modern lanai systems, louvered pergolas, screen enclosure alternatives, flood review, and product documentation.',
            author: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            mainEntityOfPage:
              'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living/zoning-guide',
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
              { label: 'Sanibel, FL', href: '/service-areas/sanibel-outdoor-living' },
              { label: 'Permit Guide' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/sanibel-outdoor-living"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sanibel outdoor living
          </Link>
          <div className="max-w-4xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Sanibel permit planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Sanibel Permit Guide for Lanais, Pergolas & Screen Alternatives
            </h1>
            <p className="text-text-inverse-muted max-w-3xl text-xl leading-relaxed">
              What homeowners should verify before replacing a lanai, removing a
              covered outdoor structure, adding a louvered pergola, or
              planning motorized screens on Sanibel Island.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Quick reference
              </div>
              <h2 className="section-title mb-6">
                Treat permitting as the first design constraint
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Sanibel is a barrier island with floodplain, vegetation,
                wildlife, stormwater, and building-code review layered into
                outdoor projects. The right first move is not picking a pergola
                color. It is confirming the project category, site limits,
                flood-zone context, product documentation, and whether the FEMA
                50% rule affects the scope.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.mysanibel.com/401/Building-Applications-and-Forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    Sanibel building forms
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://www.mysanibel.com/418/Flood-Information"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    Sanibel flood guidance
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="overflow-hidden border border-zinc-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="border-b border-zinc-200 px-4 py-3 font-bold">
                      Requirement
                    </th>
                    <th className="border-b border-zinc-200 px-4 py-3 font-bold">
                      What to verify
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
          <div className="grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <Waves className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Floodplain review</h3>
              <p className="text-text-secondary leading-relaxed">
                Sanibel says proposed development is reviewed against federal,
                state, and local floodplain standards. Existing elevations,
                flood openings, equipment location, and the specific structure
                being improved can all matter.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <FileText className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Product documentation</h3>
              <p className="text-text-secondary leading-relaxed">
                For coastal outdoor systems, ask for engineering, Florida
                Product Approval or Miami-Dade NOA documents where applicable,
                installation limits, anchoring details, and any exclusions that
                affect the property.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Local acceptance</h3>
              <p className="text-text-secondary leading-relaxed">
                Documentation supports the review. It does not replace the
                local building official. Sanibel remains the final authority on
                permits, inspections, and site-specific requirements.
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
                Common permit mistakes
              </div>
              <h2 className="section-title mb-6">
                The issues that slow coastal projects down
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
                  'Collect the survey, address, flood-zone information, photos, and dimensions before selecting a system.',
                  'Identify whether the work is lanai replacement, screen enclosure work, pergola, awning, site work, electrical, or a combination.',
                  'Confirm whether the 50% rule, flood elevation, vegetation, wildlife, easements, setbacks, or HOA review affect the scope.',
                  'Match the design to documentation: engineering, product approvals, anchoring details, drainage, electrical, screens, and attachments.',
                  'Submit a complete permit package and wait for local approval before construction starts.',
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="bg-edg-brand text-edg-dark flex h-7 w-7 shrink-0 items-center justify-center text-sm font-bold">
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
                Sanibel permit FAQ
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

      <Section className="section-md bg-surface">
        <Container>
          <Card variant="muted" padding="lg" className="mx-auto max-w-4xl">
            <div className="flex gap-4">
              <Info className="text-edg-brand-dark mt-1 h-6 w-6 shrink-0" />
              <div>
                <h2 className="mb-3 text-2xl font-bold">
                  Official sources to confirm before you build
                </h2>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  Use this page as planning guidance, not legal or engineering
                  approval. Current forms, floodplain rules, product approval
                  records, and local review comments should drive the final
                  permit package.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      label: 'City of Sanibel Building Applications',
                      href: 'https://www.mysanibel.com/401/Building-Applications-and-Forms',
                    },
                    {
                      label: 'City of Sanibel Flood Information',
                      href: 'https://www.mysanibel.com/418/Flood-Information',
                    },
                    {
                      label: 'Florida Product Approval Search',
                      href: 'https://floridabuilding.org/pr/pr_app_srch.aspx',
                    },
                    {
                      label: 'Miami-Dade Product Approval Notices',
                      href: 'https://www.miamidade.gov/global/economy/board-and-code/product-approval-notices.page',
                    },
                  ].map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-edg-brand-text inline-flex items-center gap-2 font-bold hover:underline"
                    >
                      {source.label}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section className="section-md bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <CheckCircle2 className="text-edg-brand mx-auto mb-5 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want EDG to review the site before you commit?
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              Send your address, photos, rough dimensions, and whether you are
              replacing or upgrading a covered outdoor area, adding motorized
              screens, or planning a new louvered roof. We will help identify
              the next practical permit questions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={permitGuideContactHref}>
                <Button size="lg">
                  Ask About a Sanibel Project
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
