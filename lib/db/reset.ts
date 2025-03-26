import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";
import { reset } from "drizzle-seed";

import * as readline from "readline";

const askQuestions = (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const main = async () => {
  const answer = await askQuestions(
    "Are you sure you want to reset the database? (y/N): "
  );
  if (answer.trim().toLowerCase() === "y") {
    console.log("Starting database reset...");
    await reset(db, schema);
  } else {
    console.log("Database reset cancelled.");
  }
};

main().catch((error) => {
  console.error("Error during reset:", error);
});
