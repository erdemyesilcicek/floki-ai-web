import Link from 'next/link';
import Image from 'next/image';
import FairyTaleHero from './components/FairyTaleHero';
import './globals.css';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Magical decorative elements */}
      <div className={styles.magicDecor}></div>
      <div className={styles.magicDecor}></div>
      <div className={styles.magicDecor}></div>
      <div className={styles.magicDecor}></div>
      
      <FairyTaleHero />
      
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Floki</h1>
        <p className={styles.description}>
          Step into a world of wonder where magic meets storytelling. 
          Floki crafts unique, personalized fairy tales that transport 
          children and families to enchanted realms of imagination.
        </p>
        <div className={styles.buttons}>
          <Link href="/privacy-policy" className={styles.button}>
            Privacy Policy
          </Link>
          <Link href="/term-of-use" className={styles.button}>
            Terms of Use
          </Link>
          <Link href="/delete-account" className={styles.button}>
            Delete Account
          </Link>
        </div>
      </main>
    </div>
  );
}
