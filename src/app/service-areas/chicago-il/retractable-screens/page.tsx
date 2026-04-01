import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  Home,
  Lock,
  ShieldCheck,
  Smartphone,
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
  title: 'Retractable Screens in Chicago, IL | Motorized Patio Screens | EDG',
  description:
    'Motorized retractable screens for Chicago patios, pergolas, and outdoor rooms. Reduce wind, glare, bugs, and privacy issues on dense city lots.',
  alternates: {
    canonical: '/service-areas/chicago-il/retractable-screens',
  },
  openGraph: {
    title: 'Retractable Screens in Chicago, IL | EDG Patio & Shade',
    description:
      'Motorized exterior screens for Chicago patios, pergolas, and urban outdoor spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const benefits = [
  {
    icon: Wind,
    title: 'More comfort on windy patios',
    description:
      'Chicago breeze is great until it makes dinner uncomfortable. Retractable screens soften wind and reduce the turbulence that can make a city patio feel exposed, especially on corners, roof decks, and lots with long sightlines down the alley.',
  },
  {
    icon: Eye,
    title: 'Better privacy without closing the space off',
    description:
      'Close neighbors are part of city life. Screen fabrics can preserve daylight and outward visibility while reducing the feeling that every evening outside is happening on display.',
  },
  {
    icon: Lock,
    title: 'Bug and glare control in one move',
    description:
      'Motorized screens help with insects, late afternoon sun, and general visual comfort, which is why they are such a strong add-on for Chicago pergolas and covered patios.',
  },
  {
    icon: Smartphone,
    title: 'Fast enough to use every day',
    description:
      'The best screen system is the one you actually deploy. Remote control, automation, and integrated controls make it easy to adapt the space as wind, sun, and privacy needs change during the day.',
  },
];

const faqs = [
  {
    question: 'Are retractable screens worth it in Chicago?',
    answer:
      'For many homeowners, yes. Chicago outdoor spaces are often limited in size, so one improvement has to solve multiple problems to justify the investment. Screens can reduce glare, tame wind, improve privacy, and help with bugs at the same time, which is why they often become the most-used comfort upgrade on the project.',
  },
  {
    question: 'Can motorized screens be added to an existing pergola or patio cover?',
    answer:
      'Often they can, provided the structure has the right dimensions and support strategy. We evaluate the opening sizes, the attachment surfaces, and how exposed the area is before recommending a layout. In many cases, screens are an excellent retrofit that makes an existing patio feel significantly more finished.',
  },
  {
    question: 'Do screens make a city patio too dark?',
    answer:
      'Not when the right fabric is selected. We help clients balance openness, privacy, and solar control based on the orientation of the patio and how close neighboring homes are. The goal is to make the space calmer and more comfortable without making the interior rooms feel closed in.',
  },
  {
    question: 'Should I start with screens or a pergola?',
    answer:
      'That depends on what problem is most urgent. If you already have cover and you mainly need privacy, bug control, or better comfort in wind and low sun, screens may be the smarter first move. If you still need overhead shade and rain management, the pergola usually sets the structure and the screens complete it.',
  },
];

const gallery = [
  {
    src: images.pages.serviceAreas.chicagoScreenExterior,
    alt: 'Chicago retractable screen installation spanning multiple commercial bays',
  },
  {
    src: images.pages.serviceAreas.chicagoScreenCorner,
    alt: 'Chicago corner patio enclosure with retractable screen panels',
  },
  {
    src: images.pages.serviceAreas.chicagoScreenRestaurant,
    alt: 'Chicago restaurant exterior with retractable screen enclosure system',
  },
];

