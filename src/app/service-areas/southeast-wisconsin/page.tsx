import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
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
    'Custom motorized pergolas, exterior shades, and glass enclosures for Southeast Wisconsin homes. Local planning for Lake Geneva, Kenosha, Pleasant Prairie, Walworth County, and border-area lake properties.',
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Wisconsin Outdoor Living | EDG Patio & Shade',
    description:
      'Outdoor living systems for Wisconsin homes. Motorized pergolas and screens planned for winter weather.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/southeast-wisconsin',
  },
  keywords: [
    'wisconsin pergolas',
    'lake geneva outdoor living',
    'kenosha patio',
    'pergola installation wisconsin',
    'pleasant prairie shade systems',
  ],
};

const localBenefits = [
  'Spring Grove showroom close to the Wisconsin border',
  'Outdoor room planning for Lake Geneva, Kenosha, Pleasant Prairie, and Walworth County',
  'Pergola, screen, glass, heat, lighting, and control systems coordinated together',
  'Site-specific planning for lake homes, newer subdivisions, and rural acreage',
];

const neighborhoods = [
  {
    name: 'Lake Geneva and Geneva Lake homes',
    description:
      'Lake Geneva projects often involve second homes, lake views, pool decks, and entertaining spaces that need to feel polished for guests. We plan louvered pergolas and screens so shade, rain control, and bug protection do not block the view that made the property valuable.',
  },
  {
    name: 'Kenosha & Pleasant Prairie',
    description:
      'Newer subdivisions and established neighborhoods near Kenosha and Pleasant Prairie usually need practical comfort: afternoon sun, privacy from neighboring yards, bugs, and wind. Motorized screens or a compact louvered roof can turn a standard patio into a usable daily space.',
  },
  {
    name: 'Twin Lakes, Salem Lakes, and Paddock Lake',
    description:
      'Smaller lake communities need careful planning around decks, slopes, shore-facing exposure, and seasonal use. These homes often benefit from screens, heaters, and lighting as much as the overhead pergola itself.',
  },
  {
    name: 'Burlington, Union Grove, and rural acreage',
    description:
      'Wide-open properties can make a patio feel exposed even when the home has plenty of land. We design outdoor rooms that create a defined gathering zone while accounting for wind, snow, electrical access, and the relationship between the house, outbuildings, and landscape.',
  },
];

const weatherConsiderations = [
  {
    title: 'Lake and Open-Field Exposure',
    description:
      'Southeast Wisconsin outdoor rooms can face open-field wind, lakefront gusts, and sudden storms. We look at exposure first, then decide whether the right answer is a louvered roof, side screens, glass, or a phased system.',
    icon: CloudSun,
  },
  {
    title: 'Winter Planning',
    description:
      'A permanent pergola in Wisconsin needs more than summer shade. Drainage, snow, freeze-thaw movement, electrical routing, and maintenance access all affect whether the outdoor room performs year after year.',
    icon: Wind,
  },
  {
    title: 'Bugs, Glare, and Guest Comfort',
    description:
      'For lake homes and suburban patios alike, screens are often the feature people notice most. They reduce mosquitoes, glare, wind, and privacy issues while letting the space stay open when the weather is cooperating.',
    icon: CloudSun,
  },
];

const planningNotes = [
  {
    title: 'Border-area service without a generic template',
    description:
      'Southeast Wisconsin clients are close enough to our Spring Grove showroom to plan in person, but their projects are not the same as Illinois projects. We treat Wisconsin lake homes, subdivisions, and rural sites as their own design lane.',
    icon: MapPin,
  },
  {
    title: 'Municipal and county review can vary by address',
    description:
      'A Lake Geneva home, a Pleasant Prairie subdivision, and a rural Walworth County property can involve different permit, HOA, shoreland, or site-plan requirements. We help identify the review path before drawings and pricing are treated as final.',
    icon: FileText,
  },
  {
    title: 'Comfort features should be planned together',
    description:
      'The strongest Wisconsin outdoor rooms combine overhead control, side protection, heat, lighting, and simple controls. Planning those pieces together avoids a pergola that looks good but leaves the patio too windy, buggy, or dark to use often.',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question:
      'Do you install in Wisconsin even though you are based in Illinois?',
    answer:
      'Yes. EDG is headquartered in Spring Grove, IL, close to the Wisconsin border, and we serve Southeast Wisconsin projects where our systems, planning process, and installation support are a fit. We verify the right local review path for the specific address before treating a project as ready to build.',
  },
  {
    question: 'How do your pergolas handle Wisconsin winters?',
    answer:
      'We specify aluminum louvered roof systems for northern exposure and review the site conditions that matter in Wisconsin: snow, wind, drainage, freeze-thaw movement, footing conditions, and how the system will be maintained during the off-season.',
  },
  {
    question: 'Do I need a building permit in Wisconsin?',
    answer:
      'Permanent structures often require review, but the exact path depends on the municipality, county, attachment method, property type, and sometimes lake or HOA requirements. We help gather the survey, drawings, product information, and engineering details needed for the correct review path.',
  },
  {
    question: 'Can you install screens on my existing porch?',
    answer:
      'Often, yes. Motorized retractable screens can be retrofitted onto many covered porch or patio openings, turning a Wisconsin outdoor space into a more comfortable seasonal room with better bug, glare, and privacy control.',
  },
];

