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
  DollarSign,
  Wind,
  Hammer,
  Zap,
  Ruler,
  FileText,
  TrendingUp,
  HelpCircle,
  Check,
  X,
  ArrowRight,
  AlertTriangle,
  Globe,
  Shield,
  Home,
  Building2,
} from 'lucide-react';
import { generateFAQSchema, generateArticleSchema, generateHowToSchema } from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pergola Cost Guide 2026: What Drives Pricing for Premium Systems | EDG',
  description:
    'Comprehensive guide to motorized pergola costs in 2026. Understand what drives pricing from $25K to $100K+, why premium systems cost more than big-box alternatives, and how to budget for your project.',
  keywords: [
    'pergola cost',
    'how much does a pergola cost',
    'motorized pergola price',
    'louvered pergola cost',
    'pergola installation cost',
    'pergola cost per square foot',
    'outdoor pergola price',
    'pergola budget guide',
  ],
  alternates: {
    canonical: '/guides/pergola-cost',
  },
  openGraph: {
    title: 'Pergola Cost Guide 2026: Understanding Premium System Pricing',
    description:
      'What drives pergola costs from $25K to $100K+? A comprehensive breakdown of materials, engineering, installation, and why premium systems outperform big-box alternatives.',
  },
};

// Cost range data with caveats
const costRanges = [
  {
    size: 'Compact',
    dimensions: "10' × 12' to 12' × 14'",
    range: '$25,000 – $40,000',
    description: 'Single-zone systems ideal for intimate patios and small decks.',
    bestFor: ['Townhomes', 'Small patios', 'Budget-conscious projects'],
  },
  {
    size: 'Standard',
    dimensions: "14' × 16' to 16' × 20'",
    range: '$40,000 – $65,000',
    description: 'Most common residential size. Single or dual-zone configurations.',
    bestFor: ['Single-family homes', 'Medium patios', 'Full outdoor kitchens'],
    popular: true,
  },
  {
    size: 'Large',
    dimensions: "18' × 20' to 20' × 24'",
    range: '$65,000 – $90,000',
    description: 'Multi-zone systems with integrated features and premium finishes.',
    bestFor: ['Estate properties', 'Poolside installations', 'Entertainment spaces'],
  },
  {
    size: 'Custom / Commercial',
    dimensions: '20\'+ or unique configurations',
    range: '$90,000 – $150,000+',
    description: 'Complex engineering, multiple zones, full integration with architecture.',
    bestFor: ['Estate homes', 'Restaurants', 'Rooftop venues', 'Country clubs'],
  },
];

// Cost factors breakdown
const costFactors = [
  {
    icon: Globe,
    title: 'Materials & Sourcing',
    description:
      'Premium systems use extruded aluminum alloy (6061-T6 or 6063-T5), not stamped steel or vinyl. We source from specialized manufacturers in Belgium, the US, and Europe—each chosen for specific engineering advantages.',
    impact: '30-40% of total cost',
    details: [
      'Marine-grade aluminum resists corrosion for decades',
      'Powder-coat finish (not paint) maintains color integrity',
      'Internal gutter systems require precision manufacturing',
      'Global sourcing ensures best-in-class components',
    ],
  },
  {
    icon: Shield,
    title: 'Engineering & Ratings',
    description:
      'Systems rated for 100-120 mph winds and 30-40 psf snow loads require structural engineering, reinforced connections, and automated safety sensors.',
    impact: '15-20% of total cost',
    details: [
      'Wind and snow load calculations',
      'Structural engineering stamps for permits',
      'Automated wind sensors and safety shutoffs',
      'Reinforced mounting hardware and footings',
    ],
  },
  {
    icon: Zap,
    title: 'Motorization & Controls',
    description:
      'Somfy or comparable motors with smart home integration, rain sensors, and multi-zone control add cost but deliver convenience and safety.',
    impact: '15-25% of total cost',
    details: [
      'Whisper-quiet tubular motors (not chain-driven)',
      'Smart home integration (Control4, Crestron, Alexa)',
      'Automated weather sensors',
      'Multi-zone control systems',
    ],
  },
  {
    icon: Hammer,
    title: 'Professional Installation',
    description:
      'Proper installation requires certified crews, specialized equipment, and coordination with electricians. This is not a weekend DIY project.',
    impact: '20-25% of total cost',
    details: [
      'Certified installation teams',
      'Precision leveling and alignment',
      'Electrical rough-in and connections',
      'Final programming and calibration',
    ],
  },
];

// Hidden costs
const hiddenCosts = [
  {
    category: 'Site Preparation',
    items: [
      { name: 'Foundation/Footings', description: 'Concrete piers or slab reinforcement for structural loads', cost: '$2,000 – $8,000' },
      { name: 'Electrical Rough-In', description: '220V dedicated circuit from main panel', cost: '$1,500 – $4,000' },
      { name: 'Deck Reinforcement', description: 'Additional support for deck-mounted systems', cost: '$1,000 – $5,000' },
      { name: 'Existing Structure Removal', description: 'Old pergola, awning, or patio cover removal', cost: '$500 – $3,000' },
    ],
  },
  {
    category: 'Permits & Compliance',
    items: [
      { name: 'Building Permits', description: 'Required in most municipalities for permanent structures', cost: '$500 – $2,500' },
      { name: 'Zoning Review', description: 'Setback and lot coverage compliance verification', cost: 'Included in permit' },
      { name: 'HOA Approval', description: 'Architectural review committee submissions', cost: 'Time/effort only' },
      { name: 'Engineering Stamps', description: 'PE stamp for structural drawings', cost: '$800 – $2,000' },
    ],
  },
  {
    category: 'Integrated Features',
    items: [
      { name: 'LED Lighting', description: 'Perimeter and downlighting integrated into frame', cost: '$2,000 – $5,000' },
      { name: 'Infrared Heaters', description: 'Ceiling-mounted radiant heat systems', cost: '$1,500 – $4,000 each' },
      { name: 'Retractable Screens', description: 'Motorized side screens for wind/bug protection', cost: '$3,500 – $8,000 each' },
      { name: 'Smart Home Integration', description: 'Programming and system integration', cost: '$500 – $2,000' },
    ],
  },
];

// Comparison: Premium vs. Big Box
const comparisonData = [
  {
    feature: 'Frame Material',
    premium: '6061-T6/6063-T5 aluminum alloy, 2mm+ wall thickness',
    bigBox: 'Stamped aluminum or steel, <1mm wall thickness',
    difference: 'Premium systems last 25+ years; big-box often shows wear in 5-7 years',
  },
  {
    feature: 'Wind Rating',
    premium: '100-120 mph engineered rating with sensors',
    bigBox: 'No rating; may void warranty in high winds',
    difference: 'Insurance and peace of mind in storms',
  },
  {
    feature: 'Snow Load',
    premium: '30-40 psf engineered capacity',
    bigBox: 'Not rated; risk of collapse in heavy snow',
    difference: 'Critical for northern climates',
  },
  {
    feature: 'Drainage',
    premium: 'Internal gutter system, hidden downspouts',
    bigBox: 'No drainage or basic external gutters',
    difference: 'Clean aesthetics; no water pooling',
  },
  {
    feature: 'Motors',
    premium: 'Somfy tubular, 5-year warranty, smart-ready',
    bigBox: 'Generic motors, 1-year warranty, no integration',
    difference: 'Reliability and smart home compatibility',
  },
  {
    feature: 'Installation',
    premium: 'Certified crews, permit handling, warranty support',
    bigBox: 'DIY or general contractor; no specialized support',
    difference: 'Proper installation ensures performance and safety',
  },
  {
    feature: 'Warranty',
    premium: '10-year structural, 3-5 year motor',
    bigBox: '1-5 years limited, often prorated',
    difference: 'Long-term protection and service availability',
  },
];

// ROI data
const roiPoints = [
  {
    icon: Home,
    title: 'Appraised Value',
    description: 'Unlike temporary structures, permanent aluminum pergolas are appraised as improvements, similar to a high-end deck or sunroom.',
    value: '60-80% cost recovery',
  },
  {
    icon: Ruler,
    title: 'Added Square Footage',
    description: 'Creates usable outdoor living space that functions as an extension of your home. Cost per square foot is significantly less than an addition.',
    value: '$150-250/sq ft vs. $300-500+ for room addition',
  },
  {
    icon: Building2,
    title: 'Commercial ROI',
    description: 'For restaurants and hospitality, each outdoor seat generates revenue. Systems often pay for themselves in 1-2 seasons.',
    value: '$150K+ annual revenue increase typical',
  },
  {
    icon: TrendingUp,
    title: 'Depreciation vs. Appreciation',
    description: 'Cheap alternatives depreciate immediately and require replacement. Premium systems maintain value and performance.',
    value: '25+ year lifespan vs. 5-7 years',
  },
];

