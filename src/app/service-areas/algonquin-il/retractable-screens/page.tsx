import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  Home,
  MapPin,
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
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Screens in Algonquin, IL | EDG Patio & Shade',
  description:
    'Motorized retractable patio screens for Algonquin, IL homes. Plan bug, privacy, wind, glare, and pergola screen layouts near the Fox River Valley.',
  alternates: {
    canonical: '/service-areas/algonquin-il/retractable-screens',
  },
  openGraph: {
    title: 'Motorized Screens in Algonquin, IL | EDG Patio & Shade',
    description:
      'Custom retractable patio screens for Algonquin porches, pergolas, patios, and outdoor rooms.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized screens Algonquin IL',
    'retractable screens Algonquin IL',
    'motorized patio screens Algonquin',
    'Algonquin patio screen installer',
    'outdoor screens Algonquin IL',
  ],
};

const benefits = [
  {
    icon: Wind,
    title: 'Calmer patios near open lots and river air',
    description:
      'Algonquin patios near the Fox River, Randall Road subdivisions, and open McHenry County edges can feel exposed when wind moves across the yard. Tracked motorized screens help soften that movement without turning the patio into a permanent enclosure.',
  },
  {
    icon: Eye,
    title: 'Privacy from close side yards',
    description:
      'Screens are useful when the outdoor room faces a neighbor, second-story window, or shared fence line. Fabric openness can be selected for a better balance of privacy, daylight, and view.',
  },
  {
    icon: Sun,
    title: 'Low sun and glare control',
    description:
      'West-facing patios around Algonquin Commons, High Hill Farms, and newer subdivisions often need help late in the day. Motorized screens can drop for dinner, then disappear when the sun is no longer a problem.',
  },
  {
    icon: Smartphone,
    title: 'Easy daily use',
    description:
      'Remote control, wall switch, app, and smart-home options matter because screens only help if they are simple enough to use every day as bugs, wind, privacy, and sun conditions change.',
  },
];

const planningDetails = [
  'Opening width, height, and whether each opening is square enough for smooth tracking',
  'Headbox placement, side-track attachment, bottom seal, and how visible the hardware should be',
  'Fabric openness for bug control, privacy, solar comfort, view, and daylight into the home',
  'Electrical path, switch location, remotes, app control, sensors, and future service access',
  'Whether the screens are a retrofit, a pergola add-on, or part of a larger outdoor room plan',
  'Permit or HOA review when screens are tied to a deck, pergola, screen room, or structural change',
];

const localFits = [
  {
    title: 'Old Town, Main Street, and Fox River patios',
    description:
      'River-adjacent patios often need bug control and evening comfort without losing the open-air feel. Screens are a strong fit when the project already has a roof, pergola, porch, or outdoor structure that can support clean tracks.',
  },
  {
    title: 'Randall Road and Algonquin Commons area homes',
    description:
      'Newer homes west of town often have larger back patios with direct sun and open sightlines. A screen layout can create a more usable dinner zone without adding a fixed wall that feels heavy from inside the house.',
  },
  {
    title: 'High Hill Farms and Willoughby Farms',
    description:
      'Side-yard privacy and low evening sun are common issues in established neighborhoods. The right fabric can make a patio feel calmer while still keeping the yard visually connected.',
  },
  {
    title: 'Lake in the Hills and County Line Road edge',
    description:
      'Where Algonquin blends into nearby communities, wind exposure and backyard orientation can vary quickly. We review the exact openings before deciding whether screens alone solve the problem or should be paired with a louvered roof.',
  },
];

const faqs = [
  {
    question: 'Are motorized screens a good fit for Algonquin patios?',
    answer:
      'Yes when the main issues are bugs, glare, privacy, wind, or comfort around an existing patio, porch, pergola, or covered outdoor room. They are especially useful because they retract when the weather is comfortable and deploy only when conditions change.',
  },
  {
    question: 'Can screens be added to an existing pergola or covered patio?',
    answer:
      'Often they can, but the structure has to be measured carefully. We check the opening width, height, attachment surfaces, headbox location, side-track path, power access, and whether the structure is rigid enough for reliable screen operation.',
  },
  {
    question: 'Do Algonquin screen projects need permits?',
    answer:
      'A simple screen retrofit may be reviewed differently than a new pergola, deck, or screen room. Algonquin publishes separate guidance for pergolas and decks, and its deck handout notes pier requirements when a pergola, gazebo, or screen room may be added. The safe move is to verify with Community Development before treating the project as permit-free.',
  },
  {
    question: 'Will screens make the patio too dark?',
    answer:
      'Not if the fabric is selected around the actual problem. We balance openness, fabric color, view, solar control, privacy, and how much daylight should still reach the house.',
  },
  {
    question: 'Should I start with screens or a motorized pergola?',
    answer:
      'Start with screens if you already have a roof or structure and the problem is side comfort. Start with a motorized pergola if you still need overhead shade, rain management, column layout, and a complete outdoor room foundation.',
  },
];

