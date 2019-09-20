import React, { Component } from 'react';
// import AppNav from '../AppNav/AppNav';
// import EventDetails from '../EventDetails/EventDetails';
import NetworkingForm from '../NetworkingPage/NetworkingForm/NetworkingForm';
// import {Link} from 'react-router-dom';

class NetworkingPage extends React.Component {
    render(){

        // map through the list of all events
        // const events = this.props.events.map((event, index)=>(
        //     <EventDetails {...event} key={index} />
        // ));

        return(
            <div>
                <NetworkingForm />
            </div>
        )
    }

}

export default NetworkingPage;