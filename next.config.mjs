/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  webpack: (config) => {
    config.target = 'electron-renderer';
    return config;
  },
};

export default nextConfig;
