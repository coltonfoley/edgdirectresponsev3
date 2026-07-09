import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Home,
  Layers,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Trees,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Motorized Pergolas in Barrington, IL | Louvered Roof Planning | EDG',
  description:
    'Motorized louvered pergolas for Barrington, Barrington Hills, South Barrington, and Lake Barrington homes. Planned for architecture, HOA review, wind, snow, and extended-season comfort.',
  alternates: {
    canonical: '/service-areas/barrington-il/motorized-pergolas',
  },
  openGraph: {
    title: 'Motorized Pergolas in Barrington, IL | EDG Patio & Shade',
    description:
      'Louvered pergola planning for Barrington area homes, patios, pools, and outdoor rooms.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'motorized pergolas Barrington IL',
    'Barrington louvered pergola',
    'Barrington Hills pergola installer',
    'South Barrington outdoor living',
    'Lake Barrington patio cover',
  ],
};

const pergolaFit = [
  {
    title: 'Estate-Scale Patios',
    description:
      'Barrington projects often involve larger terraces, pool decks, outdoor kitchens, and long sightlines. We plan post locations, spans, drainage, and finish colors so the pergola looks intentional from the house, the lawn, and the driveway.',
    icon: Trees,
  },
  {
    title: 'Architectural Review',
    description:
      'Many Barrington area homes involve HOA, gated-community, or architectural committee review. EDG can prepare drawings, finish samples, product documentation, and renderings that make the proposed structure easier to understand.',
    icon: FileText,
  },
  {
    title: 'Wind and Snow Exposure',
    description:
      'Open lots, golf course edges, and lake-adjacent yards can feel weather before denser neighborhoods do. We specify louvered roof systems around real exposure, not just the footprint of the patio.',
    icon: Wind,
  },
  {
    title: 'Outdoor Room Add-Ons',
    description:
      'Screens, heaters, lighting, fans, and controls should be planned with the pergola from the start. That prevents a beautiful structure from becoming a limited shade frame that only works on perfect days.',
    icon: Home,
  },
];

const planningPriorities = [
  'Confirm whether the pergola will be attached, freestanding, or integrated with an existing terrace or pool deck.',
  'Review survey, easements, drainage patterns, electrical routes, and hardscape conditions before finalizing a layout.',
  'Choose a louver direction that manages late-day sun without making the view from the house feel heavy or blocked.',
  'Decide early whether screens, heaters, lighting, or smart controls will be included now or prepped for a later phase.',
];

const faqs = [
  {
    question: 'Is a motorized pergola a good fit for Barrington estate homes?',
    answer:
      'Yes, especially when the goal is a finished outdoor room rather than a decorative wood frame. Barrington patios are often large enough to benefit from adjustable shade, rain management, lighting, heaters, and screens planned as one system.',
  },
  {
    question: 'Do Barrington pergola projects need permits or HOA approval?',
    answer:
      'Permanent outdoor structures commonly require local review, and many Barrington area communities also have HOA or architectural review expectations. The exact path depends on the village, lot, attachment method, structure size, and existing hardscape. EDG helps assemble the drawings, product information, and engineering details needed for review.',
  },
  {
    question: 'Can the pergola match a traditional Barrington home?',
    answer:
      'Yes. A louvered roof does not have to look ultra-modern. Finish color, column placement, scale, lighting, and how the system meets the house all affect whether it feels integrated with Georgian, Tudor, farmhouse, transitional, or contemporary architecture.',
  },
  {
    question: 'What should I decide before asking for a pergola quote?',
    answer:
      'Start with how the space should work: dining, pool shade, outdoor kitchen coverage, bug control, privacy, or shoulder-season use. Photos, rough dimensions, a survey if available, and notes about HOA or village review help us recommend the right system before detailed design begins.',
  },
];

