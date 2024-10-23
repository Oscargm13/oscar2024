import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomeCoches from "./HomeCoches"
import MenuCoches from './MenuCoches'
import CreateCoche from './CreateCoche'
import DetallesCoche from './DetallesCoche'
import UpdateCoche from './UpdateCoche'
import DeleteCoche from './DeleteCoche'
export default class Router extends Component {
	render() {

		function DetallesCocheElement() {
			let coche = useParams();
			return (<DetallesCoche coche={coche} />)

		}

		function UpdateCocheElement() {
			let idcoche = useParams();
			return (<UpdateCoche idcoche={idcoche} />)
		}

		function DeleteCocheElement() {
			let idcoche = useParams();
			return (<DeleteCoche idcoche={idcoche}/>)
		}

		return (
			<BrowserRouter>
				<MenuCoches />
				<Routes>
					<Route path="/" element={<HomeCoches />} />
					<Route path="/create" element={<CreateCoche />} />
					<Route path="/detalles/:coche" element={<DetallesCocheElement />} />
					<Route path="/update/:idcoche" element={<UpdateCocheElement />} />
					<Route path="/delete/:idcoche" element={<DeleteCocheElement />} />
				</Routes>
			</BrowserRouter>
		)
	}
}
