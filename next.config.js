/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'assets-eu-01.kc-usercontent.com']
  },
  i18n: {
    locales: ['en-US', 'cs-CZ', 'de-AT'],
    defaultLocale: 'en-US'
    // prefixing default locale: https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
  },
  trailingSlash: true,
}

module.exports = nextConfig
