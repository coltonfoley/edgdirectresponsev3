/**
 * SINGLE SOURCE OF TRUTH for all images in the project
 * 
 * RULES:
 * 1. NEVER hardcode image paths in components/pages - import from here
 * 2. All images must have a descriptive key name
 * 3. Add new images here first, then use them
 * 4. Run `npm run validate-images` to check all images exist
 * 
 * BENEFITS:
 * - TypeScript autocomplete prevents typos
 * - Change image in one place, updates everywhere
 * - Easy to find where images are used (search for the key)
 * - Build-time validation ensures no broken images
 */

// ============================================================================
// PENDING IMAGES - Add photos to these folders, then uncomment the paths below
// ============================================================================
// See public/images/{category}/README.txt for naming conventions and photo guidance.
//
// UMBRELLAS — /images/umbrellas/
// export const umbrellaImages = {
//   hero:       '/images/umbrellas/umbrella-hero.jpg',
//   poolside:   '/images/umbrellas/umbrella-poolside.jpg',
//   dining:     '/images/umbrellas/umbrella-dining.jpg',
//   commercial: '/images/umbrellas/umbrella-commercial.jpg',
// } as const;
//
// FURNITURE — /images/furniture/
export const furnitureImages = {
  hero:       '/images/furniture/furniture-hero.jpg',
  dining:     '/images/furniture/furniture-dining.jpg',
  poolside:   '/images/furniture/furniture-poolside.jpg',
  commercial: '/images/furniture/furniture-commercial.jpg',
} as const;
//
// ============================================================================
// PRODUCT SYSTEMS - Complete product category images
// ============================================================================

export const systems = {
  /** Pergola system images */
  pergolas: {
    hero: '/images/pergolas/pergola-hero.jpg',
    blackBlade01: '/images/pergolas/residential-black-r-blade-01.webp',
    blackBlade02: '/images/pergolas/residential-black-r-blade-02.webp',
    blackBlade04: '/images/pergolas/residential-black-r-blade-04.webp',
    blackBladePool: '/images/pergolas/residential-black-r-blade-outdoor-dining-pool.webp',
    grayBronzeWhite: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
    whiteScreen: '/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg',
    whitePoolGlass: '/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg',
    whiteLedStrip: '/images/pergolas/residential-white-r-blade-led-strip.jpg',
    sanibelShoprosGrayWhite: '/images/pergolas/sanibel-shopros-gray-white.jpg',
    sanibelShoprosGrayWhite02: '/images/pergolas/sanibel-shopros-gray-white-02.jpg',
  },

  /** Shade/screen system images */
  shades: {
    hero: '/images/shades/shades-hero.jpg',
    deployed: '/images/shades/shade-deployed-screens-01.jpg',
  },

  /** Glass enclosure system images - ACTUAL GLASS WALLS */
  enclosures: {
    hero: '/images/enclosures/frameless-sliding-glass-walls.jpg',
    partialOpen: '/images/enclosures/glass-enclosure-partial-open.jpg',
    closedExterior: '/images/enclosures/glass-enclosure-closed-exterior.jpg',
    lifestyle: '/images/enclosures/residential-glass-enclosure-lifestyle.jpg',
    system01: '/images/enclosures/glass-system-01.jpg',
    system02: '/images/enclosures/glass-system-02.jpg',
    system03: '/images/enclosures/glass-system-03.jpg',
    system04: '/images/enclosures/glass-system-04.jpg',
    system05: '/images/enclosures/glass-system-05.jpg',
    system06: '/images/enclosures/glass-system-06.jpg',
    system07: '/images/enclosures/glass-system-07.jpg',
    system08: '/images/enclosures/glass-system-08.jpg',
    system09: '/images/enclosures/glass-system-09.jpg',
    commercialDayExterior: '/images/enclosures/commercial-glass-enclosure-day-exterior-01.jpg',
    commercialDayInterior: '/images/enclosures/commercial-glass-enclosure-day-interior-01.jpg',
    commercialNightDining: '/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg',
    commercialNightExterior: '/images/enclosures/commercial-glass-enclosure-night-exterior-01.jpg',
    commercialNightInterior01: '/images/enclosures/commercial-glass-enclosure-night-interior-01.jpg',
    commercialNightInterior02: '/images/enclosures/commercial-glass-enclosure-night-interior-02.jpg',
    commercialInteriorWood: '/images/enclosures/commercial-glass-enclosure-interior-wood-deck-01.jpg',
    commercialPergolaDay: '/images/enclosures/commercial-pergola-glass-enclosure-day-dining-01.jpg',
    commercialPergolaLights: '/images/enclosures/commercial-pergola-glass-enclosure-hanging-lights-01.jpg',
    framelessGlass: '/images/enclosures/frameless-sliding-glass-walls.jpg',
  },

  /** Outdoor appliances - NOW AVAILABLE */
  appliances: {
    kitchen: '/images/appliances/outdoor-kitchen-hero.png',
    heater: '/images/appliances/patio-heater.png',
    kitchenGrill: '/images/appliances/outdoor-kitchen-grill-station.jpg',
    kitchenCounter: '/images/appliances/outdoor-kitchen-countertop.jpg',
    kitchenPizza: '/images/appliances/outdoor-kitchen-social.png',
    kitchenComplete: '/images/appliances/outdoor-kitchen-hero.png',
    kitchenSocial: '/images/appliances/outdoor-kitchen-social.png',
  },

  /** Saunas - NOW AVAILABLE */
  saunas: {
    mw12a: '/images/saunas/mande-spa-mw12-outdoor-sauna-12.webp',
    mw12b: '/images/saunas/mande-spa-mw12-outdoor-sauna-2.webp',
    mw12c: '/images/saunas/mande-spa-mw12-outdoor-sauna-5.webp',
    mw16a: '/images/saunas/mande-spa-mw16-outdoor-sauna-15.webp',
    mw16b: '/images/saunas/mande-spa-mw16-outdoor-sauna-23.webp',
    mw20: '/images/saunas/mande-spa-mw20-outdoor-sauna-6.webp',
  },
} as const;

