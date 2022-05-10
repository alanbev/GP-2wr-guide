import React from 'react';
import { Field } from 'formik';

function InputItem(props) {

    return (
        <p>

            <Field type="checkbox" id={props.symptom.symptom} name={props.symptom.symptom} onClick={props.handleChange} />
            <label htmlFor={props.symptom.symptom}>{props.symptom.displayAs}</label>
        </p>
    );
}

export default InputItem;