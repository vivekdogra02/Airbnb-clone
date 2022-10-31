/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com"],
  },
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
};
