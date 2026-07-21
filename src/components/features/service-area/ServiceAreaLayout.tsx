'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Shield,
  Wind,
  Snowflake,
  Home,
  FileCheck,
} from 'lucide-react';
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
  snowflake: Snowflake,
  wind: Wind,
  shield: Shield,
  home: Home,
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
    <div className="min-h-screen bg-white">
      {/* ========== SPLIT HERO ========== */}
      <section className="relative flex min-h-screen flex-col md:flex-row">
        {/* LEFT: Content */}
        <div className="z-10 flex items-center justify-center bg-white p-8 md:w-1/2 md:p-16 lg:p-24">
          <div className="max-w-xl">
            <div className="mb-8 inline-flex items-center gap-2">
              <span className="bg-edg-brand h-px w-8"></span>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                Service Area
              </span>
            </div>

            <h1 className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter text-black md:text-7xl">
              {location}, {state} <br />
              <span className="mt-2 block text-4xl font-medium tracking-normal text-gray-400 md:text-5xl">
                Outdoor Living.
              </span>
            </h1>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              {description}
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <TrackedLink href={contactHref}>
                <Button className="bg-edg-brand rounded-none px-8 py-6 text-lg font-bold tracking-wider text-black uppercase hover:bg-black hover:text-white">
                  Request a Quote
                </Button>
              </TrackedLink>
            </div>

            {/* Local Zoning / Info Strip */}
            <div className="border-t border-black/10 pt-8">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="text-edg-brand h-5 w-5" />
                <span className="text-sm font-bold tracking-wide uppercase">
                  Serving Zip Codes:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-bold text-gray-600"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative min-h-[50vh] md:min-h-screen md:w-1/2">
          <Image
            src={heroImage}
            alt={`Outdoor living project in ${location}, ${state}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* ========== EDITORIAL CHALLENGES ========== */}
      <Section className="border-y border-black/5 bg-zinc-50 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="mb-6 text-4xl font-bold tracking-tighter">
                Built for {location}.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-500">
                We don't use "one size fits all" kits. Every system is
                engineered for specific local wind loads, snow ratings, and
                architectural styles.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-8 md:grid-cols-2">
                {challenges.map((challenge, i) => {
                  const Icon = iconMap[challenge.icon] || Shield;
                  return (
                    <div
                      key={i}
                      className="group border border-black/5 bg-white p-8 transition-colors hover:border-black"
                    >
                      <Icon className="group-hover:text-edg-brand mb-6 h-8 w-8 text-black transition-colors" />
                      <h3 className="mb-3 text-xl font-bold">
                        {challenge.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        {challenge.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== LOCAL LINKS ========== */}
      <Section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter">
              More for {location} Homeowners
            </h2>
            <div className="grid gap-4">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group flex items-center justify-between border border-black/10 p-6 transition-all hover:border-black hover:bg-zinc-50"
                >
                  <span className="text-lg font-bold">{link.title}</span>
                  <ArrowRight className="h-5 w-5 text-gray-300 transition-colors group-hover:text-black" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