const gallery = [
  {
    src: images.systems.shades.hero,
    alt: 'Motorized patio screen system for Algonquin outdoor living planning',
  },
  {
    src: images.systems.shades.deployed,
    alt: 'Deployed retractable patio screen for bug wind and privacy control',
  },
  {
    src: images.brand.hero.screens,
    alt: 'Retractable screen installation on a covered outdoor living structure',
  },
];

export default function AlgonquinRetractableScreensPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Retractable Patio Screens in Algonquin, IL',
    description:
      'Custom motorized retractable patio screens for Algonquin porches, patios, pergolas, and outdoor rooms.',
    url: 'https://www.edgpatioshade.com/service-areas/algonquin-il/retractable-screens',
    image: `https://www.edgpatioshade.com${images.systems.shades.hero}`,
  });

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

      <main className="bg-surface min-h-screen">
        <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.systems.shades.hero}
              alt="Motorized retractable patio screens for Algonquin Illinois homes"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <Container className="relative z-10">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Algonquin, IL', href: '/service-areas/algonquin-il' },
                { label: 'Retractable Screens' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/algonquin-il"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Algonquin service area
            </Link>
            <div className="max-w-4xl">
              <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-5 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" />
                Algonquin screen installer
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Patio Screens in Algonquin, IL
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Retractable outdoor screens for Algonquin patios, porches,
                pergolas, and outdoor rooms that need better bug control,
                privacy, wind comfort, and late-day shade.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?type=price&product=shades&area=algonquin&source=algonquin_screens">
                  <Button size="lg">Get a Screen Layout Review</Button>
                </Link>
                <Link href="/systems/shades">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Screen System Details
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
                  Why screens fit Algonquin
                </div>
                <h2 className="section-title mb-6">
                  A practical upgrade for patios that are almost there
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Algonquin homeowners often already have the bones of a useful
                  outdoor space: a covered porch, a patio under a deck, a
                  louvered pergola, or a backyard dining zone that works on calm
                  nights. The problem is usually the side conditions. Mosquitoes
                  show up near the Fox River. Low sun pushes across a
                  west-facing patio. A neighboring window makes the space feel
                  exposed. Wind moves through an open subdivision lot.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Motorized retractable screens are useful because they solve
                  those side problems without making the space feel permanently
                  enclosed. Drop the screens for dinner, privacy, and glare
                  control. Retract them when the weather is calm and the yard
                  view matters more. For many Algonquin projects, that
                  flexibility is the missing piece between a nice patio and a
                  room the family actually uses.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.systems.shades.deployed}
                  alt="Deployed motorized patio screen for Algonquin outdoor comfort"
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
              <div className="label-editorial-brand mb-4">Local benefits</div>
              <h2 className="section-title mb-4">
                What screens solve on Algonquin patios
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} variant="default" padding="lg">
                  <div className="mb-4 flex items-center gap-3">
                    <benefit.icon className="text-edg-brand-text h-5 w-5" />
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md">
          <Container>
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">Neighborhood fit</div>
              <h2 className="section-title mb-4">
                Screen layouts should follow the actual exposure
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                The same screen product can solve different problems depending
                on the lot. We look at which openings matter, whether the screen
                should prioritize bugs or privacy, and whether the patio also
                needs overhead shade from a motorized pergola.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {localFits.map((fit) => (
                <Card key={fit.title} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{fit.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
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
                  Planning details
                </div>
                <h2 className="section-title mb-6">
                  Measure the openings before choosing the screen
                </h2>
                <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                  Screen quality is only one part of the decision. The layout
                  has to fit the actual opening, attachment surfaces, power
                  path, and user routine. A screen that is slightly wrong on
                  width, track placement, or fabric openness can feel
                  frustrating every time it is used.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  That is why EDG starts with photos, dimensions, and a simple
                  priority call: bugs, privacy, glare, wind, or all-season
                  comfort. From there we can tell whether screens alone are a
                  clean first phase or whether the patio should be planned with
                  a pergola, heaters, lighting, or glass.
                </p>
              </div>
              <div className="grid gap-4">
                {planningDetails.map((item) => (
                  <Card key={item} variant="default" padding="lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-text-primary font-medium">{item}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1fr]">
              <Card variant="muted" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
                <h2 className="mb-4 text-2xl font-bold">
                  Permit and structure check
                </h2>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  A screen retrofit is not the same as building a new pergola or
                  screen room, but the distinction matters. Algonquin's
                  published pergola checklist and deck handout both point
                  homeowners back to Community Development when a permanent
                  structure, deck, pergola, gazebo, or screen room is involved.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.algonquin.org/egov/apps/document/center.egov?id=8655&view=item"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 text-sm font-bold"
                  >
                    Village pergola checklist
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.algonquin.org/egov/documents/1472562940_43774.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-edg-brand-text hover:text-edg-brand inline-flex items-center gap-2 text-sm font-bold"
                  >
                    Village deck handout
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Card>

              <div>
                <div className="label-editorial-brand mb-4">
                  Screen or pergola first?
                </div>
                <h2 className="section-title mb-6">
                  The right first move depends on what the patio is missing
                </h2>
                <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                  <p>
                    If the patio already has a usable roof or structure, screens
                    can be the fastest way to improve comfort. They are a strong
                    first move when the problem is insects, low sun, visibility
                    from neighbors, or wind through an open side.
                  </p>
                  <p>
                    If the patio still needs overhead shade, rain control, post
                    layout, drainage, or a cleaner architectural frame, the
                    motorized pergola should usually be planned first. Screens
                    can then be integrated into the pergola openings instead of
                    being forced onto a structure that was not designed for
                    them.
                  </p>
                  <p>
                    Many Algonquin homeowners end up with both: a louvered roof
                    for overhead control and screens on the sides that matter
                    most. The point is to phase the work intelligently instead
                    of buying isolated parts that do not work together.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/service-areas/algonquin-il/motorized-pergolas">
                    <Button variant="secondary">
                      Compare Algonquin pergolas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/service-areas/algonquin-il/zoning-guide">
                    <Button variant="secondary">
                      Read permit guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Visual direction</div>
              <h2 className="section-title mb-4">
                Screen systems and fabric behavior
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.alt}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-lg">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">Algonquin screen questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} variant="default" padding="lg">
                    <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                    <p className="text-text-secondary leading-relaxed">
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
                  Ready to review an Algonquin screen layout?
                </h2>
                <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                  Send photos and rough opening dimensions. We will help you
                  decide whether screens alone solve the problem or whether the
                  patio should be planned with a pergola or enclosure.
                </p>
                <Link href="/contact?type=price&product=shades&area=algonquin&source=algonquin_screens_bottom">
                  <Button size="lg">Start Your Quote</Button>
                </Link>
              </div>
              <div className="border-border-inverse hidden border-l pl-16 md:block">
                <div className="text-text-inverse-muted space-y-4">
                  <h4 className="text-lg font-bold tracking-wide uppercase">
                    Keep exploring
                  </h4>
                  <Link
                    href="/service-areas/algonquin-il"
                    className="flex items-center gap-3"
                  >
                    <Home className="text-edg-brand h-4 w-4" />
                    Back to Algonquin service area
                  </Link>
                  <Link
                    href="/systems/shades"
                    className="flex items-center gap-3"
                  >
                    <ShieldCheck className="text-edg-brand h-4 w-4" />
                    Full retractable screen specs
                  </Link>
                  <Link
                    href="/guides/magnatrack-screens-cost"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="text-edg-brand h-4 w-4" />
                    MagnaTrack screens cost guide
                  </Link>
                  <Link
                    href="/service-areas/algonquin-il/motorized-pergolas"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="text-edg-brand h-4 w-4" />
                    Algonquin motorized pergolas
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
