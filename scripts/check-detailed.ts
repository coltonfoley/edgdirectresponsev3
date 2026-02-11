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
  console.log('Detailed check for Lake County...\n');
  
  const area = await client.fetch(`*[_type == "serviceArea" && slug.current == "lake-county-il"][0]`);

  console.log('Full document:');
  console.log(JSON.stringify(area, null, 2));
}

check().catch(console.error);
