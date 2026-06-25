import type { Metadata } from 'next';
import Image from 'next/image';
import * as images from '@/lib/images';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  Home,
  ShieldCheck,
  CheckCircle2,
  Wind,
  Sun,
  Thermometer,
  Eye,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modern Lanai Sanibel | Pool Cage Alternative | EDG',
  description:
    'Modern lanai and pool cage alternative planning for Sanibel and Captiva homes: louvered roofs, motorized screens, coastal materials, and permit review.',
  openGraph: {
    title: 'Modern Lanai Sanibel | Pool Cage Alternative | EDG',
    description:
      'Modern lanai and screen enclosure alternatives for Sanibel homes with adjustable shade, rain control, and coastal permit planning.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: {
    canonical: '/service-areas/sanibel-outdoor-living/modern-lanai',
  },
  keywords: [
    'modern lanai sanibel',
    'lanai alternative',
    'lanai vs pergola',
    'louvered roof sanibel',
    'upgrade lanai florida',
    'motorized lanai',
    'contemporary outdoor living sanibel',
  ],
};

const modernBenefits = [
  'Adjustable shade & rain protection',
  'Coastal engineering documentation',
  'Less fixed-screen maintenance',
  'Better airflow & temperature control',
];

const comparisonFeatures = [
  {
    feature: 'Shade Control',
    traditional: 'Fixed roof - no adjustment',
    modern: 'Motorized louvers adjust 0°-150°',
    winner: 'modern',
  },
  {
    feature: 'Rain Protection',
    traditional: 'Solid roof - always covered',
    modern: 'Watertight seal when closed, open to sky when desired',
    winner: 'modern',
  },
  {
    feature: 'Airflow & Cooling',
    traditional: 'Screens block breeze, trap heat',
    modern: 'Open sides + vented roof reduces temps 15-20°F',
    winner: 'modern',
  },
  {
    feature: 'Maintenance',
    traditional: 'Screen tears, rescreening every 5-10 years',
    modern: 'Optional retractable screens and fewer fixed-screen surfaces',
    winner: 'modern',
  },
  {
    feature: 'Impermeable Surface',
    traditional: 'Counts in developed-area review',
    modern: 'Must be reviewed against Sanibel coverage rules',
    winner: 'modern',
  },
  {
    feature: 'Aesthetic',
    traditional: 'Dated, boxy appearance',
    modern: 'Sleek architectural statement',
    winner: 'modern',
  },
];

const modernFeatures = [
  {
    title: 'Adaptive Weather Control',
    description:
      'Unlike a fixed lanai roof, motorized louvers rotate to track the sun or seal tight against rain. Sensors detect weather changes and adjust automatically—even when you are not home.',
    icon: Sun,
  },
  {
    title: 'Temperature Management',
    description:
      'Traditional lanais trap heat. Our systems vent hot air upward while adjustable louvers provide precise shade control, keeping your outdoor space cooler on the hottest Gulf Coast days.',
    icon: Thermometer,
  },
  {
    title: 'Coastal Engineering Package',
    description:
      'Selected louvered systems can be specified with wind documentation, Florida Product Approval, or Miami-Dade NOA information where applicable. Sanibel still reviews the specific project.',
    icon: Wind,
  },
  {
    title: 'Optional Motorized Screens',
    description:
      'Want the best of both? Add retractable screens that deploy when you need bug protection and disappear when you want unobstructed Gulf views.',
    icon: Eye,
  },
];

const neighborhoods = [
  {
    name: 'Gulf-Front Estates',
    description:
      'Beachfront homes along West Gulf Drive and East Gulf Drive face intense afternoon sun and salt spray. A modern lanai with adjustable louvers lets you control glare on the water while maximizing panoramic views. Unlike fixed-screen lanais that permanently obscure the horizon, open louvers frame the Gulf like architectural art.',
  },
  {
    name: 'Canal Homes & Waterfront',
    description:
      'Properties along the Sanibel River and interior canals rely on seabreezes for cooling. Traditional enclosed lanais block airflow, but a louvered system captures crosswinds while providing shade. Perfect for homes on Dixie Beach Boulevard and Buttonwood Lane.',
  },
  {
    name: 'The Dunes & Wulfert',
    description:
      'These prestigious communities demand outdoor living that matches refined architecture. The sleek lines of a modern lanai complement coastal contemporary and traditional Florida designs better than bulky screen enclosures. Golf course views remain unobstructed when louvers are open.',
  },
  {
    name: 'Roosevelt Channel & Blind Pass',
    description:
      'Near these dynamic waterways, wind patterns shift throughout the day. A modern lanai adapts—open louvers for morning coffee catching the breeze, partially closed for afternoon shade, fully sealed if a storm blows through.',
  },
];

