import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/db/queries";
import { RelatedProducts } from "@/components/menu/related-products";
import { formatWord } from "@/lib/utils";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { RelatedProductsSkeleton } from "@/components/skeletons/related-products-skeleton";
import { AddToCartButton } from "@/components/menu/add-to-cart-button";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = (await params).slug;

  const product = await getProductBySlug(param);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex justify-center">
      <main className="container px-4 py-6 md:px-6 md:py-12">
        <Link
          href="/products"
          className="text-muted-foreground hover:underline flex gap-1 items-center mb-4"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Menu</span>
        </Link>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">
                {formatWord(product.name)}
              </h1>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{product.id}</Badge>
                <span className="text-xl font-semibold">
                  ${Number(product.price).toFixed(2)}
                </span>
              </div>
            </div>
            <Separator className="my-4" />

            <div className="flex flex-col gap-2 flex-1">
              <p>{product.description}</p>
            </div>

            <div className="flex justify-end">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts product={product} />
        </Suspense>
      </main>
    </div>
  );
};

export default ProductPage;
