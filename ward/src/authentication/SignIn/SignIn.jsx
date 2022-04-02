import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

import "./SignIn.scss";

const SignIn = ({ logoinFunc }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (event) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.warn(error.message);
    }

    logoinFunc();
  };

  return (
    <div className="sign-in">
      <div className="sign-in-wrapper">
        <h3 className="sign-in__title">Log-in</h3>

        <div className="info">
          <form className="info__form" onSubmit={login}>
            <div className="info__field">
              <label htmlFor="sign-in-email">E-mail</label>
              <div>
                <input
                  id="sign-in-email"
                  placeholder="email@example.com"
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="info__field">
              <label htmlFor="sign-in-password">Password</label>
              <div>
                <input
                  id="sign-in-password"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </div>

            <button className="info__submit" type="submit">
              Login
            </button>
          </form>

          <p className="info__caption">
            Don't have an account yet?&nbsp;
            <Link to="/sign-up">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
