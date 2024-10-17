import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import Empleados from './Empleados';

export default class departamentos extends Component {
    selectDepartamentos = React.createRef();

    state = {
        departamentos: [],
        idDepartamento: 0
    }
    loaddepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.urlDepartamentos + request;
        console.log(url)
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                departamentos: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loaddepartamentos()
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        let idDepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento: idDepartamento
        })
    }
    render() {
        return (
            <div>
                <h1>departamentos</h1>
                <form>
                    <select ref={this.selectDepartamentos}>
                        {
                            this.state.departamentos.map((departamento, index)=>{
                                return(
                                    <option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
                            )
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>Buscar empleados</button>
                </form>
                <h2>ID departamento: {this.state.idDepartamento}
                    <Empleados idDepartamento={this.state.idDepartamento}/>
                </h2>
            </div>
        )
    }
}
