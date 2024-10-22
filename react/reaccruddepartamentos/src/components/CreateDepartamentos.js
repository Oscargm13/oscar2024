import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class CreateDepartamentos extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    insertarDepartamentos = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.post(url, departamento).then(reponse => {
            console.log("Insertado")
            this.setState({
                status: true
            })
        })
    }
    render() {
        if (this.state.status == true){
            return (<Navigate to="/"/>)
        }else{
            return (
                <div>
                    <h1>Nuevo departamento</h1>
                    <form>
                        <label>Id departamento</label>
                        <input type='text' ref={this.cajaId} className='form-control'></input>
                        <label className='form-label'>Nombre</label>
                        <input type='text' ref={this.cajaNombre} className='form-control'></input>
                        <label>localidad</label>
                        <input type='text' ref={this.cajaLocalidad} className='form-control'></input>
                        <button className='btn btn-info' onClick={this.insertarDepartamentos}>insertar</button>
                    </form>
                </div>
            )
        }
    }
}
