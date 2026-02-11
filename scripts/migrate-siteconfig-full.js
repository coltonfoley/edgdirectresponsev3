/**
 * FULL Site Config Migration - adds contact, social, hours
 */

async function migrateSiteConfig() {
  const client = require('@sanity/client').createClient({
    projectId: '1x9vna2d',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_SESSION_TOKEN,
  });
  
  console.log('🚀 Migrating site config...\n');
  
  const configId = await client.fetch('*[_type == "siteConfig"][0]._id');
  
  if (!configId) {
    console.error('No site config found!');
    return;
  }
  
  const patch = {
    contactInfo: {
      phone: '(815) 581-0138',
      phoneRaw: '+18155810138',
      email: 'sales@edgpatioshade.com',
      address: '12345 Main St, Spring Grove, IL 60081',
    },
    socialLinks: {
      facebook: 'https://facebook.com/edgpatioshade',
      instagram: 'https://instagram.com/edgpatioshade',
      linkedin: 'https://linkedin.com/company/edgpatioshade',
    },
    businessHours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment',
      sunday: 'Closed',
    },
  };
  
  await client.patch(configId).set(patch).commit();
  console.log('✅ Site config migrated');
}

migrateSiteConfig().catch(console.error);
