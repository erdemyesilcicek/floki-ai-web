import Link from "next/link";
import FairyTaleHero from "../components/FairyTaleHero";
import styles from "./delete-account.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <FairyTaleHero />      <main className={styles.main}>
        <h1 className={styles.title}>
          Floki - Tale Creator Delete Account Request
        </h1>
        <p className={styles.description}>
          To delete your account, please click the button below and send an
          email with your account deletion request. Our development team will
          review your request as soon as possible and provide information about
          the processing time. The completion time for the account deletion
          process may vary depending on the details of your request. If there is
          anything else we can assist you with, please don’t hesitate to contact
          us.
        </p>
        <div className={styles.buttons}>
          <a
            href="mailto:bozerdemyesilcicek@gmail.com"
            className={styles.button}
          >
            Send Email
          </a>
        </div>
      </main>
    </div>
  );
}
