'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import {
  ArrowRight,
  Maximize2,
  Droplets,
  Wind,
  Phone,
  ChevronRight,
  Plus
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg',
    alt: 'Commercial glass enclosure at night with outdoor dining',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-pergola-glass-enclosure-day-dining-01.jpg',
    alt: 'Retractable glass panels open on commercial patio during the day',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-pergola-glass-enclosure-hanging-lights-01.jpg',
    alt: 'Glass wall system with elegant hanging lights',
  },
  {
    type: 'image' as const,
    src: '/images/enclosures/commercial-glass-enclosure-interior-wood-deck-01.jpg',
    alt: 'Interior view of glass enclosure on wood deck',
  },
];

const specs = [
  { label: 'Max Height', value: "118 inches" },
  { label: 'Glass', value: '10mm Tempered' },
  { label: 'Operation', value: 'Slide & Turn' },
  { label: 'Profile', value: 'Frameless' },
];

export default function EnclosuresPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ========== HERO: SPLIT SCREEN PRODUCT ========== */}
      <section className="pt-32 pb-12 lg:min-h-screen flex flex-col justify-center">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <div className="text-edg-brand-text font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-black"></div>
                Year-Round Living
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black leading-[0.9]">
                Glass <br /> Enclosures.
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-md">
                Frameless retractable glass walls that stack completely open. Add protected square footage without the construction costs of an addition.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                <TrackedLink href="/contact?type=price&product=enclosure">
                  <Button className="bg-black text-white hover:bg-edg-brand hover:text-black rounded-none px-8 py-6 text-lg font-bold uppercase tracking-wider w-full sm:w-auto">
                    Configure System
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-edg-brand transition-colors">
                    <span className="h-px w-8 bg-black/20"></span>
                    Speak to a designer
                  </div>
                </TrackedPhoneLink>
              </div>

              {/* Quick Specs - Minimal */}
              <div className="border-t border-black/10 pt-8">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  {specs.map((s) => (
                    <div key={s.label}>
                      <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">{s.label}</span>
                      <span className="font-bold text-black">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              {/* Custom Sharp Gallery */}
              <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden">
                <ProductGallery items={galleryImages} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== EDITORIAL FEATURES ========== */}
      <Section className="py-24 border-t border-black/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-8 leading-tight">
                The view, <br /> uninterrupted.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our system is frameless. Vertical mullions are gone. When closed, it's a seamless wall of glass. When open, the panels stack neatly against the wall, restoring your full opening.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">True Open Air</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Unlike sliding doors that always block 50% of the opening, our slide-and-turn system opens 100%.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Weather Protection</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Transparent weather strips between panels seal out rain and wind drafts.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Wind className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Impact Rated</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">10mm tempered safety glass withstands impact and high wind loads standard.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-12 text-white flex flex-col justify-between min-h-[500px]">
              <div>
                <h3 className="text-edg-brand font-bold uppercase tracking-widest text-sm mb-6">Configurations</h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-2xl font-bold mb-2">Slide & Turn</div>
                    <p className="text-gray-400">Panels slide individually and pivot open against the wall. Best for corners and curves.</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Frameless Sliding</div>
                    <p className="text-gray-400">Multi-track system where panels slide behind each other. Lower profile threshold.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-8">
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                  <span>Download Spec Sheet</span>
                  <ArrowRight className="h-4 w-4 text-edg-brand" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-black text-white py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Extends your season.
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-md">
                Turn your covered patio into a 3-season room instantly.
              </p>
              <TrackedLink href="/contact?type=price&product=enclosure">
                <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-10 py-6 text-lg font-bold uppercase tracking-wider">
                  Start Quote
                </Button>
              </TrackedLink>
            </div>
            <div className="border-l border-white/20 pl-16 hidden md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold uppercase tracking-wide">Install Options</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Recessed Floor Track
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Surface Mounted Track
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Corner Opening (No Post)
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Keyed Cylinder Lock
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
