import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  FileText,
  Home,
  Palette,
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
  title: 'Louvered Pergolas in Winnetka, IL | Outdoor Room Planning | EDG',
  description:
    'Motorized louvered pergolas for Winnetka estates and lakefront homes. Planned around architecture, views, wind exposure, review requirements, screens, lighting, and outdoor room comfort.',
  alternates: {
    canonical: '/service-areas/winnetka-il/louvered-pergolas',
  },
};

const heroContactHref = buildContactHref({
  type: 'fit-review',
  product: 'louvered-pergolas',
  area: 'winnetka',
  source: 'winnetka_louvered_pergolas_hero',
});

const bottomContactHref = buildContactHref({
  type: 'fit-review',
  product: 'louvered-pergolas',
  area: 'winnetka',
  source: 'winnetka_louvered_pergolas_bottom',
});

const localPriorities = [
  {
    icon: Eye,
    title: 'View Preservation',
    description:
      'Winnetka patios often look toward formal gardens, ravines, or Lake Michigan. Post placement, beam layout, louver direction, and side-screen locations should protect the sightlines that matter most.',
  },
  {
    icon: Palette,
    title: 'Architectural Fit',
    description:
      'Historic, traditional, and modern Winnetka homes all require different finish and structure decisions. The pergola should feel like a planned architectural addition, not a generic kit.',
  },
  {
    icon: Wind,
    title: 'Lakefront Exposure',
    description:
      'Wind off Lake Michigan can change comfort quickly. EDG reviews exposure, mounting, controls, and side protection for the actual property before recommending a final system.',
  },
  {
    icon: Smartphone,
    title: 'Integrated Control',
    description:
      'Louvers, screens, lighting, heat, and sensors should be planned together so the outdoor room is simple to use after installation.',
  },
];

const estateConsiderations = [
  {
    title: 'Terrace and garden scale',
    description:
      'Larger parcels need structures that complement formal gardens, terraces, pool areas, and outdoor kitchens without overwhelming the landscape.',
  },
  {
    title: 'Privacy and side protection',
    description:
      'Screens, beam-integrated shade, planting, and furniture placement should be reviewed together when privacy matters as much as shade.',
  },
  {
    title: 'Review and documentation',
    description:
      'Finish samples, drawings, product documentation, and a clear scope help the homeowner move through architectural or municipal review with fewer surprises.',
  },
];

const specificationChecks = [
  'Beam and post layout planned around views, structure, and selected system',
  'Wind exposure reviewed before final roof and side-protection decisions',
  'Lighting, heat, and control expectations discussed before ordering',
  'Finish direction coordinated with stone, trim, windows, roof, and hardscape',
];

