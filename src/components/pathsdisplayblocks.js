import React, {useState,useEffect } from "react";
import '../css/App.css';
import validatorIndex from "../utilities/validators/validatorIndex";
import NonTwrRefOption from "./nonTwrRefOption";
import TwrPathRequirement from "./twrPathRequirement";
import { Box } from  '@mui/material';


function PathDisplayBlock(props){

    const [header,setHeader]=useState();
    const [pathway, setPathway]=useState()
    const [displayStyle, setDisplayStyle]=useState()

    useEffect(()=>
        {
        validatorIndex.forEach(pathway=>
            {
            if (pathway.path===props.eachPath[0])
                {
                setHeader(pathway.displayAs);
                setPathway(pathway.path)
                }})
            })

    const message=(props.modifiedFormData.message[props.eachPath[0]])
    let twrPaths=props.modifiedFormData.twrValid
    const pathWayToOffer=(twrPaths[props.eachPath[0]] ? <TwrPathRequirement pathway={pathway} readablePath={header} /> : <NonTwrRefOption pathway={pathway} readablePath={header} />)

    //set styling option for diplay block by setting CSS class
    useEffect(()=>{
        if (twrPaths[props.eachPath[0]])
        {
        setDisplayStyle("pathDisplayBlocktwr")
        }
    else if (message !=="")
        {
        setDisplayStyle("pathDisplayBlockConditional")
        }
    else
        {
        setDisplayStyle("pathDisplayBlockNotTwr")
        }
    },[twrPaths, props.eachPath, message])
            
    let notTWR=`The patient's symptoms do NOT meet the NICE 2wr criteria for the ${header} pathway`
    let messageToDisplay=((message !=="" || twrPaths[props.eachPath[0]]) ? message : notTWR)

    return(
    <Box className={displayStyle}>
    <h2>{header}</h2>
    <div className="pathMessage">{messageToDisplay}</div>
    <div className="pathToOffer">{pathWayToOffer} </div>
    </Box>
    )
    }

    export default PathDisplayBlock
