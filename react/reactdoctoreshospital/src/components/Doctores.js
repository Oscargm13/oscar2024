import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import DetalleDoctor from './DetalleDoctor'

export default class Doctores extends Component {

    state = {
        doctores: [],
        idDoctor: "",
        especialidad: "",
        salario: "",
        apellido: ""
    }

    loadDoctores = () => {
        var idhospital = this.props.idhospital;
        var request = "api/doctores/doctoreshospital/" + idhospital;
        var url = Global.apiDoctores + request;
        axios.get(url).then(response => {
            console.log("Leyendo servicio doctores")
            this.setState({
                doctores: response.data
            })
        })
    }

    detalles = (doctor,) => {
        this.setState({
            apellido: doctor.apellido,
            idDoctor: doctor.idDoctor,
            especialidad: doctor.especialidad,
            salario: doctor.salario
        })
        return(1)
    }

    componentDidMount = () => {
        this.loadDoctores();
    }

    componentDidUpdate = (oldProps) => {
        //NUNCA DEBEREMOS LLAMAR A NADA EN DIBUJO SI NO HAY UN IF
        if (this.props.idhospital != oldProps.idhospital) {
            this.loadDoctores();
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Doctores
                    <span style={{ color: "red" }}>{" " + this.props.idhospital}</span>

                </h1>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Detalles doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doctor, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doctor.apellido}</td>
                                        <td><button onClick={() => this.detalles(doctor)}>Ver detalles</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
                    {
                       this.state.idDoctor &&(<DetalleDoctor idDoctor={this.state.idDoctor} especialidad={this.state.especialidad} salario={this.state.salario}
                       apellido={this.state.apellido}/>)
                    }
                
            </div>
        )
    }
}
