export default function request(locale: string) {
  return {
    locale,
    messages: require(`./locales/${locale}.json`).default,
    defaultLocale: 'pt',
  };
}
