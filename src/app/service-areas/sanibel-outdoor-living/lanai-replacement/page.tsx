import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  Home,
  ShieldCheck,
  CheckCircle2,
  Wind,
  DollarSign,
  Clock,
  AlertTriangle,
  Info,
  FileText,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lanai Replacement Sanibel | Motorized Screens & Pergolas | EDG',
  description:
    'Lanai replacement planning in Sanibel. Compare motorized screens, modern louvered pergolas, coastal materials, permits, and the FEMA 50% rule.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Lanai Replacement Sanibel | Motorized Screens & Pergolas | EDG',
    description:
      'Compare motorized screens, covered outdoor living upgrades, and modern louvered systems for Sanibel homes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living/lanai-replacement',
  },
  keywords: [
    'lanai replacement sanibel',
    'lanai rebuild sanibel',
    'replace lanai after hurricane',
    'screen enclosure replacement',
    '50% rule sanibel',
    'lanai repair sanibel',
    'hurricane ian lanai damage',
    'rebuild lanai florida',
  ],
};

const replacementBenefits = [
  'Coastal replacement options',
  '50% rule planning',
  'Permit documentation support',
  'Upgrade while you rebuild',
];

const whyUpgrade = [
  {
    title: 'Better Documentation Path',
    description:
      'Older covered outdoor rooms may not have the documentation a modern coastal project needs. A louvered system can be evaluated with current engineering, product approval, anchoring, and Sanibel permit questions in mind.',
    icon: Wind,
  },
  {
    title: 'Lower Lifetime Costs',
    description:
      'Rebuilding a traditional lanai can mean rescreening, repainting, hardware replacement, and storm-related repairs over time. A modern system can reduce fixed-screen maintenance, especially when retractable screens are used only when needed.',
    icon: DollarSign,
  },
  {
    title: 'More Usable Days',
    description:
      'Fixed lanais trap heat and block breezes. Adjustable louvers let you control temperature and airflow, extending your outdoor season through Sanibel\'s hottest months.',
    icon: Clock,
  },
  {
    title: 'Stronger Buyer Story',
    description:
      'A clean, documented, modern outdoor living system can differentiate a Sanibel home better than simply rebuilding the same screen enclosure. The real value depends on design, condition, permit history, and the market.',
    icon: Home,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Damage Assessment',
    description:
      'We evaluate your existing lanai structure, identify salvageable components (concrete pad, footings), and determine if the 50% rule applies to your rebuild.',
  },
  {
    step: '02',
    title: 'Design & Permitting',
    description:
      'Our team designs a replacement option around survey, floodplain, product documentation, anchoring, drainage, screen, electrical, and Sanibel review questions.',
  },
  {
    step: '03',
    title: 'Demolition & Prep',
    description:
      'Safe removal of damaged structure while preserving reusable elements. We handle debris disposal and site preparation for the new installation.',
  },
  {
    step: '04',
    title: 'Installation',
    description:
      'Professional installation follows approved plans, manufacturer requirements, and site conditions. Timeline depends on the approved scope, product lead time, and inspection path.',
  },
];

const costComparison = [
  {
    factor: 'Upfront Cost (200 sq ft)',
    traditional: '$10,000 - $35,000',
    modern: '$12,000 - $24,000',
    note: 'Actual scope depends on site conditions',
  },
  {
    factor: 'Maintenance (20 years)',
    traditional: '$3,000 - $6,000\n(rescreening, repairs)',
    modern: 'Routine cleaning\nand system-specific service',
    note: 'Compare fixed-screen maintenance vs. selected system needs',
  },
  {
    factor: 'Warranty & Lifespan',
    traditional: '10-20 years\n(screens fail first)',
    modern: 'Warranty varies\nby selected system',
    note: 'Review coastal exposure terms before ordering',
  },
  {
    factor: 'Usability',
    traditional: 'Fixed shade only',
    modern: 'Adjustable sun/shade/rain',
    note: 'Modern = more functional days',
  },
  {
    factor: 'Home Value Impact',
    traditional: 'Familiar outdoor-room look',
    modern: 'Cleaner project story',
    note: 'Value depends on condition and market',
  },
];

