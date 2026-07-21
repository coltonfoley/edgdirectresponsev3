import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Milwaukee Pergola Permit & Zoning Guide | EDG Patio & Shade',
  description:
    'Milwaukee, WI pergola permit and zoning planning guide. Official City resources, contact details, and questions to verify before a permanent outdoor structure.',
  alternates: {
    canonical: '/service-areas/milwaukee-wi/zoning-guide',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Milwaukee Pergola Permit & Zoning Guide | EDG Patio & Shade',
    description:
      'Official Milwaukee resources and practical review questions for permanent pergolas, patio covers, screens, and outdoor rooms.',
    type: 'article',
  },
};

const reviewPaths = [
  {
    authority: 'Milwaukee Development Center',
    firstStep:
      'Use the City’s Permit & Development Center for building-permit and development questions, online submittal support, status, and payments.',
    whatToCheck:
      'Ask how the proposed pergola is classified, which plans or site information are required, whether the scope changes building or electrical review, and what inspection path applies to the final design.',
  },
  {
    authority: 'City of Milwaukee Zoning Administration',
    firstStep:
      'Confirm the applicable zoning code and use the City’s zoning map to review the address, base zoning, and any mapped overlay context.',
    whatToCheck:
      'The City determines code compliance for the property. Review can depend on the structure, site layout, lot coverage, placement, and whether a board, overlay, variance, or other process is involved.',
  },
  {
    authority: 'Building and electrical coordination',
    firstStep:
      'Treat motors, lighting, heaters, switches, sensors, and new circuits as project-scope questions, not automatic accessories.',
    whatToCheck:
      'A motorized outdoor system may combine structure, drainage, electrical work, and screens. Make those elements clear before asking the City for a final direction or pricing the work as complete.',
  },
];

const planningChecks = [
  'Exact property address, current survey or site information, and whether the project is in Milwaukee city limits',
  'Whether the proposed system is open or covered, freestanding or attached, and how it relates to the house, deck, patio, or roof-adjacent space',
  'Proposed size, post locations, property lines, easements, access, drainage direction, and any change to site coverage',
  'Potential zoning map overlays, historic-district context, condominium or HOA requirements, and any owner or building approval needed before construction',
  'Structural support, foundations or piers, house attachment, and the documentation needed to explain those decisions',
  'Electrical scope for motors, lighting, heaters, screens, sensors, switches, controls, or smart-home integration',
];

const commonMistakes = [
  'Assuming an open trellis, a covered pergola, a patio cover, and a fully equipped motorized outdoor room all receive the same review treatment.',
  'Ordering the structure before confirming whether the intended post locations, drainage, attachment, or lot coverage are feasible for the address.',
  'Treating screens, lighting, heat, and controls as simple add-ons after the structure is finalized, then discovering there is no clean power, track, or service path.',
  'Using a generic internet rule instead of confirming the current requirements with the City resource responsible for the exact property and scope.',
];

const officialSources = [
  {
    label: 'City of Milwaukee Permit & Development Center',
    href: 'https://city.milwaukee.gov/DNS/permits',
  },
  {
    label: 'City of Milwaukee Zoning Administration',
    href: 'https://city.milwaukee.gov/DCD/Planning/PlanningAdministration/Zoning',
  },
  {
    label: 'City of Milwaukee Zoning Code',
    href: 'https://city.milwaukee.gov/DCD/Planning/PlanningAdministration/ZoningCode',
  },
  {
    label: 'City of Milwaukee Zoning Map',
    href: 'https://city.milwaukee.gov/DCD/Planning/PlanningAdministration/Zoning/Map',
  },
  {
    label: 'Milwaukee zoning ordinance: accessory structures',
    href: 'https://city.milwaukee.gov/ImageLibrary/Groups/ccClerk/Ordinances/Volume-2/CH295-sub5.pdf',
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Milwaukee?',
    answer:
      'The safe answer is to verify the exact project with the City before construction. Milwaukee’s public zoning materials distinguish between an open trellis or arbor and a fully covered pergola, and the final review can also depend on the property, site layout, attachment, scope, and electrical work.',
  },
  {
    question: 'Who should I contact about a Milwaukee pergola permit?',
    answer:
      'Start with the City of Milwaukee Permit & Development Center: 809 N Broadway, First Floor, Milwaukee, WI 53202; 414-286-8210; DevelopmentCenterInfo@milwaukee.gov. The City’s online Land Management System supports permit uploads, status checks, and payments.',
  },
  {
    question: 'What information should I have before contacting Milwaukee?',
    answer:
      'Bring the property address, a clear project description, rough size and placement, whether the structure is freestanding or attached, site or survey information when available, and any planned power, lights, heaters, screens, or controls. The City can then direct you to the current review requirements.',
  },
  {
    question: 'Can EDG approve my Milwaukee pergola?',
    answer:
      'No. EDG can help organize the site questions, system information, drawings, and coordination needed for a more complete conversation with the City. The City of Milwaukee and any applicable owner, HOA, condominium, or building authority make the final determination.',
  },
];

const topContactHref = buildContactHref({
  type: 'fit-review',
  product: 'planning',
  location: 'Milwaukee, WI',
  source: 'milwaukee_zoning_top',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'planning',
  location: 'Milwaukee, WI',
  source: 'milwaukee_zoning_bottom',
});

