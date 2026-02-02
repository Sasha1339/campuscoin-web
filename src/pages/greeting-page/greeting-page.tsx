import type {FC} from "react";
import {InviteSlide} from "../../components/greeting/invite-slide/invite-slide.tsx";


type Props = {}

export const GreetingPage: FC<Props> = () => {

  return (
    <div>
      <InviteSlide />
    </div>
  )

}