// ============================================================================
// TESTIMONIALS - Customer photos
// ============================================================================

export const testimonials = {
  testimonial01: '/images/testimonials/testimonial-01.jpg',
  testimonial02: '/images/testimonials/testimonial-02.jpg',
} as const;

// ============================================================================
// LEGACY HERO - For backward compatibility
// ============================================================================

export const legacyHero = {
  main: '/images/hero/hero-main.jpg',
} as const;

// ============================================================================
// BRAND IMAGES - Core website imagery (15 images)
// ============================================================================

export const brand = {
  /** Hero section images - large impactful shots */
  hero: {
    pergola: '/images/brand/hero-pergola.jpg',
    screens: '/images/brand/hero-screens-new.jpg',
    screensOld: '/images/brand/hero-pergola-modern-white.jpg',
    lifestyle: '/images/brand/context-restaurant-retractable-roof.jpg',
    showroom: '/images/brand/hero-outdoor-dining-showcase.jpg',
  },

  /** Detail shots - close-ups of features */
  detail: {
    louver: '/images/brand/context-outdoor-lounge-night.jpg',
    screen: '/images/brand/detail-pergola-solid-roof-firepit.jpg',
    led: '/images/brand/detail-led.webp',
    heater: '/images/brand/detail-heater.jpg',
    remote: '/images/brand/context-outdoor-living-dusk.jpg',
  },

  /** Context shots - lifestyle/environment images */
  context: {
    pool: '/images/brand/context-pool.jpg',
    lake: '/images/brand/context-lake.jpg',
    commercial: '/images/brand/context-commercial.jpg',
  },
} as const;

// ============================================================================
// PROJECT IMAGES - Portfolio case studies
// ============================================================================

export interface ProjectImageSet {
  hero: string;
  gallery: string[];
  all: string[];
}

/**
 * Get hero image path for any project by slug
 * Pattern: /projects/{slug}/hero.jpg
 */
export function getProjectHero(slug: string): string {
  return `/projects/${slug}/hero.jpg`;
}

/**
 * Get gallery image paths for any project by slug
 * Pattern: /projects/{slug}/{1|2|3|...}.jpg
 */
export function getProjectGallery(slug: string, count: number = 3): string[] {
  return Array.from({ length: count }, (_, i) => `/projects/${slug}/${i + 1}.jpg`);
}

