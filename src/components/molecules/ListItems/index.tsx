import NavItem from '@/components/atoms/NavItem';

import { Routes } from '@/shared/Routes';
import styles from './ListItems.module.sass';

export default function ListItems() {
  return (
    <ul className={styles.container}>
      {Routes.map((route, index) => (
        <NavItem key={index} {...route} />
      ))}
    </ul>
  );
}
