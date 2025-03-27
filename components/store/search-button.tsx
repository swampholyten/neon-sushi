"use client";

import { use, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { toast } from "sonner";
import { Category, Product } from "@/lib/db/schema";
import { addProductToCart } from "@/lib/db/queries";

export const SearchButton = ({
  productsPromise,
  categoriesPromise,
}: {
  productsPromise: Promise<Product[]>;
  categoriesPromise: Promise<Category[]>;
}) => {
  const [open, setOpen] = useState(false);

  const products = use(productsPromise);
  const categories = use(categoriesPromise);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleAddToCart = async (product: Product) => {
    await addProductToCart(product);

    toast.success(`${product.name} has been added to your cart.`);

    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for sushi..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {categories.map((category) => (
            <CommandGroup key={category.id} heading={category.name}>
              {products
                .filter((product) => product.categoryId === category.id)
                .map((product) => (
                  <CommandItem
                    key={product.id}
                    onSelect={async () => await handleAddToCart(product)}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <span>{product.name}</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        ${product.price}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Add to cart
                    </span>
                  </CommandItem>
                ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
