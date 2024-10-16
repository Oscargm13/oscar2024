import React, { Component } from 'react'
//LIBRERIA DE AXIOS
import axios from 'axios'
import Global from '../Global';

export default class ServicioCustomers extends Component {
    urlCustomers = Global.urlApiCustomers;

    state = {
        customers: []
    }

    loadCustomers = () => {
        console.log("Antes del servicio")
        let request = "customers.json";
        axios.get(this.urlCustomers + request).then(response => {
            console.log("Leyendo servicio");
            this.setState({
                customers: response.data.results
            })
        })
        console.log("despues del servicio")
    }
    //VAMOS A CARGAR LOS DATOS EN EL METODO INICIAL DE LA PAGINA AL INICIAR EL COMPONENT
    componentDidMount = () => {
        console.log("creando component")
        this.loadCustomers();
    }
  render() {
    return (
      <div>
        <h1>Servicio Api Customers</h1>
        <button onClick={this.loadCustomers}>
            Cargar customers
        </button>
        {
            this.state.customers.map((cliente, index) =>{
                return(<h3 key={index} style={{color: "blue"}}>
                    {cliente.contactName}
                </h3>)
            })
        }
      </div>
    )
  }
}
