import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Eye,
  Home,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Glass Patio Enclosures in Chicago, IL | EDG Patio & Shade',
  description:
    'Frameless glass patio enclosures for Chicago terraces, pergolas, and outdoor rooms. Add wind and rain protection without losing the view.',
  alternates: {
    canonical: '/service-areas/chicago-il/glass-enclosures',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Glass Patio Enclosures in Chicago, IL | EDG Patio & Shade',
    description:
      'Retractable glass wall systems for Chicago patios, terraces, and outdoor rooms.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'glass patio enclosures chicago',
    'chicago glass patio enclosure',
    'retractable glass walls chicago',
    'patio enclosure chicago',
    'outdoor glass enclosure chicago',
  ],
};

const benefits = [
  {
    icon: Wind,
    title: 'Wind protection without a boxed-in feel',
    description:
      'Glass panels calm exposed patios and terraces while preserving the open view that made the outdoor space valuable in the first place.',
  },
  {
    icon: Droplets,
    title: 'Rain control for longer seasonal use',
    description:
      'A glass enclosure helps protect furniture, dining areas, and outdoor rooms from sudden Chicago rain without requiring a traditional sunroom addition.',
  },
  {
    icon: Eye,
    title: 'Clear views from inside and outside',
    description:
      'Frameless glass keeps sightlines cleaner than framed windows or heavy walls, which matters on city lots and hospitality patios.',
  },
  {
    icon: Building2,
    title: 'Works with pergolas and existing covers',
    description:
      'Glass can complete a louvered pergola, covered terrace, or outdoor dining structure when the goal is more season and better weather control.',
  },
];

const faqs = [
  {
    question: 'Are glass patio enclosures different from sunrooms?',
    answer:
      'Yes. A sunroom is usually a more permanent room addition. Frameless glass enclosures use sliding or slide-and-turn panels that can open the space when weather is good and close it when wind or rain moves in.',
  },
  {
    question: 'Can glass enclosures work on Chicago roof decks?',
    answer:
      'Sometimes, but roof deck projects need careful review. We look at structure, attachment, wind exposure, drainage, access, and whether the enclosure should be paired with a pergola or existing cover.',
  },
  {
    question: 'Do glass enclosures help restaurants and hospitality patios?',
    answer:
      'Yes. They are a strong fit when a patio needs to stay usable through wind, shoulder-season weather, and changing guest comfort needs without sacrificing visibility from the street.',
  },
  {
    question: 'How do I know if glass or screens are better?',
    answer:
      'Use screens when bugs, privacy, and solar comfort are the main problems. Use glass when wind, rain, and shoulder-season enclosure are the bigger issue. Many projects use both in different parts of the outdoor room.',
  },
];

const gallery = [
  {
    src: images.systems.enclosures.framelessGlass,
    alt: 'Frameless glass patio enclosure with sliding wall panels',
  },
  {
    src: images.systems.enclosures.commercialNightExterior,
    alt: 'Commercial glass patio enclosure at night for restaurant use',
  },
  {
    src: images.systems.enclosures.commercialPergolaDay,
    alt: 'Pergola with glass enclosure panels for outdoor dining',
  },
];

