import styles from './invite-slide.module.css';
import image from '@/assets/png/invite-slide-overlay.png';
import {Button} from "@/components/shared/button/button.tsx";


export const InviteSlide = () => {

  return (
    <div className={styles.main}>
      <div className={styles.color_overlay}></div>
      <div className={styles.overlay}>
        <div></div>
        <div>
          <img className={styles.image} src={image} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.greeting}>
          <div className={styles.location}>Республика Башкортостан • Уфа</div>
          <h1 className={styles.title}>Знания, которые позволяют зарабатывать</h1>
          <p className={styles.description}>Campus Coin предлагает модель «учись и зарабатывай», в которой знания конвертируются в токены, студент получает финансовый стимул за участие в жизни кампуса и успехи в учёбе.</p>
          <div className={styles.buttons}>
            <Button>Регистрация</Button>
            <Button color={'color-white-30-opacity'}>Подробнее</Button>
          </div>
        </div>
      </div>

    </div>
  )

}