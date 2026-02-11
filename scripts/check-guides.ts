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
  console.log('Checking guides in Sanity...\n');
  
  const guides = await client.fetch(`*[_type == "guide"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    readTime,
    category,
    "heroImage": heroImage.asset->url,
    featured
  }`);

  for (const g of guides) {
    console.log(`📚 ${g.title}`);
    console.log(`   Slug: ${g.slug}`);
    console.log(`   Category: ${g.category}`);
    console.log(`   Read Time: ${g.readTime || '(none)'}`);
    console.log(`   Featured: ${g.featured ? 'Yes' : 'No'}`);
    console.log(`   Image: ${g.heroImage ? 'Yes' : 'No'}`);
    console.log(`   Description: ${g.description?.substring(0, 60)}...`);
    console.log('');
  }
}

check().catch(console.error);
