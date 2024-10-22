import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';

export default class DeleteDepartamento extends Component {
    deleteDepartamento = () => {
        let request = "api/departamentos/" + this.props.idDepartamento;
        let url = Global.apiUrlDepartamentos + request;
        console.log(this.props.idDepartamento);
        axios.delete(url).then(response => {
            this.loadDepartamentos();
        })
    }
    //confirmed = window.confirm("¿Estás seguro de que quieres eliminar este departamento?");

    // componentDidMount = () => {
    //     //if (this.confirmed) {
    //         console.log("confirmado");
    //         this.deleteDepartamento();
    //     //}
    // }
    render() {
        return (
            <div>
                <h1>DeleteDepartamento {this.props.idDepartamento}</h1>
                {

                }
            </div>
        )
    }
}
