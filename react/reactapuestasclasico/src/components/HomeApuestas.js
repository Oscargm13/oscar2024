import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class HomeApuestas extends Component {
	state = {
		apuestas: []
	}

	cajaId = React.createRef();
	cajaUsuario = React.createRef();
	cajaResultado = React.createRef();
	cajaFecha = React.createRef();
	botonId = React.createRef();

	loadApuestas = () => {
		let request = "api/apuestas"
		let url = Global.urlApiApuestas + request;
		axios.get(url).then(response => {
			console.log("leyendo");
			this.setState({
				apuestas: response.data
			})
		})
	}

	crearApuesta = (e) => {
		e.preventDefault();
		let request = "api/apuestas";
		let url = Global.urlApiApuestas + request;
		let id = this.cajaId.current.value;
		let usuario = this.cajaUsuario.current.value;
		let resultado = this.cajaResultado.current.value;
		let fecha = this.cajaFecha.current.value;
		let apuesta = {
			idApuesta: id,
			usuario: usuario,
			resultado: resultado,
			fecha: fecha
		}
		axios.post(url, apuesta).then(response => {
			console.log("apuesta realizada");
		})
	}

	eliminarApuesta = (entrada) => {
		console.log(entrada)
	}

	componentDidMount = () => {
		this.loadApuestas();
	}

	render() {
		return (
			<div>
				<h1>HomeApuestas</h1>
				<table className='table'>
					<thead>
						<tr>
							<th scope="col">ID apuesta</th>
							<th scope="col">usuario</th>
							<th scope="col">resultado</th>
							<th scope="col">fecha</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.apuestas.map((apuesta, index) => {
								return (
									<tr key={index} scope="col">
										<td>{apuesta.idApuesta}</td>
										<td>{apuesta.usuario}</td>
										<td>{apuesta.resultado}</td>
										<td>{apuesta.fecha}</td>
										<td>
											<button className='btn btn-danger' ref={this.botonId}
											onClick={this.eliminarApuesta(apuesta.idApuesta)}>Eliminar</button>
										</td>
									</tr>

								)

							})
						}
					</tbody>
				</table>
				<hr />
				<hr />
				<hr />
				<h1>INSERTAR NUEVA APUESTA</h1>
				<form>
					<label>id</label>
					<input type='text' ref={this.cajaId} className='form-control' />
					<label>usuario</label>
					<input type='text' ref={this.cajaUsuario} className='form-control' />
					<label>resultado</label>
					<input type='text' ref={this.cajaResultado} className='form-control' />
					<label>fecha</label>
					<input type='text' ref={this.cajaFecha} className='form-control' />

					<button onClick={this.crearApuesta}>Crear apuesta</button>
				</form>
			</div>
		)
	}
}
