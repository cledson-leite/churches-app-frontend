import styles from './ProfileInfo.module.sass';

type Props = {
  name: string;
  position: string;
};
export default function ProfileInfo({ name, position }: Props) {
  return (
    <div className={styles['name-job']}>
      <div role="name" className={styles.name}>
        {!name ? 'Usuário' : name}
      </div>
      <div role="position" className={styles.position}>
        {!position ? 'membro' : position}
      </div>
    </div>
  );
}
