import type { Metadata } from 'next';
import * as images from '@/lib/images';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Check,
  ArrowRight,
  DollarSign,
  CloudRain,
  BarChart3,
  ShieldCheck,
  Zap,
  Phone,
  Shield,
  TrendingUp,
  Building2,
  Utensils,
  Trees,
  Hotel,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const faqs = [
  {
    question: 'How quickly can you install?',
    answer:
      'Most commercial projects install in 3-5 days. We can work around your operating hours—early mornings, late nights, or closed days.',
  },
  {
    question: 'Do I need city permits?',
    answer:
      'Yes. We handle the entire engineering and permit process. Timelines vary by municipality (typically 2-4 weeks).',
  },
  {
    question: 'What is the maintenance requirement?',
    answer:
      'Annual service visit recommended. We clean, lubricate, and inspect all components to ensure warranty compliance.',
  },
  {
    question: 'Can this integrate with our existing structure?',
    answer:
      "Almost always. We attach to steel, masonry, or wood. Site assessment confirms structural load requirements.",
  },
];

import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Commercial Outdoor Living | Hospitality & Restaurant Systems | EDG',
  description: 'Motorized pergolas and retractable screens for commercial properties. Serving restaurants, hotels, and hospitality venues nationwide.',
  alternates: { canonical: '/commercial' },
  openGraph: {
    title: 'Commercial Outdoor Living | EDG',
    description: 'Motorized pergolas and screens for hospitality and restaurants.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
};

