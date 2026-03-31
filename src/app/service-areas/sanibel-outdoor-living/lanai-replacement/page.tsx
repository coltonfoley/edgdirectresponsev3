import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
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
  title: 'Lanai Replacement Sanibel Island | Rebuild After Hurricane Ian | EDG',
  description:
    'Professional lanai replacement services in Sanibel. Replace damaged screen enclosures with hurricane-rated louvered roof systems. Navigate the 50% rule and rebuild smarter.',
  openGraph: {
    title: 'Lanai Replacement Sanibel Island | Rebuild After Hurricane Ian | EDG',
    description: 'Expert lanai replacement for Sanibel homes. Upgrade to modern louvered systems while rebuilding after storm damage. Free consultations available.',
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
  'Hurricane-rated replacement options',
  'Navigate 50% rule compliance',
  'Permit assistance included',
  'Upgrade while you rebuild',
];

const whyUpgrade = [
  {
    title: 'Better Hurricane Protection',
    description:
      'Traditional lanais failed under Ian\'s winds. Our Miami-Dade rated louvered systems withstand 175+ mph winds—significantly exceeding conventional screen enclosure construction.',
    icon: Wind,
  },
  {
    title: 'Lower Lifetime Costs',
    description:
      'Rebuilding a traditional lanai means accepting ongoing maintenance: rescreening every 5-10 years, painting, and repairs. A modern system eliminates screens entirely and requires zero maintenance for 20+ years.',
    icon: DollarSign,
  },
  {
    title: 'More Usable Days',
    description:
      'Fixed lanais trap heat and block breezes. Adjustable louvers let you control temperature and airflow, extending your outdoor season through Sanibel\'s hottest months.',
    icon: Clock,
  },
  {
    title: 'Higher Resale Value',
    description:
      'Buyers recognize innovation. A modern louvered system differentiates your home in Sanibel\'s competitive market and typically returns 70-80% of investment at sale.',
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
      'Our team designs a replacement system that maximizes your coverage allowance while ensuring full compliance with post-Ian building codes and sanctuary regulations.',
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
      'Professional installation of your new louvered system by manufacturer-certified crews. Typical timeline: 2-3 weeks for replacement projects.',
  },
];

const costComparison = [
  {
    factor: 'Upfront Cost (200 sq ft)',
    traditional: '$10,000 - $35,000',
    modern: '$12,000 - $24,000',
    note: 'Comparable initial investment',
  },
  {
    factor: 'Maintenance (20 years)',
    traditional: '$3,000 - $6,000\n(rescreening, repairs)',
    modern: '$0 - $500\n(occasional cleaning)',
    note: 'Modern saves $2,500-5,500',
  },
  {
    factor: 'Warranty & Lifespan',
    traditional: '10-20 years\n(screens fail first)',
    modern: '10yr structural warranty\n(20+ yr expected lifespan)',
    note: 'Modern backed by warranty',
  },
  {
    factor: 'Usability',
    traditional: 'Fixed shade only',
    modern: 'Adjustable sun/shade/rain',
    note: 'Modern = more functional days',
  },
  {
    factor: 'Home Value Impact',
    traditional: 'Standard ROI (70%)',
    modern: 'Premium feature (75-80%)',
    note: 'Modern adds more value',
  },
];

