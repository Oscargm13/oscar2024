import React, { Component } from 'react'

export default class FormSimple extends Component {
    //NECESITAMOS DECLARAR LAS VARIABLES DE REFIERENCIA
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    state ={
        user:null
    }

    //PARA PROCESAR LA PETICION NECESITAMOS UN METODO QUE RECIBA Event (e)
    peticionForm = (e) =>{
        //primera linea siempre
        e.preventDefault();
        console.log("Peticion lista")
        let nombre = this.cajaNombre.current.value;
        let edad = this.cajaEdad.current.value;
        this.setState({
            user: {
                nombre:nombre,
                edad: edad
            }
        })
    }
    
  render() {
    return (
        <div>
            <h1>FormSimple</h1>
            {
                this.state.user &&
                (
                    <h2>
                        Nombre: {this.state.user.nombre}, Edad: {this.state.user.edad}
                    </h2>
                )
            }
            <form onSubmit={this.peticionForm}>
                <label>Nombre</label>
                <input type='text' ref={this.cajaNombre}/><br/>
                <label>edad</label>
                <input type='text' ref={this.cajaEdad}/><br/>
                <button>Enviar datos</button>
            </form>
        </div>
    )
  }
}