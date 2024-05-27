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
          {
            protocol: 'https',
            hostname: 'mintandtwist.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'www.acouplecooks.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i0.wp.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
