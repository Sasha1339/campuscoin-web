import {FC, ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";
import styles from "./Modal.module.css";
import {ModalOverlay} from "@/components/modal-overlay/modal-overlay.tsx";
import {useNavigate} from "react-router-dom";
import {IconSvg} from "@/components/shared/icon-svg/icon-svg.tsx";

const modalRoot = document.getElementById("react-modals")!;

type Props = {
  header?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export const Modal: FC<Props> = ({header, children, onClose, ...props}) => {

  const navigate = useNavigate();

  const backEvent = function(event) {
    document.documentElement.style.overflow = "";
    window.removeEventListener("popstate", backEvent);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.documentElement.style.overflow = "hidden";

    window.addEventListener('popstate', backEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      onCloseHandle();
    }
  }

  const onCloseHandle = () => {
    document.documentElement.style.overflow = "";
    onClose?.();
  }

  return (
    createPortal(
      (
        <>
          <ModalOverlay onClose={onCloseHandle} />
          <div className={styles.modal}>
            <div className={styles.header}>
              <IconSvg name={'back-arrow'} size={24} onClick={onCloseHandle} />
              <span className={styles.title_link}>{header}</span>
            </div>
            {children}
          </div>
        </>
      ),
      modalRoot
    )
  )
}
