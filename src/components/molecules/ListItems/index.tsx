import NavItem, { Props } from "@/components/atoms/NavItem";

import styles from './ListItems.module.sass';
import { Routes } from "@/shared/Routes";

export default function ListItems() {
  
  return <ul className={styles.container}>
    {Routes.map((route, index) => (
      <NavItem key={index} {...route} />
    ))}
  </ul>;
}