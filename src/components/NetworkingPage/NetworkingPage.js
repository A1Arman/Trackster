import React from 'react';
import AppNav from '../AppNav/AppNav';
import EventDetails from '../EventDetails/EventDetails';
// import NetworkingForm from '../NetworkingForm/NetworkingForm';
import {Link} from 'react-router-dom';

class NetworkingPage extends React.Component {
    render(){

        // map through the list of all events
        const events = this.props.events.map((event, index)=>(
            <EventDetails {...event} key={index} />
        ));

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
                        {events}
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