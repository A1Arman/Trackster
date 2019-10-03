import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderFieldContacts from '../renderFieldContacts';
import validate from '../validateContacts'

class ContactsForm extends React.Component{
    onSubmit(values) {
        console.log(values);
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <Field
                    name="fullName"
                    id="fullName"
                    type="text"
                    component={renderFieldContacts}
                    label="Contact's Full Name"
                />
                <Field
                    name="companyName"
                    id="companyName"
                    type="text"
                    component={renderFieldContacts}
                    label="Contact's Company"
                />
                <Field
                    name="contactEmail"
                    id="contactEmail"
                    type="text"
                    component={renderFieldContacts}
                    label="Contact's Email"
                />
                <Field
                    name="contactPhone"
                    id="contactPhone"
                    type="text"
                    component={renderFieldContacts}
                    label="Contact's Phone Number"
                />
                <Field
                    name="contactNotes"
                    id="contactNotes"
                    type="text"
                    component={renderFieldContacts}
                    label="Additional Notes"
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'contacts',
    validate
})(ContactsForm);