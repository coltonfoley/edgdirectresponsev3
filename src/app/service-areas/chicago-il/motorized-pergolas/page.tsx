import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
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
  title: 'Chicago Pergola Installer | Motorized Louvered Roofs | EDG',
  description:
    'Chicago pergola installer for custom motorized louvered roofs. Built for patios, roof decks, wind, rain, snow, and tight city lots.',
  alternates: {
    canonical: '/service-areas/chicago-il/motorized-pergolas',
  },
  openGraph: {
    title: 'Motorized Pergolas in Chicago, IL | EDG Patio & Shade',
    description:
      'Louvered pergolas for Chicago roof decks, patios, and backyard entertaining spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const benefits = [
  {
    icon: Wind,
    title: 'Made for exposed city sites',
    description:
      'Chicago roof decks and open backyards see stronger gusts than many suburban patios. The systems we specify are engineered around wind exposure, structural loads, and how the space sheds rain instead of relying on generic kit assumptions.',
  },
  {
    icon: Sun,
    title: 'Shade without darkening the home',
    description:
      'Adjustable louvers let you control direct sun while still keeping daylight moving into adjacent kitchens, family rooms, and rooftop lounges. That matters on narrow city lots where a fixed cover can make the house feel darker than expected.',
  },
  {
    icon: ShieldCheck,
    title: 'Better privacy on dense blocks',
    description:
      'Chicago homeowners often want relief from neighboring sightlines without turning the space into a cave. Pergolas pair well with screens, side panels, and lighting so the patio feels more finished and more private at the same time.',
  },
  {
    icon: Smartphone,
    title: 'Easy daily use',
    description:
      'A motorized pergola only works if you actually use it. Remote control, app control, sensors, and integrated lighting make it easy to adapt to changing weather instead of treating the structure like a decorative feature.',
  },
];

const faqs = [
  {
    question: 'Can a motorized pergola work on a Chicago roof deck?',
    answer:
      'Yes, but the project has to be designed around the structure beneath it. Roof deck projects require extra attention to attachment strategy, drainage, wind exposure, and access for installation. We evaluate those conditions before recommending span sizes and post locations so the system feels appropriate to the structure instead of forced onto it.',
  },
  {
    question: 'Do pergolas hold up to Chicago snow and rain?',
    answer:
      'That is one of the main reasons clients choose them. Louvered pergolas provide rain control when closed and can be equipped with sensors for added protection. The systems we specify are selected for Midwest conditions, including snow exposure and storm performance, with engineering that fits the realities of Chicago weather.',
  },
  {
    question: 'Are motorized pergolas a good fit for tight city lots?',
    answer:
      'Often they are a better fit than traditional covers because they can do more in a smaller footprint. On a city lot you may need shade, lighting, privacy, and drainage coordination without overwhelming the yard. A well-planned pergola package gives you those functions while still looking architectural and clean.',
  },
  {
    question: 'How much planning should happen before I ask for pricing?',
    answer:
      'Enough to understand the space, not every last finish choice. A rough layout, photos, and a sense of how you want to use the patio are enough to start a meaningful conversation. From there we can help determine the right system, likely scope, and whether screens or other accessories should be included from day one.',
  },
];

const gallery = [
  {
    src: images.projects.carmines.gallery[0],
    alt: 'Chicago pergola project with visible city context and outdoor dining',
  },
  {
    src: images.projects.carmines.gallery[3],
    alt: 'Louvered pergola installation with urban skyline backdrop',
  },
  {
    src: images.pages.serviceAreas.chicagoCourtyardPergola,
    alt: 'Real Chicago courtyard pergola installation in a dense urban setting',
  },
];

