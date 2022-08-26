import { FC, useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs';
import { FaLaptopCode, FaTools } from 'react-icons/fa';
import { MdDashboard, MdMail, MdPeopleAlt } from 'react-icons/md';
import './sidebar.css';


const inititalSidebar = (): boolean => {
  const toggle = localStorage
    .getItem('sidebar-col');

  if (typeof toggle === 'string') {
    return JSON.parse(toggle);
  }
  return true;
};

export const SideBar: FC = () => {
  const [toggle, setToggle] = useReducer(((state) => !state), inititalSidebar());

  useEffect(() => {
    localStorage.setItem('sidebar-col', JSON.stringify(toggle));
  }, [toggle]);

  return (
    <nav
      role="navigation"
      aria-label="sidebar navigation"
      className={`sidebar ${toggle ? 'expand' : ''}`}
    >

      <div className="sidebar__links">
        <figure className="personal-logo">
          CR
        </figure>

        <NavLink className="sidebar__link" to="/" title="Home">
          <MdDashboard className="sidebar__icon" />
          {!toggle && <span className="link-text">Dashboard</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/my-skills" title="Skills">
          <FaTools className="sidebar__icon" />
          {!toggle && <span className="link-text">Skills</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/projects" title="Projects">
          <FaLaptopCode className="sidebar__icon" />
          {!toggle && <span className="link-text">Projects</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/references" title="References">
          <MdPeopleAlt className="sidebar__icon" />
          {!toggle && <span className="link-text">References</span>}
        </NavLink>

        <NavLink className="sidebar__link" to="/contact" title="Contacts">
          <MdMail className="sidebar__icon" />
          {!toggle && <span className="link-text">Contacts</span>}
        </NavLink>
      </div>

      <span
        onClick={() => setToggle()}
        className="btn--sidebar__toggle"
      >
        {!toggle && <BsBoxArrowLeft className="sidebar__expand-icon" title="shrink" />}
        {toggle && <BsBoxArrowRight className="sidebar__expand-icon" title="expand" />}
      </span>
    </nav>
  );
};
