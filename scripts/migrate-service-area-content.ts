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

const serviceAreaContent = {
  'lake-county-il': {
    badge: 'Our Home Market',
    heroTitle: 'Lake County Outdoor Living',
    heroDescription: "We're based in Lake County, and we know it better than anyone. We design and build outdoor systems that handle our tough winters and maximize our summers.",
    communities: [
      { name: 'Lake Forest', type: 'residential' },
      { name: 'Lake Bluff', type: 'residential' },
      { name: 'Deerfield', type: 'residential' },
      { name: 'Highland Park', type: 'residential' },
      { name: 'Lake Zurich', type: 'mixed' },
      { name: 'Mundelein', type: 'mixed' },
      { name: 'Vernon Hills', type: 'mixed' },
      { name: 'Buffalo Grove', type: 'residential' },
      { name: 'Lincolnshire', type: 'mixed' },
      { name: 'Libertyville', type: 'residential' },
      { name: 'Barrington', type: 'residential' },
      { name: 'Grayslake', type: 'mixed' },
    ],
    localConsiderations: [
      { title: 'Weather Impact', description: 'Lake Michigan moderates temperatures but also brings heavy lake-effect snow and strong winds. Our louvered pergolas are designed to handle both.' },
      { title: 'HOA & Design Rules', description: 'Many Lake Forest and Lake Bluff communities have strict architectural guidelines. We know them and design accordingly.' },
      { title: 'Permit Requirements', description: 'Lake County requires permits for most outdoor structures over 120 sq ft. We handle the paperwork so you don\'t have to.' },
      { title: 'Soil & Drainage', description: 'Areas around Lake Zurich and Libertyville have clay-heavy soils. We engineer footings that won\'t shift or crack over time.' },
    ],
    localKnowledgeTitle: 'Lake County Native Knowledge',
    localKnowledgeText: "We live here. We work here. We know which Lake County inspectors want to see what, which HOAs are strictest, and how to design for our specific weather patterns.",
    testimonial: {
      quote: "They knew exactly what the Lake Forest HOA would approve. Saved us weeks of back-and-forth. The pergola is exactly what we wanted.",
      author: 'Jennifer M.',
      location: 'Lake Forest',
      project: 'Motorized Pergola',
    },
  },
  'north-shore-chicago': {
    badge: 'Our Specialty',
    heroTitle: 'North Shore Chicago Outdoor Living',
    heroDescription: 'The North Shore demands a certain level of quality and design sophistication. We deliver systems that match the architecture and lifestyle of these premier communities.',
    communities: [
      { name: 'Winnetka', type: 'residential' },
      { name: 'Glencoe', type: 'residential' },
      { name: 'Kenilworth', type: 'residential' },
      { name: 'Wilmette', type: 'residential' },
      { name: 'Evanston', type: 'mixed' },
      { name: 'Northfield', type: 'residential' },
    ],
    localConsiderations: [
      { title: 'Strict HOA Guidelines', description: 'Many North Shore communities have architectural review boards with strict aesthetic requirements. We have proven designs that typically sail through approval.' },
      { title: 'Heritage Properties', description: 'Working near historic districts requires sensitivity to aesthetics. We can match styles while adding modern comfort.' },
      { title: 'Wind & Weather', description: 'Proximity to Lake Michigan means exposure to strong winds and rapid weather changes. Our systems are engineered for these conditions.' },
      { title: 'Premium Expectations', description: 'North Shore clients expect white-glove service and impeccable quality. Our team is trained to deliver both.' },
    ],
    localKnowledgeTitle: 'North Shore Experience',
    localKnowledgeText: "We've completed dozens of projects on the North Shore. We understand the aesthetic standards and approval processes unique to these communities.",
    testimonial: {
      quote: "EDG understood the look we needed for our Winnetka home. The design was sophisticated, the installation flawless, and the neighbors keep asking who did it.",
      author: 'Robert K.',
      location: 'Winnetka',
      project: 'Custom Louvered Pergola',
    },
  },
  'mchenry-county-il': {
    badge: 'Service Area',
    heroTitle: 'McHenry County Outdoor Living',
    heroDescription: 'Larger lots, rural character, and a love for outdoor living. McHenry County properties are perfect for expansive outdoor systems.',
    communities: [
      { name: 'Crystal Lake', type: 'mixed' },
      { name: 'McHenry', type: 'mixed' },
      { name: 'Cary', type: 'residential' },
      { name: 'Woodstock', type: 'mixed' },
      { name: 'Algonquin', type: 'mixed' },
      { name: 'Fox River Grove', type: 'residential' },
      { name: 'Island Lake', type: 'residential' },
      { name: 'Johnsburg', type: 'residential' },
    ],
    localConsiderations: [
      { title: 'Rural Zoning', description: 'Many McHenry County properties have acreage and different setback requirements than suburban lots. We know the codes.' },
      { title: 'Well & Septic Considerations', description: 'Rural properties often have well and septic systems. We design footings that avoid interference.' },
      { title: 'Open Space Design', description: 'Larger properties benefit from expansive pergolas that create outdoor rooms. We specialize in scale-appropriate design.' },
      { title: 'Wind Exposure', description: 'More open land means more wind exposure. We engineer for it.' },
    ],
    localKnowledgeTitle: 'Rural & Suburban Expertise',
    localKnowledgeText: "Whether you're on 5 acres or a subdivision lot in McHenry County, we understand the zoning and design requirements.",
    testimonial: {
      quote: "We have 3 acres and wanted a real outdoor living space, not just a patio set. EDG designed something that feels like an extension of our home. It's spectacular.",
      author: 'Mike T.',
      location: 'Crystal Lake',
      project: 'Large-Scale Pergola with Screens',
    },
  },
  'naperville-il': {
    badge: 'Service Area',
    heroTitle: 'Naperville Outdoor Living',
    heroDescription: 'Naperville homes deserve outdoor spaces that match their quality. We bring premium outdoor living systems to this thriving community.',
    communities: [
      { name: 'Naperville', type: 'mixed' },
      { name: 'Aurora', type: 'mixed' },
      { name: 'Warrenville', type: 'residential' },
      { name: 'Lisle', type: 'mixed' },
      { name: 'Woodridge', type: 'mixed' },
      { name: 'Plainfield', type: 'residential' },
    ],
    localConsiderations: [
      { title: 'Municipal Permits', description: 'Naperville has detailed permit requirements. We handle the process from application to approval.' },
      { title: 'Subdivision Guidelines', description: 'Many Naperville subdivisions have design covenants. We work within them or help you get variances.' },
      { title: 'Midwest Weather', description: 'Naperville gets it all—hot humid summers, cold snowy winters, and everything in between. Our systems handle it year after year.' },
      { title: 'Property Values', description: 'Outdoor living adds significant value in Naperville\'s competitive market. We design for ROI.' },
    ],
    localKnowledgeTitle: 'Naperville Know-How',
    localKnowledgeText: 'We work regularly in Naperville and understand the local building department requirements and HOA landscape.',
    testimonial: {
      quote: "EDG made the permit process easy. They knew exactly what Naperville would want to see. The pergola is beautiful and has become our favorite space.",
      author: 'Lisa P.',
      location: 'Naperville',
      project: 'Motorized Pergola with Integrated Lighting',
    },
  },
  'lake-geneva-wi': {
    badge: 'Wisconsin Lakes Region',
    heroTitle: 'Lake Geneva Outdoor Living',
    heroDescription: 'Lake Geneva\'s resort atmosphere calls for outdoor spaces that embrace the lake lifestyle. We create systems perfect for lakeside living.',
    communities: [
      { name: 'Lake Geneva', type: 'mixed' },
      { name: 'Williams Bay', type: 'residential' },
      { name: 'Fontana-on-Geneva Lake', type: 'residential' },
      { name: 'Delavan', type: 'mixed' },
      { name: 'Elkhorn', type: 'mixed' },
    ],
    localConsiderations: [
      { title: 'Lakefront Design', description: 'Lakeside properties have unique considerations—views, breezes, and weather. We design to maximize the good and minimize the bad.' },
      { title: 'Seasonal Use', description: 'Lake Geneva is a year-round destination but outdoor use peaks in summer. We design systems that extend your season.' },
      { title: 'Rental Properties', description: 'Many Lake Geneva homes are vacation rentals. Our systems add appeal and durability for high-use situations.' },
      { title: 'Wisconsin Building Codes', description: 'Different state, different codes. We know Wisconsin requirements and work with local inspectors.' },
    ],
    localKnowledgeTitle: 'Lake Life Specialists',
    localKnowledgeText: "We understand lakeside living. Whether it's a year-round home or a weekend getaway, we design outdoor systems that make the most of your Lake Geneva property.",
    testimonial: {
      quote: "Our lake house finally has the outdoor space it deserved. The pergola gives us shade when we want it, sun when we don't, and the views are unobstructed. Perfect.",
      author: 'David & Susan H.',
      location: 'Fontana',
      project: 'Lakeside Louvered Pergola',
    },
  },
  'southeast-wisconsin': {
    badge: 'Wisconsin Service Area',
    heroTitle: 'Southeast Wisconsin Outdoor Living',
    heroDescription: 'From Kenosha to Milwaukee, we bring premium outdoor living systems to Southeast Wisconsin. Cold winters, beautiful summers—we design for both.',
    communities: [
      { name: 'Kenosha', type: 'mixed' },
      { name: 'Racine', type: 'mixed' },
      { name: 'Milwaukee', type: 'mixed' },
      { name: 'Mount Pleasant', type: 'mixed' },
      { name: 'Pleasant Prairie', type: 'residential' },
    ],
    localConsiderations: [
      { title: 'Lake Michigan Effect', description: 'Southeast Wisconsin experiences significant lake-effect weather. Our systems are built to handle snow loads and strong winds.' },
      { title: 'Urban & Suburban Mix', description: 'From Milwaukee condos to Kenosha single-family homes, we adapt designs to the setting.' },
      { title: 'Wisconsin Codes', description: 'We understand Wisconsin building codes and work with local inspectors across the region.' },
      { title: 'Season Extension', description: 'Wisconsin winters are long. Our enclosed systems help you maximize the outdoor season.' },
    ],
    localKnowledgeTitle: 'Wisconsin Experience',
    localKnowledgeText: 'We work regularly in Wisconsin and understand the unique challenges of the region—from permitting to weatherproofing.',
    testimonial: {
      quote: "EDG came all the way to Milwaukee and delivered the same quality I'd expect from a local company. The pergola is fantastic and handles our weather perfectly.",
      author: 'Karen S.',
      location: 'Milwaukee',
      project: 'Motorized Pergola',
    },
  },
  'sanibel-outdoor-living': {
    badge: 'Florida Service Area',
    heroTitle: 'Sanibel Island Outdoor Living',
    heroDescription: 'Florida\'s climate demands outdoor systems that handle heat, humidity, and hurricanes. We design for the unique challenges of Sanibel and Southwest Florida.',
    communities: [
      { name: 'Sanibel Island', type: 'residential' },
      { name: 'Captiva Island', type: 'residential' },
      { name: 'Fort Myers', type: 'mixed' },
      { name: 'Naples', type: 'residential' },
      { name: 'Bonita Springs', type: 'residential' },
    ],
    localConsiderations: [
      { title: 'Hurricane Resistance', description: 'Florida\'s hurricane codes are strict for good reason. Our systems are engineered to meet or exceed Miami-Dade wind resistance standards.' },
      { title: 'Heat & Humidity', description: 'Florida\'s climate is tough on outdoor materials. We use marine-grade finishes and materials that resist corrosion and fading.' },
      { title: 'Sun Protection', description: 'The Florida sun is intense. Our motorized shades and louvered roofs provide on-demand shade when you need it.' },
      { title: 'Island Logistics', description: 'Sanibel and Captiva have unique logistics challenges. We plan for ferry schedules, island access, and limited delivery windows.' },
    ],
    localKnowledgeTitle: 'Florida Expertise',
    localKnowledgeText: 'We understand Florida\'s unique climate and building requirements. From hurricane codes to heat management, we design systems built for the Sunshine State.',
    testimonial: {
      quote: "After Hurricane Ian, our EDG pergola was still standing while other structures around us were damaged. The engineering is impressive, and we use it every day.",
      author: 'Carol & James R.',
      location: 'Sanibel Island',
      project: 'Hurricane-Rated Louvered Pergola',
    },
  },
  'barrington-il': {
    badge: 'Service Area',
    heroTitle: 'Barrington Outdoor Living',
    heroDescription: 'Barrington\'s equestrian heritage and estate properties deserve outdoor systems that match their character. We design for Barrington\'s unique lifestyle.',
    communities: [
      { name: 'Barrington', type: 'residential' },
      { name: 'Barrington Hills', type: 'residential' },
      { name: 'South Barrington', type: 'residential' },
      { name: 'North Barrington', type: 'residential' },
      { name: 'Lake Barrington', type: 'residential' },
    ],
    localConsiderations: [
      { title: 'Estate-Scale Design', description: 'Barrington properties often have larger outdoor spaces. We design pergolas and outdoor kitchens at a scale that fits.' },
      { title: 'Equestrian Properties', description: 'We understand the unique needs of horse properties, including arena viewing areas and barn-adjacent entertainment spaces.' },
      { title: 'Aesthetic Standards', description: 'Barrington has high standards for design and appearance. Our systems enhance property values while looking appropriate to the setting.' },
      { title: 'Conservation Areas', description: 'Many Barrington properties are near conservation areas. We design with environmental sensitivity in mind.' },
    ],
    localKnowledgeTitle: 'Barrington Specialists',
    localKnowledgeText: "We know Barrington. From estate properties to village homes, we design outdoor systems that fit the community's character and your lifestyle.",
    testimonial: {
      quote: "EDG understood the scale of our property and designed something that looks like it was always meant to be there. Quality is exceptional.",
      author: 'Thomas B.',
      location: 'Barrington Hills',
      project: 'Estate-Scale Pergola with Outdoor Kitchen',
    },
  },
};

async function migrate() {
  console.log('Migrating service area content...\n');

  for (const [slug, content] of Object.entries(serviceAreaContent)) {
    try {
      // Find the document
      const doc = await client.fetch(
        `*[_type == "serviceArea" && slug.current == $slug][0]{_id}`,
        { slug }
      );

      if (!doc) {
        console.log(`❌ ${slug}: Document not found`);
        continue;
      }

      // Update the document
      await client
        .patch(doc._id)
        .set({
          badge: content.badge,
          heroTitle: content.heroTitle,
          heroDescription: content.heroDescription,
          communities: content.communities,
          localConsiderations: content.localConsiderations,
          localKnowledgeTitle: content.localKnowledgeTitle,
          localKnowledgeText: content.localKnowledgeText,
          testimonial: content.testimonial,
        })
        .commit();

      console.log(`✅ ${slug}: Updated successfully`);
    } catch (error) {
      console.error(`❌ ${slug}: Failed - ${(error as Error).message}`);
    }
  }

  console.log('\nMigration complete!');
}

migrate().catch(console.error);
