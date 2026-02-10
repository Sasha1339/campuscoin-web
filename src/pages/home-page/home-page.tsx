import type {FC} from "react";
import styles from './home-page.module.css';
import {CardComponent} from "@/components/home/card-component/card-component.tsx";


type Props = {}

export const HomePage: FC<Props> = () => {

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <CardComponent />

      </article>
    </main>
  )

}