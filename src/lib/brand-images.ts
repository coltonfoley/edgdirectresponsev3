/**
 * Brand Image Registry - Simplified
 * 
 * 15 curated images used across all non-project pages.
 * Change one image here, update site-wide.
 */

export const brandImages = {
  hero: {
    pergola: '/images/brand/hero-pergola.jpg',
    screens: '/images/brand/hero-screens.jpg',
    glass: '/images/brand/hero-glass.jpg',
    lifestyle: '/images/brand/hero-lifestyle.jpg',
    showroom: '/images/brand/hero-showroom.jpg',
  },
  detail: {
    louver: '/images/brand/detail-louver.jpg',
    screen: '/images/brand/detail-screen.jpg',
    glass: '/images/brand/detail-glass.jpg',
    led: '/images/brand/detail-led.jpg',
    heater: '/images/brand/detail-heater.jpg',
    remote: '/images/brand/detail-remote.jpg',
  },
  context: {
    pool: '/images/brand/context-pool.jpg',
    lake: '/images/brand/context-lake.jpg',
    commercial: '/images/brand/context-commercial.jpg',
    snow: '/images/brand/context-snow.jpg',
  },
} as const;

/** Pre-configured galleries for standard pages */
export const pageGalleries = {
  pergolas: [
    brandImages.detail.louver,
    brandImages.context.pool,
    brandImages.detail.led,
    brandImages.detail.remote,
  ],
  shades: [
    brandImages.detail.screen,
    brandImages.context.lake,
    brandImages.hero.lifestyle,
    brandImages.detail.led,
  ],
  enclosures: [
    brandImages.detail.glass,
    brandImages.hero.lifestyle,
    brandImages.context.pool,
    brandImages.detail.led,
  ],
  appliances: [
    brandImages.hero.lifestyle,
    brandImages.context.commercial,
    brandImages.detail.led,
  ],
  heating: [
    brandImages.hero.lifestyle,
    brandImages.detail.heater,
    brandImages.context.snow,
  ],
  furniture: [
    brandImages.hero.lifestyle,
    brandImages.context.pool,
  ],
  umbrellas: [
    brandImages.context.pool,
    brandImages.hero.pergola,
  ],
  commercial: [
    brandImages.hero.lifestyle,
    brandImages.context.commercial,
    brandImages.hero.pergola,
  ],
  serviceAreas: [
    brandImages.hero.pergola,
    brandImages.hero.screens,
    brandImages.hero.glass,
    brandImages.detail.louver,
  ],
} as const;

/** Helper to get a brand image */
export function getBrandImage(
  category: keyof typeof brandImages,
  name: keyof (typeof brandImages)[typeof category]
): string {
  return brandImages[category][name as keyof (typeof brandImages)[typeof category]] as string;
}

/** Helper to get a page gallery */
export function getPageGallery(page: keyof typeof pageGalleries): string[] {
  const gallery = pageGalleries[page];
  return Array.isArray(gallery) ? gallery : [];
}
