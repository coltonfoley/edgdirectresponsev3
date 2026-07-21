import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Eye,
  Flame,
  Home,
  Layers,
  Ruler,
  ShieldCheck,
  Sun,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import * as images from '@/lib/images';

const outdoorRoomCta = buildContactHref({
  type: 'price',
  product: 'multiple',
  source: 'outdoor_room_glass',
});

export const metadata: Metadata = {
  title: 'Pergola + Glass Outdoor Room | EDG Patio & Shade',
  description:
    'Plan a protected patio with a louvered pergola, frameless glass walls, and site-specific comfort options for more usable outdoor days.',
  alternates: {
    canonical: '/outdoor-rooms/pergola-glass-outdoor-room',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Pergola + Glass Outdoor Room | EDG Patio & Shade',
    description:
      'A finished outdoor room concept combining a louvered pergola, frameless glass, and optional screens, heat, and lighting.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const roomIngredients = [
  {
    title: 'Motorized louvered pergola',
    description:
      'An adjustable roof creates sun, shade, and rain comfort while setting the structure for lighting, drainage, and side systems.',
    href: '/systems/pergolas',
    icon: Sun,
  },
  {
    title: 'Frameless glass walls',
    description:
      'Sliding or retractable glass helps calm wind and rain while keeping views open and preserving the outdoor feel.',
    href: '/systems/enclosures',
    icon: Eye,
  },
  {
    title: 'Screens where they fit',
    description:
      'Motorized screens can add insect control, privacy, sun control, or a softer wind strategy on selected openings.',
    href: '/systems/shades',
    icon: Wind,
  },
  {
    title: 'Heat, lighting, and controls',
    description:
      'Comfort add-ons are planned around structure, airflow, electrical routing, and how the room will be used.',
    href: '/systems/appliances',
    icon: Flame,
  },
];

const fitChecks = [
  'Roof, beam, deck, slab, and footing conditions',
  'Drainage path from the louvered roof and surrounding patio',
  'Opening sizes, panel stack locations, doors, and furniture clearances',
  'Wind exposure, privacy needs, glare, insects, and neighborhood context',
  'Power routing for motors, lights, heat, sensors, and controls',
  'Permit, HOA, and engineering requirements for the finished layout',
];

const proofPoints = [
  {
    title: 'Open when the day is comfortable',
    description:
      'Stack the glass, open the louvers, and keep the patio connected to the pool, yard, or view.',
    icon: Sun,
  },
  {
    title: 'Close down for comfort',
    description:
      'Use glass and the roof to reduce wind, rain, glare, and shoulder-season chill without giving up clear sightlines.',
    icon: CloudRain,
  },
  {
    title: 'Plan the details together',
    description:
      'Drainage, power, heat, lighting, screens, doors, and furniture all work better when they are decided before ordering.',
    icon: Layers,
  },
];

const relatedResources = [
  {
    title: 'Motorized pergola planning guide',
    href: '/guides/motorized-pergola-planning',
    description:
      'Review cost, structure, drainage, permits, controls, and fit.',
  },
  {
    title: 'Request a pergola quote',
    href: '/guides/pergola-system-fit-review',
    description:
      'Request a quote and optionally share project photos or plans.',
  },
  {
    title: 'Wade outdoor room project',
    href: '/projects/wade',
    description: 'See a real outdoor room with louvers, lighting, and glass.',
  },
];

const faqs = [
  {
    question: 'Is a pergola plus glass outdoor room the same as an addition?',
    answer:
      'No. This is usually a protected outdoor living space, not a sealed interior addition. The goal is to make the patio more comfortable for more usable days while keeping it openable.',
  },
  {
    question: 'Can glass walls be added to any louvered pergola?',
    answer:
      'Not always. The structure, opening size, drainage, panel stack area, wind exposure, and attachment points need to be reviewed before recommending glass.',
  },
  {
    question: 'When should screens be used instead of glass?',
    answer:
      'Screens are often better for insect control, sun control, privacy, and everyday ventilation. Glass is stronger when the goal is clearer views with more wind and rain comfort. Some rooms use both in different openings.',
  },
  {
    question: 'Can heaters and lighting be included?',
    answer:
      'Yes, when the site supports it. EDG plans heat, lighting, power, controls, and mounting details with the roof and wall systems so the finished room feels intentional.',
  },
  {
    question: 'How does EDG price this kind of outdoor room?',
    answer:
      'Pricing depends on size, roof system, glass type, opening layout, site work, electrical, comfort options, permits, and installation access. EDG reviews the site before quoting the complete installed plan.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Pergola and Glass Outdoor Room Planning',
  description:
    'Planning and installation support for outdoor rooms that combine louvered pergolas, frameless glass walls, screens, lighting, heat, and controls.',
  url: 'https://www.edgpatioshade.com/outdoor-rooms/pergola-glass-outdoor-room',
  image: `https://www.edgpatioshade.com${images.projects.wade.hero}`,
});

const faqSchema = generateFAQSchema(faqs);

export default function PergolaGlassOutdoorRoomPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-16 text-white md:pt-40 md:pb-24">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Outdoor Rooms', href: '/outdoor-rooms' },
                { label: 'Pergola + Glass Outdoor Room' },
              ]}
              className="text-zinc-400"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="text-edg-brand mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <Home className="h-4 w-4" />
                Protected patio plan
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                A louvered pergola and glass walls planned as one outdoor room.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                This outdoor room concept combines an adjustable pergola roof
                with frameless glass walls, then adds screens, heat, lighting,
                and controls where the site supports them.
              </p>
              <div className="flex flex-wrap gap-4">
                <TrackedLink href={outdoorRoomCta}>
                  <Button size="lg">Request a Quote</Button>
                </TrackedLink>
                <Link href="/projects/wade">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    View Wade Project
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-zinc-900 md:min-h-[470px]">
                <Image
                  src={images.projects.wade.hero}
                  alt="Pergola and glass outdoor room with protected patio seating"
                  fill
                  priority
                  loading="eager"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-zinc-900">
                  <Image
                    src={images.projects.wade.gallery[4]}
                    alt="Outdoor room glass panels open for airflow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-zinc-900">
                  <Image
                    src={images.systems.enclosures.framelessGlass}
                    alt="Frameless glass wall panels for a protected patio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">What it creates</div>
            <h2 className="section-title mb-4">
              A protected outdoor room that can still open back up.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The value is not one product by itself. It is the way the roof,
              walls, comfort options, controls, and furniture plan work together
              around real outdoor living.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {proofPoints.map((point) => (
              <Card key={point.title} variant="default" padding="lg">
                <IconWrapper
                  icon={point.icon}
                  variant="brand"
                  size="lg"
                  className="mb-5"
                />
                <h3 className="mb-3 text-xl font-bold">{point.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-border border-t bg-white dark:bg-black">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">System recipe</div>
            <h2 className="section-title mb-4">
              Each component keeps its job.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The pergola, glass, screen, heat, and lighting decisions each
              serve a different purpose. EDG coordinates them as one finished
              room around the site and the way you want to use it.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {roomIngredients.map((item) => (
              <Link key={item.title} href={item.href} className="group block">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/40 h-full"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <IconWrapper icon={item.icon} variant="brand" size="md" />
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="text-edg-brand mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <Ruler className="h-4 w-4" />
                Fit comes first
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                The site decides the right glass, screen, and comfort plan.
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                A protected outdoor room needs more than matching materials. EDG
                checks structure, water, movement, airflow, power, and the way
                people will actually use the patio.
              </p>
            </div>

            <Card
              variant="dark"
              padding="lg"
              className="border-white/10 bg-white/5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {fitChecks.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden bg-zinc-200">
                <Image
                  src={images.projects.wade.gallery[5]}
                  alt="Exterior glass walls on a completed outdoor room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden bg-zinc-200">
                <Image
                  src={images.projects.wade.gallery[1]}
                  alt="Outdoor room bar and seating under a pergola roof"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative col-span-2 aspect-[16/8] overflow-hidden bg-zinc-200">
                <Image
                  src={images.systems.enclosures.partialOpen}
                  alt="Glass enclosure panels partially open"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <div className="label-editorial-brand mb-4">
                Real project proof
              </div>
              <h2 className="section-title mb-6">
                Wade shows why the finished-room view matters.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                The Wade outdoor room brings together a louvered roof, lighting,
                glass, drainage, and a poolside entertaining layout. It is a
                good example of how the systems become easier to understand when
                the buyer can see the final living space.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Your site may call for a different glass operation, screen
                strategy, heating plan, or roof layout. EDG uses the same
                finished-room thinking before recommending the components.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects/wade">
                  <Button variant="dark">View Project</Button>
                </Link>
                <TrackedLink href={outdoorRoomCta}>
                  <Button variant="secondary">Request a Quote</Button>
                </TrackedLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-border border-t bg-white dark:bg-black">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Related planning</div>
            <h2 className="section-title mb-4">
              Keep digging where the decision gets specific.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedResources.map((item) => (
              <Link key={item.href} href={item.href} className="group block">
                <Card
                  variant="muted"
                  padding="lg"
                  className="hover:border-edg-brand/40 h-full"
                >
                  <ShieldCheck className="text-edg-brand-text mb-5 h-7 w-7" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    Open page <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Common questions</div>
              <h2 className="section-title mb-4">
                Pergolas, glass, screens, and comfort options
              </h2>
            </div>

            <div className="space-y-5">
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

      <section className="bg-edg-dark py-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-edg-brand mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
              <ShieldCheck className="h-4 w-4" />
              Site-specific recommendation
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Find out if this outdoor room approach fits your patio.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-zinc-300">
              EDG will review photos, dimensions, exposure, and goals before
              recommending a pergola, glass, screen, and comfort direction.
            </p>
            <TrackedLink href={outdoorRoomCta}>
              <Button size="lg">Request a Quote</Button>
            </TrackedLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
