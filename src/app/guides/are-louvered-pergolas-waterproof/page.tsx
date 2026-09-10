import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Home,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Are Louvered Pergolas Waterproof? | EDG Patio & Shade',
  description:
    'Learn how EDG designs louvered pergolas for rain protection with planned drainage, retractable screens, glass enclosures, local installation, and ongoing care.',
  alternates: {
    canonical: '/guides/are-louvered-pergolas-waterproof',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Are Louvered Pergolas Waterproof? | EDG Patio & Shade',
    description:
      'See how EDG plans louvered roofs, drainage, screens, and glass around the way you want to use your outdoor room.',
  },
};

const faqs = [
  {
    question: 'Are louvered pergolas waterproof?',
    answer:
      'A louvered pergola can provide strong overhead rain protection when EDG matches the roof, drainage, and installation to the site. Open sides and wind-driven rain still affect the space, so EDG may include retractable screens or glass when you want more side protection.',
  },
  {
    question: 'Does closing the louvers stop all rain?',
    answer:
      'Closed louvers direct overhead water into the roof drainage system. EDG plans the gutters, posts, downspouts, patio grade, and nearby doors together so that water has a clear path away from the room. Wind, splash, and adjacent roof runoff can still change the result.',
  },
  {
    question: 'Do rain sensors make a pergola waterproof?',
    answer:
      'A rain sensor can help close the roof when precipitation begins, but it is one part of the system. EDG coordinates controls with the selected roof, screens, drainage, and the way you want the room to operate.',
  },
  {
    question: 'Can screens help with wind-driven rain?',
    answer:
      'Retractable screens can reduce wind, spray, glare, and some wind-driven rain while preserving an open room when you want it. EDG places screens where they improve comfort without blocking required access, airflow, or the view.',
  },
  {
    question: 'How does EDG plan rain protection?',
    answer:
      'EDG starts with how you use the space, then selects and lays out the roof, drainage, controls, screens, or glass. For local projects, we coordinate design, engineering, permitting, installation, and care so the finished room works as one system.',
  },
];

const waterPath = [
  {
    title: 'Roof coverage',
    description:
      'EDG selects a louvered roof that lets you choose open-sky light or overhead rain protection, then plans the roof orientation and controls around the space.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Planned drainage',
    description:
      'Gutters, posts, downspouts, patio grade, and nearby hardscape are coordinated before installation so roof water does not become a door, stair, or kitchen problem.',
    icon: CloudRain,
  },
  {
    title: 'Comfort at the edges',
    description:
      'Screens or glass can add side protection where the weather reaches the room. EDG balances coverage with ventilation, access, daylight, and the way you want to use the space.',
    icon: Home,
  },
];

const coverageOptions = [
  {
    title: 'Open-air shade',
    description:
      'A louvered roof gives you adjustable shade, daylight, and airflow with a planned rain position.',
  },
  {
    title: 'More side protection',
    description:
      'Retractable screens can reduce wind, bugs, glare, and spray while keeping the room flexible.',
  },
  {
    title: 'A room-like retreat',
    description:
      'Glass or a complete enclosure can extend the season when you want more separation from the weather.',
  },
];

const supportAreas = [
  {
    title: 'System selection',
    description:
      'EDG works across multiple manufacturers and recommends the roof, screens, or glass that fit the project rather than forcing one brand.',
    icon: ShieldCheck,
  },
  {
    title: 'Design and engineering',
    description:
      'We lay out spans, posts, openings, controls, drainage, and attachments so the design is ready for the site and the way you live.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Installation coordination',
    description:
      'Local homeowners can rely on EDG for permitting, installation, finish coordination, and a clear handoff when the system is ready to use.',
    icon: Home,
  },
  {
    title: 'Care after install',
    description:
      'EDG remains a point of contact for seasonal care, controls, drainage questions, and the practical details that keep the room working well.',
    icon: CheckCircle2,
  },
];

const articleSchema = generateArticleSchema({
  title: 'Are Louvered Pergolas Waterproof?',
  description:
    'How EDG designs louvered pergolas for rain protection with planned drainage, screens, glass, and local installation support.',
  url: 'https://www.edgpatioshade.com/guides/are-louvered-pergolas-waterproof',
  image: `https://www.edgpatioshade.com${images.pages.guides.louveredPergolasHero}`,
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  category: 'Pergola Weather Performance',
});

const faqSchema = generateFAQSchema(faqs);

