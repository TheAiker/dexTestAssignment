import React from 'react';
import './App.css';
import { HamburgerMenu } from './components/ui/hamburger-bar';
import { TopNavBar } from './components/ui/nav-bar';
import { PlayersPage } from './pages/players-page/players-page';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { TeamsPage } from './pages/teams-page/teams-page';
//import { SignIn } from './pages/sign-in-page/sign-in-page';
import { SignUp } from './pages/sign-up-page/sign-up-page';

function App() {
  return (
    <div className="appContainer">
      <Router>
      <div>
        <TopNavBar/>
      </div>
      <div className="pageContainer">
        <div>
          <HamburgerMenu/>
        </div>
        <Switch>
        <Route path="/players">
          <PlayersPage/>
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>
        <Route path="/teams">
          <TeamsPage/>
        </Route>
        </Switch>
      </div>
    
      </Router>
    </div>
  );
}

export default App;