export default function CommercialPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ========== HERO ========== */}
      <Section className="bg-black text-white pt-32 pb-20 border-b border-white/10">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'Commercial' }]} className="text-zinc-400" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
                <BarChart3 className="h-4 w-4" />
                Revenue Infrastructure
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Profit from <br /> <span className="text-gray-500">every seat.</span>
              </h1>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-lg">
                Turn weather from a liability into a revenue driver. Commercial-grade pergolas and enclosures that pay for themselves in one season.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedLink href="/contact?type=commercial">
                  <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-8 py-6 text-base font-bold uppercase tracking-wider">
                    Schedule Assessment
                  </Button>
                </TrackedLink>
                <TrackedPhoneLink href="tel:+18155810138">
                  <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-base font-bold uppercase tracking-wider">
                    (815) 581-0138
                  </Button>
                </TrackedPhoneLink>
              </div>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-10">
              <h3 className="text-white font-bold uppercase tracking-wide mb-8 border-b border-white/10 pb-4">
                The Cost of "Weather Permitting"
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <CloudRain className="h-8 w-8 text-red-500 shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">42 Days</div>
                    <div className="text-sm text-zinc-300">Average rain days in Chicago season per year.</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <DollarSign className="h-8 w-8 text-red-500 shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">$150,000+</div>
                    <div className="text-sm text-zinc-300">Annual revenue lost to unseated outdoor tables.</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <TrendingUp className="h-8 w-8 text-edg-brand shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">10 Weeks</div>
                    <div className="text-sm text-zinc-300">Additional season length with heaters & enclosures.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== ROI CASE STUDY (Sharp, Technical) ========== */}
      <Section className="bg-white py-24 border-b border-black/5">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold tracking-tighter mb-6 text-black">
                Real Numbers.<br /> Real Return.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Data from a fine dining installation in Lake Geneva, WI.
              </p>
              <div className="border-l-2 border-black pl-6 py-2 mb-8">
                <p className="text-xl font-medium italic text-black">
                  "Refusing to seat the patio because of 'a chance of rain' was costing us $5k a night. Now we book it rain or shine."
                </p>
              </div>
              <TrackedLink href="/contact?type=commercial">
                <div className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-b border-black pb-1 hover:text-edg-brand-text transition-colors">
                  Request ROI Analysis <ArrowRight className="h-4 w-4" />
                </div>
              </TrackedLink>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-zinc-50 border border-black/5 p-8 md:p-12">
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Project Cost</div>
                    <div className="text-4xl font-bold text-black">$62,000</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Payback Period</div>
                    <div className="text-4xl font-bold text-edg-brand-text">4 Months</div>
                  </div>
                </div>
                <div className="space-y-4 border-t border-black/5 pt-8">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">Additional Covers / Night</span>
                    <span className="font-mono text-gray-600">+40 Seats</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">Season Extension</span>
                    <span className="font-mono text-gray-600">+8 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">Weather Cancellations</span>
                    <span className="font-mono text-gray-600">0</span>
                  </div>
                  <div className="flex justify-between items-center bg-black text-white p-4 -mx-4 mt-4">
                    <span className="font-bold uppercase tracking-wider">Addt'l Revenue (Year 1)</span>
                    <span className="font-mono text-edg-brand font-bold text-xl">$180,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== SOLUTIONS BY INDUSTRY ========== */}
      <Section className="bg-white py-24 border-b border-black/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-edg-brand-text text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="h-px w-8 bg-edg-brand-text" />
              Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Commercial Solutions by Industry
            </h2>
            <p className="text-text-secondary">
              Specialized outdoor living systems designed for the unique demands of hospitality and food service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hotels */}
            <Link href="/commercial/hotel-pergolas" className="group">
              <Card variant="outline" padding="lg" className="h-full hover:border-edg-brand transition-colors">
                <IconWrapper icon={Hotel} variant="brand" size="lg" className="mb-6" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-edg-brand-text transition-colors">
                  Hotels & Rooftops
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Transform rooftop bars and pool decks into year-round revenue centers.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            {/* Restaurants */}
            <Link href="/commercial/restaurant-patio-solutions" className="group">
              <Card variant="outline" padding="lg" className="h-full hover:border-edg-brand transition-colors">
                <IconWrapper icon={Utensils} variant="brand" size="lg" className="mb-6" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-edg-brand-text transition-colors">
                  Restaurants
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Add 40-100 weatherproof seats with motorized pergolas and enclosures.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            {/* Country Clubs */}
            <Link href="/commercial/country-club-outdoor-spaces" className="group">
              <Card variant="outline" padding="lg" className="h-full hover:border-edg-brand transition-colors">
                <IconWrapper icon={Trees} variant="brand" size="lg" className="mb-6" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-edg-brand-text transition-colors">
                  Country Clubs
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Elevate member experiences with premium outdoor dining and event spaces.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            {/* Hospitality Group */}
            <Link href="/commercial/chicago-hospitality-outdoor-living" className="group">
              <Card variant="outline" padding="lg" className="h-full hover:border-edg-brand transition-colors">
                <IconWrapper icon={Building2} variant="brand" size="lg" className="mb-6" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-edg-brand-text transition-colors">
                  Hospitality Groups
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Multi-location solutions for restaurant groups and hotel chains.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== SOLUTIONS BY LOCATION ========== */}
      <Section className="bg-surface-muted py-24 border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-edg-brand-text text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <MapPin className="h-4 w-4" />
                Local Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Chicago Commercial Outdoor Living
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                From Fulton Market rooftops to Gold Coast hotels, we understand Chicago's unique permitting, wind conditions, and design aesthetic.
              </p>
              <div className="space-y-4">
                <Link
                  href="/commercial/west-loop"
                  className="flex items-center justify-between p-4 bg-white border border-border hover:border-edg-brand transition-colors group"
                >
                  <div>
                    <h3 className="font-bold group-hover:text-edg-brand-text transition-colors">West Loop / Fulton Market</h3>
                    <p className="text-sm text-text-secondary">Terrace enclosures for Chicago's restaurant row</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-text-muted group-hover:text-edg-brand-text group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/commercial/restaurant-patio-enclosures"
                  className="flex items-center justify-between p-4 bg-white border border-border hover:border-edg-brand transition-colors group"
                >
                  <div>
                    <h3 className="font-bold group-hover:text-edg-brand-text transition-colors">Restaurant Patio Enclosures</h3>
                    <p className="text-sm text-text-secondary">Glass and screen solutions for year-round dining</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-text-muted group-hover:text-edg-brand-text group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/commercial/hotel-roof-deck-systems"
                  className="flex items-center justify-between p-4 bg-white border border-border hover:border-edg-brand transition-colors group"
                >
                  <div>
                    <h3 className="font-bold group-hover:text-edg-brand-text transition-colors">Hotel Roof Deck Systems</h3>
                    <p className="text-sm text-text-secondary">Structural solutions for elevated outdoor spaces</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-text-muted group-hover:text-edg-brand-text group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={images.brand.context.commercial}
                alt="Commercial outdoor living installation in Chicago"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CAPABILITIES GRID ========== */}
      <Section className="py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Commercial Grade Only.</h2>
            <p className="text-gray-500">We don't install residential toys on commercial sites. Our systems are engineered for high-cycle daily use.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-black/10 p-8 hover:border-black transition-colors group">
              <ShieldCheck className="h-10 w-10 text-black mb-6 group-hover:text-edg-brand-text transition-colors" />
              <h3 className="text-xl font-bold mb-3">Priority Support</h3>
              <p className="text-gray-600">Downtime is lost revenue. Our commercial clients get 24-48hr response times and local parts stocking.</p>
            </div>
            <div className="border border-black/10 p-8 hover:border-black transition-colors group">
              <Zap className="h-10 w-10 text-black mb-6 group-hover:text-edg-brand-text transition-colors" />
              <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-gray-600">We respect your operating hours. Most installs complete in 3-5 days with minimal disruption to service.</p>
            </div>
            <div className="border border-black/10 p-8 hover:border-black transition-colors group">
              <BarChart3 className="h-10 w-10 text-black mb-6 group-hover:text-edg-brand-text transition-colors" />
              <h3 className="text-xl font-bold mb-3">Custom Branding</h3>
              <p className="text-gray-600">Color match to your brand standards. Integrate signage and lighting into the structure seamlessly.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FAQ (Minimalist) ========== */}
      <Section className="bg-zinc-50 py-24 border-t border-black/5">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Operations FAQ</h2>
              <p className="text-gray-500 mb-8">Common questions from GMs and Owners.</p>
              <TrackedLink href="/contact?type=commercial">
                <Button className="w-full justify-start rounded-none border-l-4 border-edg-brand bg-white text-black hover:bg-zinc-100 font-bold">
                  Ask a specific question
                </Button>
              </TrackedLink>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {faqs.map((item, i) => (
                <div key={i} className="bg-white border border-black/5 p-6">
                  <h4 className="font-bold text-lg mb-2 text-black">{item.question}</h4>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED RESOURCES ========== */}
      <Section className="bg-surface-muted py-24 border-t border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Explore Our Systems
            </h2>
            <p className="text-text-secondary">
              The commercial solutions above are built on our core outdoor living systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/systems/pergolas" className="group">
              <Card variant="default" padding="lg" className="text-center h-full hover:border-edg-brand transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  Motorized Pergolas
                </h3>
                <p className="text-text-secondary text-sm">
                  Adjustable louvers for sun, shade, and rain control
                </p>
              </Card>
            </Link>
            <Link href="/systems/shades" className="group">
              <Card variant="default" padding="lg" className="text-center h-full hover:border-edg-brand transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  Retractable Screens
                </h3>
                <p className="text-text-secondary text-sm">
                  Wind-rated screens for wind, sun, and insect protection
                </p>
              </Card>
            </Link>
            <Link href="/systems/enclosures" className="group">
              <Card variant="default" padding="lg" className="text-center h-full hover:border-edg-brand transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  Glass Enclosures
                </h3>
                <p className="text-text-secondary text-sm">
                  Frameless glass walls for year-round outdoor rooms
                </p>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-black text-white py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Stop losing revenue to rain.
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-md">
                We'll walk your space, calculate your ROI, and provide a fixed-price proposal.
              </p>
              <TrackedLink href="/contact?type=commercial">
                <Button className="bg-edg-brand text-black hover:bg-white rounded-none px-10 py-6 text-lg font-bold uppercase tracking-wider">
                  Site Assessment
                </Button>
              </TrackedLink>
            </div>
            <div className="border-l border-white/20 pl-16 hidden md:block">
              <div className="space-y-6">
                <h4 className="text-lg font-bold uppercase tracking-wide">Our Clients Include</h4>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-edg-brand" />
                    Fine Dining Restaurants
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-edg-brand" />
                    Country Clubs & Golf Courses
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-edg-brand" />
                    Hotels & Rooftop Bars
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-edg-brand" />
                    Corporate Campuses
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
