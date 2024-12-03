'use client';

import { useTranslations } from 'next-intl';

type Props = {
  category: string;
  title: string;
};

export default function Intl({ category, title }: Props) {
  const t = useTranslations(category);
  return t(title);
}
