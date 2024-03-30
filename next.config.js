/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.remotual.com",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'salesdeck.c10oc6moksyd.us-east-1.rds.amazonaws.com',
        port: '3306',
      },
    ],
  },
};

module.exports = nextConfig;
