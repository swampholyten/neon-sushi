"use client";

import { CartState, useCartStore } from "@/stores/use-cart-store";
import { ReactNode } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext<CartState | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const store = useCartStore();

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCart = <T,>(selector: (state: CartState) => T): T => {
  const store = useContext(CartContext);
  if (!store) {
    throw new Error("useStore must be used within CartProvider");
  }
  return selector(store);
};
