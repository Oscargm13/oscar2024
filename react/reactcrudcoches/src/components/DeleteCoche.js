import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class DeleteCoche extends Component {
	state = {
		status: false
	}

	delete = () => {
		let confirmed = window.confirm("¿Estás seguro de que quieres eliminar este coche?");
		if (confirmed) {
			let request = "api/coches/deletecoche/" + this.props.idcoche.idcoche;
			let url = Global.urlApiCoches + request;
			console.log(url);
			console.log(this.props.idcoche.idcoche);
			axios.delete(url).then(response => {
				console.log("eliminado")
				this.setState({
					status: true
				})
			})
		}
	}

	render() {
		if (this.state.status == true) {
			return (<Navigate to="/" />)
		} else {
			return (
				<div>
					<h1>AL PULSAR SE ELIMINARA EL COCHE: {this.props.idcoche.idcoche}</h1>
					<button onClick={this.delete} className='btn btn-danger'>ELIMINAR</button>
				</div>
			)
		}

	}
}