/**
 * Get complete image set for a project
 * Returns hero + gallery paths in a convenient object
 */
export function getProjectImageSet(slug: string, galleryCount: number = 3): ProjectImageSet {
  const hero = getProjectHero(slug);
  const gallery = getProjectGallery(slug, galleryCount);
  return {
    hero,
    gallery,
    all: [hero, ...gallery],
  };
}

// ============================================================================
// FEATURED PROJECTS - Curated list with full image sets
// Used in home page, featured sections, and showcases
// ============================================================================

export const featuredProjects = {
  /** Arlington Heights - Carmine's (Commercial) */
  carmines: {
    hero: '/projects/carmines/carmines-hero.jpg',
    gallery: [
      '/projects/carmines/carmines-patio-city-view.jpg',
      '/projects/carmines/carmines-pergola-corner-structure.jpg',
      '/projects/carmines/carmines-louvers-sky-view.jpg',
      '/projects/carmines/carmines-louvers-urban-skyline.jpg',
      '/projects/carmines/carmines-under-pergola-signage.jpg',
      '/projects/carmines/carmines-patio-street-view.jpg',
      '/projects/carmines/carmines-patio-low-angle-signage.jpg',
    ] as string[],
    all: [
      '/projects/carmines/carmines-hero.jpg',
      '/projects/carmines/carmines-patio-city-view.jpg',
      '/projects/carmines/carmines-pergola-corner-structure.jpg',
      '/projects/carmines/carmines-louvers-sky-view.jpg',
      '/projects/carmines/carmines-louvers-urban-skyline.jpg',
      '/projects/carmines/carmines-under-pergola-signage.jpg',
      '/projects/carmines/carmines-patio-street-view.jpg',
      '/projects/carmines/carmines-patio-low-angle-signage.jpg',
    ] as string[],
  },
  /** Avaella - Downers Grove (Residential) */
  avaella: getProjectImageSet('avaella', 3),
  /** Barrington Hills - Large estate (Residential) */
  barringtonHillsEstate: getProjectImageSet('barrington-hills-estate', 3),
  /** Barrington - Wade (Residential) */
  wade: {
    hero: '/projects/wade/wade-hero.jpg',
    gallery: [
      '/projects/wade/wade-exterior-wide.jpg',
      '/projects/wade/wade-bar-interior.jpg',
      '/projects/wade/wade-interior-loungers.jpg',
      '/projects/wade/wade-interior-seating.jpg',
      '/projects/wade/wade-windows-open.jpg',
      '/projects/wade/wade-exterior-glass.jpg',
    ] as string[],
    all: [
      '/projects/wade/wade-hero.jpg',
      '/projects/wade/wade-exterior-wide.jpg',
      '/projects/wade/wade-bar-interior.jpg',
      '/projects/wade/wade-interior-loungers.jpg',
      '/projects/wade/wade-interior-seating.jpg',
      '/projects/wade/wade-windows-open.jpg',
      '/projects/wade/wade-exterior-glass.jpg',
    ] as string[],
  },
  /** Crystal Lake - Jake Everly Residence (Residential) */
  jake: {
    hero: '/projects/jake/jake-hero.jpg',
    gallery: [
      '/projects/jake/jake-exterior-wide.jpg',
      '/projects/jake/jake-pergola-detail.jpg',
      '/projects/jake/jake-louvered-ceiling.jpg',
      '/projects/jake/jake-interior-seating.jpg',
      '/projects/jake/jake-evening-view.jpg',
      '/projects/jake/jake-structure-detail.jpg',
    ] as string[],
    all: [
      '/projects/jake/jake-hero.jpg',
      '/projects/jake/jake-exterior-wide.jpg',
      '/projects/jake/jake-pergola-detail.jpg',
      '/projects/jake/jake-louvered-ceiling.jpg',
      '/projects/jake/jake-interior-seating.jpg',
      '/projects/jake/jake-evening-view.jpg',
      '/projects/jake/jake-structure-detail.jpg',
    ] as string[],
  },
  /** St. Charles - Greco (Residential) */
  greco: {
    hero: '/projects/greco/greco-hero.png',
    gallery: [
      '/projects/greco/greco-pergola-structure.jpg',
      '/projects/greco/greco-construction-view.jpg',
      '/projects/greco/greco-installation-detail.jpg',
      '/projects/greco/greco-aerial-house.jpg',
      '/projects/greco/greco-pool-patio-aerial.jpg',
      '/projects/greco/greco-backyard-overview.jpg',
      '/projects/greco/greco-drone-wide.jpg',
    ] as string[],
    all: [
      '/projects/greco/greco-hero.png',
      '/projects/greco/greco-pergola-structure.jpg',
      '/projects/greco/greco-construction-view.jpg',
      '/projects/greco/greco-installation-detail.jpg',
      '/projects/greco/greco-aerial-house.jpg',
      '/projects/greco/greco-pool-patio-aerial.jpg',
      '/projects/greco/greco-backyard-overview.jpg',
      '/projects/greco/greco-drone-wide.jpg',
    ] as string[],
  },
  /** Northbrook - Karp (Residential) */
  karp: {
    hero: '/projects/karp/karp-hero.jpg',
    gallery: [
      '/projects/karp/karp-wood-grain-louvers.jpg',
      '/projects/karp/karp-poolside-structure.jpg',
    ] as string[],
    all: [
      '/projects/karp/karp-hero.jpg',
      '/projects/karp/karp-wood-grain-louvers.jpg',
      '/projects/karp/karp-poolside-structure.jpg',
    ] as string[],
  },
  /** Buffalo Grove - Brewery (Commercial) */
  buffaloGroveBrewery: getProjectImageSet('buffalo-grove-brewery', 3),
  /** Deerfield - Backyard oasis (Residential) */
  deerfieldBackyardOasis: getProjectImageSet('deerfield-backyard-oasis', 3),
  /** Elmhurst - Entertainment space (Commercial) */
  elmhurstEntertainmentSpace: getProjectImageSet('elmhurst-entertainment-space', 3),
  /** Evanston - Rooftop terrace (Commercial) */
  evanstonRooftopTerrace: getProjectImageSet('evanston-rooftop-terrace', 3),
  /** Glencoe - Modern estate (Residential) */
  glencoeModernEstate: getProjectImageSet('glencoe-modern-estate', 3),
  /** Glencoe - Renovation (Residential) */
  glencoeRenovationBuilder: getProjectImageSet('glencoe-renovation-builder', 3),
  /** Highland Park - Builder (Residential) */
  highlandParkBuilder: getProjectImageSet('highland-park-builder', 3),
  /** Hinsdale - Custom builder (Residential) */
  hinsdaleCustomBuilder: getProjectImageSet('hinsdale-custom-builder', 3),
  /** Hinsdale - Garden room (Residential) */
  hinsdaleGardenRoom: getProjectImageSet('hinsdale-garden-room', 3),
  /** Kenilworth - Heritage home (Residential) */
  kenilworthHeritageHome: getProjectImageSet('kenilworth-heritage-home', 3),
  /** Lake Forest - Estate builder (Residential) */
  lakeForestEstateBuilder: getProjectImageSet('lake-forest-estate-builder', 3),
  /** Lake Forest - Original pergola (Residential) */
  lakeForestPergola: getProjectImageSet('lake-forest-pergola', 3),
  /** Lake Geneva - Restaurant (Commercial) */
  lakeGenevaRestaurant: getProjectImageSet('lake-geneva-restaurant', 3),
  /** Libertyville - Shade system (Residential) */
  libertyvilleShadeSystem: getProjectImageSet('libertyville-shade-system', 3),
  /** Naperville - Pool pavilion (Commercial) */
  napervillePoolPavilion: getProjectImageSet('naperville-pool-pavilion', 3),
  /** Northbrook - Karp family entertaining (Residential) */
  northbrookFamilyEntertaining: {
    hero: '/projects/karp/karp-hero.jpg',
    gallery: [
      '/projects/karp/karp-wood-grain-louvers.jpg',
      '/projects/karp/karp-poolside-structure.jpg',
    ] as string[],
    all: [
      '/projects/karp/karp-hero.jpg',
      '/projects/karp/karp-wood-grain-louvers.jpg',
      '/projects/karp/karp-poolside-structure.jpg',
    ] as string[],
  },
  /** St Charles - Winery tasting room (Commercial) */
  stCharlesWinery: getProjectImageSet('st-charles-winery', 3),
  /** Wheaton - Outdoor dining (Commercial) */
  wheatonOutdoorDining: getProjectImageSet('wheaton-outdoor-dining', 3),
  /** Wilmette - Country club (Commercial) */
  wilmetteCountryClub: getProjectImageSet('wilmette-country-club', 3),
  /** Winnetka - Lakeside retreat (Residential) */
  winnetkaLakesideRetreat: getProjectImageSet('winnetka-lakeside-retreat', 3),
  /** Winnetka - Modern builder (Residential) */
  winnetkaModernBuilder: getProjectImageSet('winnetka-modern-builder', 3),
} as const;

