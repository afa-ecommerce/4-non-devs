/** @type {import('next').NextConfig} */
const nextConfigWitNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = nextConfigWitNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'docs.github.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
})