export default function ChicagoPergolasPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Motorized Pergolas in Chicago, IL',
    description:
      'Custom louvered pergolas for Chicago patios, roof decks, and backyard entertaining spaces.',
    brand: {
      '@type': 'Brand',
      name: 'EDG Patio & Shade',
    },
    image: gallery.map((item) => `https://www.edgpatioshade.com${item.src}`),
    category: 'Motorized Pergolas',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://www.edgpatioshade.com/service-areas/chicago-il/motorized-pergolas',
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <div className="bg-surface min-h-screen">
        <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.projects.carmines.hero}
              alt="Chicago pergola installation in an urban hospitality setting"
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
                { label: 'Motorized Pergolas' },
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
                Chicago Pergola Installer for Motorized Louvered Roofs
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Louvered roof pergola systems for city patios, roof decks, and
                backyard spaces that need shade, rain control, and a more
                finished outdoor room.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/guides/pergola-system-fit-review?area=chicago&source=chicago_pergolas">
                  <Button size="lg">Get a System Fit Review</Button>
                </Link>
                <Link href="/systems/pergolas/configure">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Design in 3D
                  </Button>
                </Link>
                <Link href="/systems/pergolas">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Full Pergola System Page
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
                  Why This Product Fits Chicago
                </div>
                <h2 className="section-title mb-6">
                  The right answer when you want real control, not just cover
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Chicago clients usually come to us when a basic patio umbrella
                  or fixed structure has already proven too limited. They want
                  shade on hot afternoons, protection when weather shifts
                  quickly, and a space that still looks architecturally clean
                  from inside the house and from the alley. Motorized pergolas
                  solve that problem because the roof adapts to the conditions
                  instead of forcing you to choose one compromise and live with
                  it all season.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  They also work exceptionally well in the city because they can
                  be tuned to the site. We can keep spans efficient on a compact
                  patio, protect a garage roof deck without overwhelming it, and
                  pair the pergola with screens or lighting when privacy and
                  nighttime use are part of the brief. If wind and rain are the
                  bigger issue, glass is often the better side-wall solution
                  than screens — see{' '}
                  <Link
                    href="/service-areas/chicago-il/glass-enclosures"
                    className="text-edg-brand-text font-medium hover:underline"
                  >
                    Chicago glass enclosures
                  </Link>
                  .
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  The goal is a structure that makes your Chicago home more
                  livable, not just more expensive.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.pages.serviceAreas.chicagoCourtyardPergola}
                  alt="Real Chicago courtyard pergola showing city-lot proportions and surrounding buildings"
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
                What a pergola solves on a Chicago project
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
                Selected to match the way city spaces behave
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                'Louvered roof control for sun, rain, and ventilation',
                'Integrated drainage routed through the structure',
                'Lighting, heaters, and screens available as part of one system',
                'Layouts designed around tight circulation and sightlines',
              ].map((item) => (
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
                <h3 className="mb-4 text-2xl font-bold">
                  Neighborhood examples
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  In Lincoln Park and Lakeview, pergolas often need to make a
                  modest patio feel more useful without crowding it. Around
                  Roscoe Village and North Center, families usually want
                  something that supports everyday dinners and late summer
                  entertaining while still letting light into the rear of the
                  home. In Bucktown and Wicker Park, the design conversation is
                  often about roof decks, modern additions, and keeping the
                  structure visually clean from multiple vantage points.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Those are different use cases, but the planning logic is the
                  same: make the system fit the block, the home, and the way you
                  expect to use the space. That is why we push hard on layout
                  and orientation before we get lost in options.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  How this connects to the rest of the project
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  A pergola is often the anchor, but it does not have to do
                  every job by itself. Chicago homeowners frequently pair
                  pergolas with retractable screens for privacy and comfort,
                  especially on blocks where neighboring windows overlook the
                  patio. If shoulder-season wind and rain protection are part
                  of the goal, glass enclosure strategies may also be part of
                  the conversation.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  That is one advantage of working with a team that looks at the
                  whole outdoor room instead of selling one product in
                  isolation. You get a cleaner plan, fewer retrofits, and a
                  space that feels complete sooner.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Visual Direction</div>
              <h2 className="section-title mb-4">
                Examples of the look and performance level
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
                <h2 className="section-title">Chicago pergola questions</h2>
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
                  Ready to price a Chicago pergola project?
                </h2>
                <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                  Send us a few photos, rough dimensions, and whether the
                  project is on grade or on a roof deck. We will help you narrow
                  the right structure before you get too far down the wrong
                  path.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/guides/pergola-system-fit-review?area=chicago&source=chicago_city_page">
                    <Button size="lg">Start a System Fit Review</Button>
                  </Link>
                  <Link href="/service-areas/chicago-il/retractable-screens">
                    <Button variant="outline" size="lg">
                      Compare Chicago Screens
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
                    href="/service-areas/chicago-il"
                    className="flex items-center gap-3"
                  >
                    <Home className="text-edg-brand h-4 w-4" />
                    Back to Chicago service area hub
                  </Link>
                  <Link
                    href="/systems/pergolas"
                    className="flex items-center gap-3"
                  >
                    <ShieldCheck className="text-edg-brand h-4 w-4" />
                    Full pergola specs and accessories
                  </Link>
                  <Link
                    href="/service-areas/chicago-il/retractable-screens"
                    className="flex items-center gap-3"
                  >
                    <ArrowRight className="text-edg-brand h-4 w-4" />
                    Chicago retractable screens
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
