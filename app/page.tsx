import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { DynamicImagesLayout } from "@/components/landing/dynamic-image-layout";
import { MenuToggle } from "@/components/menu/menu";

export default function Home() {
  return (
    <div className={`min-h-screen flex items-center justify-center md:px-4`}>
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[400px] flex-shrink-0 flex items-center flex-col justify-between h-full">
          <div className="flex flex-col gap-4 md:gap-16 justify-around pt-8 md:pt-0">
            <h1
              className={`text-5xl md:text-6xl font-light italic tracking-tighter leading-[130%]`}
            >
              Next Store
            </h1>
            <div
              className={`flex flex-col gap-12 text-sm md:text-base font-light max-w-[300px]`}
            >
              <div className="space-y-6">
                <div className="h-px w-full" />
                <p>
                  Welcome to Neon Sushi, an elegant sanctuary where the art of
                  Japanese cuisine meets modern dining. Step into our serene
                  space adorned with minimalist décor, warm bamboo elements, and
                  the rhythmic precision of our master sushi chefs.
                </p>
                <p>
                  The soft ambient lighting and polished wooden counters create
                  an intimate atmosphere where each dish is a masterpiece.
                  Whether you're here for our premium nigiri selection or
                  exploring our extensive all-you-can-eat menu.
                </p>
                <p>
                  Neon Sushi invites you to immerse yourself in an unlimited
                  journey of flavors, where traditional meets contemporary in
                  every carefully crafted bite.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-start items-center">
              <Link
                href="/"
                className="size-9 relative opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/icon.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>
              <MenuToggle />
              <ModeToggle />
            </div>
          </div>
          <Link
            href="/store"
            className="inline-block px-6 py-3 border rounded-full font-medium hover:bg-foreground/5 transition-colors text-center w-full max-w-[260px] text-sm mt-8"
          >
            Start
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[90vh]">
          <DynamicImagesLayout />
        </div>
      </div>
    </div>
  );
}
