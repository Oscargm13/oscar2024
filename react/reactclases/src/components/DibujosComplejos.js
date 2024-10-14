import { Component } from "react";

class DibujosComplejos extends Component {

    //VAMOS A DIBUJAR UNA LISTA DE NUMERO EN FORMATO HTML
    //UTILIZANDO UN ARRAY CON <li>
    dibujarNumeros = () =>{
        //DECLARAMOS UN ARRAY
        var lista = [];
        //REALIZAMOS BUCLE PARA RELLENAR
        for (var i = 1; i <= 7; i++){
            var numero = parseInt(Math.random() * 100) + 1;
            //MEDIANTE EL METODO push DEL ARRAY IREMOS RELLENANDO
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

    render() {
        return(
            <div>
                <h1>Dibujos complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )
    }
}

export default DibujosComplejos;