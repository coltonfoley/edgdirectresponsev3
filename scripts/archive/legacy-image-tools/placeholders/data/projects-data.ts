/**
 * 24 Projects Data for Placeholder Image System
 * 
 * This file defines all 24 projects with their metadata.
 * Used by the generation script to create appropriate placeholders.
 * 
 * SOURCE OF TRUTH: Maps to src/lib/projects-data.ts CSV data
 */

export interface ProjectDefinition {
  slug: string;           // Folder name in public/projects/
  csvId: string;          // ID from projects-data.ts
  title: string;          // Display name (from CSV name field)
  location: string;       // "City, State"
  type: 'Residential' | 'Commercial';
  description: string;    // Short description for hero subtitle
  imageCount: number;     // 3-4 gallery images per project
}

export const projectDefinitions: ProjectDefinition[] = [
  // === RESIDENTIAL PROJECTS (12) ===
  {
    slug: 'northbrook-family-entertaining',
    csvId: 'karp',
    title: 'Karp',
    location: 'Northbrook, IL',
    type: 'Residential',
    description: 'Multi-Bay System with Wood Grain Panels and Privacy Wall',
    imageCount: 4,
  },
  {
    slug: 'barrington-outdoor-room',
    csvId: 'wade',
    title: 'Wade',
    location: 'Barrington, IL',
    type: 'Residential',
    description: 'Outdoor Room with Fully Retractable Louvers and Motorized Glass',
    imageCount: 4,
  },
  {
    slug: 'libertyville-shade-system',
    csvId: 'jake-everly-residence',
    title: 'Jake',
    location: 'Crystal Lake, IL',
    type: 'Residential',
    description: 'Multi-Bay Residential System Designed for Entertaining',
    imageCount: 4,
  },
  {
    slug: 'barrington-hills-estate',
    csvId: 'tony-koch',
    title: 'Tony',
    location: 'Glenview, IL',
    type: 'Residential',
    description: '4-Bay System with Heaters for Expansive Entertaining Space',
    imageCount: 4,
  },
  {
    slug: 'deerfield-backyard-oasis',
    csvId: 'greco',
    title: 'Greco',
    location: 'St. Charles, IL',
    type: 'Residential',
    description: 'Multi-Bay System Over Sunken Outdoor Seating Area with Waterfall',
    imageCount: 4,
  },
  {
    slug: 'hinsdale-custom-builder',
    csvId: 'reddy',
    title: 'Reddy',
    location: 'Burr Ridge, IL',
    type: 'Residential',
    description: 'Multi-Bay System with Screens, Heaters, and Integrated Features',
    imageCount: 4,
  },
  {
    slug: 'hinsdale-garden-room',
    csvId: 'arora',
    title: 'Arora',
    location: 'Burr Ridge, IL',
    type: 'Residential',
    description: 'Motorized Shade Covering for Sport Court Protection',
    imageCount: 4,
  },
  {
    slug: 'naperville-pool-pavilion',
    csvId: 'lou-malnati-naperville',
    title: 'Lou Malnati Naperville',
    location: 'Naperville, IL',
    type: 'Residential',
    description: 'Multi-Bay System with Motorized Screens for Year-Round Use',
    imageCount: 4,
  },
  {
    slug: 'winnetka-lakeside-retreat',
    csvId: 'boden-residence',
    title: 'Boden',
    location: 'Winnetka, IL',
    type: 'Residential',
    description: 'Multi-Bay System Creating Outdoor Kitchen and Entertaining Area',
    imageCount: 4,
  },
  {
    slug: 'kenilworth-heritage-home',
    csvId: 'dicks-roofing-troha',
    title: 'Dicks Roofing (Troha)',
    location: 'Pleasant Prairie, WI',
    type: 'Residential',
    description: 'Pavilion with Dual Motorized Screens for Weather Protection',
    imageCount: 4,
  },
  {
    slug: 'glencoe-renovation-builder',
    csvId: 'dicks-roofing-project-2',
    title: 'Dicks Roofing Project 2',
    location: 'Kenosha, WI',
    type: 'Residential',
    description: 'Pavilion with Dual Screens for Cigar Smoking and Entertaining',
    imageCount: 4,
  },
  {
    slug: 'highland-park-builder',
    csvId: 'dalesandro',
    title: 'Dalesandro',
    location: 'Chicago, IL',
    type: 'Residential',
    description: 'Pergola with Custom Privacy Wall on Chicago Riverwalk',
    imageCount: 4,
  },
  {
    slug: 'winnetka-modern-builder',
    csvId: 'moody',
    title: 'Moody',
    location: 'Hinsdale, IL',
    type: 'Residential',
    description: 'Two-Bay Residential System with Integrated Electrical and Drainage',
    imageCount: 4,
  },
  {
    slug: 'avaella',
    csvId: 'avaella',
    title: 'Avaella',
    location: 'Downers Grove, IL',
    type: 'Residential',
    description: 'Double Bay Systems on Multiple Condo Units with Heaters and Screens',
    imageCount: 4,
  },

  // === COMMERCIAL PROJECTS (10) ===
  {
    slug: 'arlington-heights-hotel',
    csvId: 'carmines',
    title: "Carmine's",
    location: 'Chicago, IL',
    type: 'Commercial',
    description: 'Multi-Bay Commercial Restaurant System with Steel Reinforcement',
    imageCount: 4,
  },
  {
    slug: 'lake-forest-estate-builder',
    csvId: 'rosebud',
    title: 'Rosebud',
    location: 'Chicago, IL',
    type: 'Commercial',
    description: 'Rooftop Restaurant Overlooking Millennium Park',
    imageCount: 4,
  },
  {
    slug: 'elmhurst-entertainment-space',
    csvId: 'the-elm',
    title: 'The Elm',
    location: 'La Grange, IL',
    type: 'Commercial',
    description: 'Rooftop Commercial Dining in Populated Area',
    imageCount: 4,
  },
  {
    slug: 'wheaton-outdoor-dining',
    csvId: 'the-district',
    title: 'The District',
    location: 'Richmond, IL',
    type: 'Commercial',
    description: 'Tall Column Commercial System with Snow Load Engineering',
    imageCount: 4,
  },
  {
    slug: 'st-charles-winery',
    csvId: 'chicago-winery',
    title: 'Chicago Winery',
    location: 'Chicago, IL',
    type: 'Commercial',
    description: 'Urban Venue with Motorized Screens for Weather Control',
    imageCount: 4,
  },
  {
    slug: 'buffalo-grove-brewery',
    csvId: 'ike-oak',
    title: 'Ike & Oak',
    location: 'Woodridge, IL',
    type: 'Commercial',
    description: 'Brewery Outdoor Seating Created During COVID',
    imageCount: 4,
  },
  {
    slug: 'evanston-rooftop-terrace',
    csvId: 'matchbox',
    title: 'Matchbox',
    location: 'Chicago, IL',
    type: 'Commercial',
    description: 'Rail Car Restaurant Connection with Covered Seating',
    imageCount: 4,
  },
  {
    slug: 'glencoe-modern-estate',
    csvId: '151-n-franklin',
    title: '151 N Franklin',
    location: 'Chicago, IL',
    type: 'Commercial',
    description: 'Rooftop Tenant Spaces on LEED Certified Smart Building',
    imageCount: 4,
  },
  {
    slug: 'lake-geneva-restaurant',
    csvId: 'palm-springs-airport',
    title: 'Palm Springs Airport',
    location: 'Palm Springs, CA',
    type: 'Commercial',
    description: 'Airport Restaurant Shade with Existing Structure Integration',
    imageCount: 4,
  },
  {
    slug: 'wilmette-country-club',
    csvId: 'hyatt-wicker-park',
    title: 'Hyatt Wicker Park',
    location: 'Chicago, IL',
    type: 'Commercial',
    description: 'Hotel Restaurant Built into Concrete Frame',
    imageCount: 4,
  },
  {
    slug: 'lake-forest-pergola',
    csvId: 'haiti',
    title: 'Haiti',
    location: 'Haiti',
    type: 'Commercial',
    description: 'Commercial Showroom with Motorized Louver Window Shutters',
    imageCount: 4,
  },
];

// Total count validation
if (projectDefinitions.length !== 24) {
  console.warn(`Warning: Expected 24 projects, found ${projectDefinitions.length}`);
}

// Export slugs array for convenience
export const projectSlugs = projectDefinitions.map(p => p.slug);

// Export mapping for reference
export const csvToSlugMapping: Record<string, string> = Object.fromEntries(
  projectDefinitions.map(p => [p.csvId, p.slug])
);

export const slugToCsvMapping: Record<string, string> = Object.fromEntries(
  projectDefinitions.map(p => [p.slug, p.csvId])
);
