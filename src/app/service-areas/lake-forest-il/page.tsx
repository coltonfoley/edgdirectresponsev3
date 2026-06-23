import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CloudSun,
  FileText,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import * as images from '@/lib/images';
import { generateFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Lake Forest IL Pergolas & Outdoor Living | EDG Patio & Shade',
  description:
    'Motorized pergolas, retractable screens, and permit-aware outdoor living planning for Lake Forest, IL homes near Market Square, Conway Farms, Lake Forest College, and the lakefront.',
  alternates: {
    canonical: '/service-areas/lake-forest-il',
  },
  keywords: [
    'pergola Lake Forest IL',
    'Lake Forest pergola installer',
    'motorized pergola Lake Forest',
    'louvered pergola Lake Forest IL',
    'outdoor living Lake Forest IL',
  ],
  openGraph: {
    title: 'Lake Forest IL Pergolas & Outdoor Living | EDG Patio & Shade',
    description:
      'Premium motorized pergolas, screens, and outdoor living systems planned for Lake Forest homes, architectural expectations, and local permit review.',
  },
};

const localProof = [
  'Spring Grove showroom within a practical drive of Lake Forest',
  'Permit-aware planning for City of Lake Forest building and zoning review',
  'Motorized louvered roofs, screens, heaters, lighting, and controls planned as one system',
  'Design, supply, installation coordination, and long-term service from one outdoor living specialist',
];

const neighborhoods = [
  {
    name: 'East Lake Forest and lakefront properties',
    description:
      'Homes east of Green Bay Road and near Lake Michigan often need shade systems that feel architectural, not temporary. We pay attention to sightlines, wind exposure, drainage, lighting, and how a pergola will look from mature gardens, terraces, and neighboring properties.',
  },
  {
    name: 'Market Square and historic-home settings',
    description:
      'Older Lake Forest homes can have masonry walls, detailed trim, formal patios, and review expectations that punish generic outdoor kits. A motorized pergola or screen package should be scaled to the house, coordinated with finishes, and planned before posts, wiring, or roof attachments are treated as final.',
  },
  {
    name: 'Conway Farms and west-side estates',
    description:
      'Larger lots west of Waukegan Road may have broad patios, pools, outdoor kitchens, and HOA or architectural committee expectations. These projects benefit from a cleaner design package: structure size, column placement, louver direction, screen drops, heaters, controls, and electrical paths.',
  },
  {
    name: 'Wooded, ravine, and Lake Bluff edge lots',
    description:
      'Properties near ravines, mature trees, and the Lake Bluff border often need more than overhead shade. Wind, insects, privacy, low sun, drainage, and landscape integration all affect whether a pergola, screens, or glass should lead the project.',
  },
];

const services = [
  {
    title: 'Motorized louvered pergolas',
    description:
      'Adjustable aluminum roof systems for sun, shade, light rain, lighting, heaters, and a permanent outdoor room feel.',
    icon: CloudSun,
  },
  {
    title: 'Retractable screens and shades',
    description:
      'Side protection for bugs, wind, privacy, and low sun while keeping the outdoor space open when conditions are good.',
    icon: Wind,
  },
  {
    title: 'Permit and review support',
    description:
      'Planning around survey, plot plan, structure classification, accessory-structure rules, electrical needs, and City review.',
    icon: FileText,
  },
  {
    title: 'Complete outdoor room planning',
    description:
      'Pergola, screens, heat, light, controls, drainage, and finish selection coordinated before the project becomes expensive to change.',
    icon: Home,
  },
];

const faqs = [
  {
    question: 'Do Lake Forest pergola projects usually need a permit?',
    answer:
      'Permanent outdoor structures should be verified with the City of Lake Forest before work begins. The City says most home improvement projects require a permit, and its code requires a permit before construction, alteration, repair, or removal of a building or structure. The final answer depends on the exact scope, attachment, electrical work, foundation, and placement.',
  },
  {
    question: 'What makes EDG different from a landscaper or deck builder?',
    answer:
      'EDG specializes in premium outdoor living systems: motorized louvered roofs, exterior screens, lighting, heat, controls, and long-term service. For Lake Forest projects, the value is in planning the full system and review package before the owner is locked into a structure that does not fit the house, yard, or permit path.',
  },
  {
    question: 'Can you help with Lake Forest permit planning?',
    answer:
      'Yes. EDG can help organize the design details, drawings, structure notes, electrical scope, and site questions that affect a City review. The City remains the final authority, and homeowners should confirm requirements with Community Development before construction.',
  },
  {
    question: 'How much does a motorized pergola cost in Lake Forest?',
    answer:
      'Cost depends on size, freestanding versus attached design, finish, screens, heaters, lights, controls, engineering, electrical work, and site conditions. A Lake Forest project should start with photos, dimensions, address, goals, and a permit-aware fit review before comparing budget ranges.',
  },
];

