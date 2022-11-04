import todo from './toDoApp.png';
import ecommerce from './JS Mastery Store.png';
import youtube from './youtube.png';
import restCountries from './rest-countries.png';
import hipotecarios from './hipotecarios-ecuador.png';
import weatherApp from './weather-app.png';
import dockerTodoApp from './docker-todo-app.png';
import calculator from './Frontend Mentor _ Calculator app.png';
import backend from './backend.png';


interface Project {
  url: string,
  img?: string,
  title: string,
  description: string,
  githubRepo: string
}

/**
 *
 * @description we should a maximum number of characters when implementigng a DB.
 */
export const projects: Project[] = [
  {
    url: 'http://ecommerce-next-sanity-sigma.vercel.app/',
    img: ecommerce,
    title: 'Full-stack Ecommerce App',
    description: 'Application with Payments functionality. With Modern design and animations.',
    githubRepo: 'https://github.com/CesarAugusto316/ecommerce-next-sanity',
  },
  {
    url: 'http://react-crud-mocha.vercel.app/',
    img: todo,
    title: 'Full-stack React CRUD',
    description: 'TodoApp CRUD Authentication using JWT with React and Typescript, vanilla css for styling, dark-theme, using a Spinner when transitioning between components.',
    githubRepo: 'https://github.com/CesarAugusto316/react_crud',
  },
  {
    url: 'http://youtube-clone-lac-sigma.vercel.app/',
    img: youtube,
    title: 'Youtube clone Front-end',
    description: 'Authentication using JWT with React and Typescript. Styled Components for styling, dark-theme, using LocalStorage',
    githubRepo: 'https://github.com/CesarAugusto316/youtube-clone',
  },
  {
    url: 'http://api-weather-js-gamma.vercel.app/',
    img: weatherApp,
    title: 'weather app',
    description: 'I used model view controller pattern to design this project with leaflet library just by usign OOP techinques and pure javascript.',
    githubRepo: 'https://github.com/CesarAugusto316/api_weather_js',
  },
  {
    url: 'https://express-migrations.onrender.com/api/v1/',
    img: backend,
    title: 'Rest Api with authentication.',
    description: 'Express, node, jest testing, supertest, github actions ci/cd postgres, sequelize and much more.',
    githubRepo: 'https://github.com/CesarAugusto316/express_migrate',
  },
  {
    url: 'https://docker-first-project.onrender.com/',
    img: dockerTodoApp,
    title: 'Todo app with Docker',
    description: 'Deploying a front-end app inside a Docker container',
    githubRepo: 'https://github.com/CesarAugusto316/docker_first_project',
  },
  {
    url: 'https://cesaraugusto316.github.io/hipotecariosec.github.io/',
    img: hipotecarios,
    title: 'Hipotecarios Ecuador website',
    description: 'A Real State website for realtors, made with html, css, bootstrap and javascript.',
    githubRepo: 'https://github.com/CesarAugusto316/hipotecariosec.github.io',
  },
  {
    url: 'https://cesaraugusto316.github.io/rest-countries-api-challenge/',
    img: restCountries,
    title: 'Rest Countries Challenge',
    description: 'Displays all the countries in the world by usin the rest countries API and React',
    githubRepo: 'https://github.com/CesarAugusto316/rest-countries-api-challenge',
  },
  {
    url: 'https://youtube-clone-api.onrender.com/',
    img: backend,
    title: 'Youtube clone Backend-end',
    description: 'Authentication using JWT, users can upload videos, subscribe to channels and mauch more',
    githubRepo: 'https://github.com/CesarAugusto316/youtube-clone-backend',
  },
  {
    url: 'https://cesaraugusto316.github.io/JavascriptCalculator-frontEndMasters/',
    img: calculator,
    title: 'JavaScript Calculator',
    description: 'This was my very firt Challenge from frontendMentors.io, this was the beginning of my JavaScript adventure',
    githubRepo: 'https://github.com/CesarAugusto316/JavascriptCalculator-frontEndMasters',
  },
];
