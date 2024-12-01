import type { NextConfig } from "next";
import Home from "./app/(app)/home/page";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Redirect from the root URL
        destination: "/home", // Replace "/home" with the path to your custom homepage
        permanent: true, // Indicates this is a permanent redirect (use `false` for temporary redirects)
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during builds
  },
  /* Add other config options here if needed */
};

export default nextConfig;
