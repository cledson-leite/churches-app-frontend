import styles from './ProfileInfo.module.sass';

type Props = {
  name: string;
  position: string;
};
export default function ProfileInfo({ name, position }: Props) {
  return (
    <div className={styles['name-job']}>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
    </div>
  );
}
