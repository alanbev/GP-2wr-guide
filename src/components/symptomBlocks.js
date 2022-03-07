import React, {useEffect, useState}from "react";
import '../css/App.css';

function SymptomBlock(props)

{ 

  const [isShown,setIsShown]= useState()

  useEffect(()=>{
  setIsShown(props.accordian)
  },[props.accordian])

  const view=()=>
  {setIsShown(true)}

  const unview=()=>
  {if (!props.accordian)
   { setIsShown(false)}}

return (
    <div className="questionblock" onMouseOver={view} onMouseLeave={unview}>
      <span className="blocktitle" >{props.eachTypeOfSymptom[0]}</span>
     {isShown && (<div classname="symptombox">{props.eachTypeOfSymptom[1]}</div>)}
    </div>
)
}

export default SymptomBlock