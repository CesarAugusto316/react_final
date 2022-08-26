import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import astronaut from '../../assets/astronaut.svg';
import { Section } from '../../components';
import './dashboard.css';

const typewriterList = [
  'Hi there everyone',
  "It's me, César!",
  "I'm a FullStack",
  'Web Developer',
  'Welcome to',
  'My Portfolio',
];

export const Dashboard: FC = () => {
  return (
    <Section>
      <header className="hero-section" aria-label="hero-section">
        <div className="hero__content">
          <h3 className="hero__heading">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriterList.forEach((str) => {
                  typewriter.typeString(str)
                    .pauseFor(100)
                    .deleteAll()
                    .start();
                });
              }}
            />
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa excepturi eaque ut laudantium laboriosam mollitia
            quas nesciunt consequatur eligendi. Nihil magni fugiat
          </p>
        </div>

        <figure className="hero__image-box bounce-bottom">
          <img
            src={astronaut}
            className="hero__image fade-in-bottom"
            alt="hero-astronaut"
          />
        </figure>
      </header>
    </Section>
  );
};
