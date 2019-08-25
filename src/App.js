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
  constructor(props) {
    super(props);
    this.state = {
      leads: [],
      introCall: null,
      user: {}
    }
  }

  leadGenSubmit = e => {
    e.preventDefault();
    const lead = {
      dateApplied: e.target.date_applied.value,
      companyName: e.target.company_name.value,
      positionTitle: e.target.position.value,
      jobDescription: e.target.job_description_link.value,
      techUsed: e.target.tech.value,
      introCall: this.state.introCall
    }
    this.addLead(lead);
    this.clearForm();
    console.log(this.state.leads)
  }

  handleSignup = e => {
    e.preventDefault();
    const user = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    this.setState({
      user
    })
    document.getElementById('signup-form').reset();
  }

  addLead = lead => {
    this.setState({
      leads: [lead, ...this.state.leads]
    })
  }

  clearForm = () => {
    const form = document.getElementById('leadgen-form');
    form.reset();
  }

  handleCall = (e) => {
    this.setState({
      introCall: e.target.value
    })
  }

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
          <Route exact path='/leadgen' render={(props) => <LeadGenPage {...props} leadGenSubmit={(event) => this.leadGenSubmit(event)} handleCall={(event) => this.handleCall(event)}/>}/>
          <Route exact path='/signup' render={(props) => <SignupPage {...props} handleSignup={(event) => this.handleSignup(event)}/>}/>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
