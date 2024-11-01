import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.sass';
import Providers from './providers';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Churches App',
  description: 'Tecnologia aplicada a obra para o Espirito Santo guia a fé',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
