import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormulaPage from './Components/FormulaPage';
import Homepage from './Components/Homepage';
import MyNavbar from './Components/MyNavbar'
import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Disclaimer from './Components/Disclaimer';
import ReferenceFormula from './Components/ReferenceFormula';
function App() {
  return (<>

    <MyNavbar></MyNavbar>
    <Routes>
      <Route path='/pharmacokinetics' element={<Homepage></Homepage>}></Route>
      <Route path='/formula/:formulaName' element={<FormulaPage></FormulaPage>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/disclaimer' element={<Disclaimer></Disclaimer>}></Route>
      <Route path='/ReferenceFormula' element={<ReferenceFormula></ReferenceFormula>}></Route>
    </Routes>
    <Footer></Footer>
  </>











  )
}

export default App;
