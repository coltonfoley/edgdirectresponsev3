import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { generateFAQSchema } from '@/lib/schema';
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
  CheckCircle2,
  CloudSun,
  Wind,
  ShieldCheck,
  Clock,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in North Shore Chicago | Pergolas | EDG',
  description:
    'Custom motorized pergolas, exterior shades, and glass enclosures for North Shore Chicago homes. Expert design and installation in Winnetka, Wilmette, and Glencoe.',
  openGraph: {
    title: 'North Shore Chicago Outdoor Living | EDG Patio & Shade',
    description: 'Luxury outdoor living systems for the North Shore. Motorized pergolas and screens designed for lakefront weather and historic districts.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/north-shore-chicago',
  },
  keywords: ['north shore pergolas', 'north shore outdoor living', 'winnetka patio', 'pergola installation north shore', 'wilmette pergolas', 'glencoe outoor shading'],
};

const localBenefits = [
  'Experts in North Shore Historic Preservation Commission approvals',
  'Deep knowledge of Village zoning codes (impermeable surface limits)',
  'Designs optimized for lakefront properties and tight setbacks',
  'Powder-coated aluminum finishes to match any classic architecture',
];

const neighborhoods = [
  {
    name: 'Winnetka & Glencoe',
    description:
      'We excel at securing approvals in historic districts and designing systems that complement century-old homes. Our louvered pergolas look like high-end, permanent architecture.',
  },
  {
    name: 'Wilmette & Kenilworth',
    description:
      'Turn your brick patio into a true outdoor room. Our motorized screens keep out the lake-effect wind, while our heavy-duty extrusions match your home\'s premium aesthetic.',
  },
  {
    name: 'Highland Park & Lake Forest',
    description:
      'For expansive ravines and lakefront lots, we engineer large-span shade systems that protect you from the elements without ruining your million-dollar view.',
  },
  {
    name: 'Evanston',
    description:
      'Urban lot sizes require precise engineering. We design compact, zoning-compliant systems that maximize every square foot of your available outdoor space.',
  },
];

const weatherConsiderations = [
  {
    title: 'Lake Michigan Winds',
    description:
      'North Shore properties experience severe off-lake gusts. Our motorized screens feature MagnaTrack technology, locking them into their tracks to prevent blowouts.',
    icon: Wind,
  },
  {
    title: 'Heavy Winter Snow Loads',
    description:
      'Chicago winters hit the North Shore hard. Our louvers support up to 30psf of snow load and open automatically under heavy accumulation.',
    icon: CloudSun,
  },
  {
    title: 'Summer Humidity & Bugs',
    description:
      'Enjoy summer evenings without mosquitoes. Our tight-weave motorized screens block out pests and 95% of UV rays.',
    icon: CloudSun,
  },
];

const faqs = [
  {
    question: 'How do you handle strict North Shore permeable surface limits?',
    answer:
      'Many North Shore villages restrict the total "impermeable" square footage on a lot. Because our louvered pergolas can open and close, they are often classified differently than a solid roof during the permit phase. We navigate these complex ratios for you.',
  },
  {
    question: 'Can you work with historic districts?',
    answer:
      'Absolutely. We have successfully secured approvals from Historic Preservation Commissions across the North Shore. Our aluminum systems can be powder-coated to precisely match your home\'s trim or brickwork.',
  },
  {
    question: 'Do I need a permit for an automated pergola?',
    answer:
      '100% yes. Every municipality on the North Shore requires a structural permit, and usually zoning approval, for a structure of this caliber. We handle the entire engineering, drafting, and permit expediting process.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Expect 8 to 12 weeks for custom manufacturing. Village permit approval times vary wildly on the North Shore (often taking 4-6 weeks), but we submit your paperwork immediately after design approval to keep things moving.',
  },
];

export default function NorthShoreHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - North Shore Chicago',
            description:
              'Custom motorized pergolas, shades, and enclosures for North Shore Chicago homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'North Shore',
            },
            url: 'https://www.edgpatioshade.com/service-areas/north-shore-chicago',
            image: `https://www.edgpatioshade.com${images.brand.hero.lifestyle}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.lifestyle}
            alt="Motorized Louvered Pergola in North Shore Chicago"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'North Shore Chicago' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: North Shore Chicago
              </span>
              <h1 className="hero-title mb-6 text-white">
                Premium Outdoor Living Systems on the
                <span className="text-edg-brand block">
                  North Shore
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                We design engineered shade systems that respect your home&apos;s architectural heritage while handling heavy lakefront weather. From Winnetka to Lake Forest.
              </p>
              <Link href="/contact">
                <Button size="lg" className="px-8 text-lg">
                  Request a Free Site Visit{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL EXPERTISE ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span key={i} className="text-text-inverse-muted flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving the Entire North Shore Strip
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-text-secondary">{neighborhood.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/service-areas/deerfield-il/retractable-screens"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text transition-colors hover:text-edg-brand"
              >
                Deerfield homeowners: see motorized retractable patio screens
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WEATHER CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Engineered for Lake-Effect Climiate
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {weatherConsiderations.map((item, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== ZONING & CODES SECTION ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Historic Commisions & Zoning Approvals
              </h2>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Timeline */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <ShieldCheck className="text-edg-brand-dark h-6 w-6" />
                  We Handle the Rigid Paperwork
                </h3>
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    We manage the dense permitting processes on the North Shore.
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Impervious surface calculations',
                    'Snow/Wind structural engineering stamps',
                    'Historic Preservation packets',
                    'Village meeting attendance (if needed)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <FileText className="h-4 w-4 text-zinc-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions in North Shore
              </h2>
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

      {/* ========== CTA ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Upgrade Your North Shore Home?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation and customized quote from our team.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="dark"
                  className="px-8 text-lg"
                >
                  Schedule Free Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
