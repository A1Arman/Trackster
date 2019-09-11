import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import validate from '../validateLead';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const FormThirdPage = props => {
    const { handleSubmit, pristine, prevPage, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name='behaviorialInterview'
                type='date'
                component={renderField}
                label='Behaviorial Interview Date'
            />
            <Field
                name='technicalInterview'
                type='date'
                component={renderField}
                label='Technical Interview Date'
            />
            <Field
                name='FinalInterview'
                type='date'
                component={renderField}
                label='Final Interview Date'
            />
            <div>
                <label>Job Offer</label>
                <div>
                    <label>
                        <Field
                        name="jobOffer"
                        component="input"
                        type="radio"
                        value="yes"
                        />{' '}
                        Yes
                    </label>
                    <label>
                        <Field
                        name="jobOffer"
                        component="input"
                        type="radio"
                        value="no"
                        />{' '}
                        No
                    </label>
                    <Field name="jobOffer" component={renderError} />
                </div>
            </div>
            <div>
                <button type='button' className='previous' onClick={prevPage}>
                    Previous
                </button>
                <button type='submit' disabled={pristine || submitting}>
                    Submit
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
})(FormThirdPage);


