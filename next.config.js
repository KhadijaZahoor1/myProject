
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ enables static export for App Router
  images: {
    domains: ["i.dummyjson.com"],
  },
  basePath: '/myProject',     // 👈 replace with your repo name
  assetPrefix: '/myProject/',
};

module.exports = nextConfig;
