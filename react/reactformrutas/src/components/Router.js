import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Musica from './Musica';
import Cine from './Cine';
 
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/musica' element={<Musica/>}/>
        <Route path='/cine' element={<Cine/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
