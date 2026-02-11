'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle2,
  Home,
  Building,
  TreePine,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

interface Community {
  name: string;
  type?: 'residential' | 'mixed' | 'commercial';
}

interface LocalConsideration {
  title: string;
  description: string;
}

interface ServiceAreaClientProps {
  area: {
    name: string;
    slug: string;
    description?: string;
    communities?: Community[];
  };
  heroTitle?: string;
  heroDescription?: string;
  badge?: string;
  communities?: Community[];
  localConsiderations?: LocalConsideration[];
  localKnowledgeTitle?: string;
  localKnowledgeText?: string;
  testimonial?: {
    quote: string;
    author: string;
    location: string;
    project: string;
  };
  popularSystems?: {
    name: string;
    description: string;
    href: string;
    why: string;
  }[];
}

const defaultPopularSystems = [
  {
    name: 'Louvered Pergolas',
    description: 'The most popular choice for outdoor patios. Full weather control—sun, shade, and rain protection with the touch of a button.',
    href: '/systems/pergolas',
    why: 'Perfect for unpredictable Midwest weather',
  },
  {
    name: 'Motorized Shades',
    description: 'Ideal for screened porches, open patios, and pergola sides. Block sun and wind without losing your view.',
    href: '/systems/shades',
    why: 'Great for properties with sun exposure',
  },
  {
    name: 'Glass Enclosures',
    description: "Add protected square footage that's usable year-round. Popular for extending the season on all properties.",
    href: '/systems/enclosures',
    why: 'Maximize your outdoor investment through all seasons',
  },
];

export default function ServiceAreaClient({
  area,
  heroTitle,
  heroDescription,
  badge = 'Service Area',
  communities = [],
  localConsiderations = [],
  localKnowledgeTitle = 'Local Knowledge Matters',
  localKnowledgeText = "We've worked with building departments throughout the area. We know what they require, what they look for, and how to get approvals efficiently.",
  testimonial,
  popularSystems = defaultPopularSystems,
}: ServiceAreaClientProps) {
  const areaSlug = area.slug;
  const areaName = area.name;
  const displayCommunities = communities.length > 0 ? communities : (area.communities || []);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <Section className="bg-edg-dark pt-24 pb-16 text-white md:pt-32">
        <Container>
          <Link
            href="/service-areas"
            className="hover:text-edg-brand mb-8 inline-flex items-center text-sm text-gray-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> All Service Areas
          </Link>
          <div className="max-w-4xl">
            <div className="bg-edg-brand/20 border-edg-brand/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <MapPin className="text-edg-brand h-4 w-4" />
              <span className="text-edg-brand text-sm font-semibold tracking-wider uppercase">
                {badge}
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {heroTitle || `${areaName} Outdoor Living`}
            </h1>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300">
              {heroDescription || area.description || `Premium outdoor living systems for ${areaName}. Local expertise, professional installation.`}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={`/contact?area=${areaSlug}`}>
                <Button size="lg" className="rounded-full">
                  Get a {areaName.split(',')[0]} Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Communities Grid */}
      {displayCommunities.length > 0 && (
        <Section className="bg-white py-20 dark:bg-black">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Communities We Serve in {areaName.split(',')[0]}
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              We've completed projects across {areaName.split(',')[0]}. If your community isn't listed, we likely still serve it—just ask.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {displayCommunities.map((community) => (
                <div
                  key={community.name}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-zinc-50 p-4 dark:border-white/5 dark:bg-zinc-900"
                >
                  {community.type === 'residential' ? (
                    <Home className="text-edg-brand h-5 w-5 shrink-0" />
                  ) : community.type === 'commercial' ? (
                    <Building className="text-edg-brand h-5 w-5 shrink-0" />
                  ) : (
                    <Home className="text-edg-brand h-5 w-5 shrink-0" />
                  )}
                  <span className="font-medium">{community.name}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Local Considerations */}
      {localConsiderations.length > 0 && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  {areaName.split(',')[0]}-Specific Considerations
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Every region has its quirks. Here's what we account for when designing outdoor systems in {areaName.split(',')[0]}.
                </p>
                <div className="space-y-6">
                  {localConsiderations.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <CheckCircle2 className="text-edg-brand mt-1 h-6 w-6 shrink-0" />
                      <div>
                        <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-edg-dark rounded-2xl p-8 text-white">
                <TreePine className="text-edg-brand mb-6 h-12 w-12" />
                <h3 className="mb-4 text-2xl font-bold">{localKnowledgeTitle}</h3>
                <p className="mb-6 text-gray-300">{localKnowledgeText}</p>
                <p className="text-gray-300">
                  That local experience saves you time and prevents costly permit delays or redesigns.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Popular Systems */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Popular Systems in {areaName.split(',')[0]}
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            The systems {areaName.split(',')[0]} homeowners choose most—each engineered for local conditions.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {popularSystems.map((system) => (
              <div
                key={system.name}
                className="rounded-2xl border border-black/5 bg-zinc-50 p-8 dark:border-white/5 dark:bg-zinc-900"
              >
                <h3 className="mb-3 text-xl font-bold">{system.name}</h3>
                <p className="text-muted-foreground mb-4">{system.description}</p>
                <p className="text-edg-brand mb-6 text-sm font-medium">→ {system.why}</p>
                <Link href={system.href}>
                  <Button variant="secondary" size="sm" className="w-full rounded-lg">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {testimonial && (
        <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="mb-8 text-2xl leading-relaxed font-medium md:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="text-lg font-bold">{testimonial.author}</div>
                <div className="text-muted-foreground">
                  {testimonial.location} • {testimonial.project}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-edg-brand text-edg-dark py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Transform Your {areaName.split(',')[0]} Outdoor Space?
            </h2>
            <p className="text-edg-dark/80 mb-8 text-xl">
              Schedule a free consultation. We'll visit your property, discuss your vision, and show you what's possible.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href={`/contact?area=${areaSlug}`}>
                <Button size="lg" variant="secondary" className="bg-edg-dark hover:bg-edg-dark/90 rounded-full text-white">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button size="lg" variant="secondary" className="border-edg-dark/30 text-edg-dark hover:bg-edg-dark/10 rounded-full">
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
