import '../css/App.css';
import React from 'react';
import reportUtils from '../utilities/reportutils.js'
import PathDisplayBlock from '../components/pathsdisplayblocks.js';
import Investigations from '../components/investigations';



function Report(props)
{
   const formData=props.formData
   
  let modifiedFormData=reportUtils.ValidateTwr(formData)
  let pathBlocks=modifiedFormData.sortedPaths.map((eachPath,index)=><PathDisplayBlock eachPath={eachPath} modifiedFormData={modifiedFormData} key={index}/>)

  let investigationBlock=<Investigations formData={props.formData}/>

   return(
   <main>
   <h1>Referal Options</h1>
   <div>
     {pathBlocks}
   </div>
   <div>
     {investigationBlock}
   </div>
   </main>
)
}

export default Report
