/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'localhost'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 