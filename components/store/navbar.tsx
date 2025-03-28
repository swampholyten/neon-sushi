import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { CartSheet } from "@/components/store/cart-sheet";
import { SearchButton } from "@/components/store/search-button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCategories, getProducts } from "@/lib/db/queries";
import { Suspense } from "react";
import { MenuToggle } from "@/components/menu/menu-toggle";
import SignOutButton from "@/components/auth/sign-out-button";
import Link from "next/link";

const Navbar = () => {
  const productsPromise = getProducts();
  const categoriesPromise = getCategories();

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <div className="size-9 relative">
              <Image
                src="/icon.png"
                alt="Logo"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </Link>
          <h1 className="text-xl tracking-tighter sm:text-2xl hidden md:block cursor-default items-end">
            Neon Sushi
          </h1>
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
          <SignOutButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
