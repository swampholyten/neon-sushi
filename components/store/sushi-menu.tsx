"use client";

import { useState, use, useRef, useMemo, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component"; // Import the library

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
import { formatWord, nameToSlug } from "@/lib/utils";
import debounce from "lodash.debounce";
import { DEBOUNCE_TIME } from "@/lib/constants";
import Link from "next/link";

interface CategoryHeader {
  type: "category";
  id: string;
  name: string;
  productCount: number; // Keep track for badge, might be useful
}

interface ProductItem {
  type: "product";
  product: Product;
}

type MenuItem = CategoryHeader | ProductItem;

const ITEMS_PER_PAGE = 12; // Number of products (or combined items) to load per scroll

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
  const [displayedItems, setDisplayedItems] = useState<MenuItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const debouncedAddProductRef = useRef(
    debounce(async (product: Product) => {
      try {
        await addProductToCart(product);
      } catch (error) {
        console.error("Debounced add product to cart failed:", error);
      }
    }, DEBOUNCE_TIME)
  );

  const filteredProducts = useMemo(() => {
    if (filter === "all") {
      return products;
    }
    const lowerCaseFilter = filter.toLowerCase();
    return products.filter((product) => {
      const category = categories.find((c) => c.id === product.categoryId);
      return category?.name.toLowerCase() === lowerCaseFilter;
    });
  }, [products, categories, filter]);

  // Create a single list containing category headers and their products
  const allItems: MenuItem[] = useMemo(() => {
    const items: MenuItem[] = [];
    categories.forEach((category) => {
      const categoryProducts = filteredProducts.filter(
        (product) => product.categoryId === category.id
      );

      if (categoryProducts.length > 0) {
        // Add category header
        items.push({
          type: "category",
          id: category.id,
          name: category.name,
          productCount: categoryProducts.length,
        });
        // Add products under this category
        categoryProducts.forEach((product) => {
          items.push({ type: "product", product });
        });
      }
    });
    return items;
  }, [categories, filteredProducts]);

  // When the filter changes (and thus `allItems` changes), reset the displayed items
  useEffect(() => {
    const initialItems = allItems.slice(0, ITEMS_PER_PAGE);
    setDisplayedItems(initialItems);
    setHasMore(allItems.length > ITEMS_PER_PAGE);
    setPage(1);
  }, [allItems]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    // Use setTimeout to prevent potential batching issues and simulate loading
    setTimeout(() => {
      const nextItems = allItems.slice(start, end);
      setDisplayedItems((prevItems) => [...prevItems, ...nextItems]);
      setHasMore(end < allItems.length);
      setPage(nextPage);
    }, 500); // Small delay to show loader, adjust as needed
  };

  // --- Event Handlers ---
  const handleAddToCart = (product: Product) => {
    // Optimistic UI update
    addItem({
      productId: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      image: product.image,
      quantity: 1,
    });

    toast.success(`${formatWord(product.name)} has been added to your cart.`);

    debouncedAddProductRef.current(product);
  };

  // --- Render Logic ---
  const renderItem = (item: MenuItem, index: number) => {
    if (item.type === "category") {
      // Use the flat `allItems` (Category Header + Products) structure and render conditionally.
      // This seems best for infinite scroll.
      // We need to adjust the rendering *inside* the map.
      return (
        <div
          key={`cat-${item.id}-${index}`}
          className="col-span-full space-y-4 pt-6 first:pt-0"
        >
          <div className="flex items-center gap-2">
            <h4 className="text-xl font-semibold">{formatWord(item.name)}</h4>
            <Badge variant="outline">{item.productCount}</Badge>
          </div>
        </div>
      );
    } else if (item.type === "product") {
      const product = item.product;
      return (
        <Card
          key={`prod-${product.id}-${index}`}
          className="overflow-hidden flex flex-col"
        >
          <Link href={`/store/${nameToSlug(product.name)}`}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="aspect-square object-cover w-full"
            />
            <CardContent className="p-4 flex-grow">
              <h5 className="font-semibold">{formatWord(product.name)}</h5>
              <p className="text-sm text-gray-500 line-clamp-2">
                {product.description}
              </p>
            </CardContent>
          </Link>
          <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto">
            <span className="font-semibold">${product.price}</span>
            <Button onClick={() => handleAddToCart(product)} size="sm">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Our Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Filter: {filter === "all" ? "All Categories" : formatWord(filter)}
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

      {/* --- Infinite Scroll Area --- */}
      <InfiniteScroll
        dataLength={displayedItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="col-span-full text-center py-4">
            <p>Loading more sushi...</p>
          </div>
        }
        endMessage={
          <div className="col-span-full text-center pt-4 text-gray-500">
            <p>You've reached the end of the menu!</p>
          </div>
        }
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {displayedItems.map(renderItem)}
      </InfiniteScroll>

      {allItems.length === 0 && filter !== "all" && (
        <div className="text-center py-10 text-gray-500">
          <p>No products found in the "{formatWord(filter)}" category.</p>
        </div>
      )}
      {allItems.length === 0 && filter === "all" && products.length > 0 && (
        <div className="text-center py-10 text-gray-500">
          <p>Something went wrong, no items to display.</p>
        </div>
      )}
      {products.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <p>The menu is currently empty.</p>
        </div>
      )}
    </div>
  );
}
