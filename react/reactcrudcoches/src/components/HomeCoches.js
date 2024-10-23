import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class HomeCoches extends Component {

  state = {
    coches: []
  }

  loadCoches = () => {
    let request = "api/coches";
    let url = Global.urlApiCoches + request;
    axios.get(url).then(resopnse => {
      this.setState({
        coches: resopnse.data
      })
    })
  }

  componentDidMount = () => {
    this.loadCoches();
  }

  render() {
    return (
      <div>
        <h1>Home coches</h1>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope="col">IdCoche</th>
              <th scope="col">marca</th>
              <th scope="col">modelo</th>
              <th scope="col">conductor</th>
              <th scope="col">imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.coches.map((coche, index) => {
                return(
                  <tr key={index}>
                    <td>{coche.idCoche}</td>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>{coche.conductor}</td>
                    <td>
                      <img src={coche.imagen} width="150px" height="150px"></img>
                    </td>
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
