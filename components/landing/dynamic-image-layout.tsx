"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageComponent } from "@/components/landing/image-component";

interface Frame {
  id: number;
  image: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  isHovered: boolean;
}

const frames: Frame[] = [
  {
    id: 1,
    image: "/sushi/nigiri.jpeg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 2,
    image: "/sushi/uramaki.jpeg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 3,
    image: "/sushi/tempura.jpeg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 4,
    image: "/sushi/sashimi.jpeg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 5,
    image: "/sushi/onigiri.jpeg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 6,
    image: "/sushi/cantonese_rise.jpeg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 7,
    image: "/sushi/chirashi.jpeg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 8,
    image: "/sushi/soup.jpeg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 9,
    image: "/sushi/temaki.jpeg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    isHovered: false,
  },
];

export const DynamicImagesLayout = () => {
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null
  );
  const hoverSize = 6;
  const gapSize = 4;

  const getRowSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr";
    }
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr";
    }
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom";
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div className="space-y-4 w-full h-full">
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition:
            "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4);
          const col = Math.floor(frame.defaultPos.x / 4);
          const transformOrigin = getTransformOrigin(
            frame.defaultPos.x,
            frame.defaultPos.y
          );

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <ImageComponent
                image={frame.image}
                width="100%"
                height="100%"
                className="absolute inset-0"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
