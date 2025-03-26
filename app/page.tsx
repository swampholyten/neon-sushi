import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { DynamicImagesLayout } from "@/components/dynamic-image-layout";

export default function Home() {
  return (
    <div className={`min-h-screen flex items-center justify-center md:px-4`}>
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex items-center flex-col justify-between h-full">
          <div className="flex flex-col gap-16 pt-8 md:pt-0">
            <h1
              className={`text-4xl md:text-6xl font-light italic tracking-tighter leading-[130%]`}
            >
              Next Store
            </h1>
            <div
              className={`flex flex-col gap-12 text-sm font-light max-w-[300px]`}
            >
              <div className="space-y-6">
                <div className="h-px w-full" />
                <p>
                  Welcome to The Corner Nook, your neighborhood haven for
                  everyday essentials and hidden treasures. Step inside to
                  discover rows of freshly baked bread, local organic produce,
                  and hand-crafted decor that sparks conversation
                </p>
                <p>
                  The warm lighting and rustic wooden shelves create an inviting
                  atmosphere where every item tells a story. Whether you're
                  stopping by for your morning coffee or hunting for that unique
                  gift.
                </p>
                <p>
                  The Corner Nook is here to transform your everyday shopping
                  into a delightful experience.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-start items-center">
              <Link
                href="/"
                className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>
              <ModeToggle />
            </div>
          </div>
          <Link
            href="/login"
            className="inline-block px-6 py-3 border rounded-full font-medium hover:bg-foreground/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
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
