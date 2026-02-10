import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { ProductGallery } from '@/components/features/gallery/ProductGallery';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronRight,
  Sun,
  Sofa,
  Grid3X3,
  Palette,
  Layers,
  Users,
  MessageSquare,
  Ruler,
  Truck,
  HelpCircle,
  Umbrella,
  Tent,
  Flame,
} from 'lucide-react';
import type { Metadata } from 'next';
import { generateServiceSchema, generateFAQSchema, generateProductSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Premium Outdoor Furniture | Teak, Wicker & Aluminum | EDG',
  description:
    'Curated outdoor furniture collections featuring weather-resistant teak, aluminum, and all-weather wicker. Modular sectionals, dining sets, and lounge seating to complete your outdoor space.',
  alternates: {
    canonical: '/systems/furniture',
  },
  keywords: ['outdoor furniture', 'patio furniture', 'weather resistant furniture', 'sunbrella cushions', 'modular outdoor seating'],
  openGraph: {
    title: 'Premium Outdoor Furniture | EDG Outdoor Living',
    description:
      'Designer outdoor furniture collections that complement your pergola or shade system.',
  },
};

const galleryImages = images.galleries.furniture.map((src) => ({
  type: 'image' as const,
  src,
  alt: 'Premium outdoor furniture collection showcasing weather-resistant materials and comfortable design',
}));

const features = [
  {
    icon: Sun,
    title: 'Weather-Resistant Materials',
    description:
      'We specify furniture built from premium-grade teak, powder-coated aluminum, and high-density polyethylene wicker that withstands rain, snow, and intense sun without warping, fading, or rusting. These materials are selected specifically for Midwest and coastal climates where temperature swings and moisture are the norm.',
  },
  {
    icon: Sofa,
    title: 'Ergonomic Design',
    description:
      'Every piece is chosen for how it feels after hours of use, not just how it looks. Deep seating proportions, proper lumbar support, and generous cushion depth mean your guests stay comfortable from the first drink through late-night conversation. Comfort is not an afterthought—it is engineered into every frame.',
  },
  {
    icon: Grid3X3,
    title: 'Modular Configurations',
    description:
      'Sectionals that reconfigure for different gatherings. Dining sets that extend when family visits. Our modular systems adapt to your space and lifestyle, not the other way around. Mix and match components to create layouts that work for intimate dinners or larger entertaining.',
  },
  {
    icon: Palette,
    title: 'Sunbrella Fabrics',
    description:
      'Performance fabrics that resist fading, staining, and mildew while maintaining a soft hand feel. With over 50 colors and patterns available, you can coordinate with your home exterior or create contrast that makes your outdoor space stand out. Easy to clean and backed by industry-leading warranties.',
  },
  {
    icon: Layers,
    title: 'Coordinated Collections',
    description:
      'Each furniture line is curated to complement our pergola and shade systems aesthetically and functionally. We consider scale, proportion, and material harmony so your completed outdoor room feels intentional and cohesive, not assembled from mismatched sources.',
  },
  {
    icon: Users,
    title: 'Professional Design Service',
    description:
      'Choosing furniture for an outdoor space involves more than picking pieces you like. Our complimentary design service includes space planning, scale drawings, and material coordination. We help you avoid costly mistakes like undersized sectionals or dining sets that block traffic flow.',
  },
];

const specs = [
  { label: 'Frame Materials', value: 'Teak, aluminum, stainless steel' },
  { label: 'Fabric Options', value: 'Sunbrella, Outdura (50+ colors)' },
  { label: 'Warranty', value: '5-15 years depending on material' },
  { label: 'Custom Sizing', value: 'Available for specific spaces' },
  { label: 'Design Service', value: 'Complimentary with purchase' },
  { label: 'Showroom', value: 'See samples in Spring Grove, IL' },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'We discuss how you plan to use your space, your style preferences, and your budget parameters.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description:
      'Our team creates scaled layouts showing furniture placement, traffic flow, and clearances.',
  },
  {
    icon: Palette,
    title: 'Selection',
    description:
      'Choose from curated collections with fabric samples and finish options tailored to your project.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description:
      'White-glove delivery and placement. We assemble, position, and remove packaging.',
  },
];

