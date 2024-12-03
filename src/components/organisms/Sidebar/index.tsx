'use client'

import Profile from '@/components/molecules/Profile';
import  styles from './Sidebar.module.sass'
import { useColapseStore } from '@/viewmodels/stores';

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