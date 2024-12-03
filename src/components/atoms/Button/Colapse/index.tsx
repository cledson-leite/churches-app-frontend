'use client';

import { useColapseStore } from '@/viewmodels/stores';

import { Icons } from '../../Icons';

import styles from './Colapse.module.sass';

export default function Colapse() {
  const { isCollapsed, setIsCollapsed } = useColapseStore();
  return (
    <button
      className={styles.colapseBtn}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      {isCollapsed ? (
        <Icons.Chevron.Right className={styles.icon} />
      ) : (
        <Icons.Chevron.Left className={styles.icon} />
      )}
    </button>
  );
}
