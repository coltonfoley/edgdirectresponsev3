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
    description:
      'Luxury outdoor living systems for McHenry County. Motorized pergolas and screens designed for Illinois weather.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/mchenry-county-il',
  },
  keywords: [
    'mchenry county pergolas',
    'mchenry county outdoor living',
    'crystal lake patio',
    'pergola installation mchenry',
    'spring grove pergolas',
  ],
};

const localBenefits = [
  'Headquartered right here in Spring Grove, IL',
  'Showroom access for clients who want to see pergolas, screens, and finishes in person',
  'Planning support for village, county, and HOA review paths',
  'Custom designs for rural acreage, lake homes, and suburban patios',
  'Pergola, screen, glass, heat, lighting, and control systems under one plan',
];

const neighborhoods = [
  {
    name: 'Crystal Lake',
    description:
      "Crystal Lake homes range from lake-adjacent properties to established suburban backyards. We plan pergolas and screens around view preservation, bugs, west sun, drainage, and how the patio connects to everyday family use.",
  },
  {
    name: 'Algonquin & Lake in the Hills',
    description:
      'Fox River Valley and Randall Road neighborhoods often need privacy and bug control as much as shade. A louvered roof, screens, lighting, and heaters should be considered together instead of added one piece at a time.',
  },
  {
    name: 'Spring Grove & Richmond',
    description:
      'This is EDG home territory. Spring Grove, Richmond, and nearby rural properties often deal with open-field wind, larger lots, detached entertaining areas, and clients who want to visit the showroom before choosing a system.',
  },
  {
    name: 'Woodstock & McHenry',
    description:
      'Historic homes near Woodstock Square, Fox River properties, and newer McHenry subdivisions each call for different design decisions. We match the structure to the home, the approval path, and the way the family wants to use the yard.',
  },
];

const weatherConsiderations = [
  {
    title: 'Open Field Winds',
    description:
      'Many McHenry County properties are more exposed than dense suburban lots. We review the site before recommending screen widths, post placement, louver orientation, and wind-management options.',
    icon: Wind,
  },
  {
    title: 'Heavy Winter Snow Loads',
    description:
      'Northern Illinois winters affect structure choice, drainage, footings, electrical routing, and how the system is maintained. Winter planning belongs in the design conversation, not after installation.',
    icon: CloudSun,
  },
  {
    title: 'Summer Humidity & Bugs',
    description:
      'Keep the mosquitoes away without blocking the summer breeze. Our tight-weave motorized screens block out pests and 95% of UV rays.',
    icon: CloudSun,
  },
];

const planningNotes = [
  {
    title: 'Use the showroom before guessing',
    description:
      'Because EDG is based in Spring Grove, McHenry County homeowners can see materials, colors, screen fabrics, louver operation, lighting, and controls before committing to a direction. That helps avoid a thin quote based only on photos and square footage.',
    icon: MapPin,
  },
  {
    title: 'Separate village and county questions early',
    description:
      'A Crystal Lake address, an unincorporated property, and a Spring Grove project can follow different review paths. We start with the survey, municipality, easements, attachment method, and any HOA requirements before treating the plan as final.',
    icon: FileText,
  },
  {
    title: 'Design for how the yard is actually used',
    description:
      'Some McHenry County projects need a poolside shade structure. Others need bug protection for a covered porch, privacy on a subdivision patio, or heat and lighting for late-season entertaining. The first decision is the use case, not the product name.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in McHenry County?',
    answer:
      'Permanent structures commonly require review, but the exact path depends on the municipality, whether the property is incorporated or unincorporated, the attachment method, easements, and project scope. We help verify the correct path before design is finalized.',
  },
  {
    question: 'Can I see the products in person?',
    answer:
      'Yes! We are headquartered in Spring Grove, IL. You can schedule a visit to our local showroom to test the motorized louvers, feel the screen fabrics, and see the heavy-duty aluminum extrusions up close.',
  },
  {
    question: 'How do these systems survive the heavy snowfall here?',
    answer:
      'We specify aluminum systems and controls around Northern Illinois exposure, then review drainage, louver operation, mounting, and seasonal maintenance for the specific site. That is more useful than assuming every McHenry County backyard needs the same configuration.',
  },
  {
    question: 'What is the typical timeframe from design to installation?',
    answer:
      'A straightforward custom project often takes several weeks for design, review, fabrication, and installation. Permitting, HOA review, electrical coordination, and weather can change the timeline, so we set expectations once the address and scope are clear.',
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
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
                <span className="text-edg-brand block">McHenry County</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                We design and install engineered, motorized shade systems right
                in our backyard. From Crystal Lake to Spring Grove, experience
                four-season outdoor comfort.
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

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving Communities Across McHenry County
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                McHenry County is EDG&apos;s home base, which gives homeowners a
                practical advantage: you can plan locally, see systems in person,
                and get advice that reflects rural, lake, and suburban site conditions.
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
            <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    Planning a pergola in Algonquin?
                  </h3>
                  <p className="text-text-secondary">
                    Use the city-specific Algonquin guide for Fox River Valley
                    permit notes, louvered roof planning, screens, and privacy
                    considerations.
                  </p>
                </div>
                <Link href="/service-areas/algonquin-il/motorized-pergolas">
                  <Button variant="secondary" className="shrink-0">
                    Algonquin pergolas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/service-areas/algonquin-il/retractable-screens">
                  <Button variant="secondary" className="shrink-0">
                    Algonquin screens
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
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
                McHenry County planning notes
              </div>
              <h2 className="section-title mb-4">
                The strongest local advantage is being able to plan in person.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A McHenry County page should not be a placeholder between
                Chicago and Wisconsin. It should help homeowners understand when
                a showroom visit, site review, or phased outdoor-room plan will
                save time before drawings and pricing begin.
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
                Engineered for Northern Illinois Weather
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {weatherConsiderations.map((item, i) => (
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
                Get a free consultation and customized quote from our local
                team.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="dark" className="px-8 text-lg">
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
