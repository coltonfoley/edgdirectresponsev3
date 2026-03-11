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
  title: 'Outdoor Living Systems in Southeast Wisconsin | Pergolas | EDG',
  description:
    'Custom motorized pergolas, exterior shades, and glass enclosures for Southeast Wisconsin homes. Expert design and installation in Lake Geneva, Kenosha, and Pleasant Prairie.',
  openGraph: {
    title: 'Wisconsin Outdoor Living | EDG Patio & Shade',
    description: 'Luxury outdoor living systems for Wisconsin homes. Motorized pergolas and screens designed for harsh winter weather.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/southeast-wisconsin',
  },
  keywords: ['wisconsin pergolas', 'lake geneva outdoor living', 'kenosha patio', 'pergola installation wisconsin', 'pleasant prairie shade systems'],
};

const localBenefits = [
  'Engineered to withstand harsh Wisconsin winter snow loads',
  'Deep knowledge of Wisconsin county building codes',
  'Custom designs for lakeside properties and wide-open acreages',
  'Based right on the border in Spring Grove, IL for fast service',
];

const neighborhoods = [
  {
    name: 'Lake Geneva Area',
    description:
      'We excel at adapting to the expansive waterfront lots of Lake Geneva, offering large-span louvered pergolas that maximize usable shade without obstructing the lake views.',
  },
  {
    name: 'Kenosha & Pleasant Prairie',
    description:
      'From new construction to established neighborhoods, our motorized screen systems turn ordinary suburban patios into three-season rooms, free from mosquitoes.',
  },
  {
    name: 'Twin Lakes & Salem',
    description:
      'Lakeside properties require robust engineering. Our hurricane-rated pergolas and heavy-duty exterior shades are built to withstand strong straight-line winds off the water.',
  },
  {
    name: 'Burlington & Rural Acreage',
    description:
      'For wide-open properties, we design sprawling outdoor living environments featuring heavy-duty aluminum extrusions that won\'t crack or rot like traditional wood structures.',
  },
];

const weatherConsiderations = [
  {
    title: 'Heavy Wisconsin Snow Loads',
    description:
      'Wisconsin winters are punishing. Our louvers are engineered to support massive snow loads and open automatically under heavy accumulation to prevent structural damage.',
    icon: CloudSun,
  },
  {
    title: 'High Winds off the Lakes',
    description:
      'Whether on Lake Geneva or an open plain, wind is an issue. Our motorized screens feature MagnaTrack technology to stay in their tracks during severe gusts.',
    icon: Wind,
  },
  {
    title: 'Lakeside Mosquitoes',
    description:
      'Wisconsin bugs can ruin an outdoor dinner. Our tight-weave motorized screens block out pests and 95% of UV rays, so you can enjoy balmy July evenings entirely unbothered.',
    icon: CloudSun,
  },
];

const faqs = [
  {
    question: 'Do you install in Wisconsin even though you are based in Illinois?',
    answer:
      'Yes! We are headquartered in Spring Grove, IL, right on the Wisconsin border. We actively service all of Southeast Wisconsin, including Lake Geneva, Kenosha, and Walworth County, and are fully licensed to pull permits there.',
  },
  {
    question: 'How do your pergolas handle Wisconsin winters?',
    answer:
      'Exceptionally well. Traditional wood pergolas rot, warp, and require staining. Our systems are built from 6061-T6 extruded aluminum with a premium powder coat. They will not rust and are engineered specifically for Northern snow loads.',
  },
  {
    question: 'Do I need a building permit in Wisconsin?',
    answer:
      'Yes, whether you live in an incorporated city or unincorporated county limits, you generally need a building permit for a permanent structure like a motorized pergola or glass enclosure. We manage the entire permit application for you.',
  },
  {
    question: 'Can you install screens on my existing porch?',
    answer:
      'Absolutely. Our motorized retractable screens can be retrofitted onto almost any existing covered porch or patio opening, instantly converting your Wisconsin outdoor space into a bug-free three-season room.',
  },
];

export default function SoutheastWisconsinHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Southeast Wisconsin',
            description:
              'Custom motorized pergolas, shades, and enclosures for Southeast Wisconsin homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Southeast Wisconsin',
            },
            url: 'https://www.edgpatioshade.com/service-areas/southeast-wisconsin',
            image: `https://www.edgpatioshade.com${images.brand.context.lake}`,
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
            src={images.brand.context.lake}
            alt="Motorized Louvered Pergola in Southeast Wisconsin"
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
                { label: 'Southeast Wisconsin' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Southeast Wisconsin
              </span>
              <h1 className="hero-title mb-6 text-white">
                Transform Your Wisconsin Backyard With
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From luxury estates on Lake Geneva to wide-open properties in Kenosha. We design engineered shade systems that handle Wisconsin winter weather while elevating your home&apos;s value.
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
                Serving All of Southeast Wisconsin
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
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WEATHER CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Engineered for Wisconsin Weather
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
                Permits & Town Boards
              </h2>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Timeline */}
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <ShieldCheck className="text-edg-brand-dark h-6 w-6" />
                  We Handle the Paperwork
                </h3>
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                  <p className="font-medium text-amber-800 dark:text-amber-200">
                    We assemble your application to prevent Wisconsin county delays.
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Plat of survey markup',
                    'Snow/Wind engineering stamps',
                    'HOA & Town Board approval packets',
                    'Lake commission coordination (if applicable)',
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
                Common Questions in Wisconsin
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
                Ready to Upgrade Your Wisconsin Home?
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
