'use client';

import { usePathname } from "next/navigation";
import { Routes } from "@/shared/Routes";
import Title from "@/components/atoms/Title";

import styles from "./PageHeader.module.sass";

export default function PageHeader() {
  const pathname = usePathname();
  const route = Routes.find(
    route => route.href === `/${pathname.split('/')[1]}`,
  );
  const title = route?.label === 'Financeiro' ? 'Dashboard' : route?.label;
  return (
    <div className={styles.container}>
      <Title>{title}</Title>
    </div>
  );
}