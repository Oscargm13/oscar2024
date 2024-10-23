import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';

export default class UpdateCoche extends Component {
	state = {
		coches: [],
		status: false
	}

	cajaId = React.createRef();
	cajaMarca = React.createRef();
	cajaModelo = React.createRef();
	cajaConductor = React.createRef();
	cajaImagen = React.createRef();

	modificar = (e) => {
		e.preventDefault()
		let request = "api/coches/updatecoche";
		let url = Global.urlApiCoches + request;
		let id = this.cajaId.current.value;
		let marca = this.cajaMarca.current.value;
		let modelo = this.cajaModelo.current.value;
		let conductor = this.cajaConductor.current.value;
		let imagen = this.cajaImagen.current.value;
		let coche = {
			idCoche: id,
			marca: marca,
			modelo: modelo,
			conductor: conductor,
			imagen: imagen
		}
		axios.put(url, coche).then(response => {
			console.log("modificado"); 
			this.setState({
				status: true
			})
		})
	}

	loadcoche = () => {
		let request = "api/coches/findcoche/" + this.props.idcoche.idcoche;
		console.log(this.props.idcoche.idcoche);
		let url = Global.urlApiCoches + request;
		axios.get(url).then(response => {
			this.setState({
				coches: response.data
			})
		})
	}

	componentDidMount = () => {
		this.loadcoche();
	}

	render() {
		if (this.state.status == true) {
			return (<Navigate to="/" />)
		} else {
			return (
				<div>
					<h1>Update Coche</h1>

					<form>
						{

						}
						<label>ID</label>
						<input type='number' className='form-control' ref={this.cajaId} value={this.state.coches.idCoche} />
						<label>Marca</label>
						<input type='text' className='form-control' ref={this.cajaMarca} defaultValue={this.state.coches.marca} />
						<label>Modelo</label>
						<input type='text' className='form-control' ref={this.cajaModelo} defaultValue={this.state.coches.modelo} />
						<label>Conductor</label>
						<input type='text' className='form-control' ref={this.cajaConductor} defaultValue={this.state.coches.conductor} />
						<label>Imagen</label>
						<input type='text' className='form-control' ref={this.cajaImagen} defaultValue={this.state.coches.imagen} />
						<button onClick={this.modificar}>Modificar</button>
					</form>
				</div>
			)
		}
	}
}
