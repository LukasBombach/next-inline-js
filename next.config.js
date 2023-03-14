/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.unshift({
      test: /\.inline-script\.(tsx|ts)$/,
      use: "./compile-to-string-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