// FAQs
const faqs = [
  {
    question: 'Why do motorized pergolas cost so much more than basic pergolas from home improvement stores?',
    answer: 'The difference is engineering, materials, and longevity. A $3,000 big-box pergola uses thin stamped aluminum with no wind or snow rating, generic motors, and no integrated drainage. It may last 5-7 years before showing significant wear. A premium motorized system uses aircraft-grade aluminum (6061-T6), is engineered for 100+ mph winds and heavy snow loads, includes internal gutter systems, and uses commercial-grade Somfy motors. These systems last 25+ years with minimal maintenance. You are not just buying shade—you are buying a permanent architectural improvement to your home.',
  },
  {
    question: 'What is the cost per square foot for a motorized louvered pergola?',
    answer: 'Premium motorized pergolas typically range from $120 to $200 per square foot installed, depending on features and site complexity. This compares to $15-30/sq ft for basic non-motorized aluminum pergolas and $40-80/sq ft for high-end wood structures. The per-square-foot cost decreases slightly as size increases due to economies of scale on engineering and installation mobilization.',
  },
  {
    question: 'Are there financing options available?',
    answer: 'Yes, many homeowners finance pergola projects through home improvement loans, HELOCs, or specialized outdoor living financing. Some manufacturers offer promotional financing. For commercial projects, equipment financing and lease-to-own options are available. The key is treating this as a home improvement investment rather than a discretionary purchase.',
  },
  {
    question: 'How much should I budget for unexpected costs?',
    answer: 'We recommend budgeting an additional 10-15% contingency for site preparation, electrical work, and permitting. If your property has challenging access, requires crane rental for installation, or needs significant deck reinforcement, costs can increase. During our site assessment, we identify these factors upfront so there are no surprises.',
  },
  {
    question: 'Do premium pergolas really add home value?',
    answer: 'Yes—when properly permitted and installed, permanent aluminum pergolas add appraised value similar to a high-end deck or sunroom. Unlike temporary structures or awnings that depreciate immediately, these are permanent improvements. Real estate agents in our markets (Chicago-Milwaukee corridor) report that homes with premium outdoor living spaces sell faster and for more money, particularly in the luxury segment.',
  },
  {
    question: 'What ongoing costs should I expect after installation?',
    answer: 'Premium motorized pergolas are designed to be low-maintenance. Annual costs typically include: professional inspection and cleaning ($200-400/year, optional but recommended), occasional touch-up of powder coat if scratched, and eventual motor replacement after 10-15 years ($800-1,500 per motor). Compare this to wood pergolas requiring staining every 2-3 years ($1,000+) or cheap aluminum systems requiring full replacement after 5-7 years.',
  },
  {
    question: 'Why is installation such a significant portion of the cost?',
    answer: 'Proper installation requires specialized skills: precision leveling of structural posts, integration with home electrical systems, programming of smart controls, and calibration of safety sensors. We use certified installation crews—not general laborers—who understand the engineering requirements. Improper installation can void warranties, compromise structural integrity, and cause operational issues. This is not a DIY project or suitable for a general handyman.',
  },
  {
    question: 'How do I get an accurate quote for my specific project?',
    answer: 'Accurate quoting requires a site assessment. We need to evaluate: exact measurements and layout, soil conditions for footings, electrical access and capacity, wind exposure and snow loads for your area, and integration with existing structures. We provide fixed-price quotes after this assessment—not estimates that balloon later. Online calculators or per-square-foot pricing without site evaluation are unreliable for custom installations.',
  },
];

