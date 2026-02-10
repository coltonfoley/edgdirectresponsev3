import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import * as images from '@/lib/images';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Wind,
  Thermometer,
  Sun,
  Utensils,
  DollarSign,
  CheckCircle2,
  BarChart3,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Restaurant Patio Enclosures Chicago | Commercial Covers & Shades',
  description:
    'Increase table covers by 30% with custom restaurant patio enclosures. Heavy-duty motorized pergolas and commercial patio covers for Chicago dining.',
  alternates: {
    canonical: '/commercial/restaurant-patio-enclosures',
  },
  openGraph: {
    title: 'Restaurant Patio Enclosures | EDG Commercial',
    description:
      'Turn your patio into a year-round profit center. Wind-rated commercial enclosures.',
  },
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const faqs = [
  {
    question: 'How quickly can the louvered roof close during unexpected rain?',
    answer:
      'Our motorized louvered roofs close completely in under 60 seconds, creating a waterproof seal that protects your diners and their meals from sudden weather changes. The system can be operated manually by staff or set to auto-close based on rain sensors.',
  },
  {
    question: 'Are restaurant patio enclosures compliant with Chicago building codes?',
    answer:
      'Yes. We handle all permitting and ensure full compliance with Chicago building codes, including wind load requirements, fire safety regulations, and accessibility standards. Our systems are engineered specifically for commercial use and meet all local restaurant patio design requirements.',
  },
  {
    question: 'What is the typical ROI for restaurant patio enclosures?',
    answer:
      'Most restaurant patio enclosure systems pay for themselves in a single season. By extending your outdoor dining season from 4-5 months to 8-9 months and eliminating weather-related closures, a typical installation generates $50,000-$150,000 in additional annual revenue for a mid-sized patio.',
  },
  {
    question: 'Can the system handle Chicago\'s heavy winds and winter snow loads?',
    answer:
      'Absolutely. Our commercial-grade systems are engineered for Chicago wind loads up to 120 mph and snow loads up to 40 psf. The louvers automatically open in high winds to prevent damage, and the structural aluminum frame with powder coating withstands harsh winters without maintenance.',
  },
];

const keyFeatures = [
  {
    icon: ShieldCheck,
    title: 'Weather Protection',
    description:
      'Waterproof louvered roof closes in 60 seconds to protect diners from rain. Wind-rated screens block gusts without obstructing views.',
  },
  {
    icon: Wind,
    title: 'Wind-Rated Engineering',
    description:
      'Engineered for Chicago wind loads up to 120 mph. Louvers automatically open in high winds to prevent damage and protect the structure.',
  },
  {
    icon: Thermometer,
    title: 'Integrated Climate Control',
    description:
      'Add heating and cooling systems for year-round comfort. Keep guests warm in fall and cool during summer heat waves.',
  },
  {
    icon: Sun,
    title: 'Smart Sun Management',
    description:
      'Adjust louvers to control sunlight and shade throughout the day. Reduce glare for diners while maintaining open-air ambiance.',
  },
];

