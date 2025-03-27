import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { CartSheet } from "@/components/store/cart-sheet";
import { SearchButton } from "@/components/store/search-button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCategories, getProducts } from "@/lib/db/queries";
import { Suspense } from "react";
import { MenuToggle } from "@/components/menu/menu";

const Navbar = () => {
  const productsPromise = getProducts();
  const categoriesPromise = getCategories();

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="size-8 relative">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
          <h1 className="text-xl tracking-tighter sm:text-2xl">Neon Sushi</h1>
        </div>

        <div className="flex items-center gap-4">
          <Suspense fallback={<Skeleton />}>
            <SearchButton
              productsPromise={productsPromise}
              categoriesPromise={categoriesPromise}
            />
          </Suspense>
          <MenuToggle />
          <ModeToggle />
          <CartSheet />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
