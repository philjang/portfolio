/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // no https://
    // array of domain names
    domains:['placekitten.com']
  }
}

module.exports = nextConfig
