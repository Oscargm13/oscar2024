import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficio extends Component {
    selectOficios = React.createRef();
    state = {
        empleados: []
    }

    loadOficios = () => {
        let request = "api/Empleados";
        let url = Global.urlEmpleados + request;
        axios.get(url).then(response => {
            console.log("Leyendo")
            var empleados = response.data;
            this.setState({
                empleados: empleados
            })
            var aux = [];
            var  empleados = this.state.empleados;
            for(var i = 0; i <= empleados.length; i++) {
                for(var j = 0; i<= aux.length; i++){
                    if(empleados[i] == aux.length){
                        
                    }
                }
                
            }
        })
    }

    componentDidMount = () => {
        this.loadOficios();
        console.log("Did")
    }
    render() {
        return (
            <div>
                <form>
                    <h1>EmpleadosOficio</h1>
                    <label>Seleccione un oficio</label>
                    <select ref={this.selectOficios}>
                        {
                            this.state.empleados.map((empleado, index) => {
                                console.log(empleado.oficio)
                                return (
                                    <option key={index}>{empleado.oficio}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.loadOficios}>cargar oficios</button>
                </form>

            </div>
        )
    }
}
