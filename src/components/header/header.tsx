import styles from './header.module.css';
import logo from '@/assets/svg/logo-white.svg';
import {Button} from "@/components/shared/button/button.tsx";
import {useMediaQuery} from "@/components/shared/hooks/useMobileVersion.ts";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

export const Header = () => {

  const {platform} = useMediaQuery('(width <= 900px)')

  return (
    <header className={styles.header}>
      <div className={styles.header_transition}></div>
      <div className={styles.header_overlay}></div>
      <div className={styles.item}>
        <img src={logo} />
      </div>
      {platform === 'desktop' ? <>
        <div className={styles.item}>
          <div className={styles.link}>Главная</div>
          <div className={styles.link}>Ключевые проблемы</div>
          <div className={styles.link}>Деньги или знания?</div>
          <div className={styles.link}>Экосистема</div>
        </div>
        <div className={styles.item}>
          <Button color={'color-white'}>Регистрация</Button>
          <Button color={'color-transparent'}>Вход</Button>
        </div>
      </> : <div className={styles.item}>
        <Button className={styles.button} color={'color-white-30-opacity'}><IconSvg name={'options'} /></Button>
      </div>}

    </header>
  )

}