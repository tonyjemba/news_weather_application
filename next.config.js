/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ichef.bbci.co.uk"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  
}

module.exports = nextConfig
