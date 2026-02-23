import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Calculator,
  Clock,
  FileText,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola & Shade Pricing | Get a Custom Quote',
  description:
    'Get a custom quote for motorized pergolas, exterior shades, and glass enclosures in Chicago & Milwaukee. Transparent pricing, no hidden fees. Serving Lake County IL and Southeast Wisconsin.',
  openGraph: {
    title: 'Get a Custom Quote | EDG Outdoor Living',
    description:
      'Transparent pricing for premium outdoor living systems. Request your custom proposal.',
  },
  alternates: {
    canonical: '/price',
  },
};

const faqs = [
  {
    question: "Why don't you publish prices online?",
    answer:
      "Because every project is different. Size, site conditions, options, and permitting requirements all affect the price significantly. We'd rather give you an accurate quote than a misleading range.",
  },
  {
    question: 'How quickly can I get a quote?',
    answer:
      "After a site visit (usually scheduled within a week), we'll have your detailed proposal within 48 hours. For simple projects, sometimes sooner.",
  },
  {
    question: 'Is there a cost for the quote?',
    answer:
      "The initial consultation and site visit are free. If we proceed to detailed design work beyond the standard scope, we'll discuss any design fees upfront.",
  },
  {
    question: "What's the deposit / payment schedule?",
    answer:
      'Typically 50% at contract signing, 40% when materials arrive, 10% at completion. For larger projects, we can discuss milestone-based payments.',
  },
  {
    question: 'Do you offer financing?',
    answer:
      'Yes, we partner with financing providers to offer payment options for qualified buyers. Terms vary based on credit approval. Ask us about financing during your consultation.',
  },
];

import { generateFAQSchema } from '@/lib/schema';

