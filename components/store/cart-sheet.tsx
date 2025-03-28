"use client";

import { useRef, useEffect, useTransition } from "react";
import debounce from "lodash.debounce";
import { useCart } from "@/components/providers/cart-provider";
import {
  updateCartItemQuantity,
  removeProductFromCart,
  clearCart as clearCartAction,
  getUserCartItems,
} from "@/lib/db/queries";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Fish } from "@phosphor-icons/react";
import { formatWord } from "@/lib/utils";

export const CartSheet = () => {
  const {
    cart,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
    clearCart,
    setCartItems,
  } = useCart((state) => ({
    cart: state.cartItems,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
    addItem: state.addItem,
    removeFromCart: state.removeItem,
    updateQuantity: state.updateItemQuantity,
    clearCart: state.clear,
    setCartItems: state.setCartItems,
  }));

  const [isPendingRemove, startRemoveTransition] = useTransition();
  const [isPendingClear, startClearTransition] = useTransition();

  const debouncedUpdateRef = useRef(
    debounce(async (productId: string, quantity: number) => {
      try {
        await updateCartItemQuantity(productId, quantity);
        // updateQuantity(productId, quantity);
      } catch (error) {
        console.error("Update failed:", error);
      }
    }, 1000)
  );

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);

    debouncedUpdateRef.current(productId, quantity);
  };

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
    startRemoveTransition(async () => {
      await removeProductFromCart(productId);
    });
  };

  const handleClearCart = () => {
    startClearTransition(async () => {
      await clearCartAction();
      clearCart();
    });
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getUserCartItems();
      setCartItems(
        items.map((item) => ({
          productId: item.productId,
          name: item.name,
          description: item.description,
          price: Number(item.price),
          image: item.image,
          quantity: item.quantity,
        }))
      );
    };

    fetchCartItems();
  }, [setCartItems]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md gap-0 text-xs md:text-sm justify-evenly">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-start items-center gap-4">
              <div className="size-8 relative">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl">Your Cart</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <div className="text-xl font-medium">Your cart is empty</div>
            <SheetTrigger asChild>
              <Button variant="outline">Continue Shopping</Button>
            </SheetTrigger>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[75%] px-4">
              <div className="space-y-4 py-4">
                {cart.map((item) => (
                  <div key={item.productId} className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <div className="font-medium">
                          {formatWord(item.name)}
                        </div>
                        <div className="font-medium">
                          ${(Number(item.price) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-muted-foreground">
                        ${Number(item.price).toFixed(2)} each
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            handleUpdateQuantity(
                              item.productId,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            handleUpdateQuantity(
                              item.productId,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto"
                          onClick={() => handleRemoveFromCart(item.productId)}
                          disabled={isPendingRemove}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 px-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>$5.00</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>${(totalPrice + 5).toFixed(2)}</span>
                </div>
              </div>
              <SheetFooter className="flex flex-col gap-2 sm:flex-col">
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearCart}
                  disabled={isPendingClear}
                >
                  Clear Cart
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
