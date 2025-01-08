/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  // No basePath needed for username.github.io repos
}

module.exports = nextConfig