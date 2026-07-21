import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Home,
  Palette,
  ShieldCheck,
  Smartphone,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Louvered Pergolas Wilmette, IL | Historic Home Compatible | EDG',
  description:
    'Estate-grade louvered pergolas for Wilmette historic homes. ARB-compliant designs, lakefront wind ratings, and architectural matching for North Shore estates.',
  alternates: {
    canonical: '/service-areas/wilmette-il/louvered-pergolas',
  },
};

const heroContactHref = buildContactHref({
  type: 'fit-review',
  product: 'louvered-pergolas',
  area: 'wilmette',
  source: 'wilmette_louvered_pergolas_hero',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'louvered-pergolas',
  area: 'wilmette',
  source: 'wilmette_louvered_pergolas_bottom',
});

const localPriorities = [
  {
    icon: Wind,
    title: 'Lake Michigan Weather',
    description:
      'Wilmette sits close enough to the lake that patio comfort can change quickly. Louvered roofs, screens, lighting, and heat should be planned around wind, drizzle, glare, and daily use instead of treated as separate add-ons.',
  },
  {
    icon: Palette,
    title: 'Architectural Matching',
    description:
      'Brick colonials, Tudors, prairie-influenced homes, mid-century houses, and newer builds can all point to different frame finishes, column rhythm, louver direction, and lighting choices.',
  },
  {
    icon: ShieldCheck,
    title: 'Review-Ready Planning',
    description:
      'Some Wilmette projects need architectural, HOA, or village review. Renderings, finish samples, structure placement, and product documentation make the proposed outdoor room easier to understand.',
  },
  {
    icon: Smartphone,
    title: 'Everyday Control',
    description:
      'Remote, app, rain-sensor, lighting, and heater decisions should be made before ordering so the finished pergola is easy to use in normal weekday life.',
  },
];

const planningFit = [
  {
    title: 'Historic or architectural review',
    description:
      'Homes with review requirements need a cleaner planning packet: finish direction, renderings, product documentation, location, and how the structure relates to the house.',
  },
  {
    title: 'Lake-side exposure and privacy',
    description:
      'Properties east of Green Bay Road often need side protection as much as overhead control. Screens can reduce breeze, bugs, glare, and close-neighbor visibility.',
  },
  {
    title: 'A pergola that fits the house',
    description:
      'The column rhythm, finish, louver direction, drainage, lighting, and screen plan should be selected around the Wilmette home, not copied from another suburb.',
  },
];

const specificationChecks = [
  'Wind and side-screen needs reviewed against site exposure',
  'Post locations and spans selected around patio use and review path',
  'Controls, rain sensors, lighting, and heat discussed before ordering',
  'Finish direction matched to architecture, hardscape, and trim context',
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
    question: "What's the typical investment range?",
    answer:
      'The investment depends on size, attachment method, finish, screens, lighting, heat, controls, structural requirements, and review documentation. Wilmette projects can vary widely because a small patio, a lake-facing terrace, and an estate-scale outdoor room are very different scopes. We provide detailed proposals after confirming the site details.',
  },
  {
    question: 'Can I add this to an existing patio?',
    answer:
      "Yes, our systems can be installed as freestanding structures or attached to your home. For existing patios, we assess the foundation's load-bearing capacity and may recommend reinforcement. The flexibility of our engineering allows us to work with various patio configurations, from concrete slabs to paver installations, ensuring seamless integration with your current outdoor space.",
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
  image: `https://www.edgpatioshade.com${images.systems.pergolas.grayBronzeWhite}`,
};

