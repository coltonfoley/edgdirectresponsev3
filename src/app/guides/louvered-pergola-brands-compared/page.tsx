import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TrackedLink } from '@/components/ui/TrackedLink';
import {
  Check,
  Wind,
  Droplets,
  Sun,
  Settings,
  ChevronRight,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { generateFAQSchema, generateArticleSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Louvered Pergola Systems We Specify: Brustor, Azenco & Sundance | Chicago',
  description:
    'As a system-agnostic design partner, we specify Brustor, Azenco, or Sundance based on your property, priorities, and budget. Learn how we match the right system to your project.',
  keywords: [
    'Brustor pergola',
    'Azenco pergola',
    'Sundance pergola',
    'louvered pergola brands',
    'motorized pergola comparison',
    'pergola brands Chicago',
    'Brustor vs Azenco',
    'best louvered pergola',
  ],
  alternates: {
    canonical: '/guides/louvered-pergola-brands-compared',
  },
  openGraph: {
    title: 'Louvered Pergola Systems We Specify | Chicago',
    description:
      'How we match Brustor, Azenco, or Sundance systems to your specific project needs, property conditions, and design preferences.',
  },
};

const faqs = [
  {
    question: 'Which louvered pergola system do you recommend for Chicago winters?',
    answer:
      'All three brands we specify handle Chicago winters well. For lakefront and exposed properties with high winds, we typically recommend Brustor with its 120 mph wind rating. For properties where water management is the priority, Azenco excels. For budget-conscious projects that still need reliable weather protection, Sundance delivers excellent value. During your consultation, we evaluate your specific site conditions and recommend the optimal system.',
  },
  {
    question: 'What do the systems you specify typically cost installed?',
    answer:
      'Based on the projects we have designed and installed, Brustor systems typically range from $65,000-$120,000, reflecting their premium European engineering. Azenco systems generally fall in the $55,000-$95,000 range, offering excellent value for their advanced water management. Sundance systems are typically $45,000-$75,000, providing quality motorized operation at a more accessible price point. Your specific quote depends on size, configuration, and site conditions.',
  },
  {
    question: 'What is the warranty for each pergola brand?',
    answer:
      'Brustor offers a 10-year structural warranty and 5-year motor warranty. Azenco provides a 10-year structural warranty with 3-year motor coverage. Sundance includes a 10-year structural warranty and 2-year motor warranty. All warranties require professional installation and annual maintenance.',
  },
  {
    question: 'How long does installation take for each system?',
    answer:
      'Installation timelines are similar across all three brands, typically 3-5 days on-site after permitting and manufacturing (8-12 weeks total project timeline). Brustor and Azenco may require slightly longer lead times (10-12 weeks) due to European manufacturing, while Sundance often ships faster (8-10 weeks) from domestic production.',
  },
  {
    question: 'Can these pergolas handle Chicago high winds?',
    answer:
      'Yes, all three systems we specify are engineered for high winds. Brustor leads with a 120 mph wind rating and automatic wind sensors—our recommendation for lakefront and exposed properties. Azenco handles up to 110 mph with robust structural design. Sundance manages 100 mph winds effectively, suitable for most sheltered residential installations. We assess your property wind exposure during site evaluation to specify the appropriate system.',
  },
];

const brands = [
  {
    name: 'Brustor',
    origin: 'Belgium',
    positioning: 'Premium European',
    priceRange: '$65K–$120K',
    windRating: '120 mph',
    snowLoad: '40 psf',
    louverRotation: '135°',
    warranty: '10yr structure / 5yr motor',
    leadTime: '10–12 weeks',
    bestFor: ['Lakefront properties', 'High wind areas', 'Maximum weather protection', 'Premium aesthetics'],
    description:
      'Brustor is the premium European choice with the highest wind ratings and most refined engineering. Their B-200 series features integrated LED channels, hidden drainage, and whisper-quiet Somfy motors.',
    features: [
      'Highest wind rating (120 mph)',
      'Integrated rain sensors',
      'Hidden gutter system',
      'LED channel integration',
      '20+ powder coat colors',
      'Smart home compatible',
    ],
    color: '#1a1a1a',
  },
  {
    name: 'Azenco',
    origin: 'Europe / USA',
    positioning: 'Modern Engineering',
    priceRange: '$55K–$95K',
    windRating: '110 mph',
    snowLoad: '40 psf',
    louverRotation: '135°',
    warranty: '10yr structure / 3yr motor',
    leadTime: '10–12 weeks',
    bestFor: ['Modern architecture', 'Water management priority', 'Mid-range budget', 'Contemporary aesthetics'],
    description:
      'Azenco combines European design with modern engineering. Their water management system is exceptional, and they offer the best balance of performance and price for most Chicago homeowners.',
    features: [
      'Superior water management',
      'Sleek minimal profile',
      'Dual-wall louver design',
      'Multiple mounting options',
      'Excellent value proposition',
      'Fast installation design',
    ],
    color: '#2563eb',
  },
  {
    name: 'Sundance',
    origin: 'USA',
    positioning: 'Quality & Value',
    priceRange: '$45K–$75K',
    windRating: '100 mph',
    snowLoad: '30 psf',
    louverRotation: '135°',
    warranty: '10yr structure / 2yr motor',
    leadTime: '8–10 weeks',
    bestFor: ['Budget-conscious projects', 'Standard installations', 'Faster lead times', 'Reliable performance'],
    description:
      'Sundance delivers quality louvered pergolas at accessible price points. Domestic manufacturing means faster lead times and responsive support, making them ideal for standard residential projects.',
    features: [
      'Most accessible pricing',
      'Domestic manufacturing',
      'Faster lead times',
      'Reliable performance',
      'Good weather protection',
      'Established US support',
    ],
    color: '#059669',
  },
];

const comparisonMatrix = [
  { feature: 'Wind Rating', brustor: '120 mph', azenco: '110 mph', sundance: '100 mph', winner: 'Brustor' },
  { feature: 'Snow Load', brustor: '40 psf', azenco: '40 psf', sundance: '30 psf', winner: 'Tie (Brustor/Azenco)' },
  { feature: 'Price Range', brustor: '$65K–$120K', azenco: '$55K–$95K', sundance: '$45K–$75K', winner: 'Sundance' },
  { feature: 'Lead Time', brustor: '10–12 weeks', azenco: '10–12 weeks', sundance: '8–10 weeks', winner: 'Sundance' },
  { feature: 'Water Management', brustor: 'Excellent', azenco: 'Superior', sundance: 'Good', winner: 'Azenco' },
  { feature: 'Smart Home Integration', brustor: 'Full', azenco: 'Full', sundance: 'Standard', winner: 'Tie (Brustor/Azenco)' },
  { feature: 'Motor Warranty', brustor: '5 years', azenco: '3 years', sundance: '2 years', winner: 'Brustor' },
  { feature: 'Color Options', brustor: '20+', azenco: '15+', sundance: '12', winner: 'Brustor' },
];

export default function BrandsComparedPage() {
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema({
    title: 'Louvered Pergola Brands Compared: Brustor vs Azenco vs Sundance',
    description:
      'Expert comparison of Brustor, Azenco, and Sundance louvered pergola systems for Chicago homeowners.',
    url: 'https://www.edgpatioshade.com/guides/louvered-pergola-brands-compared',
    datePublished: '2026-02-18',
    category: 'Buying Guide',
  });

  return (
    <main className="bg-surface min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-surface-dark text-text-inverse">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'Louvered Pergola Brands Compared' },
              ]}
            />
          </div>

          <div className="max-w-4xl">
            <div className="label-editorial-brand mb-6 text-edg-brand flex items-center gap-3">
              <div className="h-px w-8 bg-edg-brand" />
              Buying Guide
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Louvered Pergola Systems
              <br />
              <span className="text-edg-brand">We Specify for Chicago.</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-inverse-muted leading-relaxed max-w-3xl mb-8">
              As a system-agnostic design partner, we specify Brustor, Azenco, or Sundance based on 
              your property conditions, design preferences, and priorities—not what we have in inventory.
            </p>

            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=consultation&product=pergola">
                <Button size="lg">Get Expert Recommendation</Button>
              </TrackedLink>
              <Link href="#comparison-table">
                <Button variant="outline" size="lg" className="border-text-inverse/20 text-text-inverse">
                  See Comparison Table
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why This Matters Section */}
      <Section className="section-lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-editorial-brand mb-4">Our Approach</div>
              <h2 className="section-title mb-6">How We Match Systems to Your Project</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  When we evaluate your property for a motorized pergola, we consider wind exposure, 
                  architectural style, budget, and how you plan to use the space. Based on that assessment, 
                  we specify the system that best fits your specific situation—not the one we are trying 
                  to move from inventory.
                </p>
                <p>
                  As a system-agnostic design partner, we maintain dealer relationships with multiple 
                  premium manufacturers. This allows us to be objective in our recommendations and 
                  specify the right solution for your unique circumstances.
                </p>
                <p>
                  <strong>What we evaluate for Chicago-area projects:</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Wind className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                    <span>Wind ratings for lakefront and exposed properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Droplets className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                    <span>Snow load capacity for heavy Midwest winters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                    <span>Smart home integration and motor reliability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sun className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                    <span>Water management for Chicago heavy rainfall</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={images.brand.hero.pergola}
                alt="Motorized louvered pergola comparison for Chicago climate"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Brand Deep Dives */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Systems We Specify</div>
            <h2 className="section-title">Three Premium Options for Different Needs</h2>
            <p className="text-text-secondary mt-4">
              Based on your site conditions, design preferences, and priorities, we may recommend 
              Brustor, Azenco, or Sundance. Here is how we think about each system.
            </p>
          </div>

          <div className="space-y-16">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                id={brand.name.toLowerCase()}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold">{brand.name}</h3>
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: brand.color }}
                    >
                      {brand.positioning}
                    </span>
                  </div>
                  <p className="text-text-muted mb-2">
                    {brand.origin} • {brand.priceRange} • {brand.leadTime} lead time
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">{brand.description}</p>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-bold">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {brand.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.bestFor.map((item) => (
                        <span key={item} className="bg-white border border-border px-3 py-1 text-sm rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card variant="default" padding="lg">
                    <h4 className="font-bold mb-4">Technical Specifications</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-text-muted">Wind Rating</span>
                        <span className="font-semibold">{brand.windRating}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-text-muted">Snow Load</span>
                        <span className="font-semibold">{brand.snowLoad}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-text-muted">Louver Rotation</span>
                        <span className="font-semibold">{brand.louverRotation}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-text-muted">Warranty</span>
                        <span className="font-semibold">{brand.warranty}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-text-muted">Lead Time</span>
                        <span className="font-semibold">{brand.leadTime}</span>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-surface-dark text-text-inverse p-6 rounded-lg">
                    <h4 className="font-bold mb-2">When We Specify This System</h4>
                    <p className="text-text-inverse-muted text-sm leading-relaxed">
                      {brand.name === 'Brustor' &&
                        "We typically specify Brustor for lakefront properties, homes in high-wind exposed areas, and projects where maximum engineering and the longest warranty are priorities. The premium investment is justified when conditions demand it."}
                      {brand.name === 'Azenco' &&
                        "Azenco is our most frequently specified system for Chicago homeowners. The exceptional water management suits our heavy rainfall, the modern aesthetics work with contemporary architecture, and the value proposition aligns with most project budgets."}
                      {brand.name === 'Sundance' &&
                        "We specify Sundance for budget-conscious projects that still require reliable motorized operation and weather protection. The shorter lead times and domestic manufacturing make this ideal for standard residential installations without extreme exposure."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="section-lg" id="comparison-table">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="label-editorial-brand mb-4">Side-by-Side</div>
            <h2 className="section-title">Quick Comparison Matrix</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  <th className="text-center py-4 px-4 font-bold">Brustor</th>
                  <th className="text-center py-4 px-4 font-bold">Azenco</th>
                  <th className="text-center py-4 px-4 font-bold">Sundance</th>
                  <th className="text-center py-4 px-4 font-bold text-edg-brand">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-surface-muted' : ''}>
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{row.brustor}</td>
                    <td className="py-4 px-4 text-center">{row.azenco}</td>
                    <td className="py-4 px-4 text-center">{row.sundance}</td>
                    <td className="py-4 px-4 text-center font-semibold text-edg-brand-text">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* How to Choose Section */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Our Specification Criteria</div>
            <h2 className="section-title">How We Determine the Right System for Your Project</h2>
            <p className="text-text-secondary mt-4">
              During your consultation, we evaluate your property and priorities. Here is what guides our recommendation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 bg-edg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="h-8 w-8 text-edg-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Specify Brustor When...</h3>
              <ul className="text-left text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Your property is lakefront or highly exposed
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Wind ratings above 110 mph are needed
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Budget accommodates premium engineering
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  You want the maximum available warranty
                </li>
              </ul>
            </Card>

            <Card variant="default" padding="lg" className="text-center border-edg-brand">
              <div className="w-16 h-16 bg-edg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-8 w-8 text-edg-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Specify Azenco When...</h3>
              <ul className="text-left text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Water management is a primary concern
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Modern, minimal aesthetics match your home
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  You want optimal performance-to-value ratio
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Full smart home integration is required
                </li>
              </ul>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 bg-edg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8 text-edg-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Specify Sundance When...</h3>
              <ul className="text-left text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Budget optimization is a key priority
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Faster project timeline is important
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  Standard wind/snow loads are sufficient
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                  You prefer domestic manufacturing
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="section-lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="label-editorial-brand mb-4">FAQ</div>
              <h2 className="section-title">Common Questions</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Will Recommend the Right System for Your Property</h2>
            <p className="text-text-inverse-muted text-lg mb-8">
              Every site is different. During your consultation, we evaluate wind exposure, architectural style, 
              and how you plan to use the space—then specify the system that best fits your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedLink href="/contact?type=consultation&product=pergola">
                <Button size="lg">Schedule Free Consultation</Button>
              </TrackedLink>
              <TrackedLink href="/systems/pergolas">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-text-inverse/20 text-text-inverse hover:bg-text-inverse/10"
                >
                  Explore All Pergola Systems <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>
            <p className="text-text-inverse-muted text-sm mt-6">
              Or call us at{' '}
              <a href="tel:8155810138" className="text-edg-brand hover:underline">
                (815) 581-0138
              </a>{' '}
              to discuss your project.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
