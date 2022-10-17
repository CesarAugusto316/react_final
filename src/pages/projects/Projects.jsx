/* eslint-disable no-plusplus */
import { useState, useRef } from 'react';
import { XyzTransition, xyz } from '@animxyz/react';
import {
  FaGithub, FaRocket, FaAngleDoubleRight, FaAngleDoubleLeft,
} from 'react-icons/fa';
import ShowMoreText from 'react-show-more-text';
import { Section } from '../../components';
import { projects } from '../../assets/porjects-data/projects-data';
import './projects.css';


export const Projects = () => {
  const [currTab, setCurrTab] = useState(0);
  const tabDirection = useRef('out-left-50% in-right-50%');

  const increment = () => {
    let index = currTab;
    index++;
    index %= Math.floor(projects.length / 2);
    setCurrTab(index);
    tabDirection.current = 'out-left-50% in-right-50%';
  };

  const decrement = () => {
    if (currTab === 0) {
      setCurrTab(0);
    } else {
      let index = currTab;
      index--;
      index %= Math.floor(projects.length / 2);
      setCurrTab(index);
      tabDirection.current = 'out-right-50% in-left-50%';
    }
  };

  /**
   *
   * @param {number} index
   */
  const clickAnyNumber = (index) => {
    if (index > currTab) {
      tabDirection.current = 'out-left-50% in-right-50%';
    } else {
      tabDirection.current = 'out-right-50% in-left-50%';
    }
    setCurrTab(index);
  };

  return (
    <Section>
      <div className="projects-section">
        <h3 className="heading-primary">My Projects</h3>

        {/* tabs_buttons  */}
        <div className="tab-btns-box">
          <div>
            <button
              className="tab__button"
              onClick={() => decrement()}
              disabled={currTab === 0}
            >
              <FaAngleDoubleLeft className="tab__icon" />
            </button>
            {
              [...Array.from(Array(Math.floor(projects.length / 2))).keys()].map((index) => {
                return (
                  <span
                    className={`${index === currTab ? 'active-tab' : 'deactive-tab'} tab__number`}
                    key={index}
                    onClick={() => clickAnyNumber(index)}
                  >
                    {index + 1}
                  </span>
                );
              })
            }
            <button
              className="tab__button"
              onClick={() => increment()}
              disabled={currTab === (Math.floor(projects.length / 2) - 1)}
            >
              <FaAngleDoubleRight className="tab__icon" />
            </button>
          </div>
        </div>

        {/* cards_projects */}
        <div
          style={{ overflow: 'hidden' }}
          xyz={xyz(
            'fade ease-in-out duration-4',
            tabDirection.current,
          )}
        >
          <XyzTransition appear className="cards-row">
            <div
              key={`index-${currTab}`}
            >
              <div className="card xyz-out-absolute">
                <a
                  className="card__image-container"
                  href={projects[(currTab * 2)].url}
                  target="_blank"
                  title={projects[(currTab * 2)].title}
                  rel="noopener noreferrer"
                >
                  <img className="card__image" src={projects[(currTab * 2)].img} alt={projects[(currTab * 2)].title} />
                </a>
                <div className="card__body">
                  <h4 className="card__title">{projects[(currTab * 2)].title}</h4>
                  <ShowMoreText
                    lines={2}
                    more={<b>more</b>}
                    less={<b>less</b>}
                    className="card__description"
                    expanded={false}
                    truncatedEndingComponent="... "
                  >
                    {projects[(currTab * 2)].description}
                  </ShowMoreText>
                </div>
                <div className="card__buttons-box">
                  <a href={projects[(currTab * 2)].url} className="card__button" target="_blank" rel="noopener noreferrer">
                    <span>view deploy</span>
                    <FaRocket className="card__icon" />
                  </a>

                  <a href={projects[(currTab * 2)].githubRepo} className="card__button" target="_blank" rel="noopener noreferrer">
                    <span>view code</span>
                    <FaGithub className="card__icon" />
                  </a>
                </div>
              </div>

              <div className="card xyz-out-absolute">
                <a
                  className="card__image-container"
                  href={projects[(currTab * 2) + 1].url}
                  target="_blank"
                  title={projects[(currTab * 2) + 1].title}
                  rel="noopener noreferrer"
                >
                  <img className="card__image" src={projects[(currTab * 2) + 1].img} alt={projects[(currTab * 2) + 1].title} />
                </a>
                <div className="card__body">
                  <h4 className="card__title">{projects[(currTab * 2) + 1].title}</h4>
                  <ShowMoreText
                    lines={2}
                    more={<b>more</b>}
                    less={<b>less</b>}
                    className="card__description"
                    expanded={false}
                    truncatedEndingComponent="... "
                  >
                    {projects[(currTab * 2) + 1].description}
                  </ShowMoreText>
                </div>
                <div className="card__buttons-box">
                  <a href={projects[(currTab * 2) + 1].url} className="card__button" target="_blank" rel="noopener noreferrer">
                    <span>view deploy</span>
                    <FaRocket className="card__icon" />
                  </a>

                  <a href={projects[(currTab * 2) + 1].githubRepo} className="card__button" target="_blank" rel="noopener noreferrer">
                    <span>view code</span>
                    <FaGithub className="card__icon" />
                  </a>
                </div>
              </div>
            </div>
          </XyzTransition>
        </div>
      </div>
    </Section>
  );
};