const faqs = [
  {
    question: 'What is the difference between a lanai and a louvered pergola?',
    answer:
      'A traditional lanai is a covered, screened porch attached to the home with a fixed roof. A louvered pergola (what we call a "modern lanai") replaces the fixed roof with adjustable aluminum blades that rotate to control sun, shade, and rain. You get the same covered outdoor living space, but with intelligent weather adaptation instead of static protection.',
  },
  {
    question: 'Can I replace my existing lanai with a modern louvered system?',
    answer:
      'Yes. Many Sanibel homeowners are replacing traditional lanais—especially after Hurricane Ian damage. If your lanai was damaged, the 50% rule may require full reconstruction anyway, making this the perfect time to upgrade. We can often reuse existing concrete pads and structural connections while replacing the roof system.',
  },
  {
    question: 'Does a modern lanai count toward Sanibel developed-area limits?',
    answer:
      'Do not assume that from product type alone. A louvered system, screen enclosure, slab, deck, drainage condition, and existing developed area all need to be reviewed against Sanibel rules. EDG can help prepare the questions, but the City determines how a specific project is counted.',
  },
  {
    question: 'Will a modern lanai protect against bugs like a screened lanai?',
    answer:
      'A basic louvered system does not include bug protection. However, we can integrate motorized retractable screens that deploy when needed. This gives you the best of both worlds—open air and Gulf views most of the time, with bug protection available at the touch of a button.',
  },
  {
    question: 'Is a louvered roof as hurricane-resistant as a traditional lanai?',
    answer:
      'It depends on the selected system, engineering, anchoring, exposure, and installation. The advantage of a premium louvered system is that it can be specified with stronger documentation than many older screen enclosures, but Sanibel review and project-specific engineering still matter.',
  },
  {
    question: 'What does a modern lanai cost compared to rebuilding a traditional lanai?',
    answer:
      'Traditional lanai and screen enclosure replacement can vary widely by size, engineering, floodplain conditions, screens, concrete, and storm damage. Premium motorized louvered systems are usually a higher-spec option, so EDG compares the full scope: structure, screens, drainage, electrical, permitting, and long-term maintenance.',
  },
];

