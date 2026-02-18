/**
 * 24 Projects Data for Placeholder Image System
 * 
 * This file defines all 24 projects with their metadata.
 * Used by the generation script to create appropriate placeholders.
 */

export interface ProjectDefinition {
  slug: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Builder Project';
  systems: string[];
  description: string;
  imageCount: number; // 3-5 images per project
}

export const projectDefinitions: ProjectDefinition[] = [
  // Residential Projects (14)
  {
    slug: 'lake-forest-pergola',
    title: 'Lakefront Pergola & Shades',
    location: 'Lake Forest, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Shades'],
    description: 'A comprehensive outdoor living solution for a family seeking year-round usability on their Lake Michigan property.',
    imageCount: 4,
  },
  {
    slug: 'barrington-outdoor-room',
    title: 'Complete Outdoor Room',
    location: 'Barrington, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'An underutilized concrete patio transformed into a true four-season room with full weather protection.',
    imageCount: 4,
  },
  {
    slug: 'libertyville-shade-system',
    title: 'Whole-Home Shade System',
    location: 'Libertyville, IL',
    type: 'Residential',
    systems: ['Motorized Shades'],
    description: 'Six motorized exterior shades protecting a south-facing home from summer heat while preserving backyard views.',
    imageCount: 4,
  },
  {
    slug: 'barrington-hills-estate',
    title: 'Barrington Hills Estate',
    location: 'Barrington Hills, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Screens'],
    description: 'A 5-acre estate adds a snow-load engineered outdoor living room that respects the strict impermeable coverage limits.',
    imageCount: 4,
  },
  {
    slug: 'winnetka-lakeside-retreat',
    title: 'Winnetka Lakeside Retreat',
    location: 'Winnetka, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Shades', 'Integrated Heating'],
    description: 'A stunning lakeside property featuring a custom pergola with panoramic lake views and automated shade control.',
    imageCount: 5,
  },
  {
    slug: 'northbrook-family-entertaining',
    title: 'Northbrook Family Entertaining Space',
    location: 'Northbrook, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'Multi-generational family outdoor living space designed for year-round gatherings and celebrations.',
    imageCount: 4,
  },
  {
    slug: 'glencoe-modern-estate',
    title: 'Glencoe Modern Estate',
    location: 'Glencoe, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Shades'],
    description: 'Contemporary architectural design meets outdoor comfort with a sleek pergola system and smart home integration.',
    imageCount: 5,
  },
  {
    slug: 'kenilworth-heritage-home',
    title: 'Kenilworth Heritage Home',
    location: 'Kenilworth, IL',
    type: 'Residential',
    systems: ['Motorized Shades', 'Integrated Heating'],
    description: 'Thoughtful integration of modern shading technology with a historic home\'s traditional architecture.',
    imageCount: 4,
  },
  {
    slug: 'evanston-rooftop-terrace',
    title: 'Evanston Rooftop Terrace',
    location: 'Evanston, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'Urban rooftop transformed into a private oasis with panoramic city views and weather protection.',
    imageCount: 5,
  },
  {
    slug: 'deerfield-backyard-oasis',
    title: 'Deerfield Backyard Oasis',
    location: 'Deerfield, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Shades'],
    description: 'Suburban backyard redesigned for family fun with integrated outdoor kitchen and climate control.',
    imageCount: 4,
  },
  {
    slug: 'hinsdale-garden-room',
    title: 'Hinsdale Garden Room',
    location: 'Hinsdale, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Glass Enclosure', 'Motorized Shades'],
    description: 'Elegant garden-focused outdoor room that brings the landscape into the living space.',
    imageCount: 5,
  },
  {
    slug: 'naperville-pool-pavilion',
    title: 'Naperville Pool Pavilion',
    location: 'Naperville, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Motorized Shades'],
    description: 'Poolside pavilion designed for entertaining with adjustable shade and rain protection.',
    imageCount: 4,
  },
  {
    slug: 'wheaton-outdoor-dining',
    title: 'Wheaton Outdoor Dining Pavilion',
    location: 'Wheaton, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Integrated Heating'],
    description: 'Dedicated dining space for year-round alfresco meals with climate control and ambient lighting.',
    imageCount: 4,
  },
  {
    slug: 'elmhurst-entertainment-space',
    title: 'Elmhurst Entertainment Space',
    location: 'Elmhurst, IL',
    type: 'Residential',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'Multi-functional entertainment area featuring retractable glass walls for flexible use.',
    imageCount: 5,
  },

  // Commercial Projects (5)
  {
    slug: 'lake-geneva-restaurant',
    title: 'Restaurant Patio Expansion',
    location: 'Lake Geneva, WI',
    type: 'Commercial',
    systems: ['Louvered Pergola', 'Integrated Heating'],
    description: 'A lakeside fine dining restaurant eliminates weather cancellations and extends their patio season by 10 weeks.',
    imageCount: 4,
  },
  {
    slug: 'wilmette-country-club',
    title: 'Country Club Pool Deck',
    location: 'Wilmette, IL',
    type: 'Commercial',
    systems: ['Louvered Pergola'],
    description: 'Twin pergola structures providing all-weather coverage for the member pool deck at a private country club.',
    imageCount: 4,
  },
  {
    slug: 'st-charles-winery',
    title: 'St. Charles Winery Tasting Room',
    location: 'St. Charles, IL',
    type: 'Commercial',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'Elegant outdoor tasting room allowing year-round wine service with vineyard views.',
    imageCount: 5,
  },
  {
    slug: 'arlington-heights-hotel',
    title: 'Arlington Heights Hotel Patio',
    location: 'Arlington Heights, IL',
    type: 'Commercial',
    systems: ['Louvered Pergola', 'Motorized Shades', 'Integrated Heating'],
    description: 'Hotel guest patio featuring premium outdoor amenities for hospitality experience.',
    imageCount: 5,
  },
  {
    slug: 'buffalo-grove-brewery',
    title: 'Buffalo Grove Brewery Garden',
    location: 'Buffalo Grove, IL',
    type: 'Commercial',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'Craft brewery outdoor beer garden designed for year-round patron comfort.',
    imageCount: 5,
  },

  // Builder Projects (5)
  {
    slug: 'highland-park-builder',
    title: 'New Construction Integration',
    location: 'Highland Park, IL',
    type: 'Builder Project',
    systems: ['Louvered Pergola', 'Motorized Shades', 'Glass Enclosure'],
    description: 'A complete outdoor living package coordinated during new construction for seamless integration.',
    imageCount: 4,
  },
  {
    slug: 'lake-forest-estate-builder',
    title: 'Lake Forest Estate Builder Project',
    location: 'Lake Forest, IL',
    type: 'Builder Project',
    systems: ['Louvered Pergola', 'Motorized Shades', 'Glass Enclosure'],
    description: 'Custom home builder partnership integrating premium outdoor living from construction phase.',
    imageCount: 5,
  },
  {
    slug: 'winnetka-modern-builder',
    title: 'Winnetka Modern Builder Integration',
    location: 'Winnetka, IL',
    type: 'Builder Project',
    systems: ['Louvered Pergola', 'Glass Enclosure'],
    description: 'Contemporary new construction featuring seamless indoor-outdoor architectural design.',
    imageCount: 4,
  },
  {
    slug: 'glencoe-renovation-builder',
    title: 'Glencoe Major Renovation',
    location: 'Glencoe, IL',
    type: 'Builder Project',
    systems: ['Louvered Pergola', 'Motorized Shades', 'Integrated Heating'],
    description: 'Major home renovation adding 400 sq ft of climate-controlled outdoor living space.',
    imageCount: 5,
  },
  {
    slug: 'hinsdale-custom-builder',
    title: 'Hinsdale Custom Build',
    location: 'Hinsdale, IL',
    type: 'Builder Project',
    systems: ['Louvered Pergola', 'Glass Enclosure', 'Motorized Shades'],
    description: 'New luxury home construction with integrated outdoor living from the ground up.',
    imageCount: 4,
  },
];

// Total count validation
if (projectDefinitions.length !== 24) {
  console.warn(`Warning: Expected 24 projects, found ${projectDefinitions.length}`);
}

// Export slugs array for convenience
export const projectSlugs = projectDefinitions.map(p => p.slug);
