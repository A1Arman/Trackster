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
                <label htmlFor="fullName">
                    <Field
                        name="fullName"
                        id="fullName"
                        type="text"
                        component={renderFieldContacts}
                    />
                    Contact's Full Name
                </label>

                <label htmlFor="companyName">
                    <Field
                        name="companyName"
                        id="companyName"
                        type="text"
                        component={renderFieldContacts}
                    />
                    Contact's Company
                </label>

                <label htmlFor="contactEmail">
                    <Field
                        name="contactEmail"
                        id="contactEmail"
                        type="text"
                        component={renderFieldContacts}
                    />
                    Contact's Email
                </label>

                <label htmlFor="contactPhone">
                    <Field
                        name="contactPhone"
                        id="contactPhone"
                        type="text"
                        component={renderFieldContacts}
                    />
                    Contact's Phone Number
                </label>

                <label htmlFor="contactNotes">
                    <Field
                        name="contactNotes"
                        id="contactNotes"
                        type="text"
                        component={renderFieldContacts}
                    />
                    Additional Notes
                </label>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'contacts',
    validate
})(ContactsForm);