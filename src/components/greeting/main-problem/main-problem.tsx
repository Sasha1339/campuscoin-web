import styles from './main-problem.module.css';
import image from "@/assets/svg/warning.svg";
import problem_first from "@/assets/svg/problem-first.svg";
import problem_second from "@/assets/svg/problem-second.svg";
import problem_third from "@/assets/svg/problem-third.svg";
import problem_fourth from "@/assets/svg/problem-fourth.svg";
import {ProblemWidget} from "@/components/greeting/main-problem/problem-widget/problem-widget.tsx";
import {useMediaQuery} from "@/components/shared/hooks/useMobileVersion.ts";
import clsx from "clsx";


export const MainProblem = () => {

  const {platform} = useMediaQuery('(width <= 900px)')

  return (
    <div className={styles.main}>
      <div className={styles.header_slide}>
        <div className={styles.title}>Ключевые проблемы образования</div>
        {platform === 'desktop' && <div className={styles.hint}>
          <img className={styles.image} src={image}/>
          <p className={styles.hint_text}>Все четыре проблемы образуют замкнутый цикл, требующий единого системного
            решения.</p>
        </div>}
      </div>
      {platform === 'desktop' ? <div className={styles.problems}>
          <ProblemWidget className={styles.problem} image={problem_first} title={`"Утечка мозгов"`}
                         text={`Выпускники покидают регионы в поисках возможностей. Без местных экосистем развития талантов теряется потенциал инноваций и экономического роста, создаётся дефицит квалифицированных кадров на местах.`}/>
          <ProblemWidget className={styles.problem} image={problem_second} title={`Кризис мотивации`}
                         text={`Студенты вынуждены работать вне своей специальности, так как материальное вознаграждение не связано с качеством учебы. Эта рациональная, но разрушительная стратегия приводит к отчислениям 15-20% студентов на первых курсах, потерям бюджета и упущению талантов.`}/>
          <div className={styles.space_problem}></div>
          <div className={styles.space_problem}></div>
          <ProblemWidget className={styles.problem} image={problem_third} title={`Непривлекательность региональных ВУЗов`}
                         text={`Абитуриенты выбирают в столичные вузы, создавая дисбаланс. Региональные университеты теряют лучших студентов и финансовые ресурсы, что замедляет развитие экономики регионов.`}/>
          <ProblemWidget className={styles.problem} image={problem_fourth} title={`Финансовая изоляция молодёжи`}
                         text={`Отсутствие кредитной истории в студенческом возрасте препятствует доступу к финансовым инструментам. Молодёжь изолирована от банковского сектора и возможностей развития финансовой грамотности, что затрудняет их экономическую самостоятельность.`}/>
        </div> :
        <div className={styles.problems}>
          <div className={clsx(styles.problem_wrapper, styles.problem_left_side)}>
            <ProblemWidget className={styles.problem} image={problem_first} title={`"Утечка мозгов"`}
                           text={`Выпускники покидают регионы в поисках возможностей. Без местных экосистем развития талантов теряется потенциал инноваций и экономического роста, создаётся дефицит квалифицированных кадров на местах.`}/>
          </div>
          <div className={clsx(styles.problem_wrapper, styles.problem_right_side)}>
            <ProblemWidget className={styles.problem} image={problem_second} title={`Кризис мотивации`}
                           text={`Студенты вынуждены работать вне своей специальности, так как материальное вознаграждение не связано с качеством учебы. Эта рациональная, но разрушительная стратегия приводит к отчислениям 15-20% студентов на первых курсах, потерям бюджета и упущению талантов.`}/>
          </div>

          <div className={clsx(styles.problem_wrapper, styles.problem_left_side)}>
            <ProblemWidget className={styles.problem} image={problem_third}
                           title={`Непривлекательность региональных ВУЗов`}
                           text={`Абитуриенты выбирают в столичные вузы, создавая дисбаланс. Региональные университеты теряют лучших студентов и финансовые ресурсы, что замедляет развитие экономики регионов.`}/>
          </div>
          <div className={clsx(styles.problem_wrapper, styles.problem_right_side)}>
            <ProblemWidget className={styles.problem} image={problem_fourth} title={`Финансовая изоляция молодёжи`}
                           text={`Отсутствие кредитной истории в студенческом возрасте препятствует доступу к финансовым инструментам. Молодёжь изолирована от банковского сектора и возможностей развития финансовой грамотности, что затрудняет их экономическую самостоятельность.`}/>
          </div>
          <div className={clsx(styles.problem_wrapper, styles.problem_right_side)}>
          <div className={clsx(styles.hint)}>
            <img className={styles.image} src={image}/>
            <p className={styles.hint_text}>Все четыре проблемы образуют замкнутый цикл, требующий единого системного
              решения.</p>
          </div>
            </div>
        </div>}
    </div>
  )

}