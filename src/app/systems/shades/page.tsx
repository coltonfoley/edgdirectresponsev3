import type { Metadata } from 'next';
import Link from 'next/link';
import { ShadesGalleryClient } from './ShadesGalleryClient';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import * as images from '@/lib/images';
import {
  ArrowRight,
  DollarSign,
  Wind,
  Sun,
  Eye,
  Shield,
  Smartphone,
  Lock,
  Plus,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MagnaTrack Motorized Screens & Cost Guide | Exterior Shades | EDG',
  description: 'MagnaTrack motorized screens and exterior shades with cost guidance, self-correcting track technology, wind control, bug protection, and UV shade.',
  keywords: ['motorized screens', 'retractable screens', 'patio screens', 'exterior shades', 'magnaTrack screens', 'outdoor screens'],
  openGraph: {
    title: 'MagnaTrack Motorized Screens & Exterior Shades | EDG',
    description: 'MagnaTrack motorized screens with cost guidance and self-correcting track technology. Block wind, bugs, and UV while keeping your view.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EDG Patio & Shade',
  },
  alternates: { canonical: '/systems/shades' },
};

// ===== DATA =====
const galleryImages = images.galleries.shades.map((src, index) => ({
  type: 'image' as const,
  src,
  alt: [
    'Motorized mesh screens deployed on white pergola providing UV protection',
    'Close-up detail of motorized screen fabric and track system',
    'Commercial pergola with retractable shade screens overlooking lake',
    'Motorized screen deployed to provide sun shade on a residential patio',
  ][index],
}));

const specs = [
  { label: 'Maximum Width', value: "Up to 30'" },
  { label: 'Mesh Options', value: '5%, 10%, 20% openness' },
  { label: 'Wind Rating', value: 'Up to 35 mph' },
  { label: 'UV Blockage', value: 'Up to 97%' },
  { label: 'Temperature Reduction', value: 'Up to 20°F' },
  { label: 'Control Options', value: 'Remote, smartphone, sensors' },
];

const features = [
  {
    icon: Shield,
    title: 'MagnaTrack Self-Correcting System',
    description:
      'Traditional screens blow out of their tracks in high winds. Our MagnaTrack systems use powerful neodymium magnets embedded in the track to maintain constant tension on the fabric. When wind gusts hit, the magnets allow the screen to flex and then snap back into place—automatically self-correcting without manual intervention.',
  },
  {
    icon: Sun,
    title: '97% UV Blockage',
    description:
      'Solar mesh fabrics block up to 97% of harmful UV rays while preserving your view. This dramatically reduces solar heat gain, keeping patios up to 20°F cooler during peak summer hours. Your indoor spaces stay cooler too, reducing air conditioning costs and protecting furniture from sun damage.',
  },
  {
    icon: Wind,
    title: 'Wind Resistance',
    description:
      'Engineered and tested to withstand sustained winds up to 35 mph—conditions that would destroy conventional screens. The magnetic track system works with the wind rather than against it, allowing controlled flex while maintaining position. Perfect for exposed locations and lakeside properties.',
  },
  {
    icon: Eye,
    title: 'Bug Protection',
    description:
      'Fine insect mesh options stop mosquitoes, gnats, and no-see-ums without compromising airflow. The precision-fit tracks eliminate gaps where bugs typically enter, creating a true barrier between you and pests. Enjoy evenings outdoors without chemical repellents or citronella candles.',
  },
  {
    icon: Smartphone,
    title: 'Smart Home Integration',
    description:
      'Full integration with home automation systems including Control4, Crestron, Lutron, and Savant. Set schedules to lower screens automatically when the sun hits your patio, or connect to weather sensors for wind-responsive operation. Voice control via Alexa and Google Home available.',
  },
  {
    icon: Lock,
    title: 'Privacy Options',
    description:
      'Multiple opacity levels from sheer (5% openness) to complete privacy (0% openness with solid vinyl). During the day, darker fabrics create one-way visibility—you see out, but neighbors cannot see in. For total privacy, our Nano mesh and solid vinyl options provide complete screening.',
  },
];

