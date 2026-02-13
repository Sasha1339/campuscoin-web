import type {FC} from "react";
import styles from './history-page.module.css';
import {SummaryComponent} from "@/components/history/summary-component/summary-component.tsx";
import {FiltersComponent} from "@/components/history/filters-component/filters-component.tsx";
import {HistoryComponent} from "@/components/history/history-component/history-component.tsx";

const filters = [
  {
    name: 'Все',
    id: '',
  },
  {
    name: 'Карта CampusCoin',
    icon: 'card-operation',
    id: '',
  },
  {
    name: 'Кампус коины',
    icon: 'coin-operation',
    id: '',
  },
  {
    name: 'Карта CampusCoin',
    id: '',
  },
  {
    name: 'Карта CampusCoin',
    id: '',
  },
  {
    name: 'Карта CampusCoin',
    id: '',
  },
  {
    name: 'Карта CampusCoin',
    id: '',
  }
]

type Props = {}

export const HistoryPage: FC<Props> = () => {

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <SummaryComponent />
        <FiltersComponent filters={filters} />
        <HistoryComponent />
      </article>
    </main>
  )

}