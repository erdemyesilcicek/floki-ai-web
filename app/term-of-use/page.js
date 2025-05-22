import Head from 'next/head';
import FairyTaleHero from '../components/FairyTaleHero';
import styles from './term-of-use.module.css';

export default function TermsOfUse() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Terms of Use | Floki</title>
          <meta
            name="description"
            content="Learn more about Floki's terms of use and how we ensure a safe experience."
          />
        </Head>
        <FairyTaleHero />
        <main className={styles.main}>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.description}>
            Welcome to Floki! By using our app, you agree to the following Terms of Use. Please read them carefully.
            If you do not accept these terms, please do not use the app.
          </p>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>1. Acceptance of Terms</h2>
            <p className={styles.description}>
              By accessing or using Floki, you accept these Terms, our Privacy Policy, and any other policies or
              guidelines provided by us.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>2. Use of the App</h2>
            <ul className={styles.list}>
              <li className={styles.listText}><strong>Eligibility:</strong> You must be at least 13 years old to use Floki. If you are under 18, you
                need the consent of a parent or guardian.</li>
              <li className={styles.listText}><strong>Personal Use:</strong> Floki is for personal, non-commercial use only. Any other use requires
                prior written permission from us.</li>
              <li className={styles.listText}><strong>Account Security:</strong> It is your responsibility to keep your login information confidential
                and to be responsible for all activities under your account.</li>
            </ul>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>3. Content and Intellectual Property Rights</h2>
            <ul className={styles.list}>
              <li className={styles.listText}><strong>Created Content:</strong> You can create personalized fairy tales in Floki. You own the content
                you create, but you grant us the right to store, display, and use the content for app operations.</li>
              <li className={styles.listText}><strong>Prohibited Content:</strong> You may not create or share content that is illegal, offensive, or
                infringes the rights of others.</li>
              <li className={styles.listText}><strong>Floki’s Rights:</strong> All materials, designs, features, and codes related to Floki are owned
                by us or our licensors and are protected by intellectual property laws. You may not copy, modify, or
                distribute these materials without permission.</li>
            </ul>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>4. Prohibited Activities</h2>
            <ul className={styles.list}>
              <li className={styles.listText}>Reverse-engineer, modify, or manipulate the app in a harmful way.</li>
              <li className={styles.listText}>Use the app for illegal, harmful, or fraudulent purposes.</li>
              <li className={styles.listText}>Endanger the security or functionality of the app.</li>
            </ul>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>5. Privacy</h2>
            <p className={styles.description}>
              The use of your data is subject to our Privacy Policy. By using Floki, you agree to the collection, use,
              and sharing of your data as described in the Privacy Policy.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>6. Changes to This Policy</h2>
            <p className={styles.description}>
              We may update these Terms of Use from time to time. Please review them periodically for changes.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>7. Termination</h2>
            <p className={styles.description}>
              We may suspend or terminate your access to Floki at any time, with or without notice, if you violate these
              Terms or for any other reason.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>8. Disclaimer of Warranties</h2>
            <p className={styles.description}>
              Floki is provided "AS IS" and "AS AVAILABLE." We disclaim all warranties, including implied warranties.
              We do not guarantee that the app will be uninterrupted or error-free.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>9. Limitation of Liability</h2>
            <p className={styles.description}>
              To the fullest extent permitted by law, we are not liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of Floki.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>10. Governing Law and Dispute Resolution</h2>
            <p className={styles.description}>
              These Terms are governed by the laws of the Republic of Turkey. Any disputes will be resolved through
              binding arbitration or in the relevant courts.
            </p>
          </section>
  
          <section className={styles.section}>
            <h2 className={styles.heading}>11. Contact Information</h2>
            <p className={styles.description}>
              For any questions regarding these Terms, feel free to contact us at{' '}
              <a href="mailto:bozerdemyesilcicek@gmail.com" className={styles.link}>bozerdemyesilcicek@gmail.com</a>.
            </p>
          </section>
        </main>
      </div>
    );
  }