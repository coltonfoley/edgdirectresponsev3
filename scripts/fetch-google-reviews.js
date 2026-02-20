#!/usr/bin/env node
/**
 * Fetch Google Reviews using Places API
 * 
 * Prerequisites:
 * 1. Get Google Places API key: https://developers.google.com/maps/documentation/places/web-service/get-api-key
 * 2. Enable Places API in Google Cloud Console
 * 3. Add key to .env.local: GOOGLE_PLACES_API_KEY=your_key
 * 
 * Usage:
 *   node scripts/fetch-google-reviews.js
 */

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_NAME = 'EDG Patio & Shade';
const LOCATION = 'Spring Grove, IL';

async function findPlaceId() {
  const query = `${PLACE_NAME} ${LOCATION}`;
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id,name,rating,user_ratings_total&key=${GOOGLE_API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.status !== 'OK' || !data.candidates?.length) {
    console.error('Error finding place:', data.error_message || data.status);
    process.exit(1);
  }
  
  return data.candidates[0];
}

async function getReviews(placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.status !== 'OK') {
    console.error('Error fetching reviews:', data.error_message || data.status);
    process.exit(1);
  }
  
  return data.result;
}

function formatReview(review) {
  // Get first name + last initial
  const nameParts = review.author_name.split(' ');
  const displayName = nameParts.length > 1 
    ? `${nameParts[0]} ${nameParts[nameParts.length - 1][0]}.`
    : nameParts[0];
  
  // Calculate relative time
  const reviewTime = review.time * 1000;
  const now = Date.now();
  const diffDays = Math.floor((now - reviewTime) / (1000 * 60 * 60 * 24));
  
  let timeText;
  if (diffDays < 7) timeText = `${diffDays} days ago`;
  else if (diffDays < 30) timeText = `${Math.floor(diffDays / 7)} weeks ago`;
  else if (diffDays < 365) timeText = `${Math.floor(diffDays / 30)} months ago`;
  else timeText = `${Math.floor(diffDays / 365)} years ago`;
  
  return {
    author: displayName,
    rating: review.rating,
    text: review.text,
    date: timeText,
  };
}

async function main() {
  if (!GOOGLE_API_KEY) {
    console.error('❌ GOOGLE_PLACES_API_KEY not found in environment');
    console.log('\nTo get your API key:');
    console.log('1. Go to https://developers.google.com/maps/documentation/places/web-service/get-api-key');
    console.log('2. Create a project and enable Places API');
    console.log('3. Add to .env.local: GOOGLE_PLACES_API_KEY=your_key');
    process.exit(1);
  }
  
  console.log('🔍 Finding place...');
  const place = await findPlaceId();
  console.log(`✅ Found: ${place.name}`);
  console.log(`   Rating: ${place.rating}/5 (${place.user_ratings_total} reviews)`);
  
  console.log('\n📥 Fetching reviews...');
  const details = await getReviews(place.place_id);
  
  if (!details.reviews || details.reviews.length === 0) {
    console.log('⚠️ No reviews found');
    process.exit(0);
  }
  
  // Filter 5-star reviews only and take top 6
  const fiveStarReviews = details.reviews
    .filter(r => r.rating === 5)
    .slice(0, 6)
    .map(formatReview);
  
  console.log(`\n⭐ Found ${fiveStarReviews.length} five-star reviews\n`);
  
  // Output as code
  console.log('// Copy this into src/components/features/ReviewsSection.tsx\n');
  console.log('const reviews: Review[] = [');
  
  fiveStarReviews.forEach((review, i) => {
    console.log(`  {`);
    console.log(`    id: '${i + 1}',`);
    console.log(`    author: '${review.author}',`);
    console.log(`    rating: ${review.rating},`);
    console.log(`    text: '${review.text.replace(/'/g, "\\'")}',`);
    console.log(`    date: '${review.date}',`);
    console.log(`    verified: true,`);
    console.log(`  },`);
  });
  
  console.log('];');
}

main().catch(console.error);
