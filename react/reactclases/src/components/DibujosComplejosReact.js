import { Component } from "react";

class DibujosComplejosReact extends Component {
    //EN STATE TENDREMOS UN CONJUNTO DE NOMBRES
    state = {
        nombres: ["Lucia", "Adrian", "Antonia", "Sofia", "Carlos"]
    }

    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE");
        //actualizamos state
        this.setState({
            nombres: this.state.nombres
        });
    }
    render(){
        return (
            <div>
                <h1>Dibujos complejos react Collection</h1>
                <button onClick={() => this.generarNombre()}>Generar Nombre</button>
                {
                    //ESTO ES CODIGO REACT, ES DIFERENTE A JS
                    //ES CODIGO LOGICO CON SINTAXIS JSX
                    //EL CODIGO LOGICO DEBE CONTENER RETURN
                    this.state.nombres.map((name, index) => {
                        //ESTE CODIGO NUNCA DEBE ESTAR VACIO SIMPRE TIENE QUE DEVOLVER UN return
                        return (<h1 key={index} style={{color: "blue"}}>{name}</h1>)
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosReact;