import type {FC, PropsWithChildren} from "react";
import styles from './card-button.module.css';

type Props = {
  onClick?: () => void;
}

export const CardButton: FC<Props & PropsWithChildren> = ({children, onClick}) => {

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )

}