import styles from '@/components/layout/layout.module.css';

/**
 * Header component to display the application header.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>News APP</div>
    </header>
  );
}
