import React, { useState} from 'react';
import SymptomForm from './routes/SymptomForm.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Report from './routes/report.js';
import ColorectalForm from './routes/colorectalForm.js'
import NonTwrForm from './routes/nonTWRref'



function App(props) {

    const [formData, setFormData]= useState();

    return(
       <BrowserRouter>
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route  exact path='/GP-2wr-aid' element={< SymptomForm setFormData={setFormData}/>}></Route>
      <Route exact path='/GP-2wr-aid/Report' element={<Report formData={formData}/>}></Route>
      <Route exact path='/GP-2wr-aid/colorectal' element={<ColorectalForm formData={formData}/>}></Route>
      <Route exact path='/GP-2wr-aid/nonTWR' element={<NonTwrForm formData={formData}/>}></Route>
    </Routes>
    </BrowserRouter>)

}

export default App
