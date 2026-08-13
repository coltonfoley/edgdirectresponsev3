/**
 * Pergolas Product Page OG Image
 */

import { generateProductOG } from '@/lib/og-templates';

export const alt = 'Motorized Louvered Pergolas | Adjustable Roof Systems | EDG Patio & Shade';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateProductOG({
    product: 'Motorized Pergolas',
    category: 'Outdoor Systems',
    benefit: 'Adjustable louvers for sun, shade, airflow & rain management',
  });
}
