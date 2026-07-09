/**
 * Homepage content data
 * Uses standardized brand images for consistency
 */

import * as images from '@/lib/images';


export const socialProof = {
  projectsDelivered: 75,
  builderPartners: 20,
  googleRating: 5.0,
  yearsExperience: 10,
} as const;

export const testimonial = {
  quote:
    'EDG helped us avoid three major mistakes before we broke ground. The guidance alone was worth every penny.',
  author: 'Homeowner',
  location: 'Lake Forest, IL',
} as const;

export const heroVideo = {
  src: images.pages.home.heroVideo,
  poster: images.brand.hero.pergola,
} as const;

export const systems = [
  {
    id: 'pergolas',
    name: 'Louvered Pergolas',
    tagline: 'Most Popular',
    description:
      'Motorized aluminum louvers selected around the patio, drainage, and exposure. Adjust sun and shade, with rain protection on systems specified for that use.',
    features: [
      'Rain drainage built-in',
      'System-specific engineering',
      'Integrated LED & heating',
      'Smart home ready',
    ],
    image: images.brand.hero.pergola,
    pricingUrl: '/price?product=pergola',
    quoteUrl: '/contact?type=design&product=pergola',
  },
  {
    id: 'shades',
    name: 'Motorized Shades',
    tagline: null,
    description:
      'Exterior screens selected around glare, insects, privacy, view, and everyday wind comfort. Retract them when the space should stay open.',
    features: ['Solar comfort', 'Fabric options', 'Track-guided systems'],
    image: images.brand.hero.screens,
    quoteUrl: '/contact?type=price&product=shades',
  },
  {
    id: 'enclosures',
    name: 'Glass Enclosures',
    tagline: null,
    description:
      'Lumon and other frameless glass wall systems for patios, pergolas, and restaurants. Add wind and weather control without losing the open-air feel.',
    features: ['Lumon options', 'Frameless views', '3-season comfort'],
    image: '/images/enclosures/frameless-sliding-glass-walls.jpg',
    quoteUrl: '/contact?type=design&product=enclosure',
  },
] as const;

export const valueProps = [
  {
    title: 'System-Agnostic Guidance',
    description: 'We match the right system to your site—not push one brand.',
  },
  {
    title: 'Design-Build Integration',
    description:
      'Permitting, engineering, installation—all coordinated by one team.',
  },
  {
    title: 'Transparent Process',
    description: 'You know what to expect at every stage. No surprises.',
  },
] as const;

export const guideOffer = {
  title: 'Not ready to talk yet?',
  subtitle: 'Start with our free guide.',
  description:
    'Learn what questions to ask, what systems fit your needs, and how to avoid the 7 most expensive planning mistakes—before you talk to anyone.',
  benefits: [
    'Understand your options at a glance',
    'Get real budget ranges',
    'Avoid costly mistakes',
  ],
  ctaUrl: '/guide',
  ctaText: 'Get the Free Guide',
} as const;

export const paths = [
  {
    id: 'design',
    icon: 'LayoutTemplate',
    badge: 'Guidance First',
    title: 'Plan a Four-Season Space',
    description:
      'I need design guidance, feasibility checks, and a thoughtful planning process for a more useful patio.',
    cta: 'Start Here',
    href: '/design',
  },
  {
    id: 'price',
    icon: 'Calculator',
    badge: 'Fast & Transparent',
    title: 'Get a Starting Price',
    description:
      'I know what I want. Show me pricing models and budget ranges.',
    cta: 'View Pricing',
    href: '/price',
  },
  {
    id: 'pro',
    icon: 'HardHat',
    badge: 'Trade Only',
    title: 'Builders & Professionals',
    description:
      'I need specs, plan takeoffs, and trade coordination for active projects.',
    cta: 'Trade Portal',
    href: '/pro',
  },
  {
    id: 'commercial',
    icon: 'Building2',
    badge: 'High ROI',
    title: 'Restaurants, Hotels & Clubs',
    description:
      'Outdoor design for hospitality. Plan seating comfort, coverage, and operations around the actual site.',
    cta: 'Commercial Info',
    href: '/commercial',
  },
] as const;
