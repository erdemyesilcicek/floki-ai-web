import styles from './FairyTaleHero.module.css';

export default function FairyTaleHero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.stars}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.star} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>
      
      <div className={styles.magicWand}>
        <div className={styles.wandStar}></div>
        <div className={styles.wandStick}></div>
      </div>
      
      <div className={styles.magicBook}>
        <div className={styles.bookCover}></div>
        <div className={styles.bookPages}></div>
        <div className={styles.bookSparkle} style={{ left: '20%', top: '30%' }}></div>
        <div className={styles.bookSparkle} style={{ left: '70%', top: '50%' }}></div>
      </div>
    </div>
  );
}
