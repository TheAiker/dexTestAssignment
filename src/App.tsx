import React from 'react';
import './App.css';
import { HamburgerMenu } from './components/ui/hamburger-bar';
import { TopNavBar } from './components/ui/nav-bar';
import { PlayersPage } from './components/pages/players-page'

function App() {
  return (
    <div className="appContainer">
      <div>
        <TopNavBar/>
      </div>
      <div className="pageContainer">
        <div>
          <HamburgerMenu/>
        </div>
        <div>
          <PlayersPage/>
          </div>
      </div>

    </div>
  );
}

export default App;
