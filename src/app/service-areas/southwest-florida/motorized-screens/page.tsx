import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Eye,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
  Smartphone,
  Sun,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Screens Southwest Florida | EDG Patio & Shade',
  description:
    'Motorized lanai and patio screens for Southwest Florida homes in Sanibel, Captiva, Fort Myers, Cape Coral, Naples, Bonita Springs, and Estero.',
  alternates: {
    canonical: '/service-areas/southwest-florida/motorized-screens',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Screens Southwest Florida | EDG Patio & Shade',
    description:
      'Motorized screen layouts for coastal patios, covered lanais, outdoor kitchens, and pergola openings in Southwest Florida.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized screens southwest florida',
    'motorized lanai screens florida',
    'motorized patio screens fort myers',
    'motorized screens cape coral',
    'retractable screens sanibel',
    'magnatrack screens florida',
    'outdoor patio screens naples fl',
  ],
};

const screenProblems = [
  {
    icon: Sun,
    title: 'Heat, glare, and low sun',
    description:
      'Late-day Gulf Coast sun can make an otherwise beautiful patio hard to use. Motorized screens drop when the sun is harsh, then disappear when the view and breeze matter more.',
  },
  {
    icon: Wind,
    title: 'Daily wind comfort',
    description:
      'Screens are not storm shutters, but the right tracked screen system can make everyday breezes, gusts, and open-corner patios feel calmer during normal use.',
  },
  {
    icon: Eye,
    title: 'Privacy without closing the view',
    description:
      'Fabric openness can be selected around the real goal: more privacy from neighboring homes, less glare across the pool, or a softer view without turning the patio into a dark room.',
  },
  {
    icon: Droplets,
    title: 'Salt-air planning',
    description:
      'Coastal hardware, powder-coated aluminum, careful attachment points, and service access matter more in Sanibel, Captiva, and waterfront Southwest Florida conditions.',
  },
];

const marketFits = [
  {
    title: 'Sanibel & Captiva covered lanais',
    description:
      'For a covered lanai or post-storm rebuild, EDG can review whether motorized screens, a pergola system, or both make sense with the existing structure and local review path.',
  },
  {
    title: 'Fort Myers & Cape Coral pool patios',
    description:
      'Canal homes and pool patios often need bug control, privacy, and late-day shade without another fixed enclosure. Screens work best when the opening geometry and attachment surfaces are planned early.',
  },
  {
    title: 'Naples, Bonita Springs & Estero outdoor kitchens',
    description:
      'Outdoor kitchens and dining areas benefit from screens that can manage sun and insects during use, then retract when the space should feel open for entertaining.',
  },
  {
    title: 'Pergola and porch openings',
    description:
      'If the patio also needs overhead shade or rain control, EDG can plan a motorized pergola first and integrate screens into the sides that matter most.',
  },
];

const planningDetails = [
  'Opening width, height, and whether each side is square enough for a tracked screen',
  'Existing roof, beam, soffit, column, or pergola conditions that can support the housing and side tracks',
  'Fabric openness for bugs, privacy, glare, view preservation, and daylight into the home',
  'Power path, switch location, remote or app control, sensors, and future service access',
  'Salt-air exposure, drainage, finish selection, and stainless or corrosion-resistant hardware needs',
  'Whether the request is a screen retrofit, a pergola-and-screen project, or a covered-lanai comfort upgrade',
];

const projectTypes = [
  {
    title: 'Motorized lanai screens',
    description:
      'For covered outdoor spaces, motorized screens can add shade, airflow control, privacy, and bug protection only when the patio needs it.',
  },
  {
    title: 'Pool patio screens',
    description:
      'A screen layout can make poolside dining more usable when insects, glare, and neighbor sightlines keep the patio from feeling comfortable.',
  },
  {
    title: 'Pergola-integrated screens',
    description:
      'When the patio needs overhead shade too, the cleanest result is usually a motorized pergola with screen openings planned from the beginning.',
  },
];

