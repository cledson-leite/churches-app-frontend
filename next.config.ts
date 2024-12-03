import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./src/shared/I18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  pageExtensions: [
        "page.tsx",
        "page.ts",
        "ts"
    ],
};

export default withNextIntl(nextConfig);
