import { Formik, Form, ErrorMessage } from "formik";
import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
import NumberInputItem from "./numberInputItem";
import '../css/App.css'
import * as Yup from 'yup'
import formUtils from "../utilities/formutils";


function IdAnaemia(props)
{
const [show,setShow]=useState(false)
const [idMessage,setIdMessage]=useState("")

useEffect(()=>{setShow(props.showIdAnaemia)},[props.showIdAnaemia])



const initialValues=
{
Haemoglobin:"",
MCV:"",
Ferritin:"",
Iron:"",
}

const fieldsToDisplay=Object.keys(initialValues)
const componentsToDisplay=fieldsToDisplay.map((value,key)=><NumberInputItem value={value} key={key}/>)


const validationSchema=Yup.object({
    Haemoglobin:Yup.number().required("Please enter the Haemoglobin value"),
    MCV:Yup.number().required("Please enter the MCV value"),
    Ferritin:Yup.number().required("Please enter the Ferritin value"),
      })
    

const onSubmit=(values)=>
{
console.log(values)
let IsIdAnaemia=formUtils.idAnaemiaChecker(values)
setIdMessage(`Iron deficiency criteria ${(IsIdAnaemia? "" : "not")} met`)
let displayDelay=setTimeout(()=>{
  setIdMessage("")
  props.setAnaemia(IsIdAnaemia)
  },1000)
displayDelay()
}

return(
<Popup  open={show} position= {"center center"} closeOnDocumentClick={false} closeOnEscape="true">
<div className="popup"> 
<h2>Check if it's Iron Deficiciency Anaemia</h2> 
<h4>Draft for Demonstration purposes only! </h4> 
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={validationSchema}>
<Form>
<div>{componentsToDisplay}</div>
<ErrorMessage name="Haemoglobin" >
  {errorMsg=><div className="error">{errorMsg}</div>}
  </ErrorMessage>
  <ErrorMessage name="MCV" >
  {errorMsg=><div className="error">{errorMsg}</div>}
  </ErrorMessage>
  <ErrorMessage name="Ferritin" >
  {errorMsg=><div className="error">{errorMsg}</div>}
  </ErrorMessage>
<input type="submit" value="Check"/> 
</Form>    
</Formik>
<p classname ="popupMessage">{idMessage}</p>
</div>

</Popup>
)


}

export default IdAnaemia