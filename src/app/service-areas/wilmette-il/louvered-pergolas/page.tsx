import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Louvered Pergolas Wilmette, IL | Historic Home Compatible | EDG',
  description:
    'Estate-grade louvered pergolas for Wilmette historic homes. ARB-compliant designs, lakefront wind ratings, and architectural matching for North Shore estates.',
  alternates: {
    canonical: '/service-areas/wilmette-il/louvered-pergolas',
  },
};

import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowLeft,
  ArrowRight,
  CloudSun,
  Palette,
  TrendingUp,
  MapPin,
  Home,
  Wind,
  Settings,
  Smartphone,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { generateFAQSchema } from '@/lib/schema';

const reasons = [
  {
    icon: CloudSun,
    title: 'Lake Michigan Weather',
    description:
      "Wilmette sits close enough to the lake that patio comfort can change quickly. A static wood pergola may look right, but it does not help much when wind, drizzle, glare, or bugs are the reason the family heads inside.",
  },
  {
    icon: Palette,
    title: 'Architectural Matching',
    description:
      'Whether you have a classic red brick colonial near the lake or a stucco home, our systems can be powder coated to match your trim or window mullions perfectly. It looks like it was built with the house, not tacked on.',
  },
  {
    icon: TrendingUp,
    title: 'Property Value',
    description:
      'In high-value markets like Wilmette, the strongest outdoor improvements feel useful and permanent. A louvered pergola with screens, heat, and lighting can make the patio operate more like a finished outdoor room than a seasonal deck upgrade.',
  },
];

const planningFit = [
  {
    title: 'Historic or architectural review',
    description:
      'Some Wilmette homes need more documentation than a simple product spec. Renderings, color samples, structure placement, and finish coordination help reviewers and neighbors understand the proposed outdoor room.',
  },
  {
    title: 'Lake-side exposure and privacy',
    description:
      'Properties east of Green Bay Road often need side protection as much as overhead control. Screens can reduce lake breeze, bugs, glare, and close-neighbor visibility without turning the patio into a fully enclosed room.',
  },
  {
    title: 'A pergola that fits the house',
    description:
      'Wilmette has brick colonials, Tudors, prairie-influenced homes, mid-century houses, and newer builds. The column rhythm, finish, louver direction, and lighting package should be selected around the home, not copied from another suburb.',
  },
];

