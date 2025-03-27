"use client";

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
import { useEffect, useState, useTransition } from "react";
import {
  clearCart as clearCartAction,
  getUserCartItems,
  removeProductFromCart,
  updateCartItemQuantity,
} from "@/lib/db/queries";
import { useRouter } from "next/navigation";

export const CartSheet = () => {
  const [cartItems, setCartItems] = useState<
    {
      productId: string;
      name: string;
      description: string | null;
      price: string;
      image: string | null;
      quantity: number;
    }[]
  >([]);
  const [isPendingRemove, startRemoveTransition] = useTransition();
  const [isPendingUpdate, startUpdateTransition] = useTransition();
  const [isPendingClear, startClearTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getUserCartItems();
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleRemoveFromCart = (productId: string) => {
    startRemoveTransition(async () => {
      await removeProductFromCart(productId);
      const updatedCart = cartItems.filter(
        (item) => item.productId !== productId
      );
      setCartItems(updatedCart);
    });
    router.refresh();
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    startUpdateTransition(async () => {
      await updateCartItemQuantity(productId, quantity);
      const updatedCart = cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
      setCartItems(updatedCart);
    });
    router.refresh();
  };

  const handleClearCart = () => {
    startClearTransition(async () => {
      await clearCartAction();
      setCartItems([]);
    });
    router.refresh();
  };

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
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <div className="text-xl font-medium">Your cart is empty</div>
            <SheetTrigger asChild>
              <Button variant="outline">Continue Shopping</Button>
            </SheetTrigger>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4 py-4">
                {cartItems.map((item) => (
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
                        <div className="font-medium">{item.name}</div>
                        <div className="font-medium">
                          ${(Number(item.price) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
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
                          disabled={item.quantity <= 1 || isPendingUpdate}
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
                          disabled={isPendingUpdate}
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
              <div className="space-y-1.5">
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
