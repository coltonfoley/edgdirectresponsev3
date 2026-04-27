import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

const projectName = "EDG Website";
const projectRoot = process.cwd();
const nodeEnv = process.env.NODE_ENV || "development";
const envFiles = [
  ".env",
  `.env.${nodeEnv}`,
  ...(nodeEnv === "test" ? [] : [".env.local"]),
  `.env.${nodeEnv}.local`,
];

const env = {};
const loadedFiles = [];

for (const fileName of envFiles) {
  const filePath = path.join(projectRoot, fileName);

  if (!existsSync(filePath)) continue;

  const parsed = dotenv.parse(readFileSync(filePath));
  Object.assign(env, parsed);
  loadedFiles.push(fileName);
}

Object.assign(env, process.env);

const errors = [];
const warnings = [];

function has(name) {
  return typeof env[name] === "string" && env[name].trim().length > 0;
}

function value(name, fallback = "") {
  return has(name) ? env[name].trim() : fallback;
}

function requireVars(names, reason) {
  for (const name of names) {
    if (!has(name)) {
      errors.push(`${name} is required. ${reason}`);
    }
  }
}

function requireOneOf(names, reason) {
  if (!names.some(has)) {
    errors.push(`One of ${names.join(", ")} is required. ${reason}`);
  }
}

function allowValue(name, allowed, fallback) {
  const current = value(name, fallback);

  if (!allowed.includes(current)) {
    errors.push(`${name} must be one of: ${allowed.join(", ")}.`);
  }

  return current;
}

function warnMissing(name, reason) {
  if (!has(name)) {
    warnings.push(`${name} is not set. ${reason}`);
  }
}

const isProduction = value("NODE_ENV") === "production" || value("VERCEL_ENV") === "production";
const isPreview = value("VERCEL_ENV") === "preview";

if (isProduction || isPreview) {
  requireVars(["RAINMAKER_API_KEY"], "Website lead capture sends production/preview leads to Rainmaker.");
  requireOneOf(
    ["RAINMAKER_LEAD_INTAKE_URL", "RAINMAKER_BASE_URL"],
    "Website lead capture needs the Rainmaker intake URL or Rainmaker base URL."
  );
} else {
  warnMissing("RAINMAKER_API_KEY", "Local lead submissions need Rainmaker.");
  if (!has("RAINMAKER_LEAD_INTAKE_URL") && !has("RAINMAKER_BASE_URL")) {
    warnings.push("RAINMAKER_BASE_URL or RAINMAKER_LEAD_INTAKE_URL is not set. Local lead submissions may fail.");
  }
}

if (
  (isProduction || isPreview) &&
  [value("RAINMAKER_BASE_URL"), value("RAINMAKER_LEAD_INTAKE_URL")].some((url) => url.includes("localhost"))
) {
  errors.push("Rainmaker lead intake points at localhost in a deployed environment.");
}

warnMissing("RESEND_API_KEY", "Lead notification emails will not send without it.");
warnMissing("FROM_EMAIL", "Notification emails will use the built-in default sender.");
warnMissing("NOTIFICATION_EMAIL", "Lead notifications will only send to cfoley@edgpatioshade.com unless more recipients are configured.");
if (env.ENABLE_LEAD_FOLLOW_UP_EMAILS === "true") {
  warnings.push("ENABLE_LEAD_FOLLOW_UP_EMAILS is true. Leads will receive an automatic 7-day follow-up email.");
}
warnMissing("ADMIN_API_KEY", "Legacy analytics/admin endpoints need this outside local development.");
warnMissing("GOOGLE_PLACES_API_KEY", "Google review fetch scripts will not run without it.");

console.log(`${projectName} environment check`);
console.log(
  loadedFiles.length
    ? `Loaded env files: ${loadedFiles.join(", ")}`
    : "Loaded env files: none; using process environment only."
);
console.log(`Runtime target: ${value("VERCEL_ENV", nodeEnv)}`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

if (errors.length) {
  console.log("\nMissing or invalid required environment:");
  for (const error of errors) {
    console.log(`- ${error}`);
  }
  process.exit(1);
}

console.log("\nEnvironment looks ready for website lead routing.");
