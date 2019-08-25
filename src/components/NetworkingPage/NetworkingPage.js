import React from 'react';
import AppNav from '../AppNav/AppNav';
import EventDetails from '../EventDetails/EventDetails';
// import NetworkingForm from '../NetworkingForm/NetworkingForm';
import {Link} from 'react-router-dom';

class NetworkingPage extends React.Component {
    render(){
        return(
            <main>
            <AppNav />
            <header>
                <h1>My Networking Events</h1>
                <h2>Keep Track of your upcoming and past events!</h2>
            </header>
            <Link to='/new-event'>Add New Event</Link>
            <section className="networking-events">
                <h1>Upcoming Networking Events</h1>
                    <ul className="networking-events-list">
                        <li>Chicago Hackathon</li>
                        <li>Weekly JavaScript Practice</li>
                        <li>Tech Startups Event</li>
                        <li>Intro to Python</li>
                    </ul> 
            </section>
            <section>
                <EventDetails />
            </section>
            </main>
        )
    }

}

export default NetworkingPage;