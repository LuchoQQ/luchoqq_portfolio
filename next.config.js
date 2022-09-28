/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