const faqs = [
  {
    question: 'Do I have to rebuild my lanai the same way after Hurricane Ian?',
    answer:
      'No. Even if insurance or the 50% rule requires full replacement, you can upgrade to a different type of structure. Many Sanibel homeowners are using this opportunity to switch from traditional screened lanais to louvered roof systems that offer better hurricane resistance and functionality.',
  },
  {
    question: 'What is the 50% rule and how does it affect my lanai replacement?',
    answer:
      'Sanibel\'s 50% rule states that if repair costs exceed 50% of your home\'s improved value, the entire structure must be brought to current flood codes. For many homeowners with lanai damage from Hurricane Ian, this triggered a full rebuild requirement—creating the perfect opportunity to upgrade to a modern system rather than rebuilding the same outdated design.',
  },
  {
    question: 'How long does lanai replacement take in Sanibel?',
    answer:
      'Most replacement projects take 8-12 weeks from contract to completion. Permitting through the City of Sanibel typically takes 4-6 weeks (expedited for storm recovery), and installation requires 2-3 weeks. This is comparable to traditional lanai rebuild timelines.',
  },
  {
    question: 'Will my insurance cover upgrading to a louvered system?',
    answer:
      'Insurance typically covers the cost to replace what you had (like-for-like). However, many homeowners use insurance funds for the base replacement and invest additional money to upgrade to a louvered system. The difference is often $2,000-8,000 for an average-sized lanai—an investment that pays for itself through reduced maintenance and increased home value.',
  },
  {
    question: 'Can I keep my existing concrete slab when replacing my lanai?',
    answer:
      'Usually yes. If your concrete pad is structurally sound and properly elevated, it can often be reused as the foundation for a new louvered system. This saves time and money compared to complete demolition and rebuilding. We assess footing depth, elevation, and condition during our initial consultation.',
  },
  {
    question: 'Is a louvered system harder to permit than a traditional lanai?',
    answer:
      'Not significantly. Both require building permits from the City of Sanibel. Our systems carry Miami-Dade County NOAs (Notices of Acceptance) that satisfy Florida Product Approval requirements, often streamlining the engineering review process. We handle all permit submissions and coordination with the Planning Department.',
  },
];

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
                Lanai Replacement in Sanibel:
                <span className="text-edg-brand block">Rebuild Smarter, Not the Same</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                Your lanai was damaged. The 50% rule may require full reconstruction. 
                This is your opportunity to upgrade to a hurricane-rated louvered system.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=sanibel&product=lanai-replacement&source=leads-sanibel-lanai-replacement">
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
      <Section className="section-md bg-amber-50 dark:bg-amber-900/10">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 border border-amber-200 bg-white p-6 shadow-sm dark:border-amber-800 dark:bg-zinc-900">
                <AlertTriangle className="mt-1 h-8 w-8 shrink-0 text-amber-600" />
                <div>
                  <h2 className="mb-2 text-xl font-bold text-amber-800 dark:text-amber-200">
                    Understanding the 50% Rule
                  </h2>
                  <p className="mb-4 text-amber-700 dark:text-amber-300">
                    Sanibel's building code requires that if repair costs exceed 50% of your home's 
                    improved value, the entire structure must be brought to current flood and wind codes. 
                    For many homeowners with lanai damage from Hurricane Ian, this triggered full 
                    reconstruction requirements.
                  </p>
                  <p className="text-amber-700 dark:text-amber-300">
                    <strong>The Opportunity:</strong> Since you are rebuilding anyway, you can install 
                    a completely different type of structure. Instead of replacing a failed screen 
                    enclosure with the same thing, upgrade to a hurricane-rated louvered system that 
                    will not need replacement after the next storm.
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

            <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <div className="flex items-start gap-3">
                <Info className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Bottom Line:</strong> Over 20 years, a modern louvered system typically costs 
                  less than rebuilding a traditional lanai twice (which screen enclosures often require 
                  due to storm damage and wear), while delivering superior functionality and home value.
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
                        Most replacement projects take 2-3 weeks of on-site work. We protect your 
                        landscaping and clean up daily.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Permit Handling</h4>
                      <p className="text-text-secondary text-sm">
                        We manage all City of Sanibel permits, including coordination with the 
                        Vegetation Committee if needed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Reuse What Works</h4>
                      <p className="text-text-secondary text-sm">
                        Existing concrete pads, electrical connections, and footings are evaluated 
                        for reuse to save costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <h4 className="font-bold">Final Inspection Support</h4>
                      <p className="text-text-secondary text-sm">
                        We coordinate all inspections and ensure your new structure meets every 
                        code requirement for certificate of occupancy.
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
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Link
                href="/service-areas/sanibel-outdoor-living/modern-lanai"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    The Modern Lanai
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Learn about the evolution from traditional screened lanais to intelligent 
                    louvered roof systems.
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
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Hurricane-Rated Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore our full range of louvered roof systems engineered for Sanibel's 
                    High Velocity Hurricane Zone.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    View Pergola Systems <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Replace Your Damaged Lanai?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free assessment and quote for upgrading to a hurricane-rated modern system.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=sanibel&product=lanai-replacement&source=leads-sanibel-lanai-replacement">
                  <Button size="lg" variant="dark" className="px-8 text-lg">
                    Schedule Free Assessment{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="/service-areas/sanibel-outdoor-living"
                  className="text-edg-dark/70 hover:text-edg-dark inline-flex items-center gap-2 text-sm transition-colors"
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
