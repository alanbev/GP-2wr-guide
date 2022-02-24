import React from 'react';
import { useNavigate } from 'react-router-dom';


function TwrRefOptions(props) {

  const navigate=useNavigate()
  const clickFunction=()=>{navigate(`../${props.pathway}`)}


return (  
<>
    <div id="twrOption">Refer under {props.pathway} Two Week Rule Pathway <button id={props.pathway} onClick={clickFunction}>Referal Form </button> </div>
</>
    );
}

export default TwrRefOptions;