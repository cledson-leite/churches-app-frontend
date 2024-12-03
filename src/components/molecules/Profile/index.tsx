'use client';

import { useColapseStore, useUserStore } from '@/viewmodels/stores';

import Avatar from '@/components/atoms/Avatar';
import ProfileInfo from '../ProfileInfo';

import { Button } from '@/components/atoms/Button';
import styles from './Profile.module.sass';

export default function Profile() {
  const { name, position, avatar } = useUserStore().user;
  const { isCollapsed, setIsCollapsed } = useColapseStore();
  return (
    <div className={styles.container}>
      <Avatar imgSrc={avatar} />
      {!isCollapsed && <ProfileInfo name={name} position={position} />}
      <Button.Colapse
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
    </div>
  );
}
