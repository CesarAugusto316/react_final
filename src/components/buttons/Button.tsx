import { FC, MouseEventHandler, ReactNode } from 'react';
import './buttons.css';


interface ButtonProps {
  children: ReactNode,
  type?: 'button' | 'submit' | 'reset',
  onClick?: MouseEventHandler
}

export const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick(): void {},
};
