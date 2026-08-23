import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
