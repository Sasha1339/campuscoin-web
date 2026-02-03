import styles from './money-slide.module.css';
import image from '@/assets/svg/money-slide-overlay.svg';
import item_first from '@/assets/svg/item-money-slide-first.svg';
import item_second from '@/assets/svg/item-money-slide-second.svg';
import item_third from '@/assets/svg/item-money-slide-third.svg';
import {ItemMoneySlide} from "@/components/greeting/money-slide/item-money-slide/item-money-slide.tsx";


export const MoneySlide = () => {

  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        <div></div>
        <div>
          <img className={styles.image} src={image} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.greeting}>
          <h1 className={styles.title}>Деньги, а не знания?</h1>
          <div className={styles.items}>
            <ItemMoneySlide image={item_first} boldText={`История повторяется `} text={`из поколения в поколение: чем дальше проходит программа обучения, тем меньше студентов посещают занятия. Вместо учёбы они вынуждены искать работучасто совершенно не связанную со своей специальностью.`} />
            <ItemMoneySlide image={item_second} boldText={`В большинстве случаев `} text={`выбор очевиден и студент выбирает финансовую стабильность. Работа становится приоритетом, учёба уходит на второй план. По итогу человек получает опыт, но не получает качественного образования. И образование становится просто формальностью.`} />
            <ItemMoneySlide image={item_third} boldText={`В возрасте 17–18 лет `} text={`жизнь уже требует принимать взрослые решения. Молодому человеку необходимо генерировать доход. И здесь возникает неизбежный конфликт: деньги или знания?`} />
          </div>
        </div>
      </div>

    </div>
  )

}