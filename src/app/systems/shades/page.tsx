'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import {
  ArrowRight,
  Wind,
  Sun,
  Eye,
  Shield,
  Phone,
  ArrowBigUp,
  ChevronRight,
  Plus
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const galleryImages = [
  {
    type: 'image' as const,
    src: '/images/shades/shade-deployed-screens-01.jpg',
    alt: 'Motorized mesh screens deployed on white pergola',
  },
  {
    type: 'image' as const,
    src: '/images/shades/shade-patio-close-01.jpg',
    alt: 'Exterior screen shades providing sun protection on patio',
  },
  {
    type: 'image' as const,
    src: '/images/shades/commercial-white-r-blade-screens-lake.jpg',
    alt: 'Commercial pergola with retractable shade screens overlooking lake',
  },
  {
    type: 'image' as const,
    src: '/images/shades/shades-hero.jpg',
    alt: 'Pergola with solid shade panel closed for privacy',
  },
];

const specs = [
  { label: 'Max Width', value: "20' (Single Span)" },
  { label: 'Wind Rating', value: '35 MPH' },
  { label: 'UV Block', value: 'Up to 97%' },
  { label: 'Fabric', value: 'Vinyl-Coated Polyester' },
];

export default function ShadesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ========== HERO: SPLIT SCREEN PRODUCT ========== */}
      <section className="pt-32 pb-12 lg:min-h-screen flex flex-col justify-center">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <div className="text-edg-brand-text font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-black"></div>
                Sun & Wind Protection
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black leading-[0.9]">
                Retractable <br /> Screens.
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-md">
                Block 90% of wind and solar heat without losing your view. The architectural solution for exposed patios.
              </p>

              <div className="flex flex-col gap-4 mb-12">
                <TrackedLink href="/contact?type=price&product=shades">
                  <Button className="bg-black text-white hover:bg-edg-brand hover:text-black rounded-none px-8 py-6 text-lg font-bold uppercase tracking-wider w-full sm:w-auto">
                    Configure System
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-edg-brand-text transition-colors">
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
                No more "blown out" screeens.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Traditional shades act like sails in the wind. Our MagnaTrack systems use powerful neodymium magnets to keep the fabric tensioned and secure—even in 35 mph gusts.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Wind className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Wind Resistant</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Rated for wind loads that would rip standard screens apart. Self-correcting track technology.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Sun className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Thermal Control</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Reduces patio temperature by up to 20°F by blocking solar gain before it hits the glass.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="h-10 w-10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">View Preservation</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Darker fabric colors absorb glare, allowing you to see through clearly while blocking UV.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-12 text-white flex flex-col justify-between min-h-[500px]">
              <div>
                <h3 className="text-edg-brand font-bold uppercase tracking-widest text-sm mb-6">Fabric Technologies</h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-2xl font-bold mb-2">Merlot / 5%</div>
                    <p className="text-gray-400">Best balance of view and airflow. 95% UV blockage.</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Nano / 1%</div>
                    <p className="text-gray-400">Maximum privacy and heat reduction. Limits airflow.</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Insect Mesh</div>
                    <p className="text-gray-400">Tightly woven to stop gnats and mosquitoes comfortably.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-8">
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                  <span>Download Fabric Chart</span>
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
                Reclaim your sunset.
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-md">
                Stop retreating indoors when the bugs come out or the sun gets low.
              </p>
              <TrackedLink href="/contact?type=price&product=shades">
                <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-10 py-6 text-lg font-bold uppercase tracking-wider">
                  Start Quote
                </Button>
              </TrackedLink>
            </div>
            <div className="border-l border-white/20 pl-16 hidden md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold uppercase tracking-wide">Perfect For</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Existing Porches
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    New Pergolas
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Garage Openings
                  </li>
                  <li className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-edg-brand" />
                    Restaurant Patios
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
