import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class HomeApuestas extends Component {
    state = {
        apuestas: []
    }

    loadApuestas = () => {
        let request = "api/apuestas"
        let url = Global.urlApiApuestas + request;
        axios.get(url).then(response => {
            console.log("leyendo");
            this.setState({
                apuestas: response.data
            })
        })
    }

    crearApuesta = () => {
        let request = "api/apuestas"
        let url = Global.urlApiApuestas + request
        axios.post(url)
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        return (
            <div>
                <h1>HomeApuestas</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID apuesta</th>
                            <th scope="col">usuario</th>
                            <th scope="col">resultado</th>
                            <th scope="col">fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuesta, index) => {
                                return(
                                    <tr key={index} scope="col">
                                        <td>{apuesta.idApuesta}</td>
                                        <td>{apuesta.usuario}</td>
                                        <td>{apuesta.resultado}</td>
                                        <td>{apuesta.fecha}</td>
                                    </tr>
                                    
                                )
                                
                            })
                        }
                    </tbody>
                </table>
                <form>
                    <label>id</label>
                    <input
                </form>
            </div>
        )
    }
}
