/**
 * Barrington Service Area OG Image
 */

import { generateServiceAreaOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Barrington Outdoor Living | Motorized Pergolas & Shades | EDG';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateServiceAreaOG({
    location: 'Barrington',
    service: 'Outdoor Living',
  });
}