const faqs = [
  {
    question: 'Are motorized screens a good fit for Florida lanais?',
    answer:
      'They can be when there is an existing covered patio, lanai opening, porch, pergola, or outdoor kitchen where the main problems are bugs, sun, privacy, glare, or daily wind comfort. The structure still has to be measured and reviewed for proper housing, track, power, and attachment details.',
  },
  {
    question: 'Are motorized screens hurricane protection?',
    answer:
      'Motorized patio screens should be selected around their documented use case. For most Florida patio projects, the screen conversation is about daily comfort: sun, insects, privacy, airflow, and normal wind conditions.',
  },
  {
    question: 'Which Southwest Florida areas does EDG review?',
    answer:
      'Sanibel and Captiva are the core Florida focus. EDG can also review strong-fit screen and pergola projects in Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, Marco Island, and nearby Southwest Florida markets.',
  },
  {
    question: 'Should I start with screens or a motorized pergola?',
    answer:
      'Start with screens if the patio already has a usable roof or structure and the problem is side comfort. Start with a motorized pergola if the space still needs overhead shade, rain management, drainage, or a clean structural frame for future screens.',
  },
];

const heroContactHref = buildContactHref({
  type: 'price',
  product: 'shades',
  area: 'southwest-florida',
  source: 'swfl_screens_hero',
});

const inputsContactHref = buildContactHref({
  type: 'price',
  product: 'shades',
  area: 'southwest-florida',
  source: 'swfl_screens_inputs',
});

const bottomContactHref = buildContactHref({
  type: 'price',
  product: 'shades',
  area: 'southwest-florida',
  source: 'swfl_screens_bottom',
});

export default function SouthwestFloridaMotorizedScreensPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motorized Screens in Southwest Florida',
    description:
      'Motorized lanai and patio screen planning for Sanibel, Captiva, Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, and nearby Southwest Florida homes.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: [
      { '@type': 'City', name: 'Sanibel' },
      { '@type': 'City', name: 'Captiva' },
      { '@type': 'City', name: 'Fort Myers' },
      { '@type': 'City', name: 'Cape Coral' },
      { '@type': 'City', name: 'Naples' },
      { '@type': 'City', name: 'Bonita Springs' },
      { '@type': 'City', name: 'Estero' },
    ],
    serviceType: 'Motorized patio screens',
    url: 'https://www.edgpatioshade.com/service-areas/southwest-florida/motorized-screens',
    image: `https://www.edgpatioshade.com${images.systems.shades.hero}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <div className="min-h-screen bg-surface">
        <section className="relative flex min-h-[65vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.systems.shades.hero}
              alt="Motorized screens for Southwest Florida covered patio openings"
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
          </div>

          <Container className="relative z-10">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                {
                  label: 'Southwest Florida',
                  href: '/service-areas/southwest-florida',
                },
                { label: 'Motorized Screens' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/southwest-florida"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Southwest Florida
            </Link>
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-edg-brand/20 bg-edg-brand/10 px-4 py-2 text-xs font-bold tracking-widest text-edg-brand-dark uppercase">
                <MapPin className="h-4 w-4" />
                Sanibel, Captiva, Fort Myers, Cape Coral, Naples
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Screens for Southwest Florida Patios
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Motorized screen layouts for covered lanais, pool patios,
                outdoor kitchens, and pergola openings that need sun, bug,
                privacy, and daily wind comfort while keeping the outdoor room
                flexible.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={heroContactHref}>
                  <Button size="lg">Get a Screen Layout Review</Button>
                </Link>
                <Link href="/guides/magnatrack-screens-cost">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    See Screen Cost Guide
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <Section className="section-md">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  Covered Patio Screen Fit
                </div>
                <h2 className="section-title mb-6">
                  Start with screens when the roof or opening already works
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-text-secondary">
                  <p>
                    Many Southwest Florida patios already have a roof, beam,
                    soffit, or covered lanai opening. In those cases, the first
                    question is whether motorized screens can solve the comfort
                    problems: bugs, glare, privacy, late-day sun, and everyday
                    breezes.
                  </p>
                  <p>
                    If the space also needs overhead shade, rain management,
                    drainage, or a cleaner structural frame, the screen layout
                    should be planned with a motorized pergola rather than added
                    later.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.systems.shades.deployed}
                  alt="Deployed motorized patio screen for coastal outdoor comfort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">
                Florida Screen Problems
              </div>
              <h2 className="section-title mb-4">
                What motorized screens solve on Gulf Coast patios
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {screenProblems.map((problem) => (
                <Card key={problem.title} variant="default" padding="lg">
                  <div className="mb-4 flex items-center gap-3">
                    <problem.icon className="h-5 w-5 text-edg-brand-text" />
                    <h3 className="text-xl font-bold">{problem.title}</h3>
                  </div>
                  <p className="leading-relaxed text-text-secondary">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md">
          <Container>
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">Screen Fit</div>
              <h2 className="section-title mb-4">
                Match the screen plan to how the patio is actually used
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                A homeowner may describe the project as a lanai, patio, outdoor
                kitchen, porch, or poolside space. The useful question is what
                the space needs to do better: block bugs, cut glare, soften
                wind, add privacy, or create a cleaner shade plan.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {marketFits.map((fit) => (
                <Card key={fit.title} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{fit.title}</h3>
                  <p className="leading-relaxed text-text-secondary">
                    {fit.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  Quote Inputs
                </div>
                <h2 className="section-title mb-6">
                  A screen quote starts with the openings, not a catalog
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                  Motorized screens are custom systems. Before talking fabric
                  colors or controls, the opening geometry, attachment surfaces,
                  wind exposure, power path, and salt-air details need to make
                  sense.
                </p>
                <Link href={inputsContactHref}>
                  <Button>
                    Send Photos and Dimensions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-4">
                {planningDetails.map((item) => (
                  <Card key={item} variant="default" padding="lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand-text" />
                      <p className="font-medium leading-relaxed text-text-primary">
                        {item}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Project Paths</div>
              <h2 className="section-title mb-4">
                Three ways screens fit Florida patios
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projectTypes.map((type) => (
                <Card key={type.title} variant="muted" padding="lg">
                  <Ruler className="mb-5 h-8 w-8 text-edg-brand-text" />
                  <h3 className="mb-3 text-xl font-bold">{type.title}</h3>
                  <p className="leading-relaxed text-text-secondary">
                    {type.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">
                  Southwest Florida screen questions
                </h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} variant="default" padding="lg">
                    <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                    <p className="leading-relaxed text-text-secondary">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <section className="section-lg bg-surface-dark text-text-inverse">
          <Container>
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Ready to review a Florida screen layout?
                </h2>
                <p className="mb-8 max-w-xl text-xl text-text-inverse-muted">
                  Send the address, photos, rough opening sizes, and what you
                  want solved first: bugs, sun, privacy, wind comfort, or a
                  pergola-and-screen plan.
                </p>
                <Link href={bottomContactHref}>
                  <Button size="lg">Start a Screen Quote</Button>
                </Link>
              </div>
              <div className="hidden border-l border-border-inverse pl-16 md:block">
                <div className="space-y-4 text-text-inverse-muted">
                  <h4 className="text-lg font-bold tracking-wide uppercase">
                    Keep exploring
                  </h4>
                  <Link
                    href="/service-areas/southwest-florida"
                    className="flex items-center gap-3"
                  >
                    <Home className="h-4 w-4 text-edg-brand" />
                    Southwest Florida planning
                  </Link>
                  <Link
                    href="/systems/shades"
                    className="flex items-center gap-3"
                  >
                    <ShieldCheck className="h-4 w-4 text-edg-brand" />
                    Full motorized screen details
                  </Link>
                  <Link
                    href="/guides/magnatrack-screens-cost"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="h-4 w-4 text-edg-brand" />
                    MagnaTrack screens cost guide
                  </Link>
                  <Link
                    href="/service-areas/sanibel-outdoor-living/louvered-pergolas"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="h-4 w-4 text-edg-brand" />
                    Sanibel motorized pergolas
                  </Link>
                  <Link
                    href="/service-areas/sanibel-outdoor-living"
                    className="flex items-center gap-3"
                  >
                    <Smartphone className="h-4 w-4 text-edg-brand" />
                    Sanibel outdoor living hub
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
