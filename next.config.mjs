/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://*.cdninstagram.com https://www.googletagmanager.com https://connect.facebook.net https://*.facebook.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://res.cloudinary.com https://*.cloudinary.com https://*.cdninstagram.com https://*.fbcdn.net https://www.facebook.com https://images.unsplash.com;
  font-src 'self' data: https://fonts.gstatic.com;
  frame-src 'self' https://www.instagram.com https://*.instagram.com https://www.facebook.com https://*.facebook.com;
  connect-src 'self' https://www.instagram.com https://*.cdninstagram.com https://www.google-analytics.com https://www.facebook.com https://res.cloudinary.com https://*.cloudinary.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion', '@gsap/react'],
  },
  async redirects() {
    return [
      { source: '/services/custom-software', destination: '/services/custom-software-development', permanent: true },
      { source: '/services/saas-products', destination: '/services/saas-development', permanent: true },
      { source: '/services/mobile-apps', destination: '/services/mobile-app-development', permanent: true },
      { source: '/services/e-commerce', destination: '/services/ecommerce-development', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default (phase) => ({
  ...nextConfig,
  // Keep production builds from overwriting the live development assets.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});
