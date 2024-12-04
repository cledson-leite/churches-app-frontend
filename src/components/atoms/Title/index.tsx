import styles from './Title.module.sass';

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h1 className={styles.container}>{children}</h1>;
}
