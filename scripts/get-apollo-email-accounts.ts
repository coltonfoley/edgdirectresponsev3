#!/usr/bin/env tsx
/**
 * Apollo.io Email Account ID Fetcher
 * 
 * This script fetches your connected email accounts from Apollo.io
 * and displays the account IDs you need for the APOLLO_EMAIL_ACCOUNT_ID
 * environment variable.
 * 
 * Usage:
 *   npx tsx scripts/get-apollo-email-accounts.ts YOUR_MASTER_API_KEY
 * 
 * Or if you have the key in .env.local:
 *   npx tsx scripts/get-apollo-email-accounts.ts
 */

async function getEmailAccounts(apiKey: string) {
  try {
    console.log('🔍 Fetching email accounts from Apollo.io...\n');

    const response = await fetch('https://api.apollo.io/api/v1/email_accounts', {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Error:', error);
      process.exit(1);
    }

    const data = await response.json();

    if (!data.email_accounts || data.email_accounts.length === 0) {
      console.log('⚠️  No email accounts found.');
      console.log('   Make sure you have connected a mailbox in Apollo:');
      console.log('   Settings → Mailboxes → Connect Mailbox\n');
      process.exit(1);
    }

    console.log('✅ Found email accounts:\n');
    console.log('=' .repeat(60));

    data.email_accounts.forEach((account: any, index: number) => {
      console.log(`\n📧 Account #${index + 1}`);
      console.log('   Email:', account.email);
      console.log('   Name:', account.user_name || 'N/A');
      console.log('   Status:', account.active ? '✅ Active' : '❌ Inactive');
      console.log('   ID:', account.id);
      console.log('   ────────────────────────────────────────────────');
    });

    console.log('\n📋 Copy the ID above and add to your .env.local:');
    console.log(`   APOLLO_EMAIL_ACCOUNT_ID=${data.email_accounts[0].id}\n`);

  } catch (error) {
    console.error('❌ Failed to fetch email accounts:', error);
    process.exit(1);
  }
}

// Get API key from command line or prompt
const apiKey = process.argv[2];

if (!apiKey) {
  console.log('📝 Apollo.io Email Account ID Fetcher\n');
  console.log('Usage:');
  console.log('  npx tsx scripts/get-apollo-email-accounts.ts YOUR_MASTER_API_KEY');
  console.log('\nGet your Master API Key from:');
  console.log('  https://app.apollo.io/settings/integrations/api\n');
  process.exit(1);
}

getEmailAccounts(apiKey);
