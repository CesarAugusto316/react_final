import { FC, ReactNode } from 'react';
import './section.css';


export const Section: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <section className="section">
      {children}
    </section>
  );
};
