import styles from './DashboardChart.module.sass';
import ChartCompare from '@/components/molecules/ChartCompare';

export default function DashboardChart() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Movimentações por mês</p>
        <ChartCompare />
    </div>
  );
}