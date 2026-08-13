/**
 * Homepage OG Image
 * Generated dynamically for social sharing
 */

import { generateOGImage } from '@/lib/og-templates';

export const alt = 'EDG Patio & Shade | Motorized Pergolas & Retractable Screens | Chicago to Milwaukee';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Motorized Pergolas & Retractable Screens',
    subtitle: 'Transform your outdoor space with architectural shade control',
    tagline: 'Outdoor Living Specialists',
  });
}
