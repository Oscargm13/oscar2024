import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import mono from '../assets/images/mono.jfif'
import { NavLink } from 'react-router-dom';

export default class DetalleDepartamento extends Component {
    state = {
        departamento: null
    }

    finDepartamento = () => {
        let request = "api/departamentos/" + this.props.id;
        let url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidMount = () => {
        this.finDepartamento();
    }
    render() {
        return (
            <div>
                <h1>DetalleDepartamento: {this.props.id}</h1>
                
                {
                    this.state.departamento ?
                    (<ul className='list-group'>
                        <li className='list-group-item'>
                            Numero: {this.state.departamento.numero}
                        </li>
                        <li className='list-group-item'>
                            Nombre: {this.state.departamento.nombre}
                        </li>
                        <li className='list-group-item'>
                            Localidad: {this.state.departamento.localidad}
                        </li>
                    </ul>) : (<img src={mono}/>)
                }
                <NavLink to="/">Back to List</NavLink>
            </div>
        )
    }
}