export default function PricePage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="bg-edg-light min-h-screen dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ========== HERO ========== */}
      <Section className="bg-white pt-24 pb-16 md:pt-32 dark:bg-black">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Pricing' },
              ]}
            />
          </div>
          <div className="max-w-4xl">
            <p className="text-edg-brand-text mb-4 text-sm font-semibold tracking-wider uppercase">
              For Budget-Conscious Homeowners
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Get a real quote.
              <br />
              <span className="text-muted-foreground">
                Not a bait-and-switch estimate.
              </span>
            </h1>
            <p className="text-muted-foreground mb-4 max-w-2xl text-xl leading-relaxed">
              We know you've been burned by contractors who quote low and
              invoice high. That's why we take the time to understand your
              project before giving you numbers.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              Every project is different. We'll give you an accurate quote based
              on <strong>your site, your goals, and your timeline</strong>—not a
              generic price list.
            </p>
            <TrackedLink href="/contact?type=price">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Request Your Custom Quote{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedLink>
            <p className="text-muted-foreground mt-4 text-sm">
              Usually delivered within 48 hours of site visit.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== WHAT YOU'LL GET ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            What you'll receive
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Not a vague estimate—a detailed proposal you can actually plan
            around.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: 'Itemized Scope',
                desc: 'Every component, feature, and installation detail spelled out. No hidden line items.',
              },
              {
                icon: Calculator,
                title: 'Fixed Price',
                desc: "The number we quote is the number you pay. We don't do 'surprise' change orders.",
              },
              {
                icon: Clock,
                title: 'Realistic Timeline',
                desc: "Permit estimates, lead times, and installation dates. Know when you'll be enjoying your space.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200/50 bg-white p-8 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="bg-edg-brand/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <item.icon className="text-edg-brand-text dark:text-edg-brand h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-edg-gray-text dark:text-zinc-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SYSTEMS OVERVIEW (NO PRICES) ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Systems we quote
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Tell us what you're interested in and we'll provide a custom
            proposal.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Shades */}
            <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.pages.price.shadesHero}
                  alt="Motorized exterior shades"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Motorized Shades</h3>
                <p className="text-muted-foreground text-sm">
                  Custom-fit exterior shades for heat and glare control.
                </p>
              </div>
            </div>

            {/* Pergolas */}
            <div className="border-edg-brand relative overflow-hidden rounded-2xl border-2">
              <div className="bg-edg-brand text-edg-dark absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.pages.price.pergolaGray}
                  alt="Louvered pergola system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Louvered Pergolas</h3>
                <p className="text-muted-foreground text-sm">
                  All-weather motorized louver systems for four-season use.
                </p>
              </div>
            </div>

            {/* Enclosures */}
            <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.pages.price.whitePergolaPool}
                  alt="Glass enclosure system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Glass Enclosures</h3>
                <p className="text-muted-foreground text-sm">
                  Panoramic sliding or folding glass systems for maximum views.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== BALLPARK PRICING GUIDANCE ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Ballpark investment ranges
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-lg">
            Every project is unique, but here are typical investment ranges based on project size and complexity. 
            <strong>Your specific quote may vary</strong> based on site conditions, options, and permitting requirements.
          </p>
          
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Pergola Pricing Tiers */}
            <div className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold">Motorized Pergolas</h3>
                  <p className="text-muted-foreground">
                    All-weather louvered roof systems with motorized operation, integrated drainage, and smart controls.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Small Projects</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$35K–$50K</div>
                    <div className="text-xs text-muted-foreground">12×12 to 16×16</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Typical Range</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$50K–$85K</div>
                    <div className="text-xs text-muted-foreground">16×16 to 20×20</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Large/Custom</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$85K+</div>
                    <div className="text-xs text-muted-foreground">20×24+ or complex</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screens Pricing */}
            <div className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold">Retractable Screens</h3>
                  <p className="text-muted-foreground">
                    Motorized exterior screens with MagnaTrack technology for wind resistance and insect protection.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Single Opening</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$4K–$8K</div>
                    <div className="text-xs text-muted-foreground">Per opening</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Multi-Sided</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$12K–$25K</div>
                    <div className="text-xs text-muted-foreground">3–4 sides</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass Enclosures */}
            <div className="rounded-2xl border border-zinc-200/50 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold">Glass Enclosure Systems</h3>
                  <p className="text-muted-foreground">
                    Frameless sliding or folding glass walls for year-round outdoor room conversion.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Typical Range</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$35K–$75K</div>
                    <div className="text-xs text-muted-foreground">Standard openings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Large/Custom</div>
                    <div className="text-2xl font-bold text-edg-brand-text">$75K+</div>
                    <div className="text-xs text-muted-foreground">Wide spans, corners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <strong>Note:</strong> Prices include professional installation but exclude permits, 
              electrical rough-in by others, and any required structural modifications. 
              Financing options available for qualified buyers.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== WHAT AFFECTS YOUR QUOTE ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            What affects your quote
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Every project is unique. Here's what we consider when pricing yours.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Size & Layout',
                desc: 'Square footage, shape complexity, and number of openings all factor in.',
              },
              {
                title: 'Site Conditions',
                desc: 'Attachment method, concrete work, electrical access, and equipment access.',
              },
              {
                title: 'Options & Finish',
                desc: 'Heating, lighting, automation level, fabric/color selections, and powder coat.',
              },
              {
                title: 'Permitting',
                desc: "Some municipalities require more engineering than others. We'll know after research.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <Calculator className="text-edg-brand-text dark:text-edg-brand mx-auto mb-4 h-10 w-10" />
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-edg-gray-text text-sm dark:text-zinc-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SERVICES ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            What's typically included
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
            Every project is unique. We tailor our services to meet the specific
            requirements of your site and goals.
          </p>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                title: 'Project Planning',
                desc: 'Comprehensive site assessment and tailored system recommendations.',
              },
              {
                title: 'Administrative Support',
                desc: 'Management of documentation and municipal requirements when applicable.',
              },
              {
                title: 'Technical Oversight',
                desc: "Engineering and structural considerations based on your project's scope.",
              },
              {
                title: 'Professional Execution',
                desc: 'Precision installation and site management by our specialized teams.',
              },
              {
                title: 'System Integration',
                desc: 'Configuration of automation, lighting, and performance features as needed.',
              },
              {
                title: 'Project Completion',
                desc: 'A final walkthrough and orientation to ensure your space is ready.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-edg-gray-text text-sm dark:text-zinc-300">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900" id="pricing-faq">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">
            Pricing Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200/50 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h4 className="mb-2 text-lg font-bold">{item.question}</h4>
                <p className="text-edg-gray-text dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FINAL CTA ========== */}
      <Section className="bg-edg-dark py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to get real numbers for your project?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Tell us about your space and goals. We'll schedule a site visit
              and provide a detailed proposal—no obligation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=price">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Request Your Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
