import React from 'react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';

const validateNetwork = values => {
    const errors = {}
    let eventDate = moment(values.eventDate);
    let eventTime = moment(values.eventTime);
    
    if(!values.eventTitle){
        errors.eventTitle = 'Required'
    } 

    if(!values.eventLocation){
        errors.eventLocation = 'Required';
    }

    if(!values.eventDate){
        errors.eventDate = 'Please enter a valid date'
    }

    if(!values.eventTime){
        errors.eventTime = 'Please enter a valid time'
    }
    return errors;
}

export default validateNetwork;