const faqs = [
  {
    question: 'Will this block my lake views?',
    answer:
      'It should not if the design is handled correctly. View preservation is one of the first planning questions on Winnetka estate and lakefront projects. We review post placement, beam layout, louver direction, and side-screen locations around the sightlines you care about most.',
  },
  {
    question: 'How does this affect property taxes?',
    answer:
      'Tax treatment depends on the property, project scope, and local assessment practices. We do not make tax promises on a pergola page. For tax-specific guidance, homeowners should ask their tax advisor or the relevant assessment office.',
  },
  {
    question: 'Can the system be integrated with my home automation?',
    answer:
      'Often, yes, depending on the selected controls package and existing home automation setup. We discuss lighting, heat, louvers, screens, and smart-home goals before ordering so the system is specified correctly.',
  },
  {
    question: "What's the maintenance requirement?",
    answer:
      'Powder-coated aluminum systems avoid the staining and sealing cycle of wood, but they still benefit from periodic cleaning and service checks. We review maintenance expectations based on the selected system, lake exposure, and controls package.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Louvered Pergolas in Winnetka, IL',
  description:
    'Motorized louvered pergola planning and installation for Winnetka estates and lakefront homes.',
  provider: {
    '@id': 'https://www.edgpatioshade.com/#organization',
  },
  areaServed: {
    '@type': 'City',
    name: 'Winnetka',
    addressRegion: 'IL',
  },
  url: 'https://www.edgpatioshade.com/service-areas/winnetka-il/louvered-pergolas',
  image: `https://www.edgpatioshade.com${images.systems.pergolas.whitePoolGlass}`,
};

export default function WinnetkaProductPage() {
  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
        <div className="absolute inset-0">
          <Image
            src={images.systems.pergolas.whitePoolGlass}
            alt="White louvered pergola and glass outdoor room used as Winnetka planning reference"
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
              { label: 'Winnetka, IL', href: '/service-areas/winnetka-il' },
              { label: 'Louvered Pergolas' },
            ]}
            className="mb-6"
          />
          <Link
            href="/service-areas/winnetka-il"
            className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Winnetka service area
          </Link>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Louvered Pergolas for Winnetka Estates
            </h1>
            <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
              Motorized roof systems planned around lakefront exposure, estate
              architecture, garden views, privacy, controls, lighting, and
              outdoor room comfort.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={heroContactHref}>
                <Button size="lg">
                  Request a Fit Review
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
                Why This Product Fits Winnetka
              </div>
              <h2 className="section-title mb-6">
                Estate-scale projects need site-specific pergola planning
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Winnetka projects often involve more than adding shade. The roof
                system may need to protect a view, respect the home&apos;s
                architecture, coordinate with a pool or garden, and keep the
                outdoor room comfortable in changing lake weather.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                EDG compares multiple motorized pergola systems and accessory
                paths instead of forcing one manufacturer onto every estate
                property. That matters when beam layout, finish, screens,
                lighting, heat, and controls all affect the result.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                The right structure should feel calm, architectural, and easy
                to use, while preserving the views and privacy that make the
                property work.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.pergolas.whiteScreen}
                alt="Residential louvered pergola with screen used for Winnetka outdoor room planning"
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
              Winnetka Pergola Decisions to Make Early
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary">
              The strongest plans start with exposure, views, structure,
              privacy, finish direction, and control expectations before
              pricing is treated as final.
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
                <h3 className="mb-3 text-lg font-bold text-text-primary">
                  {priority.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
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
                Engineered for Winnetka Estate Properties
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                From Hubbard Woods to lakefront properties and larger garden
                parcels, the pergola has to complement the home and landscape.
                Privacy, side protection, pool or kitchen connections, and
                landscape architecture should all be part of the design phase.
              </p>
              <div className="space-y-4">
                {estateConsiderations.map((item) => (
                  <Card key={item.title} variant="muted" padding="lg">
                    <h3 className="mb-2 text-lg font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <Card variant="dark" padding="lg">
              <h3 className="mb-6 text-xl font-bold text-text-inverse">
                Specification Checks
              </h3>
              <div className="space-y-4">
                {specificationChecks.map((check) => (
                  <div key={check} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand" />
                    <p className="leading-relaxed text-text-inverse-muted">
                      {check}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md border-y border-border bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                images.featuredProjects.karp.hero,
                images.featuredProjects.karp.gallery[1],
              ].map((src, index) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden border border-border bg-surface-dark"
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
                North Shore Project Context
              </div>
              <h2 className="section-title mb-6">
                Use real project references to guide the recommendation
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                Nearby residential project examples help clarify views, roof
                geometry, screen needs, finish direction, and how much of the
                terrace should become a more protected outdoor room.
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
            <h2 className="section-title mb-8">Winnetka Pergola FAQ</h2>
            <div className="divide-y divide-border">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="mb-3 text-lg font-bold text-text-primary">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-text-secondary">
                    {faq.answer}
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
              <div className="label-editorial-brand mb-4 text-edg-brand">
                Next Step
              </div>
              <h2 className="section-title mb-6">
                Ready to Review a Winnetka Pergola Plan?
              </h2>
              <p className="max-w-2xl text-xl leading-relaxed text-text-inverse-muted">
                Send EDG the terrace or patio location, review questions,
                important views, and comfort goals. We will help narrow the
                system, accessories, and installation path.
              </p>
            </div>
            <div className="space-y-4">
              <Link href={bottomContactHref}>
                <Button size="lg" className="w-full">
                  Request Winnetka Fit Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/systems/pergolas/configure">
                <Button size="lg" variant="outline" className="w-full">
                  Design in 3D
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/service-areas/winnetka-il">
                <Button size="lg" variant="outline" className="w-full">
                  Winnetka Service Area
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
