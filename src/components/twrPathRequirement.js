import React from "react";
import { useState , useEffect } from "react";
import validatorIndex from "../utilities/validators/validatorIndex.js";
import RequirementsComponent from "./requirementsComponent";
import TwrRefOptions from "./twrRefOption";

function TwrPathRequirement(props)
    {

    const [requirements, setRequirements]=useState()
    const [requirementsText,setRequirementsText]=useState()
    const [component, setComponent]=useState()
    const [requirementsMet, setRequirementsMet]=useState(false)


    const clickFunction=()=>
    {setRequirementsMet(true)}
   
        useEffect(()=>
            {
            
            const findRequirements=()=>
            {validatorIndex.forEach(validator=>{
      
                if (validator.path===props.pathway)
                {
                setRequirements(validator.requirements)
                }
            })}

            findRequirements()
            if (requirements==="")
                {setRequirementsMet(true)}
            else
                {
                setRequirementsText(`The requirements for referal under the ${props.readablePath} pathway are ${requirements}`)
                }  
                
        let componentToSet = (requirementsMet ? <TwrRefOptions pathway={props.pathway}/>: <RequirementsComponent requirementsText={requirementsText}  clickFunction={clickFunction}/>)
        setComponent(componentToSet)

        },[requirementsText,requirements,requirementsMet])

      
   

    return( <div>
    <span>The Patient's symptoms meet the NICE criteria for {props.readablePath} Two Week Rule Referal </span>
    <div>{component}</div>
    </div>
    )
    }

export default TwrPathRequirement





 