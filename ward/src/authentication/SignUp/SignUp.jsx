import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase-config";

import "./SignUp.scss";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [repeatedRegisterPassword, setRepeatedRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (event) => {
    event.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in-wrapper">
        <h3 className="sign-in__title">Register</h3>

        <div className="info">
          <form className="info__form" onSubmit={register}>
            <div className="info__field">
              <label htmlFor="sign-in-email">E-mail</label>
              <div>
                <input
                  id="sign-in-email"
                  placeholder="email@example.com"
                  onChange={(event) => setRegisterEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="info__field">
              <label htmlFor="sign-in-password">Password</label>
              <div>
                <input
                  id="sign-in-password"
                  type="password"
                  placeholder="Create a password"
                  onChange={(event) => setRegisterPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="info__field">
              <label htmlFor="sign-in-password">Repeat a password</label>
              <div>
                <input
                  id="sign-in-password"
                  type="password"
                  placeholder="Repeat the password"
                  onChange={(event) =>
                    setRepeatedRegisterPassword(event.target.value)
                  }
                />
              </div>
            </div>

            <button className="info__submit" type="submit">
              Register
            </button>
          </form>

          <p className="info__caption">
            Do you already have an account?&nbsp;
            <Link to="/sign-in">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
