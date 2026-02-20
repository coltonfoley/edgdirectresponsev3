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
// BRAND IMAGES - Core website imagery (15 images)
// ============================================================================

export const brand = {
  /** Hero section images - large impactful shots */
  hero: {
    pergola: '/images/brand/hero-pergola.jpg',
    screens: '/images/brand/hero-screens-new.jpg',
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

// NOTE: Only 7 projects are defined here with full image sets.
// All 24 projects use placeholders from /projects/{slug}/hero.jpg
// See src/lib/projects.ts for the full project list
export const projects = {
  barringtonHills: {
    slug: 'barrington-hills-estate',
    hero: '/projects/barrington-hills-estate/hero.jpg',
    gallery: [
      '/projects/barrington-hills-estate/1.jpg',
      '/projects/barrington-hills-estate/2.jpg',
      '/projects/barrington-hills-estate/3.jpg',
    ],
  },
  barringtonOutdoor: {
    slug: 'barrington-outdoor-room',
    hero: '/projects/barrington-outdoor-room/hero.jpg',
    gallery: [
      '/projects/barrington-outdoor-room/1.jpg',
      '/projects/barrington-outdoor-room/2.jpg',
      '/projects/barrington-outdoor-room/3.jpg',
    ],
  },
  highlandPark: {
    slug: 'highland-park-builder',
    hero: '/projects/highland-park-builder/hero.jpg',
    gallery: [
      '/projects/highland-park-builder/1.jpg',
      '/projects/highland-park-builder/2.jpg',
      '/projects/highland-park-builder/3.jpg',
    ],
  },
  lakeForest: {
    slug: 'lake-forest-pergola',
    hero: '/projects/lake-forest-pergola/hero.jpg',
    gallery: [
      '/projects/lake-forest-pergola/1.jpg',
      '/projects/lake-forest-pergola/2.jpg',
      '/projects/lake-forest-pergola/3.jpg',
    ],
  },
  lakeGeneva: {
    slug: 'lake-geneva-restaurant',
    hero: '/projects/lake-geneva-restaurant/hero.jpg',
    gallery: [
      '/projects/lake-geneva-restaurant/1.jpg',
      '/projects/lake-geneva-restaurant/2.jpg',
      '/projects/lake-geneva-restaurant/3.jpg',
    ],
  },
  libertyville: {
    slug: 'libertyville-shade-system',
    hero: '/projects/libertyville-shade-system/hero.jpg',
    gallery: [
      '/projects/libertyville-shade-system/1.jpg',
      '/projects/libertyville-shade-system/2.jpg',
      '/projects/libertyville-shade-system/3.jpg',
    ],
  },
  wilmette: {
    slug: 'wilmette-country-club',
    hero: '/projects/wilmette-country-club/hero.jpg',
    gallery: [
      '/projects/wilmette-country-club/1.jpg',
      '/projects/wilmette-country-club/2.jpg',
      '/projects/wilmette-country-club/3.jpg',
    ],
  },
} as const;

// Helper to get all project slugs
export const projectSlugs = Object.values(projects).map(p => p.slug);

// Helper to get images by slug (for dynamic routes)
export function getProjectImages(slug: string) {
  const project = Object.values(projects).find(p => p.slug === slug);
  if (!project) return null;
  return {
    hero: project.hero,
    gallery: project.gallery,
    all: [project.hero, ...project.gallery],
  };
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
    brand.detail.screen,
    brand.context.lake,
    brand.hero.lifestyle,
    brand.detail.led,
  ],

  /** Enclosures system page gallery */
  enclosures: [
    brand.detail.glass,
    brand.hero.lifestyle,
    brand.context.pool,
    brand.detail.led,
  ],

  /** Appliances system page gallery */
  appliances: [
    brand.hero.lifestyle,
    brand.context.commercial,
    brand.detail.led,
  ],

  /** Heating system page gallery */
  heating: [
    brand.hero.lifestyle,
    brand.detail.heater,
    brand.context.snow,
  ],

  /** Furniture system page gallery */
  furniture: [
    brand.hero.lifestyle,
    brand.context.pool,
  ],

  /** Umbrellas system page gallery */
  umbrellas: [
    brand.context.pool,
    brand.hero.pergola,
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

  // Project images
  ...Object.values(projects).flatMap(p => [p.hero, ...p.gallery]),

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
