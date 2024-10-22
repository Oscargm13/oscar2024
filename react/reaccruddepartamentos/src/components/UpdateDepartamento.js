import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    UpdateDepartamento = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let nombre = (this.cajaNombre.current.value);
        let localidad = (this.cajaLocalidad.current.value);
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.put(url, departamento).then(response => {
            console.log("Modificando...")
            this.setState({
                status: true
            })
        })
        
    }
    state = {
        status: false
    }
    render() {
        return (
            <div>
                <h1>UpdateDepartamento</h1>
                {
                    this.state.status == true &&
                    (<NavLink to={"/"}>back to index</NavLink>)
                }
                <form>
                    <label>ID</label>
                    <input type='text' ref={this.cajaId} defaultValue={this.props.id} className='form-control'/>
                    <label>Nombre</label>
                    <input type='text' ref={this.cajaNombre} defaultValue={this.props.nombre} className='form-control'/>
                    <label>Localidad</label>
                    <input type='text' ref={this.cajaLocalidad} defaultValue={this.props.localidad} className='form-control'/>
                    <button onClick={this.UpdateDepartamento}>Modificar</button>
                </form>
            </div>
        )
    }
}
