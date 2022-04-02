/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
};
