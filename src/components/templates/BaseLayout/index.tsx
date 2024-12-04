import Sidebar from '@/components/organisms/Sidebar';

import Header from '@/components/organisms/Header';
import styles from './BaseLayout.module.sass';

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        {children}
        <div>Footer</div>
      </main>
    </div>
  );
}
