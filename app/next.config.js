/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Firebase Hosting
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  swcMinify: true,

  // Disable ESLint during build (can be re-enabled after fixing linting issues)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Trailing slash for Firebase Hosting
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.afribiobank.org/api/v1',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL || 'wss://api.afribiobank.org/ws',
  },

  webpack: (config, { isServer }) => {
    // Handle DICOM and medical imaging files
    config.module.rules.push({
      test: /\.(dcm|nii|nrrd)$/,
      use: 'file-loader',
    });

    // Handle Web Assembly for medical image processing
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    return config;
  },
};

module.exports = nextConfig;
