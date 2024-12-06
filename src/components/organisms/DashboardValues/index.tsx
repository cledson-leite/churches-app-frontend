'use client';

import { Routes } from '@/shared/Routes';
import { useFinanceStore } from '@/viewmodels/stores/useFinanceStore';
import { usePathname } from 'next/navigation';

import CardValue from '@/components/molecules/CardValue';

import styles from './DashboardValues.module.sass';

export default function DashboardValues() {
  const { data } = useFinanceStore();
  const pathname = usePathname();
  const route = Routes.find(
    route => route.href === `/${pathname.split('/')[1]}`,
  );
  const hrefRevenues = route?.subItems?.find(
    item => item.label === 'Receitas',
  )?.href;
  const hrefExpenses = route?.subItems?.find(
    item => item.label === 'Despesas',
  )?.href;
  return (
    <div className={styles.container}>
      <CardValue
        href={hrefRevenues ?? '/finance'}
        color="var(--success-color)"
        icon="MoneyBill"
        value={data?.totals.revenues || 0}
        label="Receitas"
      />
      <CardValue
        href={hrefExpenses ?? '/finance'}
        color="var(--error-color)"
        icon="Swap"
        value={data?.totals.expenses || 0}
        label="Despesas"
      />
      <CardValue
        href={'/finance'}
        color="var(--info-color)"
        icon="Calculator"
        value={data?.totals.balance || 0}
        label="Saldo"
        isBalance
      />
    </div>
  );
}