/** All featured project slugs for iteration */
export const featuredProjectSlugs = Object.keys(featuredProjects).map(key => {
  const project = featuredProjects[key as keyof typeof featuredProjects];
  return project.hero.split('/')[2]; // Extract slug from /projects/{slug}/hero.jpg
});

// ============================================================================
// BACKWARD COMPATIBILITY - Legacy exports for existing code
// ============================================================================

/**
 * @deprecated Use featuredProjects.{name} or getProjectImageSet() instead
 * Legacy registry with slug field for backward compatibility
 */
export const projects = {
  carmines: { slug: 'carmines', ...featuredProjects.carmines },
  avaella: { slug: 'avaella', ...featuredProjects.avaella },
  barringtonHills: { slug: 'barrington-hills-estate', ...featuredProjects.barringtonHillsEstate },
  wade: { slug: 'wade', ...featuredProjects.wade },
  jake: { slug: 'jake', ...featuredProjects.jake },
  greco: { slug: 'greco', ...featuredProjects.greco },
  karp: { slug: 'karp', ...featuredProjects.karp },
  buffaloGroveBrewery: { slug: 'buffalo-grove-brewery', ...featuredProjects.buffaloGroveBrewery },
  deerfieldBackyardOasis: { slug: 'deerfield-backyard-oasis', ...featuredProjects.deerfieldBackyardOasis },
  elmhurstEntertainmentSpace: { slug: 'elmhurst-entertainment-space', ...featuredProjects.elmhurstEntertainmentSpace },
  evanstonRooftopTerrace: { slug: 'evanston-rooftop-terrace', ...featuredProjects.evanstonRooftopTerrace },
  glencoeModernEstate: { slug: 'glencoe-modern-estate', ...featuredProjects.glencoeModernEstate },
  glencoeRenovationBuilder: { slug: 'glencoe-renovation-builder', ...featuredProjects.glencoeRenovationBuilder },
  highlandPark: { slug: 'highland-park-builder', ...featuredProjects.highlandParkBuilder },
  hinsdaleCustomBuilder: { slug: 'hinsdale-custom-builder', ...featuredProjects.hinsdaleCustomBuilder },
  hinsdaleGardenRoom: { slug: 'hinsdale-garden-room', ...featuredProjects.hinsdaleGardenRoom },
  kenilworthHeritageHome: { slug: 'kenilworth-heritage-home', ...featuredProjects.kenilworthHeritageHome },
  lakeForestEstateBuilder: { slug: 'lake-forest-estate-builder', ...featuredProjects.lakeForestEstateBuilder },
  lakeForest: { slug: 'lake-forest-pergola', ...featuredProjects.lakeForestPergola },
  lakeGeneva: { slug: 'lake-geneva-restaurant', ...featuredProjects.lakeGenevaRestaurant },
  libertyville: { slug: 'libertyville-shade-system', ...featuredProjects.libertyvilleShadeSystem },
  napervillePoolPavilion: { slug: 'naperville-pool-pavilion', ...featuredProjects.napervillePoolPavilion },
  northbrookFamily: { slug: 'karp', ...featuredProjects.northbrookFamilyEntertaining },
  stCharlesWinery: { slug: 'st-charles-winery', ...featuredProjects.stCharlesWinery },
  wheatonOutdoorDining: { slug: 'wheaton-outdoor-dining', ...featuredProjects.wheatonOutdoorDining },
  wilmette: { slug: 'wilmette-country-club', ...featuredProjects.wilmetteCountryClub },
  winnetkaLakesideRetreat: { slug: 'winnetka-lakeside-retreat', ...featuredProjects.winnetkaLakesideRetreat },
  winnetkaModernBuilder: { slug: 'winnetka-modern-builder', ...featuredProjects.winnetkaModernBuilder },
} as const;

