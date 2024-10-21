import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas
 extends Component {
  render() {
    return (
      <div>
        <h1>
            MenuRutas
        </h1>
        <ul>
            <li> <NavLink to='/'>Home</NavLink> </li>
            <li> <NavLink to='/tabla/21'>Multiplicar 21</NavLink> </li>
            <li> <NavLink to='/tabla/8'>Multiplicar 8</NavLink> </li>
            <li> <NavLink to='/noexisto'>Sin ruta</NavLink> </li>
        </ul>
        <hr/>
      </div>
      
    )
  }
}
