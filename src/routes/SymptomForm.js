import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import '../css/App.css';
import InputItem from '../components/inputItem.js';
import SymptomBlock from '../components/symptomBlocks.js';
import formUtils from'../utilities/formutils.js';
import symptomsIndex from '../symptom lists/symptomsIndex.js';
import DisplaySwitch from '../components/displaySwitch';
import ChooseSex from '../components/chooseSex';

function SymptomForm(props) {
const navigate = useNavigate();
const [accordian, setAccordian] = useState(true)
const [sex, setSex]=useState("male")

let typesOfSymptoms=[]
symptomsIndex.forEach((listOfSymptoms)=>{
const eachList=listOfSymptoms[0].map((symptom,key)=>
  <InputItem 
  symptom={symptom}
  key={key}
  />)
typesOfSymptoms.push([listOfSymptoms[1],eachList])})

const allSymptoms=typesOfSymptoms.map((eachTypeOfSymptom, key)=><SymptomBlock eachTypeOfSymptom={eachTypeOfSymptom} sex={sex} key={key} accordian={accordian}/>)

const initialValues=formUtils.initialValuesObjectBuilder(symptomsIndex)

const validationSchema =Yup.object({
age:Yup.number().required("Please enter the Patient's age"),
  })

const onSubmit= (values)=>{
  values=formUtils.buildSymptomList(values)
  values.sex=sex
  props.setFormData(values)
  
  navigate ('./Report')
}

  return (
  <main>
    <h1>Two Week Rule Referal Helper</h1>
    <h3>Development version - not for clinical use.</h3>
    <DisplaySwitch accordian={accordian} setAccordian={setAccordian} />
   <Formik
   initialValues={initialValues}
   onSubmit={onSubmit}
   validationSchema={validationSchema}
   >
<Form>
  <label htmlFor='age'>Age
  <Field type ="number" id="age" name="age" required/></label>
  <ErrorMessage name="age" >
  {errorMsg=><div className="error">{errorMsg}</div>}
  </ErrorMessage>
  <ChooseSex sex={sex} setSex={setSex}/>
  <div id="allSymptomsHolder">{allSymptoms}</div>
  <input type="submit" value="Show NICE Recommendations"/>
    </Form>
    </Formik>
  </main >
  )
  }


export default SymptomForm;
