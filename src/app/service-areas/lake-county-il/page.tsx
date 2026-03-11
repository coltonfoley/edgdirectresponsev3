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
    'Custom motorized pergolas, exterior shades, and glass enclosures for Lake County, IL homes. Expert design and installation in Barrington, Lake Forest, and Libertyville.',
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
  'Deep knowledge of Lake County municipal zoning codes',
  'HOA approval package assistance',
  'Designs optimized for wide-open lots and lakefront properties',
  'Fully licensed & insured for Lake County, IL',
];

const neighborhoods = [
  {
    name: 'Barrington Area',
    description:
      'We excel at adapting to the expansive lots of Barrington, offering large-span louvered pergolas that maximize usable shade without obstructing the natural sightlines of your landscape.',
  },
  {
    name: 'Lake Forest & The North Shore',
    description:
      'Our team is experienced in designing systems that blend seamlessly with the historic and varied architecture of Lake Forest, ensuring modern comfort meets classic design.',
  },
  {
    name: 'Libertyville',
    description:
      'Libertyville\'s vibrant residential pockets are perfect for custom outdoor kitchens and motorized shades, turning standard patios into true year-round entertaining spaces.',
  },
  {
    name: 'Chain O\'Lakes Waterfronts',
    description:
      'Lakefront properties require robust engineering. Our hurricane-rated pergolas and heavy-duty exterior shades are built to withstand strong winds coming off the water.',
  },
];

const weatherConsiderations = [
  {
    title: 'High Winds off the Water',
    description:
      'Lake County\'s many bodies of water create microclimates with strong winds. Our motorized screens feature MagnaTrack technology to stay in their tracks during severe gusts.',
    icon: Wind,
  },
  {
    title: 'Heavy Winter Snow Loads',
    description:
      'Illinois winters hit Lake County hard. Our louvers can support up to 30psf of snow load and open automatically under heavy accumulation to protect your investment.',
    icon: CloudSun,
  },
  {
    title: 'Mosquitoes & Summer Heat',
    description:
      'Waterfronts mean bugs. Our tight-weave motorized screens block out mosquitoes and UV rays, so you can enjoy balmy July evenings unbothered by pests.',
    icon: CloudSun,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Lake County?',
    answer:
      'Yes, almost all municipalities in Lake County require a building permit for a permanent structure like a motorized pergola or glass enclosure. Depending on your exact city (like Barrington vs. Libertyville), the setback rules and impermeable surface limits will differ. We manage the entire permit application for you.',
  },
  {
    question: 'Will my Homeowners Association approve a louvered roof?',
    answer:
      'Because our extruded aluminum systems look like high-end architecture (and can be powder-coated to match your house trim), HOA approval rates are extremely high. We provide you with 3D renderings and engineering stamps to submit a flawless HOA architectural review packet.',
  },
  {
    question: 'How do these systems hold up to Lake County winters?',
    answer:
      'Exceptionally well. Traditional wood pergolas rot, warp, and require staining. Our systems are built from extruded aluminum with a premium powder coat. They will not rust and are engineered specifically for Northern Illinois snow loads.',
  },
  {
    question: 'What is the typical timeframe from design to installation?',
    answer:
      'Our custom systems are manufactured specifically for your home. From final design approval to the time we finish the installation in your backyard, you can expect an 8 to 12-week timeline. Permitting usually runs concurrently with manufacturing.',
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
                We understand the distinct architectural styles inside Lake County&apos;s best neighborhoods.
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
