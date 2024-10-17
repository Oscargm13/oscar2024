import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class BuscarCoches extends Component {
    state = {
        coches: []
    }
    cajaMarca = React.createRef();
    buscarCoches = (e) => {
        e.preventDefault();
        //let marca = this.cajaMarca.current.value;
        let request = "/webresources/coches";
        let marca = this.cajaMarca.current.value;
        console.log(marca)
        axios.get(Global.urlApiCoches + request).then(response => {
            console.log("Leyendo servicio");
            this.setState({
              coches: response.data
            })
          })
    }


    render() {
        return (
            <div>
                <h1>BuscarCoches</h1>
                <form>
                    <label>Introduzca la marca</label>
                    <input type='text' ref={this.cajaMarca}/>
                    <button onClick={this.buscarCoches}>Cargar coches</button>
                </form>
                <table border="1">
                    <tr>
                        <th>marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                    </tr>
                    {
                    this.state.coches.map((coche, index)=>{
                        console.log(this.cajaMarca.value)
                        if(coche.marca == this.cajaMarca.current.value) {
                            return(
                            <tr>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen} style={{width: "150px", height: "150px"}}/></td>
                            </tr>
                            )
                        }
                    })
                    }
                </table>
                
            </div>
        )
    }
}
