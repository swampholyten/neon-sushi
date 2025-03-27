import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/lib/db/schema";

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

export const db = drizzle(DATABASE_URL, { schema: schema });
