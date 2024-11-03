'use client'

import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

import styles from './Header.molecule.module.sass'

type HeaderProps = {
  children: string
}

export default function Header({children}: HeaderProps) {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <FaAngleLeft role="iconLeft" />
        ) : (
          <FaAngleRight role="iconRight" />
        )}
      </button>
      <h1 className={styles.title}>{children}</h1>
    </header>
  );
}