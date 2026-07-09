import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import {
  DollarSign,
  Hammer,
  Zap,
  Ruler,
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
import {
  generateFAQSchema,
  generateArticleSchema,
  generateHowToSchema,
} from '@/lib/schema';
import * as images from '@/lib/images';

export const metadata: Metadata = {
  title: 'Motorized Pergola Cost in Chicago & Lake Geneva | 2026',
  description:
    'See 2026 planning ranges for installed motorized pergolas in Chicago and Lake Geneva, with site, engineering, drainage, and feature costs that change a quote.',
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
    images: [{ url: '/opengraph-image' }],
    title: 'Motorized Pergola Cost in Chicago & Lake Geneva | EDG',
    description:
      'Planning ranges for complete motorized pergola projects, including site conditions, engineering, drainage, features, and installation scope.',
  },
};

// Cost range data with caveats
const costRanges = [
  {
    size: 'Compact',
    dimensions: "10' × 12' to 12' × 14'",
    range: '$25,000 – $40,000',
    description:
      'Single-zone systems ideal for intimate patios and small decks.',
    bestFor: ['Townhomes', 'Small patios', 'Budget-conscious projects'],
  },
  {
    size: 'Standard',
    dimensions: "14' × 16' to 16' × 20'",
    range: '$40,000 – $65,000',
    description:
      'Most common residential size. Single or dual-zone configurations.',
    bestFor: ['Single-family homes', 'Medium patios', 'Full outdoor kitchens'],
    popular: true,
  },
  {
    size: 'Large',
    dimensions: "18' × 20' to 20' × 24'",
    range: '$65,000 – $90,000',
    description:
      'Multi-zone systems with integrated features and premium finishes.',
    bestFor: [
      'Estate properties',
      'Poolside installations',
      'Entertainment spaces',
    ],
  },
  {
    size: 'Custom / Commercial',
    dimensions: "20'+ or unique configurations",
    range: '$90,000 – $150,000+',
    description:
      'Complex engineering, multiple zones, full integration with architecture.',
    bestFor: ['Estate homes', 'Restaurants', 'Rooftop venues', 'Country clubs'],
  },
];

// Cost factors breakdown
const costFactors = [
  {
    icon: Globe,
    title: 'Materials & Sourcing',
    description:
      'Material, finish, drainage, and sourcing details vary by selected manufacturer and project. They are reviewed alongside the required performance, lead time, and service path.',
    impact: 'Project-specific cost driver',
    details: [
      'Material and coating options match exposure and finish needs',
      'Drainage details are selected around the system and patio',
      'Manufacturer choice follows engineering and service requirements',
    ],
  },
  {
    icon: Shield,
    title: 'Engineering & Ratings',
    description:
      'Wind, snow, attachment, and permit requirements can change the specification, structural scope, and cost. Ratings are only meaningful when tied to the selected model and project conditions.',
    impact: 'Project-specific cost driver',
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
      'Motors, controls, sensors, and automation options add cost when they are compatible with the selected system and useful to the owner.',
    impact: 'Project-specific cost driver',
    details: [
      'Motor and control selection',
      'Compatible home-automation integration',
      'Sensors and operating safeguards where specified',
      'Multi-zone control where useful',
    ],
  },
  {
    icon: Hammer,
    title: 'Professional Installation',
    description:
      'Proper installation requires specialized equipment, precise layout work, and coordination with electrical and site trades where needed.',
    impact: 'Project-specific cost driver',
    details: [
      'Installation coordinated around the selected system',
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
      {
        name: 'Foundation/Footings',
        description:
          'Concrete piers or slab reinforcement for structural loads',
        cost: '$2,000 – $8,000',
      },
      {
        name: 'Electrical Rough-In',
        description: 'Dedicated circuit and local electrical work, if required',
        cost: '$1,500 – $4,000',
      },
      {
        name: 'Deck Reinforcement',
        description: 'Additional support for deck-mounted systems',
        cost: '$1,000 – $5,000',
      },
      {
        name: 'Existing Structure Removal',
        description: 'Old pergola, awning, or patio cover removal',
        cost: '$500 – $3,000',
      },
    ],
  },
  {
    category: 'Permits & Compliance',
    items: [
      {
        name: 'Building Permits',
        description: 'Required in most municipalities for permanent structures',
        cost: '$500 – $2,500',
      },
      {
        name: 'Zoning Review',
        description: 'Setback and lot coverage compliance verification',
        cost: 'Included in permit',
      },
      {
        name: 'HOA Approval',
        description: 'Architectural review committee submissions',
        cost: 'Time/effort only',
      },
      {
        name: 'Engineering Stamps',
        description: 'PE stamp for structural drawings',
        cost: '$800 – $2,000',
      },
    ],
  },
  {
    category: 'Integrated Features',
    items: [
      {
        name: 'LED Lighting',
        description: 'Perimeter and downlighting integrated into frame',
        cost: '$2,000 – $5,000',
      },
      {
        name: 'Infrared Heaters',
        description: 'Ceiling-mounted radiant heat systems',
        cost: '$1,500 – $4,000 each',
      },
      {
        name: 'Retractable Screens',
        description: 'Motorized side screens for wind/bug protection',
        cost: '$3,500 – $8,000 each',
      },
      {
        name: 'Smart Home Integration',
        description: 'Programming and system integration',
        cost: '$500 – $2,000',
      },
    ],
  },
];

// Comparison: Premium vs. Big Box
const comparisonData = [
  {
    feature: 'Frame Material',
    premium: 'Specified material and finish for the selected system',
    bigBox: 'Varying materials and construction by kit',
    difference:
      'Compare documented material, finish, warranty, and service support',
  },
  {
    feature: 'Wind Rating',
    premium: 'Model-specific engineering and ratings where required',
    bigBox: 'Verify ratings and operating guidance before buying',
    difference: 'Match the system to site exposure and approvals',
  },
  {
    feature: 'Snow Load',
    premium: 'Model-specific snow and structural requirements',
    bigBox: 'Verify project suitability for local snow conditions',
    difference: 'Critical for northern climates and attachments',
  },
  {
    feature: 'Drainage',
    premium: 'Internal gutter system, hidden downspouts',
    bigBox: 'No drainage or basic external gutters',
    difference: 'Clean aesthetics; no water pooling',
  },
  {
    feature: 'Motors',
    premium: 'Specified motors, controls, and coverage',
    bigBox: 'Verify component support and warranty terms',
    difference: 'Compare service path and compatible controls',
  },
  {
    feature: 'Installation',
    premium: 'Specialized installation planning, permit coordination, warranty support',
    bigBox: 'DIY or installer support varies by product and seller',
    difference: 'Proper installation ensures performance and safety',
  },
  {
    feature: 'Warranty',
    premium: 'Manufacturer and labor coverage stated in the proposal',
    bigBox: 'Coverage varies by product and seller',
    difference: 'Compare actual terms and local service availability',
  },
];

// ROI data
const roiPoints = [
  {
    icon: Home,
    title: 'Appraised Value',
    description:
      'A permitted, well-integrated project can support resale appeal, but appraisal and market response are not fixed returns.',
    value: 'Market- and project-specific',
  },
  {
    icon: Ruler,
    title: 'Added Square Footage',
    description:
      'Creates usable outdoor living space that functions as an extension of your home. Cost per square foot is significantly less than an addition.',
    value: 'Compare the actual project scope, not a universal ratio',
  },
  {
    icon: Building2,
    title: 'Commercial ROI',
    description:
      'For restaurants and hospitality, outdoor coverage can protect more seating hours when the site, demand, staffing, and weather exposure support it.',
    value: 'Project-specific revenue model required',
  },
  {
    icon: TrendingUp,
    title: 'Depreciation vs. Appreciation',
    description:
      'Long-term ownership cost depends on the selected system, maintenance, exposure, warranty, and how the project is installed.',
    value: 'Compare documented lifecycle and service support',
  },
];

