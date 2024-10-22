import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import mono from '../assets/images/mono.jfif'
import { NavLink } from 'react-router-dom';

export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }

    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response => {
            console.log("leyendo departamentos")
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    deleteDepartamento = (idDepartamento) => {
        let request = "api/departamentos/" + idDepartamento;
        let url = Global.apiUrlDepartamentos + request;
        axios.delete(url).then(response => {
            this.loadDepartamentos();
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        if (this.state.status == false) {
            return (<img src={mono} />)
        } else {
            return (
                <div style={{ padding: "5%", textAlign: "center" }}>
                    <h1>Home Departamentos</h1>
                    <table className='table table-hover table-group-divider'>
                        <thead>
                            <th>ID departamentos</th>
                            <th>Nombre</th>
                            <th>Local</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((dept, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{dept.numero}</td>
                                            <td>{dept.nombre}</td>
                                            <td>{dept.localidad}</td>
                                            <td>
                                                <NavLink to={"/detalles/" + dept.numero} className="btn btn-info">
                                                    Detalles
                                                </NavLink>
                                                <NavLink to={"/update/" + dept.numero
                                                    + "/" + dept.nombre + "/" + dept.localidad} className="btn btn-group">
                                                    update
                                                </NavLink>

                                            </td>
                                            {/* <td><button className='btn-danger' onClick={() => {
                                                this.deleteDepartamento(dept.numero);
                                            }}>
                                                Delete
                                            </button></td> */
                                                <NavLink to={"/delete/" + dept.numero} className="btn btn-danger">
                                                    eliminar
                                                </NavLink>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            )
        }
    }
}
