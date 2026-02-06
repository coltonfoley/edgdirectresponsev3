import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  CloudRain,
  BarChart3,
  ShieldCheck,
  Zap,
  Phone,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Pergolas & Restaurant Patio Enclosures | EDG',
  description:
    'Commercial pergolas and shade systems for restaurants, hotels, and country clubs in Chicago & Milwaukee. Eliminate weather cancellations, extend patio season, increase revenue.',
  alternates: {
    canonical: '/commercial',
  },
  openGraph: {
    title: 'Commercial Outdoor Solutions | EDG',
    description:
      'Turn your patio into a profit center. Commercial-grade pergolas and shading for hospitality.',
  },
};

const faqs = [
  {
    question: 'How quickly can you install?',
    answer:
      'Most commercial projects install in 3-5 days. We can work around your operating hours—early mornings, late nights, or closed days.',
  },
  {
    question: 'Do I need city permits?',
    answer:
      'Usually yes. We handle the entire permit process, including any engineering requirements. This is typically 2-4 weeks depending on your municipality.',
  },
  {
    question: "What's the maintenance requirement?",
    answer:
      'Annual service visit recommended. We clean, lubricate, and inspect all components. Most operators never think about the system between services.',
  },
  {
    question: 'Can this integrate with our existing structure?',
    answer:
      "Almost always. We've attached to historic buildings, modern steel, wood pergolas, and freestanding structures. Site assessment will confirm feasibility.",
  },
  {
    question: 'What if something breaks during service?',
    answer:
      'Commercial clients receive priority support. We stock common parts locally, and most issues are resolved within 24-48 hours to minimize any impact on your seating.',
  },
];

import { generateFAQSchema } from '@/lib/schema';

