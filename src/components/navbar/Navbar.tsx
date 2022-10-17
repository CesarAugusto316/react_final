import { FC } from 'react';
import { FaLinkedin, FaGithub, FaMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import { useThemeContext } from '../../contexts';
import './navbar.css';


export const Navbar: FC = () => {
  const { theme, onToggleTheme } = useThemeContext();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar__buttons">
        <span role="button" className="navbar__icons-box">
          <a
            href="https://www.linkedin.com/in/c%C3%A9sar-rivera316/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            <FaLinkedin className="navbar__icon" />
          </a>
          <a
            href="https://github.com/CesarAugusto316"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            <FaGithub className="navbar__icon" />
          </a>
        </span>

        <button
          className="btn-toggle"
          aria-pressed={theme === 'light'}
          onClick={() => onToggleTheme()}
        >
          {theme === 'light' && <ImSun className="navbar__icon" />}
          {theme === 'dark' && <FaMoon className="navbar__icon" />}
        </button>
      </div>
    </nav>
  );
};
