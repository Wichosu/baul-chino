import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig);
