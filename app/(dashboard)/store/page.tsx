import { SushiMenuSkeleton } from "@/components/skeletons/sushi-menu-skeleton";
import Navbar from "@/components/store/navbar";
import { SushiMenu } from "@/components/store/sushi-menu";
import { getCategories, getProducts } from "@/lib/db/queries";
import { Suspense } from "react";

const StorePage = () => {
  const productsPromise = getProducts();
  const categoriesPromise = getCategories();
  return (
    <div>
      <Navbar />
      <main className="px-4 py-6 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Fresh & Delicious Sushi
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed">
              Browse our menu and order your favorite sushi for delivery or
              pickup.
            </p>
          </div>
          <Suspense fallback={<SushiMenuSkeleton />}>
            <SushiMenu
              productsPromise={productsPromise}
              categoriesPromise={categoriesPromise}
            />
          </Suspense>
        </div>
      </main>
      <footer className="border-t">
        <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:gap-8 md:px-6 md:py-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Neon Sushi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorePage;
