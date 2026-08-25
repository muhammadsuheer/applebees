import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/menu/catering',
        destination: '/catering',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
