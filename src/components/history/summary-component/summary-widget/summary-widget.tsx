import type {FC} from "react";
import styles from './summary-widget.module.css';
import {colors} from "@/shared/colors.ts";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

type Props = {
  title: string;
  summary: number;
  color: keyof typeof colors;
}

export const SummaryWidget: FC<Props> = ({title, summary, color}) => {

  return (
    <aside className={styles.main}>
      <div className={styles.row}>
        <span className={styles.text_title}>{title}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.text_summary} style={{color: colors[color]}}>{`${summary} ₽`}</span>
        <IconSvg name={'expand-button'} size={17} />
      </div>
    </aside>
  )

}