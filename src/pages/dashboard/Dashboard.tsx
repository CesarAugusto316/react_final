/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import astronaut from '../../assets/astronaut.svg';
import { Section } from '../../components';
import './dashboard.css';

const typewriterList = [
  'Hi there everyone',
  "It's me, César!",
  "I'm a Fullstack",
  'Software Developer',
  'Welcome to',
  'My Portfolio',
];

export const Dashboard: FC = () => {
  return (
    <header className="hero-section" aria-label="hero-section">
      <div className="hero__content">
        <h3 className="hero__heading">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriterList.forEach((str) => {
                typewriter.typeString(str)
                  .pauseFor(120)
                  .deleteAll()
                  .start();
              });
            }}
          />
        </h3>
        <p>
          My name's César Rivera from Ecuador.
          I came into Software Development looking for personal growth.
          But I quickly realized that Software is
          very challenging and exiting so I created this space
          where I can share with the world the projects I've made and
          I'am currently working on.
        </p>
      </div>

      <figure className="hero__image-box bounce-bottom">
        <img
          draggable={false}
          src={astronaut}
          className="hero__image fade-in-bottom"
          alt="hero-astronaut"
        />
      </figure>
    </header>
  );
};