const faqs = [
  {
    question: 'Do I have to rebuild my lanai the same way after Hurricane Ian?',
    answer:
      'No. If insurance, damage review, or the 50% rule requires serious rebuild planning, you can compare a different type of structure before rebuilding the same screen enclosure. The right answer depends on documentation, engineering, local review, and the actual scope.',
  },
  {
    question: 'What is the 50% rule and how does it affect my lanai replacement?',
    answer:
      'Sanibel explains that repairs, alterations, improvements, demolition, and similar work can be reviewed for substantial damage or substantial improvement at permit time. If the cost exceeds 50% of the market value of a noncompliant building, current floodplain standards may apply. That review can be the right time to compare a modern system rather than automatically rebuilding the same enclosure.',
  },
  {
    question: 'How long does lanai replacement take in Sanibel?',
    answer:
      'Timeline depends on demolition, engineering, product lead time, floodplain review, HOA review, Sanibel permit comments, inspections, and whether screens, electrical, drainage, or slab/footing work are included.',
  },
  {
    question: 'Will my insurance cover upgrading to a louvered system?',
    answer:
      'Insurance questions should be handled with your carrier, adjuster, and policy documents. EDG can help separate like-for-like replacement scope from optional upgrades so the project discussion is clearer.',
  },
  {
    question: 'Can I keep my existing concrete slab when replacing my lanai?',
    answer:
      'Possibly, but it must be evaluated. Elevation, condition, drainage, anchoring, footings, flood-zone requirements, and the selected system all affect whether an existing slab can remain part of the project.',
  },
  {
    question: 'Is a louvered system harder to permit than a traditional lanai?',
    answer:
      'It depends on the scope. A louvered system may need different documentation than a traditional screen enclosure, including engineering, anchoring, product approvals where applicable, electrical, drainage, and attachment details. Sanibel remains the final authority.',
  },
];

const replacementContactHref = buildContactHref({
  type: 'fit-review',
  product: 'lanai-replacement',
  area: 'sanibel',
  source: 'leads-sanibel-lanai-replacement',
});

