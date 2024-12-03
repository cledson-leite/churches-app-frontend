import Sidebar from '@/components/organisms/Sidebar';

import styles from './BaseLayout.module.sass';

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
}
