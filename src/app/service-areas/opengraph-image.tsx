/**
 * Service Areas Index OG Image
 */

import { generateOGImage } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Service Areas | EDG Patio & Shade | Chicago to Milwaukee';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Local Outdoor Living Experts',
    subtitle: 'Serving the Chicago-Milwaukee corridor with premium installations',
    tagline: 'Service Areas',
  });
}
