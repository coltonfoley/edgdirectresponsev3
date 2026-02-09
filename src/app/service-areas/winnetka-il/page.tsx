import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Home,
  ShieldCheck,
  CheckCircle2,
  Crown,
  TreeDeciduous,
  Eye,
  Wind,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Estate Outdoor Living in Winnetka, IL | Pergolas & Shades | EDG',
  description:
    'Luxury motorized pergolas and exterior shades for Winnetka estates. Historic district compliance, architectural review board expertise. Large-span engineering for expansive patios.',
  alternates: {
    canonical: '/service-areas/winnetka-il',
  },
};

const localBenefits = [
  'Estate-scale installation experience',
  'Historic district compliance',
  'Architectural review board expertise',
  'Licensed for New Trier Township',
];

const neighborhoods = [
  {
    name: 'East Winnetka (Lakefront Estates)',
    description:
      'The lakefront properties of East Winnetka command panoramic Lake Michigan views. Our large-span engineering minimizes columns that would obstruct these sightlines, while our hurricane-rated systems withstand lakefront winds that can exceed 70 mph during storms.',
  },
  {
    name: 'Hubbard Woods',
    description:
      'Hubbard Woods features some of Winnetka\'s most prestigious homes on generous lots. We\'ve designed expansive outdoor living spaces here that complement the neighborhood\'s estate character, including covered patios that extend entertainment spaces by 2,000+ square feet.',
  },
  {
    name: 'Woodley Road Area',
    description:
      'The Woodley Road corridor\'s mix of traditional and transitional architecture benefits from our custom powder-coating capabilities. We match limestone, brick, and stucco exteriors with precision, ensuring our systems look like original architectural elements.',
  },
  {
    name: 'Indian Hill',
    description:
      'Indian Hill\'s winding roads and mature trees create unique design opportunities. We engineer around existing landscaping, often spanning 20-24 feet between columns to preserve century-old trees and natural site features.',
  },
];

const estateFeatures = [
  {
    title: 'Unobstructed Views',
    description:
      'Standard pergola kits require posts every 10-12 feet. On a large Winnetka patio, that creates a "forest of columns." Our commercial-grade engineered beams can span 20-24 feet, keeping your sightlines to the garden or lake completely open.',
    icon: Eye,
  },
  {
    title: 'Historical Accuracy',
    description:
      'We don\'t do "shiny white plastic" looks. Our systems can be matte powder-coated to match limestone, dark bronze window frames, or slate roofing. We can add cornice details and columns that mimic classical architecture.',
    icon: Crown,
  },
  {
    title: 'Ravine & Tree Preservation',
    description:
      'Winnetka\'s ravine areas have strict environmental protections. Our designs work within these constraints, using minimal foundation requirements and spanning techniques that protect root systems and ravine edges.',
    icon: TreeDeciduous,
  },
  {
    title: 'Lakefront Wind Ratings',
    description:
      'Wind off Lake Michigan can be fierce. Lightweight awnings rip. Our systems are Miami-Dade hurricane rated. When the storm comes, the louvers lock together to form a solid, structured roof that withstands the gale.',
    icon: Wind,
  },
];

const faqs = [
  {
    question: 'What makes Winnetka\'s permitting process different?',
    answer:
      'Winnetka has one of the most rigorous architectural review processes on the North Shore. The Village\'s Architectural Review Board (ARB) evaluates every project for compatibility with neighborhood character. We provide detailed 3D renderings, material samples, and elevation drawings to support your application—services most contractors don\'t offer.',
  },
  {
    question: 'Can you work with ravine protection requirements?',
    answer:
      'Absolutely. Winnetka\'s Ravine Protection Ordinance requires careful planning for properties near ravines. We design with setbacks from the "tableland" edge and ensure our drainage systems don\'t increase runoff into protected areas. We\'ve successfully completed multiple ravine-adjacent projects.',
  },
  {
    question: 'How do you handle large estate-scale projects?',
    answer:
      'Large Winnetka estates often require engineered drawings stamped by an Illinois-registered structural engineer. Our commercial-grade systems are designed for these demands, with beam spans up to 24 feet and wind ratings exceeding standard residential requirements. We handle all engineering documentation.',
  },
  {
    question: 'What\'s the typical timeline for a Winnetka project?',
    answer:
      'Winnetka projects typically take 10-14 weeks from consultation to completion due to the thorough permit process. ARB review adds 2-4 weeks compared to other communities. We recommend starting the design process in fall or winter for spring installation.',
  },
];

export default function WinnetkaHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Winnetka',
            description:
              'Estate-grade motorized pergolas and exterior shades for Winnetka homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Winnetka',
            },
            url: 'https://www.edgpatioshade.com/service-areas/winnetka-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Winnetka, IL
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Estate-Class Outdoor Living
                <span className="text-edg-brand block">for Winnetka</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                We understand that in Winnetka, &quot;outdoor living&quot; means more than
                a patio. It&apos;s an extension of a historic estate. Our systems are
                engineered to match your grandeur while respecting the
                Architectural Review Board&apos;s exacting standards.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Request Estate Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== LOCAL EXPERTISE ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {localBenefits.map((benefit, i) => (
                <span key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="text-edg-brand h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Serving Winnetka&apos;s Esteemed Neighborhoods
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                Each Winnetka area has unique characteristics we design for.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {neighborhoods.map((neighborhood, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-muted-foreground">{neighborhood.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== ESTATE FEATURES ========== */}
      <Section className="bg-zinc-50 py-20 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Engineering for Estate-Scale Demands
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                Standard residential products can&apost handle Winnetka&apos;s estate requirements. We engineer differently.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {estateFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <feature.icon className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Estate Project Questions
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                What Winnetka homeowners ask about our estate-grade systems.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CLUSTER LINKS ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Winnetka Homeowner Resources
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <Link
                href="/service-areas/winnetka-il/zoning-guide"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <ShieldCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">
                  Winnetka Permitting & Zoning
                </h3>
                <p className="text-muted-foreground mb-6">
                  Navigating the Village of Winnetka&apos;s strict architectural
                  review board and ravine protection ordinances.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  Read the Guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/service-areas/winnetka-il/louvered-pergolas"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                  <Crown className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-2xl font-bold transition-colors">
                  Louvered Roofs for Estates
                </h3>
                <p className="text-muted-foreground mb-6">
                  Large-span engineering capabilities that allow us to cover
                  expansive bluestone patios without cluttering columns.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-edg-brand py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Elevate Your Winnetka Estate?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Schedule a consultation with our estate design specialists.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                >
                  Schedule Private Consult{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
