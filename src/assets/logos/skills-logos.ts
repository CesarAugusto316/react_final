import docker from './docker-original-wordmark.svg';
import express from './express-original-wordmark.svg';
import git from './git-scm-icon.svg';
import javascript from './javascript-original.svg';
import jest from './jestjsio-icon.svg';
import mongo from './mongodb-original-wordmark.svg';
import nest from './nestjs-plain.svg';
import node from './nodejs-original-wordmark.svg';
import postgres from './postgresql-original-wordmark.svg';
import react from './react-original-wordmark.svg';
import redis from './redis-original-wordmark.svg';
import redux from './redux-original.svg';
import sass from './sass-original.svg';
import tailwind from './tailwindcss-icon.svg';
import typescript from './typescript-original.svg';


interface Skill {
  img: string,
  alt: string
}

export const skillsLogos: Skill[] = [
  {
    img: docker,
    alt: 'docker',
  },
  {
    img: express,
    alt: 'express',
  },
  {
    img: git,
    alt: 'git',
  },
  {
    img: javascript,
    alt: 'javascript',
  },
  {
    img: jest,
    alt: jest,
  },
  {
    img: mongo,
    alt: 'mongo',
  },
  {
    img: nest,
    alt: 'nest',
  },
  {
    img: node,
    alt: 'node',
  },
  {
    img: postgres,
    alt: 'postgres',
  },
  {
    img: react,
    alt: 'react',
  },
  {
    img: redis,
    alt: 'redis',
  },
  {
    img: redux,
    alt: 'redux',
  },
  {
    img: sass,
    alt: 'sass',
  },
  {
    img: tailwind,
    alt: 'tailwind',
  },
  {
    img: typescript,
    alt: typescript,
  },
];
