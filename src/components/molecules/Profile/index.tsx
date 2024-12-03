'use client'

import { useColapseStore, useUserStore } from '@/viewmodels/stores';

import Avatar from '@/components/atoms/Avatar';
import ProfileInfo from '../ProfileInfo';
import { Icons } from '@/components/atoms/Icons';

import styles from './Profile.module.sass'
import { Button } from '@/components/atoms/Button';

export default function Profile() {
  const { name, position, avatar } = useUserStore().user;
  const {isCollapsed} = useColapseStore();
  return (
    <div className={styles.container}>
      <Avatar imgSrc={avatar}/>
      {!isCollapsed && <ProfileInfo name={name} position={position}/>}
      <Button.Colapse />
    </div>
  );
}