const applications = [
  {
    category: 'Residential',
    items: [
      'Covered patios and porches',
      'Screened-in decks and balconies',
      'Gazebos and pavilions',
      'Garage door openings',
      'Outdoor kitchens and dining areas',
    ],
  },
  {
    category: 'Commercial',
    items: [
      'Restaurant outdoor dining patios',
      'Hotel terraces and pool decks',
      'Event venues and wedding spaces',
      'Country club outdoor lounges',
      'Retail storefront wind protection',
    ],
  },
];

const options = [
  {
    name: 'Fabric Selection',
    description: 'Multiple colors and openness factors (1%, 5%, 10%, 20%) to balance view, airflow, and sun protection.',
  },
  {
    name: 'Motor Options',
    description: 'Standard motors or ultra-quiet whisper motors for noise-sensitive installations.',
  },
  {
    name: 'Sensor Integration',
    description: 'Wind sensors auto-retract in high winds. Sun sensors deploy when UV hits threshold.',
  },
  {
    name: 'Recessed Housing',
    description: 'Hide the screen housing in walls, soffits, or columns for a clean architectural look.',
  },
  {
    name: 'Manual Override',
    description: 'Battery backup and manual crank options ensure operation during power outages.',
  },
  {
    name: 'Clear Vinyl',
    description: 'Crystal-clear vinyl options for weather protection without obstructing views.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Site visit to assess your space, discuss goals, and review fabric samples. We measure openings and evaluate mounting conditions.',
  },
  {
    number: '02',
    title: 'Measurement',
    description: 'Precision laser measurements ensure perfect fit. We account for structural considerations and integration with existing elements.',
  },
  {
    number: '03',
    title: 'Fabrication',
    description: 'Screens are custom-fabricated to your specifications. Lead time typically 4-6 weeks depending on options selected.',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Our certified installers handle electrical connections, programming, and system testing. Full walkthrough and training included.',
  },
];

const relatedProducts = [
  {
    name: 'Louvered Pergolas',
    description: 'Add a motorized roof for complete weather control.',
    href: '/systems/pergolas',
  },
  {
    name: 'Glass Enclosures',
    description: 'Frameless glass walls for year-round outdoor rooms.',
    href: '/systems/enclosures',
  },
  {
    name: 'Screen Cost Guide',
    description: 'Budget ranges for MagnaTrack motorized screens and patio screen retrofits.',
    href: '/guides/magnatrack-screens-cost',
  },
];

const faqs = [
  {
    question: 'How much do motorized screens cost?',
    answer: 'Motorized screen pricing depends on size, fabric selection, and control options. Entry-level systems start around $3,500 for a standard patio opening, with typical residential installations ranging from $5,000-$15,000. Commercial projects with multiple screens or extra-wide spans (20+ feet) range from $15,000-$50,000+. We provide detailed quotes after a site visit to measure and assess your specific requirements.',
  },
  {
    question: 'Can the screens handle wind?',
    answer: 'Yes—MagnaTrack systems are specifically engineered for wind resistance. The magnetic self-correcting track allows screens to withstand sustained winds up to 35 mph, far exceeding conventional zip screens. Wind sensors can be added to automatically retract screens when gusts exceed safe thresholds. For extreme wind conditions, we also offer manual override systems and heavy-duty commercial tracks rated even higher.',
  },
  {
    question: "What's the difference between MagnaTrack and regular screens?",
    answer: 'Traditional zip screens use fixed tracks with constant tension that fight against wind, eventually blowing out or causing fabric damage. MagnaTrack uses neodymium magnets embedded in the track to create adaptive tension—when wind hits, the magnets allow controlled flex and then snap the fabric back into perfect alignment. This self-correcting action eliminates the #1 service issue with motorized screens while providing superior wind resistance.',
  },
  {
    question: 'Do you offer clear vinyl options?',
    answer: 'Yes, we offer crystal-clear vinyl screens that provide weather protection without obstructing views. These are popular for seasonal enclosures, blocking wind and rain while maintaining visibility. Clear vinyl is available in various gauges (thicknesses) depending on your climate and usage requirements. Note that clear vinyl does not offer the same MagnaTrack self-correcting benefits as mesh fabrics.',
  },
  {
    question: "What's the warranty on motorized screens?",
    answer: 'Standard warranty includes 5 years on the motor and frame, 5 years on the fabric (against manufacturing defects), and 2 years on electronics and sensors. Extended warranties are available for commercial applications. As a design and supply partner, we also provide ongoing support and can source replacement parts from multiple manufacturers to ensure long-term serviceability.',
  },
  {
    question: 'Can screens be integrated with my smart home system?',
    answer: 'Absolutely. Our specified systems integrate with all major home automation platforms including Control4, Crestron, Lutron, Savant, and others. We also offer native app control, voice control via Alexa and Google Home, and hardwired switch options. Advanced programming allows scenes that coordinate screens with lighting, pergola louvers, and climate control systems.',
  },
];

