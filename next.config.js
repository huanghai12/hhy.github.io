/** @type {import('next').NextConfig} */
const securityHeaders = [];
const nextConfig = {
  reactStrictMode: true,
  headers: securityHeaders,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  webpack5: true,
}

module.exports = nextConfig
