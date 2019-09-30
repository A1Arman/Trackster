import React from 'react';
import { reduxForm , Field } from 'redux-form';
import renderFieldNetworking from '../renderFieldNetworking';
import validate from '../validateNetwork';

class NetworkingForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="eventTitle">
                <Field 
                    name="eventTitle"
                    id="eventTitle"
                    type="text"
                    component={renderFieldNetworking}
                />
                Event Title
                </label>

                <label htmlFor="eventLocation">
                <Field 
                    name="eventLocation" 
                    id="eventLocation" 
                    type="text" 
                    component={renderFieldNetworking} 
                />
                Event Location
                </label>

                <label htmlFor="eventDate">
                <Field 
                    name="eventDate" 
                    id="eventDate" 
                    type="date" 
                    component={renderFieldNetworking} 
                />
                Event Date
                </label>

                <label htmlFor="eventTime">
                <Field 
                    name="eventTime" 
                    id="eventTime" 
                    type="time" 
                    component={renderFieldNetworking} 
                />
                Event Time
                </label>

                <button type="submit">Submit Event</button>

            </form>
        );
    }
}

export default reduxForm({
    form: 'networking',
    validate
})(NetworkingForm);