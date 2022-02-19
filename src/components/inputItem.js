import React from 'react';
import {Field} from 'formik';  

function InputItem(props) {
  
    return (
         <p>  
        <label htmlFor ={props.symptom.symptom}>{props.symptom.displayAs}</label>
        <Field type="checkbox" id={props.symptom.symptom} name={props.symptom.symptom}/>
         </p>   
    );
}

export default InputItem;