import type {FC} from "react";
import styles from './history-component.module.css';
import {HistoryRow, type icons} from "@/components/shared/history-row/history-row.tsx";
import {useNavigate} from "react-router-dom";


const list = [
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'increase',
    sumBasic: 100
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  },
  {
    type: 'operation-sberbank' as keyof typeof icons,
    title: 'Сергей С.',
    description: 'Перевод',
    operationBasic: 'decrease',
    sumBasic: 100,
    operationCoin: 'increase',
    sumCoin: 1000
  }
]

type Props = {
  page: 'home' | 'history';
}

export const HistoryComponent: FC<Props> = ({page}) => {

  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      {page === 'home' && <div className={styles.header}>
        <div className={styles.title}>История</div>
        <div className={styles.hint} onClick={() => navigate('/history')}>Показать больше</div>
      </div>}
      <div className={styles.row}>
        <div className={styles.day}>Сегодня</div>
      </div>
      <div className={styles.history}>
        {
          list.map((e, i) => (
            <div className={styles.history_row} key={`row${i}`}>
              <HistoryRow type={e.type} title={e.title} description={e.description} operationBasic={e.operationBasic}
                          operationCoin={e.operationCoin} sumCoin={e.sumCoin} sumBasic={e.sumBasic}/>

              {i < list.length - 1 && <hr/>}

            </div>

          ))
        }
      </div>


    </section>
  )

}