import { Icons } from '../../Icons';

import styles from './Colapse.module.sass';

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};

export default function Colapse({ isCollapsed, setIsCollapsed }: Props) {
  const handleClick = () => setIsCollapsed(!isCollapsed);
  return (
    <button className={styles.colapseBtn} onClick={handleClick}>
      {isCollapsed ? (
        <Icons.Chevron.Right className={styles.icon} title="chevron-right" />
      ) : (
        <Icons.Chevron.Left className={styles.icon} title="chevron-left" />
      )}
    </button>
  );
}
