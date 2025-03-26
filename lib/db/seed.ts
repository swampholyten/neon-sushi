import { db } from "@/lib/db";
import { category, product, user } from "@/lib/db/schema";
// import * as schema from "@/lib/db/schema";
import { seed } from "drizzle-seed";

const main = async () => {
  await seed(db, { category }, { count: 10 });
};

main();
