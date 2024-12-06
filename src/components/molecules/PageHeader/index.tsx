'use client';

import Title from '@/components/atoms/Title';
import { Routes } from '@/shared/Routes';
import { usePathname } from 'next/navigation';

import styles from './PageHeader.module.sass';

export default function PageHeader() {
  const pathname = usePathname();
  const route = Routes.find(
    route => route.href === `/${pathname.split('/')[1]}`,
  );
  const title = route?.label === 'Financeiro' ? 'Dashboard' : route?.label;
  return (
    <div className={styles.container}>
      <Title>{title}</Title>
    </div>
  );
}
