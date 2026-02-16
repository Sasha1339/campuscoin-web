import type {FC} from "react";
import styles from './home-page.module.css';
import {CardComponent} from "@/components/home/card-component/card-component.tsx";
import {AdvertisementComponent} from "@/components/home/advertisement-component/advertisement-component.tsx";
import {PartnerComponent} from "@/components/home/partner-component/partner-component.tsx";
import {HistoryComponent} from "@/components/shared/history-component/history-component.tsx";


type Props = {}

export const HomePage: FC<Props> = () => {

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <CardComponent />
        <AdvertisementComponent />
        <HistoryComponent page={'home'} />
        <PartnerComponent />
      </article>
    </main>
  )

}