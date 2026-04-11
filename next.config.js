/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  trailingSlash: false,
  images: {
    domains: ['www.retrogames.cc'],
  },
};

module.exports = nextConfig;