export default function BarringtonPergolaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motorized Pergolas in Barrington, IL',
    description:
      'Estate-grade motorized louvered pergola design and installation for Barrington area homes.',
    provider: {
      '@id': 'https://www.edgpatioshade.com/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Barrington',
      addressRegion: 'IL',
    },
    url: 'https://www.edgpatioshade.com/service-areas/barrington-il/motorized-pergolas',
    image: `https://www.edgpatioshade.com${images.pages.serviceAreas.barringtonPergola1}`,
  };

  return (
    <div className="min-h-screen bg-surface">
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

      <section className="relative flex min-h-[64vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.serviceAreas.barringtonPergola1}
            alt="Motorized louvered pergola planned for a Barrington Illinois estate patio"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Barrington, IL', href: '/service-areas/barrington-il' },
              { label: 'Motorized Pergolas' },
            ]}
            className="mb-6"
          />

          <Link
            href="/service-areas/barrington-il"
            className="mb-8 inline-flex items-center text-sm text-zinc-300 transition-colors hover:text-edg-brand"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Barrington Outdoor Living
          </Link>

          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 border border-edg-brand/20 bg-edg-brand/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-edg-brand-dark">
              <MapPin className="h-4 w-4" /> Barrington Pergola Planning
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Motorized Pergolas for Barrington Estates
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-zinc-200">
              EDG designs louvered roof systems for Barrington, Barrington
              Hills, South Barrington, and Lake Barrington homes where scale,
              architecture, weather, and approval requirements all matter.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?area=barrington&source=barrington_pergola">
                <Button size="lg" className="px-8">
                  Request a System Fit Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+18155810138">
                <Button size="lg" variant="outline" className="px-8">
                  <Phone className="mr-2 h-5 w-5" /> 815-581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-edg-dark py-8">
        <Container>
          <div className="flex flex-wrap gap-4 text-sm text-text-inverse-muted md:justify-center">
            {[
              'Louvered roof systems',
              'Integrated screens and heaters',
              'HOA and village review support',
              'Spring Grove showroom access',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-edg-brand-dark" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                Why Barrington is different
              </div>
              <h2 className="section-title mb-6">
                The right pergola has to feel built into the property.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Barrington homeowners are rarely looking for a small patio cover.
                The real project is usually a poolside entertaining area, an
                outdoor kitchen, a west-facing terrace, or a backyard room that
                needs to look appropriate next to a high-value home. That changes
                the design conversation. The pergola needs to manage sun and rain,
                but it also needs to respect sightlines, mature landscaping,
                architecture, and the way guests move through the property.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                A motorized louvered roof is strongest when it is planned as a
                system. Louvers control overhead exposure. Side screens handle
                bugs, wind, and privacy. Heaters and lighting extend use into
                spring and fall. Controls make the space practical for everyday
                life instead of another feature that only gets used during parties.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.pages.serviceAreas.barringtonPergola4}
                alt="Black louvered roof pergola integrated with a residential outdoor living space"
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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Pergola fit checks
            </div>
            <h2 className="section-title mb-4">
              What we evaluate before recommending a system
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              The best Barrington pergola projects start with site conditions,
              not a catalog size. These are the questions that determine whether
              the final outdoor room feels natural, performs well, and survives
              review without avoidable revisions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pergolaFit.map((item) => (
              <Card key={item.title} variant="default" padding="lg">
                <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Planning before pricing
              </div>
              <h2 className="section-title mb-6">
                A better quote starts with the constraints.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Barrington area projects can involve more stakeholders than a
                typical patio upgrade: homeowners, designers, builders, HOA
                committees, village reviewers, and sometimes landscape architects.
                We help bring those requirements into the plan early so the final
                quote reflects the real job instead of a simplified placeholder.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/service-areas/barrington-il#zoning">
                  <Button variant="secondary">
                    Barrington Planning Notes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas">
                  <Button variant="secondary">
                    Compare Pergola Systems
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <Card variant="muted" padding="lg">
              <div className="mb-6 flex items-center gap-3">
                <IconWrapper icon={ShieldCheck} variant="brand" size="md" />
                <h3 className="text-2xl font-bold">Before we finalize the pergola</h3>
              </div>
              <ul className="space-y-4">
                {planningPriorities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-edg-brand-dark" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Freestanding Pergola',
                body: 'Often best for pool areas, detached patios, or landscapes where the outdoor room should sit away from the house.',
                icon: Trees,
              },
              {
                title: 'Attached Pergola',
                body: 'Useful when the goal is to create a direct transition from kitchen, family room, or covered terrace to outdoor dining.',
                icon: Layers,
              },
              {
                title: 'Screened Outdoor Room',
                body: 'A strong fit when bugs, privacy, and wind matter as much as overhead shade. Screens should be designed with the structure, not added later.',
                icon: Snowflake,
              },
            ].map((option) => (
              <Card key={option.title} variant="default" padding="lg">
                <IconWrapper icon={option.icon} variant="brand" size="lg" className="mb-4" />
                <h3 className="mb-3 text-xl font-bold">{option.title}</h3>
                <p className="text-text-secondary">{option.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">
                Barrington pergola FAQ
              </div>
              <h2 className="section-title">
                Common questions before a site review
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-text-inverse md:text-4xl">
              Plan a Barrington Pergola That Belongs on the Property
            </h2>
            <p className="mb-8 text-xl text-text-inverse-muted">
              Share photos, rough dimensions, and the way you want the patio to
              work. We will help decide whether a louvered roof, screens,
              heaters, lighting, or a phased outdoor room plan makes the most sense.
            </p>
            <Link href="/guides/pergola-system-fit-review?area=barrington&source=barrington_pergola_cta">
              <Button size="lg" className="px-8 text-lg">
                Request a System Fit Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
