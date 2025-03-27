"use client";

import { useRef } from "react";
import Image from "next/image";

interface ImageComponentProps {
  image: string;
  width: number | string;
  height: number | string;
  className?: string;
}

export const ImageComponent = ({
  image,
  width,
  height,
  className = "",
}: ImageComponentProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(1)`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Image
              className="w-full h-full object-cover"
              alt={"Image"}
              width={1000}
              height={1000}
              src={image}
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
