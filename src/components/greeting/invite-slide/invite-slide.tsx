import styles from './invite-slide.module.css';
import image_desktop from '@/assets/png/invite-slide-overlay.png';
import image_mobile from '@/assets/svg/invite-slide-overlay-mobile.svg';
import {Button} from "@/components/shared/button/button.tsx";
import {useMediaQuery} from "@/components/shared/hooks/useMobileVersion.ts";


export const InviteSlide = () => {

  const {platform} = useMediaQuery('(width <= 900px)')


  return (
    <div className={styles.main}>
      <div className={styles.color_overlay}></div>

      <div className={styles.wrapper}>
        <div className={styles.greeting}>
          <div className={styles.location}>Республика Башкортостан • Уфа</div>
          <h1 className={styles.title}>Знания, которые позволяют зарабатывать</h1>
          <p className={styles.description}>Campus Coin предлагает модель «учись и зарабатывай», в которой знания
            конвертируются в токены, студент получает финансовый стимул за участие в жизни кампуса и успехи в учёбе.</p>
          <div className={styles.buttons}>
            <Button>Регистрация</Button>
            <Button color={'color-white-30-opacity'}>Подробнее</Button>
          </div>
        </div>
      </div>

      <div className={styles.overlay}>

        <img className={styles.image} src={platform === 'desktop' ? image_desktop : image_mobile}/>

      </div>

    </div>
  )

}