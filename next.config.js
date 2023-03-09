/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /stylesheet\.ts$/i,
      use: ["./a-pitching-loader.js"],
      type: "asset/source", // we set type to 'asset/source' as the loader will return a string
    });

    return config;
  },
};

module.exports = nextConfig;
