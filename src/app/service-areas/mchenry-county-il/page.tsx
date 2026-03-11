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
  title: 'Outdoor Living Systems in McHenry County | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas, exterior shades, and glass enclosures for McHenry County, IL homes. Expert design and installation in Crystal Lake, Spring Grove, and surrounding areas.',
  openGraph: {
    title: 'McHenry County Outdoor Living | EDG Patio & Shade',
    description: 'Luxury outdoor living systems for McHenry County. Motorized pergolas and screens designed for Illinois weather.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/mchenry-county-il',
  },
  keywords: ['mchenry county pergolas', 'mchenry county outdoor living', 'crystal lake patio', 'pergola installation mchenry', 'spring grove pergolas'],
};

const localBenefits = [
  'Headquartered right here in Spring Grove, IL',
  'Deep knowledge of McHenry County building departments',
  'Custom designs for sprawling acreages and tight suburban lots',
  'Local showroom available for hands-on planning',
];

const neighborhoods = [
  {
    name: 'Crystal Lake',
    description:
      'We design systems that maximize views of the water or expansive backyards, offering large-span louvered pergolas that don\'t obstruct natural sightlines.',
  },
  {
    name: 'Algonquin & Lake in the Hills',
    description:
      'Turn your suburban patio into a three-season room. Our motorized screens and enclosed systems are perfect for keeping the bugs out on summer nights.',
  },
  {
    name: 'Spring Grove & Richmond',
    description:
      'Our hometown! We have transformed countless rural and suburban properties here with heavy-duty aluminum systems that withstand open-field winds.',
  },
  {
    name: 'Woodstock & McHenry',
    description:
      'Whether a historic home near the Square or a new build near the Fox River, we engineer shade systems that integrate seamlessly with your architecture.',
  },
];

const weatherConsiderations = [
  {
    title: 'Open Field Winds',
    description:
      'Many properties in McHenry County are exposed to strong straight-line winds. Our motorized screens feature MagnaTrack technology to stay locked in their tracks.',
    icon: Wind,
  },
  {
    title: 'Heavy Winter Snow Loads',
    description:
      'Illinois winters hit McHenry County hard. Our louvers support up to 30psf of snow load and open automatically under heavy accumulation.',
    icon: CloudSun,
  },
  {
    title: 'Summer Humidity & Bugs',
    description:
      'Keep the mosquitoes away without blocking the summer breeze. Our tight-weave motorized screens block out pests and 95% of UV rays.',
    icon: CloudSun,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in McHenry County?',
    answer:
      'Yes, whether you live in an incorporated city like Crystal Lake or unincorporated McHenry County, you generally need a building permit for a permanent structure. We handle the entire zoning and permit application process for you.',
  },
  {
    question: 'Can I see the products in person?',
    answer:
      'Yes! We are headquartered in Spring Grove, IL. You can schedule a visit to our local showroom to test the motorized louvers, feel the screen fabrics, and see the heavy-duty aluminum extrusions up close.',
  },
  {
    question: 'How do these systems survive the heavy snowfall here?',
    answer:
      'Traditional wood and vinyl pergolas can warp or crack under heavy snow. Our systems are built from extruded aluminum and engineered specifically for Northern Illinois snow loads. Built-in sensors can also open the louvers automatically to prevent dangerous ice accumulation.',
  },
  {
    question: 'What is the typical timeframe from design to installation?',
    answer:
      'Because our systems are custom-manufactured in the USA for your exact dimensions, expect an 8 to 12-week timeline. Permitting usually runs concurrently with the manufacturing process to save time.',
  },
];

export default function McHenryCountyHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - McHenry County IL',
            description:
              'Custom motorized pergolas, shades, and enclosures for McHenry County, IL homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'McHenry County',
            },
            url: 'https://www.edgpatioshade.com/service-areas/mchenry-county-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.screens}`,
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
            src={images.brand.hero.screens}
            alt="Motorized Louvered Pergola in McHenry County Illinois"
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
                { label: 'McHenry County, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: McHenry County, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Premium Outdoor Living Systems in
                <span className="text-edg-brand block">
                  McHenry County
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                We design and install engineered, motorized shade systems right in our backyard. From Crystal Lake to Spring Grove, experience four-season outdoor comfort.
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
                Serving Communities Across McHenry County
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
                Engineered for Northern Illinois Weather
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
                Permits & Zoning Constraints
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
                    We assemble your application to prevent county/city delays.
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Plat of survey markup',
                    'Snow/Wind engineering stamps',
                    'HOA approval packets',
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
                Common Questions in McHenry County
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
                Ready to Upgrade Your McHenry County Home?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation and customized quote from our local team.
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
