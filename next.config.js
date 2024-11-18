/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [
        {
          source: "/articles/:path*/",
          destination: "https://gcse-doctor.ghost.io/:path*/",
          
        },
        {
          source: "/articles/:path*",
          destination: "https://gcse-doctor.ghost.io/:path*",
        },
      ];
    },
    async headers() {
      return [
        {
          source: "/articles/:path*",
          headers: [
            { key: "x-forwarded-host", value: "gcsedoctor.co.uk" },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  