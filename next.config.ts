import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
    ppr: true,
  },
};

export default nextConfig;
