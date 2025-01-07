/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  basePath: '/your-repo-name', // Add this if you're not using a custom domain
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig