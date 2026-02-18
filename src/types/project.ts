/**
 * Project Data System TypeScript Interfaces
 * 
 * Designed to handle 24+ projects from CSV import with flexible,
 * optional fields to accommodate varying data completeness.
 * 
 * Core Philosophy:
 * - Only required fields: id, title, location (city, state), type, images
 * - Everything else is optional to handle incomplete CSV data
 * - Support for local SEO with geo coordinates and service area slugs
 * - Automatic system detection from project descriptions
 */

// ============================================================================
// ENUMS & CONSTANTS
// ============================================================================

/**
 * Project types for categorization
 */
export type ProjectType = 
  | 'Residential' 
  | 'Commercial' 
  | 'Builder Project'
  | 'Hospitality'
  | 'Restaurant'
  | 'Government';

/**
 * Supported system types that can be detected from descriptions
 */
export const SUPPORTED_SYSTEMS = [
  'Louvered Pergola',
  'Motorized Pergola',
  'Motorized Shades',
  'Motorized Screens',
  'Glass Enclosure',
  'Privacy Wall',
  'Integrated Heating',
  'LED Lighting',
  'Weather Sensors',
  'Smart Home Integration',
  'Pavilion',
  'Pergola',
  'Retractable Roof',
] as const;

export type SupportedSystem = typeof SUPPORTED_SYSTEMS[number];

/**
 * US State abbreviations for validation
 */
export type USState = 
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA'
  | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD'
  | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ'
  | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC'
  | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY'
  | 'DC';

// ============================================================================
// LOCATION INTERFACES
// ============================================================================

/**
 * Geographic coordinates for mapping and local SEO
 */
export interface GeoCoordinates {
  /** Latitude coordinate */
  latitude: number;
  /** Longitude coordinate */
  longitude: number;
}

/**
 * Project location with full address breakdown
 * Supports both complete and partial address data
 */
export interface ProjectLocation {
  /** City name (required) */
  city: string;
  /** State abbreviation (required) */
  state: USState | string;
  /** Optional: Full street address */
  fullAddress?: string;
  /** Optional: Street address without city/state/zip */
  streetAddress?: string;
  /** Optional: ZIP code */
  zipCode?: string;
  /** Optional: Neighborhood or district name for local SEO */
  neighborhood?: string;
  /** Optional: County name */
  county?: string;
  /** Optional: Geographic coordinates */
  coordinates?: GeoCoordinates;
}

/**
 * Service area information for local SEO
 */
export interface ServiceAreaInfo {
  /** URL-friendly slug for the service area (e.g., 'barrington-il') */
  slug: string;
  /** Display name of the service area */
  name: string;
  /** Distance from primary service location in miles */
  distanceFromBase?: number;
  /** Whether this is a primary or secondary service area */
  priority: 'primary' | 'secondary' | 'tertiary';
}

// ============================================================================
// IMAGE INTERFACES
// ============================================================================

/**
 * Individual project image with metadata
 */
export interface ProjectImage {
  /** Image source path or URL */
  src: string;
  /** Alt text for accessibility and SEO */
  alt: string;
  /** Optional: Caption for display */
  caption?: string;
  /** Optional: Whether this is the hero/main image */
  isHero?: boolean;
  /** Optional: Whether this is the thumbnail/card image */
  isCard?: boolean;
  /** Optional: Image dimensions */
  dimensions?: {
    width: number;
    height: number;
  };
  /** Optional: Image type/category */
  category?: 'exterior' | 'interior' | 'detail' | 'before' | 'after' | 'aerial';
}

/**
 * All images associated with a project
 */
export interface ProjectImages {
  /** Hero/main image (required) */
  hero: ProjectImage;
  /** Card/thumbnail image (required) */
  card: ProjectImage;
  /** Gallery images array (required, can be empty) */
  gallery: ProjectImage[];
  /** Optional: Before images for transformation stories */
  before?: ProjectImage[];
  /** Optional: After images for transformation stories */
  after?: ProjectImage[];
  /** Optional: Detail/close-up shots */
  details?: ProjectImage[];
}

