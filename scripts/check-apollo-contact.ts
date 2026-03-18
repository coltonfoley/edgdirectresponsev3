#!/usr/bin/env tsx
/**
 * Check if a contact exists in Apollo.io by email
 * 
 * Usage:
 *   npx tsx scripts/check-apollo-contact.ts API_KEY EMAIL
 */

async function searchContact(apolloKey: string, searchEmail: string) {
  try {
    console.log(`🔍 Searching for ${searchEmail} in Apollo.io...\n`);

    const searchResponse = await fetch('https://api.apollo.io/api/v1/contacts/search', {
      method: 'POST',
      headers: {
        'X-Api-Key': apolloKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q_keywords: searchEmail,
        per_page: 5,
      }),
    });

    if (!searchResponse.ok) {
      const error = await searchResponse.json();
      console.error('❌ Search Error:', error);
      process.exit(1);
    }

    const searchData = await searchResponse.json();

    if (!searchData.contacts || searchData.contacts.length === 0) {
      console.log('❌ Contact not found in Apollo.');
      console.log('   This could mean:');
      console.log('   - The API call failed (check Vercel logs)');
      console.log('   - The contact creation is still processing');
      console.log('   - There was an error in the integration\n');
      return;
    }

    const contact = searchData.contacts[0];
    
    console.log('✅ Contact found in Apollo!\n');
    console.log('='.repeat(60));
    console.log('   ID:', contact.id);
    console.log('   Email:', contact.email);
    console.log('   Name:', `${contact.first_name} ${contact.last_name || ''}`.trim());
    console.log('   Phone:', contact.phone || 'N/A');
    console.log('   Title:', contact.title || 'N/A');
    console.log('   Organization:', contact.organization_name || 'N/A');
    console.log('   Created:', contact.created_at ? new Date(contact.created_at).toLocaleString() : 'N/A');
    console.log('   ────────────────────────────────────────────────');

    if (contact.contact_campaign_statuses && contact.contact_campaign_statuses.length > 0) {
      console.log('\n📧 Enrolled in Sequences:');
      contact.contact_campaign_statuses.forEach((status: any) => {
        console.log(`   - Sequence: ${status.emailer_campaign_name || status.emailer_campaign_id}`);
        console.log(`     Status: ${status.status}`);
        console.log(`     Added: ${new Date(status.created_at).toLocaleString()}`);
      });
    } else {
      console.log('\n⚠️  Contact is NOT enrolled in any sequences');
    }
    console.log();

  } catch (error) {
    console.error('❌ Failed to search contact:', error);
    process.exit(1);
  }
}

const userApiKey = process.argv[2];
const userEmail = process.argv[3];

if (!userApiKey || !userEmail) {
  console.log('📝 Apollo Contact Checker\n');
  console.log('Usage:');
  console.log('  npx tsx scripts/check-apollo-contact.ts API_KEY EMAIL\n');
  process.exit(1);
}

searchContact(userApiKey, userEmail);
