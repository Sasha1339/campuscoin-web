import styles from './item-eco-system.module.css';
import arrow from '@/assets/svg/arrow-down.svg';
import type {FC} from "react";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

type Props = {
  className?: string;
  paddingImageWrapper?: string;
  image: string;
  title: string;
  text: string;
}

export const ItemEcoSystem: FC<Props> = ({image, className = '', paddingImageWrapper, title, text}) => {

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.more}>
          <div>подробнее</div>
          <IconSvg name={'arrow-down'} color={'color-blue'} />
        </div>
      </div>
      <div className={styles.image_wrapper} style={paddingImageWrapper ? {padding: paddingImageWrapper} : {}}>
        <img src={image}/>
      </div>


    </div>
  )

}