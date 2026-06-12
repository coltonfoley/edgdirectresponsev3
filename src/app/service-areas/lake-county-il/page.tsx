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
  Home,
  CheckCircle2,
  CloudSun,
  Wind,
  ShieldCheck,
  AlertTriangle,
  Clock,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Lake County, IL | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas, exterior shades, and glass enclosures for Lake County, IL homes. Local planning for Barrington estates, North Shore homes, Libertyville patios, and Chain O Lakes waterfronts.',
  openGraph: {
    title: 'Lake County Outdoor Living | EDG Patio & Shade',
    description: 'Luxury outdoor living systems for Lake County homes. Motorized pergolas and screens designed for Illinois weather.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/lake-county-il',
  },
  keywords: ['lake county pergolas', 'lake county outdoor living', 'lake county il patio', 'pergola installation lake county', 'barrington pergolas', 'lake forest shade systems'],
};

const localBenefits = [
  'Spring Grove showroom within reach of Lake County homeowners',
  'Planning support for village, HOA, and architectural review packages',
  'Pergola, screen, glass, heat, lighting, and control systems under one plan',
  'Designs tuned for estate lots, suburban patios, and waterfront exposure',
];

const neighborhoods = [
  {
    name: 'Barrington, Deer Park, and Kildeer',
    description:
      'Western Lake County projects often involve large patios, pool areas, wooded views, and HOA review. We plan louvered pergolas around long sightlines, mature trees, outdoor kitchens, and the need for a system that looks estate-grade rather than kit-built.',
  },
  {
    name: 'Lake Forest, Lake Bluff, and Highland Park',
    description:
      'North Shore-adjacent Lake County homes usually need a lighter touch. Historic architecture, ravine lots, lake exposure, and tighter design review make finish selection, column placement, drainage, and sightlines just as important as shade coverage.',
  },
  {
    name: 'Libertyville, Vernon Hills, and Mundelein',
    description:
      'These neighborhoods are strong fits for practical outdoor rooms: patios connected to family rooms, side-yard privacy needs, bug control, and evening dining. Screens, lighting, and heaters often matter as much as the overhead pergola.',
  },
  {
    name: 'Chain O Lakes and northern lake homes',
    description:
      'Waterfront homes around Fox Lake, Pistakee Lake, Antioch, and the Chain O Lakes need extra attention to wind, mosquitoes, drainage, deck conditions, and view preservation. We design shade and screen systems that protect comfort without closing off the water.',
  },
];

const weatherConsiderations = [
  {
    title: 'Waterfront and Open-Lot Wind',
    description:
      'Lake County has very different wind conditions from one property to the next. A patio near the Chain O Lakes, a ravine lot near Lake Michigan, and a wide-open yard near Kildeer all need different screen, post, and louver planning.',
    icon: Wind,
  },
  {
    title: 'Northern Illinois Freeze-Thaw',
    description:
      'Snow, ice, freeze-thaw cycles, and spring storms are part of the design load. We look at drainage, footing conditions, roof attachment, and winter maintenance before recommending a permanent structure.',
    icon: CloudSun,
  },
  {
    title: 'Mosquitoes, Glare, and Late-Day Sun',
    description:
      'For many Lake County clients, screens solve the real pain point. They can cut bugs, glare, wind, and neighbor sightlines while still letting the patio feel open when conditions are good.',
    icon: CloudSun,
  },
];

