import React from "react";

function RequirementsComponent(props)
{
 return(
    <span>{props.requirementsText} <button  onClick={props.clickFunction}> Confirm requirements met </button> </span>
 )   
}

export default RequirementsComponent