export default function ChicagoScreensPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Retractable Screens in Chicago, IL',
    description:
      'Motorized retractable screens for Chicago patios, pergolas, roof decks, and outdoor living spaces.',
    brand: {
      '@type': 'Brand',
      name: 'EDG Patio & Shade',
    },
    image: gallery.map((item) => `https://www.edgpatioshade.com${item.src}`),
    category: 'Motorized Exterior Screens',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://www.edgpatioshade.com/service-areas/chicago-il/retractable-screens',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <main className="min-h-screen bg-surface">
        <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.pages.serviceAreas.chicagoScreenExterior}
              alt="Motorized retractable screens installed on a Chicago commercial patio"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <Container className="relative z-10">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Chicago, IL', href: '/service-areas/chicago-il' },
                { label: 'Retractable Screens' },
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
                Retractable Screens in Chicago
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Motorized screens for city patios, pergolas, and outdoor rooms that
                need better comfort, privacy, and glare control without losing the view.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?type=price&product=shades&source=chicago_screens">
                  <Button size="lg">Get a Screen Layout Review</Button>
                </Link>
                <Link href="/systems/shades">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    View Full Screen System Page
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
                <div className="label-editorial-brand mb-4">Why Screens Matter in the City</div>
                <h2 className="section-title mb-6">Often the fastest way to make a Chicago patio more usable</h2>
                <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                  City outdoor spaces do not always need a full structural overhaul to
                  become better. Sometimes the biggest problem is late-day glare,
                  inconsistent wind, close neighboring sightlines, or the fact that a
                  patio feels exposed the moment insects show up. Retractable screens
                  solve those friction points quickly, which is why they are one of
                  the smartest upgrades for homeowners who already have a cover or are
                  trying to get more value from an existing pergola.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary">
                  They are also flexible in a way fixed partitions are not. When the
                  weather is perfect, the screens disappear. When the sun drops low or
                  the wind starts pushing through the yard, they come down and calm
                  the space. That adaptability is especially useful in Chicago, where
                  outdoor conditions can change quickly across a single afternoon.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.pages.serviceAreas.chicagoScreenCorner}
                  alt="Chicago retractable screen system wrapping a corner outdoor dining space"
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
              <h2 className="section-title mb-4">What screens solve on Chicago lots</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} variant="default" padding="lg">
                  <div className="mb-4 flex items-center gap-3">
                    <benefit.icon className="h-5 w-5 text-edg-brand-text" />
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                  </div>
                  <p className="leading-relaxed text-text-secondary">
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
              <div className="label-editorial-brand mb-4">Where They Fit Best</div>
              <h2 className="section-title mb-4">Great for pergolas, patios, and roof decks</h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-4 leading-relaxed text-text-secondary">
                  In Lakeview and Lincoln Park, screens are often the difference
                  between a patio that looks good and one that actually gets used at
                  dinner time. In North Center and Roscoe Village, they are a strong
                  answer for family patios that need bug control and more comfortable
                  late-day sun conditions. Around Bucktown and Wicker Park, they help
                  roof decks and masonry courtyards feel more protected without adding
                  a heavy visual barrier.
                </p>
                <p className="leading-relaxed text-text-secondary">
                  The most successful projects start by identifying what you need the
                  screens to do first. If the answer is privacy, fabric selection and
                  sightline planning matter most. If the answer is wind, opening size
                  and track strategy become more important. If the answer is overall
                  comfort, the screens usually work best when planned alongside the
                  pergola, lighting, and heater package.
                </p>
              </div>
              <div>
                <div className="grid gap-4">
                  {[
                    'Retrofit an existing covered patio',
                    'Complete a new pergola installation',
                    'Add comfort to a garage roof deck',
                    'Improve privacy on close city lots',
                  ].map((item) => (
                    <Card key={item} variant="muted" padding="lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand-text" />
                        <p className="font-medium text-text-primary">{item}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">A strong first step for comfort</h3>
                <p className="mb-4 leading-relaxed text-text-secondary">
                  Homeowners often assume they need a larger renovation before the
                  patio can feel better, but screens are frequently the quickest
                  quality-of-life upgrade on the site. They help a space feel calmer
                  and more enclosed without locking you into a permanent wall or dark
                  room effect.
                </p>
                <p className="leading-relaxed text-text-secondary">
                  That makes them especially attractive for projects in progress,
                  where the patio already exists and the goal is to improve comfort
                  this season rather than wait for a much bigger build.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">Also the ideal pergola companion</h3>
                <p className="mb-4 leading-relaxed text-text-secondary">
                  When a pergola is part of the project, retractable screens often
                  become the feature that makes the space feel complete. The roof
                  handles sun and rain overhead, while the screens deal with low-angle
                  glare, privacy, insects, and crosswinds around the perimeter.
                </p>
                <p className="leading-relaxed text-text-secondary">
                  If you are already leaning toward a pergola, compare this page with
                  our Chicago pergola page so we can decide whether both systems
                  belong in the first phase.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Visual Direction</div>
              <h2 className="section-title mb-4">Examples of screen-ready spaces</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.alt} className="relative aspect-[4/3] overflow-hidden">
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
                <h2 className="section-title">Chicago screen questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} variant="default" padding="lg">
                    <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                    <p className="leading-relaxed text-text-secondary">{faq.answer}</p>
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
                  Ready to calm down your Chicago patio?
                </h2>
                <p className="mb-8 max-w-xl text-xl text-text-inverse-muted">
                  Share a few photos and tell us whether the main issue is wind,
                  privacy, bugs, or sun. We can help you decide if screens alone are
                  enough or if the space should be planned with a pergola at the same time.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact?type=price&product=shades&source=chicago_city_page">
                    <Button size="lg">Start Your Quote</Button>
                  </Link>
                  <Link href="/service-areas/chicago-il/motorized-pergolas">
                    <Button variant="outline" size="lg">
                      Compare Chicago Pergolas
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden border-l border-border-inverse pl-16 md:block">
                <div className="space-y-4 text-text-inverse-muted">
                  <h4 className="text-lg font-bold uppercase tracking-wide">
                    Keep exploring
                  </h4>
                  <Link href="/service-areas/chicago-il" className="flex items-center gap-3">
                    <Home className="h-4 w-4 text-edg-brand" />
                    Back to Chicago service area hub
                  </Link>
                  <Link href="/systems/shades" className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-edg-brand" />
                    Full screen specs and fabric options
                  </Link>
                  <Link href="/service-areas/chicago-il/motorized-pergolas" className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-edg-brand" />
                    Chicago motorized pergolas
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
