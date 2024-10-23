import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios'

export default class CreateCoche extends Component {
	cajaId = React.createRef();
	cajaMarca = React.createRef();
	cajaModelo = React.createRef();
	cajaConductor = React.createRef();
	cajaImagen = React.createRef();

	createCar = (e) => {
		e.preventDefault()
		let request = "api/coches/insertcoche";
		let url = Global.urlApiCoches + request;
		let id = this.cajaId.current.value;
		let marca = this.cajaMarca.current.value;
		let modelo = this.cajaModelo.current.value;
		let conductor = this.cajaConductor.current.value;
		let imagen = "https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2021/03/coches-miticos-historia-automocion-3.jpg";
		let coche = {
			idCoche: id,
			marca: marca,
			modelo: modelo,
			conductor: conductor,
			imagen: imagen
		}

		axios.post(url, coche).then(response => {
			console.log("coche insertado");
			
		})
	}

	render() {
		return (
			<div>
				<h1>CreateCoche</h1>
				<form className=''>
					<label>id coche</label>
					<input type='text' ref={this.cajaId} className='form-control' />
					<label>Marca</label>
					<input type='text' ref={this.cajaMarca} className='form-control' />
					<label>Modelo</label>
					<input type='text' ref={this.cajaModelo} className='form-control' />
					<label>Conductor</label>
					<input type='text' ref={this.cajaConductor} className='form-control' />
					<label>Imagen</label>
					<input type='image' ref={this.cajaImagen} className='form-control' />
					<button onClick={this.createCar}>Crear coche</button>
				</form>
			</div>
		)
	}
}
