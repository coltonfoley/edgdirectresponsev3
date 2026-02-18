/**
 * Project Image Path Helpers
 * 
 * This module provides helper functions for generating project image paths.
 * Supports both legacy and new project structures.
 * 
 * Legacy pattern: /images/projects/{slug}/{card|hero|gallery-01}.jpg
 * New pattern:    /projects/{slug}/{hero|1|2|3|4|5}.jpg
 */

export interface ProjectImageSet {
  hero: string;
  gallery: string[];
  // Optional card image (for project listings)
  card?: string;
}

/**
 * Generate image paths for legacy projects (7 existing projects)
 * Pattern: /images/projects/{slug}/
 */
export function legacyProjectImages(slug: string): ProjectImageSet {
  const base = `/images/projects/${slug}`;
  return {
    hero: `${base}/hero.jpg`,
    card: `${base}/card.jpg`,
    gallery: [`${base}/gallery-01.jpg`, `${base}/gallery-02.jpg`, `${base}/gallery-03.jpg`],
  };
}

/**
 * Generate image paths for new projects (17+ new projects)
 * Pattern: /projects/{slug}/
 */
export function newProjectImages(slug: string, imageCount: number = 4): ProjectImageSet {
  const base = `/projects/${slug}`;
  return {
    hero: `${base}/hero.jpg`,
    gallery: Array.from({ length: imageCount }, (_, i) => `${base}/${i + 1}.jpg`),
  };
}

/**
 * Unified project image helper
 * Automatically detects if project is legacy or new based on slug
 */
const LEGACY_SLUGS = [
  'lake-forest-pergola',
  'barrington-outdoor-room',
  'lake-geneva-restaurant',
  'libertyville-shade-system',
  'highland-park-builder',
  'wilmette-country-club',
  'barrington-hills-estate',
];

export function projectImages(slug: string, imageCount?: number): ProjectImageSet {
  if (LEGACY_SLUGS.includes(slug)) {
    return legacyProjectImages(slug);
  }
  return newProjectImages(slug, imageCount);
}

/**
 * Check if a project uses the legacy image path structure
 */
export function isLegacyProject(slug: string): boolean {
  return LEGACY_SLUGS.includes(slug);
}

/**
 * Get placeholder URL from external service (fallback)
 * Useful when local images are not available
 */
export function getExternalPlaceholder(
  width: number,
  height: number,
  options: {
    service?: 'picsum' | 'placeholder.com';
    seed?: string;
    text?: string;
  } = {}
): string {
  const { service = 'picsum', seed = 'edg', text = 'EDG' } = options;

  if (service === 'picsum') {
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
  }

  // placeholder.com style
  return `https://via.placeholder.com/${width}x${height}/1a2744/c9a961?text=${encodeURIComponent(text)}`;
}

/**
 * Generate a data URL for a simple SVG placeholder
 * Useful for SSR when images might not be available
 */
export function getSvgPlaceholder(
  width: number,
  height: number,
  text: string = 'EDG'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a2744"/>
      <text x="50%" y="50%" font-family="system-ui" font-size="24" fill="#c9a961" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Project slug to title mapping
 * Used for generating placeholder text
 */
export const PROJECT_TITLES: Record<string, string> = {
  'lake-forest-pergola': 'Lakefront Pergola & Shades',
  'barrington-outdoor-room': 'Complete Outdoor Room',
  'lake-geneva-restaurant': 'Restaurant Patio Expansion',
  'libertyville-shade-system': 'Whole-Home Shade System',
  'highland-park-builder': 'New Construction Integration',
  'wilmette-country-club': 'Country Club Pool Deck',
  'barrington-hills-estate': 'Barrington Hills Estate',
  'winnetka-lakeside-retreat': 'Winnetka Lakeside Retreat',
  'northbrook-family-entertaining': 'Northbrook Family Entertaining Space',
  'glencoe-modern-estate': 'Glencoe Modern Estate',
  'kenilworth-heritage-home': 'Kenilworth Heritage Home',
  'evanston-rooftop-terrace': 'Evanston Rooftop Terrace',
  'deerfield-backyard-oasis': 'Deerfield Backyard Oasis',
  'hinsdale-garden-room': 'Hinsdale Garden Room',
  'oak-park-historic-renovation': 'Oak Park Historic Renovation',
  'riverside-outdoor-kitchen': 'Riverside Outdoor Kitchen',
  'geneva-lake-house': 'Geneva Lake House',
  'naperville-pool-pavilion': 'Naperville Pool Pavilion',
  'wheaton-outdoor-dining': 'Wheaton Outdoor Dining Pavilion',
  'elmhurst-entertainment-space': 'Elmhurst Entertainment Space',
  'downers-grove-pergola': 'Downers Grove Pergola',
  'lombard-shade-solution': 'Lombard Complete Shade Solution',
  'st-charles-winery': 'St. Charles Winery Tasting Room',
  'schaumburg-office-complex': 'Schaumburg Office Complex',
  'arlington-heights-hotel': 'Arlington Heights Hotel Patio',
  'palatine-golf-club': 'Palatine Golf Club Terrace',
  'buffalo-grove-brewery': 'Buffalo Grove Brewery Garden',
  'highland-park-art-gallery': 'Highland Park Art Gallery',
  'lake-forest-estate-builder': 'Lake Forest Estate Builder Project',
  'winnetka-modern-builder': 'Winnetka Modern Builder Integration',
  'glencoe-renovation-builder': 'Glencoe Major Renovation',
};

/**
 * Get display title for a project slug
 */
export function getProjectTitle(slug: string): string {
  return PROJECT_TITLES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}
