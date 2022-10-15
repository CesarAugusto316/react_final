/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Section } from '../../components';
import { skillsLogos } from '../../assets/logos/skills-logos';
import './skills.css';


export const Skills: FC = () => {
  return (
    <Section>
      <div className="skills-section">
        <h3 className="heading-primary">My skills and Tools</h3>
        <div className="skills-wrapper">
          <div className="skills-container">
            {skillsLogos.map(({ img, alt }, i) => {
              return (
                <span className="skills__image-container" key={i}>
                  <img className="skills__image" src={img} alt={alt} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
