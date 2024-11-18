/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async rewrites() {
      return [     
        {
          source: "/articles/:path*/",
          destination: "https://gcse-doctor.ghost.io/articles/:path*/",
        },
        {
          source: "/articles/:path*",
          destination: "https://gcse-doctor.ghost.io/articles/:path*",
        }    
      ];
    },
    async headers() {
      return [
        {
          source: "/articles/:path*",
          headers: [{ key: "x-forwarded-host", value: "articles.gcsedoctor.co.uk"}],
        }
      ];
    }
  }
  
  module.exports = nextConfig