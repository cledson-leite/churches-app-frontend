'use client';

import pt from '@/shared/I18n/locales/pt.json';
import { NextIntlClientProvider, useLocale } from 'next-intl';

export default function Providers({ children }: { children: React.ReactNode }) {
  const locales = {
    pt: { ...pt },
  };
  const timeZone = 'America/Sao_Paulo';
  const locale = useLocale();
  const messages = locales[locale];
  return (
    <NextIntlClientProvider
      timeZone={timeZone}
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
}
