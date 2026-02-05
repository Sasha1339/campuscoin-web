import styles from './footer-slide.module.css';
import logo from "@/assets/svg/logo.svg";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

export const FooterSlide = () => {

  return (
    <div className={styles.main}>
      <div className={styles.text_overlay}>Campus Coin</div>
      <div className={styles.overlay_mask}></div>
      <div className={styles.item}>
        <img src={logo}/>
        <div>Innovate. Scale. Lead. We build digital products that move your business forward—faster, smarter, and
          stronger. Let’s shape your future
        </div>
        <div>Fintech Fusion Dynamics LLC, Wyoming, US 2026</div>
      </div>
      <div className={`${styles.item} ${styles.item_gap_little}`}>
        <div>Главная</div>
        <div>Ключевые проблемы</div>
        <div>Деньги или значения?</div>
        <div>Экосистема</div>
      </div>
      <div className={styles.item}>
        <div>
          <p className={styles.text_bold}>Номер</p>
          <p className={styles.text_regular}>+7 (999) 999 99-99</p>
        </div>
        <div>
          <p className={styles.text_bold}>Почта</p>
          <p className={styles.text_regular}>example@campuscoin.com</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.widget}>
          <div className={styles.text_bold}>Получайте новости</div>
          <div className={styles.input_wrapper}>
            <input className={styles.input} placeholder={'Email'}/>
            <button className={styles.button}>
              <IconSvg name={'arrow-down'} rotate={-90} color={'color-white'} size={16}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}