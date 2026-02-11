import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x9vna2d',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function check() {
  console.log('Checking products in Sanity...\n');
  
  const products = await client.fetch(`*[_type == "product"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    tagline,
    shortDescription,
    "heroImage": heroImage.asset->url,
    pricingUrl,
    quoteUrl,
    order
  }`);

  for (const p of products) {
    console.log(`🔧 ${p.name} (${p.slug})`);
    console.log(`   Category: ${p.category}`);
    console.log(`   Tagline: ${p.tagline || '(none)'}`);
    console.log(`   Short: ${p.shortDescription?.substring(0, 60)}...`);
    console.log(`   Image: ${p.heroImage ? 'Yes' : 'No'}`);
    console.log(`   Order: ${p.order}`);
    console.log('');
  }
}

check().catch(console.error);
