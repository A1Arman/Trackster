import React from 'react';
import { reduxForm , Field } from 'redux-form';
import renderFieldNetworking from '../renderFieldNetworking';
import validate from '../validateNetwork';

class NetworkingForm extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <Field 
                    name="eventTitle"
                    id="eventTitle"
                    type="text"
                    component={renderFieldNetworking}
                    label="Event Title"
                />
                <Field 
                    name="eventLocation" 
                    id="eventLocation" 
                    type="text" 
                    component={renderFieldNetworking} 
                    label="Event Location"
                />
                <Field 
                    name="eventDate" 
                    id="eventDate" 
                    type="date" 
                    component={renderFieldNetworking} 
                    label="Event Date"
                />
                <Field 
                    name="eventTime" 
                    id="eventTime" 
                    type="time" 
                    component={renderFieldNetworking}
                    label="Event time" 
                />
                <button type="submit">Submit Event</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'networking',
    validate
})(NetworkingForm);