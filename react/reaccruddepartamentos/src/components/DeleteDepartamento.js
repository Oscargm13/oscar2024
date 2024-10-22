import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';
import { Navigate, NavLink } from 'react-router-dom';

export default class DeleteDepartamento extends Component {
	state = {
		status: false
	}

	delete = () => {
		let confirmed = window.confirm("¿Estás seguro de que quieres eliminar este departamento?");
		if (confirmed) {
			let request = "api/departamentos/" + this.props.id;
			let url = Global.apiUrlDepartamentos + request;
			console.log(url);
			console.log(this.props.id);
			axios.delete(url).then(response => {
				console.log("eliminado")
				this.setState({
					status: true
				})
			})
		}
	}
	render() {
		return (
			<div className="container text-center mt-5">
				{
					this.state.status == true &&
					(<Navigate to="/" />)
				}
				<h1 className='h1 mb-4'>Se va a eliminar el departamento con ID: {this.props.id}</h1>
				<button onClick={this.delete} className='btn btn-danger'>Eliminar {this.props.id}</button>
				{
					console.log(this.props.id)
				}
			</div>
		)
	}
}
