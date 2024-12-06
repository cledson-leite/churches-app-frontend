'use client';

import { Months } from '@/shared/types';
import { useFinanceStore } from '@/viewmodels/stores/useFinanceStore';
import styles from './ChartCompare.module.sass';
import React from 'react';

export default function ChartCompare() {
  const { data } = useFinanceStore();
  const months = data?.perMonth || {};
  const indece = Math.round((data?.totals?.revenues / (data?.totals?.expenses + data?.totals?.revenues)) * 100);
  console.log(indece);
  return (
    <div className={styles.container}>
      {Object.entries(months).map(([key, value], index) => (
        <div className={styles.graph}>
          <div className={styles.series}>
            <div
              key={index}
              className={styles.serie}
              style={
                {
                  '--color': 'var(--success-color)',
                  // '--indece': `${value.revenues}%`,
                  '--indece': `${value.revenues}%`,
                } as React.CSSProperties
              }
            >
              <p className={styles.percent}>{`${value.revenues}%`}</p>
            </div>
            <div
              className={styles.serie}
              style={
                {
                  '--color': 'var(--error-color)',
                  '--indece': `${value.expenses}%`,
                } as React.CSSProperties
              }
            >
              <p className={styles.percent}>{`${value.expenses}%`}</p>
            </div>
          </div>
          <p className={styles.labelComplet}>{Months[key]}</p>
          <p className={styles.label}>{key}</p>
        </div>
      ))}
      <div
        className={styles.pie}
        style={
          {
            '--color1': 'var(--success-color)',
            '--color2': 'var(--error-color)',
            '--indece': `${indece}`,
          } as React.CSSProperties
        }
      ></div>
    </div>
  );
}