export default function ChicagoGlassEnclosuresPage() {
  const heroContactHref = buildContactHref({
    type: 'price',
    product: 'enclosures',
    location: 'Chicago, IL',
    source: 'chicago_glass_enclosures_hero',
  });
  const bottomContactHref = buildContactHref({
    type: 'fit-review',
    product: 'enclosures',
    location: 'Chicago, IL',
    source: 'chicago_glass_enclosures_bottom',
  });

  const serviceSchema = generateServiceSchema({
    name: 'Glass Patio Enclosures in Chicago, IL',
    description:
      'Frameless retractable glass patio enclosures for Chicago terraces, pergolas, and outdoor rooms.',
    url: 'https://www.edgpatioshade.com/service-areas/chicago-il/glass-enclosures',
    image: `https://www.edgpatioshade.com${images.systems.enclosures.framelessGlass}`,
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

      <div className="bg-surface min-h-screen">
        <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.systems.enclosures.commercialNightExterior}
              alt="Glass patio enclosure for Chicago outdoor dining at night"
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
                { label: 'Chicago, IL', href: '/service-areas/chicago-il' },
                { label: 'Glass Enclosures' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/chicago-il"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Chicago service area
            </Link>
            <div className="max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Glass Patio Enclosures in Chicago
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Frameless glass wall systems for Chicago terraces, pergolas, and
                outdoor rooms that need wind and rain protection without losing
                views.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={heroContactHref}>
                  <Button size="lg">Request a Quote</Button>
                </Link>
                <Link href="/systems/enclosures">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Glass System Details
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
                  Why Glass Works in Chicago
                </div>
                <h2 className="section-title mb-6">
                  More protection than screens, lighter than a full room
                  addition.
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Chicago patios and terraces often fail because of wind before
                  they fail because of temperature. A beautiful outdoor dining
                  area can become uncomfortable fast when gusts move through the
                  space or rain starts pushing sideways. Frameless glass
                  enclosures create a calmer perimeter while keeping the space
                  visually connected to the yard, street, skyline, or garden.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  They are especially useful when a project already has overhead
                  structure. A louvered pergola, roof deck cover, or hospitality
                  patio can handle shade and rain overhead, while glass panels
                  protect the sides. When the weather is right, the panels can
                  open so the space still feels like an outdoor room instead of
                  a fixed interior room.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.systems.enclosures.framelessGlass}
                  alt="Frameless glass wall enclosure with clear outdoor views"
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
              <div className="label-editorial-brand mb-4">Local Benefits</div>
              <h2 className="section-title mb-4">
                What glass enclosures solve in the city
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
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Where glass fits</h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Glass patio enclosures are strongest on projects where the
                  view is part of the value. They fit restaurant patios, roof
                  terraces, garden rooms, covered outdoor kitchens, and pergola
                  projects where the client wants to keep the space visually
                  open while reducing wind and rain exposure.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  In Chicago, they also help with shoulder-season use. Spring
                  and fall weather can be good enough to sit outside, but not if
                  wind is cutting across the patio. Glass gives the space a
                  calmer edge without forcing the heavy look of a traditional
                  enclosed addition.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-3xl font-bold">
                  Planning details that matter
                </h2>
                <div className="grid gap-4">
                  {[
                    'Structure and attachment points',
                    'Panel stacking location when the space is open',
                    'Track style, drainage, and threshold conditions',
                    'Wind exposure on roof decks and corner lots',
                    'How glass, screens, pergola, lighting, and heat work together',
                  ].map((item) => (
                    <Card key={item} variant="muted" padding="lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                        <p className="text-text-primary font-medium">{item}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Visual Direction</div>
              <h2 className="section-title mb-4">
                Glass systems for protected outdoor rooms
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
                <h2 className="section-title">
                  Chicago glass enclosure questions
                </h2>
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
                  Ready to plan a Chicago glass enclosure?
                </h2>
                <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                  Send photos of the patio, terrace, or pergola and tell us
                  whether wind, rain, season length, or visibility is the main
                  issue.
                </p>
                <Link href={bottomContactHref}>
                  <Button size="lg">Request a Quote</Button>
                </Link>
              </div>
              <div className="border-border-inverse hidden border-l pl-16 md:block">
                <div className="text-text-inverse-muted space-y-4">
                  <h4 className="text-lg font-bold tracking-wide uppercase">
                    Keep exploring
                  </h4>
                  <Link
                    href="/service-areas/chicago-il"
                    className="flex items-center gap-3"
                  >
                    <Home className="text-edg-brand h-4 w-4" />
                    Back to Chicago service area
                  </Link>
                  <Link
                    href="/systems/enclosures"
                    className="flex items-center gap-3"
                  >
                    <ShieldCheck className="text-edg-brand h-4 w-4" />
                    Full glass enclosure specs
                  </Link>
                  <Link
                    href="/service-areas/chicago-il/retractable-screens"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="text-edg-brand h-4 w-4" />
                    Compare Chicago screens
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
