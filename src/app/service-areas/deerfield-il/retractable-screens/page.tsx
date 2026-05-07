import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  Home,
  Lock,
  ShieldCheck,
  Smartphone,
  Wind,
} from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { generateFAQSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Retractable Patio Screens in Deerfield, IL | EDG',
  description:
    'Motorized retractable patio screens for Deerfield, IL homes. Reduce bugs, wind, glare, and privacy issues with custom outdoor screen layouts.',
  alternates: {
    canonical: '/service-areas/deerfield-il/retractable-screens',
  },
  openGraph: {
    title: 'Motorized Retractable Patio Screens in Deerfield, IL | EDG',
    description:
      'Custom motorized patio screens for Deerfield outdoor living spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  keywords: [
    'deerfield il motorized patio screens',
    'deerfield il retractable patio screens',
    'deerfield il motorized porch screens',
    'deerfield il outdoor motorized screens',
    'deerfield patio screen installer',
  ],
};

const benefits = [
  {
    icon: Wind,
    title: 'Wind control for exposed patios',
    description:
      'Many Deerfield patios sit open to side-yard wind or long backyard sightlines. A tracked motorized screen can calm the space without permanently closing it in.',
  },
  {
    icon: Eye,
    title: 'Privacy from nearby homes',
    description:
      'Screen fabrics can reduce visibility from neighboring windows and yards while still preserving daylight and the feeling of being outside.',
  },
  {
    icon: Lock,
    title: 'Bugs and glare in one system',
    description:
      'North Shore evenings are easier to enjoy when one button handles insects, low sun, and visual comfort around the patio or porch.',
  },
  {
    icon: Smartphone,
    title: 'Simple daily operation',
    description:
      'Remote control, app control, and sensor options make screens easy to use when the sun drops, wind shifts, or guests move outside.',
  },
];

const faqs = [
  {
    question: 'How much do motorized patio screens cost in Deerfield?',
    answer:
      'Pricing depends on opening width, screen height, fabric, housing details, wiring, and whether the screens are part of a pergola or retrofit. Most homeowners should expect a custom quote after measurements rather than relying on a kit price online.',
  },
  {
    question: 'Can screens be added to an existing porch, pergola, or patio cover?',
    answer:
      'Often they can. We need to confirm the structure can accept the housing and side tracks, that the openings are square enough for clean operation, and that wiring or controls can be handled cleanly.',
  },
  {
    question: 'Do motorized screens help with mosquitoes?',
    answer:
      'Yes. Screen fabric and proper side tracks help block mosquitoes and other insects far better than open shade structures. The key is designing the openings so there are not obvious gaps around the screen path.',
  },
  {
    question: 'Will screens make my patio too dark?',
    answer:
      'Not if the fabric is chosen correctly. We help select openness and color based on privacy, glare, view, and how much daylight you want to keep moving into the house.',
  },
];

const gallery = [
  {
    src: images.systems.shades.hero,
    alt: 'Motorized retractable screen system for Deerfield patio shade planning',
  },
  {
    src: images.systems.shades.deployed,
    alt: 'Deployed motorized patio screen for wind bug and privacy control',
  },
  {
    src: images.brand.hero.screens,
    alt: 'Retractable screen installation on outdoor living structure',
  },
];

export default function DeerfieldRetractableScreensPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Motorized Retractable Patio Screens in Deerfield, IL',
    description:
      'Custom motorized retractable patio screens for Deerfield porches, patios, pergolas, and outdoor rooms.',
    brand: {
      '@type': 'Brand',
      name: 'EDG Patio & Shade',
    },
    image: gallery.map((item) => `https://www.edgpatioshade.com${item.src}`),
    category: 'Motorized Exterior Screens',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://www.edgpatioshade.com/service-areas/deerfield-il/retractable-screens',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <main className="min-h-screen bg-surface">
        <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-edg-dark pt-24 pb-16 text-white">
          <div className="absolute inset-0">
            <Image
              src={images.systems.shades.hero}
              alt="Motorized retractable patio screens for Deerfield Illinois homes"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <Container className="relative z-10">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Deerfield, IL', href: '/service-areas/deerfield-il' },
                { label: 'Retractable Screens' },
              ]}
              className="mb-6"
            />
            <Link
              href="/service-areas/deerfield-il"
              className="mb-6 inline-flex items-center text-zinc-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Deerfield service area
            </Link>
            <div className="max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Motorized Retractable Patio Screens in Deerfield
              </h1>
              <p className="mb-8 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                Outdoor screen systems for Deerfield patios, porches, pergolas, and
                covered spaces that need more comfort, privacy, and bug control.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact?type=price&product=shades&source=deerfield_screens">
                  <Button size="lg">Get a Screen Layout Review</Button>
                </Link>
                <Link href="/systems/shades">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    View Screen System Details
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <Section className="section-md">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">Why This Fits Deerfield</div>
                <h2 className="section-title mb-6">
                  A practical way to make the patio usable more often.
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                  Deerfield homeowners often search for motorized patio screens after
                  living with a space that is almost right. The patio has enough room
                  for dining, the porch has good cover, or the pergola already frames
                  the outdoor room. But wind, bugs, glare, or neighbor sightlines keep
                  the space from being comfortable as often as it should be.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary">
                  Motorized retractable screens solve that problem because they are
                  there when you need them and gone when you do not. They can drop for
                  dinner, privacy, and low-angle sun, then retract when the weather is
                  calm and the view matters more. For many North Shore homes, that
                  flexibility is more useful than a fixed wall or a basic shade.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.systems.shades.deployed}
                  alt="Deployed motorized patio screen for Deerfield outdoor comfort"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Local Benefits</div>
              <h2 className="section-title mb-4">What screens solve on Deerfield patios</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} variant="default" padding="lg">
                  <div className="mb-4 flex items-center gap-3">
                    <benefit.icon className="h-5 w-5 text-edg-brand-text" />
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                  </div>
                  <p className="leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-md">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Good retrofit candidates</h2>
                <p className="mb-4 leading-relaxed text-text-secondary">
                  Existing covered patios, screened-porch openings, pergolas, and
                  outdoor kitchens are often strong candidates for motorized screens.
                  The main question is whether the opening has clean attachment
                  points, whether the housing can be integrated without looking
                  heavy, and whether the fabric path can stay tight enough to work
                  as intended.
                </p>
                <p className="leading-relaxed text-text-secondary">
                  We also look at how you use the space. A family patio near a play
                  area may need bug control first. A dinner patio near the property
                  line may need privacy first. A west-facing porch may need glare
                  control first. Those priorities shape the fabric and control plan.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-3xl font-bold">Planning details that matter</h2>
                <div className="grid gap-4">
                  {[
                    'Opening width, height, and square alignment',
                    'Track placement and housing visibility',
                    'Fabric openness for privacy, view, and daylight',
                    'Electrical path, controls, and smart-home needs',
                    'Whether screens should be phased with a pergola',
                  ].map((item) => (
                    <Card key={item} variant="muted" padding="lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-edg-brand-text" />
                        <p className="font-medium text-text-primary">{item}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Visual Direction</div>
              <h2 className="section-title mb-4">Screen systems and fabric behavior</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.alt} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="section-lg">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <div className="label-editorial-brand mb-4">FAQ</div>
                <h2 className="section-title">Deerfield screen questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} variant="default" padding="lg">
                    <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                    <p className="leading-relaxed text-text-secondary">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <section className="section-lg bg-surface-dark text-text-inverse">
          <Container>
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Ready to review a Deerfield screen layout?
                </h2>
                <p className="mb-8 max-w-xl text-xl text-text-inverse-muted">
                  Send photos and rough opening dimensions. We will help you decide
                  whether screens alone solve the problem or whether the patio should
                  be planned with a pergola or enclosure.
                </p>
                <Link href="/contact?type=price&product=shades&source=deerfield_screens_bottom">
                  <Button size="lg">Start Your Quote</Button>
                </Link>
              </div>
              <div className="hidden border-l border-border-inverse pl-16 md:block">
                <div className="space-y-4 text-text-inverse-muted">
                  <h4 className="text-lg font-bold uppercase tracking-wide">
                    Keep exploring
                  </h4>
                  <Link href="/service-areas/deerfield-il" className="flex items-center gap-3">
                    <Home className="h-4 w-4 text-edg-brand" />
                    Back to Deerfield service area
                  </Link>
                  <Link href="/systems/shades" className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-edg-brand" />
                    Full retractable screen specs
                  </Link>
                  <Link href="/guides/magnatrack-screens-cost" className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-edg-brand" />
                    MagnaTrack screens cost guide
                  </Link>
                  <Link href="/systems/pergolas" className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-edg-brand" />
                    Compare pergola systems
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
