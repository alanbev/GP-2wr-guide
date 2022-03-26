import React from 'react';
import {Field} from 'formik';  

function NumberInputItem(props) {
  
    return (
         <p>  
        <label htmlFor ={props.value}>{props.value}</label>
        <Field type="number" id={props.value} name={props.value} min="0" />
         </p>   
    );
}

export default NumberInputItem;