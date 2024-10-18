import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TablaMultiplicar from './TablaMultiplicar'
import Home from './Home'
import notFound from './notFound'

export default class Router extends Component {
  
  render() {
    function TablaMultiplicarElement() {
      var {minumero} = useParams();
      return <TablaMultiplicar numero={minumero}/>
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>

                <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
                {/*PARA LAS RUTAS QUE NO EXISTEN DEBEMOS UTILIZAR UN ASTERISCO DENTRO DEL PATH
                DEBE SER LA ULTIMA ETIQUETA QUE TENGAMOS EN ROUTER*/}
                <Route path='*' element={<notFound/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
