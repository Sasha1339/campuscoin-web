import type {FC} from "react";
import styles from './partner-component.module.css';

type Props = {}

export const PartnerComponent: FC<Props> = () => {

  return (
    <section className={styles.section}>

      <div className={styles.title}>Предложения партнеров</div>

    </section>
  )

}