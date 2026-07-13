import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  DollarSign,
  Home,
  Ruler,
  ShieldCheck,
  Smartphone,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton, buttonClassName } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { ScreenFitBudgetForm } from '@/components/features/shades/ScreenFitBudgetForm';
import { generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'MagnaTrack Screens Cost Guide 2026 | Motorized Patio Screens | EDG',
  description:
    'Learn what MagnaTrack motorized screens cost in 2026, what drives pricing, and how to budget for custom patio, porch, pergola, and restaurant screen projects.',
  alternates: {
    canonical: '/guides/magnatrack-screens-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'MagnaTrack Screens Cost Guide 2026 | EDG Patio & Shade',
    description:
      'A practical cost guide for MagnaTrack motorized screens, including size, fabric, controls, retrofit details, and local installation factors.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'magnatrack screens cost',
    'magnatrack motorized retractable screens',
    'motorized patio screens cost',
    'retractable screen cost',
    'outdoor motorized screens price',
    'patio screen installation cost',
  ],
};

const costRanges = [
  {
    type: 'Single Patio Opening',
    range: '$3,500 to $8,000+',
    description:
      'A single custom screen for a covered patio, porch, garage-style opening, or pergola bay.',
  },
  {
    type: 'Typical Residential Patio',
    range: '$8,000 to $25,000+',
    description:
      'Two to four screens with custom housing, fabric selection, controls, and clean wiring.',
  },
  {
    type: 'Large Outdoor Room',
    range: '$25,000 to $50,000+',
    description:
      'Multiple wide spans, privacy fabrics, smart controls, or screens integrated with a pergola.',
  },
  {
    type: 'Commercial Patio',
    range: '$35,000 to $100,000+',
    description:
      'Restaurant, hospitality, country club, or event-space projects with bigger openings and heavier use.',
  },
];

const costDrivers = [
  {
    icon: Ruler,
    title: 'Opening size and quantity',
    description:
      'Width, height, and the number of screen bays drive the biggest cost differences. Wider openings need stronger housings, larger motors, and more careful alignment.',
  },
  {
    icon: ShieldCheck,
    title: 'Track and housing details',
    description:
      'A clean retrofit may be straightforward. A recessed housing, hidden side track, or difficult mounting surface takes more design and installation time.',
  },
  {
    icon: Wind,
    title: 'Wind exposure',
    description:
      'Lakefront, roof deck, corner-lot, and open-backyard projects need more attention to wind, fabric tension, sensor settings, and safe operating habits.',
  },
  {
    icon: Smartphone,
    title: 'Controls and automation',
    description:
      'Remote controls are simple. App control, smart-home integration, wall switches, wind sensors, and multi-zone operation add cost but make the system easier to use daily.',
  },
];

const budgetSteps = [
  'Take rough measurements of each opening: width, height, and whether the sides are square.',
  'Decide what the screen must solve first: bugs, sun, wind, privacy, or restaurant comfort.',
  'Choose whether the screen should be visible, semi-hidden, or fully integrated into the structure.',
  'Plan the electrical path early so wires, switches, and controls do not feel like an afterthought.',
  'Compare screen pricing as part of the full outdoor-room plan, not as a standalone accessory.',
];

const faqs = [
  {
    question: 'How much do MagnaTrack screens cost?',
    answer:
      'Most custom MagnaTrack-style motorized screen projects start around $3,500 to $8,000 for one opening. A typical residential patio with multiple screens often lands from $8,000 to $25,000+, while large outdoor rooms and commercial patios can be higher. The exact price depends on opening size, fabric, housing, controls, wiring, and installation conditions.',
  },
  {
    question:
      'Why do MagnaTrack screens cost more than basic retractable screens?',
    answer:
      'The value is in the track system, wind performance, custom sizing, stronger components, and cleaner daily operation. Basic screens can work for sheltered openings, but wind and fabric blowout are common pain points. MagnaTrack-style systems are selected when the patio needs a more serious, long-term screen solution.',
  },
  {
    question:
      'Can MagnaTrack screens be added to an existing pergola or porch?',
    answer:
      'Often, yes. The structure needs enough support for the housing and side tracks, the openings need to be measured carefully, and the wiring path should be planned before installation. Some retrofits are simple; others need trim, blocking, or design adjustments.',
  },
  {
    question:
      'Are motorized screens worth it for Chicago-area or Florida homes?',
    answer:
      'They can be worth it when one system solves several problems at once. In the Chicago-Milwaukee corridor, homeowners usually want relief from bugs, wind, low-angle sun, and close-neighbor privacy. In Southwest Florida, buyers often care about covered-lanai comfort, glare, insects, privacy, and keeping the patio open when conditions are good.',
  },
];

