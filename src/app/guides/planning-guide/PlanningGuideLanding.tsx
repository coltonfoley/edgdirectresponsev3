'use client';

import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  DollarSign,
  FileCheck,
  Ruler,
  Shield,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Section } from '@/components/ui/Section';
import { LeadCaptureForm } from '@/components/features/contact/LeadCaptureForm';
import * as images from '@/lib/images';

const guideBullets = [
  'Compare pergolas, screens, glass, heat, and controls before narrowing a system',
  'Understand the budget and project variables that change the recommendation',
  'Know what to document before talking with contractors or builders',
  'Avoid common planning misses around structure, drainage, power, and service access',
];

const proofPoints = [
  'System-agnostic planning',
  'Pergolas, screens, and glass',
  'Built for early project decisions',
];

const guideBenefits = [
  {
    icon: DollarSign,
    title: 'Budget Drivers',
    description:
      'What changes the cost of a pergola, screen, glass, heat, or outdoor-room package.',
  },
  {
    icon: Ruler,
    title: 'Site Review',
    description:
      'The conditions to check before a project gets locked into the wrong structure.',
  },
  {
    icon: Shield,
    title: 'Planning Risks',
    description:
      'The mistakes that create friction later: drainage, power, controls, access, and code.',
  },
  {
    icon: FileCheck,
    title: 'Questions to Ask',
    description:
      'A practical checklist for comparing contractors, products, and system recommendations.',
  },
];

export default function PlanningGuideLanding() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-edg-dark pt-28 pb-16 text-white lg:pb-20">
        <div className="absolute inset-0">
          <Image
            src={images.pages.guides.louveredPergolasHero}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-black/78" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Planning Guide' },
            ]}
            className="mb-6 text-zinc-300"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="label-editorial mb-6 text-edg-brand">
                Planning Guide
              </div>
              <h1 className="hero-title mb-6 max-w-5xl">
                Plan the Outdoor Room Before You Quote It
              </h1>
              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
                A practical EDG guide for homeowners and project teams comparing
                pergolas, retractable screens, glass, heat, lighting, and
                controls before committing to a system.
              </p>

              <a
                href="#planning-guide-form"
                className="mb-8 inline-flex h-14 w-full items-center justify-center gap-2 bg-edg-brand px-8 text-base font-bold tracking-wider text-edg-dark uppercase transition-colors hover:bg-white sm:w-auto lg:hidden"
              >
                Read the Planning Guide
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="grid gap-3">
                {guideBullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand" />
                    <span className="text-sm leading-relaxed text-zinc-200 md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="planning-guide-form"
              className="scroll-mt-28 border border-white/10 bg-black/45 p-5 md:p-8"
            >
              <div className="mb-6 grid items-center gap-6 sm:grid-cols-[0.75fr_1fr]">
                <div className="hidden border border-white/10 bg-white/5 p-5 sm:block">
                  <div className="flex aspect-[3/4] flex-col justify-between border border-edg-brand/30 bg-black/40 p-5">
                    <div>
                      <div className="mb-3 text-xs font-bold tracking-[0.18em] text-edg-brand uppercase">
                        EDG Guide
                      </div>
                      <h2 className="text-lg leading-tight font-bold text-white">
                        Outdoor System Planning
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                        Planning Guide 2026
                      </p>
                    </div>
                    <BookOpen className="h-6 w-6 text-edg-brand" />
                  </div>
                </div>
                <div>
                  <div className="label-editorial mb-3 text-edg-brand">
                    Email Access
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-white">
                    Get the guide and open the reader
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    Enter your name and email. The form unlocks the online
                    reader without changing the site lead path.
                  </p>
                </div>
              </div>

              <LeadCaptureForm
                source="planning-guide-hero"
                ctaText="Read the Planning Guide"
                redirectUrl="/guides/planning-guide/read"
                autoDownload={false}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-edg-dark py-6">
        <Container>
          <div className="grid gap-4 text-center text-sm font-bold tracking-wider text-zinc-300 uppercase md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="border border-white/10 px-4 py-3">
                {point}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section className="section-md bg-white">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              What You Will Learn
            </div>
            <h2 className="section-title mb-4">
              The questions to answer before the project becomes expensive
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              The guide keeps the buyer focused on system fit, project
              constraints, and real planning decisions instead of product claims
              in isolation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guideBenefits.map((benefit) => (
              <Card key={benefit.title} variant="outline" padding="lg">
                <IconWrapper
                  icon={benefit.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
