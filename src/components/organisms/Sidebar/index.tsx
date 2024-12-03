'use client';

import Profile from '@/components/molecules/Profile';
import { useColapseStore } from '@/viewmodels/stores';
import styles from './Sidebar.module.sass';

export default function Sidebar() {
  const { isCollapsed } = useColapseStore();
  return (
    <div className={`${styles.sidebar} ${isCollapsed && styles.collapsed}`}>
      <Profile />
      <div className={styles.sidebarContents}>
        {/* <ListLinks /> */}
        {/* <MenuFooter /> */}
      </div>
    </div>
  );
}
