import React from 'react';

const renderFieldContacts = ({ input, label, type, meta: {touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <div>{error}</div>}
        </div>
    </div>
);

export default renderFieldContacts;