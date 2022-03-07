import { Switch, FormControlLabel } from '@mui/material'
import React from 'react';

function DisplaySwitch (props)

{
const onChange=()=>
    {
    props.setAccordian(props.accordian ? false : true)
    }


return(
<div>
<FormControlLabel control={<Switch checked={!props.accordian} onChange={onChange} />} label="Compact display"  />
</div>
)
}

export default DisplaySwitch