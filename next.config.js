/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'http2.mlstatic.com',
      'th.bing.com',
      'logodownload.org',
      'raw.githubusercontent.com'
    ]
  }
};

module.exports = nextConfig;
