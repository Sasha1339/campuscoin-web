import type {FC} from "react";
import {CardButton} from "@/components/home/card-component/action-buttons/card-button/card-button.tsx";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";
import styles from './action-buttons.module.css';

type Props = {}

export const ActionButtons: FC<Props> = () => {

  return (
    <aside className={styles.main}>
      <CardButton>
          <IconSvg name={'add'} color={'color-transparent'} size={18} />
          <div>Пополнить</div>
      </CardButton>
      <CardButton>
        <IconSvg name={'transfer'} color={'color-transparent'} size={18}/>

        <div>Перевести</div>
      </CardButton>
      <CardButton>
        <IconSvg name={'qr-pay'} color={'color-transparent'} size={18}/>

        <div>Оплатить</div>
      </CardButton>
    </aside>
  )

}