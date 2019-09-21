import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validateContacts = values => {
    const errors = {}
    
    if(!values.fullName){
        errors.fullName = 'required'
    }

    if(!values.contactEmail){
        errors.contactEmail = 'required'
    }

    if(!values.contactPhone){
        errors.contactPhone = 'required'
    }
    return errors;
}

export default validateContacts;