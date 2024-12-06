import Link from 'next/link';
import { monetaryFormatting } from '@/shared/utils/monetaryFormatting';

import { Icons } from '@/components/atoms/Icons';

import styles from './CardValue.module.sass';

type Props = {
  isBalance?: boolean;
  icon: keyof typeof Icons;
  href: string,
  color: string,
  value: number,
  label: string
}

export default function CardValue({ isBalance, icon, href, color, value, label }: Props) {
  const Icon = Icons[icon]
  return (
    <div
      className={`${styles.container}`}
      style={
        {
          '--color': color,
        } as React.CSSProperties
      }
    >
      <div className={styles.header}>
        <Icon className={styles.icon} />
        <p className={styles.name}>{label}</p>
        <Link href={href} className={styles.link}>
          {isBalance ? (
            <div className={styles.icon} />
          ) : (
            <Icons.Plus className={styles.icon} />
          )}
        </Link>
      </div>
      <div className={styles.conatinerValue}>
        <p className={styles.value}>
          {monetaryFormatting(value)}
        </p>
      </div>
    </div>
  );
}