export default function CommercialPage() {
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
          <Link
            href="/"
            className="text-edg-gray-text hover:text-edg-brand-text mb-8 inline-flex items-center text-sm font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to options
          </Link>
          <div className="max-w-4xl">
            <p className="text-edg-brand-text mb-4 text-sm font-semibold tracking-wider uppercase">
              For Restaurants, Hotels & Hospitality
            </p>
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              Commercial Pergolas & <br />
              <span className="text-muted-foreground">
                Restaurant Patio Enclosures
              </span>
            </h1>
            <p className="text-edg-brand-text mb-6 text-2xl font-medium">
              Turn weather from a liability into a revenue driver.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              Every rained-out patio night costs you $3,000-$10,000 in lost
              covers. Every blazing hot afternoon drives guests inside—or to
              your competitor with the shaded patio.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl text-xl leading-relaxed">
              We build outdoor infrastructure that{' '}
              <strong>pays for itself in one season</strong>.
            </p>
            <TrackedLink href="/contact?type=commercial">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Schedule Site Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedLink>
          </div>
        </Container>
      </Section>

      {/* ========== PROBLEM AGITATION ========== */}
      <Section className="bg-zinc-950 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              The real cost of unprotected outdoor space
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: CloudRain,
                  title: '42 days of rain',
                  desc: "That's the Chicago-area average. Each rainy evening costs $3-10K in lost revenue. That's $150K+ per year.",
                },
                {
                  icon: DollarSign,
                  title: '8 weeks of heat',
                  desc: 'July and August afternoons drive guests inside. Your premium patio seats sit empty. Revenue walks next door.',
                },
                {
                  icon: TrendingUp,
                  title: 'Shortened season',
                  desc: "Without protection, your patio is profitable May-September. With it? April-November. That's 10 extra weeks of revenue.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <item.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== THE SOLUTION ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                All-weather infrastructure that prints money.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our commercial systems are engineered for high-cycle usage,
                extreme weather, and decades of reliable operation. This isn't
                residential equipment—it's commercial infrastructure.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Rain-proof in 60 seconds',
                    desc: 'Motorized louvers close completely. Guests stay dry.',
                  },
                  {
                    title: '80%+ heat reduction',
                    desc: 'Shades and louvers block sun without blocking the view.',
                  },
                  {
                    title: 'Wind rated to 90+ mph',
                    desc: 'Built for Midwest storms. No emergency retraction panic.',
                  },
                  {
                    title: 'Minimal maintenance',
                    desc: 'Commercial-grade components. Annual service, not monthly repairs.',
                  },
                  {
                    title: '10-year structural warranty',
                    desc: 'We stand behind what we build.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="text-edg-brand mt-0.5 h-6 w-6 shrink-0" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-muted-foreground text-sm">
                        {item.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/commercial-restaurant-patio-enclosure.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8">
                <p className="text-xl font-medium text-white">
                  Restaurant patio in Lake Geneva, WI
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== INDUSTRIES ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Industries We Serve
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: 'Restaurants & Bars',
                desc: 'Expand covers, eliminate cancellations',
                highlight: '+40-80 covers/night',
              },
              {
                title: 'Hotels & Resorts',
                desc: 'Premium guest amenities, event space',
                highlight: 'Year-round bookings',
              },
              {
                title: 'Country Clubs',
                desc: 'Pool decks, outdoor dining, events',
                highlight: 'Member retention',
              },
              {
                title: 'Corporate Campuses',
                desc: 'Employee wellness, outdoor meetings',
                highlight: 'Recruitment edge',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-edg-gray-text mb-4 text-sm dark:text-gray-400">
                  {item.desc}
                </p>
                <div className="text-edg-brand-text dark:text-edg-brand font-bold">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== ROI CASE STUDY ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Real ROI: One Season Payback
            </h2>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
              Numbers from an actual commercial installation in the
              Chicago/Milwaukee region.
            </p>
            <div className="bg-edg-dark rounded-3xl p-8 text-white md:p-12">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Lakeside Restaurant
                  </h3>
                  <p className="mb-6 text-gray-400">
                    Lake Geneva, WI • Fine Dining
                  </p>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
                        Project
                      </div>
                      <div className="text-lg">
                        16x20 Louvered Pergola + Integrated Heating
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
                        Investment
                      </div>
                      <div className="text-edg-brand text-3xl font-bold">
                        $62,000
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
                        Results (First Season)
                      </div>
                      <ul className="space-y-2">
                        {[
                          '40 additional covered seats',
                          'Zero weather cancellations',
                          'Season extended by 8 weeks',
                          '$180,000 additional revenue',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 className="text-edg-brand h-4 w-4 shrink-0" />{' '}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-zinc-800 p-8">
                  <blockquote className="mb-6 text-xl leading-relaxed font-medium">
                    "The pergola paid for itself by July. Our patio went from a
                    liability to our single biggest revenue driver. We booked
                    $180K in additional covers the first summer alone."
                  </blockquote>
                  <div>
                    <div className="font-bold">Restaurant Owner</div>
                    <div className="text-gray-400">
                      Name withheld for privacy
                    </div>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="text-sm text-gray-400">ROI achieved in</div>
                    <div className="text-edg-brand text-3xl font-bold">
                      4 months
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== CAPABILITIES ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Commercial Capabilities
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <BarChart3 className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">ROI Analysis</h3>
              <p className="text-edg-gray-text dark:text-gray-400">
                We'll help you model the revenue impact based on your covers,
                average ticket, and local weather patterns.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <ShieldCheck className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">
                Commercial-Grade Systems
              </h3>
              <p className="text-edg-gray-text dark:text-gray-400">
                Higher duty cycles, reinforced structures, and components rated
                for decades of daily use.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <Zap className="text-edg-brand-text dark:text-edg-brand mb-4 h-10 w-10" />
              <h3 className="mb-3 text-xl font-bold">Rapid Deployment</h3>
              <p className="text-edg-gray-text dark:text-gray-400">
                We understand restaurant timelines. Most commercial installs
                complete in 3-5 days with minimal disruption.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== SERVICE COMMITMENT ========== */}
      <Section className="bg-edg-brand text-edg-dark py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold">
              Commercial Priority Service
            </h2>
            <p className="text-xl leading-relaxed">
              For hospitality and restaurant operators, downtime is lost
              revenue. We provide priority support and local parts stocking to
              ensure your patio stays open and profitable.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== MORE TESTIMONIALS ========== */}
      <Section className="bg-white py-20 dark:bg-black">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Business Owners Say
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  'We went from canceling 15-20 reservations per storm to zero. The ROI was obvious within the first month.',
                name: 'Managing Partner',
                business: 'Fine Dining Restaurant, Wilmette',
              },
              {
                quote:
                  "Our members can use the pool deck in any weather now. It's become our most popular amenity.",
                name: 'General Manager',
                business: 'Private Country Club, Barrington',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900"
              >
                <blockquote className="mb-6 text-lg leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {item.business}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="bg-zinc-100 py-20 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold">
            Commercial FAQ
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-xl bg-white p-6 dark:bg-zinc-800">
                <h4 className="mb-2 text-lg font-bold">{item.question}</h4>
                <p className="text-muted-foreground">{item.answer}</p>
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
              Ready to turn your patio into a profit center?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Schedule a free site assessment. We'll walk your space, discuss
              your goals, and show you what's possible—with real numbers.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/contact?type=commercial">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Schedule Site Assessment{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </TrackedLink>
              <TrackedPhoneLink href="tel:+18155810138">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/30 px-8 text-lg text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> (815) 581-0138
                </Button>
              </TrackedPhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
