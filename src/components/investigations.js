import React from "react";
import {Formik, Form} from "formik";
import InvestigationInputItem from "./InvestigationInputItem";
import "../css/report.css"

function Investigations(props){
    
    const buildInitialValues=(investigationsList)=>
        {
        let newObject={}
        for (const key of investigationsList)
            {
            let eachkey= key.replace(/\s/g,"")
            newObject[eachkey]=false   
            }
        return newObject  
        }

    let uniqueInvestigations=[...new Set(props.formData.investigations)]

    let initialValues= buildInitialValues(uniqueInvestigations)

    const allInvestigations=uniqueInvestigations.map((investigation, key)=>
        <InvestigationInputItem 
        investigation={investigation} initialValues={initialValues}
        key={key}
        />)
    
    const onSubmit=(values)=>
        {console.log("investigations",values)
            //submit to api
        }

    let displayOption =(uniqueInvestigations.length===0 ? "hidden" :"investigationsBlock")
    return (
        <main id={displayOption}>
        <h2>Recommended Investigations</h2>
        <p id="investText">NICE recommends considering the following investigations (see individual pathway recommendations above). Please note these may not be performed in secondary care if they are not relevant to a specialty you have made a two week referal to and you should therefore consider arranging these now. Select the investigations you feel are appopraite and click Submit</p>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        >

        <Form>
        <div id="allInvestigationsHolder">{allInvestigations}</div>
        <input type="submit"/>
        </Form>
        </Formik>
        </main >
        )
}

export default Investigations