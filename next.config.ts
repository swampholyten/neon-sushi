import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
    ppr: true,
    useCache: true,
  },
};

export default nextConfig;
