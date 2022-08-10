import { FC } from 'react';
import { FaLinkedin, FaGithub, FaMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { useThemeContext } from '../../contexts';
import './navbar.css';


export const Navbar: FC = () => {
  const { theme, onToggleTheme } = useThemeContext();

  return (
    <nav className="navbar">
      <span className="navbar__col-1">
        <h2 className="navbar__heading">
          Welcome to my Portfolio
        </h2>
      </span>
      <div className="navbar__col-2">
        <h2 className="navbar__heading">César Rivera</h2>
        <span className="navbar__icons-box">
          <FaLinkedin className="navbar__icon" />
          <FaGithub className="navbar__icon" />
        </span>
        <span onClick={() => onToggleTheme()}>
          {theme === 'light' && <ImSun className="navbar__icon" />}
          {theme === 'dark' && <FaMoon className="navbar__icon" />}
        </span>
      </div>
    </nav>
  );
};