/** @deprecated Use featuredProjectSlugs or Object.keys(featuredProjects) instead */
export const projectSlugs = Object.values(projects).map(p => p.slug);

/**
 * @deprecated Use getProjectImageSet() instead for consistency
 * This function returns the same shape for backward compatibility
 */
export function getProjectImages(slug: string): ProjectImageSet | null {
  // Check if it's a known legacy project
  const legacyProject = Object.values(projects).find(p => p.slug === slug);
  if (legacyProject) {
    return {
      hero: legacyProject.hero,
      gallery: legacyProject.gallery,
      all: legacyProject.all,
    };
  }
  // For unknown projects, generate paths dynamically
  return getProjectImageSet(slug);
}

// ============================================================================
// PAGE-SPECIFIC IMAGES - One-off images used on specific pages
// ============================================================================

export const pages = {
  /** Homepage */
  home: {
    heroVideo: '/images/videos/commercial-pergola-video-clip-01.mp4',
    heroVideoPoster: brand.hero.pergola,
  },

  /** Pricing page */
  price: {
    shadesHero: '/images/shades/shades-hero.jpg',
    pergolaGray: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
    whitePergolaPool: '/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg',
  },

  /** Guides */
  guides: {
    cover: '/images/misc/guide-cover.png',
    louveredPergolasHero: '/images/pergolas/pergola-hero.jpg',
    pergolaVsPatioCover: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
  },

  /** Design page */
  design: {
    framelessGlass: systems.enclosures.framelessGlass,
  },

  /** Pro page */
  pro: {
    blackBlade: '/images/pergolas/residential-black-r-blade-02.webp',
  },

  /** Systems index */
  systems: {
    blackBladePool: '/images/pergolas/residential-black-r-blade-outdoor-dining-pool.webp',
    grayBladeWhite: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
    whiteLedStrip: '/images/pergolas/residential-white-r-blade-led-strip.jpg',
  },

  /** Service areas */
  serviceAreas: {
    defaultHero: brand.hero.pergola,
    barringtonPergola1: '/images/pergolas/residential-black-r-blade-01.webp',
    barringtonPergola4: '/images/pergolas/residential-black-r-blade-04.webp',
    chicagoCourtyardPergola: '/images/service-areas/chicago-courtyard-pergola.jpg',
    chicagoScreenExterior: '/images/service-areas/chicago-retractable-screen-exterior.jpg',
    chicagoScreenCorner: '/images/service-areas/chicago-retractable-screen-corner.jpg',
    chicagoScreenRestaurant: '/images/service-areas/chicago-retractable-screen-restaurant.jpg',
    sanibelPergola: '/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg',
    sanibelShade: '/images/shades/shade-deployed-screens-01.jpg',
    sanibelShopros: systems.pergolas.sanibelShoprosGrayWhite,
    sanibelShopros02: systems.pergolas.sanibelShoprosGrayWhite02,
    napervillePergolaPool01: '/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg',
  },

  /** Locations */
  locations: {
    defaultHero: '/images/pergolas/pergola-hero.jpg',
  },

  /** Commercial pages */
  commercial: {
    countryClubHero: brand.hero.lifestyle,
    countryClubPool: brand.context.pool,
    hotelGlass: '/images/enclosures/frameless-sliding-glass-walls.jpg',
    hotelScreens: brand.hero.screens,
    restaurantsBg: brand.context.commercial,
    restaurantScreens: brand.hero.screens,
    westLoopHero: brand.hero.lifestyle,
  },
} as const;

