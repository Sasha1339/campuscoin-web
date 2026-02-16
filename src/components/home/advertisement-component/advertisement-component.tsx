import type {FC} from "react";
import styles from './advertisement-component.module.css';
import useEmblaCarousel from "embla-carousel-react";
import {AdvertisementCard} from "@/components/home/advertisement-component/advertisement-card/advertisement-card.tsx";

type Props = {}

export const AdvertisementComponent: FC<Props> = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className={styles.main}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>

          <div className={styles.embla__slide}>
            <AdvertisementCard/>
          </div>
          <div className={styles.embla__slide}>
            <AdvertisementCard/>
          </div>
          <div className={styles.embla__slide}>
            <AdvertisementCard/>
          </div>

        </div>
      </div>
    </div>

  )

}
