import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  DollarSign,
  Layers,
  Lightbulb,
  MapPin,
  Ruler,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { buttonClassName } from '@/components/ui/Button';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'StruXure Pergola Cost: Pricing Evidence & Quote Scope | EDG',
  description:
    'StruXure does not publish a fixed Pergola X price. Review current published benchmarks, a dated public proposal, cost drivers, and an apples-to-apples quote checklist.',
  keywords: [
    'struxure pergola cost',
    'struxure pergola price',
    'struxure pergola cost per square foot',
    'struxure pergola quote',
    'pergola x cost',
  ],
  alternates: {
    canonical: '/guides/struxure-pergola-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'StruXure Pergola Cost: Pricing Evidence & Quote Scope | EDG',
    description:
      'A source-backed guide to StruXure pricing signals, documented proposal scope, cost drivers, and equivalent quote comparison.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const publicBenchmarks = [
  {
    source: 'StruXure South Florida dealer guide',
    location: 'South Florida',
    range: '$30,000–$75,000+',
    scope:
      'Published as an installed range for 2026. The guide says size, motorization, screens, lighting, heaters, drainage, engineering, permitting, and installation affect the number.',
    href: 'https://struxuresouthflorida.com/pergola-buying-guides/struxure-pergola-cost-south-florida/',
  },
  {
    source: 'XPRT Outdoor / Discount Fence USA dealer guide',
    location: 'Austin and San Antonio',
    range: '$35,000–$90,000',
    scope:
      'Published as the dealer’s 2026 installed range. It describes attached Pivot 6 work as lower to middle of the range and larger freestanding builds with integrated features as higher-scope work.',
    href: 'https://xprtoutdoor.com/cost-guides/struxure-pergola-cost/',
  },
  {
    source: 'HomeGuide historical cost estimate',
    location: 'U.S. estimate dated 2024; not a dealer quote',
    range: '$150–$200 / sq. ft.',
    scope:
      'An independently published estimate dated May 3, 2024. It offers a broad per-square-foot planning band, but it is not a StruXure price list or an EDG proposal.',
    href: 'https://homeguide.com/costs/struxure-pergola-cost',
  },
] as const;

const manufacturerNotes = [
  {
    icon: DollarSign,
    title: 'There is no fixed Pergola X list price',
    description:
      'StruXure says Pergola X is custom-made and that a one-size-fits-all purchase price is not possible before the project is measured and specified. Its cost article identifies a standard 10×10 Cabana X as a starting point, but does not publish a dollar amount.',
  },
  {
    icon: MapPin,
    title: 'The dealer sets the project price',
    description:
      'StruXure says its dealers are independently owned and that labor, regional market rates, installation complexity, and selected accessories affect pricing. The manufacturer says it does not set or control dealer pricing.',
  },
  {
    icon: CloudRain,
    title: 'Engineering and water management belong in the scope',
    description:
      'StruXure describes its systems as engineered and ICC-certified, with integrated gutters and optional rain and wind sensors. The manufacturer also directs buyers to discuss pitch, placement, mounting, and local weather with the dealer.',
  },
];

const costDrivers = [
  {
    icon: Ruler,
    title: 'Footprint, spans, and zones',
    description:
      'Width, projection, clear spans, post strategy, and the number of independently operated roof zones change the material, engineering, and installation scope.',
  },
  {
    icon: Layers,
    title: 'Model and configuration',
    description:
      'A Pivot 6 roof, a larger commercial-oriented configuration, a sliding roof, a solid-roof bay, or a Cabana X structure are different scopes. Compare the actual model and layout, not just the brand name.',
  },
  {
    icon: Lightbulb,
    title: 'Accessories and controls',
    description:
      'Screens, heaters, fans, lighting, smart controls, sensors, audio, and the electrical work needed to support them can move the total quickly.',
  },
  {
    icon: ShieldCheck,
    title: 'Mounting and site conditions',
    description:
      'Attached, freestanding, deck, roof, slab, landscaped, sloped, or tight-access installations can require different foundations, attachment details, staging, and labor.',
  },
  {
    icon: Wind,
    title: 'Weather, permits, and engineering',
    description:
      'Local wind and snow conditions, drainage routing, permit drawings, HOA review, and project-specific engineering should be identified before a proposal is treated as comparable.',
  },
  {
    icon: MapPin,
    title: 'Dealer territory and execution',
    description:
      'Dealer labor, travel, freight, access, scheduling, site coordination, and the level of project management differ by market. A published regional range is not automatically transferable to Illinois.',
  },
];

