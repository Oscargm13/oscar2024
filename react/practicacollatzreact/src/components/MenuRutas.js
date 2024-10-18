import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/collatz/6'>Collatz</a></li>
        </ul>
      </div>
    )
  }
}
