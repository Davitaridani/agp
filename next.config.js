/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://newsapi.org/"],
  },
};

module.exports = nextConfig;
