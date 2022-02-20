import React from 'react';
import {Field } from 'formik';
import "../css/report.css"

function InvestigationInputItem(props) {
    let investigationId= props.investigation.replace(/\s/g,"")
    console.log(investigationId)
  
    return (
         <p className='investigation'>  
        <label htmlFor ={investigationId}>{props.investigation}</label>
        <Field type="checkbox" id={investigationId} name={props.investigationId} checked={props.initialValues.investigationId} />
        </p>  
    );
}

export default InvestigationInputItem;