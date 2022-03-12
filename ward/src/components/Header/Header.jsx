import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./Header.scss";

export const Header = ({ logOut, toggleMenuBar }) => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">ward</Link>
        <button className="mobile-menu" onClick={toggleMenuBar}>
          menu
        </button>
      </div>
      <div className="header__panel">
        {logOut && <button onClick={logout}>Logout</button>}
      </div>
    </header>
  );
};
