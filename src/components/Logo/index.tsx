import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <div>
          {' '}
          <TimerIcon />
        </div>
        <div>
          <span>Chronos</span>
        </div>
      </a>
    </div>
  );
}