// ============================================================================
// CONTENT INTERFACES
// ============================================================================

/**
 * Client testimonial
 */
export interface ProjectTestimonial {
  /** Quote text */
  quote: string;
  /** Client name */
  name: string;
  /** Optional: Client title or role */
  title?: string;
  /** Optional: Client company or organization */
  company?: string;
  /** Optional: Whether to display the testimonial */
  isPublished?: boolean;
}

/**
 * Flexible specifications as key-value pairs
 * Allows any spec labels to accommodate different project types
 */
export interface ProjectSpecs {
  [key: string]: string;
}

/**
 * Project result/outcome
 */
export interface ProjectResult {
  /** Result description */
  text: string;
  /** Optional: Quantified metric */
  metric?: string;
  /** Optional: Result category */
  category?: 'financial' | 'comfort' | 'usability' | 'aesthetic' | 'other';
}

// ============================================================================
// MAIN PROJECT INTERFACE
// ============================================================================

/**
 * Main project interface - flexible schema for varying data completeness
 * 
 * Required fields: id, title, location (city, state), type, images
 * Everything else is optional to handle incomplete CSV imports
 */
export interface Project {
  // ==========================================================================
  // REQUIRED FIELDS
  // ==========================================================================
  
  /** Unique identifier (slug format recommended) */
  id: string;
  
  /** Project title/display name */
  title: string;
  
  /** Project location (city and state required) */
  location: ProjectLocation;
  
  /** Project type/category */
  type: ProjectType | string;
  
  /** All project images */
  images: ProjectImages;
  
  // ==========================================================================
  // OPTIONAL CONTENT FIELDS
  // ==========================================================================
  
  /** URL-friendly slug (auto-generated from title if not provided) */
  slug?: string;
  
  /** Short description for cards and previews */
  description?: string;
  
  /** Detailed project challenge/need */
  challenge?: string;
  
  /** Solution description */
  solution?: string;
  
  /** Results/outcomes - can be string array or structured objects */
  results?: string[] | ProjectResult[];
  
  /** Systems/products used (auto-detected or manually specified) */
  systems?: SupportedSystem[] | string[];
  
  /** Technical specifications - flexible key-value pairs */
  specs?: ProjectSpecs;
  
  /** Client testimonial */
  testimonial?: ProjectTestimonial;
  
  // ==========================================================================
  // OPTIONAL SEO & LOCAL FIELDS
  // ==========================================================================
  
  /** Service area slug for local SEO (e.g., 'barrington-il') */
  serviceAreaSlug?: string;
  
  /** Full service area information */
  serviceArea?: ServiceAreaInfo;
  
  /** SEO metadata */
  seo?: {
    /** Page title */
    title?: string;
    /** Meta description */
    description?: string;
    /** Keywords */
    keywords?: string[];
    /** Canonical URL */
    canonicalUrl?: string;
    /** Open Graph image */
    ogImage?: string;
  };
  
  // ==========================================================================
  // OPTIONAL RELATIONSHIP FIELDS
  // ==========================================================================
  
  /** IDs of related projects for cross-linking */
  relatedProjectIds?: string[];
  
  /** Related project objects (populated at runtime) */
  relatedProjects?: Project[];
  
  // ==========================================================================
  // OPTIONAL METADATA
  // ==========================================================================
  
  /** Project status */
  status?: 'draft' | 'published' | 'archived';
  
  /** Project completion date */
  completedDate?: string | Date;
  
  /** Project duration */
  duration?: {
    start?: string | Date;
    end?: string | Date;
    weeks?: number;
  };
  
  /** Project value/cost tier */
  valueTier?: 'budget' | 'standard' | 'premium' | 'luxury';
  
