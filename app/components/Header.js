import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>Floki</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/privacy-policy" className={styles.navLink}>
          Privacy
        </Link>
        <Link href="/term-of-use" className={styles.navLink}>
          Terms
        </Link>
      </nav>
    </header>
  );
}
