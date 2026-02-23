'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Building2,
  Ruler,
  Phone,
  Globe,
  Award,
  Users,
  Wrench,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const capabilities = [
  "Motorized Louvered Pergolas",
  "Retractable Insect Screens",
  "Glass Enclosure Systems",
  "Structural Aluminum Engineering",
  "Smart Home Integration",
  "Heating & Lighting Plans",
  "Nationwide Shipping",
  "Installer Training",
];

const differentiators = [
  {
    icon: Globe,
    title: 'Nationwide Design & Supply',
    description: 'We spec and ship systems to professionals in all 50 states. Not a local-only business—we bring our expertise wherever your projects are.',
  },
  {
    icon: Award,
    title: 'System-Agnostic Specs',
    description: 'Unlike dealers locked into one manufacturer, we recommend the right system for each project. Your client gets the best fit, not our only option.',
  },
  {
    icon: Users,
    title: 'Installer Training',
    description: 'Bring your team to our Spring Grove showroom for hands-on training, or we\'ll come to you. We don\'t just sell systems—we teach you to install them.',
  },
  {
    icon: Wrench,
    title: 'Specialist Expertise',
    description: 'Motorized pergolas and screens are what we do—not an add-on to a deck business. Complex engineering, wind loads, integration: we handle it.',
  },
];

export function TradePartnersPageContent() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark text-white pt-32 pb-24 border-b border-white/10">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Trade Partners' },
              ]}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
                <Building2 className="h-4 w-4" />
                For Builders, Architects & Designers
              </div>
              <h1 className="hero-title text-white mb-6">
                Your Design & Supply Partner for{' '}
                <span className="text-edg-brand">Motorized Outdoor Systems</span>
              </h1>
              <p className="text-xl text-text-inverse-muted mb-10 leading-relaxed max-w-xl">
                We spec the right system, handle engineering, and deliver to your job site—anywhere in the country. One call. No brand bias. Reliable execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink href="/contact?type=pro">
                  <Button size="lg">
                    Discuss Your Project
                  </Button>
                </TrackedLink>
                <TrackedLink href="tel:+18155810138">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Trade Desk
                  </Button>
                </TrackedLink>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-surface-dark-elevated border border-border-inverse p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Ruler className="h-48 w-48 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold uppercase tracking-wide mb-2">Why Partners Choose EDG</h3>
                  <div className="h-1 w-12 bg-edg-brand mb-6"></div>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                    <span className="text-white">Not locked into one manufacturer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                    <span className="text-white">Engineering support included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                    <span className="text-white">Ship anywhere in the US</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand shrink-0 mt-0.5" />
                    <span className="text-white">Showroom training available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== KEY DIFFERENTIATORS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Why We&apos;re Different</div>
            <h2 className="section-title">
              Built as a Partner, Not a Competitor
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== HOW WE WORK ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="label-editorial-brand mb-4">How We Work</div>
              <h2 className="section-title mb-6">
                We Make Your Projects Easier
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Most motorized pergola companies are set up to sell to homeowners. We&apos;re built to support professionals. Send us plans, we send specs—fast.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-edg-dark text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Send Plans</h4>
                    <p className="text-text-secondary">Email us PDFs or DWGs. We review within 24 hours and call with questions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-edg-dark text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Receive Spec & Quote</h4>
                    <p className="text-text-secondary">Detailed recommendation with DWG files, loading specs, and pricing—within 48 hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-edg-brand text-edg-dark font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">We Execute</h4>
                    <p className="text-text-secondary">Ship-to-site anywhere in the US, or installation by our crew in the Chicago-Milwaukee corridor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card variant="default" padding="lg" className="h-full">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-6 border-b border-border pb-4">
                  Scope of Work
                </h3>
                <div className="grid gap-4">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <IconWrapper icon={Check} variant="brand" size="sm" className="mt-0.5" />
                      <span className="font-medium text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Link 
                    href="/contact?type=pro" 
                    className="group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-text-primary group-hover:text-edg-brand-text transition-colors">
                        Discuss Your Project
                      </div>
                      <div className="text-sm text-text-muted">Talk to our trade team about your specs</div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center bg-edg-dark text-white">
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== SHOWROOM ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-surface-muted border border-border relative">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                  <div className="text-center">
                    <Building2 className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <span className="text-sm uppercase tracking-widest">Spring Grove Showroom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="label-editorial-brand mb-4">Physical Showroom</div>
              <h2 className="section-title mb-6">
                Bring Your Clients. Train Your Team.
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Our Spring Grove facility isn&apos;t just for homeowners—it&apos;s a resource for trade partners. Bring skeptical clients to see full-size systems in operation. Send your installers for hands-on training.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                  <span className="text-text-primary">Full-size motorized pergola displays</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                  <span className="text-text-primary">Working retractable screen demonstrations</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                  <span className="text-text-primary">Hands-on installer training sessions</span>
                </div>
                <div className="flex items-start gap-3">
                  <IconWrapper icon={Check} variant="default" size="sm" className="mt-0.5" />
                  <span className="text-text-primary">Sample materials and finish options</span>
                </div>
              </div>
              <div className="text-sm text-text-muted">
                <strong className="text-text-primary">Location:</strong> 1802 Holian Drive, Spring Grove, IL 60081
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-edg-dark mb-4">
              Ready to Spec Your Next Project?
            </h2>
            <p className="text-lg text-edg-dark/80 mb-8">
              One partner for everything motorized outdoors. We pick up the phone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink href="/contact?type=pro">
                <Button variant="dark" size="lg" className="min-w-[200px]">
                  Start a Project
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button variant="ghost" size="lg" className="text-edg-dark border-2 border-edg-dark hover:bg-edg-dark hover:text-white min-w-[200px]">
                  <Phone className="mr-2 h-4 w-4" />
                  (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
