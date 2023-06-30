/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mysql"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig