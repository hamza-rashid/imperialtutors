/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [     
        {
          source: "/blog/:path*/",
          destination: "https://gcse-doctor.ghost.io/:path*/",
        },
        {
          source: "/blog/:path*",
          destination: "https://gcse-doctor.ghost.io/:path*",
        }    
      ];
    },
    async headers() {
      return [
        {
          source: "/blog/:path*",
          headers: [{ key: "x-forwarded-host", value: "gcsedoctor.co.uk/blog"}],
        }
      ];
    }
  }
  
  module.exports = nextConfig