import { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  timestamp,
  boolean,
  pgEnum,
  decimal,
  primaryKey,
} from "drizzle-orm/pg-core";

/**
 * AUTH SCHEMAS
 */

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export type User = InferSelectModel<typeof user>;

/**
 * STORE SCHEMAS
 */

export const orderStatusEnum = pgEnum("order_status", [
  "PENDING",
  "CONFIRMED",
  "PREPARING",
  "DELIVERED",
  "CANCELLED",
]);

export const category = pgTable("category", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const product = pgTable("product", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  categoryId: text("category_id").references(() => category.id),
  image: text("image"),
  isAvailable: boolean("is_available").notNull().default(true),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const cart = pgTable("cart", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id)
    .unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const cartItem = pgTable(
  "cart_item",
  {
    cartId: text("cart_id")
      .notNull()
      .references(() => cart.id),
    productId: text("product_id")
      .notNull()
      .references(() => product.id),
    quantity: integer("quantity").notNull().default(1),
    notes: text("notes"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.cartId, table.productId] }),
  })
);

export const order = pgTable("order", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  status: orderStatusEnum("status").notNull().default("PENDING"),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const orderItem = pgTable("order_item", {
  id: text("id").primaryKey(),
  orderId: text("order_id")
    .notNull()
    .references(() => order.id),
  productId: text("product_id")
    .notNull()
    .references(() => product.id),
  quantity: integer("quantity").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});
