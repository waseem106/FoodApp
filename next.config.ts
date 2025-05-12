import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['w7.pngwing.com','res.cloudinary.com'],
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
