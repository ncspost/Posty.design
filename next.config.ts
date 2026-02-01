import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages (repo name)
  // Remove this if using a custom domain
  basePath: process.env.NODE_ENV === "production" ? "/Posty.design" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Posty.design" : "",
};

export default nextConfig;
