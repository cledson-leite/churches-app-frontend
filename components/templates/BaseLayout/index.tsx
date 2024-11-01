import styles from './BaseLayout.module.sass';

type BaseLayoutProps = {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div role="container" className={styles.container}>
      <div className={styles.row  }>
        <nav>Menu</nav>
        <div className={styles.main}>
        <header>Header</header>
        <main>{children}</main>
        </div>  
      </div>
      <footer>Footer</footer>
    </div>
  );
}