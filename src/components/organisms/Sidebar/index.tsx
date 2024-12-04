'use client';

import Profile from '@/components/molecules/Profile';
import { useColapseStore } from '@/viewmodels/stores';
import styles from './Sidebar.module.sass';
import NavItem from '@/components/atoms/NavItem';
import ListItems from '@/components/molecules/ListItems';
import MenuFooter from '@/components/molecules/MenuFooter';

export default function Sidebar() {
  const { isCollapsed } = useColapseStore();
  return (
    <div className={`${styles.sidebar} ${isCollapsed && styles.collapsed}`}>
      <Profile />
      <div className={styles.sidebarContents}>
        <ListItems />
        <MenuFooter />
      </div>
    </div>
  );
}
