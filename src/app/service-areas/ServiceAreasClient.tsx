'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';

interface ServiceArea {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  featured?: boolean;
  communities?: { name: string; type?: string }[];
}

interface ServiceAreasClientProps {
  areas: ServiceArea[];
}

const whyLocalItems = [
  {
    title: 'We Know Your Climate',
    desc: 'Midwest weather is demanding. We engineer every system for local wind loads, snow loads, and temperature swings.',
  },
  {
    title: 'We Know Your Permits',
    desc: "Every municipality is different. We've worked with building departments across the region and know what each requires.",
  },
  {
    title: "We're Here When You Need Us",
    desc: 'Local means responsive. Service calls, adjustments, and questions handled by people who are nearby.',
  },
];

const mapFeatures = [
  'Design and installation within 60 miles',
  'Same-day consultations often available',
  'Responsive service and support',
  'Local crews—not traveling subcontractors',
];

// Fallback service areas if Sanity returns empty
const fallbackAreas: ServiceArea[] = [
  {
    _id: '1',
    name: 'Lake County, Illinois',
    slug: 'lake-county-il',
    description: 'From Libertyville to Lake Forest, Gurnee to Highland Park. Our home base and most active market.',
    featured: true,
    communities: [{ name: 'Libertyville' }, { name: 'Lake Forest' }, { name: 'Highland Park' }, { name: 'Gurnee' }, { name: 'Vernon Hills' }, { name: 'Lincolnshire' }],
  },
  {
    _id: '2',
    name: 'North Shore Chicago',
    slug: 'north-shore-chicago',
    description: "Wilmette to Winnetka, Glencoe to Kenilworth. Premium outdoor living for the North Shore's finest properties.",
    featured: true,
    communities: [{ name: 'Wilmette' }, { name: 'Winnetka' }, { name: 'Glencoe' }, { name: 'Kenilworth' }, { name: 'Northbrook' }, { name: 'Northfield' }],
  },
  {
    _id: '3',
    name: 'McHenry County, Illinois',
    slug: 'mchenry-county-il',
    description: 'Crystal Lake to Algonquin, Woodstock to Huntley. Bringing refined outdoor spaces to the northwest suburbs.',
    featured: false,
    communities: [{ name: 'Crystal Lake' }, { name: 'Algonquin' }, { name: 'Woodstock' }, { name: 'Huntley' }, { name: 'McHenry' }, { name: 'Cary' }],
  },
  {
    _id: '4',
    name: 'Southeast Wisconsin',
    slug: 'southeast-wisconsin',
    description: "Lake Geneva to Kenosha, Racine to Burlington. Wisconsin's lakefront and beyond.",
    featured: false,
    communities: [{ name: 'Lake Geneva' }, { name: 'Kenosha' }, { name: 'Racine' }, { name: 'Burlington' }, { name: 'Delavan' }, { name: 'Elkhorn' }],
  },
  {
    _id: '5',
    name: 'Naperville & West Suburbs',
    slug: 'naperville-il',
    description: 'From Downers Grove to Plainfield, Aurora to Wheaton. Bringing premium shade solutions to the busy western corridor.',
    featured: false,
    communities: [{ name: 'Naperville' }, { name: 'Lisle' }, { name: 'Bolingbrook' }, { name: 'Aurora' }, { name: 'Warrenville' }, { name: 'Woodridge' }],
  },
  {
    _id: '6',
    name: 'Barrington Area',
    slug: 'barrington-il',
    description: 'Classic estate living meets modern outdoor technology. Serving North, South, and Lake Barrington.',
    featured: false,
    communities: [{ name: 'Barrington' }, { name: 'South Barrington' }, { name: 'Inverness' }, { name: 'Lake Barrington' }, { name: 'Deer Park' }, { name: 'Kildeer' }],
  },
];

export default function ServiceAreasClient({ areas }: ServiceAreasClientProps) {
  const displayAreas = areas.length > 0 ? areas : fallbackAreas;

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
        <Container>
          <div className="max-w-4xl">
            <div className="bg-edg-brand/20 border-edg-brand/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <MapPin className="text-edg-brand h-4 w-4" />
              <span className="text-edg-brand text-sm font-semibold tracking-wider uppercase">
                Local Service
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Serving the Chicago to Milwaukee Corridor
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-gray-300">
              We design and install premium outdoor living systems within 60
              miles of Spring Grove, IL. Local expertise means we understand
              your climate, your municipalities, and your neighborhoods.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Local Matters */}
      <Section className="bg-zinc-100 py-16 dark:bg-zinc-900">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {whyLocalItems.map((item) => (
              <div key={item.title} className="text-center">
                <CheckCircle2 className="text-edg-brand mx-auto mb-4 h-10 w-10" />
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Areas Grid */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Areas We Serve
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Click your area to learn about local projects, considerations, and
            how we can help.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {displayAreas.map((area) => {
              const communities = area.communities?.map(c => c.name) || [];
              return (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group"
                >
                  <div
                    className={`h-full rounded-2xl border p-8 transition-all duration-300 ${
                      area.featured
                        ? 'bg-edg-dark border-edg-dark hover:border-edg-brand text-white'
                        : 'hover:border-edg-brand border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-zinc-900'
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="mb-2 text-2xl font-bold">{area.name}</h3>
                        <p
                          className={
                            area.featured
                              ? 'text-gray-300'
                              : 'text-muted-foreground'
                          }
                        >
                          {area.description}
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1 ${
                          area.featured ? 'text-edg-brand' : 'text-edg-brand'
                        }`}
                      />
                    </div>
                    {communities.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {communities.slice(0, 4).map((community) => (
                          <span
                            key={community}
                            className={`rounded-full px-3 py-1 text-xs ${
                              area.featured
                                ? 'bg-white/10 text-white/80'
                                : 'text-muted-foreground bg-black/5 dark:bg-white/10'
                            }`}
                          >
                            {community}
                          </span>
                        ))}
                        {communities.length > 4 && (
                          <span
                            className={`rounded-full px-3 py-1 text-xs ${
                              area.featured
                                ? 'bg-white/10 text-white/80'
                                : 'text-muted-foreground bg-black/5 dark:bg-white/10'
                            }`}
                          >
                            +{communities.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Based in Spring Grove, IL
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our central location in Spring Grove puts us within easy reach
                of Lake County, McHenry County, the North Shore, and Southeast
                Wisconsin. We're positioned to serve the entire
                Chicago-to-Milwaukee corridor efficiently.
              </p>
              <ul className="mb-8 space-y-3">
                {mapFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-edg-brand h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="rounded-none">
                    Schedule a Consultation{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-none"
                  >
                    <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-edg-dark flex aspect-square items-center justify-center rounded-2xl">
              <div className="p-8 text-center text-white">
                <MapPin className="text-edg-brand mx-auto mb-4 h-16 w-16" />
                <p className="mb-2 text-xl font-bold">Spring Grove, IL</p>
                <p className="text-gray-400">Serving a 60-mile radius</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Not in Our Area? */}
      <Section className="bg-white py-16 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Outside our service area?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              If you're beyond our 60-mile radius, we may still be able to help.
              For larger projects or special circumstances, reach out and we'll
              discuss options—including design consulting with installation by
              qualified local partners.
            </p>
            <Link href="/contact">
              <Button variant="secondary" className="rounded-none">
                Contact Us to Discuss
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
