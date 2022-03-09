import React, {useEffect, useState}from "react";
import '../css/App.css';

function SymptomBlock(props)
{ 
  const [isShown,setIsShown]= useState()
  const [isShownSex,setIsShownSex]=useState(true)

  useEffect(()=>{
  let symptomsToHide=(props.sex==="male" ? "Female Genital Symptoms" : "Male Genital Symptoms")
  if (props.eachTypeOfSymptom[0]===symptomsToHide)
      {setIsShownSex(false)}
  else
      {setIsShownSex(true)}
  },[props.sex])
      

  useEffect(()=>{
  setIsShown(props.accordian)
  },[props.accordian])

  const view=()=>
  {setIsShown(true)}

  const unview=()=>
  {if (!props.accordian)
   {setIsShown(false)}}

   let blockName= props.eachTypeOfSymptom[0].replace(/\s/g,"")//remove whitespace to make acceptable id
  
return (<>
    {isShownSex && (<div className="questionblock" id={blockName} onMouseOver={view} onMouseLeave={unview}>
      <span className="blocktitle" >{props.eachTypeOfSymptom[0]}</span>
     {isShown && (<div className="symptombox">{props.eachTypeOfSymptom[1]}</div>)}
    </div>)}</>
)
}

export default SymptomBlock