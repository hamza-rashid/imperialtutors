/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [
        {
          source: "/articles/:path*/",
          destination: "https://articles.gcsedoctor.co.uk/:path*/",
        },
        {
          source: "/articles/:path*",
          destination: "https://articles.gcsedoctor.co.uk/:path*",
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
  