import type {FC} from "react";
import styles from './card-list.module.css';
import {Card} from "@/components/home/card-component/card-list/card/card.tsx";

type Props = {}

export const CardList: FC<Props> = () => {

  return (
    <div className={styles.list}>
      <Card />
      {/*<Card />*/}
      <div className={styles.button_add_account}>
        Добавить счет
      </div>
    </div>
  )

}