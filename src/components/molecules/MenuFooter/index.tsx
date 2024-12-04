import NavItem from '@/components/atoms/NavItem';
import styles from './MenuFooter.module.sass';

export default function MenuFooter() {
  return (
    <ul className={styles.container}>
      <NavItem icon="Setting" label="Configuração" href="/settings" />
      <NavItem icon="Logout" label="Sair" href="/login" />
    </ul>
  );
}
