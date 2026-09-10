import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LinkButton, buttonClassName } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { buildContactHref } from '@/lib/contact-links';
import { generateArticleSchema } from '@/lib/schema';
import * as images from '@/lib/images';

const quoteHref = buildContactHref({
  type: 'price',
  product: 'enclosure',
  source: 'glass_patio_enclosure_cost',
});

export const metadata: Metadata = {
  title: 'Glass Patio Enclosure Cost: 2026 Planning Guide | EDG',
  description:
    'See how EDG plans glass patio enclosures, what a broad glass-wall planning band covers, and how roof, structure, operation, and installation shape the project.',
  keywords: [
    'glass patio enclosure cost',
    'cost to enclose patio with glass',
    'glass porch enclosure cost',
    'sliding glass patio walls cost',
    'retractable glass enclosure cost',
  ],
  alternates: {
    canonical: '/guides/glass-patio-enclosure-cost',
  },
  openGraph: {
    images: [{ url: '/opengraph-image' }],
    title: 'Glass Patio Enclosure Cost: 2026 Planning Guide | EDG',
    description:
      'A homeowner guide to EDG glass enclosure planning, including a broad glass-wall planning band and the work required for a complete outdoor room.',
    type: 'article',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

const articleSchema = generateArticleSchema({
  title: 'Glass Patio Enclosure Cost: 2026 Planning Guide',
  description:
    'A homeowner guide to how EDG plans glass patio enclosures, from opening measurements and roof structure through installation and care.',
  url: 'https://www.edgpatioshade.com/guides/glass-patio-enclosure-cost',
  image: `https://www.edgpatioshade.com${images.systems.enclosures.lumonPatio}`,
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  category: 'Glass Enclosure Cost',
});

export default function GlassPatioEnclosureCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <section className="bg-edg-dark pt-32 pb-20 text-white md:pt-40">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Glass Patio Enclosure Cost' },
            ]}
            className="mb-8"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-edg-brand mb-5 text-sm font-bold tracking-widest uppercase">
                2026 cost and scope guide
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
                Glass patio enclosure cost: what changes the installed price
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
                Start with how you want the patio to work. EDG measures the
                opening, reviews the roof and structure, and designs the glass,
                operation, comfort features, and installation plan around the
                way you use the space.
              </p>
              <div className="flex flex-wrap gap-4">
                <TrackedLink
                  href={quoteHref}
                  className={buttonClassName({ size: 'lg' })}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <LinkButton
                  href="#price-examples"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white hover:text-black"
                >
                  See the price range
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.systems.enclosures.lumonPatio}
                alt="Frameless sliding glass walls enclosing a patio"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section id="price-examples" className="bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="label-editorial-brand mb-4">What to budget</div>
            <h2 className="section-title mb-6">Glass patio enclosure pricing</h2>
            <div className="mb-6 bg-zinc-950 p-6 text-white md:p-8">
              <p className="text-4xl font-bold">$25k–$50k+</p>
              <p className="mt-3 text-zinc-300">
                A broad planning range for glass walls under an existing or
                planned cover, including the system, freight, and an installation allowance.
              </p>
            </div>
            <p className="text-text-secondary mb-4 text-lg leading-relaxed">
              The size and number of openings, panel operation, and finish
              choices determine where your project falls. Roof or pergola work,
              structural preparation, permits, drainage, electrical, tax, and
              unusual site work are priced separately.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              EDG provides a project-specific quote after reviewing your patio
              and the enclosure you want to create.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Two project paths</div>
            <h2 className="section-title mb-4">
              Existing covered patio vs. roof plus glass
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              The same glass wall can live in two very different projects. The
              roof and support structure determine how much of the installed
              scope has already been solved.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                If the covered patio already exists
              </h3>
              <p className="text-text-secondary leading-relaxed">
                EDG checks whether your roof supports the proposed glass system
                and whether the floor and drainage need preparation. A suitable
                existing cover lets the project focus on enclosing the space
                without building a new roof.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <h3 className="mb-4 text-2xl font-bold">
                If the roof and glass are new
              </h3>
              <p className="text-text-secondary leading-relaxed">
                EDG designs the cover and enclosure together, placing columns
                around the glass openings and coordinating roof drainage,
                lighting, and heating before installation. This is a complete
                outdoor-room project with a separate budget for the cover.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Configuration</div>
            <h2 className="section-title mb-4">
              Sliding vs. folding glass walls
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Sliding and folding glass walls use different opening paths. EDG
              plans the movement, hardware, support, and clear opening around
              the structure and the way you want to use the patio.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="muted" padding="lg">
              <h3 className="mb-3 text-2xl font-bold">Sliding layout</h3>
              <p className="text-text-secondary leading-relaxed">
                Panels slide along a track and overlap when open. This keeps
                their movement along the wall, without a folding stack swinging
                into the patio. The number of tracks and panels determines how
                much of the opening can be cleared.
              </p>
            </Card>
            <Card variant="muted" padding="lg">
              <h3 className="mb-3 text-2xl font-bold">
                Folding or retractable layout
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Panels fold and stack to the side, allowing a broad opening
                between the patio and yard. The stack needs room beside the
                opening, so EDG positions it clear of walkways and furniture.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-edg-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-edg-brand mb-4 text-sm font-bold tracking-widest uppercase">
              Ready for a project-specific number?
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Let’s plan your glass enclosure.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Tell us where your project is and how you want to use the patio.
              Photos and measurements are welcome if you have them. Our team
              handles design, permitting, installation, and care in our local
              service areas.
            </p>
            <TrackedLink
              href={quoteHref}
              className={buttonClassName({ size: 'lg' })}
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <Link href="/systems/enclosures" className="hover:text-white">
                Explore glass enclosures
              </Link>
              <Link
                href="/outdoor-rooms/pergola-glass-outdoor-room"
                className="hover:text-white"
              >
                See the pergola + glass plan
              </Link>
              <Link
                href="/guides/motorized-pergola-permits-hoa-engineering"
                className="hover:text-white"
              >
                Review permits and engineering
              </Link>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
