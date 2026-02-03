import styles from './registration-slide.module.css';
import {Overlay} from "@/components/greeting/registration-slide/overlay/overlay.tsx";
import {Contact} from "@/components/greeting/registration-slide/contact/contact.tsx";


export const RegistrationSlide = () => {

  return (
    <div className={styles.main}>
      <div className={styles.color_overlay}></div>
      <div className={styles.overlay}>
        <Overlay/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Зарегистрироваться в CampusCoin</h1>
          <p className={styles.description}>Получи коины за регистрацию, доступ к фрилансу, скидкам в партнёрках и
            студенческим сервисам. Начни зарабатывать и экономить прямо сейчас!</p>
        </div>

        <Contact/>
      </div>

    </div>

  )

}