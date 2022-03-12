import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Home } from './routes/Home';
import { Deck } from './routes/Deck';
import Modes from './routes/Modes/Modes';
import SignIn from './authentication/SignIn/SignIn';
import SignUP from './authentication/SignUp/SignUp';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

import './App.scss';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const toggleMenuBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <div className="App">
      {!user ? (
        <>
          <Redirect from="/" to="/sign-in" />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUP} />
        </>
      ) : (
        <div className='app-wrapper'>
          <Header
            logOut={!!user}
            toggleMenuBar={toggleMenuBar}
          />
          <Aside isMenuOpen={isMenuOpen} />

          <main>
            <Switch>
              <Route path="/modes" component={Modes} />
              <Route path="/words-list" component={Deck} />
              <Route path="/home" component={Home} />
    
              <Redirect from="/" to="/home" />
            </Switch>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