export default function WilmetteProductPage() {
  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center overflow-hidden pt-24 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.systems.pergolas.grayBronzeWhite}
            alt="Modern louvered pergola with outdoor kitchen used as Wilmette planning reference"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: 'Wilmette, IL', href: '/service-areas/wilmette-il' },
              { label: 'Louvered Pergolas' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/wilmette-il"
            className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Wilmette service area
          </Link>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Louvered Pergolas for Wilmette Homes
            </h1>
            <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
              Motorized louvered roof systems planned around Wilmette
              architecture, lake weather, review documentation, privacy,
              screens, lighting, and outdoor room comfort.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={heroContactHref}>
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                  View Pergola Systems
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
                Why This Product Fits Wilmette
              </div>
              <h2 className="section-title mb-6">
                The right pergola should feel planned with the house
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Wilmette homeowners are usually balancing architecture, privacy,
                lake-influenced weather, and review expectations. A fixed cover
                can feel too heavy, while a decorative pergola often does not
                solve rain, glare, bugs, or daily comfort.
              </p>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                A motorized louvered system gives the patio more range: open the
                roof for sun and airflow, close it when rain moves in, and add
                screens, lighting, or heat when the space needs to operate more
                like an outdoor room.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                The goal is a pergola that looks intentional next to the home
                and makes the outdoor space easier to use, not a product dropped
                onto a North Shore property.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.featuredProjects.karp.gallery[1]}
                alt="Residential louvered pergola detail used for Wilmette planning context"
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
            <div className="label-editorial-brand mb-4">
              Local Planning Priorities
            </div>
            <h2 className="section-title mb-4">
              Wilmette Pergola Decisions to Make Early
            </h2>
            <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed">
              The strongest projects sort out exposure, review documentation,
              finish direction, controls, and side protection before the
              structure is treated as a finished quote.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {localPriorities.map((priority) => (
              <Card key={priority.title} padding="lg">
                <IconWrapper
                  icon={priority.icon}
                  variant="brand"
                  size="lg"
                  className="mb-4"
                />
                <h3 className="text-text-primary mb-3 text-lg font-bold">
                  {priority.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {priority.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="label-editorial-brand mb-4">
                Fit + Specification
              </div>
              <h2 className="section-title mb-6">
                Where Louvered Pergolas Fit Best in Wilmette
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                A Wilmette pergola should be planned around the property rather
                than treated like a standard North Shore installation. The
                decision usually comes down to review expectations, lake
                exposure, and how carefully the structure can be matched to the
                home.
              </p>
              <div className="space-y-4">
                {planningFit.map((item) => (
                  <Card key={item.title} variant="muted" padding="lg">
                    <h3 className="text-text-primary mb-2 text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <Card variant="dark" padding="lg">
              <h3 className="text-text-inverse mb-6 text-xl font-bold">
                Specification Checks
              </h3>
              <div className="space-y-4">
                {specificationChecks.map((check) => (
                  <div key={check} className="flex gap-3">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-text-inverse-muted leading-relaxed">
                      {check}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md border-border bg-surface-muted border-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              {images.featuredProjects.karp.gallery.map((src, index) => (
                <div
                  key={src}
                  className="border-border bg-surface-dark relative aspect-[4/3] overflow-hidden border"
                >
                  <Image
                    src={src}
                    alt={`North Shore louvered pergola project reference ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                North Shore Proof
              </div>
              <h2 className="section-title mb-6">
                Use real project details to guide the recommendation
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Nearby project examples help clarify finish direction, beam
                rhythm, screen needs, and how much of the patio should become a
                more controlled outdoor room. EDG uses those details to compare
                systems instead of forcing every Wilmette project into one
                product line.
              </p>
              <Link href="/projects/karp">
                <Button variant="secondary" size="lg">
                  View North Shore Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-md">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="label-editorial-brand mb-4">FAQ</div>
            <h2 className="section-title mb-8">
              Wilmette Louvered Pergola FAQ
            </h2>
            <div className="divide-border divide-y">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-text-primary mb-3 text-lg font-bold">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.question ===
                    'Do I need Architectural Review Board approval?' ? (
                      <>
                        {faq.answer.split('Wilmette zoning guide')[0]}
                        <Link
                          href="/service-areas/wilmette-il#zoning"
                          className="text-edg-brand-text font-medium hover:underline"
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
        </Container>
      </Section>

      <section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="label-editorial-brand text-edg-brand mb-4">
                Next Step
              </div>
              <h2 className="section-title mb-6">
                Ready to Review a Wilmette Pergola Plan?
              </h2>
              <p className="text-text-inverse-muted max-w-2xl text-xl leading-relaxed">
                Send EDG the patio location, home context, review questions, and
                how you want the space to work. We will help narrow the system,
                finish, accessories, and installation path.
              </p>
            </div>
            <div className="space-y-4">
              <Link href={bottomContactHref}>
                <Button size="lg" className="w-full">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/pergolas/configure">
                <Button size="lg" variant="outline" className="w-full">
                  Design in 3D
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/service-areas/wilmette-il">
                <Button size="lg" variant="outline" className="w-full">
                  Wilmette Service Area
                  <Home className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
