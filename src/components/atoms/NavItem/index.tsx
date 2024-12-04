import { useColapseStore } from '@/viewmodels/stores';
import { Icons } from '../Icons';
import styles from './NavItem.module.sass'
import { Route } from '../../../shared/types';

export type Props = Route;

export default function NavItem({ icon, label, href }: Props) {
  const {isCollapsed} = useColapseStore()
  const Icon = Icons[icon];
  return (
    <li className={styles.container}>
      <a href={href} className={styles.link}>
        <Icon role='icon' className={styles.icon} />
        {!isCollapsed &&<span role='label' className={styles.name}>{label}</span>}
        {isCollapsed && <div role='tips' className={styles.tips} data-before-content={label} />}
      </a>
    </li>
  );
}