export default function MagnaTrackScreensCostGuide() {
  const articleSchema = generateArticleSchema({
    title: 'MagnaTrack Screens Cost Guide 2026',
    description:
      'A practical cost guide for MagnaTrack motorized screens, including screen size, fabric, controls, retrofit details, and local installation factors.',
    url: 'https://www.edgpatioshade.com/guides/magnatrack-screens-cost',
    image: `https://www.edgpatioshade.com${images.systems.shades.deployed}`,
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    category: 'Buying Guide',
  });

  return (
    <article className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-surface-dark text-text-inverse pt-32 pb-20">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'MagnaTrack Screens Cost' },
              ]}
            />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
                <div className="bg-edg-brand h-px w-8" />
                2026 Pricing Guide
              </div>
              <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
                MagnaTrack Screens Cost Guide
              </h1>
              <p className="text-text-inverse-muted mb-8 text-xl leading-relaxed">
                A clear budget guide for motorized patio screens, including what
                changes the price, where MagnaTrack-style systems make sense,
                and how to compare screen quotes without getting trapped by kit
                pricing.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink
                  href="#screen-fit-budget"
                  conversionName="screen_fit_budget_cta"
                  className={buttonClassName({ size: 'lg' })}
                >
                  Get Screen Fit + Budget Range
                </TrackedLink>
                <LinkButton
                  href="#cost-ranges"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  See Cost Ranges
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.deployed}
                alt="Motorized patio screens deployed on an outdoor living space"
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
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">Short Answer</div>
            <h2 className="section-title mb-6">What should you budget?</h2>
            <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
              <p>
                A custom motorized screen is not priced like a window screen
                from a hardware store. It is closer to a small built-in
                outdoor-living system: custom housing, track alignment, fabric
                selection, motor, controls, wiring, and installation all have to
                work together.
              </p>
              <p>
                For one straightforward opening, many projects start around
                $3,500 to $8,000+. For a full patio, porch, pergola, or outdoor
                kitchen, the total commonly moves into the $8,000 to $25,000+
                range. Large homes, roof decks, lakefront properties, and
                commercial patios can go higher because the openings are larger
                and the conditions are less forgiving.
              </p>
              <p>
                The right way to think about cost is simple: you are buying more
                usable days outside. If wind, bugs, glare, or privacy keep the
                patio empty, a screen system can turn an almost-useful space
                into a space your family or guests actually use.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cost-ranges" className="section-lg bg-surface-muted">
        <Container>
          <div className="mb-12 text-center">
            <div className="label-editorial-brand mb-4">Budget Ranges</div>
            <h2 className="section-title mb-4">
              MagnaTrack screen cost ranges
            </h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              These are planning ranges for custom motorized screen projects.
              Final pricing needs measurements and a review of the mounting
              conditions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {costRanges.map((item) => (
              <Card key={item.type} variant="default" padding="lg">
                <DollarSign className="text-edg-brand-text mb-4 h-6 w-6" />
                <h3 className="mb-3 text-xl font-bold">{item.type}</h3>
                <p className="text-edg-brand-text mb-4 text-2xl font-bold">
                  {item.range}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="screen-fit-budget"
        className="section-lg bg-surface scroll-mt-24"
      >
        <Container>
          <div className="border-border mx-auto grid max-w-5xl gap-12 border bg-white p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div>
              <div className="label-editorial-brand mb-4">
                Screen Fit + Budget
              </div>
              <h2 className="section-title mb-6">
                Get a useful first answer before a sales call.
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                Tell us what the opening needs to solve. We will use the space,
                the issue, and your planning range to point you toward the most
                practical screen direction.
              </p>
              <p className="text-text-secondary leading-relaxed">
                This is a fit-and-budget review, not a generic quote request.
                Clear rough details help us give you a better first response.
              </p>
            </div>
            <ScreenFitBudgetForm />
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">
                What Changes the Price
              </div>
              <h2 className="section-title mb-6">
                The quote changes when the jobsite changes.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Two screen projects can look similar online and price very
                differently in the field. A straight, sheltered opening under a
                clean beam is one project. A windy roof deck, masonry
                attachment, hidden wiring path, or multi-bay restaurant patio is
                another.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                That is why we measure first and price second. Like a custom
                cabinet or built-in outdoor kitchen, the system has to fit the
                space cleanly and keep working after the installer leaves.
              </p>
            </div>
            <div className="grid gap-6">
              {costDrivers.map((driver) => (
                <Card key={driver.title} variant="muted" padding="lg">
                  <div className="mb-3 flex items-center gap-3">
                    <driver.icon className="text-edg-brand-text h-5 w-5" />
                    <h3 className="text-lg font-bold">{driver.title}</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {driver.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.shades.hero}
                alt="Outdoor motorized screen system with custom track and housing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                When It Is Worth It
              </div>
              <h2 className="section-title mb-6">
                Choose MagnaTrack-style screens when wind and daily use matter.
              </h2>
              <div className="text-text-secondary space-y-5 text-lg leading-relaxed">
                <p>
                  A basic drop screen can be fine for a sheltered spot.
                  MagnaTrack-style systems are for projects where the screen
                  needs to handle real outdoor conditions: wind moving across a
                  patio, a family using the space most nights, or a restaurant
                  that cannot afford constant service issues.
                </p>
                <p>
                  The extra investment is most justified when the screen is part
                  of a larger outdoor room. If you are already building a
                  pergola, outdoor kitchen, glass enclosure, or commercial
                  patio, the screens should be planned early so the housing,
                  controls, and finishes look intentional.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="label-editorial-brand mb-4">Budget Checklist</div>
              <h2 className="section-title mb-4">
                How to prepare for a screen quote
              </h2>
            </div>
            <div className="grid gap-4">
              {budgetSteps.map((step) => (
                <Card key={step} variant="default" padding="lg">
                  <div className="flex items-start gap-3">
                    <Check className="text-edg-brand-text mt-1 h-5 w-5 shrink-0" />
                    <p className="text-text-primary leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                MagnaTrack screen cost questions
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
                Need a screen fit and budget range?
              </h2>
              <p className="text-text-inverse-muted mb-8 max-w-xl text-xl">
                Send photos, rough opening sizes, and the main issue you want
                solved. We will help you understand whether screens are the
                right first move and what budget range fits the project.
              </p>
              <TrackedLink
                href="#screen-fit-budget"
                conversionName="screen_fit_budget_cta"
                className={buttonClassName({ size: 'lg' })}
              >
                Get My Screen Fit + Budget Range
              </TrackedLink>
            </div>
            <div className="border-border-inverse hidden border-l pl-16 md:block">
              <div className="text-text-inverse-muted space-y-4">
                <h4 className="text-lg font-bold tracking-wide uppercase">
                  Related pages
                </h4>
                <Link
                  href="/systems/shades"
                  className="flex items-center gap-3"
                >
                  <ShieldCheck className="text-edg-brand h-4 w-4" />
                  Motorized screen design and installation
                </Link>
                <Link
                  href="/service-areas/southwest-florida/motorized-screens"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  Southwest Florida motorized screens
                </Link>
                <Link
                  href="/service-areas/deerfield-il/retractable-screens"
                  className="flex items-center gap-3"
                >
                  <Home className="text-edg-brand h-4 w-4" />
                  Deerfield retractable screens
                </Link>
                <Link
                  href="/service-areas/chicago-il/retractable-screens"
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="text-edg-brand h-4 w-4" />
                  Chicago outdoor shades
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
