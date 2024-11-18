/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [     
        {
          source: "/blog/:path*/",
          destination: "https://articles.ghost.io/blog/:path*/",
        },
        {
          source: "/blog/:path*",
          destination: "https://articles.ghost.io/blog/:path*",
        }    
      ];
    },
    async headers() {
      return [
        {
          source: "/blog/:path*",
          headers: [{ key: "x-forwarded-host", value: "gcsedoctor.co.uk" }],
        }
      ];
    }
  }
  
  module.exports = nextConfig