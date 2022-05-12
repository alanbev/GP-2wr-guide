import React, { useEffect, useState } from "react";
import '../css/App.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

function SymptomBlock(props) {
    const [isShown, setIsShown] = useState()
    const [isShownSex, setIsShownSex] = useState(true)
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        let symptomsToHide = (props.sex === "male" ? "Female Genital Symptoms" : "Male Genital Symptoms")
        if (props.eachTypeOfSymptom[0] === symptomsToHide) { setIsShownSex(false) }
        else { setIsShownSex(true) }
    }, [props.sex])


    useEffect(() => {
        setIsShown(props.accordian)
    }, [props.accordian])

    const view = () => { setIsShown(true) }

    const unview = () => {
        if (!props.accordian) { setIsShown(false) }
    }

    let blockName = props.eachTypeOfSymptom[0].replace(/\s/g, "")//remove whitespace to make acceptable id

    return (<>
        {isShownSex && (<Accordion expanded={expanded === blockName}
            onChange={handleChange(blockName)}
            sx={{ border: '1px solid gray', p: 1, m: 1 }} id={blockName}>
            <AccordionSummary><Typography variant="h6"> {props.eachTypeOfSymptom[0]} </Typography></AccordionSummary>
            {isShown && (<AccordionDetails >{props.eachTypeOfSymptom[1]}</AccordionDetails>)}
        </Accordion>)}</>
    )
}

export default SymptomBlock