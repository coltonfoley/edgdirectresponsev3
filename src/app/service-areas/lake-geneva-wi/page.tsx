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
  Wind,
  CloudSun,
  Thermometer,
  Waves,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outdoor Living Systems in Lake Geneva, WI | Pergolas & Shades | EDG',
  description:
    'Custom motorized pergolas, exterior shades, and retractable screens for Lake Geneva homes. Serving Fontana, Williams Bay, and nearby lake communities.',
  openGraph: {
    title: 'Lake Geneva Outdoor Living | Waterfront Pergolas | EDG',
    description:
      'Waterfront outdoor living systems for Lake Geneva estates. Pergolas, screens, and enclosures designed for Wisconsin lake life.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/lake-geneva-wi',
  },
  keywords: [
    'lake geneva pergolas',
    'lake geneva outdoor living',
    'wisconsin lakefront outdoor',
    'lake geneva patio',
    'wisconsin pergolas',
  ],
};

const localBenefits = [
  'Spring Grove showroom close to the Wisconsin border',
  'Lake-home planning for Geneva Lake, Fontana, Williams Bay, and nearby communities',
  'Pergola, screen, glass, heat, lighting, and control systems coordinated together',
  'Local product pages for pergolas, screens, and permit planning',
  'Site-specific planning for lake exposure, guest use, and seasonal schedules',
];

const neighborhoods = [
  {
    name: 'Lake Geneva (City & Lakefront)',
    description:
      'The heart of the Geneva Lake area features stunning waterfront estates and charming downtown properties. We specialize in designing outdoor living systems that maximize lake views while providing protection from wind and weather. Our systems are engineered to handle the unique demands of open-water exposure.',
  },
  {
    name: 'Fontana-on-Geneva-Lake',
    description:
      "Fontana's shoreline properties need systems that complement upscale lake homes without blocking the reason people gather there: the view. We plan pergolas, screens, and glass around guest flow, dining, boats, and the transition from house to water.",
  },
  {
    name: 'Williams Bay',
    description:
      'Home to Yerkes Observatory and beautiful bay-side properties, Williams Bay offers unique outdoor living opportunities. Our systems help homeowners enjoy the bay views while providing shelter from afternoon sun and sudden lake storms.',
  },
  {
    name: 'Surrounding Lake Communities',
    description:
      'From Delavan to Como, Elkhorn to smaller lake areas, we help homeowners think through wind, bugs, privacy, snow, and seasonal use. A smaller inland lake and a Geneva Lake estate are not the same design problem.',
  },
];

const localConsiderations = [
  {
    title: 'Lake Effect Winds',
    description:
      'Properties on Geneva Lake and surrounding waters can feel sudden wind shifts, open-water gusts, and weather that differs from inland neighborhoods. We review exposure before recommending roof spans, screens, mounting, and controls.',
    icon: Wind,
  },
  {
    title: 'Four-Season Use',
    description:
      'Wisconsin outdoor rooms need winter planning even when the main goal is summer entertaining. Drainage, snow, freeze-thaw movement, electrical routing, and off-season access all affect the final system.',
    icon: Thermometer,
  },
  {
    title: 'Summer Heat & UV',
    description:
      'July afternoons on the lake can be intense. Our exterior shades block 95% of UV rays while maintaining airflow, keeping your patio comfortable even during peak summer heat.',
    icon: CloudSun,
  },
  {
    title: 'Waterfront Regulations',
    description:
      'Lake Geneva area properties can involve municipal, county, HOA, or lake-adjacent review questions. We help identify the right review path before treating the design as final.',
    icon: Waves,
  },
];

const planningNotes = [
  {
    title: 'Design around guest use',
    description:
      'Lake Geneva homes often host family weekends, dinners, pool days, and summer guests. The pergola should support how people actually move between the house, patio, grill, pool, dock, and lawn.',
    icon: Thermometer,
  },
  {
    title: 'Protect the view first',
    description:
      'A covered outdoor room can ruin a lake property if posts, beams, screens, or glass interrupt the sightline. We plan structure placement and side protection around the view before selecting accessories.',
    icon: Waves,
  },
  {
    title: 'Verify the local path by address',
    description:
      'Fontana, Lake Geneva, Williams Bay, unincorporated Walworth County, and HOA communities can all require different review steps. We start with the address, survey, and project scope.',
    icon: MapPin,
  },
];

const localPages = [
  {
    title: 'Lake Geneva Motorized Pergolas',
    description:
      'Louvered roof planning for shade, light rain, lake wind, view protection, screens, lighting, heaters, and premium patio layouts.',
    href: '/service-areas/lake-geneva-wi/motorized-pergolas',
    icon: CloudSun,
  },
  {
    title: 'Lake Geneva Motorized Screens',
    description:
      'Retractable screen and outdoor shade layouts for bugs, glare, privacy, side wind, porch openings, and flexible screen-room comfort.',
    href: '/service-areas/lake-geneva-wi/retractable-screens',
    icon: Wind,
  },
  {
    title: 'Lake Geneva Permit Planning Guide',
    description:
      'Address-specific review notes for Lake Geneva, Fontana, Williams Bay, Walworth County, HOA, association, and lake-adjacent projects.',
    href: '/service-areas/lake-geneva-wi/zoning-guide',
    icon: MapPin,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in the Lake Geneva area?',
    answer:
      'Permanent outdoor structures commonly require local review, but the exact path depends on the municipality, county, property type, attachment method, lake proximity, and any HOA or association requirements. We help verify the correct path before design is finalized.',
  },
  {
    question: 'How do your systems handle lakefront wind conditions?',
    answer:
      'Geneva Lake can create very different comfort conditions than an inland subdivision. We review wind exposure, mounting conditions, louver direction, side screens, glass options, and controls before recommending a final system.',
  },
  {
    question: 'Can you work with HOA requirements in Fontana or Lake Geneva?',
    answer:
      'Yes, when the project is planned with the review package in mind. Lake-area communities may care about finish color, visibility, structure placement, drainage, and how the outdoor room affects neighboring views. We help prepare drawings, product information, and finish notes for review.',
  },
  {
    question: "What's the typical timeline for a Lake Geneva area project?",
    answer:
      'A custom Lake Geneva area project can take several weeks for design, review, fabrication, and installation. Seasonal schedules, guest calendars, review requirements, electrical coordination, and weather can change the timeline, so we set expectations after the address and scope are clear.',
  },
];

