import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import validate from '../validateLead';

const FormFirstPage = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name='companyName'
                type='text'
                component={renderField}
                label='Company Name'
            />
            <Field
                name='positionTitle'
                type='text'
                component={renderField}
                label='Postion Title'
            />
            <Field
                name='jobDescriptionLink'
                type='url'
                component={renderField}
                label='Job Description Link'
            />
            <div>
                <button type='submit' className='next'>
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'leadGen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(FormFirstPage);

