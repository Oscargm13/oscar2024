import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Collatz from './Collatz'

export default class Router extends Component {
  render() {
    function CollatzElement(){
      var {minumero} = useParams();
      return <Collatz numero={minumero}/>
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collatz/:minumero' element={<CollatzElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
