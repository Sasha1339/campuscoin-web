import type {FC} from "react";
import {ActionButtons} from "@/components/home/card-component/action-buttons/action-buttons.tsx";
import styles from './card-component.module.css';
import {CardList} from "@/components/home/card-component/card-list/card-list.tsx";

type Props = {}

export const CardComponent: FC<Props> = () => {

  return (
    <section className={styles.section}>
      <ActionButtons />
      <CardList />
    </section>
  )

}