import type {FC} from "react";
import styles from './choose-card.module.css';
import useEmblaCarousel from "embla-carousel-react";
import {ItemCard} from "@/components/transfer/choose-card/advertisement-card/item-card.tsx";

type Props = {}

export const ChooseCard: FC<Props> = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className={styles.main}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>

          <div className={styles.embla__slide}>
            <ItemCard/>
          </div>
          <div className={styles.embla__slide}>
            <ItemCard/>
          </div>
          <div className={styles.embla__slide}>
            <ItemCard/>
          </div>

        </div>
      </div>
    </div>

  )

}
