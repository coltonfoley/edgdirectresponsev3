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
  console.log('Checking all content in Sanity...\n');
  
  const counts = await client.fetch(`{
    "siteConfig": count(*[_type == "siteConfig"]),
    "homepage": count(*[_type == "homepage"]),
    "products": count(*[_type == "product"]),
    "landingPages": count(*[_type == "landingPage"]),
    "testimonials": count(*[_type == "testimonial"]),
    "faqs": count(*[_type == "faq"]),
    "projects": count(*[_type == "project"]),
    "serviceAreas": count(*[_type == "serviceArea"]),
    "galleryImages": count(*[_type == "galleryImage"]),
    "guides": count(*[_type == "guide"]),
  }`);

  console.log('📊 Content Counts:');
  console.log(`  Site Config: ${counts.siteConfig}`);
  console.log(`  Homepage: ${counts.homepage}`);
  console.log(`  Products: ${counts.products}`);
  console.log(`  Landing Pages: ${counts.landingPages}`);
  console.log(`  Testimonials: ${counts.testimonials}`);
  console.log(`  FAQs: ${counts.faqs}`);
  console.log(`  Projects: ${counts.projects}`);
  console.log(`  Service Areas: ${counts.serviceAreas}`);
  console.log(`  Gallery Images: ${counts.galleryImages}`);
  console.log(`  Guides: ${counts.guides}`);
  
  if (counts.galleryImages > 0) {
    console.log('\n📸 Sample Gallery Images:');
    const images = await client.fetch(`*[_type == "galleryImage"][0...3]{title, category, "src": image.asset->url}`);
    images.forEach((img: {title: string, category: string}) => console.log(`  - ${img.title} (${img.category})`));
  }
  
  if (counts.guides > 0) {
    console.log('\n📚 Guides:');
    const guides = await client.fetch(`*[_type == "guide"]{title, "slug": slug.current, category}`);
    guides.forEach((g: {title: string, slug: string, category: string}) => console.log(`  - ${g.title} (${g.category}) [${g.slug}]`));
  }
}

check().catch(console.error);
