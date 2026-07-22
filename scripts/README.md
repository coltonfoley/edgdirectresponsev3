# EDG Website Scripts

Active scripts in this folder are intended for current build, validation, and maintenance work:

- `validate-env.mjs` - checks Rainmaker, Resend, and related environment shape
- `validate-images.mjs` - verifies required public image paths
- `generate-gallery-data.mjs` - refreshes generated gallery image data during builds
- `check-route-registry.mjs` - validates the maintained route registry against source
- `audit-lead-instrumentation.mjs` - checks lead-form analytics wiring
- `test-lead-submission-identity.mts` - tests persistent lead submission identity
- `test-contrast.mjs` - targeted contrast check
- `fetch-google-reviews.js` - optional review-fetch helper when the Google Places key is available

One-off audit analyzers and rollout-specific verifiers do not belong here. Keep
them with their dated work archive unless they are generalized, documented, and
used by the current package scripts or CI workflow.
