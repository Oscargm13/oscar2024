import React, { Component } from 'react'

export default class MenuRutas
 extends Component {
  render() {
    return (
      <div>
        <h1>
            MenuRutas
        </h1>
        <ul>
            <li> <a href='/'>Home</a> </li>
            <li> <a href='/tabla/21'>Multiplicar 21</a> </li>
            <li> <a href='/tabla/8'>Multiplicar 8</a> </li>
            <li> <a href='/noexisto'>Sin ruta</a> </li>
        </ul>
        <hr/>
      </div>
      
    )
  }
}
