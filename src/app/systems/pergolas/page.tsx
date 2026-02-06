'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import {
  ArrowRight,
  Sun,
  CloudRain,
  Snowflake,
  Wifi,
  ChevronRight,
  Minus,
  Plus,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-black-r-blade-01.jpg',
    alt: 'Modern black R-Blade pergola installation',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
    alt: 'Gray bronze R-Blade with white louvers',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg',
    alt: 'Gray and white R-Shade over outdoor kitchen',
  },
  {
    type: 'image' as const,
    src: '/images/pergolas/residential-white-r-blade-led-strip.jpg',
    alt: 'White R-Blade with integrated LED lighting',
  },
];

const specs = [
  { label: 'Max Span', value: "23' (Single Bay)" },
  { label: 'Rotation', value: '135°' },
  { label: 'Wind Load', value: '110 MPH' },
  { label: 'Snow Load', value: '60 PSF' },
  { label: 'Material', value: '6061 T6 Aluminum' },
];

export default function PergolasPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ========== HERO: SPLIT SCREEN PRODUCT ========== */}
      <section className="pt-32 pb-12 lg:min-h-screen flex flex-col justify-center">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <div className="text-edg-brand-text font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-black"></div>
                Core System
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black leading-[0.9]">
                The Motorized <br /> Pergola.
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-md">
                Architectural shade control. 135° of rotation gives you sun when you want it, and a watertight seal when you don't.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                <TrackedLink href="/contact?type=price&product=pergola">
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
                Engineered for the <br /> Chicago Climate.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Most "pergolas" are decorative. Ours are architectural machines. Built from extruded aircraft-grade aluminum and powder-coated to marine standards, they don't rust, warp, or require painting. Ever.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Snowflake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Heavy Snow Loads</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Engineered for 60psf+, handling our heaviest wet snowfalls without issue.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <CloudRain className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Integrated Drainage</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Hidden gutters inside the beams channel water down the posts and away from your patio.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Smart Connection</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Operate via app, remote, or voice. Rain sensors automatically close the roof when weather strikes.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-12 text-white flex flex-col justify-between min-h-[500px]">
              <div>
                <h3 className="text-edg-brand font-bold uppercase tracking-widest text-sm mb-6">Technical Layout</h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-2xl font-bold mb-2">Bi-Climatic</div>
                    <p className="text-gray-400">Natural ventilation when slightly open, creating a cooling updraft.</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Flat, not slanted.</div>
                    <p className="text-gray-400">The louvers are water-managed, so the frame stays perfectly level for a modern architectural look.</p>
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

      {/* ========== VISUAL CONFIGURATOR (Simplified) ========== */}
      <Section className="bg-zinc-50 py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Make it yours.</h2>
            <p className="text-gray-500">Standard colors ship in 3-4 weeks. Custom RAL matching available.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Traffic White", hex: "#FFFFFF" },
              { name: "Jet Black", hex: "#000000" },
              { name: "Anthracite", hex: "#2D3748" },
              { name: "Sparkle Grey", hex: "#718096" }
            ].map((c) => (
              <div key={c.name} className="bg-white p-6 border border-black/5 text-center group hover:border-black/20 transition-colors">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 border border-black/10 shadow-sm" style={{ backgroundColor: c.hex }}></div>
                <div className="font-bold text-sm text-black">{c.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-black text-white py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready for a quote?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-md">
                We can provide a preliminary price range with just a photo of your space and rough dimensions.
              </p>
              <TrackedLink href="/contact?type=price&product=pergola">
                <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-10 py-6 text-lg font-bold uppercase tracking-wider">
                  Start Quote
                </Button>
              </TrackedLink>
            </div>
            <div className="border-l border-white/20 pl-16 hidden md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold uppercase tracking-wide">Included in every project</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Site Laser Measure
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Permit Packet Creation
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Freight & Delivery
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    White-Glove Installation
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
