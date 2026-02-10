'use client';

import { ProductGallery } from '@/components/features/gallery/ProductGallery';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
}

interface ShadesGalleryClientProps {
  items: MediaItem[];
}

/**
 * Client Component for the Product Gallery
 * 
 * This component is client-side only because it requires:
 * - useState for gallery state management
 * - Lightbox interactivity
 * - Image navigation controls
 * 
 * All other page content is server-rendered in page.tsx for SEO.
 */
export function ShadesGalleryClient({ items }: ShadesGalleryClientProps) {
  return <ProductGallery items={items} />;
}
