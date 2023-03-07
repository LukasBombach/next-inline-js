/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // rules are chained and applied bottom to top so this
    // one will modify the original sources and then let
    // next transpile everything
    config.module.rules.push({
      test: /inline-script\.(tsx|ts)$/,
      exclude: /node_modules/,
      use: "./compile-to-string-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
