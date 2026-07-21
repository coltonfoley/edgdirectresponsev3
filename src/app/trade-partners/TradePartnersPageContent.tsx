'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  Building2,
  Phone,
  Globe,
  Award,
  Users,
  Wrench,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { buildContactHref } from '@/lib/contact-links';
import * as images from '@/lib/images';

const capabilities = [
  'Motorized Louvered Pergolas',
  'Retractable Insect Screens',
  'Glass Enclosure Systems',
  'Structural Aluminum Engineering',
  'Smart Home Integration',
  'Heating & Lighting Plans',
  'Nationwide Shipping',
  'Installer Training',
];

const differentiators = [
  {
    icon: Globe,
    title: 'Nationwide Design & Supply',
    description:
      'We spec and ship systems to professionals in all 50 states. EDG is not local-only; we bring our expertise wherever your projects are.',
  },
  {
    icon: Award,
    title: 'System-Agnostic Specs',
    description:
      'Unlike dealers locked into one manufacturer, we recommend the right system for each project. Your client gets the best fit, not our only option.',
  },
  {
    icon: Users,
    title: 'Installer Training',
    description:
      "Bring your team to our Spring Grove showroom for hands-on training, or we'll come to you. We also teach your team how to install the systems correctly.",
  },
  {
    icon: Wrench,
    title: 'Specialist Expertise',
    description:
      'Motorized pergolas and screens are what we do, not an add-on to a deck business. Complex engineering, wind loads, integration: we handle it.',
  },
];

const tradeHeroHref = buildContactHref({
  type: 'pro',
  source: 'trade_partners_hero',
});

const tradeScopeHref = buildContactHref({
  type: 'pro',
  source: 'trade_partners_scope',
});

const tradeBottomHref = buildContactHref({
  type: 'pro',
  source: 'trade_partners_bottom',
});

export function TradePartnersPageContent() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="bg-edg-dark border-b border-white/10 pt-32 pb-24 text-white">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Trade Partners' }]} />
          </div>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="border-edg-brand/40 bg-edg-brand/10 text-edg-brand mb-8 inline-flex items-center gap-2 border px-3 py-1 text-xs font-bold tracking-widest uppercase">
                <Building2 className="h-4 w-4" />
                For Builders, Architects & Designers
              </div>
              <h1 className="hero-title mb-6 text-white">
                Your Design & Supply Partner for{' '}
                <span className="text-edg-brand">
                  Motorized Outdoor Systems
                </span>
              </h1>
              <p className="text-text-inverse-muted mb-10 max-w-xl text-xl leading-relaxed">
                We spec the right system, handle engineering, and deliver to
                your job site, anywhere in the country. One call. No brand bias.
                Reliable execution.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrackedLink href={tradeHeroHref}>
                  <Button size="lg">Request a Quote</Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Trade Desk
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>
            <div className="relative">
              <div className="border-border-inverse bg-surface-dark-elevated relative aspect-[4/3] overflow-hidden border">
                <Image
                  src={images.brand.hero.showroom}
                  alt="EDG showroom display used for partner client walkthroughs and installer training"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/80 p-6">
                  <div className="text-edg-brand mb-3 text-xs font-bold tracking-[0.18em] uppercase">
                    Spring Grove partner resource
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-white">
                    Showroom demos, finish review, and installer training.
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-zinc-300">
                    Bring clients to see full-size motorized systems in person,
                    or use the facility to train installers before a project
                    reaches the job site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== KEY DIFFERENTIATORS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Why We&apos;re Different
            </div>
            <h2 className="section-title">
              Built as a Partner, Not a Competitor
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <Card key={item.title} variant="muted" padding="lg">
                <IconWrapper
                  icon={item.icon}
                  variant="brand"
                  size="lg"
                  className="mb-4"
                />
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== HOW WE WORK ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">How We Work</div>
              <h2 className="section-title mb-6">
                We Make Your Projects Easier
              </h2>
              <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                Most motorized pergola companies are set up to sell to
                homeowners. We&apos;re built to support professionals. Send
                plans, and EDG returns a clear system path.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-edg-dark flex h-10 w-10 shrink-0 items-center justify-center font-bold text-white">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">Send Plans</h4>
                    <p className="text-text-secondary">
                      Email PDFs or DWGs. We review the package and call with
                      questions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-edg-dark flex h-10 w-10 shrink-0 items-center justify-center font-bold text-white">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">
                      Receive Spec & Quote
                    </h4>
                    <p className="text-text-secondary">
                      Detailed recommendation with DWG files, loading specs, and
                      pricing details needed to keep the project moving.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-edg-brand text-edg-dark flex h-10 w-10 shrink-0 items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold">We Execute</h4>
                    <p className="text-text-secondary">
                      Ship-to-site anywhere in the US, or installation by our
                      crew in the Chicago-Milwaukee corridor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card variant="default" padding="lg" className="h-full">
                <h3 className="border-border mb-6 border-b pb-4 text-xl font-bold tracking-wide uppercase">
                  Scope of Work
                </h3>
                <div className="grid gap-4">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <IconWrapper
                        icon={Check}
                        variant="brand"
                        size="sm"
                        className="mt-0.5"
                      />
                      <span className="text-text-primary font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-border mt-8 border-t pt-6">
                  <TrackedLink
                    href={tradeScopeHref}
                    className="group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-text-primary group-hover:text-edg-brand-text font-bold transition-colors">
                        Request a Quote
                      </div>
                      <div className="text-text-muted text-sm">
                        Talk to our trade team about your specs
                      </div>
                    </div>
                    <div className="bg-edg-dark flex h-10 w-10 items-center justify-center text-white">
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </TrackedLink>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== SHOWROOM ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="border-border bg-surface-muted relative aspect-[4/3] overflow-hidden border">
                <Image
                  src={images.brand.hero.showroom}
                  alt="EDG showroom display with outdoor dining system and operable pergola"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/70 p-5">
                  <div className="text-edg-brand text-xs font-bold tracking-[0.18em] uppercase">
                    Spring Grove Showroom
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white">
                    Full-size displays for client walkthroughs, finish review,
                    and installer training.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="label-editorial-brand mb-4">
                Physical Showroom
              </div>
              <h2 className="section-title mb-6">
                Bring Your Clients. Train Your Team.
              </h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                Our Spring Grove facility is not just for homeowners; it is a
                resource for trade partners. Bring skeptical clients to see
                full-size systems in operation. Send your installers for
                hands-on training.
              </p>
              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <IconWrapper
                    icon={Check}
                    variant="default"
                    size="sm"
                    className="mt-0.5"
                  />
                  <span className="text-text-primary">
                    Full-size motorized pergola displays
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <IconWrapper
                    icon={Check}
                    variant="default"
                    size="sm"
                    className="mt-0.5"
                  />
                  <span className="text-text-primary">
                    Working retractable screen demonstrations
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <IconWrapper
                    icon={Check}
                    variant="default"
                    size="sm"
                    className="mt-0.5"
                  />
                  <span className="text-text-primary">
                    Hands-on installer training sessions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <IconWrapper
                    icon={Check}
                    variant="default"
                    size="sm"
                    className="mt-0.5"
                  />
                  <span className="text-text-primary">
                    Sample materials and finish options
                  </span>
                </div>
              </div>
              <div className="text-text-muted text-sm">
                <strong className="text-text-primary">Location:</strong> 1802
                Holian Drive, Spring Grove, IL 60081
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <section className="section-md bg-surface-dark text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Spec Your Next Project?
            </h2>
            <p className="mb-8 text-lg text-zinc-300">
              One partner for everything motorized outdoors. We pick up the
              phone.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TrackedLink href={tradeBottomHref}>
                <Button size="lg" className="min-w-[200px]">
                  Request a Quote
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button variant="outline" size="lg" className="min-w-[200px]">
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
