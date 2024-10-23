import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Trabajadores extends Component {
    state = {
        trabajadores: [],
        mensaje: "",
        aumento: 0
    }

    cajaAumento = React.createRef();

    loadTrabajadores = () => {
        let idHospitales = this.props.idhospitales;
        console.log(idHospitales);
        if (idHospitales.length != 0) {
            let data = "";
            for (var id of idHospitales) {
                data += "idhospital= " + id + "&";
            }
            data = data.substring(0, data.length - 1);
            this.setState({
                mensaje: data
            })
            let request = "api/trabajadores/trabajadoreshospitales?" + data;
            let url = Global.urlHospitales + request;
            axios.get(url).then(response => {
                console.log("Leyendo Trabajadores");
                this.setState({
                    trabajadores: response.data
                })
            })    
        }
    }

    // subirSalario = (e) => {
    //     e.preventDefault()
    //     var idhospital = parseInt(this.props.idhospitales);
    //     var incremento = this.cajaAumento.current.value;
    //     console.log(idhospital+" "+incremento)
    //     var request = "api/doctores/updatesalariotrabajadoreshospitales/incremento=" + idhospital + "/" + incremento
    //     axios.put(Global.urlHospitales + request).then(response => {
    //         console.log("aumento realizado");
    //         this.loadTrabajadores();

    //     })
    // }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales) {
            this.loadTrabajadores();
        }
    }

    componentDidMount = () => {
        this.loadTrabajadores()
    }
    render() {
        return (
            <div>
                {/* <h2>{this.state.mensaje}</h2> */}
                <h1 style={{ color: "red" }}>Trabajadores</h1>
                <table className='table table-group-divider'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr key={index}>
                                        <td className=''>{trabajador.apellido}</td>
                                        <td className=''>{trabajador.salario}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                

                <ul>
                    {
                        this.props.idhospitales.map((id, index) => {
                            return (<li key={index}>{id}</li>)
                        })
                    }
                </ul>

            </div>
        )
    }
}
