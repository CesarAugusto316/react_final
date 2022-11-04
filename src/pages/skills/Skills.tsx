/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Section } from '../../components';
import { skillsLogos } from '../../assets/logos/skills-logos';
import './skills.css';


export const Skills: FC = () => {
  return (
    <div className="skills-section">
      <h3 className="heading-primary">Some of my skills and Tools</h3>
      <div className="skills-wrapper">
        <div className="skills-container">
          {skillsLogos.map(({ img, alt }, i) => {
            return (
              <span className="skills__image-container" key={i}>
                <img className="skills__image" src={img} alt={alt} draggable={false} loading="lazy" />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
