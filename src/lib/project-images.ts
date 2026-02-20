/**
 * @deprecated This file is deprecated and will be removed in a future version.
 * All project image functionality has been consolidated into `images.ts`.
 * 
 * MIGRATION GUIDE:
 * - `projectImages(slug)` → `getProjectImageSet(slug)` from `@/lib/images`
 * - `newProjectImages(slug, count)` → `getProjectImageSet(slug, count)` from `@/lib/images`
 * - `legacyProjectImages(slug)` → `getProjectImageSet(slug)` from `@/lib/images`
 * - `getProjectTitle(slug)` → Use project data from `@/lib/projects`
 * - `isLegacyProject(slug)` → No longer needed (unified path structure)
 * - `PROJECT_TITLES` → Use project data from `@/lib/projects`
 * 
 * New unified path structure: /projects/{slug}/{hero|1|2|3}.jpg
 * All projects now use the same pattern - no more legacy vs new distinction.
 */

// Re-export everything from images.ts for backward compatibility
export {
  getProjectHero,
  getProjectGallery,
  getProjectImageSet,
  featuredProjects,
} from './images';

import { getProjectImageSet } from './images';
import type { ProjectImageSet } from './images';

/**
 * @deprecated Use `getProjectImageSet(slug, count)` from `@/lib/images` instead
 */
export function newProjectImages(slug: string, imageCount: number = 4): ProjectImageSet {
  return getProjectImageSet(slug, imageCount);
}

/**
 * @deprecated Use `getProjectImageSet(slug)` from `@/lib/images` instead
 * All projects now use the unified path structure
 */
export function legacyProjectImages(slug: string): ProjectImageSet {
  return getProjectImageSet(slug, 3);
}

/**
 * @deprecated Use `getProjectImageSet(slug)` from `@/lib/images` instead
 * All projects now use the unified path structure
 */
export function projectImages(slug: string, imageCount?: number): ProjectImageSet {
  return getProjectImageSet(slug, imageCount);
}

/**
 * @deprecated All projects now use the unified path structure
 */
export function isLegacyProject(_slug: string): boolean {
  return false;
}

/**
 * @deprecated Use project data from `@/lib/projects` instead
 * Kept for backward compatibility during migration
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
  'hinsdale-custom-builder': 'Hinsdale Custom Builder Project',
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
 * @deprecated Use project data from `@/lib/projects` instead
 */
export function getProjectTitle(slug: string): string {
  return PROJECT_TITLES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * @deprecated Use external placeholder services directly or brand images from `@/lib/images`
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

  return `https://via.placeholder.com/${width}x${height}/1a2744/c9a961?text=${encodeURIComponent(text)}`;
}

/**
 * @deprecated Use a CSS-based fallback or brand images from `@/lib/images`
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
