import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {
  state = {
    empleados: [],
    texto: ""
  }
  loadEmpleados = () => {
    let idDepartamento = this.props.idDepartamento
    console.log(this.props)
    var request = "api/empleados/empleadosdepartamento/" + idDepartamento;
    console.log(idDepartamento);
    var url = Global.urlEmpleados + request;
    axios.get(url).then(response => {
      this.setState({
        empleados: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadEmpleados();
  }
  //RECIBIMOS LAS ANTIGUAS PROPS
  componentDidUpdate = (oldProps) => {
    //console.log("leyendo " + this.props.idDepartamento);
    console.log("Old props: " + oldProps.idDepartamento);
    console.log("CurrentProps" + this.props.idDepartamento);
    if (oldProps.idDepartamento != this.props.idDepartamento) {
      this.loadEmpleados();
    }

  }

  render() {
    return (
      <div>
        <h1>Empleados</h1>
        <h2>{this.state.texto}</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.empleados.map((empleado, index) => {
                return (
                  <tr key={index}>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.oficio}</td>
                    <td>{empleado.departamento}</td>
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
