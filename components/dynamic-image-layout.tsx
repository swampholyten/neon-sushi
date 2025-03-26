"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageComponent } from "@/components/image-component";

interface Frame {
  id: number;
  image: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  isHovered: boolean;
}

const frames: Frame[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1741807083060-39c641cd97fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1742293603913-a61164108169?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWluaW1hbGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1491406213019-05b162a72c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1576858978851-fadc54c3c0dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1546098073-e1df70b3bc7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1467139840664-96b244a66825?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    isHovered: false,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1524369609384-10ce89e42d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
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