const planningNotes = [
  {
    title: 'Do not assume one Lake County rulebook',
    description:
      'Lake County contains many villages, unincorporated properties, HOA communities, and lake-adjacent sites. Permit paths, setbacks, easements, impervious surface rules, and review expectations can change by address. We start with the survey and municipality before calling a design final.',
    icon: AlertTriangle,
  },
  {
    title: 'Match the system to how the patio fails today',
    description:
      'Some homes need overhead rain and sun control. Others mostly need bug screens, privacy, or wind protection. A useful Lake County plan separates those problems before recommending a louvered pergola, retractable screen package, glass enclosure, or phased approach.',
    icon: Home,
  },
  {
    title: 'Build the approval package early',
    description:
      'For higher-value homes, the review package often matters as much as the product. Renderings, finish samples, structural information, electrical notes, and a clean site plan help homeowners, HOAs, and municipal reviewers understand the project.',
    icon: FileText,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Lake County?',
    answer:
      'Permanent outdoor structures commonly require local review, but Lake County is not one single permit path. A Barrington-area estate, a Libertyville patio, and a Chain O Lakes waterfront property can involve different municipalities, easements, HOA rules, and site-plan requirements. We help verify the right path before design is finalized.',
  },
  {
    question: 'Will my Homeowners Association approve a louvered roof?',
    answer:
      'Many HOAs are more comfortable when the submission is specific: color, placement, structure size, sightlines, drainage, electrical routing, and renderings. We help homeowners prepare that package so the pergola or screen system is reviewed as an architectural improvement, not a generic patio cover.',
  },
  {
    question: 'How do these systems hold up to Lake County winters?',
    answer:
      'We specify aluminum pergolas, screens, and enclosure systems for Northern Illinois exposure. That means looking at wind, snow, drainage, freeze-thaw conditions, and how the structure will be maintained during winter, instead of treating the project like a lightweight seasonal shade product.',
  },
  {
    question: 'What is the typical timeframe from design to installation?',
    answer:
      'A straightforward custom system often takes several weeks for design, review, fabrication, and installation. HOA and municipal review can change the timeline, especially on waterfront, estate, or historic-adjacent properties. We set expectations after we understand the address and scope.',
  },
];

export default function LakeCountyHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Lake County IL',
            description:
              'Custom motorized pergolas, shades, and enclosures for Lake County, IL homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Lake County',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-county-il',
            image: `https://www.edgpatioshade.com${images.pages.serviceAreas.barringtonPergola1}`,
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
            src={images.pages.serviceAreas.barringtonPergola1}
            alt="Motorized Louvered Pergola in Lake County Illinois"
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
                { label: 'Lake County, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Lake County, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Transform Your Lake County Backyard With
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From luxury estates in Barrington to waterfront homes on the Chain O&apos;Lakes. We design engineered shade systems that handle Illinois weather while elevating your home&apos;s value.
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
                Serving Communities Across Lake County
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Lake County is not one outdoor living market. Western estates,
                North Shore homes, suburban patios, and lakefront properties all
                need different planning decisions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-text-secondary">{neighborhood.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Lake County planning notes
              </div>
              <h2 className="section-title mb-4">
                A useful county page should help you make the first decision.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                The first question is not always "what size pergola?" It is
                whether your Lake County site needs overhead control, side
                protection, enclosure, approval documentation, or a phased
                outdoor room plan.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {planningNotes.map((note) => (
                <Card key={note.title} variant="muted" padding="lg">
                  <IconWrapper icon={note.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{note.title}</h3>
                  <p className="text-text-secondary">{note.description}</p>
                </Card>
              ))}
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
                Engineered for Northern Illinois Climate
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Don&apos;t let mosquitoes, rain, or snow dictate outside time.
              </p>
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
                Permits & HOA Regulations
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                We guide you through Lake County municipal building departments.
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Setbacks */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <ShieldCheck className="text-edg-brand-dark h-6 w-6" />
                  Property Setbacks & Variances
                </h3>
                <p className="text-text-secondary mb-4">
                  Structures like pergolas are often viewed as &quot;accessory structures.&quot; Because of this, they must adhere to setbacks:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-zinc-800">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>Side yards and rear yards often carry 5 to 10-foot boundaries from the property line.</span>
                  </li>
                  <li className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-zinc-800">
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5 shrink-0" />
                    <span>Easements (utility or drainage) must remain completely clear of permanent footings.</span>
                  </li>
                </ul>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <Clock className="text-edg-brand-dark h-6 w-6" />
                  Approval Packages
                </h3>
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    We assemble your application to prevent village & HOA delays.
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Plat of survey markup',
                    'Snow/Wind engineering stamps',
                    'HOA 3D renderings',
                    'Contractor licensing & insurance',
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
                Common Questions in Lake County
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
                Ready to Upgrade Your Lake County Home?
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
