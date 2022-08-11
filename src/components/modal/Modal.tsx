import { FC, MouseEventHandler, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';


interface ModalProps {
  children: ReactNode,
  onClick: MouseEventHandler
}

export const Modal: FC<ModalProps> = ({ children, onClick }) => {
  return (
    createPortal(
      <div
        className="backdrop slide-in-elliptic--entrance"
        onClick={onClick}
      >
        {children}
      </div>,
      (document.querySelector('#app') as HTMLElement),
    )
  );
};
