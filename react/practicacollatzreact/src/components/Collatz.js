import React, { Component } from 'react'

export default class Collatz extends Component {
  inputNumero = React.createRef();
  state = {
    arrNumeros: []
  }

  calcularCollatz = () => {
        let numero = parseInt(this.props.numero);
        var arrayNumeros = [numero, ];
        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
                arrayNumeros.push(numero);
                //console.log("Número / 2: " + numero);
            } else {
                numero = numero * 3 + 1;
                arrayNumeros.push(numero);
                //console.log("Número * 3 + 1: " + numero);
            }
        }
        console.log(arrayNumeros);
        this.setState({
            arrNumeros: arrayNumeros
        })
  }

  componentDidMount = () => {
    this.calcularCollatz();
  }

  render() {
    return (
      <div>
        <h1>Collatz</h1>
        
          <label>Introduce un numero</label>
          <input type='number' ref={this.inputNumero}/>
          <button onClick={this.calcularCollatz}>Calcular</button>
        
        <ul>
          {
            this.state.arrNumeros.map((numero, index) => {
              return(<li key={index}>{numero}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}
