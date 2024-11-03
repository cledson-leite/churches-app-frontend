'use client';

import { usePathname } from 'next/navigation';
import Header from '../molecules/Header';
import styles from './Main.organism.module.sass';

type MainOrganismProps = {
  children: React.ReactNode;
};

export default function MainOrganism({ children }: MainOrganismProps) {
  const path = usePathname();
  console.log(path.split('/')[-1]);
  return (
    <div className={styles.container}>
      <Header>Header</Header>
      <main>{children}</main>
    </div>
  );
}
