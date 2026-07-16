import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = path.join(root, "src");

function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(fullPath);
    return /\.(ts|tsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

const files = sourceFiles(sourceDirectory);
const formFindings = [];
let formCount = 0;
for (const filePath of files) {
  const source = fs.readFileSync(filePath, "utf8");
  for (const match of source.matchAll(/<form\b[\s\S]*?>/g)) {
    formCount += 1;
    if (!/data-lead-form-id=/.test(match[0])) {
      formFindings.push(path.relative(root, filePath));
    }
  }
}

const hookSource = fs.readFileSync(
  path.join(sourceDirectory, "hooks/useLeadSubmission.ts"),
  "utf8"
);
const trackerSource = fs.readFileSync(
  path.join(sourceDirectory, "components/analytics/LandingPageTracker.tsx"),
  "utf8"
);
const analyticsSource = fs.readFileSync(
  path.join(sourceDirectory, "lib/analytics.ts"),
  "utf8"
);
const leadRouteSource = fs.readFileSync(
  path.join(sourceDirectory, "app/api/leads/route.ts"),
  "utf8"
);
const allSource = files.map((filePath) => fs.readFileSync(filePath, "utf8")).join("\n");
const requiredEvents = [
  ["lead_form_view", trackerSource],
  ["lead_form_start", hookSource],
  ["lead_form_submit_attempt", hookSource],
  ["generate_lead", hookSource],
  ["lead_form_error", hookSource],
  ["phone_click", allSource],
  ["book_call_click", allSource],
  ["start_project_click", allSource],
];
const missingEvents = requiredEvents
  .filter(([eventName, source]) => {
    const dynamicConversionEvent = [
      "phone_click",
      "book_call_click",
      "start_project_click",
    ].includes(eventName);
    return !source.includes(eventName) &&
      !(dynamicConversionEvent && analyticsSource.includes("event: conversionName"));
  })
  .map(([eventName]) => eventName);
const forbiddenAnalyticsMetadata = ["query_string", "location_param"].filter(
  (field) => analyticsSource.includes(field) || hookSource.includes(field)
);
const forbiddenLeadLogPatterns = [
  ["email interpolation", /console\.(?:log|error|warn)\([\s\S]{0,240}\$\{(?:lead\.)?email\}/],
  ["raw provider response", /console\.(?:log|error|warn)\([\s\S]{0,240}(?:JSON\.stringify\(adminData\)|errorData)/],
  ["raw lead error", /console\.(?:log|error|warn)\([\s\S]{0,160}'Lead capture error:'\s*,\s*error\s*\)/],
].filter(([, pattern]) => pattern.test(leadRouteSource)).map(([label]) => label);

if (
  formFindings.length ||
  missingEvents.length ||
  forbiddenAnalyticsMetadata.length ||
  forbiddenLeadLogPatterns.length
) {
  throw new Error(
    JSON.stringify(
      {
        formCount,
        formFindings,
        missingEvents,
        forbiddenAnalyticsMetadata,
        forbiddenLeadLogPatterns,
      },
      null,
      2
    )
  );
}

console.log(
  `Lead instrumentation audit passed: ${formCount} forms and ${requiredEvents.length} required event paths.`
);
