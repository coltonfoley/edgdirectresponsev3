import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Hammer,
  Layers3,
  Ruler,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { buildContactHref } from '@/lib/contact-links';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Custom Steel Pergolas & Shade Structures | EDG',
  description:
    'Custom steel pergola design and installation for residential, rooftop, hospitality, and commercial spaces. EDG coordinates structure, finish, engineering, and site fit.',
  keywords: [
    'custom steel pergola',
    'steel pergola installer',
    'custom metal pergola',
    'steel shade structure',
    'commercial steel pergola',
    'rooftop steel pergola',
    'steel pergola Chicago',
  ],
  alternates: { canonical: '/systems/steel-pergolas' },
  openGraph: {
    title: 'Custom Steel Pergolas & Shade Structures | EDG',
    description:
      'Project-specific steel pergolas for architectural shade, long spans, rooftops, hospitality spaces, and custom outdoor rooms.',
    images: [{ url: images.featuredProjects.carmines.hero }],
  },
};

const contactHref = buildContactHref({
  type: 'fit-review',
  product: 'steel-pergola',
  source: 'steel_pergolas_page',
});

const fitReasons = [
  {
    icon: Ruler,
    title: 'Longer or cleaner spans',
    description:
      'Steel can deserve review when the layout needs fewer posts, a wider opening, a cantilever, or a frame that follows unusual architecture. Final member sizes and spans still depend on engineering and the site.',
  },
  {
    icon: Building2,
    title: 'Rooftop and commercial conditions',
    description:
      'Roof decks, hospitality patios, multifamily amenities, and other exposed spaces often make attachment, weight, access, wind, waterproofing, and operations part of the pergola decision.',
  },
  {
    icon: Hammer,
    title: 'Custom architectural form',
    description:
      'Straight, angled, curved, open-slat, and project-specific frame concepts can be evaluated around the building instead of forcing every project into a stock footprint.',
  },
  {
    icon: Layers3,
    title: 'Integrated outdoor features',
    description:
      'Lighting, fans, heaters, privacy elements, shade components, and surrounding finishes can be planned with the structure. Compatibility and attachment details are confirmed before they enter the proposal.',
  },
];

const projectPaths = [
  {
    title: 'Open steel pergola or trellis',
    description:
      'An architectural frame with open overhead members for filtered shade, spatial definition, climbing plants, or a clean modern profile. It is not a rain roof unless a separate roof or canopy system is specified.',
  },
  {
    title: 'Steel shade structure',
    description:
      'A steel frame coordinated with a fixed shade, canopy, or roof concept when the project needs more overhead coverage. Drainage, snow, wind, waterproofing, and maintenance must be resolved for the selected assembly.',
  },
  {
    title: 'Steel-supported louvered system',
    description:
      'A motorized aluminum louvered roof may use custom steel beams or reinforced columns where geometry or span requires it. That is a hybrid structural solution, not an all-steel louvered pergola.',
  },
];

const process = [
  {
    number: '01',
    title: 'Define the job',
    description:
      'Share the address, photos, rough dimensions, desired coverage, and how the space needs to work.',
  },
  {
    number: '02',
    title: 'Compare directions',
    description:
      'EDG reviews steel, aluminum louvered, and other shade paths against the site instead of selecting material by keyword alone.',
  },
  {
    number: '03',
    title: 'Coordinate structure',
    description:
      'Attachment, footings, loads, drainage, finish, access, and permit documentation are assigned for the actual project.',
  },
  {
    number: '04',
    title: 'Fabricate and install',
    description:
      'After scope and approvals are settled, the structure is fabricated or supplied for the confirmed installation path.',
  },
];

