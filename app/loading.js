import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingWrapper}>
        <div className={styles.magicWand}>
          <div className={styles.wandStar}></div>
          <div className={styles.wandStick}></div>
        </div>
        <div className={styles.loadingText}>Magic is happening...</div>
      </div>
    </div>
  );
}
