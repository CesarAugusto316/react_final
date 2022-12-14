import { FC, ReactNode } from 'react';
import './layout.css';


export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="layout">
      {children}
      <div className="wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor=" rgba(79, 165, 189, 0.871)" />
            <stop offset="100%" stopColor="rgb(73, 80, 219)" />
          </linearGradient>
          <path
            fillOpacity="0.12"
            d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,154.7C672,117,768,107,864,122.7C960,139,1056,181,1152,165.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <svg className="wave-lighter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="0.1"
              d="M0,320L40,309.3C80,299,160,277,240,240C320,203,400,149,480,117.3C560,85,640,75,720,90.7C800,107,880,149,960,160C1040,171,1120,149,1200,117.3C1280,85,1360,43,1400,21.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </svg>
        </svg>
      </div>
    </div>
  );
};
