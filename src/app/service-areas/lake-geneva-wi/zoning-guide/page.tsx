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
  title: 'Lake Geneva Pergola Permit & Zoning Guide | EDG Patio & Shade',
  description:
    'Permit and zoning planning guide for Lake Geneva, Fontana, Williams Bay, and Walworth County pergolas, patio covers, motorized screens, and outdoor rooms.',
  alternates: {
    canonical: '/service-areas/lake-geneva-wi/zoning-guide',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Lake Geneva Pergola Permit & Outdoor Living Planning Guide | EDG',
    description:
      'Address-specific permit and review notes for Lake Geneva area pergolas, patio covers, screens, and outdoor living systems.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const reviewPaths = [
  {
    authority: 'City of Lake Geneva',
    firstStep:
      'Start with the City Building and Zoning Department for projects inside City limits.',
    whatToCheck:
      'Building permit forms, zoning permit forms, site plans, attachment method, electrical work, and whether the structure changes lot coverage or setbacks.',
  },
  {
    authority: 'Walworth County',
    firstStep:
      'Check County zoning when the property is unincorporated or when county-level shoreland, sanitary, or zoning review may apply.',
    whatToCheck:
      'County FAQ guidance points residents toward zoning permits before construction and encourages calling before beginning a project.',
  },
  {
    authority: 'Fontana-on-Geneva Lake',
    firstStep:
      'Use Fontana Building and Zoning resources for properties within the Village.',
    whatToCheck:
      'Permit application, construction details, site plan, HOA or association review, and whether the project is attached, detached, or near the lake.',
  },
  {
    authority: 'Williams Bay',
    firstStep:
      'Use the Williams Bay Building and Zoning office for Village properties.',
    whatToCheck:
      'Building, zoning, and site-plan questions before treating a pergola, patio cover, screen room, or porch change as ready to build.',
  },
];

const planningChecks = [
  'Project address and whether the home is in a city, village, unincorporated area, HOA, or association-controlled neighborhood',
  'Current survey, property lines, easements, shoreland or lake-adjacent constraints, and required yards',
  'Whether the system is freestanding, attached to the house, deck-mounted, or connected to a porch or patio cover',
  'Post locations, footings or piers, drainage, snow, wind exposure, and whether the structure changes water runoff',
  'Electrical work for motors, heaters, lighting, screen controls, sensors, switches, or smart-home integration',
  'Finish color, visibility from neighboring properties, and whether the design affects lake views or community appearance standards',
];

const commonMistakes = [
  'Assuming a freestanding pergola, patio cover, screen room, and retractable screen retrofit all follow the same review path.',
  'Quoting the structure before checking whether posts land in an easement, required yard, deck issue, or view-sensitive area.',
  'Planning screens after the pergola is ordered, then discovering there is no clean track, headbox, or power path.',
  'Forgetting that a lake home may involve municipal, county, HOA, association, and contractor coordination at the same time.',
];

const officialSources = [
  {
    label: 'City of Lake Geneva Building & Zoning Department',
    href: 'https://www.cityoflakegeneva.gov/183/Building-Zoning-Department',
  },
  {
    label: 'Walworth County Zoning Permit FAQ',
    href: 'https://www.co.walworth.wi.us/FAQ.aspx?QID=257',
  },
  {
    label: 'Fontana Building and Zoning',
    href: 'https://vi.fontana.wi.gov/applications/building-and-zoning/',
  },
  {
    label: 'Williams Bay Building & Zoning',
    href: 'https://www.williamsbay.org/1203/Building-Zoning',
  },
];

const faqs = [
  {
    question: 'Do Lake Geneva pergolas require a permit?',
    answer:
      'Do not assume either way. Permanent outdoor structures, patio covers, attached systems, electrical work, and screen rooms commonly need some level of local review, but the exact path depends on the address, municipality, county jurisdiction, HOA, attachment method, and project scope.',
  },
  {
    question: 'Who decides the rules for my property?',
    answer:
      'The project address decides the starting point. A property may be in the City of Lake Geneva, Fontana, Williams Bay, unincorporated Walworth County, or another nearby jurisdiction. Lake-adjacent properties may also involve association, HOA, or county-level questions.',
  },
  {
    question: 'Are motorized screens reviewed the same way as pergolas?',
    answer:
      'Not always. A screen retrofit on an existing opening may be different from screens added to a new pergola, porch, patio cover, or screen room. Treat structural changes, electrical work, and permanent attachments as review questions until the authority confirms otherwise.',
  },
  {
    question: 'Can EDG help with the permit package?',
    answer:
      'EDG can help organize the site questions, drawings, product information, finish notes, electrical coordination, and review package. The municipality, county, HOA, or association remains the authority on final requirements and approval.',
  },
];