const faqs = [
  {
    question: 'What materials last longest outdoors?',
    answer:
      'Teak is the gold standard for outdoor furniture longevity—it naturally resists rot, insects, and weathering, developing a silver-gray patina over time. Marine-grade aluminum offers similar durability with zero maintenance. For wicker, look for high-density polyethylene (HDPE) rather than PVC, which becomes brittle. Our curated lines use only materials proven to last 10+ years in harsh climates.',
  },
  {
    question: 'How do I care for outdoor furniture?',
    answer:
      'Teak can be left to weather naturally or maintained with occasional oiling to preserve its honey color. Aluminum frames need only soap and water. Cushions with Sunbrella covers can be spot-cleaned with mild detergent or removed and machine washed. We provide care instructions specific to your furniture materials, and our optional care plans include seasonal cleaning and storage services.',
  },
  {
    question: 'Can you help with space planning?',
    answer:
      'Absolutely. Space planning is included with every furniture purchase. We measure your area, account for traffic patterns and clearances, and create scaled drawings showing exactly how pieces will fit. This prevents the common mistakes of ordering furniture that is too large for the space or arranging it in ways that block access. Our showroom also allows you to sit in display pieces before committing.',
  },
  {
    question: "What's the typical delivery timeline?",
    answer:
      'In-stock items typically deliver within 2-4 weeks. Custom orders with specific fabrics or finishes range from 6-10 weeks depending on the manufacturer. We coordinate delivery with your project timeline, whether that means waiting for construction completion or staging delivery in phases. Rush options are available for select lines.',
  },
  {
    question: 'Do you offer furniture-only purchases?',
    answer:
      'Yes, we provide furniture for existing patios, decks, and outdoor rooms even if we did not install the primary structure. Many clients come to us after completing a renovation or building a new deck and need furniture that fits their space properly. Our design service applies to furniture-only projects, ensuring you get pieces that work with your existing layout.',
  },
  {
    question: 'Can I see the furniture before buying?',
    answer:
      'Our Spring Grove showroom displays representative pieces from each collection we carry. While we cannot stock every configuration, you can evaluate build quality, sit in the seating, and handle fabric samples. For large projects, we can also arrange manufacturer showroom visits or provide detailed specification sheets with dimensions and material information.',
  },
];

const relatedProducts = [
  {
    title: 'Louvered Pergolas',
    description:
      'Provide shade and shelter for your furniture with adjustable louvered roof systems.',
    href: '/systems/pergolas',
    icon: Tent,
  },
  {
    title: 'Retractable Screens',
    description:
      'Keep bugs out and reduce glare while relaxing on your outdoor furniture.',
    href: '/systems/shades',
    icon: Umbrella,
  },
  {
    title: 'Outdoor Heating',
    description:
      'Extend your outdoor season with infrared heaters that warm your seating areas.',
    href: '/systems/appliances',
    icon: Flame,
  },
];

const applications = [
  {
    title: 'Residential Dining',
    description:
      'Extendable dining tables and comfortable seating for everyday meals and special occasions.',
    image: images.brand.hero.lifestyle,
  },
  {
    title: 'Poolside Lounging',
    description:
      'Chaise lounges and deep seating designed for wet environments and full sun exposure.',
    image: images.brand.context.pool,
  },
  {
    title: 'Hospitality & Commercial',
    description:
      'Heavy-duty frames and commercial-grade upholstery for restaurants, hotels, and rooftop bars.',
    image: images.brand.context.commercial,
  },
];