// ============================================================================
// PRE-CONFIGURED GALLERIES - Ready-to-use image arrays
// ============================================================================

export const galleries = {
  /** Pergola system page gallery */
  pergolas: [
    '/images/pergolas/pergola-hero.jpg',
    brand.context.pool,
    '/images/pergolas/residential-white-r-blade-led-strip.jpg',
    '/images/pergolas/residential-black-r-blade-02.webp',
  ],

  /** Shades system page gallery */
  shades: [
    pages.price.shadesHero,
    '/images/shades/shade-deployed-screens-01.jpg',
    brand.context.lake,
    pages.serviceAreas.sanibelShade,
  ],

  /** Enclosures system page gallery - REAL GLASS IMAGES */
  enclosures: [
    systems.enclosures.hero,
    systems.enclosures.partialOpen,
    systems.enclosures.closedExterior,
    systems.enclosures.commercialDayExterior,
  ],

  /** Appliances system page gallery - REAL APPLIANCE IMAGES */
  appliances: [
    systems.appliances.kitchen,
    systems.appliances.heater,
    systems.appliances.kitchenGrill,
    systems.appliances.kitchenPizza,
  ],

  /** Commercial page gallery */
  commercial: [
    brand.hero.lifestyle,
    brand.context.commercial,
    brand.hero.pergola,
  ],

  /** Service areas index gallery */
  serviceAreas: [
    brand.hero.pergola,
    brand.hero.screens,
    '/images/enclosures/frameless-sliding-glass-walls.jpg',
    '/images/pergolas/pergola-hero.jpg',
  ],
} as const;

