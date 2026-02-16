import {FC} from "react";
import styles from "./modal-overlay.module.css";

type Props = {
  onClose?: () => void;
}

export const ModalOverlay: FC<Props> = ({onClose}) => {

  return (
    <div className={styles.modal_overlay} onClick={onClose}></div>
  )
}
