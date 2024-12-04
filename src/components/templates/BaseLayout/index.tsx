import Sidebar from '@/components/organisms/Sidebar';

import Footer from '@/components/organisms/Footer';
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
        <Footer />
      </main>
    </div>
  );
}
