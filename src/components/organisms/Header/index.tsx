'use client';

import Title from '@/components/atoms/Title';
import NavHeader from '@/components/molecules/NavHeader';
import { Routes } from '@/shared/Routes';
import { usePathname } from 'next/navigation';
import styles from './Header.module.sass';

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
