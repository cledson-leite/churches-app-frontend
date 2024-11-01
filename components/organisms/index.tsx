import styles from './Main.organism.module.sass'

type MainOrganismProps = {
  children: React.ReactNode
}

export default function MainOrganism({children}: MainOrganismProps) {
  return (
    <div className={styles.container}>
      <header >Header</header>
      <main>{children}</main>
    </div>
  );
}