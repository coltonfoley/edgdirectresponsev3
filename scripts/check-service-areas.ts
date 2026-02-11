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
  console.log('Checking service areas in Sanity...\n');
  
  const areas = await client.fetch(`*[_type == "serviceArea"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    badge,
    heroTitle,
    heroDescription,
    "communitiesCount": count(communities),
    "considerationsCount": count(localConsiderations),
    testimonial
  }`);

  for (const area of areas) {
    console.log(`📍 ${area.name} (${area.slug})`);
    console.log(`   Badge: ${area.badge || '(empty)'}`);
    console.log(`   Hero Title: ${area.heroTitle || '(empty)'}`);
    console.log(`   Communities: ${area.communitiesCount}`);
    console.log(`   Considerations: ${area.considerationsCount}`);
    console.log(`   Testimonial: ${area.testimonial ? 'Yes' : 'No'}`);
    console.log('');
  }
}

check().catch(console.error);
