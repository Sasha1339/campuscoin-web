import styles from './item-money-slide.module.css';
import type {FC} from "react";

type Props = {
  image: string;
  boldText: string;
  text: string;
}

export const ItemMoneySlide: FC<Props> = ({image, boldText, text}) => {

  return (
    <div className={styles.main}>
      <img className={styles.image} src={image}/>
      <div className={styles.text}><span className={styles.bold_text}>{boldText}</span>{text}</div>
    </div>
  )

}