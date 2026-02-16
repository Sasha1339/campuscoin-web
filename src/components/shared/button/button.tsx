import styles from './button.module.css';
import type {FC, PropsWithChildren} from "react";
import {colors, colorsByBackground} from "@/shared/colors.ts";

type Props = {
  className?: string;
  type?: 'button' | 'submit';
  color?: keyof typeof colors;
  onClick?: () => void;
}

export const Button: FC<Props & PropsWithChildren> = ({children, onClick, className = '', type = 'button', color = 'color-white', ...props}) => {

  return (
    <button onClick={onClick} className={`${styles.main} ${className}`} style={{backgroundColor: colors[color], color: colorsByBackground[color]}} type={type}>
      {children}
    </button>
  )

}