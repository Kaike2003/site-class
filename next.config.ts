import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ["google.com", "maps.google.com"],
  },
};

export default nextConfig;
