import { Formik, Form } from "formik";
import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
import '../css/App.css'
import melanomaCriteria from "../symptom lists/melanomaCriteria";
import formUtils from "../utilities/formutils";
import InputItem from "./inputItem.js";


function CheckMelanomaCriteria(props)
{
const [show,setShow]=useState(false)
const [melanomaMessage,setMelanomaMessage]=useState("")

useEffect(()=>{setShow(props.showMelanomaCriteria)},[props.showMelanomaCriteria])

const initialValues=formUtils.initialValuesObjectBuilder(melanomaCriteria,"melanama")

const componentsToDisplay=melanomaCriteria.map((value,key)=><InputItem symptom={value} key={key}/>)   

const onSubmit=(values)=>
    {
    let criteriaMet=formUtils.melanomaScore(values)
    setMelanomaMessage(`Seven point melanoma score criterion ${(criteriaMet? "" : "not")} met`)

    let displayDelay=setTimeout(()=>
        {
        props.setMelanoma(criteriaMet)
        setMelanomaMessage("")
        setShow(false)
        },1000)
    displayDelay()
    clearTimeout(displayDelay)
    }

return(
<Popup  open={show} position= {"center center"} closeOnDocumentClick={false} closeOnEscape="true">
<div className="popup"> 
<h2>Melanoma Seven Point Checklist</h2>   
<Formik
initialValues={initialValues}
onSubmit={onSubmit}> 

<Form>
<div>{componentsToDisplay}</div>
<input type="submit" value="Check"/> 
</Form>     
</Formik>

<p id="melanomaMessage" className="popupMessage">{melanomaMessage}</p>
</div>
</Popup>
)
}

export default CheckMelanomaCriteria