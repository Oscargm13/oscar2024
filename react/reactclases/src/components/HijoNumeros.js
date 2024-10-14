import { Component } from "react";

class HijoNumeros extends Component {
    

    render(){
        return(
            <div>
                <h2 style={{color: "green"}}>{parseInt(this.props.numero)}</h2>
                <button>Cambiar numero</button>
            </div>
        )
    }
}

export default HijoNumeros;