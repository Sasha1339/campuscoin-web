import type {FC} from "react";
import {Filter} from "@/components/history/filters-component/filter/filter.tsx";
import styles from './filters-component.module.css';

type FilterType = {
  name: string;
  id: string;
  icon?: string;
}

type Props = {
  filters: FilterType[];
  onSelect?: (id: string) => void;
}

export const FiltersComponent: FC<Props> = ({filters, onSelect}) => {

  return (
    <section className={styles.filters}>
      {filters.map((e, i) => (
        <Filter key={i} active={false} name={e.name} id={e.id} icon={e.icon} />
      ))}
    </section>
  )

}