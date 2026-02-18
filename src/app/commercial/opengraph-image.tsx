/**
 * Commercial Page OG Image
 */

import { generateOGImage } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Commercial Outdoor Living | Hotels, Restaurants & Venues | EDG Patio & Shade';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Commercial Outdoor Living',
    subtitle: 'Revenue-driving outdoor spaces for hotels, restaurants & venues',
    tagline: 'Hospitality Solutions',
  });
}
