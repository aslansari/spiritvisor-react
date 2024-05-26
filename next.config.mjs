/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/aslansari/spiritvisor/**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/wikipedia/**',
          },
          {
            protocol: 'https',
            hostname: 'cocktailclub.com',
            port: '',
            pathname: '/_next/**',
          },
        ],
      },
};

export default nextConfig;
