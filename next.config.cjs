/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myikas.com',
        port: '',
        pathname: '/',
      },
    ],
  },
}

module.exports = nextConfig

import withImages from 'next-images';
module.exports = withImages({
  esModule: true,
  images: {
    domains: ['cdn.voiddevs.org'],
  },
});