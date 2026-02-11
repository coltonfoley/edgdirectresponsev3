/**
 * FULL Homepage Migration - adds missing sections
 */

const generateKey = () => Math.random().toString(36).substring(2, 9);

async function migrateHomepage() {
  const client = require('@sanity/client').createClient({
    projectId: '1x9vna2d',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_SESSION_TOKEN,
  });
  
  console.log('🚀 Migrating homepage sections...\n');
  
  const homepageId = await client.fetch('*[_type == "homepage"][0]._id');
  
  if (!homepageId) {
    console.error('No homepage found!');
    return;
  }
  
  // Add missing sections to homepage
  const patch = {
    socialProof: {
      projectsDelivered: 75,
      builderPartners: 20,
      googleRating: 5.0,
      yearsExperience: 10,
    },
    featuresSection: {
      title: 'Why Work With EDG?',
      subtitle: 'Design-first outdoor living for discerning homeowners',
      features: [
        { _key: generateKey(), icon: 'Compass', title: 'System-Agnostic Guidance', description: 'We match the right system to your site—not push one brand.' },
        { _key: generateKey(), icon: 'ClipboardList', title: 'Design-Build Integration', description: 'Permitting, engineering, installation—all coordinated by one team.' },
        { _key: generateKey(), icon: 'Eye', title: 'Transparent Process', description: 'You know what to expect at every stage. No surprises.' },
      ],
    },
    productsSection: {
      title: 'Our Systems',
      subtitle: 'Premium outdoor living solutions engineered for Midwest weather',
      products: [
        { _key: generateKey(), name: 'Louvered Pergolas', tagline: 'Most Popular', description: 'Motorized aluminum louvers that rotate from full sun to full shade—and close completely for rain protection.', features: ['Rain drainage built-in', 'Snow load rated', 'Integrated LED & heating', 'Smart home ready'], image: '/images/pergolas/pergola-hero.jpg', pricingUrl: '/price?product=pergola', quoteUrl: '/contact?type=design&product=pergola' },
        { _key: generateKey(), name: 'Motorized Shades', tagline: null, description: 'Wind-rated exterior screens that block 80%+ of heat and glare while preserving your view.', features: ['Heat reduction', 'UV protection', 'Wind rated'], image: '/images/motorized-retractable-screens-patio.jpg', quoteUrl: '/contact?type=price&product=shades' },
        { _key: generateKey(), name: 'Glass Enclosures', tagline: null, description: 'Frameless glass wall systems that stack, fold, and disappear. Add weatherproof square footage without heavy construction.', features: ['Weatherproof', 'Adds value', 'Year-round use'], image: '/images/frameless-sliding-glass-walls.jpg', quoteUrl: '/contact?type=design&product=enclosure' },
      ],
    },
    processSection: {
      title: 'How It Works',
      steps: [
        { _key: generateKey(), step: '1', title: 'Discovery', description: '15-minute call to understand your vision, site, and goals.', time: 'Day 1' },
        { _key: generateKey(), step: '2', title: 'Site Assessment', description: 'We visit, measure, and photograph your space.', time: 'Within 1 week' },
        { _key: generateKey(), step: '3', title: 'Design & Proposal', description: 'Detailed plan with system specs, drawings, and pricing.', time: 'Within 2 weeks' },
        { _key: generateKey(), step: '4', title: 'Installation', description: 'Permitting, build, and walkthrough.', time: '4-8 weeks' },
      ],
    },
    pathsSection: {
      title: 'How Can We Help?',
      paths: [
        { _key: generateKey(), id: 'design', icon: 'LayoutTemplate', badge: 'Guidance First', title: 'Plan a Four-Season Space', description: 'I need design guidance, feasibility checks, and a thoughtful planning process.', cta: 'Start Here', href: '/design' },
        { _key: generateKey(), id: 'price', icon: 'Calculator', badge: 'Fast & Transparent', title: 'Get a Starting Price', description: 'I know what I want. Show me pricing models and budget ranges.', cta: 'View Pricing', href: '/price' },
        { _key: generateKey(), id: 'pro', icon: 'HardHat', badge: 'Trade Only', title: 'Builders & Professionals', description: 'I need specs, plan takeoffs, and trade coordination for active projects.', cta: 'Trade Portal', href: '/pro' },
        { _key: generateKey(), id: 'commercial', icon: 'Building2', badge: 'High ROI', title: 'Restaurants, Hotels & Clubs', description: 'High-ROI outdoor design for hospitality. Increase capacity and revenue year-round.', cta: 'Commercial Info', href: '/commercial' },
      ],
    },
    guideOffer: {
      title: 'Not ready to talk yet?',
      subtitle: 'Start with our free guide.',
      description: 'Learn what questions to ask, what systems fit your needs, and how to avoid the 7 most expensive planning mistakes—before you talk to anyone.',
      benefits: ['Understand your options at a glance', 'Get real budget ranges', 'Avoid costly mistakes'],
      ctaUrl: '/guides/planning-guide',
      ctaText: 'Get the Free Guide',
    },
  };
  
  await client.patch(homepageId).set(patch).commit();
  console.log('✅ Homepage sections migrated');
}

migrateHomepage().catch(console.error);
