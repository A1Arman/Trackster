import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LandingPageNav from './components/LandingPageNav/LandingPageNav';
import LeadGenPage from './components/LeadGenPage/LeadGenPage';
import AppNav from './components/AppNav/AppNav';
import SignupPage from './components/SignupPage/SignupPage';
import NetworkingPage from './components/NetworkingPage/NetworkingPage';
import NetworkingForm from './components/NetworkingForm/NetworkingForm';
import ContactsPage from './components/ContactsPage/ContactsPage';
import ContactsForm from './components/ContactsForm/ContactsForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav role="navigation">
            <Route exact path='/' component={LandingPageNav} />
            <Route exact path='/signup' component={LandingPageNav} />
            <Route exact path='/leadgen' component={AppNav} />
            <Route exact path='/networking' component={NetworkingPage} />
            <Route exact path='/new-event' component={NetworkingForm} />
            <Route exact path='/contacts' component={ContactsPage} />
            <Route exact path='/new-contact' component={ContactsForm} />
          </nav>
        </header>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/leadgen' component={LeadGenPage} />
          <Route exact path='/signup' component={SignupPage} />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
