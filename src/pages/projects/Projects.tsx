import { FC } from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';
import ShowMoreText from 'react-show-more-text';
import { Section } from '../../components';
import { projects } from '../../assets/porjects-data/projects-data';
import './projects.css';


export const Projects: FC = () => {
  // useEffect(() => {
  //   console.log(projects);
  // }, []);

  return (
    <Section>
      <div className="projects-section">
        <h3 className="heading-primary">My Projects</h3>
        {/* <div className="projects-wrapper">wrapper</div>s */}
        <div className="cards-row">
          <div className="card">
            <a
              className="card__image-container"
              href={projects[3].url}
              target="_blank"
              title={projects[3].title}
              rel="noopener noreferrer"
            >
              <img className="card__image" src={projects[3].img} alt={projects[3].title} />
            </a>

            <div className="card__body">
              <h4 className="card__title">{projects[3].title}</h4>
              <ShowMoreText
                lines={2}
                more={<b>more</b>}
                less={<b>less</b>}
                className="card__description"
                onClick={() => console.log('hello')}
                expanded={false}
                truncatedEndingComponent="... "
              >
                {projects[3].description}
              </ShowMoreText>
            </div>

            <div className="card__buttons-box">
              <button className="card__button">
                <span>view deploy</span>
                <FaRocket className="card__icon" />
              </button>

              <button className="card__button">
                <span>view code</span>
                <FaGithub className="card__icon" />
              </button>
            </div>
          </div>
          <div className="card">
            <a
              className="card__image-container"
              href={projects[1].url}
              target="_blank"
              title={projects[1].title}
              rel="noopener noreferrer"
            >
              <img className="card__image" src={projects[1].img} alt={projects[1].title} />
            </a>

            <div className="card__body">
              <h4 className="card__title">{projects[1].title}</h4>
              <ShowMoreText
                lines={2}
                more={<b>more</b>}
                less={<b>less</b>}
                className="card__description"
                expanded={false}
                truncatedEndingComponent="... "
              >
                {projects[1].description}
              </ShowMoreText>
            </div>

            <div className="card__buttons-box">
              <button className="card__button">
                <span>view deploy</span>
                <FaRocket className="card__icon" />
              </button>

              <button className="card__button">
                <span>view code</span>
                <FaGithub className="card__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
