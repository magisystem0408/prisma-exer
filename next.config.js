/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const path = require('path');
module.exports = {
    ...nextConfig,
    webpack(config, options) {
        config.resolve.alias['~'] = path.join(__dirname, 'src');
        return config;
    }
};

module.exports = nextConfig