const faqs = [
  {
    question: 'Does EDG offer custom steel pergolas?',
    answer:
      'Yes. EDG can review custom steel pergolas and steel shade structures for residential, rooftop, hospitality, multifamily, and commercial applications. Availability, fabrication path, installation coverage, engineering, finish, and warranty responsibilities are confirmed for the specific project before proposal.',
  },
  {
    question: 'Is a steel pergola better than an aluminum pergola?',
    answer:
      'Neither material is automatically better. Steel can be useful for custom geometry, structural stiffness, and certain long-span or architectural conditions. Aluminum is lighter, naturally corrosion resistant, and is the normal material for many integrated motorized louvered systems. The site and desired roof function should decide the direction.',
  },
  {
    question: 'Can a steel pergola provide rain protection?',
    answer:
      'An open steel pergola does not provide dependable rain protection by itself. Rain coverage requires a coordinated fixed roof, canopy, louvered system, or another specified assembly with a deliberate drainage path. EDG separates the frame from the roof function during planning.',
  },
  {
    question: 'Do steel pergolas rust?',
    answer:
      'Steel needs an exterior coating and a maintenance plan. Galvanizing, primer, paint, powder coating, connection details, drainage, exposure, scratches, and coastal conditions can all affect corrosion performance. The proposed finish and repair expectations should be reviewed before fabrication.',
  },
  {
    question: 'Can a steel pergola go on a roof deck?',
    answer:
      'Sometimes, but rooftop work is a structural and building-envelope question first. Weight, wind uplift, attachment, waterproofing, access, fire and life-safety requirements, landlord approval, and municipal review can all affect feasibility.',
  },
  {
    question: 'How much does a custom steel pergola cost?',
    answer:
      'Pricing depends on size, steel weight, geometry, finish, engineering, footings or building attachment, access, roof or shade components, electrical work, delivery, and installation. EDG starts with photos, dimensions, location, and intended use before setting a useful planning range.',
  },
];

