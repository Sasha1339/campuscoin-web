import styles from './overlay.module.css';

export const Overlay = () => {

  return (
    <div className={styles.main}>
      <div className={`${styles.column} ${styles.column_80_percent}`}></div>
      <div className={`${styles.column} ${styles.column_60_percent}`}></div>
      <div className={`${styles.column} ${styles.column_45_percent}`}></div>
      <div className={`${styles.column} ${styles.column_30_percent}`}></div>
      <div className={`${styles.column} ${styles.column_17_percent}`}></div>
      <div className={`${styles.column} ${styles.column_30_percent}`}></div>
      <div className={`${styles.column} ${styles.column_45_percent}`}></div>
      <div className={`${styles.column} ${styles.column_60_percent}`}></div>
      <div className={`${styles.column} ${styles.column_80_percent}`}></div>
    </div>
  )

}