// How to budget steps
const budgetSteps = [
  {
    number: '01',
    title: 'Define Your Space',
    description: 'Measure your patio and determine how you will use the space. Do you need room for a dining table, lounge area, and outdoor kitchen? The size and configuration drive the base cost.',
  },
  {
    number: '02',
    title: 'Assess Site Conditions',
    description: 'Check electrical panel capacity (220V required), foundation needs, and access for installation. These factors significantly impact total cost.',
  },
  {
    number: '03',
    title: 'Prioritize Features',
    description: 'Decide which upgrades are essential vs. nice-to-have. LED lighting and heaters extend usability but add cost. Start with the core structure and plan for future additions if budget is tight.',
  },
  {
    number: '04',
    title: 'Get Professional Assessment',
    description: 'Schedule a consultation for a fixed-price quote. Online estimates are unreliable for custom installations. A site visit reveals factors that affect pricing.',
  },
  {
    number: '05',
    title: 'Plan Financing & Timeline',
    description: 'Allow 8-12 weeks from contract to completion (permits + manufacturing + installation). Arrange financing if needed and plan for the installation window.',
  },
];

export default function PergolaCostGuide() {
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema({
    title: 'Pergola Cost Guide 2026: Understanding Premium System Pricing',
    description:
      'Comprehensive guide to motorized pergola costs. What drives pricing from $25K to $100K+, why premium systems cost more than big-box alternatives, and how to budget for your project.',
    url: 'https://www.edgpatioshade.com/guides/pergola-cost',
    datePublished: '2026-03-17',
    category: 'Buying Guide',
  });

  const howToSchema = generateHowToSchema({
    name: 'How to Budget for a Motorized Pergola Installation',
    description: 'Step-by-step guide to planning and budgeting for a premium motorized pergola project.',
    step: budgetSteps.map((step) => ({
      name: step.title,
      text: step.description,
    })),
  });

  return (
    <article className="min-h-screen">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ========== HERO SECTION ========== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-surface-dark text-text-inverse">
        <Container>
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: 'Guides', href: '/guides' },
                { label: 'Pergola Cost Guide' },
              ]}
            />
          </div>

          <div className="max-w-4xl">
            <div className="label-editorial-brand mb-6 text-edg-brand flex items-center gap-3">
              <div className="h-px w-8 bg-edg-brand" />
              2026 Pricing Guide
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              What Does a Premium
              <br />
              <span className="text-edg-brand">Pergola Cost?</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-inverse-muted leading-relaxed max-w-3xl mb-8">
              A comprehensive breakdown of motorized pergola pricing. Understand why premium systems 
              range from $25,000 to $150,000+, what drives the cost, and how to budget for a 
              system that lasts 25+ years.
            </p>

            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/contact?type=consultation&product=pergola">
                <Button size="lg">Get a Fixed-Price Quote</Button>
              </TrackedLink>
              <Link href="#cost-ranges">
                <Button variant="outline" size="lg" className="border-text-inverse/20 text-text-inverse">
                  See Cost Ranges
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== WHY COSTS VARY INTRO ========== */}
      <Section className="section-lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-editorial-brand mb-4">The Reality</div>
              <h2 className="section-title mb-6">Why Pergola Costs Vary So Widely</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Search "pergola cost" and you will see figures ranging from $500 for a DIY kit to 
                  $150,000+ for custom installations. This range creates confusion for homeowners 
                  trying to budget.
                </p>
                <p>
                  The gap exists because "pergola" describes vastly different products. A $3,000 
                  big-box aluminum structure and a $60,000 motorized louvered system share a category 
                  name but little else in terms of engineering, materials, longevity, or performance.
                </p>
                <p>
                  <strong>This guide explains what drives pricing for premium motorized systems</strong>—the 
                  architectural-grade pergolas we specify and install that transform outdoor spaces 
                  into year-round living areas.
                </p>
              </div>

              <div className="mt-8 p-6 bg-surface-muted border-l-4 border-edg-brand">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-edg-brand-text shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-text-primary mb-1">What This Guide Covers</p>
                    <p className="text-text-secondary text-sm">
                      Premium motorized louvered pergolas with integrated drainage, smart controls, 
                      and engineered ratings for wind and snow. Not basic shade structures or DIY kits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={images.brand.hero.pergola}
                alt="Premium motorized louvered pergola installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== COST RANGES SECTION ========== */}
      <Section className="section-lg bg-surface-muted" id="cost-ranges">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Ballpark Figures</div>
            <h2 className="section-title">Premium Motorized Pergola Cost Ranges</h2>
            <p className="text-text-secondary mt-4">
              Installed pricing for systems we specify, including materials, engineering, permits, 
              and professional installation. Every project is unique—these are starting points.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costRanges.map((range) => (
              <Card
                key={range.size}
                variant={range.popular ? 'default' : 'muted'}
                padding="lg"
                className={range.popular ? 'border-edg-brand relative' : ''}
              >
                {range.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-edg-brand text-edg-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{range.size}</h3>
                <p className="text-text-muted text-sm mb-4">{range.dimensions}</p>
                <div className="text-2xl font-bold text-edg-brand-text mb-4">{range.range}</div>
                <p className="text-text-secondary text-sm mb-6">{range.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Best For</p>
                  <div className="flex flex-wrap gap-2">
                    {range.bestFor.map((item) => (
                      <span key={item} className="text-xs bg-white border border-border px-2 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm max-w-2xl mx-auto">
              <strong>Note:</strong> These ranges are for base systems with minimal integrated features. 
              LED lighting, heaters, retractable screens, and complex site conditions add to total investment. 
              Schedule a consultation for a fixed-price quote specific to your project.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== COST FACTORS ========== */}
      <Section className="section-lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">The Breakdown</div>
            <h2 className="section-title">What Drives the Cost</h2>
            <p className="text-text-secondary mt-4">
              Understanding the four major cost categories helps you evaluate quotes and 
              make informed decisions about where to invest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {costFactors.map((factor) => (
              <Card key={factor.title} variant="default" padding="lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-edg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                    <factor.icon className="h-6 w-6 text-edg-brand-text" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{factor.title}</h3>
                    <p className="text-edg-brand-text text-sm font-medium">{factor.impact}</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">{factor.description}</p>
                <ul className="space-y-2">
                  {factor.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-edg-brand-text shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== PREMIUM VS BIG BOX COMPARISON ========== */}
      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4 text-edg-brand">The Difference</div>
            <h2 className="section-title text-text-inverse">Premium Systems vs. Big-Box Alternatives</h2>
            <p className="text-text-inverse-muted mt-4">
              We source systems from specialized manufacturers worldwide—Belgium, Europe, and the US—to 
              provide the highest quality options for each project. Here is how these systems compare 
              to mass-market alternatives.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-inverse">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  <th className="text-left py-4 px-4 font-bold text-edg-brand">Premium Systems</th>
                  <th className="text-left py-4 px-4 font-bold text-text-inverse-muted">Big-Box / Online Kits</th>
                  <th className="text-left py-4 px-4 font-bold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-edg-brand">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{row.premium}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-text-inverse-muted">
                      <div className="flex items-start gap-2">
                        <X className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{row.bigBox}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-text-inverse-muted text-sm">{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-edg-brand/10 border border-edg-brand/20 p-6">
              <h3 className="font-bold text-lg mb-3 text-edg-brand">The Premium Advantage</h3>
              <p className="text-text-inverse-muted text-sm leading-relaxed">
                Our global sourcing gives clients access to the best engineering from around the world. 
                Belgian systems with superior wind ratings. American manufacturing for faster lead times. 
                European water management technology. We match the right system to your specific needs 
                and location—not whatever we have in inventory.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="font-bold text-lg mb-3 text-text-inverse">The True Cost of Cheap</h3>
              <p className="text-text-inverse-muted text-sm leading-relaxed">
                A $5,000 kit that lasts 5 years costs $1,000/year. A $50,000 premium system lasting 
                25 years costs $2,000/year—but adds home value, provides superior performance, and 
                never needs replacement. When you factor in replacement costs and lost home value, 
                the "cheap" option often costs more.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== HIDDEN COSTS ========== */}
      <Section className="section-lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Budget Planning</div>
            <h2 className="section-title">Hidden Costs to Consider</h2>
            <p className="text-text-secondary mt-4">
              The pergola itself is just one component. Here are additional costs that impact 
              your total project investment.
            </p>
          </div>

          <div className="space-y-12">
            {hiddenCosts.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-edg-brand-text" />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item) => (
                    <Card key={item.name} variant="muted" padding="md">
                      <p className="font-bold text-text-primary mb-1">{item.name}</p>
                      <p className="text-edg-brand-text font-medium mb-2">{item.cost}</p>
                      <p className="text-text-secondary text-sm">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Budget Recommendation</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Plan for a 10-15% contingency on top of your base pergola cost. Site conditions, 
                  electrical requirements, and permit complexities vary significantly. During our 
                  site assessment, we identify these factors and provide a fixed-price quote with 
                  no surprises.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== ROI SECTION ========== */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Investment Perspective</div>
            <h2 className="section-title">Value, ROI & Long-Term Costs</h2>
            <p className="text-text-secondary mt-4">
              A premium pergola is not an expense—it is an investment in usable living space 
              and property value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {roiPoints.map((point) => (
              <Card key={point.title} variant="default" padding="lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-edg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                    <point.icon className="h-6 w-6 text-edg-brand-text" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                    <p className="text-text-secondary text-sm mb-3 leading-relaxed">{point.description}</p>
                    <p className="text-edg-brand-text font-bold">{point.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Cost comparison over time */}
          <Card variant="dark" padding="lg">
            <h3 className="text-xl font-bold mb-6 text-text-inverse">25-Year Cost Comparison</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-text-inverse-muted text-sm mb-2">Big-Box Kit</p>
                <p className="text-3xl font-bold text-text-inverse mb-2">$15K–25K</p>
                <p className="text-text-inverse-muted text-xs">
                  Replace 3-4 times over 25 years. No value added to home. 
                  Depreciates immediately.
                </p>
              </div>
              <div className="text-center border-x border-border-inverse">
                <p className="text-text-inverse-muted text-sm mb-2">Mid-Range System</p>
                <p className="text-3xl font-bold text-text-inverse mb-2">$40K–60K</p>
                <p className="text-text-inverse-muted text-xs">
                  Replace once after 12-15 years. Moderate home value increase. 
                  Better performance.
                </p>
              </div>
              <div className="text-center">
                <p className="text-edg-brand text-sm mb-2 font-bold">Premium System</p>
                <p className="text-3xl font-bold text-edg-brand mb-2">$50K–75K</p>
                <p className="text-text-inverse-muted text-xs">
                  Lasts 25+ years. Adds $30K–50K in home value. 
                  Superior performance entire lifespan.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ========== HOW TO BUDGET ========== */}
      <Section className="section-lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label-editorial-brand mb-4">Planning Guide</div>
            <h2 className="section-title">How to Budget for Your Pergola Project</h2>
            <p className="text-text-secondary mt-4">
              Follow these steps to plan a realistic budget and avoid surprises.
            </p>
          </div>

          <div className="space-y-8">
            {budgetSteps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-edg-brand text-edg-dark rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  {index < budgetSteps.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="label-editorial-brand mb-4">Common Questions</div>
              <h2 className="section-title">Pergola Cost FAQs</h2>
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

      {/* ========== RELATED GUIDES ========== */}
      <Section className="section-md">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label-editorial-brand mb-4">Continue Learning</div>
            <h2 className="section-title">Related Guides</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guides/louvered-pergolas" className="group">
              <Card variant="muted" padding="lg" className="h-full group-hover:border-edg-brand/30 transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  Complete Guide to Louvered Pergolas
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Everything about features, benefits, and how these systems work.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>

            <Link href="/guides/louvered-pergola-brands-compared" className="group">
              <Card variant="muted" padding="lg" className="h-full group-hover:border-edg-brand/30 transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  Pergola Brands Compared
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Brustor vs. Azenco vs. Sundance—how we match systems to projects.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>

            <Link href="/guides/pergola-vs-patio-cover" className="group">
              <Card variant="muted" padding="lg" className="h-full group-hover:border-edg-brand/30 transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-edg-brand-text transition-colors">
                  Pergola vs. Patio Cover
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Understanding the differences and which is right for your home.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-edg-brand-text">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get a Fixed-Price Quote?</h2>
            <p className="text-text-inverse-muted text-lg mb-8">
              Every project is unique. Contact us for a site assessment and detailed quote 
              specific to your space, needs, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedLink href="/contact?type=consultation&product=pergola">
                <Button size="lg">Schedule Free Consultation</Button>
              </TrackedLink>
              <TrackedLink href="/systems/pergolas/configure">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-text-inverse/20 text-text-inverse hover:bg-text-inverse/10"
                >
                  Configure & Price in 3D <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedLink href="/systems/pergolas">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-text-inverse/20 text-text-inverse hover:bg-text-inverse/10"
                >
                  Explore Pergola Systems <ArrowRight className="ml-2 h-4 w-4" />
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
    </article>
  );
}