export default function FurniturePage() {
  const serviceSchema = generateServiceSchema({
    name: 'Outdoor Furniture Design & Supply',
    description:
      'Premium outdoor furniture collections featuring weather-resistant teak, aluminum, and all-weather wicker with professional design service.',
    url: 'https://www.edgpatioshade.com/systems/furniture',
    image: `https://www.edgpatioshade.com${images.brand.hero.lifestyle}`,
  });

  const productSchema = generateProductSchema({
    name: 'Premium Outdoor Furniture',
    description:
      'Curated outdoor furniture collections including teak, aluminum, and wicker sectionals, dining sets, and lounge seating.',
    image: `https://www.edgpatioshade.com${images.brand.hero.lifestyle}`,
    category: 'Outdoor Furniture',
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO WITH GALLERY ========== */}
      <section className="bg-surface pt-8 pb-16 dark:bg-surface-dark">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery items={galleryImages} />

            {/* Product Info */}
            <div className="space-y-6 lg:sticky lg:top-40">
              <div>
                <p className="label-editorial-brand mb-2">Complete Your Space</p>
                <h1 className="page-title mb-4">Premium Outdoor Furniture</h1>
                <p className="text-text-secondary text-xl leading-relaxed">
                  Curated collections of weather-resistant furniture designed for
                  comfort, durability, and seamless integration with your pergola or
                  shade system.
                </p>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Teak & aluminum frames',
                  'Sunbrella performance fabrics',
                  'Modular configurations',
                  'Complimentary design service',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="text-edg-brand-text dark:text-edg-brand h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row">
                <Link
                  href="/contact?type=price&product=furniture"
                  className="flex-1"
                >
                  <Button size="lg" className="h-full w-full rounded-none">
                    Request Catalog <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+18155810138" className="flex-1">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-full w-full rounded-none"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </Button>
                </a>
              </div>

              <p className="text-text-muted text-sm">
                Visit our Spring Grove showroom to see collections in person.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== PRODUCT OVERVIEW ========== */}
      <Section className="bg-surface-muted py-20 dark:bg-surface-dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              Premium outdoor furniture is the element that transforms a covered patio
              into a true outdoor room. While motorized pergolas provide shelter and
              retractable screens control the environment, it is the furniture that
              defines how you live in the space. We curate collections from
              manufacturers who understand that outdoor furniture must endure years of
              sun, rain, and temperature swings without sacrificing comfort or style.
            </p>
            <p className="text-text-secondary mb-6 text-lg leading-relaxed">
              Our selection process prioritizes materials and construction methods
              proven in demanding climates. Grade-A teak develops a silver patina while
              maintaining structural integrity for decades. Marine-grade aluminum
              resists corrosion without the maintenance of steel. High-density
              polyethylene wicker flexes rather than cracks, and Sunbrella fabrics
              retain their color and softness through years of UV exposure. We do not
              stock catalog furniture—we select pieces we would use in our own homes.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Unlike furniture-only retailers, we understand how outdoor furniture
              integrates with pergola structures, shade systems, and heating elements.
              We account for louvered roof clearances, screen housing locations, and
              heater mounting positions when planning your layout. This systems
              approach ensures your furniture fits your space functionally and
              aesthetically, creating a cohesive outdoor living environment that works
              together seamlessly.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== APPLICATIONS/USE CASES ========== */}
      <Section className="bg-surface py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Designed for Outdoor Living</h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              Furniture solutions for residential and commercial outdoor spaces.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {applications.map((item) => (
              <Card key={item.title} variant="default" padding="none">
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FEATURES ========== */}
      <Section className="bg-surface-dark py-20 text-text-inverse">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Built for the Outdoors</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-inverse-muted">
              Every piece in our collection is selected for durability, comfort, and
              design integrity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <IconWrapper
                  icon={feature.icon}
                  variant="brand"
                  size="md"
                  className="shrink-0"
                />
                <div>
                  <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-text-inverse-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== SPECIFICATIONS ========== */}
      <Section className="bg-surface py-20 dark:bg-black">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Specification Highlights</h2>
            </div>

            <Card variant="muted" padding="none">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between p-6 ${
                    index !== specs.length - 1
                      ? 'border-b border-border dark:border-border-inverse'
                      : ''
                  }`}
                >
                  <span className="text-text-muted">{spec.label}</span>
                  <span className="font-semibold text-text-primary">
                    {spec.value}
                  </span>
                </div>
              ))}
            </Card>
          </div>
        </Container>
      </Section>

      {/* ========== OPTIONS & UPGRADES ========== */}
      <Section className="bg-surface-muted py-20 dark:bg-surface-dark">
        <Container>
          <div className="mb-12 text-center">
            <p className="label-editorial-brand mb-2">Customization</p>
            <h2 className="section-title mb-4">Options & Upgrades</h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              Tailor your furniture to your specific needs and preferences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Custom Cushions',
                description:
                  'Choose from 50+ Sunbrella colors and patterns. Contrast piping and trim options available.',
              },
              {
                title: 'Storage Solutions',
                description:
                  'Built-in storage benches and deck boxes designed to coordinate with your furniture collection.',
              },
              {
                title: 'Protective Covers',
                description:
                  'Custom-fit covers for off-season protection. Breathable materials prevent mildew.',
              },
              {
                title: 'Accent Pieces',
                description:
                  'Side tables, ottomans, and accessories that complete the look and add functionality.',
              },
            ].map((option) => (
              <Card key={option.title} variant="default" padding="lg">
                <h3 className="mb-2 text-lg font-bold">{option.title}</h3>
                <p className="text-text-secondary text-sm">
                  {option.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== PROCESS OVERVIEW ========== */}
      <Section className="bg-surface py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <p className="label-editorial-brand mb-2">Our Process</p>
            <h2 className="section-title mb-4">From Vision to Reality</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <IconWrapper
                  icon={step.icon}
                  variant="brand"
                  size="lg"
                  className="mb-6"
                />
                <div className="bg-edg-dark mb-2 flex h-8 w-8 items-center justify-center rounded-none text-sm font-bold text-white dark:bg-white dark:text-edg-dark">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="bg-surface-muted py-20 dark:bg-surface-dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <div className="mb-3 flex items-start gap-3">
                    <HelpCircle className="text-edg-brand-text dark:text-edg-brand mt-1 h-5 w-5 shrink-0" />
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </div>
                  <p className="text-text-secondary pl-8">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED PRODUCTS ========== */}
      <Section className="bg-surface py-20 dark:bg-black">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Complete Your Outdoor Space</h2>
            <p className="text-text-secondary mx-auto max-w-2xl">
              Pair your furniture with these primary systems for the ultimate outdoor
              living experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group block rounded-none border border-border bg-surface-muted p-6 transition-colors hover:border-edg-brand dark:border-border-inverse dark:bg-surface-dark-elevated"
              >
                <product.icon className="text-edg-brand-text dark:text-edg-brand mb-4 h-8 w-8" />
                <h3 className="mb-2 text-xl font-bold group-hover:text-edg-brand-text dark:group-hover:text-edg-brand">
                  {product.title}
                </h3>
                <p className="text-text-secondary mb-4">{product.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-edg-brand-text dark:text-edg-brand">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== CTA ========== */}
      <Section className="bg-surface-dark relative overflow-hidden py-24 text-text-inverse">
        <div className="from-edg-brand/5 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
        <Container>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="page-title mb-6">Complete Your Outdoor Oasis</h2>
            <p className="mb-10 text-xl leading-relaxed text-text-inverse-muted">
              Request our furniture catalog or schedule a complimentary design
              consultation. Visit our Spring Grove showroom to experience our
              collections in person.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?type=price&product=furniture">
                <Button
                  size="lg"
                  className="bg-edg-brand text-edg-dark hover:bg-edg-brand/90 rounded-none px-10 text-lg transition-all hover:scale-105"
                >
                  Request Catalog <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none px-10 text-lg"
                >
                  Book Consultation <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
