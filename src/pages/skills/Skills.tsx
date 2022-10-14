import { FC } from 'react';
import { Section } from '../../components';
import './skills.css';


export const Skills: FC = () => {
  return (
    <Section>
      <div className="skills-section">
        <h3 className="skills__heading">My skills and Tools</h3>
        <div className="skills-wrapper">
          <div className="skills-container">
            <a className="skills__link" href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://expressjs.com" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://jestjs.io" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://nestjs.com/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://www.postgresql.org" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://redis.io" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://redux.js.org" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" />
            </a>
            <a className="skills__link" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <img className="skills__image" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
