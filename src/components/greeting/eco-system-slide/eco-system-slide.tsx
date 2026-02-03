import styles from './eco-system-slide.module.css';
import image_first from "@/assets/svg/eco-system-widget-first.svg";
import image_second from "@/assets/svg/eco-system-widget-second.svg";
import image_third from "@/assets/svg/eco-system-widget-third.svg";
import image_fourth from "@/assets/svg/eco-system-widget-fourth.svg";
import image_fifth from "@/assets/svg/eco-system-widget-fifth.svg";
import {ItemEcoSystem} from "@/components/greeting/eco-system-slide/item-eco-system/item-eco-system.tsx";


export const EcoSystemSlide = () => {

  return (
    <div className={styles.main}>
      <div className={styles.title}>Экосистема CampusCoin</div>
      <div className={styles.items}>
        <ItemEcoSystem className={styles.item_column} image={image_first} title={`Банковская карта`}
                       text={`Дебетовая карта — начисление стипендий, коинов за достижения в виде бонусных баллов, заработков от фриланс-проектов Платёжный инструмент — оплата любых покупок в партнёрских сетях со встроенными скидками и кешбеком Доступ к финансовым продуктам — кредиты, страхование`}/>
        <ItemEcoSystem className={styles.item_column} image={image_second} title={`Приложение`}
                       text={`CampusCoin является частью единого студенческого пространства, которое помогает студентам управлять учебой, финансами, карьерой и социальной жизнью. В нём есть расписание, оценки, задания и AI-тьютор, раздел с балансом коинов, история транзакций, фриланс-проекты, вакансии и портфолио. Оно также включает события кампуса, сообщества, чаты и партнёрские скидки в ресторанах и магазинах рядом. CampusCoin объединяет в себе ключевые финансовые функции для мотивации студентов.`}/>
        <ItemEcoSystem className={styles.item_column} image={image_third} title={`Маркетплейс`} paddingImageWrapper={'0 20px 0 0'}
                       text={`Единая платформа объединяет локальный бизнес, крупных партнёров и студентов. Каждый потраченный коин генерирует налоговый поток: от малых предприятий (НДС, прибыльные налоги), от крупных партнёров (корпоративные налоги), от студентов-предпринимателей (НДФЛ). Экономика становится прозрачной, местный бизнес растёт, регион развивается.`}/>
        <ItemEcoSystem className={styles.item_row} image={image_fourth} title={`Биржа инноваций`} paddingImageWrapper={'0 40px 0 0'}
                       text={`Платформа встречи студентов и компаний. Студенты предлагают идеи и проекты, компании финансируют и масштабируют лучшие инновации. Прямое соединение между талантом и капиталом.`}/>
        <ItemEcoSystem className={styles.item_row} image={image_fifth} title={`Финтех`} paddingImageWrapper={'20px'}
                       text={`Campus Coin создаёт финансовый профиль студента на основе его учебных достижений, активности и проектов — открывая двери банкам, инвесторам и кредиторам. Студент получает инструменты и ресурсы для запуска собственного проекта с поддержкой финансирования и наставничества.`}/>
      </div>
    </div>
  )
}