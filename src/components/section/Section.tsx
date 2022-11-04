import { FC, ReactNode } from 'react';


export const Section: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="section">
      {children}
    </section>
  );
};