export default function ModernLanaiPage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: 'Modern Lanai Installation - Sanibel',
              description:
                'Motorized louvered roof systems as a modern alternative to traditional screened lanais for Sanibel Island homes.',
              url: 'https://www.edgpatioshade.com/service-areas/sanibel-outdoor-living/modern-lanai',
              image: `https://www.edgpatioshade.com${images.pages.serviceAreas.sanibelShopros}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ========== HERO ========== */}
      <section className="bg-edg-dark relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24 pb-16 lg:min-h-[75vh]">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.pages.serviceAreas.sanibelShopros}
            alt="Modern gray and white louvered roof system - Sanibel Island modern lanai with R-Shade"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Sanibel, FL', href: '/service-areas/sanibel-outdoor-living' },
                { label: 'Modern Lanai' },
              ]}
            />
          </div>
          
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                <MapPin className="h-4 w-4" /> Sanibel & Captiva Island
              </span>
              <h1 className="hero-title mb-6 text-white">
                The Modern Lanai:
                <span className="text-edg-brand block">Next-Generation Outdoor Living</span>
              </h1>
              <p className="text-text-inverse-muted mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
                Skip the static screen box. Compare a modern lanai or pool
                cage alternative with adjustable shade, retractable screens,
                coastal documentation, and cleaner Gulf views.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact?area=sanibel&product=modern-lanai&source=leads-sanibel-modern-lanai">
                  <Button size="lg" className="px-8 text-lg">
                    Design Your Modern Lanai{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="/service-areas/sanibel-outdoor-living"
                  className="text-text-inverse-muted hover:text-edg-brand-dark inline-flex items-center gap-2 text-sm transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Sanibel
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== MODERN BENEFITS BAR ========== */}
      <section className="bg-edg-dark border-t border-white/5 py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {modernBenefits.map((benefit, i) => (
                <span key={i} className="text-text-inverse-muted flex items-center gap-2">
                  <CheckCircle2 className="text-edg-brand-dark h-4 w-4" /> {benefit}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ========== WHAT IS A MODERN LANAI ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title mb-6">Redefining Outdoor Living on Sanibel</h2>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                For decades, Florida homeowners have accepted the traditional lanai—a fixed roof, static screens, 
                and little flexibility—as the only option for covered outdoor living. But Sanibel Island deserves better.
              </p>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                <strong>The Modern Lanai</strong> is our term for a louvered roof system that replaces the rigid 
                structure of yesterday with intelligent, adjustable design. Instead of a permanent barrier between 
                you and the Gulf Coast environment, you get precise control over shade, airflow, and weather protection.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                It is the same covered outdoor space you want, evolved for how you actually live—adaptable, 
                low-maintenance, and engineered for Sanibel's unique coastal challenges.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== COMPARISON TABLE ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Traditional Lanai vs. Modern Lanai</h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                See how the next generation of outdoor living compares to conventional screened enclosures.
              </p>
            </div>

            <div className="overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <div className="grid grid-cols-12 gap-4 bg-zinc-100 p-4 font-bold dark:bg-zinc-900">
                <div className="col-span-3">Feature</div>
                <div className="col-span-4">Traditional Lanai</div>
                <div className="col-span-5 text-edg-brand-text">Modern Lanai (Louvered)</div>
              </div>
              {comparisonFeatures.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-4 border-t border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <div className="col-span-3 font-semibold">{row.feature}</div>
                  <div className="col-span-4 text-text-secondary">{row.traditional}</div>
                  <div className="col-span-5 text-edg-brand-text font-medium">{row.modern}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact?area=sanibel&product=modern-lanai&source=leads-sanibel-modern-lanai">
                <Button size="lg" className="px-8">
                  Get a Modern Lanai Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== MODERN FEATURES ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">What Makes It "Modern"</h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Four key innovations that transform how Sanibel homeowners experience outdoor living.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {modernFeatures.map((item, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <IconWrapper icon={item.icon} variant="brand" size="lg" className="mb-4" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== NEIGHBORHOODS ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Modern Lanais for Every Sanibel Neighborhood</h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                From beachfront estates to canal homes, discover how a modern lanai enhances outdoor living throughout the island.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((area, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-xl font-bold">{area.name}</h3>
                  <p className="text-text-secondary">{area.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== IMPERMEABLE SURFACE ADVANTAGE ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="section-title mb-6">
                  The Impermeable Surface Advantage
                </h2>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  Sanibel developed-area and floodplain questions can shape
                  the project before the product is chosen. Traditional lanais,
                  pool cages, slabs, decks, pavers, and louvered systems all
                  need to be reviewed in context.
                </p>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  When louvers are open, rain can pass through the roof plane,
                  but that does not automatically settle the permit question.
                  The safest planning move is to review the survey, drainage,
                  existing developed area, and Sanibel guidance before quoting
                  the final layout.
                </p>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <div className="flex items-start gap-3">
                    <Info className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Zoning Note:</strong> Every property is different.
                      Use the Sanibel permit guide before choosing a footprint,
                      attachment method, screens, or electrical package.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden ">
                <Image
                  src={images.pages.serviceAreas.sanibelShade}
                  alt="Modern louvered roof with screens deployed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== FAQ ========== */}
      <Section className="section-md bg-surface-muted">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Common Questions About Modern Lanais
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl">
                Everything you need to know about upgrading from traditional to modern outdoor living.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} variant="muted" padding="lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CLUSTER LINKS ========== */}
      <Section className="section-md bg-surface">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">
                Explore Sanibel Outdoor Living Options
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              <Link
                href="/service-areas/sanibel-outdoor-living/louvered-pergolas"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Home} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Louvered Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore our full range of louvered roof systems engineered specifically 
                    for Sanibel&apos;s coastal review, salt-air exposure, and
                    permit documentation needs.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/lanai-replacement"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={ShieldCheck} variant="brand" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Lanai Replacement
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Replacing a damaged lanai after Hurricane Ian? Learn why rebuilding 
                    with a modern system makes sense.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    View Replacement Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>

              <Link
                href="/service-areas/sanibel-outdoor-living/zoning-guide"
                className="group block"
              >
                <Card
                  variant="muted"
                  padding="lg"
                  className="h-full transition-all duration-200 hover:border-edg-brand/50 hover:shadow-lg"
                >
                  <IconWrapper icon={Info} variant="default" size="lg" className="mb-4" />
                  <h3 className="group-hover:text-edg-brand-text mb-3 text-2xl font-bold transition-colors">
                    Sanibel Permit Guide
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Review floodplain, 50% rule, product approval, and screen
                    enclosure questions before choosing a modern lanai layout.
                  </p>
                  <span className="text-edg-brand-text flex items-center gap-2 font-bold transition-all group-hover:gap-3">
                    Read Permit Guide <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <section className="section-md bg-edg-brand">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-edg-dark mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Modernize Your Outdoor Living?
              </h2>
              <p className="text-edg-dark/80 mb-8 text-xl">
                Get a free consultation and see how a modern lanai transforms your Sanibel home.
              </p>
              <Link href="/contact?area=sanibel&product=modern-lanai&source=leads-sanibel-modern-lanai">
                <Button size="lg" variant="dark" className="px-8 text-lg">
                  Schedule Free Design Consultation{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
