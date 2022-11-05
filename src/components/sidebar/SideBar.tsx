import {
  FC, useEffect, useState, useRef,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useScrollDirection } from 'react-use-scroll-direction';
import { NavLink } from 'react-router-dom';
import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs';
import { FaLaptopCode, FaTools, FaHome } from 'react-icons/fa';
import { MdMail, MdPeopleAlt } from 'react-icons/md';
import './sidebar.css';


const Mobile: FC = () => {
  const { isScrollingDown, isScrollingUp } = useScrollDirection();
  const toggleOnScroll = useRef<boolean>(false);

  useEffect(() => {
    if (isScrollingDown) {
      toggleOnScroll.current = true;
    }
    if (isScrollingUp) {
      toggleOnScroll.current = false;
    }
  }, [isScrollingDown, isScrollingUp]);

  return (
    <nav
      role="navigation"
      aria-label="sidebar navigation"
      className={`${toggleOnScroll.current && 'fade-in'} sidebar`}
    >
      <div className="sidebar__links">
        <NavLink className="sidebar__link" to="/" title="Home">
          <FaHome className="sidebar__icon" />
        </NavLink>

        <NavLink className="sidebar__link" to="/my-skills" title="Skills">
          <FaTools className="sidebar__icon" />
        </NavLink>

        <NavLink className="sidebar__link" to="/projects" title="Projects">
          <FaLaptopCode className="sidebar__icon" />
        </NavLink>

        <NavLink className="sidebar__link" to="/references" title="about">
          <MdPeopleAlt className="sidebar__icon" />
        </NavLink>

        <NavLink className="sidebar__link" to="/contact" title="Contacts">
          <MdMail className="sidebar__icon" />
        </NavLink>
      </div>
    </nav>
  );
};

const Desktop: FC = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav
      onMouseEnter={() => setToggle(false)}
      onMouseLeave={() => setToggle(true)}
      role="navigation"
      aria-label="sidebar navigation"
      className={`sidebar ${toggle ? 'expand' : ''}`}
    >
      <div className="sidebar__links">
        <figure className="personal-logo">
          CR
        </figure>

        <NavLink className="sidebar__link" to="/" title="Home">
          <FaHome className="sidebar__icon" />
          {!toggle && <span className="link-text">Home</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/my-skills" title="Skills">
          <FaTools className="sidebar__icon" />
          {!toggle && <span className="link-text">Skills</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/projects" title="Projects">
          <FaLaptopCode className="sidebar__icon" />
          {!toggle && <span className="link-text">Projects</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/references" title="about">
          <MdPeopleAlt className="sidebar__icon" />
          {!toggle && <span className="link-text">About</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/contact" title="Contacts">
          <MdMail className="sidebar__icon" />
          {!toggle && <span className="link-text">Contacts</span>}
        </NavLink>
      </div>
      <span
        className="btn--sidebar__toggle"
      >
        {!toggle && <BsBoxArrowLeft className="sidebar__expand-icon" title="shrink" />}
        {toggle && <BsBoxArrowRight className="sidebar__expand-icon" title="expand" />}
      </span>
    </nav>
  );
};

export const SideBar: FC = () => {
  const isTabOrMobile = useMediaQuery({ query: '(max-width: 600px)' });

  if (isTabOrMobile) {
    return <Mobile />;
  }
  return <Desktop />;
};
