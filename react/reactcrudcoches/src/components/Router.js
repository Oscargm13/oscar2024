import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeCoches from "./HomeCoches"
import MenuCoches from './MenuCoches'
import CreateCoche from './CreateCoche'
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuCoches />
                <Routes>
                    <Route path="/" element={<HomeCoches />} />
                    <Route path="/create" element={<CreateCoche />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