export default function LakeForestServiceAreaPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Lake Forest IL Pergolas and Outdoor Living Systems',
            description:
              'Motorized pergolas, retractable screens, and permit-aware outdoor living planning for Lake Forest, IL homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Lake Forest',
              addressRegion: 'IL',
            },
            url: 'https://www.edgpatioshade.com/service-areas/lake-forest-il',
            image: `https://www.edgpatioshade.com${images.brand.hero.pergola}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <Image
            src={images.brand.hero.pergola}
            alt="Motorized louvered pergola planned for a Lake Forest Illinois outdoor living space"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Lake Forest, IL' },
              ]}
            />
          </div>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Lake Forest, IL
              </span>
              <h1 className="hero-title mb-6 text-white">
                Lake Forest IL Pergolas{' '}
                <span className="text-edg-brand block">
                  Planned for Architecture, Weather, and Review
                </span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                EDG designs and installs motorized pergolas, retractable
                screens, heaters, lighting, and complete outdoor room systems
                for Lake Forest homes from the lakefront to Conway Farms.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=lake-forest&product=pergola&source=lake_forest_hub">
                  <Button size="lg" className="px-8 text-lg">
                    Plan a Lake Forest Pergola
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/service-areas/lake-forest-il/motorized-pergolas">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-white/40 bg-white/10 px-8 text-lg text-white hover:bg-white/20"
                  >
                    See Pergola Options
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {localProof.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-zinc-200"
              >
                <CheckCircle2 className="text-edg-brand mt-0.5 h-4 w-4 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="section-lg bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="label-editorial-brand mb-4">
                Why Lake Forest needs planning
              </div>
              <h2 className="section-title mb-6">
                Premium outdoor rooms are won before the product is ordered
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Lake Forest is not a good place for a one-size-fits-all pergola.
                The homes are varied, the lots are often mature, and the City
                review path can involve building code, zoning, plot plans,
                structure classification, and electrical details. A good project
                starts by deciding what the space must do: shade a west-facing
                terrace, keep bugs off a wooded patio, protect an outdoor
                kitchen, preserve a lakefront view, or create a more useful
                poolside room.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                EDG treats the pergola, screens, controls, heat, light,
                drainage, and review package as one design problem. That keeps
                the final system cleaner, helps avoid awkward post locations,
                and gives the homeowner better information before a premium
                outdoor living budget is committed.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((area) => (
                <Card key={area.name} variant="muted" padding="lg">
                  <MapPin className="text-edg-brand-text mb-5 h-8 w-8" />
                  <h3 className="mb-3 text-xl font-bold">{area.name}</h3>
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
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Lake Forest outdoor living systems
            </div>
            <h2 className="section-title mb-4">
              Built as a system, not a single shade product
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A permanent structure should look right from the house, work in
              Midwest weather, and survive real daily use. EDG helps Lake Forest
              homeowners compare the right order of operations: roof first, side
              protection first, or a full package from the start.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} variant="default" padding="lg">
                <service.icon className="text-edg-brand-text mb-5 h-9 w-9" />
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <Card variant="muted" padding="lg">
              <ShieldCheck className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-2xl font-bold">Review-ready design</h3>
              <p className="text-text-secondary leading-relaxed">
                We review the survey, patio layout, house attachment, pier
                needs, screen openings, electrical scope, and likely City
                questions before calling a layout finished.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <FileText className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-2xl font-bold">Permit-aware guidance</h3>
              <p className="text-text-secondary leading-relaxed">
                Lake Forest publishes online permit application guidance and
                building code resources. We help the design package line up with
                the questions Community Development is likely to ask.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <Phone className="text-edg-brand-text mb-5 h-10 w-10" />
              <h3 className="mb-3 text-2xl font-bold">A useful first call</h3>
              <p className="text-text-secondary leading-relaxed">
                Send photos, rough dimensions, address, known HOA notes, and the
                main problem you want solved. We will help decide whether a
                pergola, screens, or both should lead the plan.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-md bg-surface-muted border-t border-black/5">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="label-editorial-brand mb-4">
              Lake Forest next steps
            </div>
            <h2 className="section-title">Plan the right page next</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/service-areas/lake-forest-il/motorized-pergolas"
              className="group"
              aria-label="Explore Lake Forest motorized pergola options"
            >
              <Card
                variant="default"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-xl font-bold transition-colors">
                  Lake Forest Motorized Pergolas
                </h3>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  How louvered roofs, screens, heaters, lights, and controls
                  should be planned for Lake Forest patios.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Explore Pergolas <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
            <Link
              href="/service-areas/lake-forest-il/zoning-guide"
              className="group"
              aria-label="Read the Lake Forest pergola permit guide"
            >
              <Card
                variant="default"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-xl font-bold transition-colors">
                  Lake Forest Permit Guide
                </h3>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  City permit, building code, accessory-structure, plan, and
                  contact details to review before buying.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Read Permit Notes <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
            <Link
              href="/guides/pergola-cost"
              className="group"
              aria-label="Compare pergola cost drivers"
            >
              <Card
                variant="default"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-xl font-bold transition-colors">
                  Pergola Cost Guide
                </h3>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  Understand the budget drivers before comparing premium
                  louvered roofs with basic patio-cover quotes.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Compare Costs <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="bg-surface-dark text-text-inverse py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Start with a Lake Forest system fit review.
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed">
              Send the patio photos, rough dimensions, address, and your
              must-solve problem. EDG will help narrow the right path before you
              chase a generic pergola quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/guides/pergola-system-fit-review?area=lake-forest&source=lake_forest_hub">
                <Button size="lg">Request Fit Review</Button>
              </Link>
              <a href="tel:+18155810138">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (815) 581-0138
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
