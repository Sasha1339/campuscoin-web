import styles from './overlay.module.css';
import {useMediaQuery} from "@/components/shared/hooks/useMobileVersion.ts";

export const Overlay = () => {

  const {platform} = useMediaQuery('(width <= 744px)')

  return (
    <div className={styles.main}>
      {platform !== 'phone' && <div className={`${styles.column} ${styles.column_80_percent}`}></div>}
      {platform !== 'phone' && <div className={`${styles.column} ${styles.column_60_percent}`}></div>}
      <div className={`${styles.column} ${styles.column_45_percent}`}></div>
      <div className={`${styles.column} ${styles.column_30_percent}`}></div>
      <div className={`${styles.column} ${styles.column_17_percent}`}></div>
      <div className={`${styles.column} ${styles.column_30_percent}`}></div>
      <div className={`${styles.column} ${styles.column_45_percent}`}></div>
      {platform !== 'phone' && <div className={`${styles.column} ${styles.column_60_percent}`}></div>}
      {platform !== 'phone' && <div className={`${styles.column} ${styles.column_80_percent}`}></div>}
    </div>
  )

}