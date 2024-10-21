import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import MenuHospitales from './MenuHospitales'
import Doctores from './Doctores'

export default class Router extends Component {
  render() {
    function DoctoresElement() {
      var{idhospital} = useParams();
      return <Doctores idhospital={idhospital}/>
    }
    return (
      <BrowserRouter>
      <MenuHospitales/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctores/:idhospital' element={<DoctoresElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
