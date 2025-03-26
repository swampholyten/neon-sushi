import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    nodeMiddleware: true,
    ppr: true,
    useCache: true,
  },
};

export default nextConfig;
