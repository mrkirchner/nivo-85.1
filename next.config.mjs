/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: ["@nivo"], // https://github.com/plouc/nivo/issues/2310
};

export default nextConfig;
