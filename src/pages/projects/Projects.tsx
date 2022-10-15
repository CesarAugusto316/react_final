import { FC, useEffect } from 'react';
import { Section } from '../../components';
import { projects } from '../../assets/porjects-data/projects-data';
import './projects.css';


export const Projects: FC = () => {
  useEffect(() => {
    console.log(projects);
  }, []);

  return (
    <Section>
      <div className="projects-section">
        <h3 className="heading-primary">My Projects</h3>
        {/* <div className="projects-wrapper">wrapper</div> */}
        <div className="projects-container">
          <div className="project-card">
            <figure className="">
              <img src={projects[7].img} alt="" />
            </figure>

            <div className="project-body">
              <p>{projects[7].description}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
