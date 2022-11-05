/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Section } from '../../components';
import './about-me.css';
import cesar from '../../assets/cesar-1.jpeg';


export const References: FC = () => {
  return (
    <div className="about-section">
      <div className="about__header">
        <h3 className="heading-primary">About me</h3>
        <figure className="about__image-box">
          <img src={cesar} alt="cesar rivera" draggable={false} />
        </figure>
      </div>
      <div className="about__content">
        <p>
          I started learning to code after a great failure.
          As an entrepreneur I had the idea of developing an uberEats-like delivery app
          that would benefit my small community, but at that time
          I did not have the programming skills or enough money to do it so, I failed terribly
          after three years of continuous hard work.
        </p>
        <br />
        <p>
          Thereafter I decided to learn programming, although at beginning was really hard,
          it was as if I had discovered an entirely new world.
          Learning to program has forever changed me, my mind and the way I see the world.
        </p>
      </div>
    </div>
  );
};
