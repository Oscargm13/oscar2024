import { Component } from "react";

//PODEMOS DECLARAR METODOS FUERA DE LA CLASE
//DICHOS METODOS NO PUEDEN UTILIZAR NADA DEL component
// Y SE DECLARAN CON function
function metodoExterno() {
    console.log("metodo externo");
}

class Contador extends Component {
    //LAS VARIABLES Y LOS METODOS SE DECLARAN FUERA DEL RENDER
    //NO SE UTILIZAN PALABRAS CLAVE COMO var, let o const
    numero = 1;

    incrementarNumero = () => {
        //PARA PODER ACCEDER A LAS VARIABLES DE LA CLASE DEBEMOS
        //UTILIZAR LA PALABRA CLAVE this
        this.numero = this.numero + 1;
        console.log("Valor del numero: "+ this.numero)
    }

    //VAMOS A DECLARAR UNA VARIABLE DE ESTADO QUE TENDRA EL VALOR DE PROPS

    state = {
        valor: parseInt(this.props.inicio)
    }

    //CREAMOS METODO PARA CAMBIAR DEL state
    incrementarValorState = () => {
        //PARA MODIFICAR LOS ELEMENTOS QUE TENGAMOS DENTRO DE STATE SE UTILIZA setState CON UN JSON DEL OBJETO
        //CON LAS VARIABLES QUE DESEAMOS MODIFICAR
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render() {
        return (
            <div>
                <h1>class</h1>
                <h2 style={{color: "blue"}}>Valor del inicio: {this.props.inicio}</h2>
                <h2 style={{color: "blue"}}>Valor del State: {this.state.valor}</h2>
                {/** LA LLAMADA A LOS METODOS ES MAS SENCILLA, NO NECITAMOS LANDA Y TAMPOCO SE UTILIZAN PARENTESIS*/}
                <button onClick={this.incrementarValorState}>
                    Incrementar state
                </button>
                {/*VAMOS A UTILIZAR UNA FUNCION ANONIMA PARA LLAMAR AL METODO*/}
                <button onClick={ () => {
                    //SI DESEAMOS LLAMAR A UN METODO DE LA CLASE, SE UTILIZA LA PALABRA this
                    this.incrementarNumero();
                    // SI DESEAMOS LLAMAR A UN METODO EXTERNO NO UTILIZAMOS this
                    metodoExterno();
                }}>
                    Incrementar numero
                </button>
            </div>
        )
    }
}

export default Contador;