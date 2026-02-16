import type {ChangeEvent, FC} from "react";
import {ChooseCard} from "@/components/transfer/choose-card/choose-card.tsx";
import styles from './transfer.module.css';
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

type Props = {}

export const Transfer: FC<Props> = () => {



  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // if
    if (e.currentTarget.value.length > 1) {
      e.currentTarget.style.width = `${e.currentTarget.value.length}ch`
    } else {
      e.currentTarget.style.width = `1ch`
    }

  }

  return (
    <transfer-container>
      <field-input-money>
        <input className={styles.summary} type={'number'} placeholder={'0'} onChange={onChange}/>
        <span className={styles.currency}>₽</span>
      </field-input-money>
      <ChooseCard />
      <transfer-by>
        <button type={'button'}>
          <IconSvg name={'phone-old'} color={'color-white'} size={18} />
          <span>По номеру</span>
        </button>
        <button type={'button'}>
          <IconSvg name={'card-operation'} color={'color-white'} size={18} />
          <span>Реквизиты</span>
        </button>
      </transfer-by>
    </transfer-container>
  )

}
