'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, MapPin, Shield, Wind, Snowflake, Home, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { buildContactHref } from '@/lib/contact-links';

interface ServiceAreaLayoutProps {
  location: string;
  state: string;
  zipCodes: string[];
  tagline: string;
  description: string;
  heroImage: string;
  challenges: {
    title: string;
    description: string;
    icon: string;
  }[];
  links: {
    title: string;
    href: string;
  }[];
}

const iconMap: Record<string, LucideIcon> = {
  'snowflake': Snowflake,
  'wind': Wind,
  'shield': Shield,
  'home': Home,
  'file-check': FileCheck,
};

export function ServiceAreaLayout({
  location,
  state,
  zipCodes,
  description,
  heroImage,
  challenges,
  links,
}: ServiceAreaLayoutProps) {
  const contactHref = buildContactHref({
    type: 'quote',
    location: `${location}, ${state}`,
    source: 'service_area_hero',
  });

  return (
    <main className="bg-white min-h-screen">
      {/* ========== SPLIT HERO ========== */}
      <section className="min-h-screen flex flex-col md:flex-row relative">
        {/* LEFT: Content */}
        <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="h-px w-8 bg-edg-brand"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Area</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-[0.9]">
              {location}, {state} <br />
              <span className="text-gray-400 text-4xl md:text-5xl tracking-normal font-medium block mt-2">Outdoor Living.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <TrackedLink href={contactHref}>
                <Button className="bg-edg-brand text-black hover:bg-black hover:text-white rounded-none px-8 py-6 text-lg font-bold uppercase tracking-wider">
                  Get a {location} Quote
                </Button>
              </TrackedLink>
            </div>

            {/* Local Zoning / Info Strip */}
            <div className="border-t border-black/10 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-edg-brand" />
                <span className="font-bold text-sm uppercase tracking-wide">Serving Zip Codes:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {zipCodes.map((zip) => (
                  <span key={zip} className="px-3 py-1 bg-zinc-100 text-xs font-bold text-gray-600 border border-zinc-200">
                    {zip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="md:w-1/2 relative min-h-[50vh] md:min-h-screen">
          <Image
            src={heroImage}
            alt={`Luxury pergola in ${location}, ${state}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* ========== EDITORIAL CHALLENGES ========== */}
      <Section className="py-24 bg-zinc-50 border-y border-black/5">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold tracking-tighter mb-6">Built for {location}.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We don't use "one size fits all" kits. Every system is engineered for specific local wind loads, snow ratings, and architectural styles.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {challenges.map((challenge, i) => {
                  const Icon = iconMap[challenge.icon] || Shield;
                  return (
                    <div key={i} className="bg-white border border-black/5 p-8 hover:border-black transition-colors group">
                      <Icon className="h-8 w-8 text-black mb-6 group-hover:text-edg-brand transition-colors" />
                      <h3 className="font-bold text-xl mb-3">{challenge.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== LOCAL LINKS ========== */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-12">More for {location} Homeowners</h2>
            <div className="grid gap-4">
              {links.map((link, i) => (
                <Link key={i} href={link.href} className="flex items-center justify-between p-6 border border-black/10 hover:bg-zinc-50 hover:border-black transition-all group">
                  <span className="font-bold text-lg">{link.title}</span>
                  <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-black transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
