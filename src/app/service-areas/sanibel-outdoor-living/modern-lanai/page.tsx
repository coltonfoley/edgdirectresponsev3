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
  Droplets,
  Sun,
  Thermometer,
  Zap,
  Eye,
  AlertTriangle,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modern Lanai Sanibel Island | Louvered Roof Alternative | EDG',
  description:
    'The evolution of outdoor living: motorized louvered roof systems as a modern alternative to traditional screened lanais. Hurricane-rated, sanctuary-compliant designs for Sanibel & Captiva.',
  openGraph: {
    title: 'Modern Lanai Sanibel Island | Louvered Roof Alternative | EDG',
    description: 'Next-generation outdoor living systems for Sanibel. The modern alternative to traditional screened lanais with adjustable shade and rain protection.',
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
  'Hurricane-rated engineering',
  'No rescreening maintenance',
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
    modern: 'No screens, 10yr warranty, 20+ yr expected lifespan',
    winner: 'modern',
  },
  {
    feature: 'Impermeable Surface',
    traditional: 'Counts toward 40% limit',
    modern: 'Often classified permeable when open',
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
    title: 'Hurricane Engineering',
    description:
      'Miami-Dade County NOA certified for 175+ mph winds—exceeding most traditional lanai construction. Built with marine-grade 6061-T6 aluminum for salt-air resistance.',
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
    question: 'Does a modern lanai count toward Sanibel\'s 40% impermeable surface limit?',
    answer:
      'Often it does not—or counts less than a traditional lanai. When louvers are open, rainwater passes through to the ground below, which means the structure is often classified as permeable. Traditional lanais with solid roofs are always impermeable. This can be a significant advantage on Sanibel where every square foot of coverage allowance matters.',
  },
  {
    question: 'Will a modern lanai protect against bugs like a screened lanai?',
    answer:
      'A basic louvered system does not include bug protection. However, we can integrate motorized retractable screens that deploy when needed. This gives you the best of both worlds—open air and Gulf views most of the time, with bug protection available at the touch of a button.',
  },
  {
    question: 'Is a louvered roof as hurricane-resistant as a traditional lanai?',
    answer:
      'More resistant. Our louvered systems carry Miami-Dade County NOAs (Notices of Acceptance) rated for 175+ mph winds—exceeding the typical construction of traditional screen enclosures. The marine-grade aluminum and engineered beam connections are specifically designed for coastal high-velocity hurricane zones like Sanibel.',
  },
  {
    question: 'What does a modern lanai cost compared to rebuilding a traditional lanai?',
    answer:
      'Traditional lanai replacement typically runs $50-175 per square foot. Premium motorized louvered systems range from $120-200 per square foot installed, depending on features and site complexity. While the initial investment is higher, the modern system costs significantly less over 20 years due to zero maintenance (no rescreening, no painting, no wood rot) while delivering superior functionality and higher resale value.',
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
      <section className="bg-edg-dark relative min-h-[85vh] overflow-hidden pt-24 pb-16 lg:min-h-[75vh]">
        {/* Background Image - Full visibility on right side */}
        <div className="absolute inset-0 lg:left-[35%]">
          <Image
            src={images.pages.serviceAreas.sanibelShopros}
            alt="Modern gray and white louvered roof system - Sanibel Island modern lanai with R-Shade"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
          {/* Mobile gradient - lighter for brighter image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 lg:hidden" />
          {/* Desktop gradient - lighter fade from left for text readability */}
          <div className="from-edg-dark via-edg-dark/80 to-transparent absolute inset-0 hidden bg-gradient-to-r lg:block" />
        </div>

        <Container className="relative z-10 h-full">
          <div className="mb-8 lg:mb-12">
            <Breadcrumb
              items={[
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Sanibel, FL', href: '/service-areas/sanibel-outdoor-living' },
                { label: 'Modern Lanai' },
              ]}
            />
          </div>
          
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left: Text Content */}
            <FadeIn>
              <div className="max-w-xl">
                <span className="text-edg-brand-dark bg-edg-brand/10 border-edg-brand/20 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-xs font-bold tracking-widest uppercase">
                  <MapPin className="h-4 w-4" /> Sanibel & Captiva Island
                </span>
                <h1 className="hero-title mb-6 text-white">
                  The Modern Lanai:
                  <span className="text-edg-brand block">Next-Generation Outdoor Living</span>
                </h1>
                <p className="text-text-inverse-muted mb-8 text-lg leading-relaxed md:text-xl">
                  Skip the static screen box. Discover the intelligent alternative to traditional lanais—
                  adjustable shade, hurricane-rated engineering, and seamless Gulf views.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact?area=sanibel&product=modern-lanai&source=leads-sanibel-modern-lanai">
                    <Button size="lg" className="px-8 text-lg">
                      Design Your Modern Lanai{' '}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="/service-areas/sanibel-outdoor-living"
                    className="text-text-inverse-muted hover:text-edg-brand-dark inline-flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Sanibel
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            {/* Right: Spacer for image on desktop */}
            <div className="hidden lg:block" />
          </div>
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
                  Sanibel strictly limits developed area to 40% of your property. Traditional lanais 
                  with solid roofs always count toward this limit—but modern louvered systems often do not.
                </p>
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  When louvers are open, rainwater passes through to the ground below. This permeability 
                  means the structure may not count as "impermeable coverage," freeing up valuable square 
                  footage for other outdoor improvements.
                </p>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                  <div className="flex items-start gap-3">
                    <Info className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Zoning Note:</strong> Every property is different. We work with Sanibel's 
                      Planning Department to ensure your modern lanai design maximizes your allowable 
                      coverage while respecting sanctuary codes.
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
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
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
                    Hurricane-Rated Pergolas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Explore our full range of louvered roof systems engineered specifically 
                    for Sanibel's High Velocity Hurricane Zone.
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
