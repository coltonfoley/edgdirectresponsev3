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

async function migrate() {
  console.log('Migrating contact page content...\n');

  const contactPageContent = {
    _type: 'contactPage',
    heroHeadline: "Let's start the right conversation.",
    heroDescription: "Tell us about yourself and your project. We'll respond within 1 business day with next steps tailored to your needs.",
    processSteps: [
      {
        step: 1,
        title: "We review your request",
        description: "Within 1 business day"
      },
      {
        step: 2,
        title: "Discovery call (15 min)",
        description: "Understand your goals"
      },
      {
        step: 3,
        title: "Site visit (if applicable)",
        description: "Measure & assess"
      },
      {
        step: 4,
        title: "Custom proposal",
        description: "Clear pricing & timeline"
      }
    ],
    sidebarTitle: "What happens next?",
    contactTitle: "Prefer to call?",
    phone: "(815) 581-0138",
    phoneRaw: "+18155810138",
    hours: "Mon-Fri, 7am-4pm CT",
    locationName: "Spring Grove Showroom",
    address: {
      street: "1802 Holian Drive",
      city: "Spring Grove",
      state: "IL",
      zip: "60081"
    }
  };

  try {
    // Check if contact page already exists
    const existing = await client.fetch(`*[_type == "contactPage"][0]{_id}`);
    
    if (existing) {
      // Update existing
      await client
        .patch(existing._id)
        .set(contactPageContent)
        .commit();
      console.log('✅ Updated existing contact page content');
    } else {
      // Create new
      await client.create(contactPageContent);
      console.log('✅ Created contact page content');
    }
  } catch (error) {
    console.error('❌ Failed:', (error as Error).message);
  }

  console.log('\nMigration complete!');
}

migrate().catch(console.error);
