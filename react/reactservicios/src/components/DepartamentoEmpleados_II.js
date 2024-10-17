import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class DepartamentoEmpleados_II extends Component {

	selectDepartamento = React.createRef();
	state = {
		departamentos: [],
		empleados: []
	}

	loadDepartamentos = () => {
		let request = "api/departamentos";
		let url = Global.urlDepartamentos + request;
		axios.get(url).then(response => {
			console.log("Leyendo");
			this.setState({
				departamentos: response.data
			})
		})
	}

	buscarEmpleados = (e) => {
		e.preventDefault()
		let idDepartamento = this.selectDepartamento.current.value;

		let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
		let url = Global.urlEmpleados + request;
		axios.get(url).then(response => {
			//console.log("Buscando empleados");
			this.setState({
				empleados: response.data
			})
		})
	}

	componentDidMount = () => {
		this.loadDepartamentos();
	}

	render() {
		return (
			<div>
				<h1>DepartamentoEmpleados_II</h1>
				<form>
					<label>Seleccione el departamento</label>
					<select ref={this.selectDepartamento}>
						{
							this.state.departamentos.map((departamento, index) => {
								//console.log(departamento.Numero);
								return (
									<option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
								)
							})
						}
					</select><br />
					<button onClick={this.buscarEmpleados}>Buscar empleados</button>
				</form>
				<h2>Lista de empleados</h2>
				<ul>
					{
						this.state.empleados.map((empleado, index) => {
							return (

								<li key={index}>Apellido: {empleado.apellido} -
									Oficio: {empleado.oficio} -
									salario: {empleado.salario} -
									departamento: {empleado.departamento}</li>

							)
						})
					}
				</ul>
			</div>
		)
	}
}
