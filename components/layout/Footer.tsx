import styles from '@/components/layout/layout.module.css';

/**
 * Footer component to display the application footer.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      All rights reserved. Use of this website
      constitutes acceptance of our Terms of Service and Policy and Cookie
      Statement.
    </footer>
  );
}
