/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [
        {
          source: "/blog/:path*/",
          destination: "https://blog.gcsedoctor.co.uk/:path*/", // Replace with your Ghost subdomain
        },
        {
          source: "/blog/:path*",
          destination: "https://blog.gcsedoctor.co.uk/:path*", // Replace with your Ghost subdomain
        },
      ];
    },
    async headers() {
      return [
        {
          source: "/blog/:path*",
          headers: [
            { key: "x-forwarded-host", value: "gcsedoctor.co.uk" }, // Replace with your custom domain
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  