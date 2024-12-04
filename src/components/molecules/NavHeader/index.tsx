
import Link from "next/link";
import { SubRoute } from '@/shared/types';

import styles from './NavHeader.module.sass';

type Props = {
  routes: SubRoute[]
}

export default function NavHeader({ routes }: Props) {
  return (
    <nav className={styles.container}>
      {routes.map((route, index) => (
        <Link key={index} href={route.href} className={styles.link}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
}