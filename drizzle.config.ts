import { config } from "dotenv";

import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env.local");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
