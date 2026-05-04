import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/otdelka", destination: "/coming-soon/otdelka", permanent: true },
      { source: "/tekhnologii", destination: "/coming-soon/tekhnologii", permanent: true },
      { source: "/ipoteka", destination: "/coming-soon/ipoteka", permanent: true },
      { source: "/portfolio", destination: "/coming-soon/portfolio", permanent: true },
      { source: "/kalkulyator", destination: "/coming-soon/kalkulyator", permanent: true },
    ];
  },
};

export default nextConfig;
