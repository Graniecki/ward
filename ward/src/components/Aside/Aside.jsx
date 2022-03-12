import { NavLink } from "react-router-dom";
import "./Aside.scss";

export const Aside = () => {
  return (
    <aside>
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
