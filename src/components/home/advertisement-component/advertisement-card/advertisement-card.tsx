import type {FC} from "react";
import styles from './advertisement-card.module.css';
import adw from '@/assets/svg/advertisement.svg';

type Props = {}

export const AdvertisementCard: FC<Props> = () => {

  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        <img src={adw} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.text_content}>Выберите категории кешбека на январь</span>
      </div>
    </div>
  )

}
