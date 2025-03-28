"use client";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/components/providers/cart-provider";
import { StripeCheckoutButton } from "@/components/checkout/stripe-checkout-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatWord } from "@/lib/utils";

export function OrderSummary() {
  const { cart, totalPrice } = useCart((state) => ({
    cart: state.cartItems,
    totalPrice: state.totalPrice,
  }));

  // Calculate order details
  const subtotal = totalPrice;
  const shipping = 5.0;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <p className="text-sm text-muted-foreground">
          Review your order before payment
        </p>
      </div>

      <div className="space-y-4">
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <ScrollArea className="h-[400px]">
            {cart.map((item) => (
              <div key={item.productId} className="flex justify-between mb-4">
                <div className="flex gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={formatWord(item.name)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs md:text-sm">
                    <p className="font-medium">{formatWord(item.name)}</p>
                    <p className="text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </ScrollArea>
        )}
      </div>

      <Separator />

      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-muted-foreground">Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Shipping</p>
          <p>${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Tax (8%)</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>

      <StripeCheckoutButton total={total} disabled={cart.length === 0} />

      <div className="text-center text-xs text-muted-foreground">
        <p>Secure payment processing by Stripe</p>
        <p>You will be redirected to Stripe to complete your payment</p>
      </div>
    </div>
  );
}
