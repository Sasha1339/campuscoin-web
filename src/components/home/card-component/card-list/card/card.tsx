import type {FC} from "react";
import styles from './card.module.css';
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

type Props = {}

export const Card: FC<Props> = () => {

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <IconSvg name={'logo-card'} objectFit={'coverHeight'} size={10}/>
        <IconSvg name={'logo-mir'} objectFit={'coverHeight'} size={19}/>
      </div>

      <div className={styles.row}>
        <div className={styles.count}>
          <div>9999 ₽</div>
          <div className={styles.coin}>
            <div>100</div>
            <IconSvg name={'logo-coin'} size={12}/></div>
        </div>
        <div className={styles.info}>
          <div>• • 1234</div>
          <div>Показать данные</div>
        </div>
      </div>
    </div>
  )

}