export default function LanaiReplacementPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: 'Lanai Replacement Services - Sanibel',
              description:
                'Professional lanai replacement and rebuild services for Sanibel Island homeowners, specializing in modern louvered roof systems post-Hurricane Ian.',
              url: 'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living/lanai-replacement',
              image: `https://www.edgpatioshade.com${images.pages.serviceAreas.sanibelShopros}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 pb-16 lg:min-h-[75vh]">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.pages.serviceAreas.sanibelShopros}
            alt="Lanai replacement with modern gray and white louvered roof system"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Sanibel, FL', href: '/service-areas/sanibel-outdoor-living' },
                { label: 'Lanai Replacement' },
              ]}
            />
          </div>
          
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Post-Hurricane Ian Rebuilds
              </span>
              <h1 className="hero-title mb-6 text-white">
                Lanai Replacement in Sanibel:{' '}
                <span className="text-edg-brand block">Compare Before You Rebuild</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                If your covered outdoor space was damaged or outdated, use the
                rebuild moment to compare motorized screens and a modern
                louvered system with the permit, floodplain, and coastal
                documentation questions on the table.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={replacementContactHref}>
                  <Button size="lg" className="px-8 text-lg">
                    Get a Replacement Quote{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href="tel:+18155810138"
                  className="text-text-inverse-muted hover:text-edg-brand-dark inline-flex items-center gap-2 text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" /> (815) 581-0138
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== BENEFITS BAR ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {replacementBenefits.map((benefit, i) => (
                <span key={i} className="text-text-inverse-muted flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== 50% RULE ALERT ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 border border-border bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <AlertTriangle className="text-edg-brand-dark mt-1 h-8 w-8 shrink-0" />
                <div>
                  <h2 className="mb-2 text-xl font-bold text-text-primary dark:text-text-inverse">
                    Understanding the 50% Rule
                  </h2>
                  <p className="text-text-secondary mb-4 dark:text-text-inverse-muted">
                    Sanibel reviews repairs and improvements for substantial
                    damage or substantial improvement at permit time. If the
                    cost exceeds 50% of the market value of a noncompliant
                    building, current floodplain standards may apply.
                  </p>
                  <p className="text-text-secondary dark:text-text-inverse-muted">
                    <strong>The Opportunity:</strong> If the project already
                    requires serious review, compare the old outdoor room
                    against a modern screen and pergola plan before rebuilding
                    the same layout.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WHY UPGRADE ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Why Upgrade Instead of Rebuild?
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Four compelling reasons Sanibel homeowners are choosing modern systems for their lanai replacement.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {whyUpgrade.map((item, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== REPLACEMENT PROCESS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                The Lanai Replacement Process
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                From damaged structure to modern outdoor living in four steps.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <Card key={i} variant="muted" padding="lg" className="text-center">
                  <span className="text-edg-brand mb-4 block text-4xl font-bold">{step.step}</span>
                  <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== COST COMPARISON ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Rebuild vs. Upgrade: Cost Analysis
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Compare the true cost of rebuilding a traditional lanai versus upgrading to a modern louvered system.
              </p>
            </div>

            <div className="overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <div className="grid grid-cols-12 gap-4 bg-zinc-100 p-4 text-sm font-bold dark:bg-zinc-900">
                <div className="col-span-3">Cost Factor</div>
                <div className="col-span-3">Traditional Lanai</div>
                <div className="col-span-3 text-edg-brand-text">Modern Louvered</div>
                <div className="col-span-3">Analysis</div>
              </div>
              {costComparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-4 border-t border-zinc-200 p-4 text-sm dark:border-zinc-800"
                >
                  <div className="col-span-3 font-semibold">{row.factor}</div>
                  <div className="col-span-3 whitespace-pre-line text-text-secondary">{row.traditional}</div>
                  <div className="col-span-3 whitespace-pre-line text-edg-brand-text font-medium">
                    {row.modern}
                  </div>
                  <div className="col-span-3 text-text-secondary">{row.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start gap-3">
                <Info className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                <p className="text-text-secondary text-sm dark:text-text-inverse-muted">
                  <strong>Bottom Line:</strong> The right comparison is not just
                  frame price. Include demolition, permit review, engineering,
                  screens, drainage, electrical, maintenance, and how often the
                  space will actually be used.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WHAT TO EXPECT ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden ">
                <Image
                  src={images.pages.serviceAreas.sanibelShopros02}
                  alt="Newly installed gray and white louvered roof system replacing traditional lanai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="section-title mb-6">
                  What to Expect During Replacement
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Minimal Disruption</h4>
                      <p className="text-text-secondary text-sm">
                        On-site timing depends on the approved scope, product
                        lead time, inspections, access, and what demolition or
                        prep work is required.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Permit Handling</h4>
                      <p className="text-text-secondary text-sm">
                        We help prepare permit documentation and coordinate the
                        design questions that Sanibel may need answered.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Reuse What Works</h4>
                      <p className="text-text-secondary text-sm">
                        Existing concrete pads, electrical connections, and
                        footings are evaluated to see whether they can remain
                        part of the approved plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Final Inspection Support</h4>
                      <p className="text-text-secondary text-sm">
                        We support the inspection path tied to the approved
                        permit package and the selected system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Lanai Replacement FAQs
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Common questions about replacing your Sanibel lanai after storm damage.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CLUSTER LINKS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Explore More Sanibel Resources
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <Link
                href="/service-areas/sanibel-outdoor-living/modern-lanai"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    The Modern Lanai
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Compare traditional screened lanais against motorized
                    pergolas, screens, and newer outdoor room layouts.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Explore Modern Lanais <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/louvered-pergolas"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Louvered Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore our full range of louvered roof systems engineered for Sanibel's 
                    coastal permit and product documentation needs.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    View Pergola Systems <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/zoning-guide"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-colors hover:border-edg-brand/50"
                >
                  <IconWrapper icon={FileText} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Sanibel Permit Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Review floodplain, 50% rule, screen enclosure, product
                    approval, and local permit questions before rebuilding.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Read Permit Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-text-inverse md:text-4xl">
                Ready to Review a Lanai Replacement Plan?
              </h2>
              <p className="mb-8 text-xl text-text-inverse-muted">
                Send photos, dimensions, and known permit or insurance context
                before defaulting to the old layout.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={replacementContactHref}>
                  <Button size="lg" className="px-8 text-lg">
                    Start Replacement Review{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="/service-areas/sanibel-outdoor-living"
                  className="inline-flex items-center gap-2 text-sm text-text-inverse-muted transition-colors hover:text-text-inverse"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Sanibel Outdoor Living
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
