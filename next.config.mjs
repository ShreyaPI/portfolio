/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio", // Add this to match your repository name
  images: {
    unoptimized: true, // Required for static exports to GitHub Pages
  },
};

export default nextConfig;