  /** Tags for filtering */
  tags?: string[];
  
  /** Data completeness score (0-1) for import quality tracking */
  dataCompleteness?: number;
  
  /** Source of the data (e.g., 'csv-import', 'manual-entry') */
  dataSource?: string;
  
  /** Import metadata */
  importMetadata?: {
    importedAt: string | Date;
    rowNumber?: number;
    rawData?: Record<string, unknown>;
    warnings?: string[];
  };
}

// ============================================================================
// UTILITY INTERFACES
// ============================================================================

/**
 * CSV row structure for raw import
 */
export interface ProjectCSVRow {
  'Project Name'?: string;
  'Address'?: string;
  'Description (1-2 sentence summary for the project card)'?: string;
  'Challenge (A paragraph describing the client\'s problem/need)'?: string;
  'Solution (A paragraph describing the work you did)'?: string;
  'Results (3-4 bullet points of specific outcome)'?: string;
  [key: string]: string | undefined;
}

/**
 * Import result tracking
 */
export interface ProjectImportResult {
  /** Successfully imported projects */
  success: Project[];
  /** Failed imports with error details */
  failed: {
    row: number;
    rawData: ProjectCSVRow;
    error: string;
  }[];
  /** Warnings for partial imports */
  warnings: {
    row: number;
    projectId: string;
    warning: string;
  }[];
  /** Summary statistics */
  stats: {
    total: number;
    success: number;
    failed: number;
    withWarnings: number;
  };
}

/**
 * Filter options for project queries
 */
export interface ProjectFilterOptions {
  /** Filter by project type */
  type?: ProjectType | string;
  /** Filter by state */
  state?: string;
  /** Filter by city */
  city?: string;
  /** Filter by service area slug */
  serviceAreaSlug?: string;
  /** Filter by systems used */
  systems?: string[];
  /** Search query for title/description */
  search?: string;
  /** Filter by status */
  status?: 'draft' | 'published' | 'archived';
  /** Only projects with testimonials */
  hasTestimonial?: boolean;
  /** Only projects with complete data */
  isComplete?: boolean;
}

/**
 * Sort options for project queries
 */
export type ProjectSortField = 
  | 'title' 
  | 'location' 
  | 'type' 
  | 'completedDate' 
  | 'dataCompleteness'
  | 'valueTier';

export interface ProjectSortOptions {
  field: ProjectSortField;
  direction: 'asc' | 'desc';
}

// ============================================================================
// FUNCTION SIGNATURES
// ============================================================================

/**
 * Detects system names from project description text
 * 
 * @param description - The project description text to analyze
 * @returns Array of detected system names
 * 
 * @example
 * ```typescript
 * detectSystems("Motorized pergola with privacy walls and LED lighting")
 * // Returns: ["Louvered Pergola", "Privacy Wall", "LED Lighting"]
 * ```
 */
export declare function detectSystems(description: string): string[];

/**
 * Creates a URL-friendly slug from a project name
 * 
 * @param name - The project name to slugify
 * @returns URL-friendly slug string
 * 
 * @example
 * ```typescript
 * slugify("Lake Forest Pergola & Shades")
 * // Returns: "lake-forest-pergola-shades"
 * 
 * slugify("Chicago Winery - Motorized Screens")
 * // Returns: "chicago-winery-motorized-screens"
 * ```
 */
export declare function slugify(name: string): string;

/**
 * Extracts city and state from a full address string
 * Handles various address formats and edge cases
 * 
 * @param address - The full address string
 * @returns Object with city and state
 * 
 * @example
 * ```typescript
 * extractCityState("1516 Grant Rd, Northbrook, IL 60062")
 * // Returns: { city: "Northbrook", state: "IL" }
 * 
 * extractCityState("3400 E Tahquitz Canyon Way, Palm Springs, CA 92262")
 * // Returns: { city: "Palm Springs", state: "CA" }
 * ```
 */
