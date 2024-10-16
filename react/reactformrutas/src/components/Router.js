import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Musica from './Musica';
import Cine from './Cine';
import Collatz from './Collatz';
import TablaMultiplicar from './TablaMultiplicar';
import FormSimple from './FormSimple';
import TablaMultiplicarSelect from './TablaMultplicarSelect';
import SeleccionMultiple from './SeleccionMultiple';
 
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/musica' element={<Musica/>}/>
        <Route path='/cine' element={<Cine/>}/>
        <Route path='/collatz' element={<Collatz/>}/>
        <Route path='/tablamultiplicar' element={<TablaMultiplicar/>}/>
        <Route path='/formsimple' element={<FormSimple/>}/>
        <Route path='/tablamultiplicarselect' element={<TablaMultiplicarSelect/>}/>
        <Route path='/seleccionmultiple' element={<SeleccionMultiple/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