export default function LakeGenevaHubPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Lake Geneva',
            description:
              'Custom motorized pergolas and exterior shades for Lake Geneva, Fontana, and Williams Bay homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Lake Geneva',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-geneva-wi',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image - Using next/Image */}
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="White louvered pergola with LED lighting"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Lake Geneva, WI' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Lake Geneva, WI
              </span>
              <h1 className="hero-title mb-6 text-white">
                Upgrade Your Lake Geneva Home with
                <span className="text-edg-brand block">
                  Four-Season Outdoor Living
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                From the shores of Geneva Lake to the estates of Fontana and
                Williams Bay, we design engineered shade systems built for
                Wisconsin lakefront living.
              </p>
              <Link href="/contact?type=price&product=multiple&location=Lake%20Geneva%2C%20WI&source=lake_geneva_hub_hero">
                <Button size="lg" className="px-8 text-lg">
                  Request Lake Geneva Site Visit{' '}
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
                <span
                  key={i}
                  className="text-text-inverse-muted flex items-center gap-2"
                >
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" />{' '}
                  {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL PRODUCT PAGES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">
                Lake Geneva planning pages
              </div>
              <h2 className="section-title mb-4">
                Start with the project type you are actually considering
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                A lakefront pergola, a motorized screen retrofit, and a permit
                question do not need the same first conversation. These pages
                narrow the local planning path before a site review.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {localPages.map((page) => (
                <Link key={page.href} href={page.href} className="group">
                  <Card
                    variant="muted"
                    padding="lg"
                    className="hover:border-edg-brand/50 h-full transition-colors"
                  >
                    <IconWrapper
                      icon={page.icon}
                      variant="brand"
                      size="lg"
                      className="mb-5"
                    />
                    <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-text-secondary mb-5 leading-relaxed">
                      {page.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                      Open page
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving Every Lake Geneva Area Community
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Lake homes, weekend houses, smaller inland properties, and
                year-round residences need different outdoor-room plans. The
                view, guest use, and seasonal schedule matter from the start.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">
                    {neighborhood.name}
                  </h3>
                  <p className="text-text-secondary">
                    {neighborhood.description}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LAKE HOME PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Lake Geneva planning notes
              </div>
              <h2 className="section-title mb-4">
                The best lake-home outdoor rooms protect the reason you are
                there.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A Lake Geneva pergola or screen project should improve comfort
                without making the patio feel closed off from the water. That
                means views, wind, bugs, guest flow, privacy, and seasonal
                timing all belong in the first design conversation.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {planningNotes.map((note) => (
                <Card key={note.title} variant="muted" padding="lg">
                  <IconWrapper
                    icon={note.icon}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-xl font-bold">{note.title}</h3>
                  <p className="text-text-secondary">{note.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL PROOF ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={images.featuredProjects.lakeGenevaRestaurant.hero}
                  alt="Lake Geneva commercial outdoor dining project by EDG"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <div className="label-editorial-brand mb-4">
                  Local proof matters
                </div>
                <h2 className="section-title mb-6">
                  Lake Geneva buyers need more than a generic patio-cover page.
                </h2>
                <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                  A lake-area outdoor room should be planned around the actual
                  property: view, wind, guest flow, privacy, municipal review,
                  and seasonal use. EDG pairs nearby showroom access with local
                  project experience so the first conversation can move beyond
                  generic catalog photos.
                </p>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                  Bring photos, rough dimensions, and the project address. From
                  there, we can help decide whether the right first move is a
                  pergola, motorized screens, a permit planning conversation, or
                  a phased outdoor-room plan.
                </p>
                <Link href="/contact?type=price&product=multiple&location=Lake%20Geneva%2C%20WI&source=lake_geneva_local_proof">
                  <Button variant="secondary">
                    Share Photos for a Lake Geneva Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL CONSIDERATIONS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Built for Lake Geneva&apos;s Waterfront Conditions
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Our systems are engineered specifically for Wisconsin lakefront
                challenges.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {localConsiderations.map((item, i) => (
                <Card key={i} variant="default" padding="lg">
                  <IconWrapper
                    icon={item.icon}
                    variant="brand"
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
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
                Common Questions About Lake Geneva Projects
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                Everything you need to know about outdoor living in the Geneva
                Lake area.
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

      {/* ========== CTA ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Start Your Lake Geneva Project?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation with our local design team.
              </p>
              <Link href="/contact?type=price&product=multiple&location=Lake%20Geneva%2C%20WI&source=lake_geneva_hub_bottom">
                <Button size="lg" variant="dark" className="px-8 text-lg">
                  Schedule Free Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
