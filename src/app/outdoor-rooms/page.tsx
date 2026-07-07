import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CloudRain,
  Home,
  Layers,
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
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import * as images from '@/lib/images';

const outdoorRoomCta =
  '/contact?type=price&product=multiple&source=outdoor_room_glass';

export const metadata: Metadata = {
  title: 'Outdoor Room Plans | Pergolas, Glass & Screens | EDG',
  description:
    'Explore complete outdoor room plans that combine pergolas, glass walls, screens, heat, lighting, and outdoor kitchens around how you want the space to feel.',
  alternates: {
    canonical: '/outdoor-rooms',
  },
  openGraph: {
    title: 'Outdoor Room Plans | EDG Patio & Shade',
    description:
      'Outcome-led outdoor room ideas for protected patios, poolside lounges, restaurant patios, and complete outdoor living plans.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const roomConcepts = [
  {
    title: 'Pergola + Glass Outdoor Room',
    description:
      'A louvered roof with frameless glass walls for a protected patio that can close down for wind and rain comfort, then open back up.',
    href: '/outdoor-rooms/pergola-glass-outdoor-room',
    image: images.projects.wade.hero,
    icon: Home,
    label: 'Pilot plan',
  },
  {
    title: 'Pergola + Screens + Outdoor Kitchen',
    description:
      'A cooking and dining space planned around shade, insect control, ventilation, lighting, and a clean appliance layout.',
    href: '/systems/appliances',
    image: images.systems.appliances.kitchen,
    icon: Sun,
    label: 'Entertaining',
  },
  {
    title: 'Florida Lanai Modernization',
    description:
      'A modernized screened or protected lanai approach for homeowners who want better airflow, views, shade, and everyday comfort.',
    href: '/service-areas/sanibel-outdoor-living/modern-lanai',
    image: images.pages.serviceAreas.sanibelShade,
    icon: Wind,
    label: 'Lanai update',
  },
  {
    title: 'Restaurant Patio Protection',
    description:
      'A hospitality patio plan that blends roof coverage, glass, screens, heat, lighting, and clear circulation for more usable seating days.',
    href: '/commercial/restaurant-patio-enclosures',
    image: images.systems.enclosures.commercialNightExterior,
    icon: Building2,
    label: 'Commercial',
  },
];

const planningSteps = [
  {
    title: 'Start with the way the space should feel',
    description:
      'Dining, lounging, poolside hosting, lakefront wind, privacy, insects, and glare all point to different combinations.',
  },
  {
    title: 'Choose the roof and wall strategy together',
    description:
      'Pergolas, glass, and screens work best when structure, drainage, power, and clear openings are planned as one project.',
  },
  {
    title: 'Match comfort options to the site',
    description:
      'Lighting, heat, shades, fans, and outdoor kitchens are added where the structure, airflow, and use pattern support them.',
  },
];

const systemLinks = [
  {
    title: 'Louvered pergolas',
    href: '/systems/pergolas',
    description: 'Adjustable roof coverage, drainage, lighting, and structure.',
  },
  {
    title: 'Glass enclosures',
    href: '/systems/enclosures',
    description:
      'Frameless sliding or retractable walls for wind and rain comfort.',
  },
  {
    title: 'Motorized screens',
    href: '/systems/shades',
    description: 'Insect, sun, privacy, and everyday wind comfort by opening.',
  },
  {
    title: 'Planning guide',
    href: '/guides/motorized-pergola-planning',
    description:
      'Budget, fit, permits, drainage, controls, and system selection.',
  },
];

const faqs = [
  {
    question: 'What is an outdoor room plan?',
    answer:
      'An outdoor room plan shows how multiple EDG systems can work together around one finished space. It may combine a louvered pergola, frameless glass, motorized screens, heat, lighting, fans, or an outdoor kitchen depending on the site and goals.',
  },
  {
    question: 'Is this different from a pergola or glass enclosure page?',
    answer:
      'Yes. The system pages explain the individual components. Outdoor room pages show the finished living space those components can create when they are planned together.',
  },
  {
    question: 'Can every patio become a protected outdoor room?',
    answer:
      'Not every site is a fit for the same approach. EDG reviews structure, drainage, exposure, power, openings, and local requirements before recommending a roof, glass, screen, or comfort plan.',
  },
  {
    question: 'Are these rooms interior additions?',
    answer:
      'Usually no. Most EDG outdoor rooms are season-extending spaces that improve comfort for more usable days while preserving the feel of an outdoor patio that can open back up.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Outdoor Room Planning and Design',
  description:
    'Planning and design for outdoor living spaces that combine pergolas, glass walls, motorized screens, lighting, heat, and outdoor kitchens.',
  url: 'https://www.edgpatioshade.com/outdoor-rooms',
  image: `https://www.edgpatioshade.com${images.projects.wade.hero}`,
});

const faqSchema = generateFAQSchema(faqs);

export default function OutdoorRoomsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
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
              items={[{ label: 'Outdoor Rooms' }]}
              className="text-zinc-400"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="text-edg-brand mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <Layers className="h-4 w-4" />
                Complete outdoor living plans
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                See the finished outdoor room before choosing the components.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                EDG outdoor room plans show how pergolas, glass walls, screens,
                heat, lighting, and outdoor kitchens can work together around
                the way you want to use the space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/outdoor-rooms/pergola-glass-outdoor-room">
                  <Button size="lg">View Pilot Room</Button>
                </Link>
                <Link href={outdoorRoomCta}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    Plan My Space
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-zinc-900 md:min-h-[520px]">
              <Image
                src={images.projects.wade.hero}
                alt="Protected outdoor room with louvered pergola and glass walls"
                fill
                priority
                loading="eager"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="max-w-md text-sm font-medium text-white">
                  A finished room view helps make the roof, walls, controls,
                  lighting, and comfort decisions easier to understand.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-surface-muted border-border border-t">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Outdoor room ideas</div>
            <h2 className="section-title mb-4">
              Start with the outcome, then choose the systems.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              These plans keep the product pages clear while giving homeowners
              and commercial buyers a better picture of the finished space.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {roomConcepts.map((concept) => (
              <Link
                key={concept.title}
                href={concept.href}
                className="group block h-full"
              >
                <Card
                  variant="default"
                  padding="none"
                  className="hover:border-edg-brand/40 h-full overflow-hidden"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={concept.image}
                      alt={concept.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="bg-edg-brand text-edg-dark absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-wider uppercase">
                      {concept.label}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <IconWrapper
                        icon={concept.icon}
                        variant="brand"
                        size="sm"
                      />
                      <h3 className="text-2xl font-bold">{concept.title}</h3>
                    </div>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {concept.description}
                    </p>
                    <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                      Explore concept
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-border border-t bg-white dark:bg-black">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                Planning sequence
              </div>
              <h2 className="section-title mb-6">
                A better first conversation for multi-system spaces.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Homeowners rarely think in isolated components. They want a
                dining room that is less windy, a poolside lounge with shade, or
                a patio that stays usable when weather shifts.
              </p>
            </div>

            <div className="space-y-5">
              {planningSteps.map((step, index) => (
                <Card key={step.title} variant="muted" padding="lg">
                  <div className="flex gap-5">
                    <div className="bg-edg-dark text-edg-brand flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-edg-brand mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                <ShieldCheck className="h-4 w-4" />
                System details stay in place
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Outdoor room pages connect the vision to the right product
                detail.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                Use this page to compare the finished space. Use the system
                pages to understand the pergola, glass, screen, and appliance
                decisions that make it work.
              </p>
              <Link href={outdoorRoomCta}>
                <Button size="lg">Request an Outdoor Room Review</Button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {systemLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group block">
                  <Card
                    variant="dark"
                    padding="lg"
                    className="h-full border-white/10 bg-white/5"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <CheckCircle2 className="text-edg-brand h-5 w-5 shrink-0" />
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Common questions</div>
              <h2 className="section-title mb-4">
                Planning a protected patio or outdoor room
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

      <section className="bg-surface-muted border-border border-t py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-edg-brand-text mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
              <CloudRain className="h-4 w-4" />
              Site-specific review
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to plan the finished space?
            </h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Share photos, rough dimensions, and how you want to use the patio.
              EDG will help identify the right roof, glass, screen, and comfort
              path.
            </p>
            <Link href={outdoorRoomCta}>
              <Button size="lg">Start Outdoor Room Planning</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
