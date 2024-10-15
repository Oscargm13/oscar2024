import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();
    state ={
        arrNumeros: []
    }

    calcularCollatz = (e) => {
        //var num = 6;
        //console.log("numero")
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
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
  render() {
    return (
        <div>
            <h1>Collatz</h1>
            <form onSubmit={this.calcularCollatz}>
                <label>Numero</label>
                <input type='number' ref={this.cajaNumero}/><br/>
                <button>Enviar datos</button>
            </form>
            {
                this.state.arrNumeros.map((numero, index) => {
                    return (<li key={index}>{numero}</li>)
                })
            }
        </div>
    )
  }
}