// FAQs
const faqs = [
  {
    question:
      'Why do motorized pergolas cost so much more than basic pergolas from home improvement stores?',
    answer:
      'The difference is usually engineering, materials, drainage, controls, installation, warranty, and service support. A kit and a custom motorized system should be compared model by model: documented ratings, attachment requirements, drainage design, components, coverage, and the local team that will support the project. The right choice depends on the site and the expected use, not a universal specification.',
  },
  {
    question:
      'What is the cost per square foot for a motorized louvered pergola?',
    answer:
      'Premium motorized pergolas typically range from $120 to $200 per square foot installed, depending on features and site complexity. This compares to $15-30/sq ft for basic non-motorized aluminum pergolas and $40-80/sq ft for high-end wood structures. The per-square-foot cost decreases slightly as size increases due to economies of scale on engineering and installation mobilization.',
  },
  {
    question: 'Are there financing options available?',
    answer:
      'Financing choices vary by homeowner, lender, and project. Common starting points can include home-improvement lending or a HELOC; confirm current options and terms directly with the lender before treating them as part of the project budget.',
  },
  {
    question: 'How much should I budget for unexpected costs?',
    answer:
      'Keep room in the plan for site preparation, electrical work, permits, access, and structural coordination. Challenging access, crane needs, or deck reinforcement can change scope. A site assessment helps identify those factors before a project direction is finalized.',
  },
  {
    question: 'Do premium pergolas really add home value?',
    answer:
      'They can support home value when properly permitted, professionally installed, and planned as a permanent architectural improvement rather than a temporary shade kit. Appraisal and resale impact still depends on the home, market, project quality, and buyer priorities, so we treat value as a site-specific planning factor rather than a fixed return.',
  },
  {
    question: 'What ongoing costs should I expect after installation?',
    answer:
      'Care needs depend on the selected system, exposure, drainage, controls, finish, and warranty terms. Review the recommended operating and maintenance guidance for the actual system before comparing long-term ownership costs with a wood or kit-based alternative.',
  },
  {
    question: 'Why is installation such a significant portion of the cost?',
    answer:
      'Installation can include precision layout of structural posts, electrical coordination, control setup, drainage, access planning, and system-specific commissioning. Those details affect performance, review requirements, warranty support, and the scope needed for the actual site.',
  },
  {
    question: 'How do I get an accurate quote for my specific project?',
    answer:
      'Accurate pricing starts with a site assessment: dimensions and layout, footing or structure conditions, electrical access, exposure, drainage, installation access, and how the system connects to existing surfaces. Online calculators and per-square-foot figures are useful starting points, but they cannot replace that project-specific review.',
  },
];

// How to budget steps
const budgetSteps = [
  {
    number: '01',
    title: 'Define Your Space',
    description:
      'Measure your patio and determine how you will use the space. Do you need room for a dining table, lounge area, and outdoor kitchen? The size and configuration drive the base cost.',
  },
  {
    number: '02',
    title: 'Assess Site Conditions',
    description:
      'Check available electrical capacity, potential circuit needs, foundation conditions, and installation access. These factors can significantly affect total cost.',
  },
  {
    number: '03',
    title: 'Prioritize Features',
    description:
      'Decide which upgrades are essential vs. nice-to-have. LED lighting and heaters extend usability but add cost. Start with the core structure and plan for future additions if budget is tight.',
  },
  {
    number: '04',
    title: 'Get Professional Assessment',
    description:
      'Schedule a consultation for a fixed-price quote. Online estimates are unreliable for custom installations. A site visit reveals factors that affect pricing.',
  },
  {
    number: '05',
    title: 'Plan Financing & Timeline',
    description:
      'Allow 8-12 weeks from contract to completion (permits + manufacturing + installation). Arrange financing if needed and plan for the installation window.',
  },
];

