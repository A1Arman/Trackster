import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LandingPageNav from './components/LandingPageNav/LandingPageNav';
import LeadGenPage from './components/LeadGenPage/LeadGenPage';
import AppNav from './components/AppNav/AppNav';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav role="navigation">
            <Route exact path='/' component={LandingPageNav} />
            <Route exact path='/leadgen' component={AppNav} />
          </nav>
        </header>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/leadgen' component={LeadGenPage} />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
