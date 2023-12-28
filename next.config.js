/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "placehold.co",
      },
      {
        hostname: "img.youtube.com",
      },
    ],
  },
};

module.exports = nextConfig;