export default function PergolaCostGuide() {
  const faqSchema = generateFAQSchema(faqs);
  const articleSchema = generateArticleSchema({
    title: 'Motorized Pergola Cost in Chicago & Lake Geneva',
    description:
      'Planning guide to motorized pergola costs in Chicago and Lake Geneva, including installed project ranges, site variables, and budget considerations.',
    url: 'https://www.edgpatioshade.com/guides/pergola-cost',
    datePublished: '2026-03-17',
    dateModified: '2026-07-09',
    category: 'Buying Guide',
  });

  const howToSchema = generateHowToSchema({
    name: 'How to Budget for a Motorized Pergola Installation',
    description:
      'Step-by-step guide to planning and budgeting for a premium motorized pergola project.',
    step: budgetSteps.map((step) => ({
      name: step.title,
      text: step.description,
    })),
  });

  return (
    <article className="min-h-screen">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="bg-surface-dark text-text-inverse pt-32 pb-16 lg:pt-40 lg:pb-24">
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
            <div className="label-editorial-brand text-edg-brand mb-6 flex items-center gap-3">
              <div className="bg-edg-brand h-px w-8" />
              Chicago &amp; Lake Geneva Pricing Guide
            </div>

            <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              What does a motorized
              <br />
              <span className="text-edg-brand">
                pergola cost in Chicago &amp; Lake Geneva?
              </span>
            </h1>

            <p className="text-text-inverse-muted mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
              Planning ranges for complete motorized pergola projects in the
              Chicago-Milwaukee corridor and Lake Geneva area. These are not
              kit prices or quotes: site conditions, engineering, drainage,
              features, and installation scope all shape the final proposal.
            </p>

            <div className="flex flex-wrap gap-4">
              <TrackedLink href="/guides/pergola-system-fit-review?source=pergola_cost_hero">
                <Button size="lg">Get a System Fit Review</Button>
              </TrackedLink>
              <Link href="#cost-ranges">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-text-inverse/20 text-text-inverse"
                >
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="label-editorial-brand mb-4">The Reality</div>
              <h2 className="section-title mb-6">
                Why Pergola Costs Vary So Widely
              </h2>
              <div className="text-text-secondary space-y-4 leading-relaxed">
                <p>
                  Search "pergola cost" and you will see figures ranging from
                  $500 for a DIY kit to $150,000+ for custom installations. This
                  range creates confusion for homeowners trying to budget.
                </p>
                <p>
                  The gap exists because "pergola" describes vastly different
                  products. A $3,000 big-box aluminum structure and a $60,000
                  motorized louvered system share a category name but little
                  else in terms of engineering, materials, longevity, or
                  performance.
                </p>
                <p>
                  In Chicago and Lake Geneva, the same footprint can carry very
                  different scope depending on an existing deck or roof deck,
                  wind exposure, drainage, access, electrical work, and the
                  local review path. A useful planning range has to account for
                  those conditions.
                </p>
                <p>
                  <strong>
                    This guide explains what drives pricing for premium
                    motorized systems
                  </strong>
                  —the architectural-grade pergolas we specify and install that
                  turn outdoor spaces into more usable living areas.
                </p>
              </div>

              <div className="bg-surface-muted border-edg-brand mt-8 border-l-4 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-text-primary mb-1 font-bold">
                      What This Guide Covers
                    </p>
                    <p className="text-text-secondary text-sm">
                      Premium motorized louvered pergolas with integrated
                      drainage, smart controls, and engineered ratings for wind
                      and snow. Not basic shade structures or DIY kits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
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
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Ballpark Figures</div>
            <h2 className="section-title">
              Premium Motorized Pergola Cost Ranges
            </h2>
            <p className="text-text-secondary mt-4">
              Installed pricing for systems we specify, including materials,
              engineering, permits, and professional installation. Every project
              is unique—these are starting points.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {costRanges.map((range) => (
              <Card
                key={range.size}
                variant={range.popular ? 'default' : 'muted'}
                padding="lg"
                className={range.popular ? 'border-edg-brand relative' : ''}
              >
                {range.popular && (
                  <div className="bg-edg-brand text-edg-dark absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold">{range.size}</h3>
                <p className="text-text-muted mb-4 text-sm">
                  {range.dimensions}
                </p>
                <div className="text-edg-brand-text mb-4 text-2xl font-bold">
                  {range.range}
                </div>
                <p className="text-text-secondary mb-6 text-sm">
                  {range.description}
                </p>
                <div className="space-y-2">
                  <p className="text-text-muted text-xs font-bold tracking-wider uppercase">
                    Best For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {range.bestFor.map((item) => (
                      <span
                        key={item}
                        className="border-border border bg-white px-2 py-1 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-muted mx-auto max-w-2xl text-sm">
              <strong>Note:</strong> These ranges are for base systems with
              minimal integrated features. LED lighting, heaters, retractable
              screens, and complex site conditions add to total investment.
              Schedule a consultation for a fixed-price quote specific to your
              project.
            </p>
          </div>
        </Container>
      </Section>

      {/* ========== COST FACTORS ========== */}
      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">The Breakdown</div>
            <h2 className="section-title">What Drives the Cost</h2>
            <p className="text-text-secondary mt-4">
              Understanding the four major cost categories helps you evaluate
              quotes and make informed decisions about where to invest.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {costFactors.map((factor) => (
              <Card key={factor.title} variant="default" padding="lg">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-edg-brand/20 bg-edg-brand/10">
                    <factor.icon className="text-edg-brand-text h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{factor.title}</h3>
                    <p className="text-edg-brand-text text-sm font-medium">
                      {factor.impact}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {factor.description}
                </p>
                <ul className="space-y-2">
                  {factor.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm">
                      <Check className="text-edg-brand-text mt-0.5 h-4 w-4 shrink-0" />
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
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand text-edg-brand mb-4">
              The Difference
            </div>
            <h2 className="section-title text-text-inverse">
              Premium Systems vs. Big-Box Alternatives
            </h2>
            <p className="text-text-inverse-muted mt-4">
              We source systems from specialized manufacturers
              worldwide—Belgium, Europe, and the US—to provide the highest
              quality options for each project. Here is how these systems
              compare to mass-market alternatives.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-border-inverse border-b">
                  <th className="px-4 py-4 text-left font-bold">Feature</th>
                  <th className="text-edg-brand px-4 py-4 text-left font-bold">
                    Premium Systems
                  </th>
                  <th className="text-text-inverse-muted px-4 py-4 text-left font-bold">
                    Big-Box / Online Kits
                  </th>
                  <th className="px-4 py-4 text-left font-bold">
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? 'bg-white/5' : ''}
                  >
                    <td className="px-4 py-4 font-medium">{row.feature}</td>
                    <td className="text-edg-brand px-4 py-4">
                      <div className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{row.premium}</span>
                      </div>
                    </td>
                    <td className="text-text-inverse-muted px-4 py-4">
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{row.bigBox}</span>
                      </div>
                    </td>
                    <td className="text-text-inverse-muted px-4 py-4 text-sm">
                      {row.difference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-edg-brand/10 border-edg-brand/20 border p-6">
              <h3 className="text-edg-brand mb-3 text-lg font-bold">
                The Premium Advantage
              </h3>
              <p className="text-text-inverse-muted text-sm leading-relaxed">
                Our global sourcing gives clients access to the best engineering
                from around the world. Belgian systems with superior wind
                ratings. American manufacturing for faster lead times. European
                water management technology. We match the right system to your
                specific needs and location—not whatever we have in inventory.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <h3 className="text-text-inverse mb-3 text-lg font-bold">
                The True Cost of Cheap
              </h3>
              <p className="text-text-inverse-muted text-sm leading-relaxed">
                A lower initial price can still be expensive if the system does
                not fit the site's exposure, installation needs, or service
                path. Compare documented performance, maintenance, warranty,
                and expected ownership costs instead of relying on a universal
                lifespan or resale claim.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== HIDDEN COSTS ========== */}
      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Budget Planning</div>
            <h2 className="section-title">Hidden Costs to Consider</h2>
            <p className="text-text-secondary mt-4">
              The pergola itself is just one component. Here are additional
              costs that impact your total project investment.
            </p>
          </div>

          <div className="space-y-12">
            {hiddenCosts.map((category) => (
              <div key={category.category}>
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
                  <DollarSign className="text-edg-brand-text h-5 w-5" />
                  {category.category}
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {category.items.map((item) => (
                    <Card key={item.name} variant="muted" padding="md">
                      <p className="text-text-primary mb-1 font-bold">
                        {item.name}
                      </p>
                      <p className="text-edg-brand-text mb-2 font-medium">
                        {item.cost}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-border bg-white p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-edg-brand-text mt-0.5 h-6 w-6 shrink-0" />
              <div>
                <h4 className="mb-2 font-bold text-text-primary">
                  Budget Recommendation
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Plan for a 10-15% contingency on top of your base pergola
                  cost. Site conditions, electrical requirements, and permit
                  complexities vary significantly. During our site assessment,
                  we identify these factors and provide a fixed-price quote with
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
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">
              Investment Perspective
            </div>
            <h2 className="section-title">Value, ROI & Long-Term Costs</h2>
            <p className="text-text-secondary mt-4">
              A premium pergola is not an expense—it is an investment in usable
              living space and property value.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {roiPoints.map((point) => (
              <Card key={point.title} variant="default" padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-edg-brand/20 bg-edg-brand/10">
                    <point.icon className="text-edg-brand-text h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{point.title}</h3>
                    <p className="text-text-secondary mb-3 text-sm leading-relaxed">
                      {point.description}
                    </p>
                    <p className="text-edg-brand-text font-bold">
                      {point.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Cost comparison over time */}
          <Card variant="dark" padding="lg">
            <h3 className="text-text-inverse mb-6 text-xl font-bold">
              Long-Term Cost Comparison
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <p className="text-text-inverse-muted mb-2 text-sm">
                  Big-Box Kit
                </p>
                <p className="text-text-inverse mb-2 text-3xl font-bold">
                  $15K–25K
                </p>
                <p className="text-text-inverse-muted text-xs">
                  Ownership cost depends on material, exposure, installation,
                  maintenance, and warranty support.
                </p>
              </div>
              <div className="border-border-inverse border-x text-center">
                <p className="text-text-inverse-muted mb-2 text-sm">
                  Mid-Range System
                </p>
                <p className="text-text-inverse mb-2 text-3xl font-bold">
                  $40K–60K
                </p>
                <p className="text-text-inverse-muted text-xs">
                  Compare documented coverage, component support, and local
                  service with the actual system being considered.
                </p>
              </div>
              <div className="text-center">
                <p className="text-edg-brand mb-2 text-sm font-bold">
                  Premium System
                </p>
                <p className="text-edg-brand mb-2 text-3xl font-bold">
                  $50K–75K
                </p>
                <p className="text-text-inverse-muted text-xs">
                  A well-specified project can be a durable architectural
                  improvement, but lifecycle and resale impact are site- and
                  market-specific.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ========== HOW TO BUDGET ========== */}
      <Section className="section-lg">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="label-editorial-brand mb-4">Planning Guide</div>
            <h2 className="section-title">
              How to Budget for Your Pergola Project
            </h2>
            <p className="text-text-secondary mt-4">
              Follow these steps to plan a realistic budget and avoid surprises.
            </p>
          </div>

          <div className="space-y-8">
            {budgetSteps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center bg-edg-brand text-lg font-bold text-edg-dark">
                    {step.number}
                  </div>
                  {index < budgetSteps.length - 1 && (
                    <div className="bg-border mt-4 h-full w-px" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== FAQ SECTION ========== */}
      <Section className="section-lg bg-surface-muted">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <div className="label-editorial-brand mb-4">Common Questions</div>
              <h2 className="section-title">Pergola Cost FAQs</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} variant="default" padding="lg">
                  <h3 className="mb-3 flex items-start gap-3 text-lg font-bold">
                    <HelpCircle className="text-edg-brand-text mt-0.5 h-5 w-5 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== RELATED GUIDES ========== */}
      <Section className="section-md">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="label-editorial-brand mb-4">Continue Learning</div>
            <h2 className="section-title">Related Guides</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/guides/motorized-pergola-planning" className="group">
              <Card
                variant="muted"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-lg font-bold transition-colors">
                  Motorized Pergola Planning Guide
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  Cost, fit, drainage, controls, accessories, and project
                  constraints.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>

            <Link
              href="/guides/louvered-pergola-brands-compared"
              className="group"
            >
              <Card
                variant="muted"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-lg font-bold transition-colors">
                  How EDG Chooses a Pergola System
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  Brustor vs. Azenco vs. Sundance—how we match systems to
                  projects.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>

            <Link href="/guides/pergola-vs-patio-cover" className="group">
              <Card
                variant="muted"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-lg font-bold transition-colors">
                  Pergola vs. Patio Cover
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  Understanding the differences and which is right for your
                  home.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>

            <Link
              href="/service-areas/lake-forest-il/motorized-pergolas"
              className="group"
            >
              <Card
                variant="muted"
                padding="lg"
                className="group-hover:border-edg-brand/30 h-full transition-colors"
              >
                <h3 className="group-hover:text-edg-brand-text mb-2 text-lg font-bold transition-colors">
                  Lake Forest Pergola Planning
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  Local permit-aware planning for premium North Shore patios and
                  outdoor rooms.
                </p>
                <div className="text-edg-brand-text flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                  Read Local Guide <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== CTA SECTION ========== */}
      <Section className="section-lg bg-surface-dark text-text-inverse">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Need a Project-Specific Budget Range?
            </h2>
            <p className="text-text-inverse-muted mb-8 text-lg">
              Send photos, rough dimensions, location, budget, and what the
              space needs to do. EDG will help identify the likely system
              direction and budget band before a detailed proposal.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <TrackedLink href="/guides/pergola-system-fit-review?source=pergola_cost_bottom">
                <Button size="lg">Get a System Fit Review</Button>
              </TrackedLink>
              <TrackedLink href="/systems/pergolas/configure">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-text-inverse/20 text-text-inverse hover:bg-text-inverse/10"
                >
                  Configure & Price in 3D{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
              <TrackedLink href="/systems/pergolas">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-text-inverse/20 text-text-inverse hover:bg-text-inverse/10"
                >
                  Explore Pergola Systems{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </TrackedLink>
            </div>
            <p className="text-text-inverse-muted mt-6 text-sm">
              Or call us at{' '}
              <TrackedPhoneLink
                href="tel:+18155810138"
                className="text-edg-brand hover:underline"
              >
                (815) 581-0138
              </TrackedPhoneLink>{' '}
              to discuss your project.
            </p>
          </div>
        </Container>
      </Section>
    </article>
  );
}
