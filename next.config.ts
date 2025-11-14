import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://71bzg7q54l.ufs.sh/f/**')],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
