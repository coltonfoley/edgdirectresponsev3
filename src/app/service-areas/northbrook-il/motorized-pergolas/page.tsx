import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
  Palette,
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
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Louvered Pergolas in Northbrook, IL | EDG',
  description:
    'Motorized louvered pergolas for Northbrook homes. Local planning for Techny, Shermer Road, Northbrook Heights, HOA review, winter weather, screens, lighting, and outdoor rooms.',
  alternates: {
    canonical: '/service-areas/northbrook-il/motorized-pergolas',
  },
};

const fitReviewHref =
  '/guides/pergola-system-fit-review?area=northbrook&source=northbrook_product';
const bottomFitReviewHref =
  '/guides/pergola-system-fit-review?area=northbrook&source=northbrook_bottom';

const benefits = [
  {
    icon: Wind,
    title: 'Planned around exposure',
    description:
      'Open yards, corner lots, and elevated patios need a system selected around wind, drainage, mounting conditions, and seasonal operation instead of a catalog size alone.',
  },
  {
    icon: ShieldCheck,
    title: 'Review-ready documentation',
    description:
      'Northbrook projects are easier to review when finish information, drawings, product specifications, and site context are organized before the homeowner submits.',
  },
  {
    icon: Palette,
    title: 'Architectural finish control',
    description:
      'Brick, stone, traditional trim, and newer modern exteriors can all point to different frame and louver finishes. The system should feel intentional next to the home.',
  },
  {
    icon: Smartphone,
    title: 'Simple daily control',
    description:
      'Remote, app, sensor, lighting, and heater planning should be sorted before installation so the pergola is useful in normal weekday life, not only special occasions.',
  },
];

const planningNotes = [
  'Louvered roof control for sun, rain, and ventilation',
  'Drainage, electrical routing, and controls reviewed before final specification',
  'Screens, lighting, and heaters planned as part of one outdoor room when needed',
  'Finish direction selected around the home, hardscape, and neighborhood context',
];

const faqs = [
  {
    question: 'Will this work with my homeowners association?',
    answer:
      'Often, yes. Northbrook HOA and architectural review requests are easier when the homeowner can submit drawings, finish information, product specifications, and a clear site plan. EDG helps assemble that documentation so the pergola is reviewed as a planned architectural addition.',
  },
  {
    question: "Can you match my home's existing trim color?",
    answer:
      'Yes. Finish selection is part of the design process, especially for Northbrook homes with brick, stone, traditional trim, or newer modern exterior palettes. We can review trim, window, roof, and hardscape colors before recommending a powder-coated finish.',
  },
  {
    question: 'What happens during a power outage?',
    answer:
      'Motorized systems can be specified with manual override or backup options depending on the selected product and controls package. We review control expectations during design so the homeowner understands how the pergola behaves during storms, power interruptions, and seasonal shutdowns.',
  },
  {
    question: 'Can a Northbrook pergola become a fuller outdoor room?',
    answer:
      'Yes. Many projects start with a louvered roof and later add screens, lighting, heaters, or side-wall planning. It is better to discuss those possibilities early so the frame, electrical, controls, and drainage plan do not create avoidable retrofit work.',
  },
];

const gallery = [
  {
    src: images.featuredProjects.karp.hero,
    alt: 'Northbrook louvered pergola project beside a pool and outdoor entertaining area',
  },
  {
    src: images.featuredProjects.karp.gallery[0],
    alt: 'Wood-grain louver detail on a Northbrook motorized pergola project',
  },
  {
    src: images.featuredProjects.karp.gallery[1],
    alt: 'Northbrook poolside pergola structure with privacy wall planning',
  },
];

