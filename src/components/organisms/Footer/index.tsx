import Link from 'next/link';

import { Icons } from '@/components/atoms/Icons';
import styles from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <h3 className={styles.company}>Silvia Family Tech Solutions </h3>
      <div className={styles.contact}>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/cledson-leite/"
        >
          <Icons.Linkedin className={`${styles.icon} ${styles.linkedin}`} />
        </Link>
        <Link className={styles.link} href="https://github.com/cledson-leite">
          <Icons.Github className={styles.icon} />
        </Link>
      </div>
      <Link className={styles.email} href="csbetsonline@gmail.com">
        Cledson Leite
      </Link>
    </footer>
  );
}
