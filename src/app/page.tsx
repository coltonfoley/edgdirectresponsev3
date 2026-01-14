import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

import { FadeIn } from "@/components/ui/FadeIn";
import {
  ArrowRight, Calculator, HardHat, LayoutTemplate, Building2, ChevronRight,
  Sun, Droplets, Wind, Eye, Thermometer, Shield,
  CheckCircle2, Users, Star, Award, BookOpen, Phone
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ========== HERO SECTION (Direct Response) ========== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden bg-edg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/hero/hero-main.jpg')] bg-cover bg-center opacity-40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

        <Container className="relative z-20">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Service Note */}
              <div className="inline-block text-sm font-medium tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full">
                Full-Service Installation within 60 Miles • Design & Supply Nationwide
              </div>

              {/* Main Headline - Problem/Solution */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Outdoor Living That Works<br className="hidden md:block" />
                <span className="text-edg-brand">365 Days a Year.</span>
              </h1>

              {/* Subhead - Addresses Pain Points */}
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                Premium motorized pergolas, exterior shades, and glass enclosures—designed, supplied, and installed from our Spring Grove showroom.
              </p>

              {/* CTA Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/design">
                  <Button size="lg" className="rounded-full text-base px-8">
                    See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="secondary" className="rounded-full text-base px-8 border-white/20 text-white hover:bg-white/10">
                    View Gallery
                  </Button>
                </Link>
              </div>

              {/* Location Tag */}
              <p className="text-sm text-gray-400 pt-4 font-medium tracking-wide uppercase">
                Serving North Chicago to Milwaukee
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== SOCIAL PROOF BAR ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">75+</div>
                <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-400 mt-1">Builder Partners</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-3xl md:text-4xl font-bold text-white">
                  5.0 <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-sm text-gray-400 mt-1">Google Reviews</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== SYSTEMS WE OFFER - VISUAL SHOWCASE ========== */}
      <Section className="py-24 bg-white dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Systems Built for Midwest Winters & Summers
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not tied to one manufacturer. We match the right system to your site, your style, and your goals.
              </p>
            </div>

            {/* Large Visual Cards */}
            <div className="space-y-12">
              {/* Louvered Pergolas - Full Width Feature */}
              <div className="group relative rounded-3xl overflow-hidden bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/pergolas/pergola-hero.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="relative z-10 p-12 md:p-16 lg:p-20 min-h-[500px] flex flex-col justify-center max-w-2xl">
                  <span className="text-edg-brand text-sm font-bold uppercase tracking-wider mb-4">Most Popular</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Louvered Pergolas</h3>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Motorized aluminum louvers that rotate from full sun to full shade—and close completely for rain protection. The ultimate year-round outdoor room.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 mb-8">
                    {["Rain drainage built-in", "Snow load rated", "Integrated LED & heating", "Smart home ready"].map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-edg-brand mr-2 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/price?product=pergola">
                      <Button size="lg" className="rounded-full">See Pricing <ArrowRight className="ml-2 h-5 w-5" /></Button>
                    </Link>
                    <Link href="/contact?type=design&product=pergola">
                      <Button size="lg" variant="secondary" className="rounded-full border-white/30 text-white hover:bg-white/10">Get Quote</Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Two-Column: Shades + Enclosures */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Motorized Shades */}
                <div className="group relative rounded-3xl overflow-hidden bg-black min-h-[450px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/motorized-retractable-screens-patio.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Motorized Shades</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">
                      Wind-rated exterior screens that block 80%+ of heat and glare while preserving your view. Retract completely when not needed.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {["Heat reduction", "UV protection", "Wind rated"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm text-white">{tag}</span>
                      ))}
                    </div>
                    <Link href="/contact?type=price&product=shades" className="inline-flex items-center text-edg-brand font-bold hover:underline">
                      Get Quote <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>

                {/* Glass Enclosures */}
                <div className="group relative rounded-3xl overflow-hidden bg-black min-h-[450px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/frameless-sliding-glass-walls.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
                    <h3 className="text-3xl font-bold text-white mb-3">Glass Enclosures</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">
                      Frameless glass wall systems that stack, fold, and disappear. Add weatherproof square footage without heavy construction.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {["Weatherproof", "Adds value", "Year-round use"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm text-white">{tag}</span>
                      ))}
                    </div>
                    <Link href="/contact?type=design&product=enclosure" className="inline-flex items-center text-edg-brand font-bold hover:underline">
                      Start Consultation <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== WHY EDG ========== */}
      <Section className="py-24 bg-zinc-100 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Why work with EDG?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're not a product showroom. We're a design-build partner that helps you avoid costly mistakes before you break ground.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">System-Agnostic Guidance</h4>
                      <p className="text-edg-gray-text dark:text-gray-400">We match the right system to your site—not push one brand.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Design-Build Integration</h4>
                      <p className="text-edg-gray-text dark:text-gray-400">Permitting, engineering, installation—all coordinated by one team.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-edg-brand/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-edg-brand-text dark:text-edg-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Transparent Process</h4>
                      <p className="text-edg-gray-text dark:text-gray-400">You know what to expect at every stage. No surprises.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="bg-white dark:bg-zinc-800 p-10 rounded-2xl border border-black/5 dark:border-white/5 shadow-lg">
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  "EDG helped us avoid three major mistakes before we broke ground. The guidance alone was worth every penny."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-edg-gray/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-edg-gray" />
                  </div>
                  <div>
                    <div className="font-bold">Homeowner</div>
                    <div className="text-sm text-muted-foreground">Lake Forest, IL</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== LEAD MAGNET CTA ========== */}
      <section className="relative py-24 bg-edg-dark overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-edg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-edg-brand/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Guide offer */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-edg-brand uppercase bg-edg-brand/10 border border-edg-brand/20 px-4 py-2 rounded-full">
                  <BookOpen className="h-4 w-4" />
                  Free Planning Guide
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Not ready to talk yet?<br />
                  <span className="text-edg-brand">Start with our free guide.</span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Learn what questions to ask, what systems fit your needs, and how to avoid the 7 most expensive planning mistakes—before you talk to anyone.
                </p>

                <ul className="space-y-3">
                  {[
                    "Understand your options at a glance",
                    "Get real budget ranges",
                    "Avoid costly mistakes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-edg-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/guide">
                  <Button size="lg" className="w-full sm:w-auto rounded-xl shadow-lg shadow-edg-brand/5">
                    Get the Free Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Right: Ready to talk */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to talk now?
                </h3>
                <p className="text-gray-300 mb-8">
                  Skip the guide—let's have a conversation. Whether you have questions or you're ready to start planning, we're here.
                </p>

                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full rounded-lg">
                      Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-gray-500">or call us directly</span>
                    </div>
                  </div>

                  <a
                    href="tel:+18155810138"
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-edg-brand" />
                    <span className="font-medium">(815) 581-0138</span>
                  </a>

                  <p className="text-xs text-gray-500 text-center">
                    Mon–Fri, 8am–5pm CT • Response within 1 business day
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== TRAFFIC DIRECTOR (Routing) ========== */}
      <Section className="py-24 bg-white dark:bg-black">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Start?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us what you're here for and we'll begin the right conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Path 1: Design-Led */}
              <Link
                href="/design"
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:shadow-xl hover:border-edg-brand/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand-text dark:text-edg-brand">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-edg-brand-text dark:text-edg-brand mb-2">Guidance First</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                    Plan a Four-Season Space
                  </h3>
                  <p className="text-edg-gray-text dark:text-gray-400 mb-6 flex-grow">
                    I need design guidance, feasibility checks, and a thoughtful planning process.
                  </p>
                  <div className="flex items-center text-sm font-bold">
                    Start Here <ChevronRight className="ml-1 w-4 h-4 text-edg-brand-text dark:text-edg-brand" />
                  </div>
                </div>
              </Link>

              {/* Path 2: Price-Driven */}
              <Link
                href="/price"
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:shadow-xl hover:border-edg-brand/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand-text dark:text-edg-brand">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-edg-brand-text dark:text-edg-brand mb-2">Fast & Transparent</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                    Get a Starting Price
                  </h3>
                  <p className="text-edg-gray-text dark:text-gray-400 mb-6 flex-grow">
                    I know what I want. Show me pricing models and budget ranges.
                  </p>
                  <div className="flex items-center text-sm font-bold">
                    View Pricing <ChevronRight className="ml-1 w-4 h-4 text-edg-brand-text dark:text-edg-brand" />
                  </div>
                </div>
              </Link>

              {/* Path 3: Builders / Pros */}
              <Link
                href="/pro"
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:shadow-xl hover:border-edg-brand/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand-text dark:text-edg-brand">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-edg-brand-text dark:text-edg-brand mb-2">Trade Only</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                    Builders & Professionals
                  </h3>
                  <p className="text-edg-gray-text dark:text-gray-400 mb-6 flex-grow">
                    I need specs, plan takeoffs, and trade coordination for active projects.
                  </p>
                  <div className="flex items-center text-sm font-bold">
                    Trade Portal <ChevronRight className="ml-1 w-4 h-4 text-edg-brand-text dark:text-edg-brand" />
                  </div>
                </div>
              </Link>

              {/* Path 4: Commercial */}
              <Link
                href="/commercial"
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:shadow-xl hover:border-edg-brand/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4 h-12 w-12 rounded-full bg-edg-brand/10 flex items-center justify-center text-edg-brand-text dark:text-edg-brand">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-edg-brand-text dark:text-edg-brand mb-2">High ROI</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-edg-brand-text dark:group-hover:text-edg-brand transition-colors">
                    Commercial & Hospitality
                  </h3>
                  <p className="text-edg-gray-text dark:text-gray-400 mb-6 flex-grow">
                    Scalable solutions for restaurants, hotels, and country clubs.
                  </p>
                  <div className="flex items-center text-sm font-bold">
                    Commercial Info <ChevronRight className="ml-1 w-4 h-4 text-edg-brand-text dark:text-edg-brand" />
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
