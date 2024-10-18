import React, { Component } from 'react';
import axios from 'axios';

export default class JugadoresEquipos extends Component {
    selectEquipos = React.createRef();
    cajaJugador = React.createRef();
    tabla = React.createRef();
    state = {
        equipos: [],
        jugadores: []
    }

    cargarEquipos = () => {
        let url = "https://apiejemplos.azurewebsites.net/";
        let request = "api/equipos";
        //console.log("cargar");
        axios.get(url + request).then(response => {
            //console.log("leyendo...");
            console.log(response.data);
            this.setState({
                equipos: response.data
            })
        })
    }

    buscarJugadores = (e) => {
        e.preventDefault();
        let equipo = this.selectEquipos.current.value;
        let url = "https://apiejemplos.azurewebsites.net/"
        let request = "api/Jugadores/JugadoresEquipos/" + equipo;
        //console.log(equipo);
        axios.get(url + request).then(response => {
            console.log("leyendo jugadores...");
            this.setState({
                jugadores: response.data
            })
        })
    }

    buscarNombre = (e) => {
        e.preventDefault();
        let nombre = this.cajaJugador.current.value;
        let url = "https://apiejemplos.azurewebsites.net/"
        let request = "api/Jugadores/FindJugadores/" + nombre
        console.log("leyendo...")
        axios.get(url + request).then(response => {
            console.log(response.data);
            this.setState({
                jugadores: response.data
            })
        })
    }
    generarTabla = () => {
        if (this.state.jugadores.length != 0) {
            return (
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>posicion</th>
                    <th>pais</th>
                    <th>Fecha de nacimiento</th>
                </tr>
            )
        }
    }
    componentDidMount = () => {
        this.cargarEquipos();
    }
    render() {

        return (
            <div>
                <h1>
                    JugadoresEquipos
                </h1>
                <label>Nombre jugador</label>
                <input type='text' ref={this.cajaJugador} />
                <button onClick={this.buscarNombre}>Buscar por nombre</button>
                <hr />
                <form>
                    <select ref={this.selectEquipos}>
                        {
                            this.state.equipos.map((equipo, index) => {
                                console.log(equipo);
                                return (
                                    <option key={index} value={equipo.idEquipo}>{equipo.nombre}</option>
                                )

                            })
                        }
                    </select>
                    <button onClick={this.buscarJugadores}>Buscar jugadores</button>
                </form>
                <table border={1}>
                    <tbody>
                        {
                            this.generarTabla()
                        }

                        {
                            this.state.jugadores.map((jugador, index) => {
                                return (


                                    <tr key={index}>
                                        <td><img src={jugador.imagen} width="150px" height={"150px"} /></td>
                                        <td>{jugador.nombre}</td>
                                        <td>{jugador.posicion}</td>
                                        <td>{jugador.pais}</td>
                                        <td>{jugador.fechaNacimiento}</td>
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
