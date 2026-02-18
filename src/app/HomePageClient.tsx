'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { images } from '@/lib/images';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  ArrowRight,
  Calculator,
  HardHat,
  LayoutTemplate,
  Building2,
  ChevronRight,
  CheckCircle2,
  Users,
  Star,
  BookOpen,
  Phone,
} from 'lucide-react';
import { useState } from 'react';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

interface HomePageProps {
  homepage: any;
}

export default function HomePageClient({ homepage }: HomePageProps) {
  const hero = homepage?.hero || {};
  const socialProof = homepage?.socialProof || {};
  const productsSection = homepage?.productsSection || {};
  const featuresSection = homepage?.featuresSection || {};
  const guideOffer = homepage?.guideOffer || {};
  const pathsSection = homepage?.pathsSection || {};

  return (
    <main className="flex min-h-screen flex-col">
      {/* HERO SECTION */}
      <section className="bg-edg-dark relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Optimized hero image with priority for LCP */}
        <Image
          src="/images/pergolas/pergola-hero.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 z-0 object-cover opacity-60"
          sizes="100vw"
        />
        
        {/* Video with lazy loading - only loads when user scrolls near or interaction */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/pergolas/pergola-hero.jpg"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-40 motion-reduce:hidden"
        >
          <source
            src="/images/enclosures/commercial-pergola-video-clip-01.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <Container className="relative z-20">
          <FadeIn>
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                {hero.headline ? (
                  <PortableText value={hero.headline} />
                ) : (
                  <>
                    Motorized Pergolas <br className="hidden md:block" />
                    <span className="text-edg-brand">& Louvered Roofs</span>
                  </>
                )}
              </h1>

              <h2 className="mx-auto mb-10 max-w-2xl text-xl font-medium text-gray-200 md:text-2xl">
                {hero.subtitle || "Full-Service Installation Across Chicago & Milwaukee. Design & Supply Available Nationwide."}
              </h2>

              <HeroForm />

              <div className="flex items-center justify-center gap-6 pt-12 text-sm font-medium text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> Licensed & Insured
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> 5-Star Service
                </span>
                <span className="hidden items-center gap-2 sm:flex">
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> Hurricane Rated
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div>
                <div className="text-3xl font-bold text-white md:text-4xl">
                  {socialProof.projectsDelivered || 75}+
                </div>
                <div className="mt-1 text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white md:text-4xl">
                  {socialProof.builderPartners || 20}+
                </div>
                <div className="mt-1 text-sm text-gray-400">Builder Partners</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-3xl font-bold text-white md:text-4xl">
                  {socialProof.googleRating || 5.0} <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="mt-1 text-sm text-gray-400">Google Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white md:text-4xl">
                  {socialProof.yearsExperience || 10}+
                </div>
                <div className="mt-1 text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SYSTEMS WE OFFER */}
      <Section className="bg-white py-24 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {productsSection.title || "Motorized Pergolas, Outdoor Shades & Glass Enclosures Chicago"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {productsSection.subtitle || "We're not tied to one manufacturer. We match the right system to your site, your style, and your goals."}
              </p>
            </div>

            <div className="space-y-12">
              {/* Pergolas - Full Width Feature */}
              <div className="group relative overflow-hidden rounded-3xl bg-black">
                {/* Next.js Image for SEO optimization */}
                <Image
                  src={images.systems.pergolas.hero}
                  alt="Louvered pergola system with motorized adjustable roof"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="relative z-10 flex min-h-[500px] max-w-2xl flex-col justify-center p-12 md:p-16 lg:p-20">
                  <span className="text-edg-brand mb-4 text-sm font-bold tracking-wider uppercase">
                    Most Popular
                  </span>
                  <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl">Louvered Pergolas</h3>
                  <p className="mb-8 text-xl leading-relaxed text-gray-200">
                    Motorized aluminum louvers that rotate from full sun to full shade—and close completely for rain protection.
                  </p>
                  <ul className="mb-8 grid grid-cols-2 gap-4">
                    {['Rain drainage built-in', 'Snow load rated', 'Integrated LED & heating', 'Smart home ready'].map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <CheckCircle2 className="text-edg-brand mr-2 h-5 w-5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/price?product=pergola">
                      <Button size="lg" className="rounded-none">See Pricing <ArrowRight className="ml-2 h-5 w-5" /></Button>
                    </Link>
                    <Link href="/contact?type=design&product=pergola">
                      <Button size="lg" variant="secondary" className="rounded-none border-white/30 text-white hover:bg-white/10">Get Quote</Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Two-Column: Shades + Enclosures */}
              <div className="grid gap-8 md:grid-cols-2">
                <div className="group relative min-h-[450px] overflow-hidden rounded-3xl bg-black">
                  {/* Next.js Image for SEO optimization */}
                  <Image
                    src={images.brand.design.screens}
                    alt="Motorized retractable screens for patio shade and insect protection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 z-10 p-8 md:p-10">
                    <h3 className="mb-3 text-3xl font-bold text-white">Motorized Shades</h3>
                    <p className="mb-6 leading-relaxed text-gray-200">Wind-rated exterior screens that block 80%+ of heat and glare while preserving your view.</p>
                    <div className="mb-6 flex flex-wrap gap-3">
                      {['Heat reduction', 'UV protection', 'Wind rated'].map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">{tag}</span>
                      ))}
                    </div>
                    <Link href="/contact?type=price&product=shades" className="text-edg-brand inline-flex items-center font-bold hover:underline">Get Quote <ChevronRight className="ml-1 h-5 w-5" /></Link>
                  </div>
                </div>

                <div className="group relative min-h-[450px] overflow-hidden rounded-3xl bg-black">
                  {/* Next.js Image for SEO optimization */}
                  <Image
                    src={images.brand.design.glassWalls}
                    alt="Frameless glass wall enclosure system for year-round outdoor living"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 z-10 p-8 md:p-10">
                    <h3 className="mb-3 text-3xl font-bold text-white">Glass Enclosures</h3>
                    <p className="mb-6 leading-relaxed text-gray-200">Frameless glass wall systems that stack, fold, and disappear. Add weatherproof square footage.</p>
                    <div className="mb-6 flex flex-wrap gap-3">
                      {['Weatherproof', 'Adds value', 'Year-round use'].map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">{tag}</span>
                      ))}
                    </div>
                    <Link href="/contact?type=design&product=enclosure" className="text-edg-brand inline-flex items-center font-bold hover:underline">Start Consultation <ChevronRight className="ml-1 h-5 w-5" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* WHY EDG */}
      <Section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  {featuresSection.title || "Why work with EDG?"}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  We're not a product showroom. We're a design-build partner that helps you avoid costly mistakes before you break ground.
                </p>
                <div className="space-y-6">
                  {featuresSection.features?.map((feature: any) => (
                    <div key={feature._key} className="flex gap-4">
                      <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg font-bold">{feature.title}</h4>
                        <p className="text-edg-gray-text dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  )) || (
                    <>
                      <div className="flex gap-4">
                        <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                          <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-lg font-bold">System-Agnostic Guidance</h4>
                          <p className="text-edg-gray-text dark:text-gray-400">We match the right system to your site—not push one brand.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                          <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-lg font-bold">Design-Build Integration</h4>
                          <p className="text-edg-gray-text dark:text-gray-400">Permitting, engineering, installation—all coordinated by one team.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-edg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                          <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-lg font-bold">Transparent Process</h4>
                          <p className="text-edg-gray-text dark:text-gray-400">You know what to expect at every stage. No surprises.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="rounded-2xl border border-black/5 bg-white p-10 shadow-lg dark:border-white/5 dark:bg-zinc-800">
                <blockquote className="mb-6 text-xl leading-relaxed font-medium md:text-2xl">
                  &ldquo;EDG helped us avoid three major mistakes before we broke ground. The guidance alone was worth every penny.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="bg-edg-gray/20 flex h-12 w-12 items-center justify-center rounded-full">
                    <Users className="text-edg-gray h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">Homeowner</div>
                    <div className="text-muted-foreground text-sm">Lake Forest, IL</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* LEAD MAGNET CTA */}
      <section className="bg-edg-dark relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="bg-edg-brand/10 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-edg-brand/5 absolute right-1/4 bottom-0 h-64 w-64 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: Guide offer */}
              <div className="space-y-6">
                <div className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-wider uppercase">
                  <BookOpen className="h-4 w-4" />
                  Free Planning Guide
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {guideOffer.title || "Not ready to talk yet?"}
                  <br />
                  <span className="text-edg-brand">{guideOffer.subtitle || "Start with our free guide."}</span>
                </h2>

                <p className="text-lg leading-relaxed text-gray-300">
                  {guideOffer.description || "Learn what questions to ask, what systems fit your needs, and how to avoid the 7 most expensive planning mistakes."}
                </p>

                <ul className="space-y-3">
                  {(guideOffer.benefits || ['Understand your options at a glance', 'Get real budget ranges', 'Avoid costly mistakes']).map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle2 className="text-edg-brand h-5 w-5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href={guideOffer.ctaUrl || '/guides/planning-guide'}>
                  <Button size="lg" className="shadow-edg-brand/5 w-full rounded-none shadow-lg sm:w-auto">
                    {guideOffer.ctaText || "Get the Free Guide"} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Right: Ready to talk */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
                <h3 className="mb-4 text-2xl font-bold text-white">Ready to talk now?</h3>
                <p className="mb-8 text-gray-300">Skip the guide—let's have a conversation. Whether you have questions or you're ready to start planning, we're here.</p>

                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full rounded-none">Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </Link>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-transparent px-4 text-gray-500">or call us directly</span>
                    </div>
                  </div>

                  <a href="tel:+18155810138" className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/20 px-6 py-4 text-white transition-colors hover:bg-white/5">
                    <Phone className="text-edg-brand h-5 w-5" />
                    <span className="font-medium">(815) 581-0138</span>
                  </a>

                  <p className="text-center text-xs text-gray-500">Mon–Fri, 7am–4pm CT • Response within 1 business day</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* TRAFFIC DIRECTOR (Paths) */}
      <Section className="bg-white py-24 dark:bg-black">
        <Container>
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {pathsSection.title || "Ready to Start?"}
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Tell us what you're here for and we'll begin the right conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {pathsSection.paths?.map((path: any) => (
                <Link
                  key={path._key}
                  href={path.href}
                  className="group hover:border-edg-brand/30 relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900"
                >
                  <div className="flex flex-grow flex-col p-8">
                    <div className="bg-edg-brand/10 text-edg-brand-text dark:text-edg-brand mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      {path.icon === 'LayoutTemplate' && <LayoutTemplate className="h-6 w-6" />}
                      {path.icon === 'Calculator' && <Calculator className="h-6 w-6" />}
                      {path.icon === 'HardHat' && <HardHat className="h-6 w-6" />}
                      {path.icon === 'Building2' && <Building2 className="h-6 w-6" />}
                    </div>
                    <div className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">{path.badge}</div>
                    <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">{path.title}</h3>
                    <p className="text-edg-gray-text mb-6 flex-grow dark:text-gray-400">{path.description}</p>
                    <div className="flex items-center text-sm font-bold">
                      {path.cta} <ChevronRight className="text-edg-brand-text dark:text-edg-brand ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )) || (
                <>
                  <Link href="/design" className="group hover:border-edg-brand/30 relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex flex-grow flex-col p-8">
                      <div className="bg-edg-brand/10 text-edg-brand-text dark:text-edg-brand mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                        <LayoutTemplate className="h-6 w-6" />
                      </div>
                      <div className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">Guidance First</div>
                      <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">Plan a Four-Season Space</h3>
                      <p className="text-edg-gray-text mb-6 flex-grow dark:text-gray-400">I need design guidance, feasibility checks, and a thoughtful planning process.</p>
                      <div className="flex items-center text-sm font-bold">Start Here <ChevronRight className="text-edg-brand-text dark:text-edg-brand ml-1 h-4 w-4" /></div>
                    </div>
                  </Link>
                  <Link href="/price" className="group hover:border-edg-brand/30 relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex flex-grow flex-col p-8">
                      <div className="bg-edg-brand/10 text-edg-brand-text dark:text-edg-brand mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                        <Calculator className="h-6 w-6" />
                      </div>
                      <div className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">Fast & Transparent</div>
                      <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">Get a Starting Price</h3>
                      <p className="text-edg-gray-text mb-6 flex-grow dark:text-gray-400">I know what I want. Show me pricing models and budget ranges.</p>
                      <div className="flex items-center text-sm font-bold">View Pricing <ChevronRight className="text-edg-brand-text dark:text-edg-brand ml-1 h-4 w-4" /></div>
                    </div>
                  </Link>
                  <Link href="/pro" className="group hover:border-edg-brand/30 relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex flex-grow flex-col p-8">
                      <div className="bg-edg-brand/10 text-edg-brand-text dark:text-edg-brand mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                        <HardHat className="h-6 w-6" />
                      </div>
                      <div className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">Trade Only</div>
                      <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">Builders & Professionals</h3>
                      <p className="text-edg-gray-text mb-6 flex-grow dark:text-gray-400">I need specs, plan takeoffs, and trade coordination for active projects.</p>
                      <div className="flex items-center text-sm font-bold">Trade Portal <ChevronRight className="text-edg-brand-text dark:text-edg-brand ml-1 h-4 w-4" /></div>
                    </div>
                  </Link>
                  <Link href="/commercial" className="group hover:border-edg-brand/30 relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-zinc-50 transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex flex-grow flex-col p-8">
                      <div className="bg-edg-brand/10 text-edg-brand-text dark:text-edg-brand mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="text-edg-brand-text dark:text-edg-brand mb-2 text-xs font-bold tracking-wider uppercase">High ROI</div>
                      <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">Restaurants, Hotels & Clubs</h3>
                      <p className="text-edg-gray-text mb-6 flex-grow dark:text-gray-400">High-ROI outdoor design for hospitality. Increase capacity and revenue year-round.</p>
                      <div className="flex items-center text-sm font-bold">Commercial Info <ChevronRight className="text-edg-brand-text dark:text-edg-brand ml-1 h-4 w-4" /></div>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}

function HeroForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    message: 'Requested from Homepage Hero',
  });

  const { submitLead, loading, error, success } = useLeadSubmission();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead({ ...formData, customerType: 'homeowner', source: 'hero_form' });
  };

  if (success) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl">
        <div className="bg-edg-brand/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
          <CheckCircle2 className="text-edg-brand h-8 w-8" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">Request Received!</h3>
        <p className="text-gray-300">We'll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          disabled={loading}
          onChange={handleChange}
          className="focus:border-edg-brand rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          disabled={loading}
          onChange={handleChange}
          className="focus:border-edg-brand rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          disabled={loading}
          onChange={handleChange}
          className="focus:border-edg-brand rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:outline-none md:col-span-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          disabled={loading}
          onChange={handleChange}
          className="focus:border-edg-brand rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:outline-none"
        />
        <select
          name="projectType"
          required
          disabled={loading}
          onChange={handleChange}
          className="focus:border-edg-brand rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white transition-colors focus:outline-none"
        >
          <option value="" className="bg-gray-900">Project Type</option>
          <option value="pergola" className="bg-gray-900">Louvered Pergola</option>
          <option value="shades" className="bg-gray-900">Motorized Shades</option>
          <option value="enclosure" className="bg-gray-900">Glass Enclosure</option>
          <option value="other" className="bg-gray-900">Other / Not Sure</option>
        </select>
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full rounded-none md:col-span-2"
        >
          {loading ? 'Sending...' : 'Get Free Consultation'} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
      {error && <p className="mt-4 text-center text-red-400">{error}</p>}
    </div>
  );
}
