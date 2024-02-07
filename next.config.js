/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.remotual.com',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
