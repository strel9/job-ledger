/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: {
  //   domains: ['job-ledger-backend.onrender.com']
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'job-ledger-backend.onrender.com',
        pathname: '/media/logos/**'
      }
    ]
  }
}

module.exports = nextConfig
