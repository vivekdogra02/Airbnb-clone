/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com"],
  },
  env: {
    mapbox_key: process.env.MAPBOX_KEY,
  },
};
