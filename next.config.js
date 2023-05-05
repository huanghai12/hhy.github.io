/** @type {import('next').NextConfig} */
const securityHeaders = [];
const nextConfig = {
  reactStrictMode: true,
  headers: securityHeaders,
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
