import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    state ={
        arrNumeros: [],
        valor: 0
    }
    
    calcularTabla = (e) => {
        e.preventDefault();
        let valor = parseInt(this.cajaNumero.current.value);
        let resultado = 0;
        let arrNumeros = [];
        let i = 1;
        while(i<=10){
            resultado = i * valor;
            arrNumeros.push(resultado);
            i++;
        }
        this.setState ({
            valor: valor,
            arrNumeros: arrNumeros
        })
    }
    render() {

        return (
            <div>
                <h1>TablaMultiplicar</h1>
                <form onSubmit={this.calcularTabla}>
                    <label>Numero</label>
                    <input type='number' ref={this.cajaNumero}/><br/>
                    <button>Enviar datos</button>
                </form>
                <ul>
                {
                    this.state.arrNumeros.map((numero, index) => {
                        return (<li key={index}>{this.state.valor} X {index+1} = {numero}</li>)
                    })
                }
                </ul>
            </div>
        )
  }
}
