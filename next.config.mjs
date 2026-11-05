/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.simplotel.com",
      },
      {
        protocol: "https",
        hostname: "anantahotels.com",
      },
      {
        protocol: "https",
        hostname: "www.anantahotels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/the-ananta-udaipur",
        destination: "/properties/the-ananta-udaipur",
      },
      {
        source: "/ananta-spa-resort-pushkar",
        destination: "/properties/ananta-spa-resort-pushkar",
      },
      {
        source: "/ananta-spa-resort-ajabgarh",
        destination: "/properties/ananta-spa-resort-ajabgarh",
      },
      {
        source: "/ananta-spa-resort-jaipur",
        destination: "/properties/ananta-spa-resort-jaipur",
      },
    ];
  },
};

export default nextConfig;
