/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Ensures that URLs have a trailing slash
    async rewrites() {
      return [
        {
          source: "/blog/:path*/", // Handles trailing slash versions
          destination: "https://gcse-doctor.ghost.io/blog/:path*/",
        },
        {
          source: "/blog/:path*", // Handles non-trailing slash versions
          destination: "https://gcse-doctor.ghost.io/blog/:path*",
        },
      ];
    },
    async headers() {
      return [
        {
          source: "/blog/:path*", // Adds custom headers to blog requests
          headers: [
            {
              key: "x-forwarded-host",
              value: "articles.gcsedoctor.co.uk", // Replace with your desired subdomain
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  