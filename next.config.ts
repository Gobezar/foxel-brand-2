import type { NextConfig } from 'next';

module.exports = {
  webpack: (config: NextConfig) => {
    config.resolve.modules.push('./src');
    return config;
  },
  reactStrictMode: false,
};

const nextConfig: NextConfig = {
  compiler: {
  },
};

export default nextConfig;