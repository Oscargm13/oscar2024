import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
    deportes = ["Petanca", "Curling", "Poker", "Futbol", "Padel"]
    //NECESITAMOS UN METODO PARA DIBUJAR EL DEPORTE HIJO
    //RECIBIREMOS EL DEPORTE FAVORITO SELECCIONADO EN DICHO METODO
    mostrarFavorito = (deporteSeleccionado) => {
        //MODIFICAMOS EL DEPORTE FAVORITO DE STATE
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    state = {
        favorito: ""
    }
    render() {
        return (
            <div>
                <h1 style={{color: "red"}}>PADRE DEPORTES</h1>
                <h4 style={{background: "yellow"}}>
                    su deporte favorito es: {this.state.favorito}
                </h4>
                {
                    //RECORREMOS TODOS LOS DEPORTES Y DIBUJAMOS ETIQUETAS HIJO POR CADA UNO
                    this.deportes.map((deporte, index) => {
                        return (<HijoDeportes key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>)
                    })
                }
            </div>
        )
    }
}

export default PadreDeportes;