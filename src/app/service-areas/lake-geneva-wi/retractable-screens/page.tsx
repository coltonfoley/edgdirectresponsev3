import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bug,
  CheckCircle2,
  Eye,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Sun,
  Waves,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Motorized Screens in Lake Geneva, WI | Outdoor Shades | EDG',
  description:
    'Motorized retractable screens and outdoor shades for Lake Geneva patios, porches, pergolas, and lake homes. Plan bugs, glare, privacy, wind, and view protection.',
  alternates: {
    canonical: '/service-areas/lake-geneva-wi/retractable-screens',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Lake Geneva Motorized Screens & Outdoor Shades | EDG',
    description:
      'Retractable screen and shade planning for Lake Geneva, Fontana, Williams Bay, and Walworth County outdoor rooms.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized screens Lake Geneva WI',
    'retractable screens Lake Geneva',
    'outdoor shades Lake Geneva',
    'screen room Lake Geneva WI',
    'patio screens Lake Geneva',
    'Fontana motorized screens',
  ],
};

const benefits = [
  {
    icon: Bug,
    title: 'Bug control without a permanent room',
    description:
      'Screens can make summer dinners more comfortable without turning the patio into a fixed enclosure all season.',
  },
  {
    icon: Sun,
    title: 'Glare and late-day sun relief',
    description:
      'Lake-facing and west-facing spaces often need side shade more than another overhead feature.',
  },
  {
    icon: Eye,
    title: 'Privacy that still preserves the view',
    description:
      'Fabric openness can be selected to soften neighbor sightlines while keeping the lake, yard, and patio visually connected.',
  },
  {
    icon: Wind,
    title: 'Calmer outdoor rooms',
    description:
      'Tracked screens can reduce side wind and make a covered patio or pergola feel usable more often.',
  },
];

const screenFits = [
  {
    title: 'Covered porches and existing roof openings',
    description:
      'If the roof already exists, screens may be the fastest way to improve bugs, privacy, and low sun without rebuilding the whole patio.',
  },
  {
    title: 'Pergola-ready Lake Geneva patios',
    description:
      'When a motorized pergola is part of the plan, screen tracks, headboxes, posts, power, and controls should be considered before fabrication.',
  },
  {
    title: 'Screen-room alternatives',
    description:
      'Some homeowners search for a screen room when what they really need is a flexible patio that can open up when the lake weather is good.',
  },
  {
    title: 'Pool, grill, and dining zones',
    description:
      'Screens can define a protected dining or lounge zone while letting the rest of the yard stay open for guests, kids, and lake-weekend traffic.',
  },
];

const planningDetails = [
  'Opening width, height, squareness, and whether the structure can support clean side tracks',
  'Headbox visibility from the patio, house, yard, lake, and neighboring properties',
  'Fabric openness for bug control, solar comfort, privacy, daylight, and preserved views',
  'Power routing, switch location, remote/app control, sensors, and future service access',
  'Whether the screens are a retrofit, a pergola add-on, or part of a larger enclosure conversation',
  'Municipal, HOA, or association review when screens connect to a permanent outdoor structure',
];

const faqs = [
  {
    question: 'Are motorized screens a good fit for Lake Geneva patios?',
    answer:
      'Yes when the main problems are bugs, glare, low sun, privacy, or side wind around an existing porch, covered patio, pergola, or outdoor room. They retract when the space should feel open and deploy when comfort matters.',
  },
  {
    question: 'Can screens replace a screen room?',
    answer:
      'Sometimes. A fixed screen room can be right when the homeowner wants a permanent enclosure. Motorized screens are better when the goal is flexibility: open air on calm days, screen protection when bugs, wind, sun, or privacy become the issue.',
  },
  {
    question: 'Can screens be added to a Lake Geneva pergola?',
    answer:
      'Often, but the structure should be planned for screens from the start. Post alignment, track attachment, headbox space, power, fabric choice, and wind exposure all matter.',
  },
  {
    question: 'Do motorized screens block the lake view?',
    answer:
      'They can soften the view depending on fabric color and openness, but they do not have to make the room feel closed off. We select fabric based on the actual tradeoff between view, privacy, solar control, and bug protection.',
  },
  {
    question: 'What should I send for a screen layout review?',
    answer:
      'Send wide photos of the openings, rough width and height, the project address, and notes on whether the main problem is bugs, glare, privacy, wind, or creating a flexible screen-room feel.',
  },
];

const heroContactHref = buildContactHref({
  type: 'price',
  product: 'shades',
  location: 'Lake Geneva, WI',
  source: 'lake_geneva_screens_hero',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'shades',
  location: 'Lake Geneva, WI',
  source: 'lake_geneva_screens_bottom',
});

export default function LakeGenevaRetractableScreensPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Retractable Screens in Lake Geneva, WI',
    description:
      'Custom motorized retractable patio screens and outdoor shades for Lake Geneva, Fontana, Williams Bay, and nearby Walworth County outdoor rooms.',
    url: 'https://www.edgpatioshade.com/service-areas/lake-geneva-wi/retractable-screens',
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

      <div className="bg-surface min-h-screen">
        <section className="bg-edg-dark relative flex min-h-[62vh] items-center overflow-hidden pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.systems.shades.hero}
              alt="Motorized retractable patio screens for Lake Geneva outdoor living"
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
                {
                  label: 'Lake Geneva, WI',
                  href: '/service-areas/lake-geneva-wi',
                },
                { label: 'Retractable Screens' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/lake-geneva-wi"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Lake Geneva service area
            </Link>
            <div className="max-w-4xl">
              <div className="border-edg-brand/20 bg-edg-brand/10 text-edg-brand-dark mb-5 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" />
                Lake Geneva screen installer
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Screens & Outdoor Shades in Lake Geneva, WI
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Retractable screens for Lake Geneva patios, porches, pergolas,
                and outdoor rooms that need better bug control, low-sun relief,
                privacy, wind comfort, and a flexible screen-room feel.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={heroContactHref}>
                  <Button size="lg">Request a Quote</Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button size="lg" variant="outline" className="px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    815-581-0138
                  </Button>
                </a>
              </div>
            </div>
          </Container>
        </section>

        <Section className="section-md">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">
                  Why screens fit Lake Geneva
                </div>
                <h2 className="section-title mb-6">
                  Side protection is often the missing piece
                </h2>
                <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                  <p>
                    Many Lake Geneva patios already have the makings of a great
                    outdoor room: a covered porch, pergola, poolside dining
                    area, or deep overhang facing the yard. The problem is
                    usually not the roof. It is mosquitoes after sunset, glare
                    across the water, neighbors looking into the patio, or wind
                    cutting through an otherwise comfortable space.
                  </p>
                  <p>
                    Motorized retractable screens are useful because they solve
                    those side conditions without making the space permanently
                    enclosed. Drop the screens for dinner, privacy, or bug
                    control. Retract them when the air is calm and the view is
                    the point of being outside.
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} variant="muted" padding="lg">
                    <benefit.icon className="text-edg-brand-text mb-4 h-8 w-8" />
                    <h3 className="mb-3 text-lg font-bold">{benefit.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="border-border relative aspect-[4/3] overflow-hidden border">
                <Image
                  src={images.systems.shades.deployed}
                  alt="Deployed motorized screen protecting an outdoor room"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <div className="label-editorial-brand mb-4">
                  Screen-room alternatives
                </div>
                <h2 className="section-title mb-6">
                  Open when the lake feels good, protected when it does not
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Lake Geneva homeowners often search for screen rooms or patio
                  enclosures because they want more reliable outdoor time. That
                  does not always mean the patio needs permanent walls.
                  Retractable screens can create the protected feeling only when
                  needed, which keeps the home connected to the lake, yard, and
                  entertaining space the rest of the time.
                </p>
                <Link href="/systems/shades">
                  <Button variant="secondary">
                    View Screen System Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="label-editorial-brand mb-4">
                  Common Lake Geneva uses
                </div>
                <h2 className="section-title mb-6">
                  Flexible protection for patios, pergolas, and porches
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Screens are strongest when they are matched to the actual
                  opening and comfort problem, not just sold as a generic porch
                  add-on.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {screenFits.map((fit) => (
                  <Card key={fit.title} variant="muted" padding="lg">
                    <h3 className="mb-3 text-xl font-bold">{fit.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {fit.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="label-editorial-brand mb-4">
                Layout review checklist
              </div>
              <h2 className="section-title mb-4">
                What EDG checks before recommending screens
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                The opening has to be right for the screen to feel effortless.
                These details decide whether the final result looks built-in or
                like an afterthought.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {planningDetails.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 border border-zinc-200 bg-white p-5"
                >
                  <CheckCircle2 className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                  <p className="text-text-secondary leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">Lake Geneva Screen Questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} variant="muted" padding="lg">
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

        <section className="bg-surface-dark text-text-inverse py-24">
          <Container>
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Ready to review Lake Geneva screen options?
                </h2>
                <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                  Send opening photos, rough dimensions, and the main comfort
                  problem. EDG will help decide whether screens, a pergola, or a
                  larger outdoor-room plan makes the most sense.
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
                    href="/service-areas/lake-geneva-wi"
                    className="flex items-center gap-3"
                  >
                    <Home className="text-edg-brand h-4 w-4" />
                    Back to Lake Geneva service area
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
                    href="/service-areas/lake-geneva-wi/motorized-pergolas"
                    className="flex items-center gap-3"
                  >
                    <Waves className="text-edg-brand h-4 w-4" />
                    Lake Geneva motorized pergolas
                  </Link>
                  <Link
                    href="/service-areas/lake-geneva-wi/zoning-guide"
                    className="flex items-center gap-3"
                  >
                    <Smartphone className="text-edg-brand h-4 w-4" />
                    Permit and review planning
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