const topContactHref = buildContactHref({
  type: 'fit-review',
  product: 'planning',
  location: 'Lake Geneva, WI',
  source: 'lake_geneva_zoning_top',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'planning',
  location: 'Lake Geneva, WI',
  source: 'lake_geneva_permit_guide',
});

export default function LakeGenevaZoningGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Lake Geneva Pergola Permit and Zoning Guide',
            description:
              'Permit, zoning, county, village, HOA, site-plan, and outdoor living review guidance for Lake Geneva area pergola, patio cover, screen, and enclosure projects.',
            author: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            publisher: {
              '@type': 'Organization',
              name: 'EDG Patio & Shade',
            },
            mainEntityOfPage:
              'https://www.edgpatioshade.com/service-areas/lake-geneva-wi/zoning-guide',
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
                label: 'Lake Geneva, WI',
                href: '/service-areas/lake-geneva-wi',
              },
              { label: 'Permit Guide' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/lake-geneva-wi"
            className="hover:text-edg-brand-dark mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lake Geneva
          </Link>
          <div className="max-w-4xl">
            <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              Lake Geneva permit planning
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
              Lake Geneva Pergola Permit & Zoning Guide
            </h1>
            <p className="text-text-inverse-muted max-w-3xl text-xl leading-relaxed">
              What homeowners should verify before planning a motorized pergola,
              patio cover, screen room, retractable screen, or permanent outdoor
              living system in the Lake Geneva area.
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
                Start with the address before choosing the system
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Lake Geneva area projects can cross city, village, county, HOA,
                association, and lake-adjacent review questions. The safest
                first move is to identify the authority for the exact address,
                then review the survey, scope, structure type, electrical work,
                and whether the project changes the patio, deck, roof, or yard.
              </p>
              <Link href={topContactHref}>
                <Button variant="secondary">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
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
              The permit questions that shape a Lake Geneva outdoor room
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A pergola or screen system can be designed around local review
              requirements, but only if the review questions are raised before
              the final size, post locations, electrical package, and accessory
              choices are locked in.
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
              <h3 className="mb-3 text-xl font-bold">Survey and placement</h3>
              <p className="text-text-secondary leading-relaxed">
                The survey helps identify property lines, easements, required
                yards, lake-adjacent constraints, and whether the preferred post
                layout is realistic before the pergola is priced.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">
                Structure and electrical
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A motorized pergola or screen system can involve footings, house
                attachment, motors, lights, heaters, switches, sensors, and
                controls. Those details can affect the review package.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <Waves className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Lake-area visibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Lake homes may have view, finish, association, HOA, or neighbor
                sensitivity that does not show up on a generic pergola quote.
                Color, post placement, and screen visibility should be reviewed.
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
                What causes Lake Geneva outdoor-room projects to slow down
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Most delays are not caused by the product itself. They come from
                late discovery: unclear jurisdiction, missing survey details,
                unresolved electrical paths, or a layout that looked good before
                review requirements were checked.
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
                Verify the final path with the authority for your address
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                These links are planning starting points, not a substitute for
                an address-specific answer from the City, Village, County, HOA,
                association, or your contractor.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Public rules can change, and the same product can be reviewed
                differently based on attachment, electrical work, structure
                size, and property location. EDG treats these sources as
                planning starting points until the address and scope are known.
              </p>
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

      <Section className="section-lg bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Lake Geneva Permit Questions</h2>
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
              Plan the review path before the pergola quote.
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              EDG can help review the site, structure, screen, electrical, view,
              and layout questions that matter before Lake Geneva area
              homeowners commit to a permanent outdoor living system.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/service-areas/lake-geneva-wi/motorized-pergolas">
                <Button size="lg">Explore Lake Geneva Pergolas</Button>
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
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-zinc-400 sm:flex-row">
              <span className="inline-flex items-center gap-2">
                <FileText className="text-edg-brand h-4 w-4" />
                Permit-aware planning
              </span>
              <a
                href="tel:+18155810138"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone className="text-edg-brand h-4 w-4" />
                815-581-0138
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
