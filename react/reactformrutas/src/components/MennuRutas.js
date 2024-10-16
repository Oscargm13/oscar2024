import React, { Component } from 'react'

export default class MennuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/cine'>Cine</a>
            </li>
            <li>
                <a href='/musica'>Musica</a>
            </li>
            <li>
                <a href='/formsimple'>FormSimple</a>
            </li>
            <li>
                <a href='/tablamultiplicar'>tabla multiplicar</a>
            </li>
            <li>
                <a href='/collatz'>collatz</a>
            </li>
            <li>
                <a href='/tablamultiplicarselect'>tabla multiplicar</a>
            </li>
            <li>
                <a href='/seleccionmultiple'>Seleccion Multiple</a>
            </li>
        </ul>
      </div>
    )
  }
}
