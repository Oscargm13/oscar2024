import { Component } from "react";
import HijoNumeros from "./HijoNumeros";


class PadreNumeros extends Component {
    state = {
        numeros: [1, 2],
        suma: 0
    }

    sumarNumero = (valor) => {
        this.setState({
            suma: this.state.suma + valor
        })
    }
    
    generarNumeros = () => {
        
        var valor = parseInt(Math.random() * 100) + 1;
        //METERLO AL ARRAY
        this.state.numeros.push(valor);
        this.setState({
            numeros: this.state.numeros
        })
       
    }

    render(){
        return (
            <div>
                <h1 style={{color: "red"}}>PADRE NUMEROS</h1>
                <h2>La suma de los numeros es: {this.state.suma}</h2>
                <button onClick={this.generarNumeros}>Generar número</button>
                {                    
                    this.state.numeros.map((numero, index) => {
                        return (<HijoNumeros key={index} numero={numero} sumarNumero={this.sumarNumero}/>)
                    })
                }
            </div>
        )
    }
    
}

export default PadreNumeros;