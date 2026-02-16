import styles from './header.module.css';
import logo from '@/assets/svg/logo-white.svg';
import logo_blue from '@/assets/svg/logo-blue.svg';
import {Button} from "@/components/shared/button/button.tsx";
import {useMediaQuery} from "@/components/shared/hooks/useMobileVersion.ts";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import clsx from "clsx";
import {Profile} from "@/components/header/profile/profile.tsx";

export const Header = () => {

  const {platform} = useMediaQuery('(width <= 1500px)');

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {location.pathname.includes('greeting') && <div className={styles.header_transition}></div>}
      <div
        className={clsx(styles.header_overlay, {[styles.header_overlay_white]: !location.pathname.includes('greeting')})}></div>
      <div className={styles.item}>
        {location.pathname.includes('home') || location.pathname.includes('greeting') ?
          <img src={location.pathname.includes('greeting') ? logo : logo_blue} onClick={() => navigate('/greeting')} /> : <>
            <IconSvg name={'back-arrow'} size={24}  onClick={() => navigate(-1)} />
            <span className={styles.title_link}>История</span>
          </>}
      </div>
      {location.pathname.includes('greeting') ?
        platform === 'desktop' ? <>
          <div className={styles.item}>
            <div className={styles.link}>Главная</div>
            <div className={styles.link}>Ключевые проблемы</div>
            <div className={styles.link}>Деньги или знания?</div>
            <div className={styles.link}>Экосистема</div>
          </div>
          <div className={styles.item}>
            <Button color={'color-white'}>Регистрация</Button>
            <Button color={'color-transparent'}  onClick={() => navigate('/home')}>Вход</Button>
          </div>
        </> : <div className={styles.item}>
          <Button className={styles.button} color={'color-white-30-opacity'} onClick={() => navigate('/home')}><IconSvg name={'options'}/></Button>
        </div> :
        <div className={styles.item}>
          {location.pathname.includes('home') ? <Profile user={'Сергей Сергеев'}/> : <IconSvg name={'question-support'} size={32} />}
        </div>}

    </header>
  )

}