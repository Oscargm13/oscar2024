import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Navigate, NavLink } from 'react-router-dom'

export default class HomeCoches extends Component {

	state = {
		coches: []
	}

	loadCoches = () => {
		let request = "api/coches";
		let url = Global.urlApiCoches + request;
		axios.get(url).then(resopnse => {
			this.setState({
				coches: resopnse.data
			})
		})
	}

	componentDidMount = () => {
		this.loadCoches();
	}

	render() {
		return (
			<div>
				<h1>Home coches</h1>
				<table className='table'>
					<thead className='thead-dark'>
						<tr>
							<th scope="col">Marca</th>
							<th scope="col">Modelo</th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.coches.map((coche, index) => {
								return (
									<tr key={index}>
										<td>{coche.marca}</td>
										<td>{coche.modelo}</td>
										<td>
											<NavLink to={"/detalles/" + coche.idCoche} className="btn btn-info">
												Detalles
											</NavLink>
											<NavLink to={"/update/" + coche.idCoche} className="btn btn-link">
												Modificar
											</NavLink>
										</td>
										<td>
											<NavLink to={"/delete/" + coche.idCoche} className="btn btn-danger">
												Eliminar
											</NavLink>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}
