import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {
    selectNumero = React.createRef();
    state ={
        arrSelect: [],
        arrNumeros: [],
        valor: 0
    }
    rellenarSelect = () => {
        let i = 1;
        let arrSelect = [];
        while(i<=5){
            arrSelect.push(i);
            i++;
        }
        console.log("arrSelect")
        this.setState({
            arrSelect: arrSelect
        })
    }
    cargartabla = () => {
        this.componentDidMount(this.rellenarSelect())
    }
    calcularTabla = (e) => {
        e.preventDefault();
        let valor = parseInt(this.selectNumero.current.value);
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
                {this.cargartabla}
                <h1>TablaMultiplicar</h1>
                <form>
                    <label>Numero</label>
                    <select ref={this.selectNumero} onChange={this.calcularTabla}>
                        {this.state.arrSelect.map((numero, index) => {
                        return (<option key={index}>{numero}</option>)
                    })
                    }
                    </select><br/>
                    
                    <button onClick={this.calcularTabla}>Enviar datos</button>
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
