/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Section } from '../../components';
import './about-me.css';


export const References: FC = () => {
  return (
    <Section>
      <div className="about-section">
        <h3 className="heading-primary">About me</h3>
        <p>
          I started learning Software Engineering and Web Development after a great failure.
          As an entrepreneur I had the idea of developing an uberEats-like delivery app
          that would benefit
          my small community, Esmeraldas. I started this project with my sister, but at that time,
          I did not have the programming skills or enough money to do it so, I failed terribly
          after three years of continuous hard work (I've never worked so hard in my life).
          Thereafter I promised myself that I'll never again allow the lack of knowledge
          prevent me from reaching my goals so, I decided to learn programming during the
          COVID19 pandemic in 2020. Although at beginning was really hard It was as if I had
          discovered an entirely new world. Learning to program has forever changed me,
          my mind and the way I see the world.
        </p>
        <p>
          Since then I've become very skillful with web applications, using JavaScript and
          Typescript in the front-end and back-end with react and express. I thrive to learn
          new technologies with passion and commitment.
        </p>
      </div>
    </Section>
  );
};
