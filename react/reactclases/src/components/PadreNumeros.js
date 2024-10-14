import { Component } from "react";
import HijoNumeros from "./HijoNumeros";


class PadreNumeros extends Component {
    state = {
        numeros: [1, 2]
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
                <button onClick={this.generarNumeros}>Generar número</button>
                {                    
                    this.state.numeros.map((numero, index) => {
                        return (<HijoNumeros key={index} numero={numero}/>)
                    })
                }
            </div>
        )
    }
    
}

export default PadreNumeros;