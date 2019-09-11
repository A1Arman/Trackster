import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import validate from '../validateLead';

const FormSecondPage = props => {
    const { handleSubmit, prevPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name='techUsed'
                type='text'
                component={renderField}
                label='Technologies Used'
            />
            <Field
                name='dateApplied'
                type='date'
                component={renderField}
                label='Date Applied'
            />
            <Field
                name='phoneScreenDate'
                type='date'
                component={renderField}
                label='Phone Screen Date'
            />
            <Field
                name='phoneScreen'
                type='date'
                component={renderField}
                label='Phone Screen Date'
            />
            <div>
                <button type='button' className='previous' onClick={prevPage}>
                    Previous
                </button>
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
})(FormSecondPage);


