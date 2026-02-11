/**
 * Centralized Image Registry
 * 
 * ALL image paths must be imported from this registry.
 * Do not hardcode image paths in components.
 * 
 * @example
 * import { images } from '@/lib/images';
 * 
 * // In component:
 * style={{ backgroundImage: `url(${images.brand.commercial.restaurant})` }}
 */

export const images = {
  /**
   * Brand/Context images for hero sections and backgrounds
   */
  brand: {
    /**
     * Commercial context images (restaurants, hospitality, etc.)
     */
    commercial: {
      /** Restaurant patio enclosure image */
      restaurant: '/images/commercial-restaurant-patio-enclosure.jpg',
      /** Luxury restaurant patio enclosure */
      luxury: '/images/luxury-restaurant-patio-enclosure.jpg',
    },
    /**
     * Residential context images
     */
    residential: {
      /** Default residential hero image */
      hero: '/images/hero/hero-main.jpg',
    },
    /**
     * Design/Project showcase images
     */
    design: {
      /** Frameless sliding glass walls */
      glassWalls: '/images/frameless-sliding-glass-walls.jpg',
      /** Motorized retractable screens */
      screens: '/images/motorized-retractable-screens-patio.jpg',
    },
  },

  /**
   * Product system images
   */
  systems: {
    /**
     * Pergola system images
     */
    pergolas: {
      /** Main pergola hero */
      hero: '/images/pergolas/pergola-hero.jpg',
      /** Detail/lifestyle shots */
      detail: '/images/pergolas/pergola-detail.jpg',
      lifestyle: '/images/pergolas/pergola-lifestyle.jpg',
      poolSpa: '/images/pergolas/pergola-pool-spa.jpg',
      closedLouvers: '/images/pergolas/pergola-closed-louvers.jpg',
      /** Residential black R-blade series */
      blackRBlade01: '/images/pergolas/residential-black-r-blade-01.jpg',
      blackRBlade02: '/images/pergolas/residential-black-r-blade-02.jpg',
      blackRBlade03: '/images/pergolas/residential-black-r-blade-03.jpg',
      blackRBlade04: '/images/pergolas/residential-black-r-blade-04.jpg',
      blackRBladePool: '/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png',
      blackRBladePrivacy: '/images/pergolas/residential-black-r-blade-privacy-walls-pool.jpg',
      /** Bronze/white series */
      bronzeWhite01: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-01.jpg',
      bronzeWhite02: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-02.jpg',
      bronzeWhite03: '/images/pergolas/residential-gray-bronze-r-blade-white-louvers-03.jpg',
      bronzePool: '/images/pergolas/residential-gray-bronze-r-blade-pool-chairs.jpg',
      /** LED/lighting */
      ledStrip: '/images/pergolas/residential-white-r-blade-led-strip.jpg',
      ledLights: '/images/pergolas/residential-dark-gray-r-blade-led-lights.jpg',
      /** Outdoor kitchen */
      outdoorKitchen: '/images/pergolas/residential-gray-white-r-shade-outdoor-kitchen.jpg',
      /** White series */
      whiteGlassDoors01: '/images/pergolas/residential-white-pergola-pool-glass-doors-01.jpg',
      whiteGlassDoors02: '/images/pergolas/residential-white-pergola-pool-glass-doors-02.jpg',
      whiteGlassDoors03: '/images/pergolas/residential-white-pergola-pool-glass-doors-03.jpg',
      whiteScreen: '/images/pergolas/residential-white-gray-bronze-r-blade-screen.jpg',
      /** Before/after */
      beforeInstall: '/images/pergolas/before-pergola-install.jpg',
      afterInstall: '/images/pergolas/after-pergola-install.jpg',
    },
    /**
     * Shade/screen system images
     */
    shades: {
      /** Main shade hero */
      hero: '/images/shades/shades-hero.jpg',
      /** Deployed screens */
      deployed: '/images/shades/shade-deployed-screens-01.jpg',
      patioClose: '/images/shades/shade-patio-close-01.jpg',
      homeExterior: '/images/shades/shade-home-exterior-screens.jpg',
      /** Before/after */
      before: '/images/shades/shade-before-no-screens.jpg',
      after: '/images/shades/shade-after-screens-deployed.jpg',
      /** Details */
      detail: '/images/shades/shades-detail.jpg',
      retracted: '/images/shades/shades-retracted.jpg',
      /** Commercial */
      commercialLake: '/images/shades/commercial-white-r-blade-screens-lake.jpg',
    },
    /**
     * Glass enclosure system images
     */
    enclosures: {
      /** Main glass enclosure images */
      hero: '/images/enclosures/glass-hero.jpg',
      closed: '/images/enclosures/glass-closed.jpg',
      detail: '/images/enclosures/glass-detail.jpg',
      partialOpen: '/images/enclosures/glass-enclosure-partial-open.jpg',
      closedExterior: '/images/enclosures/glass-enclosure-closed-exterior.jpg',
      lifestyle: '/images/enclosures/residential-glass-enclosure-lifestyle.jpg',
      /** System shots */
      system01: '/images/enclosures/glass-system-01.jpg',
      system02: '/images/enclosures/glass-system-02.jpg',
      system03: '/images/enclosures/glass-system-03.jpg',
      system04: '/images/enclosures/glass-system-04.jpg',
      system05: '/images/enclosures/glass-system-05.jpg',
      system06: '/images/enclosures/glass-system-06.jpg',
      system07: '/images/enclosures/glass-system-07.jpg',
      system08: '/images/enclosures/glass-system-08.jpg',
      system09: '/images/enclosures/glass-system-09.jpg',
      /** Commercial enclosures */
      commercialDayExterior: '/images/enclosures/commercial-glass-enclosure-day-exterior-01.jpg',
      commercialDayInterior: '/images/enclosures/commercial-glass-enclosure-day-interior-01.jpg',
      commercialNightDining: '/images/enclosures/commercial-glass-enclosure-night-dining-01.jpg',
      commercialNightExterior: '/images/enclosures/commercial-glass-enclosure-night-exterior-01.jpg',
      commercialNightInterior01: '/images/enclosures/commercial-glass-enclosure-night-interior-01.jpg',
      commercialNightInterior02: '/images/enclosures/commercial-glass-enclosure-night-interior-02.jpg',
      commercialInteriorWood: '/images/enclosures/commercial-glass-enclosure-interior-wood-deck-01.jpg',
      commercialPergolaDay: '/images/enclosures/commercial-pergola-glass-enclosure-day-dining-01.jpg',
      commercialPergolaLights: '/images/enclosures/commercial-pergola-glass-enclosure-hanging-lights-01.jpg',
      /** Residential with heaters */
      residentialHeaters: '/images/enclosures/residential-pergola-heaters-interior.jpg',
    },
    /**
     * Outdoor appliances
     */
    appliances: {
      kitchen: '/images/appliances/outdoor-kitchen-hero.png',
      heater: '/images/appliances/patio-heater.png',
    },
  },

  /**
   * Project portfolio images
   */
  projects: {
    project01: '/images/projects/project-01.jpg',
    project02: '/images/projects/project-02.jpg',
    project03: '/images/projects/project-03.jpg',
    project04: '/images/projects/project-04.jpg',
    project05: '/images/projects/project-05.jpg',
  },

  /**
   * UI/UX images
   */
  ui: {
    /** Guide cover image */
    guideCover: '/images/guide-cover.png',
    /** Video posters */
    videoPoster: '/images/pergolas/pergola-hero.jpg',
    commercialVideoPoster: '/images/enclosures/commercial-pergola-video-clip-01.mp4',
  },

  /**
   * Optimized/legacy images
   */
  optimized: {
    coverBg: '/images/optimized/cover-bg.jpg',
    maintenanceFooter: '/images/optimized/maintenance-footer.jpg',
    page2Problem: '/images/optimized/page-2-problem.jpg',
    page3Solution: '/images/optimized/page-3-solution.jpg',
    page5Proof: '/images/optimized/page-5-proof.jpg',
    systemGlass: '/images/optimized/system-glass.jpg',
    systemLouver: '/images/optimized/system-louver.jpg',
    systemScreens: '/images/optimized/system-screens.jpg',
  },

  /**
   * Testimonial images
   */
  testimonials: {
    testimonial01: '/images/testimonials/testimonial-01.jpg',
    testimonial02: '/images/testimonials/testimonial-02.jpg',
  },

  /**
   * Gallery images (from gallery-images.json)
   * These are maintained in src/data/gallery-images.json
   */
  gallery: '/data/gallery-images.json',

  /**
   * Staging/Temporary images
   * @deprecated These should be moved to permanent locations
   */
  staging: {
    whiteGlassDoors01: '/images/staging/residential-white-pergola-pool-glass-doors-01.jpg',
    whiteGlassDoors03: '/images/staging/residential-white-pergola-pool-glass-doors-03.jpg',
    photoB250: '/images/staging/Photo B250XL Brustor - REF_2022NL04 (5).jpg',
    commercialNightExterior: '/images/staging/commercial-glass-enclosure-night-exterior-01.jpg',
    commercialNightDining: '/images/staging/commercial-glass-enclosure-night-dining-01.jpg',
  },
} as const;

/** Type for the images registry */
export type ImageRegistry = typeof images;

/**
 * Helper function to get image URL with type safety
 * @param path - Dot-notation path to image (e.g., 'brand.commercial.restaurant')
 * @returns The image URL
 */
export function getImage(path: string): string {
  const parts = path.split('.');
  let current: unknown = images;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      throw new Error(`Image path not found: ${path}`);
    }
  }
  
  if (typeof current !== 'string') {
    throw new Error(`Image path does not resolve to a string: ${path}`);
  }
  
  return current;
}
