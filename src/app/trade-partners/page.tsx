'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  FileText,
  UploadCloud,
  Shield,
  Check,
  Building2,
  Ruler,
  Users2,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

export default function ProPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ========== HERO SECTION (Dark Mode for Pro feel) ========== */}
      <section className="bg-black text-white pt-32 pb-24 border-b border-white/10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
                <Building2 className="h-4 w-4" />
                For Architects & Builders
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Your specialized <br /> <span className="text-gray-400">shading partner.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                We handle the specs, engineering, supply, and installation of motorized architectural systems. You get the credit, we execute the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink href="/contact?type=pro&action=plans">
                  <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-8 py-6 text-base font-bold uppercase tracking-wider">
                    Submit Plans for bid
                  </Button>
                </TrackedLink>
                <TrackedLink href="/contact?type=pro">
                  <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-base font-bold uppercase tracking-wider">
                    Request Spec Binder
                  </Button>
                </TrackedLink>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Ruler className="h-48 w-48 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-2">Performance Metrics</h3>
                  <div className="h-1 w-12 bg-edg-brand mb-6"></div>
                </div>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">48<span className="text-edg-brand text-xl">hr</span></div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Quote Turnaround</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">100<span className="text-edg-brand text-xl">%</span></div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">On-Time Supply</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">3<span className="text-edg-brand text-xl">wk</span></div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Standard Lead Time</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">0<span className="text-edg-brand text-xl">fail</span></div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Callbacks this year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== THE EDG DIFFERENCE (Technical Grid) ========== */}
      <Section className="py-24 border-b border-black/5">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-l-2 border-black/10 pl-8">
              <div className="text-edg-brand-text font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Specification
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Precision Documentation.</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't send generic brochures. You get detailed DWG files, electrical requirements, and loading specs tailored to your project within 48 hours.
              </p>
            </div>
            <div className="border-l-2 border-black/10 pl-8">
              <div className="text-edg-brand-text font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <UploadCloud className="h-4 w-4" />
                Supply Chain
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Inventory backed.</h3>
              <p className="text-gray-600 leading-relaxed">
                We stock raw materials locally for custom cuts. For pre-engineered systems, our volume purchasing power guarantees priority production slots.
              </p>
            </div>
            <div className="border-l-2 border-black/10 pl-8">
              <div className="text-edg-brand-text font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Users2 className="h-4 w-4" />
                Execution
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Plug & Play Crews.</h3>
              <p className="text-gray-600 leading-relaxed">
                Our installers are specialized technicians, not general laborers. We respect your job site, follow your safety protocols, and leave zero punch list.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== PROCESS / SERVICES ========== */}
      <Section className="bg-zinc-50 py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold tracking-tighter mb-6">
                You build the house.<br /> We handle the elements.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Exterior system integration is complex. Loads, drainage, voltage drop, wind uplift—miss one, and it's a nightmare callback.
              </p>
              <p className="text-lg text-gray-600 mb-8 border-l-2 border-black pl-6 italic font-medium">
                "EDG acts as your specialized sub-consultant. We verify the physics so you can guarantee the aesthetic."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</div>
                  <span className="font-bold text-black">Send us plans (PDF/DWG)</span>
                </div>
                <div className="h-8 w-px bg-black/20 ml-4"></div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</div>
                  <span className="font-bold text-black">Receive spec & quote (48hrs)</span>
                </div>
                <div className="h-8 w-px bg-black/20 ml-4"></div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-edg-brand text-black flex items-center justify-center font-bold text-sm">3</div>
                  <span className="font-bold text-black">Site Mark-out & Install</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 border border-black/5 shadow-xl">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-8 border-b border-black/5 pb-4">
                  Scope of Work Capability
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Motorized Louvered Pergolas",
                    "Retractable Insect Screens",
                    "Vinyl Winter Enclosures",
                    "Structural Aluminum Framing",
                    "Frameless Sliding Glass",
                    "Infrared Heating Plans",
                    "Smart Home Integration (Lutron/Control4)",
                    "Commercial Dining Structures"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-black/5 flex justify-between items-center group cursor-pointer hover:bg-zinc-50 transition-colors p-4 -mx-4 -mb-4">
                  <div>
                    <div className="font-bold text-black">Download Capability Statement</div>
                    <div className="text-sm text-gray-500">PDF, 2.4MB</div>
                  </div>
                  <div className="h-10 w-10 bg-black text-white flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== GUARANTEE (Dark) ========== */}
      <section className="bg-black text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-edg-brand mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The "No-Callback" Guarantee</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              If we install it, we own it. Any adjustment, noise, or operational issue within the first 2 years is handled by our team within 48 hours, free of charge. You build, we support.
            </p>
            <TrackedLink href="/contact?type=pro">
              <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-10 py-6 text-lg font-bold uppercase tracking-wider">
                Become a Partner
              </Button>
            </TrackedLink>
          </div>
        </Container>
      </section>

      {/* ========== DIRECT CONTACT ========== */}
      <section className="bg-edg-brand py-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Need a rush quote?</h2>
              <p className="text-black/80 font-medium">Direct line to our trade desk.</p>
            </div>
            <div className="flex gap-4">
              <TrackedPhoneLink href="tel:+18155810138">
                <Button variant="ghost" className="text-black border-2 border-black hover:bg-black hover:text-white rounded-none h-14 px-8 text-lg font-bold uppercase">
                  (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
