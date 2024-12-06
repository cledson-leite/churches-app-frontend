import PageHeader from '@/components/molecules/PageHeader';
import DashboardChart from '@/components/organisms/DashboardChart';
import DashboardValues from '@/components/organisms/DashboardValues';

import styles from './FinanceTemplate.module.sass';
export default function FinanceTemplate() {
  return (
    <main className={styles.container}>
      <PageHeader />
      <DashboardValues />
      <DashboardChart />
    </main>
  );
}
