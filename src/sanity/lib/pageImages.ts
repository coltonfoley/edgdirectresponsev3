import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

/**
 * Page Image Types
 */
export interface PageImage {
  _id: string;
  key: string;
  title: string;
  description?: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt: string;
    caption?: string;
    hotspot?: {
      x: number;
      y: number;
    };
  };
  category: string;
  pageLocations?: string[];
  priority: number;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * Get a single page image by its key
 */
export async function getPageImage(key: string): Promise<PageImage | null> {
  const query = groq`*[_type == "pageImage" && key == $key && isActive == true][0] {
    _id,
    key,
    title,
    description,
    image {
      ...,
      asset->
    },
    category,
    pageLocations,
    priority,
    isActive,
    seoTitle,
    seoDescription
  }`;
  
  return client.fetch(query, { key });
}

/**
 * Get all page images by category
 */
export async function getPageImagesByCategory(category: string): Promise<PageImage[]> {
  const query = groq`*[_type == "pageImage" && category == $category && isActive == true] | order(priority desc) {
    _id,
    key,
    title,
    description,
    image {
      ...,
      asset->
    },
    category,
    pageLocations,
    priority,
    isActive,
    seoTitle,
    seoDescription
  }`;
  
  return client.fetch(query, { category });
}

/**
 * Get all active page images
 */
export async function getAllPageImages(): Promise<PageImage[]> {
  const query = groq`*[_type == "pageImage" && isActive == true] | order(category asc, priority desc) {
    _id,
    key,
    title,
    description,
    image {
      ...,
      asset->
    },
    category,
    pageLocations,
    priority,
    isActive,
    seoTitle,
    seoDescription
  }`;
  
  return client.fetch(query);
}

/**
 * Get multiple page images by their keys
 */
export async function getPageImagesByKeys(keys: string[]): Promise<Record<string, PageImage>> {
  const query = groq`*[_type == "pageImage" && key in $keys && isActive == true] {
    _id,
    key,
    title,
    description,
    image {
      ...,
      asset->
    },
    category,
    pageLocations,
    priority,
    isActive,
    seoTitle,
    seoDescription
  }`;
  
  const images = await client.fetch<PageImage[]>(query, { keys });
  
  // Convert array to record keyed by image key
  return images.reduce((acc, image) => {
    acc[image.key] = image;
    return acc;
  }, {} as Record<string, PageImage>);
}

/**
 * Get image URL from a PageImage object
 */
export function getPageImageUrl(
  pageImage: PageImage | null | undefined,
  options?: { width?: number; height?: number; quality?: number }
): string | null {
  if (!pageImage?.image) return null;
  
  let builder = urlFor(pageImage.image);
  
  if (options?.width) {
    builder = builder.width(options.width);
  }
  if (options?.height) {
    builder = builder.height(options.height);
  }
  if (options?.quality) {
    builder = builder.quality(options.quality);
  }
  
  return builder.url();
}

/**
 * Get image URL by key (convenience function)
 */
export async function getPageImageUrlByKey(
  key: string,
  options?: { width?: number; height?: number; quality?: number }
): Promise<string | null> {
  const pageImage = await getPageImage(key);
  return getPageImageUrl(pageImage, options);
}