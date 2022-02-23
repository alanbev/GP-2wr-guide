import React, { useState} from 'react';
import SymptomForm from './routes/SymptomForm.js';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import Report from './routes/report.js';
import ColorectalForm from './routes/colorectalForm.js'
import NonTwrForm from './routes/nonTWRref'


function App(props) {

    const [formData, setFormData]= useState();

    return(
       <HashRouter>
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route  exact path='/' element={< SymptomForm setFormData={setFormData}/>}></Route>
      <Route exact path='/Report' element={<Report formData={formData}/>}></Route>
      <Route exact path='/colorectal' element={<ColorectalForm formData={formData}/>}></Route>
      <Route exact path='//nonTWR' element={<NonTwrForm formData={formData}/>}></Route>
    </Routes>
    </HashRouter>)
}

export default App
