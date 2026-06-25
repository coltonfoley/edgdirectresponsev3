/**
 * Project Data System Utilities
 * 
 * Implementation of helper functions for the project data system:
 * - System detection from text
 * - Slug generation
 * - City/State extraction
 * - Data validation and transformation
 */

import {
  Project,
  SYSTEM_DETECTION_KEYWORDS,
} from '../types/project';

// ============================================================================
// SYSTEM DETECTION
// ============================================================================

/**
 * Detects system names from project description text
 * 
 * Analyzes text content and matches against known system keywords
 * to automatically identify which EDG systems were used.
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
export function detectSystems(description: string): string[] {
  if (!description || typeof description !== 'string') {
    return [];
  }

  const normalizedText = description.toLowerCase();
  const detectedSystems: string[] = [];

  // Check each system's keywords against the text
  for (const [systemName, keywords] of Object.entries(SYSTEM_DETECTION_KEYWORDS)) {
    const isMatch = (keywords as string[]).some((keyword: string) => 
      normalizedText.includes(keyword.toLowerCase())
    );
    
    if (isMatch && !detectedSystems.includes(systemName)) {
      detectedSystems.push(systemName);
    }
  }

  // Additional heuristics for specific patterns
  
  // Detect "multi-bay" systems (indicates multiple pergola units)
  if (/\bmulti[-\s]?bay\b/i.test(normalizedText) && !detectedSystems.includes('Louvered Pergola')) {
    detectedSystems.push('Louvered Pergola');
  }

  // Detect "motorized" as general category
  if (/\bmotorized\b/i.test(normalizedText) && detectedSystems.length === 0) {
    detectedSystems.push('Motorized Pergola');
  }

  // Detect "outdoor room" (typically indicates comprehensive system)
  if (/\boutdoor room\b/i.test(normalizedText) && !detectedSystems.includes('Glass Enclosure')) {
    // Outdoor rooms often include glass enclosures, but we'll just flag pergola
    if (!detectedSystems.includes('Louvered Pergola')) {
      detectedSystems.push('Louvered Pergola');
    }
  }

  // Sort by priority: specific systems first
  const priorityOrder = [
    'Glass Enclosure',
    'Motorized Screens',
    'Motorized Shades',
    'Louvered Pergola',
    'Motorized Pergola',
  ];

  return detectedSystems.sort((a, b) => {
    const aIndex = priorityOrder.indexOf(a);
    const bIndex = priorityOrder.indexOf(b);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.localeCompare(b);
  });
}

// ============================================================================
// SLUG GENERATION
// ============================================================================

/**
 * Creates a URL-friendly slug from a project name
 * 
 * Converts text to lowercase, removes special characters,
 * replaces spaces with hyphens, and handles edge cases.
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
export function slugify(name: string): string {
  if (!name || typeof name !== 'string') {
    return '';
  }

  return name
    .toLowerCase()
    // Remove apostrophes
    .replace(/['']/g, '')
    // Replace ampersand with 'and'
    .replace(/&/g, 'and')
    // Replace @ with 'at'
    .replace(/@/g, 'at')
    // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/[^a-z0-9\s-]/g, '')
    // Replace multiple spaces/hyphens with single hyphen
    .replace(/[\s-]+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Creates a unique slug from a project name, ensuring it doesn't conflict
 * with existing slugs by appending a number if necessary.
 * 
 * @param name - The project name
 * @param existingSlugs - Array of existing slugs to check against
 * @returns Unique slug string
 */
export function slugifyUnique(name: string, existingSlugs: string[] = []): string {
  const baseSlug = slugify(name);
  
  if (!baseSlug) {
    return `project-${Date.now()}`;
  }

  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }

  // Find a unique suffix
  let counter = 2;
  let newSlug = `${baseSlug}-${counter}`;
  
  while (existingSlugs.includes(newSlug)) {
    counter++;
    newSlug = `${baseSlug}-${counter}`;
  }

  return newSlug;
}

// ============================================================================
// ADDRESS PARSING
// ============================================================================

/**
 * Extracts city and state from a full address string
 * 
 * Handles various address formats commonly found in US addresses:
 * - "Street, City, ST ZIP" (most common)
 * - "Street, City, State ZIP"
 * - "City, ST" (minimal)
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
export function extractCityState(address: string): { city: string; state: string } {
  if (!address || typeof address !== 'string') {
    return { city: '', state: '' };
  }

  // Normalize the address
  const normalized = address.trim();

  // Pattern: Street, City, ST ZIP (most common format)
  // Example: "1516 Grant Rd, Northbrook, IL 60062"
  const standardPattern = /,\s*([^,]+?),\s*([A-Z]{2})\s*(?:\d{5}(?:-\d{4})?)?$/i;
  const standardMatch = normalized.match(standardPattern);
  
  if (standardMatch) {
    return {
      city: standardMatch[1].trim(),
      state: standardMatch[2].toUpperCase(),
    };
  }

  // Pattern: City, ST (minimal format, no street)
  // Example: "Chicago, IL"
  const minimalPattern = /^([^,]+),\s*([A-Z]{2})$/i;
  const minimalMatch = normalized.match(minimalPattern);
  
  if (minimalMatch) {
    return {
      city: minimalMatch[1].trim(),
      state: minimalMatch[2].toUpperCase(),
    };
  }

  // Pattern: Try to find state abbreviation anywhere in string
  // This is a fallback for malformed addresses
  const statePattern = /\b([A-Z]{2})\b/g;
  const stateMatches = Array.from(normalized.matchAll(statePattern));
  
  for (const match of stateMatches) {
    const potentialState = match[1].toUpperCase();
    // Check if it looks like a valid state (basic check)
    if (potentialState.length === 2 && /^[A-Z]{2}$/.test(potentialState)) {
      // Try to extract city as text before the state
      const beforeState = normalized.substring(0, match.index).trim();
      // Remove trailing comma if present
      const city = beforeState.replace(/,\s*$/, '').split(',').pop()?.trim() || '';
      
      return { city, state: potentialState };
    }
  }

  // Last resort: return empty but don't fail
  return { city: '', state: '' };
}

/**
 * Parses a full address into components
 * 
 * @param address - The full address string
 * @returns Parsed address components
 */