// ============================================================================
// ASSETS - Logos and meta images
// ============================================================================

export const assets = {
  logo: '/logo.png',
  ogImage: '/og-image.jpg',
  clientLogos: {
    carmines: '/images/logos/carmines.png',
    chicagoWinery: '/images/logos/chicago-winery.png',
    louMalnatis: '/images/logos/lou-malnatis.svg',
    rosebud: '/images/logos/rosebud.png',
    theDistrict: '/images/logos/the-district.avif',
    theElm: '/images/logos/the-elm.webp',
    palmSpringsAirport: '/images/logos/palm-springs-airport.webp',
    ikeAndOak: '/images/logos/ike-and-oak.png',
    hyattRegencyChicago: '/images/logos/hyatt-regency-chicago.svg',
  },
} as const;

// ============================================================================
// TYPE EXPORTS - For TypeScript autocomplete
// ============================================================================

export type BrandCategory = keyof typeof brand;
export type BrandHeroKey = keyof typeof brand.hero;
export type BrandDetailKey = keyof typeof brand.detail;
export type BrandContextKey = keyof typeof brand.context;
export type FeaturedProjectKey = keyof typeof featuredProjects;
export type ProjectKey = keyof typeof projects;
export type GalleryKey = keyof typeof galleries;
export type SystemsCategory = keyof typeof systems;
export type TestimonialKey = keyof typeof testimonials;
export type ClientLogoKey = keyof typeof assets.clientLogos;

// ============================================================================
// VALIDATION - All image paths for build-time checking
// ============================================================================

/** Flat array of ALL image paths in the system */
export const allImagePaths = [
  // Brand images
  ...Object.values(brand.hero),
  ...Object.values(brand.detail),
  ...Object.values(brand.context),

  // System images
  ...Object.values(systems.pergolas),
  ...Object.values(systems.shades),
  ...Object.values(systems.enclosures),
  ...Object.values(systems.appliances),
  ...Object.values(systems.saunas),

  // Testimonials
  ...Object.values(testimonials),

  // Legacy hero
  ...Object.values(legacyHero),

  // Project images (from featuredProjects)
  ...Object.values(featuredProjects).flatMap(p => [p.hero, ...p.gallery]),

  // Page-specific images
  pages.home.heroVideo,
  pages.price.shadesHero,
  pages.price.pergolaGray,
  pages.price.whitePergolaPool,
  pages.guides.cover,
  pages.guides.louveredPergolasHero,
  pages.guides.pergolaVsPatioCover,
  pages.design.framelessGlass,
  pages.pro.blackBlade,
  pages.systems.blackBladePool,
  pages.systems.grayBladeWhite,
  pages.systems.whiteLedStrip,
  pages.serviceAreas.barringtonPergola1,
  pages.serviceAreas.barringtonPergola4,
  pages.serviceAreas.sanibelPergola,
  pages.serviceAreas.sanibelShade,
  pages.locations.defaultHero,

  // Assets
  assets.logo,
  assets.ogImage,
  ...Object.values(assets.clientLogos),
] as const;

/** Check if a path is a valid image path (for runtime validation) */
export function isValidImagePath(path: string): boolean {
  return allImagePaths.includes(path as typeof allImagePaths[number]);
}
