/**
 * Full Landing Page Migration Script using Sanity CLI authenticated context
 */

const generateKey = () => Math.random().toString(36).substring(2, 9);

const landingPages = [
  // DESIGN PAGE
  {
    _type: 'landingPage',
    _id: 'landing-design',
    title: 'Design Consultation - EDG',
    slug: { _type: 'slug', current: 'design' },
    pageType: 'design',
    hero: {
      badge: 'For Homeowners Who Want It Done Right',
      headline: [{ _type: 'block', _key: generateKey(), style: 'normal', children: [{ _type: 'span', _key: generateKey(), text: "$40,000 outdoor projects fail every day. Yours doesn't have to." }] }],
      description: "Most homeowners start by asking \"how much?\" The smart ones start by asking \"what's possible?\" Our design-first approach has protected over 500 homeowners from expensive mistakes.",
      ctaText: 'Get Your Free Design Assessment',
      ctaUrl: '/contact?type=design',
      footnote: '15-minute call. No obligation. No sales pressure.'
    },
    problemSection: {
      title: 'What happens when you skip the design phase?',
      painPoints: [
        { _key: generateKey(), icon: 'DollarSign', title: '$8,000+ in change orders', description: 'Contractors discover issues mid-project. You pay to fix them.' },
        { _key: generateKey(), icon: 'Clock', title: '3-month delays', description: 'Permits get rejected. Structural engineers get involved. Your summer is gone.' },
        { _key: generateKey(), icon: 'XCircle', title: 'A system you regret', description: 'Wrong product for your climate. Wrong size for your space. Wrong everything.' }
      ]
    },
    solutionSection: {
      title: 'Our design-first approach protects your investment.',
      description: "Before we recommend a single product, we understand your site, your climate, your usage patterns, and your goals. Then—and only then—we match you with the right system.",
      features: [
        { _key: generateKey(), title: 'Site-specific climate analysis', description: 'Wind loads, sun angles, snow loads for YOUR property' },
        { _key: generateKey(), title: 'Architectural integration', description: "How the system connects to your home's structure" },
        { _key: generateKey(), title: 'Permit & engineering review', description: 'What your municipality requires—before you apply' },
        { _key: generateKey(), title: 'System matching', description: 'The right product for your goals, not the one with the best margins' },
        { _key: generateKey(), title: 'Detailed scope & budget', description: "Know exactly what you're getting and what it costs" }
      ],
      image: { url: '/images/frameless-sliding-glass-walls.jpg', caption: 'A custom outdoor living space with retractable glass walls in Barrington, IL' }
    },
    whatYouGet: {
      title: 'What you get from a design consultation',
      description: "This isn't a sales call. It's a planning session that gives you clarity—whether you work with us or not.",
      items: [
        { _key: generateKey(), title: 'Site Feasibility Report', description: "Can your property support what you want? We'll tell you." },
        { _key: generateKey(), title: 'System Recommendations', description: '2-3 options matched to your goals and budget' },
        { _key: generateKey(), title: 'Budget Range', description: 'Realistic investment expectations, not bait-and-switch quotes' },
        { _key: generateKey(), title: 'Timeline Estimate', description: 'When you could realistically be enjoying your new space' }
      ]
    },
    processSteps: [
      { _key: generateKey(), step: '1', title: 'Discovery Call', description: '15 minutes to understand your vision, timeline, and budget.', time: 'Day 1' },
      { _key: generateKey(), step: '2', title: 'Site Visit', description: 'We measure, photograph, and assess your property in person.', time: 'Within 1 week' },
      { _key: generateKey(), step: '3', title: 'Design Proposal', description: 'Detailed recommendation with system specs, drawings, and pricing.', time: 'Within 2 weeks' },
      { _key: generateKey(), step: '4', title: 'Project Execution', description: 'Permitting, ordering, installation, and final walkthrough.', time: '4-8 weeks' }
    ],
    promiseSection: {
      icon: 'Shield',
      title: 'Our Promise',
      description: "If we discover during our assessment that your project isn't feasible, won't meet your goals, or isn't a good fit for what we do—we'll tell you. No hard sell. No wasted time."
    },
    testimonials: [
      { _key: generateKey(), quote: "EDG helped us see possibilities we hadn't considered. Their design guidance saved us from making a $15,000 mistake.", name: 'Mike & Sarah T.', location: 'Libertyville, IL', project: 'Louvered Pergola' },
      { _key: generateKey(), quote: "I came in thinking I needed glass enclosures. They showed me why motorized shades would actually work better for our situation.", name: 'Jennifer L.', location: 'Lake Bluff, IL', project: 'Motorized Shades' },
      { _key: generateKey(), quote: 'The site assessment caught a drainage issue that would have ruined our pergola. Worth every penny just for that.', name: 'Tom & Linda R.', location: 'Barrington, IL', project: 'Pergola + Shades' }
    ],
    faqs: [
      { _key: generateKey(), question: 'How much does the design consultation cost?', answer: "The initial discovery call is free. If we move forward with a site visit and detailed proposal, there's a design fee that gets credited toward your project if you proceed with us." },
      { _key: generateKey(), question: 'What if I already know what system I want?', answer: "Great! We'll validate your choice and make sure it's the right fit for your specific site. Sometimes clients come in wanting a pergola and leave with a better solution. Sometimes we confirm their instincts. Either way, you'll have confidence." },
      { _key: generateKey(), question: 'How long does the whole process take?', answer: "From first call to enjoying your new space: typically 6-10 weeks for standard projects. Complex projects or those requiring significant permitting can take longer. We'll give you a realistic timeline upfront." },
      { _key: generateKey(), question: 'Do you only work in the Chicago area?', answer: 'We design and install within 60 miles of Spring Grove, IL (north Chicago to Milwaukee). For projects outside that area, we can provide design consulting and connect you with qualified installers.' },
      { _key: generateKey(), question: "What if my project isn't feasible?", answer: "We'll tell you upfront. If your property can't support what you want, or if your budget doesn't align with your goals, we'd rather be honest than waste your time. That's the whole point of starting with design." }
    ],
    finalCta: {
      title: 'Ready to plan your four-season outdoor space?',
      description: "Start with a free 15-minute discovery call. We'll listen to your goals, answer your questions, and tell you honestly if we can help.",
      ctaText: 'Schedule Discovery Call',
      ctaUrl: '/contact?type=design',
      secondaryCtaText: '(815) 581-0138',
      secondaryCtaUrl: 'tel:+18155810138'
    }
  },
  // PRICE PAGE
  {
    _type: 'landingPage',
    _id: 'landing-price',
    title: 'Get a Quote - EDG',
    slug: { _type: 'slug', current: 'price' },
    pageType: 'price',
    hero: {
      badge: 'For Budget-Conscious Homeowners',
      headline: [{ _type: 'block', _key: generateKey(), style: 'normal', children: [{ _type: 'span', _key: generateKey(), text: 'Get a real quote. Not a bait-and-switch estimate.' }] }],
      description: "We know you've been burned by contractors who quote low and invoice high. That's why we take the time to understand your project before we quote—then stand behind our number.",
      ctaText: 'Request Your Quote',
      ctaUrl: '/contact?type=price',
      footnote: 'Usually delivered within 48 hours of site visit.'
    },
    whatYouGet: {
      title: "What you'll receive",
      description: "Not a vague estimate—a detailed proposal you can actually plan around.",
      items: [
        { _key: generateKey(), title: 'Itemized Scope', description: 'Every component, feature, and installation detail spelled out. No hidden line items.' },
        { _key: generateKey(), title: 'Fixed Price', description: "The number we quote is the number you pay. We don't do 'surprise' change orders." },
        { _key: generateKey(), title: 'Realistic Timeline', description: "Permit estimates, lead times, and installation dates. Know when you'll be enjoying your space." }
      ]
    },
    pricingFactors: {
      title: 'What affects your quote',
      description: 'Every project is unique. Here\'s what we consider when pricing yours.',
      factors: [
        { _key: generateKey(), title: 'Size & Layout', description: 'Square footage, shape complexity, and number of openings all factor in.' },
        { _key: generateKey(), title: 'Site Conditions', description: 'Attachment method, concrete work, electrical access, and equipment access.' },
        { _key: generateKey(), title: 'Options & Finish', description: 'Heating, lighting, automation level, fabric/color selections, and powder coat.' },
        { _key: generateKey(), title: 'Permitting', description: "Some municipalities require more engineering than others. We'll know after research." }
      ]
    },
    servicesIncluded: {
      title: "What's typically included",
      description: 'Every project is unique. We tailor our services to meet the specific requirements of your site and goals.',
      items: [
        { _key: generateKey(), title: 'Project Planning', description: 'Comprehensive site assessment and tailored system recommendations.' },
        { _key: generateKey(), title: 'Administrative Support', description: 'Management of documentation and municipal requirements when applicable.' },
        { _key: generateKey(), title: 'Technical Oversight', description: "Engineering and structural considerations based on your project's scope." },
        { _key: generateKey(), title: 'Professional Execution', description: 'Precision installation and site management by our specialized teams.' },
        { _key: generateKey(), title: 'System Integration', description: 'Configuration of automation, lighting, and performance features as needed.' },
        { _key: generateKey(), title: 'Project Completion', description: 'A final walkthrough and orientation to ensure your space is ready.' }
      ]
    },
    faqs: [
      { _key: generateKey(), question: "Why don't you publish prices online?", answer: "Because every project is different. Size, site conditions, options, and permitting requirements all affect the price significantly. We'd rather give you an accurate quote than a misleading range." },
      { _key: generateKey(), question: 'How quickly can I get a quote?', answer: "After a site visit (usually scheduled within a week), we'll have your detailed proposal within 48 hours. For simple projects, sometimes sooner." },
      { _key: generateKey(), question: 'Is there a cost for the quote?', answer: 'The initial consultation and site visit are free. If we proceed to detailed design work beyond the standard scope, we\'ll discuss any design fees upfront.' },
      { _key: generateKey(), question: "What's the deposit / payment schedule?", answer: 'Typically 50% at contract signing, 40% when materials arrive, 10% at completion. For larger projects, we can discuss milestone-based payments.' }
    ],
    finalCta: {
      title: 'Ready to get real numbers for your project?',
      description: "Tell us about your space and goals. We'll schedule a site visit and provide a detailed proposal—no obligation.",
      ctaText: 'Request Your Quote',
      ctaUrl: '/contact?type=price',
      secondaryCtaText: 'Call Now',
      secondaryCtaUrl: 'tel:+18155810138'
    }
  },
  // PRO PAGE
  {
    _type: 'landingPage',
    _id: 'landing-pro',
    title: 'Trade Professionals - EDG',
    slug: { _type: 'slug', current: 'pro' },
    pageType: 'pro',
    hero: {
      badge: 'For Builders, Architects & GCs',
      headline: [{ _type: 'block', _key: generateKey(), style: 'normal', children: [{ _type: 'span', _key: generateKey(), text: 'Build faster. Deliver better outdoor living.' }] }],
      description: "You're building a high-end home. The patio is part of the vision. But sourcing shading systems, managing specs, and coordinating install drains your time. We partner with builders to make the outdoor portion seamless.",
      ctaText: 'Request Quote',
      ctaUrl: '/contact?type=pro&action=plans',
      secondaryCtaText: 'Request Spec Sheets',
      secondaryCtaUrl: '/contact?type=pro'
    },
    problemSection: {
      title: 'The "Standard" Experience vs. The EDG Way',
      painPoints: [
        { _key: generateKey(), icon: 'XCircle', title: 'Site Headaches', description: 'No more guessing on attachment points or structural loads. We verify everything before the first truck arrives.' },
        { _key: generateKey(), icon: 'Clock', title: 'Material Delays', description: 'Stop waiting months. We keep stock materials ready to cut on-site, plus pre-engineered systems that ship in weeks, not months.' },
        { _key: generateKey(), icon: 'Wrench', title: 'Callback Fatigue', description: "If a motor needs an adjustment or a louver needs a tweak, we own it. You shouldn't have to manage our install." }
      ]
    },
    solutionSection: {
      title: 'Think of us as your in-house shading team.',
      description: "You have enough to manage. We handle the specialized details—from measuring to the final punch list. Have your own crew? We can supply the systems and provide the technical support they need to get it right.",
      features: [
        { _key: generateKey(), title: 'Flexible Partnership', description: 'We can handle the full install or just supply the materials and support your crew.' },
        { _key: generateKey(), title: 'Fast, accurate takeoffs', description: "Send us your plans, and we'll have a quote back in 48 hours." },
        { _key: generateKey(), title: 'We handle the specs', description: 'We coordinate with your team to make sure everything fits the first time.' },
        { _key: generateKey(), title: 'On-schedule delivery', description: "Materials arrive exactly when you're ready for them, avoiding site clutter." },
        { _key: generateKey(), title: 'Professional Support', description: "Whether we install or you do, we're here to ensure the final product is perfect." }
      ],
      image: { url: '/images/pergolas/residential-black-r-blade-02.jpg', caption: 'Builder project in North Shore, completed on schedule' }
    },
    tradeServices: {
      title: 'Trade Services',
      services: [
        { _key: generateKey(), icon: 'FileText', title: 'Project Specs', description: 'Everything you need for your drawings: DWG files, spec sheets, and clear measurements.', ctaText: 'Get Project Specs →', ctaUrl: '/contact?type=pro&action=specs' },
        { _key: generateKey(), icon: 'UploadCloud', title: '48-Hour Pricing', description: "Share your project details. We'll get you accurate pricing and lead times within two business days.", ctaText: 'Request Quote →', ctaUrl: '/contact?type=pro&action=plans' },
        { _key: generateKey(), icon: 'Users', title: 'Site Readiness', description: "We meet on-site to double-check dimensions and timing so we don't get in your crew's way.", ctaText: 'Schedule a Call →', ctaUrl: '/contact?type=pro' }
      ]
    },
    caseStudy: {
      title: 'Builder Success Story',
      projectName: 'Lake Forest Custom Home',
      description: 'A high-end residential builder needed a 450 sq ft louvered pergola with integrated shades and heating for a $3M new construction. Timeline was tight—6 weeks from decision to install.',
      results: ['Takeoff delivered: 24 hours', 'Engineering approval: 5 days', 'Materials on site: 4 weeks', 'Install complete: 3 days', 'Client satisfaction: Perfect'],
      testimonial: { quote: "EDG made shading the easiest part of the project. No delays, no surprises, no callbacks. That's rare in this business.", name: 'Tom Reynolds', title: 'Reynolds Custom Homes, Barrington' }
    },
    guarantee: {
      icon: 'Shield',
      title: 'Our Trade Guarantee',
      description: "If we miss our quoted lead time by more than 5 business days (for reasons within our control), we'll credit 5% of the install cost. We show up when we say we will."
    },
    testimonials: [
      { _key: generateKey(), quote: "Fastest takeoffs I've ever received. 24 hours, detailed, accurate. That's unheard of.", name: 'Mark S.', company: 'Lakeside Builders, Lake Geneva' },
      { _key: generateKey(), quote: "They integrate seamlessly into our build schedule. It's like having a shading department without the overhead.", name: 'Jennifer K.', company: 'JK Architecture, Highland Park' }
    ],
    faqs: [
      { _key: generateKey(), question: 'Do you offer trade pricing?', answer: 'Yes. We have standard trade margins for qualified builders, architects, and design professionals. Contact us to set up a trade account.' },
      { _key: generateKey(), question: 'Can you work with our team on site?', answer: 'Absolutely. We coordinate directly with your site super or structural team to ensure attachment points and loads are all set.' },
      { _key: generateKey(), question: "What's the wait time for materials?", answer: 'We have stock materials ready for on-site builds (zero wait), and our pre-engineered systems ship in about 3-5 weeks.' },
      { _key: generateKey(), question: 'Do you install, or just supply?', answer: "We're flexible. We can provide a full turnkey installation, or we can supply the materials and support your crew with the technical guidance they need to handle the build themselves." }
    ],
    finalCta: {
      title: "Let's talk about your next project.",
      description: 'Request a quote for your project, or schedule a call to discuss trade partnership.',
      ctaText: 'Request Quote',
      ctaUrl: '/contact?type=pro&action=plans',
      secondaryCtaText: '(815) 581-0138',
      secondaryCtaUrl: 'tel:+18155810138'
    }
  },
  // COMMERCIAL PAGE
  {
    _type: 'landingPage',
    _id: 'landing-commercial',
    title: 'Commercial Outdoor Solutions - EDG',
    slug: { _type: 'slug', current: 'commercial' },
    pageType: 'commercial',
    hero: {
      badge: 'For Restaurants, Hotels & Hospitality',
      headline: [{ _type: 'block', _key: generateKey(), style: 'normal', children: [{ _type: 'span', _key: generateKey(), text: 'Turn your patio into a profit center.' }] }],
      description: "Rain and heat don't just cancel reservations—they destroy revenue. We build outdoor infrastructure that pays for itself in one season.",
      ctaText: 'Schedule Site Assessment',
      ctaUrl: '/contact?type=commercial'
    },
    problemSection: {
      title: 'The real cost of unprotected outdoor space',
      painPoints: [
        { _key: generateKey(), icon: 'CloudRain', title: '42 days of rain', description: "That's the Chicago-area average. Each rainy evening costs $3-10K in lost revenue. That's $150K+ per year." },
        { _key: generateKey(), icon: 'DollarSign', title: '8 weeks of heat', description: 'July and August afternoons drive guests inside. Your premium patio seats sit empty. Revenue walks next door.' },
        { _key: generateKey(), icon: 'TrendingUp', title: 'Shortened season', description: "Without protection, your patio is profitable May-September. With it? April-November. That's 10 extra weeks of revenue." }
      ]
    },
    solutionSection: {
      title: 'All-weather infrastructure that prints money.',
      description: "Our commercial systems are engineered for high-cycle usage, extreme weather, and decades of reliable operation. This isn't residential equipment—it's commercial infrastructure.",
      features: [
        { _key: generateKey(), title: 'Rain-proof in 60 seconds', description: 'Motorized louvers close completely. Guests stay dry.' },
        { _key: generateKey(), title: '80%+ heat reduction', description: 'Shades and louvers block sun without blocking the view.' },
        { _key: generateKey(), title: 'Wind rated to 90+ mph', description: 'Built for Midwest storms. No emergency retraction panic.' },
        { _key: generateKey(), title: 'Minimal maintenance', description: 'Commercial-grade components. Annual service, not monthly repairs.' },
        { _key: generateKey(), title: '10-year structural warranty', description: 'We stand behind what we build.' }
      ],
      image: { url: '/images/commercial/restaurant-shade-hero.jpg', caption: 'Restaurant patio in Lake Geneva, WI' }
    },
    industries: {
      title: 'Industries We Serve',
      items: [
        { _key: generateKey(), title: 'Restaurants & Bars', description: 'Expand covers, eliminate cancellations', highlight: '+40-80 covers/night' },
        { _key: generateKey(), title: 'Hotels & Resorts', description: 'Premium guest amenities, event space', highlight: 'Year-round bookings' },
        { _key: generateKey(), title: 'Country Clubs', description: 'Pool decks, outdoor dining, events', highlight: 'Member retention' },
        { _key: generateKey(), title: 'Corporate Campuses', description: 'Employee wellness, outdoor meetings', highlight: 'Recruitment edge' }
      ]
    },
    roiCaseStudy: {
      title: 'Real ROI: One Season Payback',
      description: 'Numbers from an actual commercial installation in the Chicago/Milwaukee region.',
      projectName: 'Lakeside Restaurant',
      location: 'Lake Geneva, WI • Fine Dining',
      projectType: '16x20 Louvered Pergola + Integrated Heating',
      investment: '$62,000',
      results: ['40 additional covered seats', 'Zero weather cancellations', 'Season extended by 8 weeks', '$180,000 additional revenue'],
      testimonial: { quote: 'The pergola paid for itself by July. Our patio went from a liability to our single biggest revenue driver. We booked $180K in additional covers the first summer alone.', name: 'Restaurant Owner', title: 'Name withheld for privacy' },
      roiTime: '4 months'
    },
    capabilities: {
      title: 'Commercial Capabilities',
      items: [
        { _key: generateKey(), icon: 'BarChart3', title: 'ROI Analysis', description: "We'll help you model the revenue impact based on your covers, average ticket, and local weather patterns." },
        { _key: generateKey(), icon: 'ShieldCheck', title: 'Commercial-Grade Systems', description: 'Higher duty cycles, reinforced structures, and components rated for decades of daily use.' },
        { _key: generateKey(), icon: 'Zap', title: 'Rapid Deployment', description: 'We understand restaurant timelines. Most commercial installs complete in 3-5 days with minimal disruption.' }
      ]
    },
    serviceCommitment: {
      icon: 'Shield',
      title: 'Commercial Priority Service',
      description: 'For hospitality and restaurant operators, downtime is lost revenue. We provide priority support and local parts stocking to ensure your patio stays open and profitable.'
    },
    testimonials: [
      { _key: generateKey(), quote: 'We went from canceling 15-20 reservations per storm to zero. The ROI was obvious within the first month.', name: 'Managing Partner', company: 'Fine Dining Restaurant, Wilmette' },
      { _key: generateKey(), quote: "Our members can use the pool deck in any weather now. It's become our most popular amenity.", name: 'General Manager', company: 'Private Country Club, Barrington' }
    ],
    faqs: [
      { _key: generateKey(), question: 'How quickly can you install?', answer: 'Most commercial projects install in 3-5 days. We can work around your operating hours—early mornings, late nights, or closed days.' },
      { _key: generateKey(), question: 'Do I need city permits?', answer: 'Usually yes. We handle the entire permit process, including any engineering requirements. This is typically 2-4 weeks depending on your municipality.' },
      { _key: generateKey(), question: "What's the maintenance requirement?", answer: 'Annual service visit recommended. We clean, lubricate, and inspect all components. Most operators never think about the system between services.' },
      { _key: generateKey(), question: 'Can this integrate with our existing structure?', answer: "Almost always. We've attached to historic buildings, modern steel, wood pergolas, and freestanding structures. Site assessment will confirm feasibility." },
      { _key: generateKey(), question: 'What if something breaks during service?', answer: 'Commercial clients receive priority support. We stock common parts locally, and most issues are resolved within 24-48 hours to minimize any impact on your seating.' }
    ],
    finalCta: {
      title: 'Ready to turn your patio into a profit center?',
      description: "Schedule a free site assessment. We'll walk your space, discuss your goals, and show you what's possible—with real numbers.",
      ctaText: 'Schedule Site Assessment',
      ctaUrl: '/contact?type=commercial',
      secondaryCtaText: '(815) 581-0138',
      secondaryCtaUrl: 'tel:+18155810138'
    }
  }
];

async function migrate() {
  const client = require('@sanity/client').createClient({
    projectId: '1x9vna2d',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_SESSION_TOKEN,
  });

  console.log('Starting full landing page migration...\n');
  
  for (const page of landingPages) {
    try {
      await client.createOrReplace(page);
      console.log(`✓ Created/Updated ${page.pageType} landing page: ${page._id}`);
    } catch (err) {
      console.error(`✗ Failed ${page.pageType}:`, err.message);
    }
  }
  
  console.log('\nMigration complete!');
}

migrate();
