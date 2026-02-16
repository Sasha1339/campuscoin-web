import type {FC} from "react";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";
import './profile.module.css';

type Props = {
  user: string
}

export const Profile: FC<Props> = ({user}) => {

  return (
    <profile-element>
      <user-name>{user}</user-name>
      <IconSvg name={'profile'} size={32}/>
    </profile-element>
  )

}