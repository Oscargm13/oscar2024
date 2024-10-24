import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';

export default class DetallesEquipos extends Component {
  state = {
    detalles: []
  }

  loadDetalles = () => {
    let request = "api/equipos/" + this.props.idequipo.idequipo;
    let url = Global.urlApiApuestas + request;
    axios.get(url).then(response => {
      console.log("leyendo equipo");
      this.setState({
        detalles: response.data
      })
    })
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.idequipo != this.props.idequipo){
      console.log(oldProps.idequipo+" "+this.props.idequipo);
      this.loadDetalles();
    }
  }

  componentDidMount = () => {
    this.loadDetalles();
  }

  render() {
    return (
      <div>
        <h1>DetallesEquipos</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">ID equipo</th>
              <th scope="col">nombre</th>
              <th scope="col">champions</th>
              <th scope="col">pagina web</th>
              <th scope="col">imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr scope="col">
                <td>{this.state.detalles.idEquipo}</td>
                <td>{this.state.detalles.nombre}</td>
                <td>{this.state.detalles.champions}</td>
                <td>{this.state.detalles.web}</td>
                <td><img src={this.state.detalles.imagen} width={"150px"} height={"150px"} /></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    )
  }
}