export function parseFullAddress(address: string): {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
} {
  if (!address || typeof address !== 'string') {
    return { streetAddress: '', city: '', state: '', zipCode: '' };
  }

  const normalized = address.trim();

  // Pattern: Street, City, ST ZIP
  const pattern = /^([^,]+),\s*([^,]+),\s*([A-Z]{2})\s*(\d{5}(?:-\d{4})?)$/i;
  const match = normalized.match(pattern);

  if (match) {
    return {
      streetAddress: match[1].trim(),
      city: match[2].trim(),
      state: match[3].toUpperCase(),
      zipCode: match[4],
    };
  }

  // Fallback: just extract city/state
  const { city, state } = extractCityState(address);
  return {
    streetAddress: '',
    city,
    state,
    zipCode: '',
  };
}

// ============================================================================
// PROJECT TYPE DETECTION
// ============================================================================

/**
 * Automatically detects project type from description/title
 * 
 * @param text - Description or title text
 * @returns Detected project type
 */
export function detectProjectType(text: string): string {
  if (!text) return 'Residential';

  const normalized = text.toLowerCase();

  // Commercial keywords
  if (/\b(restaurant|commercial|business|office|retail|hotel|venue|airport|country club)\b/.test(normalized)) {
    if (normalized.includes('restaurant')) return 'Restaurant';
    if (normalized.includes('hotel') || normalized.includes('venue')) return 'Hospitality';
    return 'Commercial';
  }

  // Builder keywords
  if (/\b(builder|new construction|developer|general contractor)\b/.test(normalized)) {
    return 'Builder Project';
  }

  // Default to Residential
  return 'Residential';
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validates a project object for required fields
 * 
 * @param project - The project to validate
 * @returns Validation result with errors if invalid
 */
export function validateProject(project: unknown): {
  isValid: boolean;
  errors: string[];
  missingFields: string[];
} {
  const errors: string[] = [];
  const missingFields: string[] = [];

  if (!project || typeof project !== 'object') {
    return {
      isValid: false,
      errors: ['Project must be an object'],
      missingFields: ['id', 'title', 'location', 'type', 'images'],
    };
  }

  const p = project as Partial<Project>;

  // Check required fields
  if (!p.id || typeof p.id !== 'string') {
    missingFields.push('id');
    errors.push('id is required and must be a string');
  }

  if (!p.title || typeof p.title !== 'string') {
    missingFields.push('title');
    errors.push('title is required and must be a string');
  }

  if (!p.location || typeof p.location !== 'object') {
    missingFields.push('location');
    errors.push('location is required and must be an object');
  } else {
    if (!p.location.city) missingFields.push('location.city');
    if (!p.location.state) missingFields.push('location.state');
  }

  if (!p.type || typeof p.type !== 'string') {
    missingFields.push('type');
    errors.push('type is required and must be a string');
  }

  if (!p.images || typeof p.images !== 'object') {
    missingFields.push('images');
    errors.push('images is required and must be an object');
  } else {
    if (!p.images.hero) missingFields.push('images.hero');
    if (!p.images.card) missingFields.push('images.card');
    if (!Array.isArray(p.images.gallery)) missingFields.push('images.gallery');
  }

  return {
    isValid: errors.length === 0,
    errors,
    missingFields,
  };
}

// ============================================================================
// DATA COMPLETENESS
// ============================================================================

/**
 * Calculates data completeness score for a project
 * Returns a score between 0 and 1 based on populated fields
 * 
 * @param project - The project to analyze
 * @returns Score between 0 and 1
 */
export function calculateDataCompleteness(project: Project): number {
  const fields = [
    // Required fields (heavy weight)
    { key: 'id', weight: 0.1 },
    { key: 'title', weight: 0.1 },
    { key: 'type', weight: 0.1 },
    { key: 'images', weight: 0.1 },
    
    // Location fields
    { key: 'location.city', weight: 0.05 },
    { key: 'location.state', weight: 0.05 },
    
    // Content fields (medium weight)
    { key: 'description', weight: 0.08 },
    { key: 'challenge', weight: 0.07 },
    { key: 'solution', weight: 0.07 },
    { key: 'results', weight: 0.06 },
    
    // Additional fields (light weight)
    { key: 'systems', weight: 0.05 },
    { key: 'specs', weight: 0.03 },
    { key: 'testimonial', weight: 0.02 },
    { key: 'serviceAreaSlug', weight: 0.02 },
  ];

  let score = 0;

  for (const field of fields) {
    const value = getNestedValue(project, field.key);
    if (hasValue(value)) {
      score += field.weight;
    }
  }

  return Math.min(Math.round(score * 100) / 100, 1);
}

/**
 * Helper to get nested object values
 */
function getNestedValue(obj: Project, path: string): unknown {
  return path.split('.').reduce((current: unknown, key: string) => {
    return current && typeof current === 'object' ? (current as Record<string, unknown>)[key] : undefined;
  }, obj as unknown);
}

/**
 * Helper to check if a value is meaningfully populated
 */
function hasValue(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
}

