import { Component } from "react";

class HijoNumeros extends Component {
    sumarNumeroHijo = () => {
        var num = parseInt(this.props.numero);
        console.log(num)
        this.props.sumarNumero(num);
    }

    render(){
        return(
            <div>
                <h2 style={{color: "green"}}>{parseInt(this.props.numero)}</h2>
                <button onClick={this.sumarNumeroHijo}>Sumar {this.props.numero}</button>
            </div>
        )
    }
}

export default HijoNumeros;