import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatWord, nameToSlug } from "@/lib/utils";
import { Product } from "@/lib/db/schema";
import { getRelatedProducts } from "@/lib/db/queries";

export const RelatedProducts = async ({ product }: { product: Product }) => {
  const products = await getRelatedProducts(product.categoryId!, product.id);

  if (!products.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${nameToSlug(product.name)}`}
            className="group block space-y-3"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{product.id}</Badge>
                <span className="font-semibold">
                  ${Number(product.price).toFixed(2)}
                </span>
              </div>
              <h3 className="text-lg font-medium">
                {formatWord(product.name)}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
