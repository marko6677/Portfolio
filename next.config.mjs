// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//       domains: ['example.com', 'via.placeholder.com'], // Add any other domains you'll use for images
//     },
//     swcMinify: true,
//     compiler: {
//       // Enables the styled-components SWC transform
//       styledComponents: true,
//     },
//     experimental: {
//       optimizeCss: true,
//       serverActions: true,
//     },
//   };

// export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
  // Remove the serverActions: true setting as it's now default in Next.js 14.2.3
  experimental: {
    // Keep other experimental features
    optimizeCss: true,
  },
  // Ensure proper static HTML export
  output: 'export',
  // Resolve image loading issues
  images: {
    unoptimized: true,
  },
  // Disable eslint during build if needed
  eslint: {
    // Set to true if you want to ignore ESLint errors during production builds
    ignoreDuringBuilds: false,
  },
  // Disable type checking during build for speed if needed
  typescript: {
    // Set to true if you want to ignore TypeScript errors during production builds
    ignoreBuildErrors: false,
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
};

export default nextConfig;