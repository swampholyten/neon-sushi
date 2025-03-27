"use client";

import { useState, use, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Category, Product } from "@/lib/db/schema";
import { addProductToCart } from "@/lib/db/queries";
import { useCart } from "@/components/providers/cart-provider";
import { formatWord } from "@/lib/utils";
import debounce from "lodash.debounce";

interface SushiMenuProps {
  productsPromise: Promise<Product[]>;
  categoriesPromise: Promise<Category[]>;
}

export function SushiMenu({
  productsPromise,
  categoriesPromise,
}: SushiMenuProps) {
  const products = use(productsPromise);
  const categories = use(categoriesPromise);
  const { addItem } = useCart((state) => ({ addItem: state.addItem }));

  const [filter, setFilter] = useState("all");

  const debouncedAddProductRef = useRef(
    debounce(async (product: Product) => {
      try {
        await addProductToCart(product);
      } catch (error) {
        console.error("Add product to cart failed:", error);
      }
    }, 1000)
  );

  const handleAddToCart = async (product: Product) => {
    addItem({
      productId: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });

    toast.success(`${product.name} has been added to your cart.`);

    debouncedAddProductRef.current(product);
  };

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => {
          const category = categories.find((c) => c.id === product.categoryId);
          return category?.name.toLowerCase() === filter.toLowerCase();
        });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Our Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Filter by
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
              <DropdownMenuRadioItem value="all">
                All Categories
              </DropdownMenuRadioItem>
              {categories.map((category) => (
                <DropdownMenuRadioItem
                  key={category.id}
                  value={category.name.toLowerCase()}
                >
                  {formatWord(category.name)}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {categories.map((category) => {
        const categoryProducts = filteredProducts.filter(
          (product) => product.categoryId === category.id
        );

        // Skip rendering empty categories when filtering
        if (filter !== "all" && categoryProducts.length === 0) {
          return null;
        }

        return (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-2">
              <h4 className="text-xl font-semibold">
                {formatWord(category.name)}
              </h4>
              <Badge variant="outline">{categoryProducts.length}</Badge>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="aspect-square object-cover w-full"
                  />
                  <CardContent className="p-4">
                    <h5 className="font-semibold">
                      {formatWord(product.name)}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="font-semibold">${product.price}</span>
                    <Button
                      onClick={async () => await handleAddToCart(product)}
                      size="sm"
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
