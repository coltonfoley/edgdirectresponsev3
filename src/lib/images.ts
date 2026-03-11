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
// export const furnitureImages = {
//   hero:       '/images/furniture/furniture-hero.jpg',
//   dining:     '/images/furniture/furniture-dining.jpg',
//   poolside:   '/images/furniture/furniture-poolside.jpg',
//   commercial: '/images/furniture/furniture-commercial.jpg',
// } as const;
//
// APPLIANCES — /images/appliances/
// export const applianceImages = {
//   hero:       '/images/appliances/appliances-hero.jpg',
//   pizzaOven:  '/images/appliances/appliances-pizza-oven.jpg',
//   kitchen:    '/images/appliances/appliances-kitchen.jpg',
//   heater:     '/images/appliances/appliances-heater.jpg',
// } as const;
//
// ENCLOSURES — /images/enclosures/
// export const enclosureImages = {
//   hero:       '/images/enclosures/enclosures-hero.jpg',
//   detail:     '/images/enclosures/enclosures-detail.jpg',
//   interior:   '/images/enclosures/enclosures-interior.jpg',
//   restaurant: '/images/enclosures/enclosures-restaurant.jpg',
// } as const;

// ============================================================================
// BRAND IMAGES - Core website imagery (15 images)
// ============================================================================

export const brand = {
  /** Hero section images - large impactful shots */
  hero: {
    pergola: '/images/brand/hero-pergola.jpg',
    screens: '/images/brand/hero-screens-new.jpg',
    screensOld: '/images/brand/hero-screens.jpg',
    glass: '/images/brand/hero-glass.jpg',
    lifestyle: '/images/brand/hero-lifestyle.jpg',
    showroom: '/images/brand/hero-showroom.jpg',
  },

  /** Detail shots - close-ups of features */
  detail: {
    louver: '/images/brand/detail-louver.jpg',
    screen: '/images/brand/detail-screen.jpg',
    glass: '/images/brand/detail-glass.jpg',
    led: '/images/brand/detail-led.webp',
    heater: '/images/brand/detail-heater.jpg',
    remote: '/images/brand/detail-remote.jpg',
  },

  /** Context shots - lifestyle/environment images */
  context: {
    pool: '/images/brand/context-pool.jpg',
    lake: '/images/brand/context-lake.jpg',
    commercial: '/images/brand/context-commercial.jpg',
    snow: '/images/brand/context-snow.jpg',
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
  arlingtonHeightsHotel: getProjectImageSet('arlington-heights-hotel', 3),
  /** Avaella - Downers Grove (Residential) */
  avaella: getProjectImageSet('avaella', 3),
  /** Barrington Hills - Large estate (Residential) */
  barringtonHillsEstate: getProjectImageSet('barrington-hills-estate', 3),
  /** Barrington - Wade (Residential) */
  barringtonOutdoorRoom: getProjectImageSet('barrington-outdoor-room', 3),
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
  northbrookFamilyEntertaining: getProjectImageSet('northbrook-family-entertaining', 3),
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
  arlingtonHeightsHotel: { slug: 'arlington-heights-hotel', ...featuredProjects.arlingtonHeightsHotel },
  avaella: { slug: 'avaella', ...featuredProjects.avaella },
  barringtonHills: { slug: 'barrington-hills-estate', ...featuredProjects.barringtonHillsEstate },
  barringtonOutdoor: { slug: 'barrington-outdoor-room', ...featuredProjects.barringtonOutdoorRoom },
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
  northbrookFamily: { slug: 'northbrook-family-entertaining', ...featuredProjects.northbrookFamilyEntertaining },
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
    framelessGlass: '/images/misc/frameless-sliding-glass-walls.jpg',
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
    sanibelPergola: '/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg',
    sanibelShade: '/images/shades/shade-deployed-screens-01.jpg',
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
    hotelGlass: brand.hero.glass,
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
    brand.detail.louver,
    brand.context.pool,
    brand.detail.led,
    brand.detail.remote,
  ],

  /** Shades system page gallery */
  shades: [
    pages.price.shadesHero,
    brand.detail.screen,
    brand.context.lake,
    pages.serviceAreas.sanibelShade,
  ],

  /** Enclosures system page gallery */
  enclosures: [
    brand.hero.glass,
    brand.detail.glass,
    pages.price.whitePergolaPool,
    pages.design.framelessGlass,
  ],

  /** Appliances system page gallery */
  appliances: [
    brand.hero.showroom,
    brand.detail.heater,
    brand.hero.lifestyle,
    brand.context.commercial,
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
    brand.hero.glass,
    brand.detail.louver,
  ],
} as const;

// ============================================================================
// ASSETS - Logos and meta images
// ============================================================================

export const assets = {
  logo: '/logo.png',
  ogImage: '/og-image.jpg',
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

// ============================================================================
// VALIDATION - All image paths for build-time checking
// ============================================================================

/** Flat array of ALL image paths in the system */
export const allImagePaths = [
  // Brand images
  ...Object.values(brand.hero),
  ...Object.values(brand.detail),
  ...Object.values(brand.context),

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
] as const;

/** Check if a path is a valid image path (for runtime validation) */
export function isValidImagePath(path: string): boolean {
  return allImagePaths.includes(path as typeof allImagePaths[number]);
}
