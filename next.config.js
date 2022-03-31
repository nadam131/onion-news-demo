/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
};
