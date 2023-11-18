/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.iabilet.ro",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
