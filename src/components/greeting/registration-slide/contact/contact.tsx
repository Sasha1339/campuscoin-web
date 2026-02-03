import styles from './contact.module.css';
import or from '@/assets/svg/registration-or-image.svg'
import {Button} from "@/components/shared/button/button.tsx";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

export const Contact = () => {

  return (
    <div className={styles.main}>
      <div className={styles.input_wrapper}>
        <div className={styles.choose}>
          <IconSvg name={'russian-flag'} size={16} />
          <div className={styles.text_bold}>+7</div>
          <IconSvg name={'arrow-choose-down'} size={16} />
        </div>
        <input className={styles.input} placeholder={'(999) 999 99-99'}/>
        <button className={styles.button}>Регистрация</button>
      </div>
      <img src={or}/>
      <div className={styles.buttons}>
        <Button className={styles.button_inner} color={'color-transparent'}>
          <IconSvg name={'icon-vk'} size={24} />
          <div>Войти с VK ID</div>
        </Button>
        <Button className={styles.button_inner} color={'color-transparent'}>
          <IconSvg name={'icon-gosuslugi'} size={24} />
          <div>Вход через Госуслуги</div>
        </Button>
      </div>
    </div>
  )

}