import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "./Aside.scss";

export const Aside = ({ isMenuOpen }) => {
  return (
    <aside className={classNames({ open: isMenuOpen })}>
      <nav>
        <ul>
          <li>
            <NavLink to="/modes">Modes</NavLink>
          </li>
          <li>
            <NavLink to="/words-list">Words list</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
