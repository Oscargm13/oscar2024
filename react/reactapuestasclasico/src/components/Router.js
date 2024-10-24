import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeApuestas from './HomeApuestas'
import MenuApuesas from './MenuApuesas'
import DetallesEquipos from './DetallesEquipos'

export default class Router extends Component {
    render() {
        function DetallesEquiposElement() {
            let idequipo = useParams();
            return (
                <DetallesEquipos idequipo={idequipo} />
            )

        }
        return (
            <BrowserRouter>
                <MenuApuesas />
                <Routes>
                    <Route path='/' element={<HomeApuestas />} />
                    <Route path='/equipo/:idequipo' element={<DetallesEquiposElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
