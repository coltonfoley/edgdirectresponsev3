/**
 * Enclosures Product Page OG Image
 */

import { generateProductOG } from '@/lib/og-templates';

export const alt = 'Glass Enclosure Systems | Frameless Retractable Walls | EDG Patio & Shade';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateProductOG({
    product: 'Glass Enclosures',
    category: 'Outdoor Rooms',
    benefit: 'More protected outdoor living with frameless glass walls',
  });
}
