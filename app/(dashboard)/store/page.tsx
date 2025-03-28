import { SushiMenuSkeleton } from "@/components/skeletons/sushi-menu-skeleton";
import Navbar from "@/components/store/navbar";
import { SushiMenu } from "@/components/store/sushi-menu";
import { auth } from "@/lib/auth";
import { getCategories, getProducts } from "@/lib/db/queries";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const StorePage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  const productsPromise = getProducts();
  const categoriesPromise = getCategories();
  return (
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
  );
};

export default StorePage;