const heroContactHref = buildContactHref({
  type: 'quote',
  product: 'multiple',
  location: 'Southeast Wisconsin',
  source: 'southeast_wisconsin_hub_hero',
});
const bottomContactHref = buildContactHref({
  type: 'consultation',
  product: 'multiple',
  location: 'Southeast Wisconsin',
  source: 'southeast_wisconsin_hub_bottom',
});

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
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
                Plan a Southeast Wisconsin Outdoor Room With{' '}
                <span className="text-edg-brand block">
                  Motorized Outdoor Systems
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                EDG serves the corridor from the Illinois border through Lake
                Geneva, Kenosha, Pleasant Prairie, and nearby Walworth County
                communities. We plan shade, screen, and enclosure systems
                around local weather, review paths, and how the property is used.
              </p>
              <Link href={heroContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
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

      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Milwaukee planning
              </div>
              <h2 className="section-title mb-4">
                Inside Milwaukee city limits?
              </h2>
              <p className="text-text-secondary mb-7 text-lg leading-relaxed">
                Milwaukee patios, yards, terraces, and roof-adjacent spaces can
                have a distinct city zoning and permit path. Start with the
                Milwaukee hub for motorized-pergola planning and official City
                resources rather than applying a regional rule to a city
                address.
              </p>
              <Link href="/service-areas/milwaukee-wi">
                <Button variant="secondary">
                  Explore Milwaukee Pergola Planning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-semibold">
                <Link
                  href="/service-areas/lake-geneva-wi"
                  className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
                >
                  Lake Geneva outdoor living
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/systems/pergolas"
                  className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
                >
                  Compare motorized pergolas
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/systems/shades"
                  className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 transition-colors"
                >
                  Compare motorized screens
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Serving EDG&apos;s Southeast Wisconsin Corridor
              </h2>
              <p className="text-text-secondary mx-auto mt-4 max-w-2xl">
                This regional hub covers Lake Geneva, Kenosha, Pleasant
                Prairie, Walworth County, and nearby border communities—not a
                statewide installation promise. Lake use, newer subdivisions,
                rural exposure, and winter durability all shape the design.
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

      {/* ========== WISCONSIN PLANNING NOTES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Wisconsin planning notes
              </div>
              <h2 className="section-title mb-4">
                A lake-home patio and a Pleasant Prairie backyard are different
                jobs.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Southeast Wisconsin is a real service area because the homes,
                lots, and outdoor use cases are different from the Chicago
                suburbs. Before we get into dimensions, we help you decide what
                kind of system belongs on your property.
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
              <h2 className="section-title mb-4">Permits & Town Boards</h2>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Timeline */}
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
                  <ShieldCheck className="text-edg-brand-dark h-6 w-6" />
                  We Handle the Paperwork
                </h3>
                <div className="border-border bg-surface mb-6 flex items-center gap-3 border p-4">
                  <Clock className="text-edg-brand-text h-5 w-5 shrink-0" />
                  <p className="text-text-primary font-medium">
                    We assemble your application to prevent Wisconsin county
                    delays.
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
              </Card>
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
      <section className="section-md bg-surface-dark text-text-inverse">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to plan your Wisconsin project?
              </h2>
              <p className="text-text-inverse-muted mb-8 text-xl">
                Send photos, the address, and the main comfort issue. We will
                help you narrow the right system before drawings and pricing get
                too far ahead of the site.
              </p>
              <Link href={bottomContactHref}>
                <Button size="lg" className="px-8 text-lg">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
