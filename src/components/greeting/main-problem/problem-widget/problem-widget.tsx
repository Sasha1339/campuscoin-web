import styles from './problem-widget.module.css';
import type {FC} from "react";

type Props = {
  className?: string;
  image: string;
  title: string;
  text: string;
}

export const ProblemWidget: FC<Props> = ({className = '', image, title, text}) => {

  return (
    <div className={`${styles.main} ${className}`}>
      <img className={styles.image} src={image}/>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )

}