const faqs = [
  {
    question: 'Do I need Architectural Review Board approval?',
    answer:
      'Some Wilmette projects may need architectural, HOA, or village review depending on the address, scope, and visibility from neighboring properties or the street. We provide renderings, material samples, and product documentation to support the review path. For planning context, see our Wilmette zoning guide.',
  },
  {
    question: 'How do louvered roofs handle lakefront winds?',
    answer:
      'Lakefront and near-lake properties need site-specific planning. We review exposure, mounting conditions, side screens, drainage, controls, and maintenance needs before recommending a final louvered roof system. The goal is not just a stronger roof; it is a more usable outdoor room in changing North Shore weather.',
  },
  {
    question: 'What\'s the typical investment range?',
    answer:
      'The investment depends on size, attachment method, finish, screens, lighting, heat, controls, structural requirements, and review documentation. Wilmette projects can vary widely because a small patio, a lake-facing terrace, and an estate-scale outdoor room are very different scopes. We provide detailed proposals after a site review.',
  },
  {
    question: 'Can I add this to an existing patio?',
    answer:
      'Yes, our systems can be installed as freestanding structures or attached to your home. For existing patios, we assess the foundation\'s load-bearing capacity and may recommend reinforcement. The flexibility of our engineering allows us to work with various patio configurations, from concrete slabs to paver installations, ensuring seamless integration with your current outdoor space.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Louvered Pergolas in Wilmette, IL',
  description:
    'Motorized louvered pergola planning and installation for Wilmette homes, patios, and outdoor living spaces.',
  provider: {
    '@id': 'https://www.edgpatioshade.com/#organization',
  },
  areaServed: {
    '@type': 'City',
    name: 'Wilmette',
    addressRegion: 'IL',
  },
  url: 'https://www.edgpatioshade.com/service-areas/wilmette-il/louvered-pergolas',
};

const faqSchema = generateFAQSchema(faqs);

export default function WilmetteProductPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <Breadcrumb
                items={[
                  { label: 'Service Areas', href: '/service-areas' },
                  { label: 'Wilmette, IL', href: '/service-areas/wilmette-il' },
                  { label: 'Louvered Pergolas' },
                ]}
                className="mb-6 text-zinc-300"
              />
              <Link
                href="/service-areas/wilmette-il"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Wilmette
              </Link>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold tracking-wider text-white uppercase">
                <MapPin className="h-3 w-3" /> Wilmette, IL
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Why Wilmette Homeowners Choose Louvered Roofs
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                What Is a Louvered Pergola?
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  A louvered pergola is a motorized aluminum structure with
                  adjustable roof slats that rotate up to 150 degrees. With the
                  touch of a button, you can control sunlight, ventilation, and
                  weather protection—transforming your patio from an open-air
                  space to a fully covered outdoor room in seconds.
                </p>
                <p>
                  For Wilmette homeowners, this means commanding Lake
                  Michigan&apos;s unpredictable weather instead of surrendering
                  to it. Host dinner parties without checking the wind forecast.
                  Enjoy your morning coffee in filtered sunlight, then seal the
                  roof when afternoon storms roll off the lake. The system even
                  closes automatically when rain is detected.
                </p>
                <p>
                  <Link
                    href="/systems/pergolas"
                    className="text-edg-brand-text dark:text-edg-brand inline-flex items-center gap-1 font-medium hover:underline"
                  >
                    View full specifications and available options
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== REASONS ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl space-y-8">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex gap-6 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="bg-edg-brand/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <reason.icon className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-xl font-bold">
                      {i + 1}. {reason.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL ARCHITECTURE ========== */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-edg-brand/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Home className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Designed for Wilmette&apos;s Architectural Heritage
                </h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  Wilmette&apos;s neighborhoods each carry distinct architectural
                  characters that demand thoughtful design approaches. In{' '}
                  <strong>Indian Hill Estates</strong>, where classic brick
                  colonials and Georgian revivals dominate, we specify column
                  details and cornice elements that complement traditional
                  proportions. <strong>East Wilmette</strong> lakefront
                  properties often feature prairie-style influences and
                  contemporary designs that benefit from our clean-lined, minimal
                  profiles.
                </p>
                <p>
                  For homes near <strong>Kenilworth Gardens</strong> and areas
                  with ARB oversight, we provide comprehensive documentation for
                  architectural review, including color-matched samples that
                  coordinate with existing trim, roofing, and window mullions.
                  Whether your home is a 1920s Tudor, a mid-century modern gem,
                  or new construction, our powder-coated finishes and custom
                  detailing ensure your pergola appears original to the
                  property—not an aftermarket addition.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LOCAL PLANNING FIT ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Where Louvered Pergolas Fit Best in Wilmette
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Wilmette pergola should not feel like the same page copied
                from another North Shore suburb. The decision usually comes down
                to review expectations, lake exposure, and how carefully the
                structure can be matched to the home.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {planningFit.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS ========== */}
      <Section className="bg-white py-16 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-edg-brand/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Settings className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Specification Decisions
                </h2>
              </div>
              <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <ul className="grid gap-4 md:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <Wind className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-semibold">Wind Planning:</span>
                      <p className="text-muted-foreground text-sm">
                        Product selection is reviewed against lake exposure,
                        mounting conditions, screen needs, and the selected
                        pergola system.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-semibold">Beam Span:</span>
                      <p className="text-muted-foreground text-sm">
                        Post locations and spans are chosen around patio use,
                        architecture, structure size, and the approved product
                        configuration.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-semibold">Motor and Controls:</span>
                      <p className="text-muted-foreground text-sm">
                        Control options are selected around daily use, smart-home
                        expectations, weather sensors, and serviceability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="text-edg-brand-dark mt-1 h-5 w-5 shrink-0" />
                    <div>
                      <span className="font-semibold">Smart Home:</span>
                      <p className="text-muted-foreground text-sm">
                        Compatibility depends on the final controls package, so
                        integration goals should be discussed before ordering.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <div className="bg-edg-brand/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <HelpCircle className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Wilmette Louvered Pergola FAQ
                </h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {i === 0 ? (
                        <>
                          {faq.answer.split('zoning guide')[0]}
                          <Link
                            href="/service-areas/wilmette-il#zoning"
                            className="text-edg-brand-text dark:text-edg-brand hover:underline"
                          >
                            Wilmette planning notes
                          </Link>
                          .
                        </>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-16">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-edg-dark mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                See a Project Near You
              </h2>
              <p className="text-edg-dark/80 mb-6">
                We have installed systems throughout Indian Hill, East
                Wilmette, and near Gilson Park. Ask to see our portfolio of
                completed Wilmette projects during your consultation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white"
                  >
                    Schedule Design Consult{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/systems/pergolas/configure">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-edg-dark/30 text-edg-dark hover:bg-edg-dark/5"
                  >
                    Design in 3D <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
