import { FC } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import './spinner.css';


interface SpinnerProps {
  size?: 'font-3' | 'font-4' | 'font-5' | 'font-6',
  marginTop?: 'm-0' | 'm-6' | 'm-14',
}

export const Spinner: FC<SpinnerProps> = ({ size, marginTop }) => {
  return (
    <div className="spinner-container">
      <CgSpinnerTwo className={`spinner ${size} ${marginTop}`} />
    </div>
  );
};

Spinner.defaultProps = {
  size: 'font-3',
  marginTop: 'm-0',
};
