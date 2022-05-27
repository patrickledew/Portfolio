import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="icons">
        <div>
          <a
            href="https://www.linkedin.com/in/patrick-ledew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-5x fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/patrickledew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-5x fa-github-square"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="navigation-links">
        <ul>
          <li>
            <NavLink className="animated-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="animated-link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="animated-link" to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
