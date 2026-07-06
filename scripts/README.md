# EDG Website Scripts

Active scripts in this folder are intended for current build, validation, and maintenance work:

- `validate-env.mjs` - checks Rainmaker, Resend, and related environment shape
- `validate-images.mjs` - verifies required public image paths
- `generate-gallery-data.mjs` - refreshes generated gallery image data during builds
- `patch-next-metadata.mjs` - postinstall patch used by this Next.js version
- `register-service-area.mjs` - helper for adding a new service-area route to sitemap, index, and navbar
- `test-contrast.mjs` - targeted contrast check
- `fetch-google-reviews.js` - optional review-fetch helper when the Google Places key is available