export default function SteelPergolasPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Custom Steel Pergola Design and Installation',
    description:
      'Project-specific steel pergola and shade-structure planning for residential, rooftop, hospitality, and commercial outdoor spaces.',
    url: 'https://www.edgpatioshade.com/systems/steel-pergolas',
    image: `https://www.edgpatioshade.com${images.featuredProjects.carmines.hero}`,
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Systems', url: '/systems' },
    { name: 'Steel Pergolas' },
  ]);

  return (
    <div className="text-text-primary min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <section className="bg-edg-dark relative overflow-hidden pt-28 pb-20 text-white md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src={images.featuredProjects.carmines.gallery[1]}
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
              { label: 'Systems', href: '/systems' },
              { label: 'Steel Pergolas' },
            ]}
            className="mb-8 text-zinc-300"
          />
          <div className="max-w-4xl">
            <div className="label-editorial text-edg-brand mb-5">
              Custom Architectural Shade
            </div>
            <h1 className="mb-6 text-5xl leading-none font-bold md:text-7xl">
              Custom steel pergolas planned around the structure.
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
              Steel can open a different design path for long spans, rooftops,
              commercial patios, custom geometry, and fixed architectural shade.
              EDG compares the structure, roof function, finish, engineering,
              and installation path before recommending it.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={contactHref}>
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides/steel-vs-aluminum-pergolas">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Compare Steel and Aluminum
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-border bg-surface-muted border-b py-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                'Structure',
                'Member sizes, spans, footings, and attachment are project-specific.',
              ],
              [
                'Coverage',
                'Open slats, fixed shade, canopy, or a separate roof system must be defined.',
              ],
              [
                'Finish',
                'Coating, corrosion exposure, care, and warranty are confirmed before fabrication.',
              ],
            ].map(([title, description]) => (
              <div key={title} className="border-edg-brand border-l-2 pl-5">
                <h2 className="mb-2 text-sm font-bold tracking-wider uppercase">
                  {title}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">System Fit</div>
            <h2 className="section-title mb-5">
              Where steel deserves a serious review
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Steel is not a blanket upgrade and it is not interchangeable with
              a motorized aluminum louvered roof. It becomes useful when its
              structural and architectural qualities solve a real project
              condition.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {fitReasons.map((reason) => (
              <Card key={reason.title} variant="muted" padding="lg">
                <IconWrapper
                  icon={reason.icon}
                  variant="brand"
                  size="lg"
                  className="mb-5"
                />
                <h3 className="mb-3 text-2xl font-bold">{reason.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-edg-dark text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="label-editorial text-edg-brand mb-4">
                Define the assembly
              </div>
              <h2 className="section-title mb-6 text-white">
                “Steel pergola” can describe three different projects.
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                The frame material alone does not tell you whether the project
                provides filtered shade, a fixed roof, or adjustable rain
                management. EDG identifies the intended function first, then
                coordinates the steel and surrounding systems around it.
              </p>
            </div>
            <div className="space-y-4">
              {projectPaths.map((path) => (
                <div
                  key={path.title}
                  className="border border-white/15 bg-white/5 p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {path.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-300">
                    {path.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.featuredProjects.carmines.hero}
                alt="Carmine's Chicago motorized pergola with steel structural reinforcement"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="label-editorial-brand mb-4">
                Verified EDG project condition
              </div>
              <h2 className="section-title mb-6">
                Carmine&apos;s used steel where the span needed it.
              </h2>
              <p className="text-text-secondary mb-5 text-lg leading-relaxed">
                At Carmine&apos;s in Chicago, EDG planned a multi-bay motorized
                aluminum louvered system around an angled, cantilevered patio.
                Custom steel beams and reinforced columns helped reduce
                unnecessary posts and preserve restaurant seating.
              </p>
              <p className="text-text-secondary mb-8 leading-relaxed">
                This is verified proof of a steel-supported louvered project,
                not an all-steel pergola. It shows why material decisions should
                follow the geometry, load path, and finished-space goals.
              </p>
              <Link href="/projects/carmines">
                <Button variant="outline">
                  View the Carmine&apos;s Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Project Path</div>
            <h2 className="section-title mb-5">
              From quote request to installed structure
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Custom steel work becomes predictable when the responsibilities
              for design, engineering, fabrication, finish, delivery, and
              installation are clear before production.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-edg-brand border-t-2 pt-5"
              >
                <div className="text-edg-brand-text mb-3 text-sm font-bold tracking-widest">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-lg border-border bg-surface-muted border-y">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="label-editorial-brand mb-4">Comparison</div>
              <h2 className="section-title mb-5">
                Compare the complete project, not just raw material strength.
              </h2>
              <p className="text-text-secondary max-w-3xl text-lg leading-relaxed">
                Steel can provide stiffness and custom structural freedom.
                Aluminum offers lower weight, strong corrosion resistance, and
                mature integrated louvered-roof systems. The useful comparison
                includes roof function, coating, access, footings, attachment,
                maintenance, controls, drainage, and the local review path.
              </p>
            </div>
            <Link href="/guides/steel-vs-aluminum-pergolas">
              <Button size="lg" className="w-full justify-between">
                Read Steel vs. Aluminum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="section-lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">
                Steel pergola planning questions
              </h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <Card key={faq.question} variant="muted" padding="lg">
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

      <Section className="section-lg bg-edg-dark text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <div className="label-editorial text-edg-brand mb-4">
                Start with the site
              </div>
              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                Is steel the right pergola path for your project?
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
                Send wide photos, rough dimensions, location, desired coverage,
                and any drawings you already have. EDG will help determine
                whether the project points toward custom steel, a motorized
                aluminum system, or another shade structure.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Residential and commercial review',
                'Rooftop and unusual-site screening',
                'Structure, finish, and roof-function comparison',
              ].map((item) => (
                <div key={item} className="flex gap-3 text-zinc-200">
                  <CheckCircle2 className="text-edg-brand mt-0.5 h-5 w-5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
              <Link href={contactHref} className="block pt-3">
                <Button size="lg" className="w-full justify-between">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
