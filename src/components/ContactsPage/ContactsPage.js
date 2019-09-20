import React from 'react';
import AppNav from '../AppNav/AppNav';
import ContactDetails from '../ContactDetails/ContactDetails';
import { Link } from 'react-router-dom';

class ContactsPage extends React.Component{
    render(){
        return(
            <main>
                <AppNav /> 
                <header role="banner">
                    <h1>Network/Contact List</h1>
                    <h2>Keep Track and Remember Your Connections!</h2>
                </header>
                <Link to='/new-contact'>Add New Contact</Link>
                <section className="connections">
                    <h1>My Connections</h1>
                    <ul className="connections-list">
                        <li>Dwight Schrute</li>
                        <li>Leslie Knope</li>
                        <li>Nick Miller</li>
                        <li>Phoebe Buffet</li>
                    </ul>
                </section>
                <section>
                <ContactDetails />
                </section>
            </main>
        )
    }
}

export default ContactsPage