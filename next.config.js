/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
