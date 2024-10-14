import { Component } from "react";

class HijoDeportes extends Component {
    //QUIERO VISUALIZAR EL DEPORTE FAVORITO
    seleccionarFavorito = () => {
        var deporte = this.props.nombre;
        //REALIZAMOS LA LLAMADA AL PADRE ENVIANDO EL DEPORTE
        this.props.mostrarFavorito(deporte);
    }
    render() {
        return (
            <div>
                <h2 style={{color: "blue"}}>{this.props.nombre}</h2>
                <button onClick={this.seleccionarFavorito}>Seleccionar favorito</button>
            </div>
        )
    }
}

export default HijoDeportes;