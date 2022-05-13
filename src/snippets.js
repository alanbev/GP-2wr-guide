return ( <Grid item alignSelf="auto" xs={2} sm={4} md={4} key={props.key}>
        {isShownSex && (<Accordion  defaultExpanded={isShown} expanded={expanded === blockName || isShown}
            onChange={handleChange(blockName)}
            sx={{ border: '1px solid gray', p: 1, m: 1 }} id={blockName}>
            <AccordionSummary><Typography variant="h6"> {props.eachTypeOfSymptom[0]} </Typography></AccordionSummary>
            {isShown && (<AccordionDetails >{props.eachTypeOfSymptom[1]}</AccordionDetails>)}
        </Accordion>)}
        </Grid>



.expandedGrid{
    flex-grow: 100%;
    min-height: 30%;
    position: fixed;
    z-index: 2000;   ;
  }

  .collapsedGrid{
    height: auto;
    position: fixed;
    z-index: 1000;
  }
  .blocktitle{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    foneblocktitle{
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
      min-width: 30%;
      }
  
  .questionblock{
    background-color: antiquewhite;
    border:black solid ;
    margin: 20px;
    align-self: flex-start;
    }
  
    .widequestionblock{
      background-color: antiquewhite;
      border:black solid ;
      margin: 20px;
      min-width: 30%;
      align-self: flex-start;
      }t-size: 20px;
    margin-bottom: 10px;
    }