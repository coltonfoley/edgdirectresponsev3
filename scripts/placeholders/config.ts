/**
 * Placeholder Image System Configuration
 * 
 * Edit this file to customize placeholder generation behavior.
 */

export interface PlaceholderConfig {
  // Image quality settings
  quality: {
    hero: number;    // 0-100
    gallery: number; // 0-100
  };
  
  // Whether to add project info overlay on generated images
  showOverlays: boolean;
  
  // Brand colors (hex format)
  brand: {
    primary: string;
    secondary: string;
    accent: string;
  };
  
  // Dimensions
  dimensions: {
    hero: { width: number; height: number; };
    gallery: { width: number; height: number; };
    thumbnail: { width: number; height: number; };
  };
  
  // External placeholder service fallback (if generation fails)
  fallbackService: 'picsum' | 'placeholder.com' | 'none';
  
  // Whether to generate WebP versions alongside JPG
  generateWebP: boolean;
}

export const defaultConfig: PlaceholderConfig = {
  quality: {
    hero: 90,
    gallery: 85,
  },
  
  showOverlays: true,
  
  brand: {
    primary: '#1a2744',    // EDG Dark Blue
    secondary: '#2c3e50',  // EDG Blue
    accent: '#c9a961',     // EDG Gold
  },
  
  dimensions: {
    hero: { width: 1920, height: 1080 },
    gallery: { width: 1200, height: 800 },
    thumbnail: { width: 600, height: 400 },
  },
  
  fallbackService: 'picsum',
  
  generateWebP: false,
};

// External placeholder service URL templates
export const externalServices = {
  picsum: (width: number, height: number, seed?: string) => 
    `https://picsum.photos/seed/${seed || 'edg'}/${width}/${height}`,
  
  'placeholder.com': (width: number, height: number, text?: string) =>
    `https://via.placeholder.com/${width}x${height}/1a2744/c9a961?text=${encodeURIComponent(text || 'EDG')}`,
};
