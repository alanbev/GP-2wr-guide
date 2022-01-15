import '../css/App.css';
import React from 'react';
import reportUtils from '../utilities/reportutils.js'
import TwrRefOptions from '../components/twrRefOption.js'
import  NonTwrRefOption from '../components/nonTwrRefOption.js'


function Report(props)
{
   const formData=props.formData
   props.formData.validPathways={}


   let modifiedFormData=reportUtils.ValidateTwr(formData)
   let validPathwaysList=modifiedFormData.paths.map((item)=>item[0])
   const coloDG30Message= "The patient does not meet the NICE criteria for Two week rule colorectal referal but on basis of their symtoms, FIT testing is recommended with consideration of a colorectal 2wr referal if FIT +ve"
   const noTwrMessage="The patient's symptoms do not meet the NICE criteria for 2wr referal.  Consider making an referal outside the two week rule process or using Advice and Guidance"

   let twrOptions=validPathwaysList.map((item,index)=><TwrRefOptions pathway={item} key={index}/>)
   console.log(twrOptions)

   return(
   <main>
   <h1>Referal Options</h1>
   <div id="twroption">{twrOptions}</div>
   <span></span>
   <span> {(formData.coloDG30 ? coloDG30Message : null)}</span>
   <span> {((formData.paths.length===0 && (!formData.coloDG30)) ? noTwrMessage : null)}</span>
   <span id="displayNTWR">{(formData.paths.length===0 ? <NonTwrRefOption formData={props.formData}/> : null)}</span>
   </main>
  )
} 

export default Report

