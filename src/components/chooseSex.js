import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react';

function ChooseSex(props)
{
const handleChange=()=>
{
props.setSex(props.sex==="male" ? "female" : "male")

}

return(
<ToggleButtonGroup orientation="horizontal" value={props.sex} exclusive={true} onChange={handleChange}>
<ToggleButton value="male" name="male">Male</ToggleButton>
<ToggleButton value="female" name="female">Female</ToggleButton>


</ToggleButtonGroup> 
)

}




export default ChooseSex




