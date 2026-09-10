import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  CircleAlert,
  Gauge,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { buttonClassName, LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ScreenFitBudgetForm } from '@/components/features/shades/ScreenFitBudgetForm';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'MagnaTrack Screen Review: Is It a Good Fit? | EDG',
  description:
    'See how EDG plans MagnaTrack motorized screens around the opening, fabric, power, controls, installation, weather, and care.',
  alternates: {
    canonical: '/guides/magnatrack-screens-review',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'MagnaTrack Screen Review: Is It a Good Fit? | EDG',
    description:
      'A homeowner guide to MagnaTrack screen fit, magnetic track behavior, installation, weather limits, and care from EDG.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'magnatrack screens reviews',
    'magnatrack screen review',
    'magnatrack screens',
    'motorized patio screen review',
  ],
};

const projectDetails = [
  'Light frame with dark screen fabric',
  'Motorized screen shown closed, partway through travel, and open',
  'Raise the screen when you want the opening open to the yard',
];

const fitChecks = [
  {
    icon: Ruler,
    title: 'Measure the opening',
    description:
      'EDG checks width, height, squareness, mounting surfaces, headbox placement, bottom-bar travel, and the clear opening the screen needs to serve.',
  },
  {
    icon: Gauge,
    title: 'Choose the experience',
    description:
      'Fabric changes bugs, glare, privacy, airflow, daylight, and view. EDG helps balance those goals around the orientation and daily use of the patio.',
  },
  {
    icon: ShieldCheck,
    title: 'Plan power and controls',
    description:
      'EDG coordinates the power route, control method, sensors, trim, and future service access before the motorized screen is ordered.',
  },
  {
    icon: CircleAlert,
    title: 'Set weather expectations',
    description:
      'A screen improves comfort but is not a storm shutter. EDG explains the operating limits for the selected system and the conditions at the opening.',
  },
];

const careChecks = [
  {
    icon: Wrench,
    title: 'Keep the travel path clear',
    description:
      'Furniture, toys, tools, snow, ice, and debris can interrupt the bottom bar. Clear the opening before cycling the screen.',
  },
  {
    icon: ShieldCheck,
    title: 'Use the screen as designed',
    description:
      'Follow the operating and care guidance for the selected system, and call EDG when movement changes.',
  },
  {
    icon: Wrench,
    title: 'Plan simple care',
    description:
      'Keep the housing and tracks clean, follow the care instructions for the selected fabric and motor, and call EDG when movement changes.',
  },
  {
    icon: CircleAlert,
    title: 'Leave service access',
    description:
      'The layout should leave room to inspect the housing, tracks, power, and controls later without dismantling the patio around the screen.',
  },
];

const faqs = [
  {
    question: 'Are MagnaTrack screens a good fit for a patio?',
    answer:
      'They can be a strong fit when you want a motorized screen that disappears, keeps insects out, and preserves airflow and an open view when raised. EDG still checks the opening, mounting, fabric, power, controls, exposure, and operating expectations before recommending the system.',
  },
  {
    question: 'What does the magnetic track change?',
    answer:
      'The magnetic side tracks let the fabric flex under wind pressure and draw it taut again as the pressure eases. EDG still checks the structure, measurements, travel path, and weather expectations around the opening.',
  },
  {
    question: 'Are MagnaTrack screens storm protection?',
    answer:
      'No. A motorized insect, solar, or comfort screen is not a storm shutter. EDG explains the weather limits for the selected system and plans how the screen should be retracted when conditions exceed its intended use.',
  },
  {
    question: 'Can EDG retrofit a MagnaTrack screen to an existing opening?',
    answer:
      'EDG can review retrofit opportunities, but the answer depends on the opening, mounting surfaces, headbox visibility, side-track path, power route, trim, and future service access. A site review determines whether the retrofit is clean.',
  },
];

