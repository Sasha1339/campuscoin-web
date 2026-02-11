import type {FC} from "react";
import styles from './history-row.module.css';
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";
import clsx from "clsx";

export const icons = {
  'operation-sberbank': 'logo-sber',
  'shopping': 'logo-shop',
  'taxi': 'logo-taxi',

}

type Props = {
  type: keyof typeof icons;
  title: string;
  description: string;
  operationBasic?: 'decrease' | 'increase' | string;
  sumBasic?: number;
  operationCoin?: 'decrease' | 'increase' | string;
  sumCoin?: number;
  date?: string;
}

export const HistoryRow: FC<Props> = ({
                                        type,
                                        title,
                                        description,
                                        operationBasic,
                                        sumBasic,
                                        operationCoin,
                                        sumCoin,
                                        date
                                      }) => {

  return (
    <div className={styles.main}>
      <IconSvg name={icons[type]} size={28} />
      <div className={styles.description}>
        <div className={styles.text_title}>{title}</div>
        <div className={styles.text_description}>{description}</div>
      </div>
      <div className={styles.sum}>
        {operationCoin && <div className={styles.coin}>{`${operationCoin === 'decrease' ? '-' : '+'}${sumCoin}`} <IconSvg name={'coin-operation'} size={13} /> </div>}
        {operationBasic && <div className={clsx(styles.basic, {[styles.basic_positive]: operationBasic === 'increase'})}>{`${operationBasic === 'decrease' ? '-' : '+'}${sumBasic} ₽`}</div>}
      </div>
    </div>
  )

}