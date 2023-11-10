const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {hostname: 'media.graphassets.com'}
    ],
    dangerouslyAllowSVG: true,
  },
  compiler: {
    removeConsole: !isDev,
  },
}

module.exports = nextConfig