export default function AreLouveredPergolasWaterproofPage() {
  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Are Louvered Pergolas Waterproof?' },
            ]}
            className="mb-8"
          />

          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5">
              Weather Performance Guide
            </div>
            <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl">
              Are louvered pergolas waterproof?
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              EDG designs louvered pergolas to manage overhead rain, route water
              away from the room, and add screens or glass when the sides need
              more protection. The right plan follows your home, exposure, and
              the way you want to use the space.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <LinkButton
                href="/guides/pergola-system-fit-review?source=louvered_pergolas_waterproof_hero"
                size="lg"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/systems/pergolas"
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10"
              >
                View Pergola Systems
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Direct answer</div>
            <h2 className="section-title mb-6">
              Rain protection starts above, then follows the water
            </h2>
            <div className="border-edg-brand bg-surface-muted mb-10 border-l-4 p-6 md:p-8">
              <p className="text-xl leading-relaxed font-medium md:text-2xl">
                A louvered roof can keep much of the rain overhead when the
                louvers are closed. EDG makes that protection useful by planning
                the drainage path and the room&apos;s open sides at the same
                time.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="outline" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">
                  The roof manages overhead rain
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Closed louvers, roof channels, and integrated gutters can move
                  overhead water away from the covered area. EDG selects the
                  system and lays out its controls around your routine.
                </p>
              </Card>
              <Card variant="outline" padding="lg">
                <Wind className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">
                  The room may need edge protection
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Open sides and wind-driven rain can still affect comfort. EDG
                  can add retractable screens or glass where the exposure and
                  your use of the room call for it.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.projects.wade.hero}
                alt="Outdoor room with a louvered roof and motorized glass walls"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                EDG design approach
              </div>
              <h2 className="section-title mb-4">
                Plan the roof, side protection, and drainage together
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                EDG designs outdoor rooms as complete systems. We coordinate the
                louvered roof, retractable screens or glass, posts, controls,
                and drainage so each part supports the way you want to cook,
                dine, relax, and entertain.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                For local homeowners, that plan can continue through
                engineering, permitting, installation, and care. For trade
                partners, EDG also provides national design and supply support.
              </p>
              <LinkButton
                href="/systems/pergolas"
                variant="secondary"
                size="sm"
              >
                Explore pergola systems <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">Water path</div>
              <h2 className="section-title mb-4">
                Where the rain goes matters as much as the roof
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A comfortable covered room starts with a clear path from the
                roof to the final discharge point. EDG works through that path
                before the posts, patio finishes, and doors are finalized.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {waterPath.map((step) => (
                <Card key={step.title} variant="outline" padding="lg">
                  <step.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
              <div>
                <h3 className="mb-5 text-2xl font-bold">
                  EDG plans around the details that make a room usable
                </h3>
                <div className="space-y-4">
                  {[
                    'Gutter and downspout discharge away from doors, stairs, walls, and kitchens',
                    'Patio slope, hardscape, trench drains, and the finished grade around the posts',
                    'Prevailing wind, nearby roofs, open exposure, and the edges where rain reaches first',
                    'Screens, glass, controls, lighting, and the access needed to keep everything serviceable',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="text-edg-brand-dark mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-text-secondary leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Card variant="muted" padding="lg">
                <h3 className="mb-4 text-2xl font-bold">
                  Start with the experience you want
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Tell EDG whether you want open-air shade, a drier dining area,
                  a screened retreat, or a more enclosed outdoor room. We can
                  help shape the roof and side strategy around that goal.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-black text-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial text-edg-brand mb-4">
                Coverage options
              </div>
              <h2 className="section-title mb-4 text-white">
                Choose the level of weather protection that fits your room
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                EDG can build a plan around the balance you want between
                daylight, airflow, privacy, and protection from the weather.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {coverageOptions.map((option) => (
                <div key={option.title} className="border border-white/10 p-6">
                  <h3 className="mb-3 text-xl font-bold">{option.title}</h3>
                  <p className="leading-relaxed text-zinc-300">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-3xl">
              <div className="label-editorial-brand mb-4">Why EDG</div>
              <h2 className="section-title mb-4">
                One specialty partner from first sketch to finished room
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                EDG brings motorized pergolas, retractable screens, and glass
                enclosure expertise into one coordinated process.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {supportAreas.map((area) => (
                <Card key={area.title} variant="outline" padding="lg">
                  <area.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                  <h3 className="mb-3 text-xl font-bold">{area.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Common questions</div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="default" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-edg-dark py-16 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-edg-brand mb-3 text-sm font-bold tracking-widest uppercase">
                Start with your outdoor room
              </div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Tell EDG how you want the space to feel in the rain.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Share your goals and project location. Photos and rough
                dimensions are welcome, but not required to start a
                conversation.
              </p>
            </div>
            <LinkButton
              href="/guides/pergola-system-fit-review?source=louvered_pergolas_waterproof_bottom"
              size="lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </LinkButton>
          </div>
        </Container>
      </section>
    </article>
  );
}
