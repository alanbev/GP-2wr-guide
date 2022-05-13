import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import '../css/App.css';
import InputItem from '../components/inputItem.js';
import SymptomBlock from '../components/symptomBlocks.js';
import formUtils from '../utilities/formutils.js';
import symptomsIndex from '../symptom lists/symptomsIndex.js';
import DisplaySwitch from '../components/displaySwitch';
import ChooseSex from '../components/chooseSex';
import IdAnaemia from '../components/IdAnaemia';
import CheckMelanomaCriteria from '../components/checkMelanomaCriteria';
import { Container, Alert, Box, Typography, Button, Grid } from '@mui/material';

function SymptomForm(props) {
  const navigate = useNavigate();
  const [accordian, setAccordian] = useState(true); //sets state of compact mode
  const [sex, setSex] = useState("male");
  const [showMelanomaCriteria, setMelanomaCriteria] = useState(false);// sets state of melanoma criteria checker popup show prop
  const [showIdAnaemia, setIdAnaemia] = useState(false);// sets state of id anaemia checker popup show prop
  const formValues = useRef(null)

  const handleChange = (e) =>
  //control function for popup boxes - linked to event handlers on checkboxesmand recieves event from thme

  {
    if (e.currentTarget.id === "pigmentedLesion") {
      if (formValues.current.values.pigmentedLesion === false) {
        setMelanomaCriteria(showMelanomaCriteria ? false : true)
      }
    }

    if (e.currentTarget.id === "idAnaemia") {
      if (formValues.current.values.pigmentedLesion === false) {
        setIdAnaemia(showIdAnaemia ? false : true)
      }
    }
  }

  //functions to change the checkbox settings of main form from their popups
  const setAnaemia = (isidAnaemia) => {
    formValues.current.values.anaemia = (isidAnaemia ? false : true)
    formValues.current.values.idAnaemia = isidAnaemia
    setIdAnaemia(false)
  }

  const setMelanoma = (criteriMet) => {
    formValues.current.values.pigmentedLesion = criteriMet
    setMelanomaCriteria(false)
  }

  let typesOfSymptoms = []
  symptomsIndex.forEach((listOfSymptoms) => {
    const eachList = listOfSymptoms[0].map((symptom, key) =>
      <InputItem
        symptom={symptom}
        handleChange={handleChange}
        key={key}
      />)
    typesOfSymptoms.push([listOfSymptoms[1], eachList])
  })

  const allSymptoms = typesOfSymptoms.map((eachTypeOfSymptom, key) => <SymptomBlock eachTypeOfSymptom={eachTypeOfSymptom} sex={sex} key={key} accordian={accordian} />)

  const initialValues = formUtils.initialValuesObjectBuilder(symptomsIndex, "mainForm")

  const validationSchema = Yup.object({
    age: Yup.number().required("Please enter the Patient's age"),
  })

  const onSubmit = (values) => {
    values = formUtils.buildSymptomList(values)
    values.sex = sex
    props.setFormData(values)

    navigate('./Report')
  }

  return (
    <Container component={'main'} maxWidth='xl' >

      <span id="displaySwitch"><DisplaySwitch accordian={accordian} setAccordian={setAccordian} /></span>  

      <Alert sx={{ mb: 1 }} severity='warning'>Development version - not for clinical use.</Alert>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        innerRef={formValues}

      >

        <Form>

          <Typography variant='span' id="ageHolder">
            <Typography sx={{ mr: 2 }} component='label' htmlFor='age'>Age
            </Typography>
            <Field type="number" name="age" required /> </Typography>
          <span><ChooseSex sex={sex} setSex={setSex} /></span>
          <ErrorMessage name="age" >
            {errorMsg => <Alert severity='error' >{errorMsg}</Alert>}
          </ErrorMessage>

          <Grid container alignItems="stretch" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 } }>
            {allSymptoms}
            {/* <input type="submit" value="Show NICE Recommendations" /> */}
          </Grid>
            <Button sx={{ m: 1 }} variant='contained' type='submit'>Show NICE Recommendations</Button>
        
        </Form>
      </Formik>
      <CheckMelanomaCriteria showMelanomaCriteria={showMelanomaCriteria} setMelanoma={setMelanoma}></CheckMelanomaCriteria>
      <IdAnaemia showIdAnaemia={showIdAnaemia} setAnaemia={setAnaemia} />


    </Container>
  )
}


export default SymptomForm;
