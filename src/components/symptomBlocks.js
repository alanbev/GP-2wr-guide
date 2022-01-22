import React from "react";
import '../css/App.css';

function SymptomBlock(props)

{
return (
    <div className="questionblock">
      <span className="blocktitle">{props.eachTypeOfSymptom[0]}</span>
      <div>{props.eachTypeOfSymptom[1]}</div>
    </div>
)
}

export default SymptomBlock