/**
 * Contact Page OG Image
 */

import { generateOGImage } from '@/lib/og-templates';

export const alt = 'Contact EDG Patio & Shade | Free Consultation & Quote';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Request a Quote',
    subtitle: 'Free consultation • Preliminary quotes • Showroom visits',
    tagline: 'Contact Us',
  });
}
