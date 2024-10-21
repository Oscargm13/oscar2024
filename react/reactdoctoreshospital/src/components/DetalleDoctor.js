import axios from 'axios'
import React, { Component } from 'react'

export default class DetalleDoctor extends Component {
    render() {
        return (
            <div>
                <h1>DETALLES</h1>
                <table className='table-bordered table-responsive-xxl'>
                    <tbody>
                        <tr><td>Apellido: {this.props.apellido}</td></tr>
                        <tr><td>id doctor:  {this.props.idDoctor}</td></tr>
                        <tr><td>especialidad: {this.props.especialidad}</td></tr>
                        <tr><td>salario: {this.props.salario}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