export default function MagnaTrackScreensReviewPage() {
  const articleSchema = generateArticleSchema({
    title: 'MagnaTrack Screen Review: Is It a Good Fit?',
    description:
      'A homeowner guide to how EDG plans MagnaTrack motorized screens around opening fit, fabric, power, controls, installation, weather, and care.',
    url: 'https://www.edgpatioshade.com/guides/magnatrack-screens-review',
    image: `https://www.edgpatioshade.com${images.systems.shades.ohareHero}`,
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    category: 'Screen Planning',
  });

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, generateFAQSchema(faqs)]),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'MagnaTrack Screens Review' },
            ]}
            className="mb-8"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                Screen fit guide
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                MagnaTrack screens: is the magnetic track a good fit for your
                patio?
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                EDG plans motorized screens around the opening, the fabric, the
                power path, the way you use the patio, and the care the system
                will need after installation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="#screen-review-quote"
                  conversionName="screen_review_quote_cta"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                </TrackedLink>
                <LinkButton
                  href="#bartlett-project"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  See the project
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.ohareClosed}
                alt="Motorized insect screen closed on a wide Bartlett outbuilding opening"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div>
              <div className="label-editorial-brand mb-4">Our answer</div>
              <h2 className="section-title mb-6">
                MagnaTrack can be a strong fit when the screen needs to
                disappear
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  EDG considers MagnaTrack for covered patios, porches, pergola
                  bays, lanais, and garage-style openings where the goal is
                  insect protection and everyday comfort without leaving a fixed
                  screen across the view. The magnetic side tracks let the
                  fabric flex under wind pressure and draw it taut again as the
                  pressure eases.
                </p>
                <p>
                  That benefit matters after the installation, but it only works
                  when the opening, mounting, fabric, power, controls, and
                  bottom-bar path are planned together. EDG measures those
                  details before recommending the screen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="bartlett-project" className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">Bartlett project</div>
            <h2 className="section-title mb-4">
              A motorized insect screen spans this Bartlett outbuilding opening
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A light frame and dark fabric keep the installation visually
              simple; raise the screen to open the space to the yard.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-white sm:col-span-2">
                  <Image
                    src={images.systems.shades.ohareHero}
                    alt="Motorized screen installed on a wide Bartlett residential opening"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={images.systems.shades.oharePartOpen}
                    alt="Motorized screen partway open on the Bartlett project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-white sm:col-span-3">
                  <Image
                    src={images.systems.shades.ohareClosed}
                    alt="Motorized screen closed on the Bartlett project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  />
                </div>
              </div>
              <div className="mt-4 overflow-hidden border border-black/10 bg-black">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={images.systems.shades.ohareHero}
                  aria-label="Bartlett project motorized screen cycle preview"
                >
                  <source
                    src="/projects/ohare/screen-cycle-preview.mp4"
                    type="video/mp4"
                  />
                </video>
                <p className="p-4 text-sm leading-relaxed text-zinc-300">
                  EDG project media showing the motorized screen moving across
                  the outbuilding opening.{' '}
                  <Link
                    href="/projects/ohare"
                    className="text-white underline underline-offset-4"
                  >
                    View the project.
                  </Link>
                </p>
              </div>
            </div>

            <Card variant="default" padding="lg">
              <p className="text-edg-brand-text mb-4 text-xs font-bold tracking-[0.2em] uppercase">
                Bartlett, IL
              </p>
              <h3 className="mb-6 text-2xl font-bold">Finish and operation</h3>
              <ul className="space-y-4">
                {projectDetails.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <span className="text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Magnetic track</div>
            <h2 className="section-title mb-4">
              A flexible track for everyday outdoor comfort
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The magnetic track is useful when the screen needs to stay aligned
              during normal use while still responding to wind pressure. EDG
              pairs that feature with a measured opening and a clear operating
              plan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Wind-responsive side tracks',
                description:
                  'The magnetic side tracks let the fabric flex under wind pressure and draw it taut again as the pressure eases.',
              },
              {
                title: 'Still a custom system',
                description:
                  'The track does not remove the need for a sound opening, aligned side tracks, a properly placed housing, appropriate fabric, power, and service access.',
              },
              {
                title: 'Choose the fabric around the room',
                description:
                  'EDG helps balance insects, glare, privacy, airflow, daylight, and view around the patio’s orientation and daily use.',
              },
            ].map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <ShieldCheck className="text-edg-brand-text mb-5 h-7 w-7" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 max-w-3xl">
            <div className="label-editorial-brand mb-4">
              EDG installation plan
            </div>
            <h2 className="section-title mb-4">
              What EDG checks before the screen is ordered
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A motorized screen feels simple when the design work is done
              first. EDG brings the opening, fabric, power, controls, and care
              plan together before installation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fitChecks.map((item) => (
              <Card key={item.title} variant="default" padding="lg">
                <item.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {careChecks.map((item) => (
              <Card key={item.title} variant="outline" padding="lg">
                <item.icon className="text-edg-brand-text mb-5 h-8 w-8" />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="screen-review-quote" className="section-lg bg-surface">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 border border-black/10 bg-white p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Screen fit review
              </div>
              <h2 className="section-title mb-6">
                Tell us what you want from your patio.
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                A location, rough footprint, photos, and the comfort problem you
                want the screen to solve are helpful, but optional for the
                initial request. EDG can then discuss the right fabric, track,
                controls, installation path, and care plan.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Opening details and photos are optional for the initial request.
              </p>
            </div>
            <ScreenFitBudgetForm
              source="magnatrack_screen_review"
              ctaPosition="magnatrack_review_guide"
            />
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">MagnaTrack screen questions</h2>
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
    </article>
  );
}
