"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
import { CreditCard, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getUserCartItems } from "@/lib/db/queries";

// const stripePromise = loadStripe("pk_test_your_publishable_key");

interface StripeCheckoutButtonProps {
  total: number;
  disabled?: boolean;
}

export function StripeCheckoutButton({
  total,
  disabled = false,
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    const cartItems = await getUserCartItems();

    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    setIsLoading(true);

    try {
      // In a real application, you would:
      // 1. Send the cart data to your server
      // 2. Create a Stripe Checkout Session on the server
      // 3. Redirect to the Stripe Checkout page

      // Example of what the server request would look like:
      // const response = await fetch('/api/create-checkout-session', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     items: cart.map(item => ({
      //       id: item.id,
      //       name: item.name,
      //       price: item.price,
      //       quantity: item.quantity,
      //     })),
      //   }),
      // })
      // const { sessionId } = await response.json()

      // Simulate API call to create checkout session
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // This would normally come from your server
      const sessionId =
        "cs_test_" + Math.random().toString(36).substring(2, 15);

      // Get Stripe.js instance
      //   const stripe = await stripePromise;

      // Redirect to Stripe Checkout
      //   if (stripe) {
      //     // In a real app, you would use the actual session ID from your server
      //     // const { error } = await stripe.redirectToCheckout({ sessionId })

      //     // For demo purposes, we'll just simulate success
      //     router.push("/checkout/success");
      //   }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error(
        "There was an error processing your payment. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="w-full"
      size="lg"
      onClick={handleCheckout}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-5 w-5" />
          Pay ${total.toFixed(2)} with Stripe
        </>
      )}
    </Button>
  );
}
