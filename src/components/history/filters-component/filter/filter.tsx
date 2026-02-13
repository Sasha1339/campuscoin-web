import type {FC} from "react";
import styles from './filter.module.css';
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";
import clsx from "clsx";

type Props = {
  active: boolean;
  onSelect?: (id: string) => void;
  name: string;
  id: string;
  icon?: string
}

export const Filter: FC<Props> = ({ name, id, icon, active }) => {

  return (
    <div className={clsx(styles.filter, {[styles.active]: active})}>
      {icon && <IconSvg name={icon} size={18} /> }
      <span className={styles.text_name}>{name}</span>
    </div>
  )

}