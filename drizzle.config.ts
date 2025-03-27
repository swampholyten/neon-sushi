import "dotenv/config";

import { defineConfig } from "drizzle-kit";

const isDevelopment = process.env.NODE_ENV !== "production";
const DATABASE_URL = isDevelopment
  ? process.env.DATABASE_URL
  : process.env.PRODUCTION_DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    isDevelopment
      ? "DATABASE_URL is not defined in .env"
      : "PRODUCTION_DATABASE_URL is not defined in .env"
  );
}

export default defineConfig({
  out: "./drizzle",
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
