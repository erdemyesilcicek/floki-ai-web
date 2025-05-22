import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Floki</h3>
            <p className={styles.tagline}>Where Stories Come to Life</p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <Link href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link href="/term-of-use" className={styles.link}>
                Terms of Use
              </Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Support</h4>
              <Link href="/delete-account" className={styles.link}>
                Delete Account
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Floki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
