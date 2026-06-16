# EDG Website Lead Flow

Verified against the repo on 2026-06-07.

## Current Flow

1. Website form components call `useLeadSubmission`.
2. `useLeadSubmission` posts to `/api/leads`.
3. `/api/leads` validates and rate-limits the submission.
4. Accepted leads are forwarded to Rainmaker.
5. If the submission includes compressed lead photos, `/api/leads` uploads those
   photos to the Rainmaker lead attachment endpoint after Rainmaker returns the
   lead id.
6. The website returns the Rainmaker-backed lead id to the client.
7. Resend may send admin notifications and optional follow-up emails when
   configured.

## Source Files

- Client hook: `src/hooks/useLeadSubmission.ts`
- API route: `src/app/api/leads/route.ts`
- Rainmaker helper: `src/lib/rainmaker-api.ts`
- Analytics lead read route: `src/app/api/analytics/route.ts`
- Environment example: `.env.example`

## Environment Variables

Current lead-related variables in `.env.example`:

- `RAINMAKER_BASE_URL`
- `RAINMAKER_API_KEY`
- `RAINMAKER_LEAD_INTAKE_URL`
- `RESEND_API_KEY`
- `FROM_EMAIL`
- `NOTIFICATION_EMAIL`
- `ENABLE_LEAD_FOLLOW_UP_EMAILS`
- `ADMIN_API_KEY`
- `GOOGLE_PLACES_API_KEY`

`RAINMAKER_VERCEL_BYPASS` is also read by source code for protected Rainmaker
preview intake.

## Important Rules

- The website no longer stores leads in Supabase.
- Do not add a fallback local database without explicit approval.
- Do not send test leads that look like customer leads unless Colton approves
  or the lead is clearly labeled internal/test.
- If a change touches forms, CTA query params, `/api/leads`, Rainmaker,
  Resend, or analytics, verify the entire path.
- Report lead-flow verification separately from page render verification.

## Minimum Verification For Lead Changes

- Confirm the form posts to `/api/leads`.
- Confirm `/api/leads` still requires Rainmaker config.
- Confirm accepted leads still use `storage: 'rainmaker'`.
- For photo uploads, confirm the Rainmaker lead receives attachment metadata and
  the images are not only present on the admin notification email.
- Confirm failure states are clear and do not silently drop real leads.
- Confirm analytics/event tracking still fires only after a real successful
  submission.
- For production work, verify against the live URL only after deploy state is
  known.
