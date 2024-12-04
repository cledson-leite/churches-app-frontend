import { Icons } from '@/components/atoms/Icons';
import styles from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <h3 className={styles.company}>Silvia Family Tech Solutions </h3>
      <div className={styles.contact}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/cledson-leite/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.Linkedin className={`${styles.icon} ${styles.linkedin}`} />
        </a>
        <a
          className={styles.link}
          href="https://github.com/cledson-leite"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.Github className={styles.icon} />
        </a>
      </div>
      <a className={styles.email} href="mailto:csbetsonline@gmail.com">
        Cledson Leite
      </a>
    </footer>
  );
}
