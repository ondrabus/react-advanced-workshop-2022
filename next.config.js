/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'assets-eu-01.kc-usercontent.com']
  },
  trailingSlash: true,
}

module.exports = nextConfig