export declare function extractCityState(address: string): { 
  city: string; 
  state: string;
};

/**
 * Validates a project object for required fields
 * 
 * @param project - The project to validate
 * @returns Validation result with errors if invalid
 */
export declare function validateProject(project: unknown): {
  isValid: boolean;
  errors: string[];
  missingFields: string[];
};

/**
 * Transforms a raw CSV row into a Project object
 * 
 * @param row - The CSV row data
 * @param rowNumber - The row number for error tracking
 * @returns The transformed Project or null if invalid
 */
export declare function transformCSVRow(
  row: ProjectCSVRow, 
  rowNumber: number
): Project | null;

/**
 * Calculates data completeness score for a project
 * 
 * @param project - The project to analyze
 * @returns Score between 0 and 1
 */
export declare function calculateDataCompleteness(project: Project): number;

// ============================================================================
// TYPE GUARDS
// ============================================================================

/**
 * Type guard to check if a value is a valid Project
 */
export function isProject(value: unknown): value is Project {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  
  const p = value as Partial<Project>;
  
  return (
    typeof p.id === 'string' &&
    typeof p.title === 'string' &&
    typeof p.location === 'object' &&
    p.location !== null &&
    typeof p.location.city === 'string' &&
    typeof p.location.state === 'string' &&
    typeof p.type === 'string' &&
    typeof p.images === 'object' &&
    p.images !== null &&
    typeof p.images.hero === 'object' &&
    typeof p.images.card === 'object' &&
    Array.isArray(p.images.gallery)
  );
}

/**
 * Type guard to check if results are structured objects
 */
export function isStructuredResults(
  results: string[] | ProjectResult[] | undefined
): results is ProjectResult[] {
  if (!Array.isArray(results) || results.length === 0) {
    return false;
  }
  return typeof results[0] === 'object' && 'text' in results[0];
}

/**
 * Type guard to check if location has coordinates
 */
export function hasCoordinates(
  location: ProjectLocation
): location is ProjectLocation & { coordinates: GeoCoordinates } {
  return location.coordinates !== undefined;
}

// ============================================================================
// DEFAULT VALUES & CONSTANTS
// ============================================================================

/**
 * Default values for optional project fields
 */
export const PROJECT_DEFAULTS = {
  status: 'draft' as const,
  type: 'Residential' as const,
  images: {
    hero: {
      src: '/images/projects/placeholder-hero.jpg',
      alt: 'Project image',
    },
    card: {
      src: '/images/projects/placeholder-card.jpg',
      alt: 'Project thumbnail',
    },
    gallery: [],
  },
  systems: [],
  results: [],
  specs: {},
  tags: [],
} as const;

/**
 * Keywords for automatic system detection
 * Maps common terms to standardized system names
 */
export const SYSTEM_DETECTION_KEYWORDS: Record<string, string[]> = {
  'Louvered Pergola': ['louvered', 'louvers', 'rotating louvers', 'adjustable roof'],
  'Motorized Pergola': ['motorized pergola', 'automated pergola', 'motorized louvers'],
  'Motorized Shades': ['motorized shades', 'exterior shades', 'exterior screen', 'wind-rated'],
  'Motorized Screens': ['motorized screen', 'vinyl screen', 'insect screen', 'retractable screen'],
  'Glass Enclosure': ['glass enclosure', 'glass walls', 'frameless glass', 'stacking glass'],
  'Privacy Wall': ['privacy wall', 'privacy walls', 'privacy screen'],
  'Integrated Heating': ['heater', 'heaters', 'heating', 'bromic', 'infrared'],
  'LED Lighting': ['led', 'lighting', 'lights'],
  'Smart Home Integration': ['smart home', 'automation', 'automated', 'smart integration'],
  'Pavilion': ['pavilion', 'gazebo'],
  'Retractable Roof': ['retractable', 'fully retract', 'retractable louvers'],
};
