import '../css/App.css';
import React from 'react';
import reportUtils from '../utilities/reportutils.js'
import PathDisplayBlock from '../components/pathsdisplayblocks.js';


function Report(props)
{
   const formData=props.formData
   props.formData.validPathways={}


  let modifiedFormData=reportUtils.ValidateTwr(formData)
  let pathBlocks=modifiedFormData.sortedPaths.map((eachPath,index)=><PathDisplayBlock eachPath={eachPath} modifiedFormData={modifiedFormData} key={index}/>)

  

   return(
   <main>
   <h1>Referal Options</h1>
   <div>
     {pathBlocks}
   </div>
   </main>
)
}

export default Report
