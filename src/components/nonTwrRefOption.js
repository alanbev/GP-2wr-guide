import React from 'react';
import { useNavigate } from 'react-router-dom';


function NonTwrRefOption(props) {

  const navigate=useNavigate()
  const clickFunction=()=>{navigate(`../GP-2wr-aid/nonTWR`)}


return (  
<>
    <div id="twrOption">Make referal (not Two Week Rule) <button id="nonTWR" onClick={clickFunction}>Referal Form </button> </div>
</>
    );
}

export default NonTwrRefOption;