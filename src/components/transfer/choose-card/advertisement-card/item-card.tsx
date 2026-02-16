import type {FC} from "react";
import './item-card.css';

type Props = {}

export const ItemCard: FC<Props> = () => {

  return (
    <item-card>
      <hint-text>С карты CampusCoin</hint-text>
      <summary-card>999 ₽</summary-card>
    </item-card>
  )

}
