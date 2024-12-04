'use client';

import { Routes } from '@/shared/Routes';
import { usePathname } from 'next/navigation';
import styles from './Header.module.sass';
import Title from '@/components/atoms/Title';
import NavHeader from '@/components/molecules/NavHeader';

export default function Header() {
  const pathname = usePathname();
  const route = Routes.find(
    route => route.href === `/${pathname.split('/')[1]}`,
  );
  return (
    <header className={styles.container}>
      <Title>{route?.label}</Title>
      <NavHeader routes={route?.subItems || []} />
    </header>
  );
}