export default function MilwaukeeZoningGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Milwaukee Pergola Permit and Zoning Guide',
            description:
              'Official resources and planning questions for Milwaukee pergola, patio cover, motorized screen, and permanent outdoor living projects.',
            author: { '@type': 'Organization', name: 'EDG Patio & Shade' },
            publisher: { '@type': 'Organization', name: 'EDG Patio & Shade' },
            mainEntityOfPage:
              'https://www.edgpatioshade.com/service-areas/milwaukee-wi/zoning-guide',
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
              { label: 'Milwaukee, WI', href: '/service-areas/milwaukee-wi' },
              { label: 'Permit Guide' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/milwaukee-wi"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Milwaukee
          </Link>
          <div className="max-w-4xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" /> Milwaukee permit planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Milwaukee Pergola Permit &amp; Zoning Guide
            </h1>
            <p className="text-text-inverse-muted max-w-3xl text-xl leading-relaxed">
              What to verify before planning a permanent pergola, patio cover,
              motorized screen, or coordinated outdoor-living system in
              Milwaukee, WI. This guide links to official City resources and is
              intentionally cautious: the City determines current requirements
              for the specific address and scope.
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
                Confirm the project type and the address first
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Milwaukee’s public materials make clear that not every shade
                structure is the same. An open trellis or arbor can be treated
                differently from a fully covered pergola, and the final path can
                also turn on zoning, site layout, attachments, structural scope,
                electrical work, and project details that do not fit on a
                product page.
              </p>
              <Link href={topContactHref}>
                <Button variant="secondary">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-5">
              {reviewPaths.map((path) => (
                <Card key={path.authority} variant="muted" padding="lg">
                  <div className="mb-4 flex items-start gap-3">
                    <Building2 className="text-edg-brand-text mt-1 h-6 w-6 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">{path.authority}</h3>
                      <p className="text-text-secondary mt-2 leading-relaxed">
                        {path.firstStep}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-secondary border-t border-zinc-200 pt-4 text-sm leading-relaxed">
                    {path.whatToCheck}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Before design is final
            </div>
            <h2 className="section-title mb-4">
              The questions that shape a Milwaukee outdoor room
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Raising these questions early protects the project from late
              redesigns. It also lets the system, foundations, drainage,
              screens, and electrical package be explained together rather than
              as unrelated pieces.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {planningChecks.map((check) => (
              <div
                key={check}
                className="flex items-start gap-3 border border-zinc-200 bg-white p-5"
              >
                <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                <p className="text-text-secondary leading-relaxed">{check}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <Ruler className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">
                Placement and site context
              </h3>
              <p className="text-text-secondary leading-relaxed">
                The planned size and post layout should be evaluated against the
                property information, access, drainage, coverage, and the actual
                site conditions before the structure is treated as final.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Structure and systems</h3>
              <p className="text-text-secondary leading-relaxed">
                A motorized pergola can involve foundations or piers, house
                attachment, gutters, motors, screens, lighting, heaters,
                switches, sensors, and controls. Those details can affect the
                review conversation.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <FileText className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Official confirmation</h3>
              <p className="text-text-secondary leading-relaxed">
                City zoning and permit resources are the source of truth for
                current requirements. Use this page to prepare better questions,
                then confirm them with the authority for the address.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Avoidable project risks
              </div>
              <h2 className="section-title mb-6">
                What slows permanent pergola projects down
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                The product itself is rarely the only issue. Most delays come
                from a late discovery about the property, unclear scope, a
                missing electrical plan, or a layout that was priced before the
                correct review questions had been asked.
              </p>
            </div>
            <div className="space-y-4">
              {commonMistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="border-border flex items-start gap-3 border bg-white p-5"
                >
                  <TriangleAlert className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                  <p className="text-text-secondary leading-relaxed">
                    {mistake}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">Official sources</div>
              <h2 className="section-title mb-6">
                Use the City’s current information for your address
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                These links are public planning resources, not a substitute for
                a project-specific direction from the City. Codes, online
                systems, fees, and review requirements can change, and the same
                product can be reviewed differently based on the site and scope.
              </p>
              <div className="text-text-secondary border border-zinc-200 bg-zinc-50 p-5 text-sm leading-relaxed">
                <strong className="text-text-primary block">
                  Permit &amp; Development Center
                </strong>
                809 N Broadway, First Floor, Milwaukee, WI 53202
                <br />
                414-286-8210
                <br />
                DevelopmentCenterInfo@milwaukee.gov
              </div>
            </div>
            <div className="grid gap-4">
              {officialSources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:border-edg-brand/50 border border-zinc-200 bg-white p-5 transition-colors"
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

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Milwaukee permit questions</h2>
            </div>
            <div className="space-y-5">
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
              Clarify the review path before the pergola quote.
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              EDG can help organize the property, system, screen, drainage, and
              electrical questions that matter before a permanent Milwaukee
              outdoor-living project is ordered. The City remains the final
              authority on the address-specific requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/service-areas/milwaukee-wi/motorized-pergolas">
                <Button size="lg">Explore Milwaukee Pergolas</Button>
              </Link>
              <Link href={bottomContactHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-400">
              <Phone className="text-edg-brand h-4 w-4" /> 815-581-0138
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
