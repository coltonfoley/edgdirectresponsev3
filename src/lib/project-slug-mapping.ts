// Mapping between CSV project names and actual image directory names
export const projectSlugMapping: Record<string, string> = {
  'karp': 'northbrook-family-entertaining',
  // 'carmines' now uses its own folder 'carmines'
  'rosebud': 'lake-forest-estate-builder',
  'wade': 'barrington-outdoor-room',
  'the-elm': 'elmhurst-entertainment-space',
  'the-district': 'wheaton-outdoor-dining',
  'chicago-winery': 'st-charles-winery',
  'jake-everly-residence': 'libertyville-shade-system',
  'greco': 'deerfield-backyard-oasis',
  'reddy': 'hinsdale-custom-builder',
  'arora': 'hinsdale-garden-room',
  'ike-oak': 'buffalo-grove-brewery',
  'matchbox': 'evanston-rooftop-terrace',
  'lou-malnati-naperville': 'naperville-pool-pavilion',
  '151-n-franklin': 'glencoe-modern-estate',
  'palm-springs-airport': 'lake-geneva-restaurant',
  'hyatt-wicker-park': 'wilmette-country-club',
  'boden-residence': 'winnetka-lakeside-retreat',
  'dicks-roofing-troha': 'kenilworth-heritage-home',
  'dicks-roofing-project-2': 'glencoe-renovation-builder',
  'haiti': 'lake-forest-pergola', // reuse for Haiti
  'dalesandro': 'highland-park-builder',
  'moody': 'winnetka-modern-builder',
  'tony-koch': 'barrington-hills-estate',
  'avaella': 'avaella',
};

// Reverse mapping for lookups
export const slugToProjectId: Record<string, string> = Object.fromEntries(
  Object.entries(projectSlugMapping).map(([k, v]) => [v, k])
);

export function getProjectSlug(csvId: string): string {
  return projectSlugMapping[csvId] || csvId;
}

export function getProjectIdFromSlug(slug: string): string | undefined {
  return slugToProjectId[slug];
}
