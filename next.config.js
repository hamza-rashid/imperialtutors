/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [     
        {
          source: "/blog/:path*/",
          destination: "https://gcse-doctor.ghost.io/blog/:path*/",
        },
        {
          source: "/articles/:path*",
          destination: "https://gcse-doctor.ghost.io/blog/:path*",
        }    
      ];
    },
    async headers() {
      return [
        {
          source: "/blog/:path*",
          headers: [{ key: "x-forwarded-host", value: "gcsedoctor.co.uk"}],
        }
      ];
    }
  }
  
  module.exports = nextConfig