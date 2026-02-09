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
  Snowflake,
  Building,
  FileCheck,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Motorized Pergolas & Patio Shades in Northbrook, IL | EDG',
  description:
    'Transform your Northbrook home with hurricane-rated louvered pergolas and retractable screens. Custom designed for 60062 zoning codes and Georgian architecture.',
  alternates: {
    canonical: '/service-areas/northbrook-il',
  },
};

const localBenefits = [
  'Familiar with Village of Northbrook building codes',
  'Experience with Georgian & Colonial architecture',
  '30psf snow load engineering standard',
  'Licensed & insured for Cook County',
];

const neighborhoods = [
  {
    name: 'Techny',
    description:
      'The winding lanes of Techny feature expansive properties perfect for estate-scale outdoor living systems. Our large-span engineering minimizes columns while maximizing your view.',
  },
  {
    name: 'Shermer Road Corridor',
    description:
      'Classic brick colonials along Shermer Road benefit from our powder-coated systems that complement traditional architecture while adding modern functionality.',
  },
  {
    name: 'Northbrook Heights',
    description:
      'Elevated properties in Northbrook Heights experience significant wind exposure. Our Miami-Dade hurricane-rated systems provide peace of mind during storms.',
  },
];

const faqs = [
  {
    question: 'Do I need a permit for a pergola in Northbrook?',
    answer:
      'Yes, the Village of Northbrook requires permits for most outdoor structures. Our team handles the entire permit application process, including plat of survey markups, structural engineering stamps, and village meetings.',
  },
  {
    question: 'How long does permit approval take in Northbrook?',
    answer:
      'Northbrook permit approval typically takes 4-6 weeks. We submit complete packages to minimize delays and attend any required village meetings on your behalf.',
  },
  {
    question: 'Can you match my home\'s Georgian architecture?',
    answer:
      'Absolutely. We offer custom powder coating to match your brick, trim, or window mullions. Our columns can be detailed to complement Georgian and Colonial styles common in Northbrook.',
  },
];

export default function NorthbrookHubPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Northbrook',
            description:
              'Hurricane-rated louvered pergolas and retractable screens custom designed for Northbrook homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Northbrook',
            },
            url: 'https://www.edgpatioshade.com/service-areas/northbrook-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png',
          }),
        }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <Container className="relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold tracking-wider uppercase">
                <MapPin className="h-4 w-4" /> Service Area: Northbrook, IL
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Motorized Pergolas & Shades
                <span className="text-edg-brand block">for Northbrook Homes</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Hurricane-rated louvered pergolas and retractable screens engineered
                for Northbrook&apos;s 30psf snow loads. Custom designed to complement
                the classic Georgian and Colonial architecture of 60062.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Request Northbrook Consultation{' '}
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

      {/* ========== CHALLENGES ========== */}
      <Section className="bg-white py-20 dark:bg-zinc-950">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Built for Northbrook&apos;s Unique Challenges
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                Northbrook&apos;s weather and architecture require specialized solutions.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Snowflake className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Wind & Snow Load</h3>
                <p className="text-muted-foreground">
                  Northbrook code requires 30psf snow ratings. Our louvers open
                  automatically to protect your structure from heavy snow accumulation.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Building className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Architecture Match</h3>
                <p className="text-muted-foreground">
                  From Shermer Road to the winding lanes of Techny, we match the
                  classic Georgian and Colonial styles with custom powder coating.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <FileCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Zoning Compliance</h3>
                <p className="text-muted-foreground">
                  We handle the entire Application for Permit process with the Village
                  of Northbrook, ensuring 15ft height compliance.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="bg-zinc-50 py-20 dark:bg-zinc-900">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Serving Every Northbrook Neighborhood
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
                We understand the unique characteristics of Northbrook&apos;s distinct areas.
              </p>
            </div>
            <div className="space-y-8">
              {neighborhoods.map((neighborhood, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <h3 className="mb-3 text-xl font-bold">{neighborhood.name}</h3>
                  <p className="text-muted-foreground">{neighborhood.description}</p>
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
                Common Questions About Northbrook Projects
              </h2>
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
                Explore Northbrook Resources
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              <Link
                href="/service-areas/northbrook-il/zoning-guide"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="bg-edg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <ShieldCheck className="text-edg-brand-text dark:text-edg-brand h-6 w-6" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Northbrook Zoning Guide
                </h3>
                <p className="text-muted-foreground mb-6">
                  Permits, setbacks, and height requirements specific to Northbrook.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/service-areas/northbrook-il/motorized-pergolas"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                  <Home className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  Louvered Pergolas
                </h3>
                <p className="text-muted-foreground mb-6">
                  Hurricane-rated systems engineered for Northbrook&apos;s weather.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/projects"
                className="group hover:border-edg-brand/50 relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="group-hover:text-edg-brand-text dark:group-hover:text-edg-brand mb-3 text-xl font-bold transition-colors">
                  View Local Projects
                </h3>
                <p className="text-muted-foreground mb-6">
                  See completed projects in Northbrook and nearby communities.
                </p>
                <span className="text-edg-brand-text dark:text-edg-brand flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                  View Gallery <ArrowRight className="h-4 w-4" />
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
                Ready to Start Your Northbrook Project?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation with our local design team.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-edg-dark hover:bg-edg-dark/90 rounded-full px-8 text-lg text-white"
                >
                  Schedule Free Consultation{' '}
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