export default function ShadesPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Motorized Retractable Screen Installation',
    description: 'Professional installation of MagnaTrack motorized screens with self-correcting track technology. Wind-rated exterior shades for UV protection, bug control, and privacy.',
    url: 'https://www.edgpatioshade.com/systems/shades',
  });

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'MagnaTrack Motorized Retractable Screens',
    description: 'Motorized exterior screens featuring MagnaTrack self-correcting technology with neodymium magnets. Blocks up to 97% of UV rays while withstanding 35 mph winds.',
    brand: {
      '@type': 'Brand',
      name: 'EDG Patio & Shade',
    },
    category: 'Motorized Exterior Shades',
    material: 'Vinyl-coated polyester mesh, aluminum housing',
    image: [
      images.brand.hero.screens,
      '/images/shades/shade-deployed-screens-01.jpg',
      images.brand.context.lake,
    ],
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      lowPrice: '3500',
      highPrice: '50000',
      offerCount: '6',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    featureList: [
      'MagnaTrack self-correcting magnetic track system',
      '97% UV blockage',
      'Up to 35 mph wind resistance',
      'Smart home integration compatible',
      'Insect mesh options available',
      'Maximum width up to 30 feet',
    ],
  };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="bg-surface min-h-screen">
        {/* ========== HERO: SPLIT SCREEN PRODUCT ========== */}
        <section className="pt-32 pb-12 lg:min-h-screen flex flex-col justify-center">
          <Container>
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb
                items={[
                  { label: 'Systems', href: '/systems' },
                  { label: 'Retractable Screens' },
                ]}
              />
            </div>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                <div className="label-editorial-brand mb-6 flex items-center gap-3">
                  <div className="h-px w-8 bg-edg-brand-dark"></div>
                  Sun & Wind Protection
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-primary leading-[0.9]">
                  Motorized <br /> Screens.
                </h1>
                <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-md">
                  Block 97% of UV rays and 35 mph winds without losing your view. 
                  MagnaTrack self-correcting technology keeps screens secure in any weather.
                </p>

                <div className="flex flex-col gap-4 mb-12">
                  <Link
                    href="/contact?type=price&product=shades"
                    data-conversion-name="book_call_click"
                  >
                    <Button size="lg" className="w-full sm:w-auto">
                      Configure System
                    </Button>
                  </Link>
                  <Link
                    href="tel:+18155810138"
                    data-conversion-name="phone_click"
                    className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm cursor-pointer hover:text-edg-brand-text transition-colors"
                  >
                    <span className="h-px w-8 bg-black/20"></span>
                    Speak to a designer
                  </Link>
                  <Link
                    href="/service-areas/chicago-il/retractable-screens"
                    className="text-sm font-medium text-edg-brand-text transition-colors hover:text-edg-brand"
                  >
                    Comparing city installers? See our Chicago retractable screen page.
                  </Link>
                  <Link
                    href="/guides/magnatrack-screens-cost"
                    className="text-sm font-medium text-edg-brand-text transition-colors hover:text-edg-brand"
                  >
                    Need budget ranges? Read the MagnaTrack screens cost guide.
                  </Link>
                </div>

                {/* Quick Specs */}
                <div className="border-t border-black/10 pt-8">
                  <div className="grid grid-cols-2 gap-y-4 text-sm">
                    {specs.slice(0, 4).map((s) => (
                      <div key={s.label}>
                        <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">{s.label}</span>
                        <span className="font-bold text-text-primary">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/5] bg-surface-muted overflow-hidden rounded-none">
                  <ShadesGalleryClient items={galleryImages} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========== PRODUCT OVERVIEW ========== */}
        <Section className="section-md border-t border-black/5 bg-surface-muted">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="label-editorial-brand mb-4">Product Overview</div>
              <h2 className="section-title mb-6">
                The Modern Alternative to Fixed Screens
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Motorized retractable screens transform open outdoor spaces into protected, comfortable environments 
                  at the touch of a button. Unlike fixed screening that permanently blocks views and airflow, 
                  these screens deploy when you need protection and disappear completely when you don&apos;t—preserving 
                  the architectural openness of your patio, porch, or gazebo.
                </p>
                <p>
                  At the heart of our specification is <strong>MagnaTrack technology</strong>—a revolutionary track 
                  system using powerful neodymium magnets to maintain constant fabric tension. Traditional screens 
                  rely on fixed tracks that fight against wind, eventually blowing out or jamming. MagnaTrack works 
                  with nature, allowing the screen to flex in gusts and then snap back into perfect alignment automatically.
                </p>
                <p>
                  As a design and supply partner, we&apos;re system-agnostic—we specify MagnaTrack technology from 
                  leading manufacturers based on your project requirements, not because we&apos;re locked into a single 
                  brand. For homeowners in the Chicago-Milwaukee corridor, we provide complete turnkey installation. 
                  For professionals nationwide, we handle design, engineering, and supply with shipping to your job site.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* ========== KEY FEATURES ========== */}
        <Section className="section-lg border-t border-black/5">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="label-editorial-brand mb-4">Features</div>
              <h2 className="section-title">
                Why MagnaTrack Changes Everything
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} variant="muted" padding="lg" className="group">
                  <IconWrapper icon={feature.icon} variant="brand" size="lg" className="mb-6" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* ========== SPECIFICATIONS TABLE ========== */}
        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="label-editorial-brand mb-4">Technical Specifications</div>
                <h2 className="section-title mb-6">
                  Built for Real-World Conditions
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Every specification is tested and verified. These are not theoretical limits—
                  they represent the actual performance you can expect from a properly specified 
                  and installed MagnaTrack system.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand-dark shrink-0 mt-0.5" />
                    <p className="text-text-secondary">Engineering stamps available for permit applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand-dark shrink-0 mt-0.5" />
                    <p className="text-text-secondary">Miami-Dade County wind load certifications available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-edg-brand-dark shrink-0 mt-0.5" />
                    <p className="text-text-secondary">5-year motor and frame warranty standard</p>
                  </div>
                </div>
              </div>

              <Card variant="default" padding="none" className="overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {specs.map((spec, index) => (
                      <tr key={spec.label} className={index % 2 === 0 ? 'bg-surface' : 'bg-surface-muted'}>
                        <td className="px-6 py-4 text-text-secondary font-medium border-b border-border">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-text-primary font-bold border-b border-border">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </Container>
        </Section>

        {/* ========== COST PLANNING ========== */}
        <Section className="section-md border-t border-black/5">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="label-editorial-brand mb-4">Cost Planning</div>
                <h2 className="section-title mb-6">
                  What do MagnaTrack motorized screens cost?
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Screen pricing depends on opening width, height, fabric, housing
                    details, controls, wiring, and how cleanly the tracks can mount to
                    the structure. A single opening often starts around $3,500 to
                    $8,000+, while a full patio or pergola screen package commonly
                    moves into a larger custom budget.
                  </p>
                  <p>
                    We built a dedicated cost guide because online kit pricing rarely
                    tells the whole story. A wind-exposed patio, roof deck, restaurant
                    opening, or recessed housing detail needs a different level of
                    planning than a basic drop screen.
                  </p>
                </div>
              </div>
              <Card variant="muted" padding="lg">
                <DollarSign className="mb-4 h-6 w-6 text-edg-brand-text" />
                <h3 className="mb-3 text-xl font-bold">Compare the real cost drivers</h3>
                <p className="mb-6 leading-relaxed text-text-secondary">
                  See planning ranges, what changes the quote, and when a
                  MagnaTrack-style system is worth the premium.
                </p>
                <Link
                  href="/guides/magnatrack-screens-cost"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-primary transition-colors hover:text-edg-brand-text"
                >
                  Read Screen Cost Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </Container>
        </Section>

        {/* ========== APPLICATIONS ========== */}
        <Section className="section-lg border-t border-black/5">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="label-editorial-brand mb-4">Applications</div>
              <h2 className="section-title">
                Where Screens Work Best
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app) => (
                <Card key={app.category} variant="outline" padding="lg">
                  <h3 className="text-2xl font-bold mb-6">{app.category}</h3>
                  <ul className="space-y-3">
                    {app.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-text-secondary">
                        <Plus className="h-4 w-4 text-edg-brand-dark shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* ========== OPTIONS & UPGRADES ========== */}
        <Section className="section-md bg-surface-muted">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="label-editorial-brand mb-4">Options & Upgrades</div>
              <h2 className="section-title">
                Customize for Your Project
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {options.map((option) => (
                <Card key={option.name} variant="default" padding="lg">
                  <h3 className="text-lg font-bold mb-2">{option.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{option.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* ========== PROCESS OVERVIEW ========== */}
        <Section className="section-lg border-t border-black/5">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="label-editorial-brand mb-4">Our Process</div>
              <h2 className="section-title">
                From Consultation to Completion
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-5xl font-bold text-edg-brand/30 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ========== RELATED PRODUCTS ========== */}
        <Section className="section-md bg-surface-muted border-t border-black/5">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="label-editorial-brand mb-4">Complete Your Space</div>
              <h2 className="section-title">
                Related Products
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link key={product.name} href={product.href} data-conversion-name="book_call_click">
                  <Card variant="default" padding="lg" className="h-full group cursor-pointer hover:border-edg-brand/30 transition-colors">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-edg-brand-dark transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">{product.description}</p>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/service-areas/chicago-il/retractable-screens"
                className="inline-flex items-center gap-2 text-sm font-medium text-edg-brand-text transition-colors hover:text-edg-brand"
              >
                Need a city-specific screen page? Explore Chicago retractable screens.
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </Section>

        {/* ========== FINAL CTA ========== */}
        <section className="bg-surface-dark text-text-inverse py-32">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Reclaim your outdoor space.
                </h2>
                <p className="text-xl text-text-inverse-muted mb-8 max-w-md">
                  Stop retreating indoors when the bugs come out or the sun gets low. 
                  Our Spring Grove showroom has working MagnaTrack displays—come see 
                  the difference self-correcting technology makes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact?type=price&product=shades" data-conversion-name="book_call_click">
                    <Button variant="primary" size="lg">
                      Start Your Quote
                    </Button>
                  </Link>
                  <Link href="/showroom" data-conversion-name="book_call_click">
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                      Visit Showroom
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="border-l border-white/20 pl-16 hidden md:block">
                <div className="space-y-6">
                  <h4 className="text-lg font-bold uppercase tracking-wide">Perfect For</h4>
                  <ul className="space-y-4 text-text-inverse-muted">
                    {[
                      'Existing Porches',
                      'New Pergolas',
                      'Garage Openings',
                      'Restaurant Patios',
                      'Lakeside Properties',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Plus className="h-4 w-4 text-edg-brand shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section for SEO */}
        <section className="section-lg bg-surface-muted border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="label-editorial-brand mb-4 text-center">FAQ</div>
              <h2 className="section-title text-center mb-12">
                Common Questions About Motorized Screens
              </h2>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-surface border border-border rounded-none"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-text-primary hover:bg-surface-muted transition-colors">
                      {faq.question}
                      <span className="ml-4 text-edg-brand-dark group-open:rotate-180 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
