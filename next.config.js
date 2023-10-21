const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakeimg.pl', 'cdn.sanity.io'],
    dangerouslyAllowSVG: true,
  },
  compiler: {
    removeConsole: !isDev,
  },
}

module.exports = nextConfig
