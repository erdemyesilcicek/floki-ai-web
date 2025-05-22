import Head from 'next/head';
import FairyTaleHero from '../components/FairyTaleHero';
import styles from './privacy-policy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Floki</title>
        <meta
          name="description"
          content="Learn more about Floki's privacy practices and how we protect your data."
        />
      </Head>
      <FairyTaleHero />
      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.description}>
          Welcome to Floki! Your privacy is extremely important to us. This Privacy Policy explains how we collect, 
          use, and protect your information when you use our mobile application.
        </p>

        <section className={styles.section}>
          <h2 className={styles.heading}>Information We Collect</h2>
          <ul className={styles.list}>
            <li className={styles.listText}>
              <strong>Personal Information:</strong> We collect your name, age, gender, and family information (e.g., names of parents and siblings) to personalize your experience and create tailored stories.
            </li>
            <li className={styles.listText}>
              <strong>Non-Personal Information:</strong> This includes device details (e.g., model, operating system version), app usage data, and analytics to improve performance and user experience.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>How We Use Your Information</h2>
          <p className={styles.description}>
            We use the information collected to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listText}>Create personalized stories based on your inputs.</li>
            <li className={styles.listText}>Analyze usage to enhance the app experience.</li>
            <li className={styles.listText}>Authenticate user accounts and ensure secure access.</li>
            <li className={styles.listText}>Send updates, notifications, and respond to inquiries.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Sharing Your Data</h2>
          <p className={styles.description}>
            We respect your privacy and do not sell or share your personal information with third parties, except in the following cases:
          </p>
          <ul className={styles.list}>
            <li className={styles.listText}>
              <strong>Service Providers:</strong> Data may be shared with third-party providers like Firebase for authentication and cloud storage.
            </li>
            <li className={styles.listText}>
              <strong>Legal Requirements:</strong> When required by law or to protect the safety of users and the public.
            </li>
            <li className={styles.listText}>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Data Storage and Security</h2>
          <ul className={styles.list}>
            <li className={styles.listText}>
              <strong>Storage:</strong> User data is securely stored using Firebase services.
            </li>
            <li className={styles.listText}>
              <strong>Encryption:</strong> Data transmission is encrypted with SSL/TLS protocols.
            </li>
            <li className={styles.listText}>
              <strong>Access Control:</strong> Access to personal information is restricted to authorized personnel.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Children's Privacy</h2>
          <p className={styles.description}>
            Floki is designed for children and families. We comply with children's privacy laws, including COPPA and GDPR. Parental consent is required for users under 13 years of age.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Your Rights</h2>
          <p className={styles.description}>
            You have the right to access, correct, delete, or restrict the processing of your data. To exercise these rights, contact us at{' '}
            <a href="mailto:bozerdemyesilcicek@gmail.com" className={styles.link}>
              erdmyslcck9@outlook.com
            </a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Changes to This Policy</h2>
          <p className={styles.description}>
            This Privacy Policy may be updated from time to time. Changes will be communicated via the app or email. Please review it periodically to stay informed.
          </p>
        </section>

        <p className={styles.contact}>
          If you have any questions, feel free to contact us at{' '}
          <a href="mailto:bozerdemyesilcicek@gmail.com" className={styles.link}>
          bozerdemyesilcicek@gmail.com
          </a>.
        </p>
      </main>
    </div>
  );
}
