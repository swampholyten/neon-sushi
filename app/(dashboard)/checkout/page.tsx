import { Suspense } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/menu/order-summary";
import { Separator } from "@/components/ui/separator";
import { Basket } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <main className="w-full px-4 py-6 md:px-6 md:py-12 flex-1">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="text-muted-foreground">Complete your order</p>
          </div>
          <div className="bg-accent h-1/2 text-center">
            <Button variant={"outline"} className="h-full">
              <Link
                href="/products"
                className="text-sm font-medium flex gap-2 items-center justify-center"
              >
                <Basket size={24} />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <Separator />

        <div className="grid gap-8 lg:grid-cols-2">
          <Suspense fallback={<CheckoutFormSkeleton />}>
            <CheckoutForm />
          </Suspense>

          <Suspense fallback={<OrderSummarySkeleton />}>
            <OrderSummary />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

function CheckoutFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

function OrderSummarySkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-5 w-40" />
      <div className="space-y-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex justify-between gap-4">
              <div className="flex gap-4">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
}
