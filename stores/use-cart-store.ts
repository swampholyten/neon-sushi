import { create } from "zustand";

interface CartProduct {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  image: string | null;
  quantity: number;
}

export type CartState = {
  cartItems: CartProduct[];
  totalItems: number;
  totalPrice: number;
  setCartItems: (items: CartProduct[]) => void;
  addItem: (item: CartProduct) => void;
  removeItem: (productId: string) => void;
  updateItemQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  updateTotals: () => void;
  getItems: () => string[];
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  setCartItems: (items) => {
    set({ cartItems: items });
    get().updateTotals();
  },
  addItem: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.productId === item.productId
      );
      if (existingItem) {
        const updatedItems = state.cartItems.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { cartItems: updatedItems };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    });
    get().updateTotals();
  },
  removeItem: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.productId !== productId),
    }));
    get().updateTotals();
  },
  updateItemQuantity: (productId, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    }));
    get().updateTotals();
  },
  clear: () => {
    set({ cartItems: [] });
    get().updateTotals();
  },
  updateTotals: () => {
    const items = get().cartItems;
    const newTotalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const newTotalPrice = items.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );
    set({ totalItems: newTotalItems, totalPrice: newTotalPrice });
  },
  getItems: () => get().cartItems.map((item) => item.productId),
}));
