"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  category,
  Product,
  product,
  cart,
  cartItem,
  CartItem,
} from "@/lib/db/schema";
import { headers } from "next/headers";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";

const authenticate = async (): Promise<string> => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || !session.user || !session.user.id) {
    redirect("/login");
  }

  return session.user.id;
};

export const getProducts = async () => {
  "use cache";
  const result = await db.select().from(product);
  return result;
};

export const getCategories = async () => {
  "use cache";
  const result = await db.select().from(category);
  return result;
};

export const getUserCart = async () => {
  const userId = await authenticate();

  let userCart = await db.query.cart.findFirst({
    where: eq(cart.userId, userId),
  });

  if (!userCart) {
    const newCart = await db
      .insert(cart)
      .values({
        id: nanoid(),
        userId: userId,
      })
      .returning();
    userCart = newCart[0];
  }

  return userCart;
};

export const addProductToCart = async (product: Product) => {
  const userId = await authenticate();

  const existingCartItem = await db.query.cartItem.findFirst({
    where: and(eq(cartItem.productId, product.id), eq(cartItem.userId, userId)),
  });

  if (existingCartItem) {
    await db
      .update(cartItem)
      .set({ quantity: existingCartItem.quantity + 1 })
      .where(
        and(eq(cartItem.productId, product.id), eq(cartItem.userId, userId))
      );
    return { message: "Quantity updated" };
  } else {
    const result = await db
      .insert(cartItem)
      .values({
        userId: userId,
        productId: product.id,
      })
      .returning();
    return result[0];
  }
};

export const getUserCartItems = async () => {
  const userId = await authenticate();

  const result = await db
    .select({
      productId: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: cartItem.quantity,
    })
    .from(cartItem)
    .innerJoin(product, eq(cartItem.productId, product.id))
    .where(eq(cartItem.userId, userId));

  return result;
};

export const removeProductFromCart = async (productIdToRemove: string) => {
  const userId = await authenticate();
  const result = await db
    .delete(cartItem)
    .where(
      and(
        eq(cartItem.productId, productIdToRemove),
        eq(cartItem.userId, userId)
      )
    )
    .returning();

  return result[0];
};

export const clearCart = async () => {
  const userId = await authenticate();
  const result = await db
    .delete(cartItem)
    .where(eq(cartItem.userId, userId))
    .returning();

  return result;
};

export const updateCartItemQuantity = async (
  productIdToUpdate: string,
  quantity: number
) => {
  const userId = await authenticate();
  if (quantity <= 0) {
    return await removeProductFromCart(productIdToUpdate);
  }

  const result = await db
    .update(cartItem)
    .set({ quantity: quantity })
    .where(
      and(
        eq(cartItem.productId, productIdToUpdate),
        eq(cartItem.userId, userId)
      )
    )
    .returning();

  return result[0];
};
