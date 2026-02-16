import type {FC} from "react";
import {InviteSlide} from "../../components/greeting/invite-slide/invite-slide.tsx";
import {MainProblem} from "@/components/greeting/main-problem/main-problem.tsx";
import {MoneySlide} from "@/components/greeting/money-slide/money-slide.tsx";
import {EcoSystemSlide} from "@/components/greeting/eco-system-slide/eco-system-slide.tsx";
import {RegistrationSlide} from "@/components/greeting/registration-slide/registration-slide.tsx";


type Props = {}

export const GreetingPage: FC<Props> = () => {

  return (
    <div>
      <InviteSlide />
      <MainProblem />
      <MoneySlide />
      <EcoSystemSlide />
      <RegistrationSlide />
    </div>
  )

}