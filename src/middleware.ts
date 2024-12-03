import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
});

export const config = {
  // matcher: '/:locale*',
  matcher: ['/', '/(pt|en)/:path*'],
};
