import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

import i18nConfig from './i18next.config';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  //todo: change after DS being added
  // transpilePackages: [''],
  output: 'standalone',
  compiler: {
    reactRemoveProperties: true,
  },
  i18n: {
    locales: i18nConfig.locales,
    defaultLocale: i18nConfig.defaultLocale,
  },
};

export default withBundleAnalyzer(nextConfig);