export default function NorthbrookPergolaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motorized Louvered Pergolas in Northbrook, IL',
    description:
      'Motorized louvered pergola design and installation for Northbrook homes and outdoor living spaces.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Northbrook',
      addressRegion: 'IL',
    },
    url: 'https://www.edgpatioshade.com/service-areas/northbrook-il/motorized-pergolas',
    image: `https://www.edgpatioshade.com${images.featuredProjects.karp.hero}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <div className="bg-surface min-h-screen">
        <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.featuredProjects.karp.hero}
              alt="Northbrook louvered pergola project with poolside outdoor living space"
              fill
              priority
              loading="eager"
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <Container className="relative z-10">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                {
                  label: 'Northbrook, IL',
                  href: '/service-areas/northbrook-il',
                },
                { label: 'Motorized Pergolas' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/northbrook-il"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Northbrook service area
            </Link>
            <div className="max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Pergolas for Northbrook Homes
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Louvered roof systems planned around Northbrook architecture,
                winter weather, HOA review, privacy, lighting, and everyday
                outdoor room comfort.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={fitReviewHref}>
                  <Button size="lg">Request a Quote</Button>
                </Link>
                <Link href="/systems/pergolas/configure">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Design in 3D
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Pergola Systems
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
                  Why This Product Fits Northbrook
                </div>
                <h2 className="section-title mb-6">
                  Site-specific planning matters more than a catalog pergola
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Northbrook homeowners are usually balancing comfort,
                  architecture, neighborhood review, and weather exposure. A
                  light decorative pergola may create shade, but it rarely
                  solves wind, drainage, privacy, winter exposure, lighting, and
                  finish integration in one plan.
                </p>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  A motorized louvered system gives the patio more range. Open
                  the roof for sun and airflow, close it when rain moves in, and
                  pair it with screens or lighting when the space needs to
                  perform more like an outdoor room.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  The goal is not to make the backyard look more expensive. The
                  goal is to make the space easier to use, easier to review, and
                  better matched to the home.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.featuredProjects.karp.gallery[1]}
                  alt="Northbrook poolside pergola structure with surrounding landscape"
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
                Local Planning Priorities
              </div>
              <h2 className="section-title mb-4">
                What a pergola needs to solve in Northbrook
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
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">
                Features and Planning Notes
              </div>
              <h2 className="section-title mb-4">
                Selected around the home, not just the opening size
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {planningNotes.map((item) => (
                <Card key={item} variant="muted" padding="lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-text-primary font-medium">{item}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Ruler className="text-edg-brand-text h-5 w-5" />
                  Neighborhood context
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Homes near Techny, Shermer Road, Northbrook Heights, and the
                  village center can have very different architecture and review
                  needs. Some projects need a structure that disappears into
                  traditional trim lines. Others need a cleaner modern profile
                  beside updated hardscape and pool work.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  That is why the first conversation should include photos,
                  rough dimensions, how exposed the site feels, and whether the
                  pergola is meant to stand alone or become the roof of a fuller
                  outdoor room.
                </p>
              </div>
              <div>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                  <Sun className="text-edg-brand-text h-5 w-5" />
                  How this connects to the rest of the space
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  A louvered roof can solve sun and rain, but many Northbrook
                  projects also need privacy, evening use, and seasonal comfort.
                  Screens, heaters, lighting, and controls should be considered
                  early so the system feels like one plan.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  If the side-wall problem is bigger than the roof problem, EDG
                  can also compare screens and enclosure strategies before the
                  pergola spec is locked in.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Project Proof</div>
              <h2 className="section-title mb-4">
                Northbrook project imagery, not a generic catalog scene
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
            <div className="mt-8 text-center">
              <Link href="/projects/karp">
                <Button variant="secondary">
                  View the Northbrook Karp Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        <Section className="section-lg">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">Northbrook pergola questions</h2>
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
                  Ready to plan a Northbrook pergola?
                </h2>
                <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                  Send a few photos, rough dimensions, and any HOA or review
                  concerns. EDG will help narrow the recommendation before you
                  chase the wrong quote.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href={bottomFitReviewHref}>
                    <Button size="lg">Request a Quote</Button>
                  </Link>
                  <Link href="/systems/pergolas">
                    <Button variant="outline" size="lg">
                      Compare Pergola Systems
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="border-border-inverse hidden border-l pl-16 md:block">
                <div className="text-text-inverse-muted space-y-4">
                  <h4 className="text-lg font-bold tracking-wide uppercase">
                    Keep exploring
                  </h4>
                  <Link
                    href="/service-areas/northbrook-il"
                    className="flex items-center gap-3"
                  >
                    <Home className="text-edg-brand h-4 w-4" />
                    Back to Northbrook service area hub
                  </Link>
                  <Link
                    href="/systems/pergolas"
                    className="flex items-center gap-3"
                  >
                    <ShieldCheck className="text-edg-brand h-4 w-4" />
                    Full pergola specs and accessories
                  </Link>
                  <Link
                    href="/service-areas/northbrook-il#zoning"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="text-edg-brand h-4 w-4" />
                    Northbrook planning notes
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
