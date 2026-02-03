import styles from './button.module.css';
import type {FC, PropsWithChildren} from "react";
import {colors, colorsByBackground} from "@/shared/colors.ts";

type Props = {
  className?: string;
  type?: 'button' | 'submit';
  color?: keyof typeof colors;
}

export const Button: FC<Props & PropsWithChildren> = ({children, className = '', type = 'button', color = 'color-white', ...props}) => {

  return (
    <button className={`${styles.main} ${className}`} style={{backgroundColor: colors[color], color: colorsByBackground[color]}} type={type}>
      {children}
    </button>
  )

}