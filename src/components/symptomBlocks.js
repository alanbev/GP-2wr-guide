import React, { useEffect, useState } from "react";
/*import '../css/App.css';*/
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';

function SymptomBlock(props) {
    const [isShown, setIsShown] = useState(false)
    const [isShownSex, setIsShownSex] = useState(true)
    const [expanded, setExpanded] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)}; 
      
   
    useEffect(() => {
        let symptomsToHide = (props.sex === "male" ? "Female Genital Symptoms" : "Male Genital Symptoms")
        if (props.eachTypeOfSymptom[0] === symptomsToHide) { setIsShownSex(false) }
        else { setIsShownSex(true) }
    }, [props.sex])


   useEffect(() => {
        setIsShown(props.accordian)
    }, [props.accordian])

    let blockName = props.eachTypeOfSymptom[0].replace(/\s/g, "")//remove whitespace to make acceptable id
    if(isShownSex)
    {return ( <Grid item alignSelf="top" height="fit-content" position="relative" xs={12} sm={4} md={4} key={props.key}>
        <Accordion  expanded={expanded === blockName || isShown}
            onChange={handleChange(blockName)}
            sx={{ border: '1px solid gray', p: 1, m: 1 }} id={blockName}>
            <AccordionSummary><Typography variant="h6"> {props.eachTypeOfSymptom[0]} </Typography></AccordionSummary>
            <AccordionDetails >{props.eachTypeOfSymptom[1]}</AccordionDetails>
        </Accordion>
        </Grid>
    )
        }
    else {return(<></>)}
}

export default SymptomBlock