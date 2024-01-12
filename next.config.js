/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com", "image.tmdb.org", "encrypted-tbn0.gstatic.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'drive.google.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ], 
  },
}

module.exports = nextConfig
