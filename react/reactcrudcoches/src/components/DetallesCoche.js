import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';

export default class DetallesCoche extends Component {
	state = {
		coches: []
	}

	loadDetalles = () => {
		let request = "api/coches/findcoche/" + this.props.coche.coche;
		let url = Global.urlApiCoches + request;

		console.log(this.props.coche.coche);
		axios.get(url).then(response => {

			this.setState({
				coches: response.data

			})
			console.log("leyendo")
		})
	}

	componentDidMount = () => {
		this.loadDetalles();
	}

	render() {
		return (
			<div>
				<h1>Detalles del coche: {this.state.coches.idCoche}</h1>
				<table className='table'>
					<thead className='thead-dark'>
						<tr>
							<th scope="col">Marca</th>
							<th scope="col">Modelo</th>
							<th scope="col">Conductor</th>
							<th scope="col">Imagen</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{this.state.coches.marca}</td>
							<td>{this.state.coches.modelo}</td>
							<td>{this.state.coches.conductor}</td>
							<td>
								<img src={this.state.coches.imagen} width="150px" height="150px"></img>
							</td>
						</tr>
					</tbody>

				</table>
			</div>
		)
	}
}