const enclosureTypes = [
  {
    icon: Utensils,
    title: 'Restaurant Patio Covers',
    description:
      'Fixed or motorized options. Our louvered covers provide ventilation on hot days and full rain protection on wet ones.',
  },
  {
    icon: DollarSign,
    title: 'Commercial Outdoor Shades',
    description:
      'Heavy-duty zipper screens that hold up to commercial use. Reduce glare for diners and block wind for comfort.',
  },
  {
    icon: ShieldCheck,
    title: 'Permitting & Compliance',
    description:
      'We handle all Chicago permitting. We know the codes for restaurant patio design and ensure full compliance.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Restaurant Patio Enclosure Installation',
  description: 'Commercial patio covers and motorized enclosures for restaurants in Chicago',
  provider: {
    '@type': 'LocalBusiness',
    name: 'EDG Patio & Shade',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1802 Holian Drive',
      addressLocality: 'Spring Grove',
      addressRegion: 'IL',
      postalCode: '60081',
    },
    telephone: '+1-815-581-0138',
  },
  areaServed: {
    '@type': 'City',
    name: 'Chicago',
  },
};

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function RestaurantPatioEnclosuresPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(images.brand.context.commercial)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Content */}
        <Container className="relative z-10">
          {/* Breadcrumb - Left Aligned */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Commercial', href: '/commercial' },
                { label: 'Restaurant Enclosures' },
              ]}
              className="text-gray-400"
            />
          </div>

          {/* Text - Left Aligned */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-edg-brand/40 bg-edg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-edg-brand mb-8">
              Restaurant Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The ROI of a Commercial{' '}
              <span className="text-edg-brand">Patio Enclosure</span> is Measured in Weeks.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Stop losing reservations to rain and wind. Our Restaurant Patio Covers
              and motorized shades turn your seasonal outdoor space into a 365-day
              revenue engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-none">
                  Get Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-none"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROBLEM/SOLUTION SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-950 text-white">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                &quot;We used to close the patio when it looked like rain.&quot;
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Chicago weather is unpredictable. If you rely on umbrellas or
                simple awnings, you&apos;re losing money every time the forecast is
                &quot;iffy.&quot;
              </p>
              <h3 className="mb-4 text-xl font-bold text-white">
                The EDG Commercial System:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      Motorized Louvered Roof:
                    </span>
                    <p className="text-sm text-gray-400">
                      Closes in 60 seconds to become completely waterproof.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      Integrated Heating:
                    </span>
                    <p className="text-sm text-gray-400">
                      Keep guests comfortable for 8-9 months of the year.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-edg-brand h-6 w-6 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      Wind-Rated Screens:
                    </span>
                    <p className="text-sm text-gray-400">
                      Block the wind without blocking the view. Rated for
                      commercial use.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">
              <img
                src="/images/brand/hero-screens.jpg"
                alt="Restaurant Patio Shades"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-8 bottom-8 left-8 rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-sm">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <BarChart3 className="text-edg-brand" /> Revenue Impact
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 uppercase">
                      Average Ticket (4-top)
                    </div>
                    <div className="text-2xl font-semibold">$200 - $400</div>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">
                      Lost Revenue (Fri/Sat Rainout)
                    </div>
                    <div className="text-2xl font-semibold text-red-500">
                      -$5,000 to -$15,000
                    </div>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">
                      EDG Solution
                    </div>
                    <div className="text-edg-brand text-3xl font-bold">
                      $0 Lost Revenue
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Pay for the system in one season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          ENCLOSURE TYPES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Commercial Patio Enclosure Options
            </h2>
            <p className="text-lg text-gray-600">
              We design heavy-duty systems specifically for the demands of the
              restaurant industry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {enclosureTypes.map((type) => (
              <Card key={type.title} variant="outline" padding="lg" className="group">
                <IconWrapper
                  icon={type.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand-text transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-zinc-100">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built for Restaurant Demands
            </h2>
            <p className="text-lg text-gray-600">
              Commercial-grade systems engineered for high-traffic dining environments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.title}
                variant="outline"
                padding="lg"
                className="group"
              >
                <IconWrapper
                  icon={feature.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="text-xl font-bold mb-3 group-hover:text-edg-brand-text transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i} variant="outline" padding="lg">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          RELATED SOLUTIONS SECTION
          ═══════════════════════════════════════════════════════ */}
      <Section className="py-16 bg-zinc-100 border-t border-gray-200">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-edg-brand-text transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">All Commercial Solutions</span>
            </Link>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/commercial/restaurant-patio-solutions"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Restaurant Solutions <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/commercial/hotel-pergolas"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-edg-brand-text transition-colors"
              >
                Hotel Solutions <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-edg-brand py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Upgrade Your Patio?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Schedule a site visit. We&apos;ll give you a clear proposal with ROI
              projections for your specific cover count.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-black text-white hover:bg-gray-900"
              >
                Request Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
