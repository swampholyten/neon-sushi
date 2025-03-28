"use client";

import { useCart } from "@/components/providers/cart-provider";
import { Button } from "@/components/ui/button";
import { DEBOUNCE_TIME } from "@/lib/constants";
import { addProductToCart } from "@/lib/db/queries";
import { Product } from "@/lib/db/schema";
import { formatWord } from "@/lib/utils";
import debounce from "lodash.debounce";
import { useRef } from "react";
import { toast } from "sonner";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart((state) => ({ addItem: state.addItem }));

  const debouncedAddProductRef = useRef(
    debounce(async (product: Product) => {
      try {
        await addProductToCart(product);
      } catch (error) {
        console.error("Debounced add product to cart failed:", error);
      }
    }, DEBOUNCE_TIME)
  );

  const handleAddToCart = (product: Product) => {
    // Optimistic UI update
    addItem({
      productId: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });

    toast.success(`${formatWord(product.name)} has been added to your cart.`);

    debouncedAddProductRef.current(product);
  };

  return (
    <Button onClick={() => handleAddToCart(product)} size="sm">
      Add to Cart
    </Button>
  );
};
