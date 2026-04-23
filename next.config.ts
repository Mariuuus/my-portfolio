import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  images: {
    unoptimized: true, 
  },
  turbopack: {},
};

export default nextConfig;
