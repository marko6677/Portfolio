/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['example.com', 'via.placeholder.com'], // Add any other domains you'll use for images
    },
    swcMinify: true,
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
    experimental: {
      optimizeCss: true,
      serverActions: true,
    },
  };

export default nextConfig;
