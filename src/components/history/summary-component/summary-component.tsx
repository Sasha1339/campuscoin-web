import type {FC} from "react";
import styles from './summary-component.module.css';
import {SummaryWidget} from "@/components/history/summary-component/summary-widget/summary-widget.tsx";

type Props = {}

export const SummaryComponent: FC<Props> = () => {

  return (
    <section className={styles.main}>
      <SummaryWidget title={'Расходы за январь'} summary={1000} color={'color-black'} />
      <SummaryWidget title={'Зачисления за январь'} summary={15600} color={'color-green'} />
    </section>
  )

}