const quoteChecklist = [
  {
    label: 'Roof and layout',
    ask: 'Footprint, orientation, model/configuration, clear spans, post count, and number of zones.',
    reason:
      'A 10×10 single-zone roof is not the same scope as a long multi-zone roof, even when both are described as a StruXure pergola.',
  },
  {
    label: 'Mounting and structure',
    ask: 'Attached or freestanding; patio, deck, roof, slab, or landscape mounting; footing and reinforcement assumptions.',
    reason:
      'The foundation, attachment, and support path can change both price and whether the proposed layout is feasible.',
  },
  {
    label: 'Drainage and electrical',
    ask: 'Gutters, downspouts, discharge location, pitch, circuits, controls, final connections, and who performs each item.',
    reason:
      'A quote can look lower when water routing or electrical work is left for the owner or a separate trade.',
  },
  {
    label: 'Accessories',
    ask: 'Screens, heaters, fans, lights, sensors, audio, privacy elements, and smart-home integration.',
    reason:
      'Accessories affect more than the product line: they can add wiring, beams, controls, and installation time.',
  },
  {
    label: 'Approvals and engineering',
    ask: 'Permit package, stamped calculations, HOA submissions, inspection coordination, and any project-specific engineering exclusions.',
    reason:
      'The same roof can require a different preconstruction path in different municipalities or on a different structure.',
  },
  {
    label: 'Execution and ownership',
    ask: 'Delivery, staging, installation, cleanup, taxes, warranty terms, service path, lead time, payment schedule, and exclusions.',
    reason:
      'The most useful number is the total for the work you actually need, with the responsibilities and warranty boundaries in writing.',
  },
] as const;

const faqs = [
  {
    question: 'How much does a StruXure pergola cost?',
    answer:
      'StruXure does not publish a fixed Pergola X price. Current public dealer guides report regional installed ranges of about $30,000–$75,000+ in South Florida and $35,000–$90,000 in Austin and San Antonio. A May 3, 2024 independent HomeGuide estimate reports $150–$200 per square foot installed; that dated estimate is not a StruXure list price or an EDG quote. Your reliable number comes from a measured, itemized proposal.',
  },
  {
    question: 'Does StruXure publish a cost per square foot?',
    answer:
      'No. StruXure says Pergola X is custom-made and that purchase price cannot be determined until the project is measured and specified. A per-square-foot figure can be a useful comparison after the scope is aligned, but it should not replace the model, span, zones, mounting, engineering, accessories, installation, and exclusions in the proposal.',
  },
  {
    question: 'What makes a StruXure quote more expensive?',
    answer:
      'The main drivers are footprint and spans, the number of roof zones, model and configuration, attached or freestanding mounting, footing or deck work, site access, drainage, permits and engineering, finish choices, electrical, and accessories such as screens, heaters, fans, lights, sensors, and smart controls.',
  },
  {
    question:
      'Does a StruXure quote include installation, engineering, and permits?',
    answer:
      'It depends on the dealer and proposal. A publicly posted February 2026 StruXure Outdoor Georgia budget contract included delivery, installation, project management, and engineering stamps for a large commercial example, while excluding electrical and the foundation. Its terms also exclude project-specific structural calculations and drawings when required by the authority having jurisdiction, with additional charges possible. Ask each bidder to state these lines explicitly rather than assuming they are included.',
  },
  {
    question: 'What can a public StruXure proposal show about project scope?',
    answer:
      'A dated, publicly posted high-level budget contract from February 23, 2026 shows how a large commercial project can be scoped: a 19 feet 6 inches by 45 feet frame, three motorized zones, heaters, fans, lighting, delivery, installation, project management, and engineering stamps, with electrical and foundation excluded. The frame is labeled Pergola X Pivot XL, while the following roof-assembly line says Pergola X Pivot 6; that model labeling should be clarified with the dealer. The contract expired April 15, 2026, so this page does not reproduce its total or line-item costs. Use it as scope evidence, not as a current offer or transferable market rate.',
  },
  {
    question: 'Is EDG a StruXure dealer?',
    answer:
      'This page does not establish EDG as an authorized StruXure dealer. It is independent buying research from EDG Patio & Shade, not a StruXure price sheet. EDG is a system-agnostic design and supply partner that quotes its current toolkit alternatives, including Brustor, Azenco, and Sundance. EDG will not relabel its general pergola ranges as StruXure pricing.',
  },
];

function ExternalSourceLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        className ??
        'text-text-primary decoration-edg-brand hover:text-edg-brand-text underline underline-offset-4'
      }
    >
      {children}
    </a>
  );
}

export default function StruxurePergolaCostPage() {
  const articleSchema = generateArticleSchema({
    title: 'StruXure Pergola Cost: Pricing Evidence & Quote Scope',
    description:
      'A source-backed guide to public StruXure pricing signals, documented proposal scope, cost drivers, and equivalent quote comparison.',
    url: 'https://www.edgpatioshade.com/guides/struxure-pergola-cost',
    image: `https://www.edgpatioshade.com${images.systems.pergolas.grayBronzeWhite}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Pergola Cost Research',
  });

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, generateFAQSchema(faqs)]),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'StruXure Pergola Cost' },
            ]}
            className="mb-8"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                Brand Cost Research
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                What does a StruXure pergola cost?
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                The public answer is not a fixed price. StruXure says Pergola X
                is custom-made, and independent dealers set project pricing. The
                useful budget question is what a published number includes,
                where it was priced, and whether the scope matches your site.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="/guides/pergola-system-fit-review?source=struxure_pergola_cost"
                  conversionName="struxure_pergola_cost_quote_cta"
                  ctaPosition="struxure_pergola_cost_hero"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <Link
                  href="#public-benchmarks"
                  className={buttonClassName({
                    variant: 'outline',
                    size: 'lg',
                  })}
                >
                  See the evidence
                </Link>
              </div>
              <p className="text-text-inverse-muted mt-5 max-w-xl text-sm leading-relaxed">
                This page does not establish EDG as an authorized StruXure
                dealer. The EDG quote request is for reviewing current toolkit
                alternatives, not for requesting a StruXure quote.
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.systems.pergolas.grayBronzeWhite}
                  alt="Motorized louvered pergola used by EDG to illustrate installed project scope"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <p className="text-text-inverse-muted mt-3 text-xs leading-relaxed">
                Illustrative EDG system image. This photo is not represented as
                a StruXure installation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short answer</div>
            <h2 className="section-title mb-6">
              Start with a measured scope, not a brand-only number
            </h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                StruXure&apos;s own public cost guidance says Pergola X is
                custom-made and does not have a one-size-fits-all purchase
                price. A current manufacturer article also says each dealer is
                independently owned, so labor, regional market rates,
                installation complexity, and accessories affect the final price.
              </p>
              <p>
                That leaves three useful public signals: current regional dealer
                guides, independent cost research, and dated proposals that show
                what a real number covered. None of those should be copied into
                an Illinois quote without matching footprint, mounting,
                engineering, accessories, electrical, and exclusions.
              </p>
              <p>
                If you are comparing a StruXure proposal with another motorized
                pergola, compare the complete installed scope. A lower roof-only
                number may become the more expensive project after foundations,
                permits, wiring, controls, drainage, and installation are added.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="public-benchmarks" className="bg-surface-muted scroll-mt-24">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Public benchmarks</div>
            <h2 className="section-title mb-4">
              What published StruXure pricing evidence actually shows
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These are attributable public references, not EDG pricing. They
              come from different regions and use different definitions of
              installed scope, so they are comparison points rather than a
              blended average.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {publicBenchmarks.map((benchmark) => (
              <Card key={benchmark.source} variant="default" padding="lg">
                <div className="text-edg-brand-text mb-5 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {benchmark.range}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{benchmark.source}</h3>
                <p className="text-text-secondary mb-4 text-sm font-medium">
                  {benchmark.location}
                </p>
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  {benchmark.scope}
                </p>
                <ExternalSourceLink href={benchmark.href}>
                  Read the published source
                </ExternalSourceLink>
              </Card>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl border border-black/10 bg-white p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3">
              <ShieldCheck className="text-edg-brand-text h-6 w-6 shrink-0" />
              <h3 className="text-2xl font-bold">How to use these numbers</h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Use a public range to decide whether the project belongs in a
              serious premium-system conversation. Do not use it to approve a
              specific design, promise an Illinois price, or compare one
              contractor&apos;s roof-only number with another contractor&apos;s
              complete installed proposal.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Documented proposal
              </div>
              <h2 className="section-title mb-6">
                One public contract shows why scope matters
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                A publicly posted February 23, 2026 high-level budget contract
                from StruXure Outdoor Georgia gives a clearer picture than a
                generic square-foot range. It is a commercial example, its price
                expired April 15, 2026, and it is not a current offer for a
                residential buyer.
              </p>
              <ExternalSourceLink href="https://mccmeetingspublic.blob.core.usgovcloudapi.net/lawrvlga-meet-deb97a91b3bf47cca9c1244cb803833c/ITEM-Attachment-001-34c8cf4392e64ce1b04a7aeea7dd50fa.pdf">
                Open the public proposal PDF
              </ExternalSourceLink>
            </div>
            <Card variant="muted" padding="lg">
              <div className="mb-6 flex flex-col gap-3 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-text-secondary mb-2 text-sm font-bold tracking-widest uppercase">
                    Public commercial example
                  </p>
                  <h3 className="text-3xl font-bold">Scope-only evidence</h3>
                </div>
                <p className="text-text-secondary text-sm sm:text-right">
                  Expired public contract
                  <br />
                  Dated 02/23/2026
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-text-primary mb-2 font-bold">
                    Stated roof scope
                  </p>
                  <ul className="text-text-secondary space-y-2 text-sm leading-relaxed">
                    <li>19 feet 6 inches × 45 feet frame</li>
                    <li>Frame label: Pergola X Pivot XL</li>
                    <li>
                      Roof assembly line: Pergola X Pivot 6; the source uses
                      both labels and requires dealer clarification
                    </li>
                    <li>Eight 8×8 aluminum posts</li>
                    <li>Three motorized zones with Somfy OS</li>
                  </ul>
                </div>
                <div>
                  <p className="text-text-primary mb-2 font-bold">
                    Included and excluded lines
                  </p>
                  <ul className="text-text-secondary space-y-2 text-sm leading-relaxed">
                    <li>Nine heaters and six commercial wet-rated fans</li>
                    <li>Lighting beams and 18 lights</li>
                    <li>Delivery, installation, project management, stamps</li>
                    <li>Electrical and foundation excluded</li>
                    <li>
                      Project-specific structural calculations/drawings may be
                      additional when required by the authority having
                      jurisdiction
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-text-secondary mt-6 border-t border-black/10 pt-6 text-sm leading-relaxed">
                This unusually large, feature-heavy proposal is useful for
                seeing how dimensions, zones, accessories, installation, and
                exclusions can be documented together. This page intentionally
                omits the expired contract total and line-item costs.
              </p>
              <p className="text-text-secondary mt-4 text-sm leading-relaxed">
                The contract says engineering stamps are included, but its terms
                also exclude project-specific structural calculations and
                drawings when a local authority requires them; additional
                charges may apply. Confirm what the engineering line covers.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Cost drivers</div>
            <h2 className="section-title mb-4">
              The project changes the StruXure number
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A quote should make the major changes visible. These are the
              questions that separate a real project comparison from a brand
              name and a square-foot guess.
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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Compare equivalent proposals
            </div>
            <h2 className="section-title mb-4">
              Put every bidder on the same scope sheet
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Ask for answers in writing. If a line is unknown, excluded, or
              assigned to another trade, keep it visible rather than treating
              the proposal as complete.
            </p>
          </div>
          <div className="mx-auto max-w-5xl space-y-4">
            {quoteChecklist.map((item, index) => (
              <Card key={item.label} variant="muted" padding="md">
                <div className="grid gap-4 md:grid-cols-[auto_0.7fr_1.3fr] md:items-start">
                  <div className="text-edg-brand-text flex items-center gap-3 font-bold">
                    <span className="bg-edg-brand inline-flex h-8 w-8 items-center justify-center text-sm text-black">
                      {index + 1}
                    </span>
                    <span className="md:hidden">{item.label}</span>
                  </div>
                  <div>
                    <h3 className="hidden text-lg font-bold md:block">
                      {item.label}
                    </h3>
                    <p className="text-text-primary font-medium">{item.ask}</p>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-4">
                Manufacturer evidence
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                What StruXure publicly says about the system
              </h2>
              <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
                These points come from current StruXure product, cost, support,
                warranty, and architectural resources. Product and warranty
                terms should still be confirmed in the proposal and the latest
                documents for the selected system.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <ExternalSourceLink
                  href="https://struxure.com/blog/how-much-does-a-struxure-pergola-cost/"
                  className="text-text-inverse decoration-edg-brand hover:text-edg-brand underline underline-offset-4"
                >
                  Manufacturer cost guidance
                </ExternalSourceLink>
                <ExternalSourceLink
                  href="https://struxure.com/blog/questions-to-ask-your-struxure-dealer/"
                  className="text-text-inverse decoration-edg-brand hover:text-edg-brand underline underline-offset-4"
                >
                  Dealer pricing and weather guidance
                </ExternalSourceLink>
                <ExternalSourceLink
                  href="https://struxure.com/warranties/"
                  className="text-text-inverse decoration-edg-brand hover:text-edg-brand underline underline-offset-4"
                >
                  Manufacturer warranty page
                </ExternalSourceLink>
                <ExternalSourceLink
                  href="https://struxure.com/wp-content/uploads/2025/07/StruXure-Commercial-Architectual-Binder-2023.pdf"
                  className="text-text-inverse decoration-edg-brand hover:text-edg-brand underline underline-offset-4"
                >
                  Commercial architectural binder
                </ExternalSourceLink>
              </div>
            </div>
            <div className="space-y-4">
              {manufacturerNotes.map((note) => (
                <Card
                  key={note.title}
                  variant="dark"
                  padding="lg"
                  className="border-white/10"
                >
                  <note.icon className="text-edg-brand mb-4 h-7 w-7" />
                  <h3 className="mb-2 text-xl font-bold">{note.title}</h3>
                  <p className="text-text-inverse-muted text-sm leading-relaxed">
                    {note.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                EDG&apos;s relationship
              </div>
              <h2 className="section-title mb-6">
                Brand-specific research should stay honest
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG Patio &amp; Shade is not presenting this page as a
                  StruXure price sheet, manufacturer statement, or StruXure
                  dealer proposal. The public examples above are linked so you
                  can see where each number came from and what it did—and did
                  not—include.
                </p>
                <p>
                  EDG is a system-agnostic design and supply partner. Its
                  current pergola toolkit includes Brustor, Azenco, and
                  Sundance. The right alternative depends on the footprint,
                  exposure, drainage, controls, engineering path, budget, and
                  local service plan—not on a universal brand ranking.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/guides/louvered-pergola-brands-compared"
                  className={buttonClassName({ variant: 'dark' })}
                >
                  Compare system fit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/guides/pergola-cost"
                  className="border-border-strong text-text-primary hover:bg-surface-muted inline-flex h-11 items-center justify-center border px-6 py-2 text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  Read the general cost guide
                </Link>
              </div>
            </div>
            <Card variant="muted" padding="lg">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-edg-brand-text h-6 w-6" />
                <h3 className="text-2xl font-bold">Good next-step inputs</h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                If you want a project-specific conversation, these details are
                more useful than a brand name alone:
              </p>
              <ul className="text-text-secondary space-y-3 leading-relaxed">
                <li>• Rough width, projection, and desired post locations</li>
                <li>• Photos of the patio, deck, roofline, and access path</li>
                <li>• Attached or freestanding preference</li>
                <li>• Screens, heaters, lights, fans, and control goals</li>
                <li>• Project location, timing, and budget band</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Questions buyers ask
            </div>
            <h2 className="section-title mb-4">StruXure pergola cost FAQs</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-5">
            {faqs.map((faq) => (
              <Card key={faq.question} variant="default" padding="lg">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-brand text-edg-dark">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Need help comparing the complete scope?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed">
              Share the footprint, photos, location, and features you are
              considering. EDG can help clarify the project path and compare an
              equivalent motorized pergola scope without pretending that a
              generic range is your quote.
            </p>
            <TrackedLink
              href="/guides/pergola-system-fit-review?source=struxure_pergola_cost_bottom"
              conversionName="struxure_pergola_cost_quote_cta"
              ctaPosition="struxure_pergola_cost_bottom"
              className="bg-edg-dark hover:bg-edg-dark/90 inline-flex h-14 items-center justify-center px-8 py-2 text-base font-bold tracking-wider text-white uppercase transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl border-t border-black/10 pt-8">
            <p className="text-text-secondary text-sm leading-relaxed">
              Sources checked for this page include current StruXure
              manufacturer guidance, StruXure&apos;s warranty page and
              architectural resources, two 2026 public dealer cost guides, an
              independent cost guide dated May 3, 2024, and the publicly posted
              February 23, 2026 StruXure Outdoor Georgia budget contract for
              scope and exclusions. Its expired contract pricing is intentionally
              not reproduced here. Public prices change; confirm current scope,
              terms, and availability directly in the proposal you receive.
            </p>
          </div>
        </Container>
      </Section>
    </article>
  );
}
